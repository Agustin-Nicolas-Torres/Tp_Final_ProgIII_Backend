const pool = require('./app/connection.js');

async function probarConexion() {
    try {
        const resultado = await pool.query('SELECT NOW()');
        console.log('Conectado');
        console.log(resultado.rows);
    } catch (error) {
        console.error('Error:', error);
    }
}

probarConexion();