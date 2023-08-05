const {Client} = require('pg')

const conexion = async function(){
    const client = new Client({
        host: 'localhost',
        database: 'recetas',
        user: 'postgres',
        password: 'secret',
        port: 5432
    })
    await client.connect();
    return client;
}

module.exports = {conexion};