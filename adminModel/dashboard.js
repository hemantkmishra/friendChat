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
        let filter = ''
        if(name){
            filter =`where name ="${name}"`
        }

    	return new Promise((resolve, reject) => {
    		let q =`SELECT * FROM persons ${filter}`;
    		readDB.query(q, (err,result)=>{
    			if(err){
    				reject(err)
    			}
    			
    			return resolve(result);
    		})
    	})
    }

    static setSingleData(name,email,password){
        return new Promise((resolve,reject) => {
            let query=`insert into persons(name,email,password) values("${name}","${email}","${password}")`;
            readDB.query(query,(err,result)=>{
                if (err) {
                    reject(err)
                }
                console.log(__line,result);
                return resolve(result);

            })
        })

    }
}
module.exports = dashboard