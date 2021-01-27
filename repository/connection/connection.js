const mysql = require('mysql2/promise')

const connection = () => {
        return mysql.createConnection({
            host:process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DB,
            password: process.env.DB_PASSWORD
        })
}

const getConnection = () => {
    return connection()
}

module.exports = {
    connection,
    getConnection
}