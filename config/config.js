require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "f47qfgaxx78y6jn2",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
     "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
}
};