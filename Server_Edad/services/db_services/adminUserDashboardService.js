var request = require('request');
var dbconnection = require('../../connectors/dbConnector');




exports.updateClient = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL updateCustomerDetails("+"'"+JSON.stringify(data)+"'"+")";
  console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      // console.log(results[0]);

     resolve(results[0]);
    }
  });
}); }









exports.getTheRunningBalanceOfTokens = function (stationId) {
  // console.log(userId);
    return new Promise(function (resolve,next) {
      // console.log(userId);
      var sql = "CALL runningBalanceOfTokens()";
    // console.log(sql);
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {
          // console.log(results[0]);
       resolve(results[0]);
      }
    });
  });
  
  }


exports.getAllTheClientsPurchaseDetails = function (stationId) {
  // console.log(userId);
    return new Promise(function (resolve,next) {
      // console.log(userId);
      var sql = "CALL allClientsAdminPurchaseApproval()";
    // console.log(sql);
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {
          console.log(results[0]);
       resolve(results[0]);
      }
    });
  });
  
  }
  
  
  
exports.getAllTheClientsWithdrawDetails = function (stationId) {
  // console.log(userId);
    return new Promise(function (resolve,next) {
      // console.log(userId);
      var sql = "CALL allClientsAdminWithdrawApproval()";
    // console.log(sql);
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {
          console.log(results[0]);
       resolve(results[0]);
      }
    });
  });
  
  }
  


exports.approveTheAdminTokensPurchase = function (userId) {
  // console.log(userId);
    return new Promise(function (resolve,next) {
      // console.log(userId);
      var sql = "CALL approveTokenDetailsPurchase("+"'"+userId+"'"+")";
    // console.log(sql);
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {
          console.log(results[0][0]);
       resolve(results[0][0]);
      }
    });
  });
  
  }
  
  
exports.approveTheAdminTokensWithdraw = function (userId) {
  // console.log(userId);
    return new Promise(function (resolve,next) {
      // console.log(userId);
      var sql = "CALL approveTokenDetailsWithdraw("+"'"+userId+"'"+")";
    // console.log(sql);
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {
          console.log(results[0][0]);
       resolve(results[0][0]);
      }
    });
  });
  
  }
  

  exports.rejectTheAdminTokens = function (userId) {
    // console.log(userId);
      return new Promise(function (resolve,next) {
        // console.log(userId);
        var sql = "CALL rejectTokenDetails("+"'"+userId+"'"+")";
      // console.log(sql);
      dbconnection.query(sql, null, function (error, results, fields) {
        if (error) {
          return next(error);
        } else {
            console.log(results[0][0]);
         resolve(results[0][0]);
        }
      });
    });
    
    }