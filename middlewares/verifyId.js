const { getStudentsOnDB } = require('../services/studentsService')

const verifyID = async (req, resp, next) => {
    let { params } = req
    let info = await getStudentsOnDB()
    let data = info.splice(0,1)
    let flag = false
    let idData = data[0]
    idData.map(student => {
        if(student.id === parseInt(params.id) ) {
            flag = true
        }
    })
    
    if(flag) {
        next()
    } else {
        resp.status(404).send({message: 'Not found'})
    }
}

module.exports = verifyID