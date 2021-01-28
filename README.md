# CRUD
This project is a CRUD (Create, Read, Update and Delete) made with NodeJs and express.

Remember that you have to create you **.env** file based on .env.example file.
## Commands:
Installing dependencies:

` npm install
`

Runnig the project on development:

`npm run dev
`

Runnig the project on production:

`npm start
`

Running tests:

`npm test
`
### Using Docker
Creating the image:

Creating the container:

## HTTP requests:
### GET:
`http://localhost:3006/v1/students/
`

Response expected: 

```JSON
{
    "msg": "Success",
    "data": [
        {
            "id": 1,
            "nombre": "Pepe",
            "apellido": "Meza"
        },
        {
            "id": 12,
            "nombre": "Marco",
            "apellido": "Perez"
        }
    ]
}
```
### POST:
`http://localhost:3006/v1/students/
`

Request: 

```JSON
{
    "id":"12345",
    "nombre":"John",
    "apellido":"Meza"
}
```

Response expected:

```JSON
{
    "message": "Student created",
    "data": {
        "id": "12345",
        "nombre": "John",
        "apellido": "Meza"
    }
}
```

### PUT:
You have to send an id at the end of the endpoint

`http://localhost:3006/v1/students/12345
`

Request: 

```JSON
{
    "id":"12345",
    "nombre":"John",
    "apellido":"Martinez"
}
```

Response expected:

```JSON
{
    "msg": "Data updated",
    "data": {
        "id": "12345",
        "nombre": "John",
        "apellido": "Martinez"
    }
}
```

### DELETE:
You have to send an id at the end of the endpoint

`http://localhost:3006/v1/students/12345
`

```JSON
{
    "msg": "Student eliminated",
    "data": [
        {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 0,
            "info": "",
            "serverStatus": 2,
            "warningStatus": 0
        },
        null
    ]
}
```