const bcrypt = require('bcrypt')
const { func } = require('joi')

async function hashPassword (){
    const myPassWord = 'tucuman2814'
    const hash = await bcrypt.hash(myPassWord, 10)
    console.log(hash);
}


hashPassword()