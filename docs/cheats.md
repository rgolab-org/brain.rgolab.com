# Cheats
The place where I note useful cheats.


# Expose local port to the internet

Start tunnel:
```bash
curl https://tunnel.pyjam.as/8080 > tunnel.conf && wg-quick up ./tunnel.conf
```

Stop tunnel:
```bash
wg-quick down ./tunnel.conf
```

* https://tunnel.pyjam.as/
* https://gitlab.com/pyjam.as/tunnel

#tunnel #ngrok #pyjam


# URL globbing with curl

If no command injection but we can control url, `file` and `%` is blocked on WAF we can bypass:

```bash
curl http://host/curl?url=[f-f][i-i][l-l][e-e]:///app/flag.txt`
```

* https://everything.curl.dev/cmdline/globbing

#bypass #waf #curl


# Download files if browser doesn't exist

```bash
function __wget() {
	read proto server path <<<$(echo ${1//// })
	DOC=/${path// //}
	HOST=${server//:*}
	PORT=${server//*:}
	exec 3<>/dev/tcp/${HOST}/${PORT}
	echo -en "GET ${DOC} HTTP/1.0\r\nHost: ${HOST}\r\n\r\n" >&3
	(while read line; do
		[[ "$line" == $'\r' ]] && break
	done && cat) <&3
	exec 3>&-
}
```

#wget #download #bash #function #curl #get


# Cracking ZIP archive

```bash
fcrackzip -u -D -p /usr/share/wordlists/rockyou.txt file.zip
```

#password #cracking #zip #archive #fcrackzip


# Python subprocess command injection

Using `shell=True` is dangerous because it propagates current shell settings and variables.

```python
import subprocess  
import sys  
  
# Vulnerable  
user_input = "foo && cat /etc/passwd" # value supplied by user  
subprocess.call("grep -R {} .".format(user_input), shell=True)  
  
# Vulnerable  
user_input = "cat /etc/passwd" # value supplied by user  
subprocess.run(["bash", "-c", user_input], shell=True)  
  
# Not vulnerable  
user_input = "cat /etc/passwd" # value supplied by user  
subprocess.Popen(['ls', '-l', user_input])

# Vulnerable  
user_input = "foo && cat /etc/passwd" # value supplied by user  
os.system("grep -R {} .".format(user_input))  
  
# Vulnerable  
user_input = "foo && cat /etc/passwd" # value supplied by user  
os.popen("ls -l " + user_input)

# Vulnerable  
user_input = "/foo/bar" # value supplied by user  
os.spawnlpe(os.P_WAIT, user_input, ["-a"], os.environ)  
  
# Vulnerable  
user_input = "cat /etc/passwd" # value supplied by user  
os.spawnve(os.P_WAIT, "/bin/bash", ["-c", user_input], os.environ)
```

#python #commandinjection


# Double dash in bash

A double dash (`--`) is used to signify the end of command options, after which only positional arguments are accepted.

#bash


# tmux

[https://gist.github.com/andreyvit/2921703](https://gist.github.com/andreyvit/2921703)
```bash
tmux new -s NAME
tmux attach -t NAME
tmux ls
```

```
(Prefix) - CTRL+A
(Prefix) + Hold <Arrows> - resize window
(Prefix) + <Arrows> - change focus window
(Prefix) + % - split verticaly
(Prefix) + " - spint horizontally
(Prefix) + , - rename window
```

#tmux #terminal


# strace

`strace -ff -s 100 -e execve -tt ./app`

* `-ff` means follow child process
* `-s 100` show strings shorter than 100
* `-e param` find function which is used
* `-tt` show time
* `-p pid` attach to the process

#strace


# strace for multithread apps

like normal but we have to restart childs on the beginning
`kill -HUP pid` - send signal kill children and start again
`kill -USR1 pid` - kill childrens after final their jobs

#strace


# pyjail

```python
__import__("os").system("ls")
```

#pyjail #python


# REST API security

* https://devszczepaniak.pl/projektowanie-rest-api/
* https://github.com/shieldfy/API-Security-Checklist/blob/master/README-pl.md

#rest #api #restapi


# Scan open ports via proxy

```bash
cat ports.txt | ffuf -w - -x http://proxy_server:proxy_port -u http://127.0.0.1:FUZZ
```

#proxy #squid #portscan


# Proxy SSh via jumphost

```bash
ssh -J <jump_host> user@server
```

#proxy #ssh #jumphost
