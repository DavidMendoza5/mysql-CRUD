# CRUD
This project is a CRUD (Create, Read, Update and Delete) made with NodeJs and express.

Remember that you have to create you **.env** file based on .env.example file. If you are going to use docker, on your *.env* file you have to use the name of the database service created on your **docker-compose.yml** file on your *DB_HOST* variable.
## Commands:
### Docker: Creating a MySQL container:
`sudo docker run --name mysql-5.6 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.6`

**Remember that MySQL uses root as a defalut user**
### Using MySQL dockerized
Creating a database using MySQL 5.6:
1. First of all we connect to the mysql terminal: `sudo docker exec -it mysql-5.6 mysql -p`
2. Now we have to create te database, in this case we called it *students*: `CREATE DATABASE students;`
3. Then we use that databasse: `USE students;`
4. In the end we create our table: `CREATE TABLE info (id INT(11) PRIMARY KEY, nombre VARCHAR(25), apellido VARCHAR(30));`
### NodeJs
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
### Using Docker compose
Creating images, containers and starting the containers:

`sudo docker-compose up`

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

Response expected:

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