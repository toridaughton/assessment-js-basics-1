
const readline = require('readline');
const { ReadableStreamBYOBRequest } = require('stream/web');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const str = "1234567890"

reader.question(`Please input Username: `, function(username){
    console.log(`Welcome ${username}`)
    reader.question(`Please Input password: `, function(password){
        
        if(password.length >= str.length){
            console.log("success!")
        }else{
            console.log("passord fails constraint.")
        }
        reader.close()
    }
    )
})

