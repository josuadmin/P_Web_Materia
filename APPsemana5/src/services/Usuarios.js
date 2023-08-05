const {conexion} = require('../lib/cn_postgres')
class Usuarios{

    async find(){
        const client = await conexion();
        const sql = `select * from users`;
        const rta = await client.query(sql);
        return rta.rows;
    }
}


module.exports = {Usuarios}