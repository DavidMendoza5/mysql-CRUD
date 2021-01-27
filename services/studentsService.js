const exec = require('../repository/execute')

const postStudentsOnDB = (data) => {
    let data_id = parseInt(data.id)
    let sql = `INSERT INTO info (id, nombre, apellido) VALUES (${data_id}, '${data.nombre}', '${data.apellido}')`
    return exec.execute(sql)
}

const getStudentsOnDB = () => {
    let sql = 'SELECT * FROM info'
    return exec.execute(sql)
}

const updateStudentOnDB = (id, data) => {
    let data_id = parseInt(id)
    let sql = `UPDATE info SET nombre='${data.nombre}', apellido='${data.apellido}' WHERE id=${data_id}`
    return exec.execute(sql)
}

const deleteStudentOnDB = (id) => {
    let data_id = parseInt(id)
    let sql = `DELETE FROM info WHERE id=${data_id}`
    return exec.execute(sql)
}

module.exports = {
    postStudentsOnDB,
    getStudentsOnDB,
    updateStudentOnDB,
    deleteStudentOnDB
}