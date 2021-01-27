const { getConnection } = require('./connection/connection')

const execute = async (sql) => {
    try{
        return (await getConnection()).execute(sql)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    execute
}