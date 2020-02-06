var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');

url = process.env.URL || 'ldap://localhost:389';
bindDN = process.env.BINDDN || 'cn=admin,dc=domain';
bindCredentials = process.env.BINDCREDENTIALS || 'password';
searchBase = process.env.SEARCHBASE ||  'ou=Users,dc=domain';
searchFilter = process.env.SEARCHFILTER || '(uid={{username}})';

 
var OPTS = {
  server: {
    url: url,
    bindDN:  bindDN,
    bindCredentials: bindCredentials,
    searchBase: searchBase,
    searchFilter: searchFilter
  }
};
 

port = process.env.PORT || 3000;

var app = express();
 
passport.use(new LdapStrategy(OPTS));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
 
app.post('/login', passport.authenticate('ldapauth', {session: false}), function(req, res) {
  res.send({status: 'ok'});
});
 
app.listen(port);
console.log('Server listen on port: ' + port);