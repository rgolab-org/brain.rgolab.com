import{_ as s,c as i,o as a,U as t}from"./chunks/framework.QTVU6t_u.js";const E=JSON.parse('{"title":"expose local port to remote (like ngrok)","description":"","frontmatter":{},"headers":[],"relativePath":"security/cheats-sheet.md","filePath":"security/cheats-sheet.md"}'),n={name:"security/cheats-sheet.md"},e=t(`<h1 id="expose-local-port-to-remote-like-ngrok" tabindex="-1">expose local port to remote (like ngrok) <a class="header-anchor" href="#expose-local-port-to-remote-like-ngrok" aria-label="Permalink to &quot;expose local port to remote (like ngrok)&quot;">​</a></h1><p><a href="https://tunnel.pyjam.as/" target="_blank" rel="noreferrer">https://tunnel.pyjam.as/</a><a href="https://gitlab.com/pyjam.as/tunnel" target="_blank" rel="noreferrer">https://gitlab.com/pyjam.as/tunnel</a></p><p>Start tunnel:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://tunnel.pyjam.as/8080</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tunnel.conf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./tunnel.conf</span></span></code></pre></div><p>Stop tunnel:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> down</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./tunnel.conf</span></span></code></pre></div><h1 id="curl-url-globbing" tabindex="-1">curl URL globbing <a class="header-anchor" href="#curl-url-globbing" aria-label="Permalink to &quot;curl URL globbing&quot;">​</a></h1><p><a href="https://everything.curl.dev/cmdline/globbing" target="_blank" rel="noreferrer">https://everything.curl.dev/cmdline/globbing</a></p><p>If no command injection but we can control url, <code>file</code> and <code>%</code> is blocked on WAF we can bypass:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://host/curl?url=[f-f][i-i][l-l][e-e]:///app/flag.txt\`</span></span></code></pre></div><p>#bypass #waf #curl</p><h1 id="get-files-if-browser-doesn-t-exist-on-the-machine" tabindex="-1">get files if browser doesn&#39;t exist on the machine <a class="header-anchor" href="#get-files-if-browser-doesn-t-exist-on-the-machine" aria-label="Permalink to &quot;get files if browser doesn&#39;t exist on the machine&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __wget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	read</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proto</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> \${1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">////</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> }</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	DOC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//:*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//*:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/dev/tcp/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${HOST}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${PORT}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -en</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;GET \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DOC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} HTTP/1.0\\r\\nHost: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HOST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\\r\\n\\r\\n&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&amp;3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	(while read line; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		[[ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]] &amp;&amp; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">break</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	done</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	exec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 3&gt;&amp;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>#wget #download #bash #function #curl #get</p><h1 id="unzip-cracking" tabindex="-1">unzip cracking <a class="header-anchor" href="#unzip-cracking" aria-label="Permalink to &quot;unzip cracking&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fcrackzip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/wordlists/rockyou.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.zip</span></span></code></pre></div><p>#password #cracking #zip #archive #fcrackzip</p><h1 id="python-subprocess-command-injection" tabindex="-1">python subprocess command injection <a class="header-anchor" href="#python-subprocess-command-injection" aria-label="Permalink to &quot;python subprocess command injection&quot;">​</a></h1><p>Using <code>shell=True</code> is dangerous because it propagates current shell settings and variables.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subprocess  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo &amp;&amp; cat /etc/passwd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subprocess.call(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grep -R </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(user_input), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">shell</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cat /etc/passwd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subprocess.run([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user_input], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">shell</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Not vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cat /etc/passwd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subprocess.Popen([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ls&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-l&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user_input])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo &amp;&amp; cat /etc/passwd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.system(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grep -R </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(user_input))  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo &amp;&amp; cat /etc/passwd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.popen(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ls -l &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_input)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/foo/bar&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.spawnlpe(os.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">P_WAIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user_input, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], os.environ)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vulnerable  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cat /etc/passwd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # value supplied by user  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.spawnve(os.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">P_WAIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/bin/bash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user_input], os.environ)</span></span></code></pre></div><p>#python #commandinjection</p><h1 id="double-dash-in-bash" tabindex="-1">double dash in bash <a class="header-anchor" href="#double-dash-in-bash" aria-label="Permalink to &quot;double dash in bash&quot;">​</a></h1><p>A double dash (<code>--</code>) is used in most Bash built-in commands and many other commands to signify the end of command options, after which only positional arguments are accepted.</p><p>#bash</p><h1 id="tmux" tabindex="-1">tmux <a class="header-anchor" href="#tmux" aria-label="Permalink to &quot;tmux&quot;">​</a></h1><p><a href="https://gist.github.com/andreyvit/2921703" target="_blank" rel="noreferrer">https://gist.github.com/andreyvit/2921703</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NAME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attach</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NAME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(Prefix) - CTRL+A</span></span>
<span class="line"><span>(Prefix) + Hold &lt;Arrows&gt; - resize window</span></span>
<span class="line"><span>(Prefix) + &lt;Arrows&gt; - change focus window</span></span>
<span class="line"><span>(Prefix) + % - split verticaly</span></span>
<span class="line"><span>(Prefix) + &quot; - spint horizontally</span></span>
<span class="line"><span>(Prefix) + , - rename window</span></span></code></pre></div><p>#tmux #terminal</p><h1 id="strace" tabindex="-1">strace <a class="header-anchor" href="#strace" aria-label="Permalink to &quot;strace&quot;">​</a></h1><p><code>strace -ff -s 10000 -e execve -tt ./app</code><code>-ff</code> means follow child process <code>-s 10000</code> show strings shorter than 1000 <code>-e param</code> find function which is used <code>-tt</code> show time <code>-p pid</code> attach to the process</p><h1 id="strace-for-multithread-apps" tabindex="-1">strace for multithread apps <a class="header-anchor" href="#strace-for-multithread-apps" aria-label="Permalink to &quot;strace for multithread apps&quot;">​</a></h1><p>like normal but we have to restart childs on the beginning <code>kill -HUP pid</code> - send signal kill children and start again <code>kill -USR1 pid</code> - kill childrens after final their jobs</p><h1 id="pyjail" tabindex="-1">pyjail <a class="header-anchor" href="#pyjail" aria-label="Permalink to &quot;pyjail&quot;">​</a></h1><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__import__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;os&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).system(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ls&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h1 id="rest-api-security" tabindex="-1">rest API security <a class="header-anchor" href="#rest-api-security" aria-label="Permalink to &quot;rest API security&quot;">​</a></h1><p><a href="https://devszczepaniak.pl/projektowanie-rest-api/" target="_blank" rel="noreferrer">https://devszczepaniak.pl/projektowanie-rest-api/</a><a href="https://github.com/shieldfy/API-Security-Checklist/blob/master/README-pl.md" target="_blank" rel="noreferrer">https://github.com/shieldfy/API-Security-Checklist/blob/master/README-pl.md</a></p><p>#rest #api #restapi</p><h1 id="check-open-port-via-proxy" tabindex="-1">check open port via proxy <a class="header-anchor" href="#check-open-port-via-proxy" aria-label="Permalink to &quot;check open port via proxy&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ports.txt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ffuf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://proxy_server:proxy_port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:FUZZ</span></span></code></pre></div><p>#proxy #squid #portscan</p><h1 id="proxy-ssh-via-other-ssh-server" tabindex="-1">proxy ssh via other ssh server <a class="header-anchor" href="#proxy-ssh-via-other-ssh-server" aria-label="Permalink to &quot;proxy ssh via other ssh server&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -J</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jump_hos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@server</span></span></code></pre></div><p>#proxy #ssh</p><h1 id="some-other-cheat" tabindex="-1">some other cheat <a class="header-anchor" href="#some-other-cheat" aria-label="Permalink to &quot;some other cheat&quot;">​</a></h1><p>adfasdfasfdasdfas dfasdfas dfa</p><p>#othertag</p><h1 id="next-cheat" tabindex="-1">next cheat <a class="header-anchor" href="#next-cheat" aria-label="Permalink to &quot;next cheat&quot;">​</a></h1><p>adfasdfs</p>`,49),h=[e];function p(l,k,r,d,o,c){return a(),i("div",null,h)}const y=s(n,[["render",p]]);export{E as __pageData,y as default};
