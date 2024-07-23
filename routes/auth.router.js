const express = require('express');
const passport = require('passport');
const { User } = require('../db/models/user.model');

const router = express.Router();

router.post('/login',
  passport.authenticate('local',{session:false}),
   async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
