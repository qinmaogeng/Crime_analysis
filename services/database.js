var oracledb = require('oracledb');
var dbConfig = require('../config/database.js');

function initialize(){
	var pool = oracledb.createPool(dbConfig.AnimalPool);
	console.log('pool created');
}

module.exports.initialize = initialize;

function simpleExecute(statement, binds = [], opts = {}){
	return new Promise( async(resolve, reject) => {var conn;
	opts.outFormat = oracledb.OBJECT;
    	opts.autoCommit = true;
	conn = await oracledb.getConnection();
	var result = await conn.execute(statement,binds, opts);
	resolve(result);}
	)
}

module.exports.simpleExecute = simpleExecute;
