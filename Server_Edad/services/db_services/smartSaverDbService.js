var dbconnection = require('../../connectors/dbConnector');







exports.getTxnHistory = function (user_id) {

  return new Promise(function (resolve) {

    var sql = "CALL txnHistory(" +"'"+ user_id+"'" + ")";
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





exports.getMainBoxBalance = function (user_id) {

  return new Promise(function (resolve) {

    var sql = "CALL saversBalance(" +"'"+ user_id+"'" + ")";
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


exports.getInterestBoxBalance = function (user_id) {

  return new Promise(function (resolve) {

    var sql = "CALL saversInterest(" +"'"+ user_id+"'" + ")";
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


exports.postTheTxnNow = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL postTheTxnNow("+ "'" + JSON.stringify(data) + "'" +")";
  console.log(sql);
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



exports.createTokenNow = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL createTokenNow("+ "'" + JSON.stringify(data) + "'" +")";
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



exports.repayTokenNow = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL repayTokenNow("+ "'" + JSON.stringify(data) + "'" +")";
  console.log(sql);
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


exports.getRunningBalance = function (station) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getRunningBalance("+"'"+station+"'"+")";
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



exports.getRunningBalanceAll = function (station) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getRunningBalanceAll()";
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



exports.theRevenueDetails = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getTheRevenueFromTokens("+"'"+JSON.stringify(data)+"'"+")";
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



exports.getTheRunningTokensService = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getTheTokens("+"'"+JSON.stringify(data)+"'"+")";
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




exports.getAllShiftDetails = function (station) {

  return new Promise(function (resolve,next) {

    var sql = "CALL shiftDetailsPumpUser("+"'"+station+"'"+")";
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




exports.getTokenPaymentDetails = function (numberPlate) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getTokenPaymentDetails("+"'"+numberPlate+"'"+")";
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

exports.getTokenableDetails = function (numberPlate) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getTokenableDetails("+"'"+numberPlate+"'"+")";
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

exports.getTheUserSecret
= function (station) {

  return new Promise(function (resolve,next) {

    var sql = "CALL scretePIN("+"'"+station+"'"+")";
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


exports.getAllNumberPlates = function (station) {

  return new Promise(function (resolve,next) {

    var sql = "CALL getAllNumberPlates("+"'"+station+"'"+")";
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





exports.theLedgerDetails = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL ledgerStatement(" + "'" + JSON.stringify(data)+"'"+ ")";

    console.log(sql);
    
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {

          //  console.log(results[0]);

        resolve(results[0]);
      }
    });

  }

  );

 
}


exports.registerGroupService = function (data, next) {

  return new Promise(function (resolve) {

    var sql = "CALL registerGroupService(" + "'" + JSON.stringify(data)+"'"+ ")";

    // console.log(sql);
    dbconnection.query(sql, null, function (error, results, fields) {
      if (error) {
        return next(error);
      } else {

      }
    });
    resolve("Registered Successfully");
  }

  );

 
}




exports.closeOpenShift = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL closeOpenShift("+"'"+JSON.stringify(data)+"'"+")";
  // console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      // console.log(results[0][0].completed>0);

     resolve(Boolean(results[0][0].completed>0));
    }
  });
});

}




exports.openClosedShift = function (data) {

  return new Promise(function (resolve,next) {

    var sql = "CALL openClosedShift("+"'"+JSON.stringify(data)+"'"+")";
  // console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      // console.log(results[0][0].completed>0);

     resolve(Boolean(results[0][0].completed>0));
    }
  });
});

}





exports.getBalanceEnoughExists = function (station) {

  return new Promise(function (resolve,next) {

    var sql = "CALL isStationBalanceEnoughOrExists("+"'"+station+"'"+")";
  // console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      // console.log(results[0][0].Balexists>0);

     resolve(Boolean(results[0][0].Balexists>0));

    }
  });
});

}


exports.doesTheNumberPlateExist = function (numberPlate) {

  return new Promise(function (resolve,next) {

    var sql = "CALL numberPlateAlreadyExists("+"'"+numberPlate+"'"+")";
  // console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      // console.log(results[0][0].Balexists>0);

     resolve(Boolean(results[0][0].number_plate_exists>0));
    }
  });
});
}






exports.buySmartSaverTokensService = function (smartData) {

  return new Promise(function (resolve,next) {

    var sql = "CALL smartSaverBuyTokens("+"'"+JSON.stringify(smartData)+"'"+")";
  console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      console.log(results[0][0].completed);

      resolve(Boolean(results[0][0].completed>0));
    }
  });
});

}


exports.withdrawSmartSaverTokensService = function (smartData) {

  return new Promise(function (resolve,next) {

    var sql = "CALL smartSaverWithdrawTokens("+"'"+JSON.stringify(smartData)+"'"+")";
  console.log(sql);
  dbconnection.query(sql, null, function (error, results, fields) {
    if (error) {
      return next(error);
    } else {

      console.log(results[0][0].completed);

      resolve(Boolean(results[0][0].completed>0));
    }
  });
});

}