# skat's SD Card
"Do I love being manager? I love my kids. I love real estate. I love ceramics. I love chocolate. I love computers. I love trains."

# Solution
After extracting file we can see it's an ext4 filesystem so we can mount it:
```bash
❯ file mmcblk0p2.img
mmcblk0p2.img: Linux rev 1.0 ext4 filesystem data, UUID=4aa56689-dcb4-4759-90e6-179beae559ac, volume name "rootfs" (needs journal recovery) (extents) (large files)
❯ mkdir files
❯ mount -t ext4 -o loop mmcblk0p2.img files/
```
we can find `.ssh/id_rsa` and `.bash_history` in the `/home/skat` directory

#### **`.bash_history`**
```text
...
tree -a
ssh-keygen 
cat .ssh/id_rsa.pub
cd Downloads/
git clone
git clone git@github.com:IrisSec/skats-interesting-things.git
cd skats-interesting-things/
ls
cat README.md 
cat article6.txt 
cd ../
ls
rm -rf skats-interesting-things/
...
```

After that I tried to clone the repo but id_rsa is password protected which can be cracked by `john`:
```bash
❯ ssh2john id_rsa >id_rsa.hash  
❯ john --wordlist=/usr/share/wordlists/rockyou.txt id_rsa.hash
```

then finally we can clone the repo
```bash
❯ GIT_SSH_COMMAND="ssh -i ./id_rsa -F /dev/null" git clone git@github.com:IrisSec/skats-interesting-things.git
```
after that we can check the repo and the history
```bash
git log
```
and we see `article4.txt` was modified and flag was removed from there


# Flag
`irisctf{0h_cr4p_ive_left_my_k3ys_out_4nd_ab0ut}`

# Hashtags
#git #john #id_rsa #cracking #forensics