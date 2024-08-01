const { Strategy } = require("passport-local");
const boom = require("@hapi/boom");
const jwt = require('jsonwebtoken');
const AuthService = require("./../../../services/auth.service");
const bcrypt = require("bcrypt");



const service = new AuthService();

const localStrategy = new Strategy(
{
  usernameField:'email',
  passwordField:'password'
},
  async (email, password, done) => {
  try {

    const user = await service.findByEmail(email,password);
    done(null,user)
  } 
  catch (error) {
    console.log(error);
    done(error, false);
  }
});

module.exports = localStrategy;
