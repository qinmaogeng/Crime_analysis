var webServer = require('./services/web-server.js');
var dbConfig = require('./config/database.js');
var database = require('./services/database.js');


database.initialize();
webServer.initialize();
