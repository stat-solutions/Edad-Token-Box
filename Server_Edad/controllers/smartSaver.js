var express = require('express');
var router = express.Router();
const passport = require('passport');
var serviceSmartSaver=require('../services/db_services/smartSaverDbService');
var collections=require('../connectors/momoCollectionsConnector');
const  jwt  =  require('jsonwebtoken');
var request = require('request');
var sms = require('../services/other_services/smsService');
const SECRET_KEY = "secretkey23456";
var authDbService = require('../services/db_services/authService');
var SMS= require('../services/other_services/smsService');
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


function verifyTokens(req,res,next){

  if(!req.headers.authorization){
    return res.status(401).send('Unauthorised Request');
  }
  
  let token=req.headers.authorization.split(' ')[1];
  
  if(token=='null'){
    return res.status(401).send('Unauthorised Request');
  }
  
  let payload=jwt.verify(token,SECRET_KEY);
  
  if(!payload){
    return res.status(401).send('Unauthorised Request');
  }
  
  req.main_contact_number=payload.user_contact;
  
  next();
  
  }
  
  

  router.get('/interestBalance',verifyTokens, function(req, res,next) {

    serviceSmartSaver.getInterestBoxBalance(req.query.id).then( function(results) {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
    
    ).catch(next);
  
   } );

  router.get('/boxBalance',verifyTokens, function(req, res,next) {

    serviceSmartSaver.getMainBoxBalance(req.query.id).then( function(results) {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
    
    ).catch(next);
  
   } );
  
   router.get('/txnHistory',verifyTokens,  function(req, res,next) {
  
    serviceSmartSaver.getTxnHistory(req.query.id,next).then( function(results) {
      res.setHeader('Content-Type', 'application/json');
      console.log(results);
      res.json(results);
    }
    
    ).catch(next);
  
   } );
   
   

router.post('/buySmartSaverTokens',verifyTokens,  function(req, res,next) {


  serviceSmartSaver .buySmartSaverTokensService( req.body)
  .then(function(results) {
    // console.log('before'+results.users_id);

    // const payload = {
    //   user_id: results.users_id,
    //   user_contact: results.users_contact,
    //   user_role: results.fk_user_role_id_users
    // };

    const sms = {
      contanct_number: req.body.users_savers_contact,
      message:
        "EDAD confirms receipt of the request for the purchase of "+ req.body.number_of_tokens+ " tokens. Please send UGX" +
        req.body.amount_due+
        " to either 0780267542 or 0759516531." +
        "Check dashboard for receipt. Enjoy 36% return!!"
    };

    authDbService
      .checkSMSBalance(next)
      .then(function(result) {
        if (result) {
          // console.log('First'+' '+sms);

          SMS.sendSMS(sms, next);
        }
      })
      .catch(next);

    // const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 600 });

    res.json('Registration was successfull');
  })
  .catch(next);
  


});
        
  
router.post('/withdrawSmartSaverTokens',verifyTokens,  function(req, res,next) {


  serviceSmartSaver .withdrawSmartSaverTokensService( req.body)
  .then(function(results) {
    // console.log('before'+results.users_id);

    // const payload = {
    //   user_id: results.users_id,
    //   user_contact: results.users_contact,
    //   user_role: results.fk_user_role_id_users
    // };

    const sms = {
      contanct_number: req.body.users_savers_contact,
      message:
        "EDAD Token withdraw request  for "+ req.body.number_of_tokens+ " tokens was successfully received. This is equivalent to UGX" +
        req.body.amount_due+
        ". Please contact   either 0780267542 or 0759516531 for further processing." 
  
    };

    authDbService
      .checkSMSBalance(next)
      .then(function(result) {
        if (result) {
          // console.log('First'+' '+sms);

          SMS.sendSMS(sms, next);
        }
      })
      .catch(next);

    // const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 600 });

    res.json('Registration was successfull');
  })
  .catch(next);
  


});

  module.exports = router;

