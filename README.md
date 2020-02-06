
Need a ldap server with users

```
npm install
```

Set enviroment variables for config node.

URL=ldap://localhost:389

BINDDN=cn=admin,dc=domain

BINDCREDENTIALS=password

SEARCHBASE=ou=Users,dc=domain

SEARCHFILTER=(uid={{username}})

```
node server.js
```

```
curl --location --request POST 'localhost:3000/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=user1' \
--data-urlencode 'password=password1'
```
