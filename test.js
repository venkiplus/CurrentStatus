var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];
var loginId = path.join("domainName",userName);
console.log(loginId);
