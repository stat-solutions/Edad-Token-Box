var express = require('express');
var request = require('request');
var router = express.Router();
var bodyParser = require('body-parser');
var serviceU = require('../services/db_services/adminUserDashboardService');
var authDbService = require('../services/db_services/authService');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var SMS = require('../services/other_services/smsService');




    
  router.get('/allPurchaseClients', function(req, res,next) {
    // console.log(req.query.id);
     serviceU.getAllTheClientsPurchaseDetails().then( function(results) {
       res.setHeader('Content-Type', 'application/json');
       res.json(results);
     } ).catch(next);});
     
    
     router.get('/allWithdrawClients', function(req, res,next) {
      // console.log(req.query.id);
       serviceU.getAllTheClientsWithdrawDetails().then( function(results) {
         res.setHeader('Content-Type', 'application/json');
         res.json(results);
       } ).catch(next);});
    
     router.get('/runningTokenBalance', function(req, res,next) {
      // console.log(req.query.id);
       serviceU.getTheRunningBalanceOfTokens().then( function(results) {
         res.setHeader('Content-Type', 'application/json');
         res.json(results);
       } ).catch(next);});




  router.get('/approveTokenAdminPurchase', function(req, res,next) {
  //  console.log(req.query.id);
    serviceU.approveTheAdminTokensPurchase(req.query.id).then( function(results1) {
    

      const sms = {
        contanct_number: results1.users_contact,
        message: "Hello"+"  "+results1.name+" "+
          "Your purchase of "+results1.tokens_credit+" tokens was successfully approved by EDAD, Please proceed to your Dashboard for further details!!"
      };
      // console.log(sms);
      authDbService
        .checkSMSBalance(next)
        .then(function(result) {
          if (result) {
            // console.log('First'+' '+sms);

            SMS.sendSMS(sms, next);
          }
        })
        .catch(next);

      res.setHeader('Content-Type', 'application/json');
      res.json(results1);


    } ).catch(next);});


     
    
  router.get('/approveTokenAdminWithdraw', function(req, res,next) {
    //  console.log(req.query.id);
      serviceU.approveTheAdminTokensWithdraw(req.query.id).then( function(results1) {
      
  
        const sms = {
          contanct_number: results1.users_contact,
          message: "Hello"+"  "+results1.name+" "+
            "Your withdraw of "+results1.tokens_credit+" tokens was successfully approved by EDAD, Please proceed to your Dashboard for further details!!"
        };
        // console.log(sms);
        authDbService
          .checkSMSBalance(next)
          .then(function(result) {
            if (result) {
              // console.log('First'+' '+sms);
  
              SMS.sendSMS(sms, next);
            }
          })
          .catch(next);
  
        res.setHeader('Content-Type', 'application/json');
        res.json(results1);
  
  
      } ).catch(next);});






    router.get('/rejectTokenAdmin', function(req, res,next) {
   
      serviceU.rejectTheAdminTokens(req.query.id).then( function(results1) {

      const sms = {
        contanct_number: results1.users_contact,
        message: "Hello"+"  "+results1.name+" "+
          "Your purchase of "+results1.tokens_credit+" tokens was rejected by EDAD, Please contact EDAD for further explanation!!"
      };
console.log(sms);
      authDbService
        .checkSMSBalance(next)
        .then(function(result) {
          if (result) {
            console.log('First'+' '+sms);

            SMS.sendSMS(sms, next);
          }
        })
        .catch(next);

        res.setHeader('Content-Type', 'application/json');
        res.json(results1);
      } ).catch(next);});

module.exports = router;