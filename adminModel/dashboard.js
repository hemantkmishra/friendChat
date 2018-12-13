let readDB = require('../scripts/db');
const to = require('await-to-js').default;

const getData = async () => {
    let [err, result] =  await to(readDB.query("select * from persons;"));
        console.log(__line, result)
        if (err) {
            return err;
        }
        if (result) {
            return result
        }
}


module.exports = {
	getData
};