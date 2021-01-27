const services = require('../services/studentsService')

const postStudents = async (body) => {
    let data = await services.postStudentsOnDB(body)
    return data
}

const getStudents = async () => {
    let data = await services.getStudentsOnDB()
    return data
}

const updateStudent = async (id, body) => {
    let data = await services.updateStudentOnDB(id, body)
    return data
}

const deleteStudent = async (id) => {
    let data = await services.deleteStudentOnDB(id)
    return data
}

module.exports = {
    postStudents,
    getStudents,
    updateStudent,
    deleteStudent
}