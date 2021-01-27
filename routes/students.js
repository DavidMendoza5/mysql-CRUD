const express = require('express')
const router = express.Router()
const ctrStudents = require('../controllers/students')
const validateInfo = require('../middlewares/validateStudentInfo')
const verifyId = require('../middlewares/verifyId')

router.post('/', validateInfo, async (req, resp) => {
    let { body } = req
    let status = 201, message = 'Student created'
    let data = await ctrStudents.postStudents(body)
    
    if(!data) {
        status = 400
        message = 'Error al guardar los datos'
    }

    return resp.status(status).send({message: message, data: body})
})

router.get('/', async (req, resp) => {
    let status = 200, message = 'Success'
    let data = await ctrStudents.getStudents()
    
    if(!data) {
        status = 404
        message = 'Error finding students'
    }

    return resp.status(status).send({msg: message, data: data[0]})
})

router.put('/:id', verifyId, async (req, resp) => {
    let { body, params } = req
    let status = 200, message = 'Data updated'
    let data = await ctrStudents.updateStudent(params.id, body)
    
    if(!data) {
        status = 400
        message = 'Error al guardar los datos'
    }

    return resp.status(status).send({msg: message, data: body})
})

router.delete('/:id', verifyId, async (req, resp) => {
    let { params } = req
    let status = 200, message = 'Student eliminated'
    let data = await ctrStudents.deleteStudent(params.id)

    if(!data) {
        status = 400
        message = 'Error al eliminar al estudiante'
    }

    return resp.status(status).send({msg: message, data: data})
})

module.exports = router