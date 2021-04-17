const { Connection, Request, TYPES } = require('tedious');
const config = require('../../config.json');
const { request } = require('express');

var connection = new Connection(config)

function startDb() {
    return new Promise((resolve,reject) => {
    connection.on('connect', function(err){
        if (err){
            console.log(err);
            reject(err);
        } else {
            console.log("connected");
            resolve();
        }
    })
    connection.connect();
})
}

module.exports.startDb  = startDb;
module.exports.sqlConnection  = connection;




function incert(payload){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO [user] (firstName, lastName, gender, email, password, age, hotel, perferredGender) VALUES(@firstName, @lastName, @gender, @email, @password, @age, @hotel, @perferredGender)`
        const request = new Request(sql,(err) => {
            if(err){
                reject(err)
                console.log(err)
            }

        });

        request.addParameter('firstName',TYPES.VarChar,payload.firstName)
        request.addParameter('lastName',TYPES.VarChar,payload.lastName)
        request.addParameter('gender',TYPES.VarChar,payload.gender)
        request.addParameter('email',TYPES.VarChar,payload.email)
        request.addParameter('password',TYPES.VarChar,payload.password)
        request.addParameter('age',TYPES.Numeric,payload.age)
        request.addParameter('hotel',TYPES.VarChar,payload.hotel)
        request.addParameter('perferredGender',TYPES.VarChar,payload.perferredGender)

        request.on("requestCompleted",(row) => {
            console.log("User inserted", row);
            resolve("user Inserted", row)
            connection.execSql(request);
        })


    });
}

module.exports.incert  = incert;

function select(firstName){
    return new Promise((resolve,reject) => {
        const sql = "SELECT * FROM [user] where firstName = @firstName"
        const request = new Request(sql,(err,rowcount) =>{
            if (err){
                reject(err)
                console.log(err)
            } else if( rowcount == 0){
                reject({messsage:"user does not exit"})
            }
        });
        request.addParameter('firstName',TYPES.VarChar,firstName)
    
        request.on('row',(colums) => {
            resolve(colums)
        });
        connection.execSql(request);
    
        return firstName
    })
  
}
module.exports.select = select;
