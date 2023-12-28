import{_ as e,o as i,c as a,R as t}from"./chunks/framework.6Daji7ki.js";const k=JSON.parse('{"title":"Auth Service Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"services/auth.md","filePath":"services/auth.md"}'),s={name:"services/auth.md"},n=t('<h1 id="auth-service-documentation" tabindex="-1">Auth Service Documentation <a class="header-anchor" href="#auth-service-documentation" aria-label="Permalink to &quot;Auth Service Documentation&quot;">​</a></h1><p>The <code>AuthService</code> is responsible for handling authentication-related operations within the AI-Res server.</p><h2 id="table-of-contents" tabindex="-1">Table of Contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of Contents&quot;">​</a></h2><ul><li><a href="#class-authservice">Class: AuthService</a><ul><li><a href="#methods">Methods</a><ul><li><a href="#getstatus">getStatus</a></li><li><a href="#generaterandomtoken">generateRandomToken</a></li><li><a href="#signup">signup</a></li><li><a href="#confirmemail">confirmEmail</a></li><li><a href="#generateverificationcode">generateVerificationCode</a></li><li><a href="#sendverificationcode">sendVerificationCode</a></li><li><a href="#signin">signin</a></li></ul></li></ul></li></ul><h2 id="class-authservice" tabindex="-1">Class: AuthService <a class="header-anchor" href="#class-authservice" aria-label="Permalink to &quot;Class: AuthService&quot;">​</a></h2><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><h4 id="getstatus" tabindex="-1"><code>getStatus</code> <a class="header-anchor" href="#getstatus" aria-label="Permalink to &quot;`getStatus`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): string</span></span></code></pre></div><p>Retrieves the status of the authentication service.</p><ul><li><strong>Returns:</strong><ul><li><code>string</code>: A string indicating the status of the authentication service.</li></ul></li></ul><h4 id="generaterandomtoken" tabindex="-1"><code>generateRandomToken</code> <a class="header-anchor" href="#generaterandomtoken" aria-label="Permalink to &quot;`generateRandomToken`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateRandomToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): string</span></span></code></pre></div><p>Generates a random token by combining a random string and a timestamp.</p><ul><li><strong>Returns:</strong><ul><li><code>string</code>: The generated random token.</li></ul></li></ul><h4 id="signup" tabindex="-1"><code>signup</code> <a class="header-anchor" href="#signup" aria-label="Permalink to &quot;`signup`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dto: AuthDto): ForbiddenException </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User</span></span></code></pre></div><p>Signs up a new user with the provided authentication data.</p><ul><li><p><strong>Parameters:</strong></p><ul><li><code>dto</code> (AuthDto): The authentication data for the new user.</li></ul></li><li><p><strong>Returns:</strong></p><ul><li><code>User</code>: The created user object.</li></ul></li><li><p><strong>Throws:</strong></p><ul><li><code>ForbiddenException</code>: If the username is already taken, the password is less than 8 characters, name or username is less than 1 character, or if the email already exists.</li></ul></li></ul><h4 id="confirmemail" tabindex="-1"><code>confirmEmail</code> <a class="header-anchor" href="#confirmemail" aria-label="Permalink to &quot;`confirmEmail`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirmEmail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userEmail: string, userGivenCode: string): ForbiddenException </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User</span></span></code></pre></div><p>Confirms the email of a user by comparing the verification code.</p><ul><li><p><strong>Parameters:</strong></p><ul><li><code>userEmail</code> (string): The email of the user.</li><li><code>userGivenCode</code> (string): The verification code provided by the user.</li></ul></li><li><p><strong>Returns:</strong></p><ul><li><code>User</code>: The updated user object if the verification code is valid.</li></ul></li><li><p><strong>Throws:</strong></p><ul><li><code>ForbiddenException</code>: If no verification code is found, or if the verification code is invalid.</li></ul></li></ul><h4 id="generateverificationcode" tabindex="-1"><code>generateVerificationCode</code> <a class="header-anchor" href="#generateverificationcode" aria-label="Permalink to &quot;`generateVerificationCode`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateVerificationCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): string</span></span></code></pre></div><p>Generates a random verification code.</p><ul><li><strong>Returns:</strong><ul><li><code>string</code>: The generated verification code.</li></ul></li></ul><h4 id="sendverificationcode" tabindex="-1"><code>sendVerificationCode</code> <a class="header-anchor" href="#sendverificationcode" aria-label="Permalink to &quot;`sendVerificationCode`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendVerificationCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(email: string, code: string): boolean</span></span></code></pre></div><p>Sends a verification code to the provided email address.</p><ul><li><p><strong>Parameters:</strong></p><ul><li><code>email</code> (string): The email address to send the verification code to.</li><li><code>code</code> (string): The verification code to send.</li></ul></li><li><p><strong>Returns:</strong></p><ul><li><code>boolean</code>: A boolean indicating whether the code was successfully sent.</li></ul></li></ul><h4 id="signin" tabindex="-1"><code>signin</code> <a class="header-anchor" href="#signin" aria-label="Permalink to &quot;`signin`&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dto: AuthDto): ForbiddenException </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> User</span></span></code></pre></div><p>Signs in a user with the provided authentication data.</p><ul><li><p><strong>Parameters:</strong></p><ul><li><code>dto</code> (AuthDto): The authentication data for the user.</li></ul></li><li><p><strong>Returns:</strong></p><ul><li><code>User</code>: The signed-in user object.</li></ul></li><li><p><strong>Throws:</strong></p><ul><li><code>ForbiddenException</code>: If no user with the provided email is found or if the password is invalid.</li></ul></li></ul>',34),o=[n];function l(r,d,c,h,p,u){return i(),a("div",null,o)}const m=e(s,[["render",l]]);export{k as __pageData,m as default};
