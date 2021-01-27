
const validateStudentInfo = (req, resp, next) => {
    let body_json = JSON.parse(JSON.stringify(req.body))
    let validate = validateInfo(body_json)

    if(validate.ok ) {
        next()
    } else {
        resp.status(400).send({message: validate.message})
    }
}

const validateInfo = (body) => {
    let validation = {
        ok: false,
        message: ''
    }

    if(body.hasOwnProperty('id') && body.id > 0) {
        if(body.hasOwnProperty('nombre') && body.nombre.length > 0 && body.nombre.length < 26) {
            if(body.hasOwnProperty('apellido') && body.apellido.length > 0 && body.apellido.length < 26) {
                validation.ok = true
            } else {
                validation.message = 'Error on last name'
            }
        } else {
            validation.message = 'Error on name'
        }
    } else {
        validation.message = 'Error on ID'
    }

    return validation
}

module.exports = validateStudentInfo