# Not just media
I downloaded a video from the internet, but I think I got the wrong subtitles.
Note: The flag is all lowercase.

# Solution
```bash
binwalk --dd='.*' chal.mkv
```

```text
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             EBML file, Matroska data
524908        0x8026C         MySQL MISAM index file Version 6
2833207       0x2B3B37        MySQL MISAM index file Version 11
6141253       0x5DB545        MySQL MISAM index file Version 1
7175715       0x6D7E23        Copyright string: "Copyright 2022 The Noto Project Authors (https://github.com/notofonts/latin-greek-cyrillic)"
7405702       0x710086        mcrypt 2.2 encrypted data, algorithm: 3-WAY, mode: CBC, keymode: 4bit
17855364      0x1107384       lrzip compressed data
```


Based on the binwalk output you've shared, there is an encrypted data file at the offset 7405702 (0x710086) which was encrypted using the mcrypt 2.2 tool, with the 3-WAY algorithm, CBC mode, and a 4bit keymode. However, the encryption key itself is not present in this output.

```bash
dd if=chal.mkv bs=1 skip=7405702 of=encryptedfile
mcrypt -d -a 3-WAY -m CBC -k [your-key] encryptedfile
```

Extract the MySQL MYISAM index file:
```bash
dd if=chal.mkv bs=1 skip=524908 of=indexfile1
dd if=chal.mkv bs=1 skip=2833207 of=indexfile2
dd if=chal.mkv bs=1 skip=6141253 of=indexfile3
```

mkvinfo shows tracks and track with id 2 is the subtitles 
```bash
mkvinfo chal.mkv
```
we can extract subtitles and font by
```bash
mkvextract tracks chal.mkv 2:subtitles.srt
mkvextract attachments chal.mkv 2:"FakeFont_0.ttf"
```

The Chinese sentence "我們歡迎您接受一生中最大的挑戰，即嘗試理解這段文字的含義" translates to English as "We welcome you to accept the biggest challenge in your life, that is, to try to understand the meaning of this text."

Now we can try to open FakeFont by `FontForge` and try to preview tex using the font by opening `Window > New Metrics Window`

![](https://rgolab.com/uploads/6FF807AF-CE77-4ECD-8885-CA3A1F0865C8.png)

# Flag
`irisctf{mkvm3rg3_my_b3l0v3d}`

# Hashtags
#forensics #font #binwalk #mkvextract #mkvinfo