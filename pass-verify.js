const bcrypt = require('bcrypt')
const { func } = require('joi')

async function veryfyPassword (){
    const myPassWord = 'tucuman2814'
    const hash = '$2b$10$96vIhDFHBX3yNhocelE1AOLnaEDlGWWRoGD/pAa3JnWHcFj36/3.m'
    const isMatch = await bcrypt.compare(myPassWord, hash)
    console.log(isMatch);
}


veryfyPassword()