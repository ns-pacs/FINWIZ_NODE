var pg=require('pg');

// var config = {
// user:'postgres',
// database:'PACS_HRM',//first connection folder
// password:'postgres',
// host:'192.168.168.4',
// port:5432,
// max:10000,
// idleTimeoutMillis: 30000,
// };

var config = {
user:'postgres',
database:'postgres',//first connection folder
password:'nurture@123',
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