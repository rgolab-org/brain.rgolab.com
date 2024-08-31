# skat's Network History 
"I love cats."

Note: this challenge is a continuation to Forensics/skat's SD Card. You are dealing with the same scenario. skats-sd-card.tar.gz is the same file from that challenge (SHA-1: 4cd743d125b5d27c1b284f89e299422af1c37ffc).


# Solution
we have a pcap file

inside we can see IEEE 802.11 protocol

the communication is encrypted

but in the `/etc/NetworkManager/system-connections/skatnet.mconnection` we can find SSID and PSK

so we can start to generate WPA PSK for WireShark

#### **`generate_psk.py`**
```python
import hashlib, binascii

def generate_psk(ssid, passphrase):
    # The PSK is derived as the PBKDF2 hash of the passphrase with the SSID as the salt
    psk = hashlib.pbkdf2_hmac('sha1', passphrase.encode('utf-8'), ssid.encode('utf-8'), 4096, 32)
    return binascii.hexlify(psk).decode('utf-8')

ssid = 'skatnet'
passphrase = 'agdifbe7dv1iruf7ei2v5op'
print(generate_psk(ssid, passphrase))
```

```bash
❯ python3 generate_psk.py
eaf45daf5cbb92e82c5360867100797df60458a39b34de3fd866f2a485073652
```

after setting this
![](https://rgolab.com/uploads/8CFE45C5-AEE0-473F-B52D-71128EF3D624.png)

and in TLS 

![](https://rgolab.com/uploads/27DBDD9D-2C0D-49B2-8AD6-9B0696DBF5C2.png)

we can start to search for `iris` in the whole decrypted traffic and we have the flag
![](https://rgolab.com/uploads/CACA93F6-C578-4C20-A107-D053D5654465.png)

# Flag
<code v-if="false">`irisctf{i_sp3nd_m0st_of_my_t1me_0n_th3_1nt3rnet_w4tch1ng_c4t_v1d30s}`</code>
<code v-else>`irisctf{i_sp3nd_m0st_of***********************tch1ng_c4t_v1d30s}`</code>

# Hashtags
#wireshark #decrypt #wpapsk #802.11 #pcap #network