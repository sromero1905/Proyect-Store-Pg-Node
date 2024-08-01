const bcrypt = require("bcrypt");
const boom = require('@hapi/boom')
const Userservice = require('./user.service')
const service = new Userservice()
const { config } = require('../config/config')
const nodemailer = require('nodemailer');

class AuthService{
async getUser(email,password){
    const user = await service.findByEmail(email);

    if (!user) {
      throwboom.unauthorized()
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        boom.unauthorized()
    }
    delete user.dataValues.password
    return user;

}
signToken(user){
    const payload = {
      sub: user.id,
      role: user.role 
  };
    const token = jwt.sign(payload, config.jwtSecret);
   return({
      user,
      token

  });
}
async sendMail(email){
const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized()
    }
    const transporter = nodemailer.createTransport({
        host: config.hostEmail,
        secure: true, // true for 465, false for other ports
        port: 465,
        auth: {
          user: config.mailUser,
          pass: config.passwordMail
        }
      });
      await transporter.sendMail({
        from: config.mailUser, // sender address
        to: `${user.email}`, // list of receivers
        subject: "Este es un nuevo correo", // Subject line
        text: "Hola santi", // plain text body
        html: "<b>Hola santi</b>", // html body
      });
      return { message: 'mail sent'}
}
}

module.exports = AuthService