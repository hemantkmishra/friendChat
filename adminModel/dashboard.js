const to = require('await-to-js').default;
let models = require('./models');
let readDB = require('../scripts/db');
let mysql = require('mysql');


class dashboard extends models {

    static getData() {
        return new Promise((resolve, reject) => {
            readDB.query('SELECT * FROM persons', (err, result) => {
                if (err) {
                    reject(err)
                }
                console.log(__line,result);
                return resolve(result);
            });
        });
    }

    static getSingleNameData(name){
    	return new Promise((resolve, reject) => {
    		let q =`SELECT * FROM persons where name ="${name}"`;
    		readDB.query(q, (err,result)=>{
    			if(err){
    				reject(err)
    			}
    			console.log(__line,result[0].name)
    			return resolve(result);
    		})
    	})
    }
}
module.exports = dashboard