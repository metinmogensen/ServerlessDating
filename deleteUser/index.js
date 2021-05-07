const db = require("../routes/Shared/db");
module.exports = async function (context, req) {
    context.log('JavaScript Login HTTP trigger function processed a request.');

    try{
        await db.startDb(); //start db forbbindelse
    } catch (error) {
        console.log("Error connecting to the database", error.message);
    }
    switch(req.method) {
        case 'DELETE':
            await deleteUserWithEmail(context, req);
            break;
        default:
            context.res = {
                status: 200,
                body: "This is only for deleting"
            };
            break;
    }
}


async function deleteUserWithEmail(context, req){
    try{
        let payload = req.query.email;
        let result = await db.deleteUser(payload);
        console.log(context, req);

        context.res = {
            status: 200,
            body: result
        }
    } catch(error){
        context.res = {
            status: 400,
            body: error.message
        }

    }
}