var pg=require('pg');




// var config = {
// user:'postgres',
// database:'PACS',//first connection folder
// password:'postgres',
// host:'192.168.168.4',
// port:5432,
// max:10000,
// idleTimeoutMillis: 30000,
// };

var config = {
user:'postgres',
database:'postgres',//first connection folder
password:'NURTURE_123',
host:'192.168.168.6',
port:5432,
max:10000,
idleTimeoutMillis: 30000,
};

var pool = new pg.Pool(config);
pool.connect(function(err, client, done) {
	if(err) {
	   console.log("error in connecting",err)
	}
	done();
});

 module.exports = pool;


//  host: 'localhost',

//   user: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,
//   database: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,
//   password: null,
//   connectionString: undefined,
//   port: 5432,
//   rows: 0,
//   binary: false,
//   max: 10,

//   idleTimeoutMillis: 30000,

//   client_encoding: '',

//   ssl: false,

//   application_name: undefined,
//   fallback_application_name: undefined,

//   parseInputDatesAsUTC: false,
//   statement_timeout: false,
//   query_timeout: false,
//   connect_timeout: 0,
//   keepalives: 1,
//   keepalives_idle: 0