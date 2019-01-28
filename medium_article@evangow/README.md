# Express <!-- omit in toc -->
- [Step by Step](#step-by-step)
  - [Initialize Project](#initialize-project)
  - [Install Express](#install-express)
  - [cURL Commands](#curl-commands)
- [Packages One by One](#packages-one-by-one)


From the Article 
[Medium Article](https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d)

# Step by Step
## Initialize Project
```
npm init -y
```
## Install Express
npm i --save express

## cURL Commands
```bash
# Send GET and verbose the Headers
curl -X GET http://localhost:3000 -v

# Send GET and Save the Cookie File
curl -X GET http://localhost:3000 -c cookie-file.txt

# Send GET with Cookie File
curl -X GET http://localhost:3000 -b cookie-file.txt

# Send GET with Cookie File and verbose the cookie header
curl -X GET http://localhost:3000 -b cookie-file.txt -v

# Send Post with json
# Windows
# curl -X POST  http://localhost:3000/login -b cookie-file.txt -H "Content-Type: application/json" -d "{\"email\":\"test@test.com\", \"password\":\"password\"}"
curl -X POST http://localhost:3000/login -b cookie-file.txt -H 'Content-Type: application/json' -d '{"email":"test@test.com", "password":"password"}'

# Send User and Password to autenticate
curl -X POST  http://localhost:3000/login -c cookie-file.txt -H 'Content-Type: application/json' -d '{"email":"test@test.com", "password":"password"}'

```

# Packages One by One
```console
npm install express
npm install uuid
npm install express-session
npm install session-file-store 
npm install passport passport-local
```