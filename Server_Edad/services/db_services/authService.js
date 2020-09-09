var dbconnection = require('../../connectors/dbConnector');



exports. theUserExists=function(phone_number){

  return new Promise( function (resolve,next) {

      var sql = "CALL userExists("+"'"+phone_number+"'"+")";
      // console.log(sql);
      dbconnection.query(sql, null, function( error, results, fields) {
      if(error){    
          return next(error);
      }else{
        // console.log(results);

        resolve(Boolean(results[0][0].user_exists>0));
      }
      } );});

}




exports. theSmartSaverExists=function(phone_number,next){

  return new Promise( function (resolve,next) {

      var sql = "CALL smartSaverExists("+"'"+phone_number+"'"+")";
      // console.log(sql);
      dbconnection.query(sql, null, function( error, results, fields) {
      if(error){    
          return next(error);
      }else{
        // console.log(results);

        resolve(Boolean(results[0][0].user_exists>0));
      }
      } );});

}


exports. findWtherAdminIsRegistered=function(agentContact){

  return new Promise( function (resolve,next) {
  
    
  
      var sql = "CALL isAdminRegistered("+"'"+ agentContact +"'"+")";
      // console.log(sql);
      dbconnection.query(sql, null, function( error, results, fields) {
      if(error){    
          return next(error);
      }else{
        console.log(Boolean(results[0][0].agent_registered>0));
  
        resolve(Boolean(results[0][0].agent_registered>0));
      }
      } );});
  
  }
  
  

exports. findWtherAgentIsRegistered=function(agentContact){

return new Promise( function (resolve,next) {

  

    var sql = "CALL isAgentRegistered("+"'"+ agentContact +"'"+")";
    // console.log(sql);
    dbconnection.query(sql, null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
      console.log(Boolean(results[0][0].agent_registered>0));

      resolve(Boolean(results[0][0].agent_registered>0));
    }
    } );});

}


exports.getDbCredentialsNormalUser = function (data) {

  // console.log(phone_number+" ;"+password);
// console.log(JSON.stringify(data));

return new Promise( function (resolve,next) {
    dbconnection.query("CALL getNormaUserLogInDetails("+"'"+JSON.stringify(data)+"'"+")", null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
      // console.log(results[0]);
      resolve(results[0][0]);   
    }});
   
  }
 
    );
}



exports.registerSmartSaverNow = function (data,password) {



  return new Promise( function (resolve,next) {
    // console.log(phone_number+" ;"+password+"Me");
    dbconnection.query("CALL registerTheSmartSaver("+"'"+JSON.stringify(data)+"'"+","+"'"+password+"'"+")", null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{

      // console.log(results[0][0]);
      
      resolve(results[0][0]);   
    }});
   
  }
 
    );
}



exports.registerTheUser = function (data,phone_number,password) {



return new Promise( function (resolve,next) {
  // console.log(phone_number+" ;"+password+"Me");
  dbconnection.query("CALL registerTheUsersDetails("+"'"+JSON.stringify(data)+"'"+","+"'"+phone_number+"'"+","+"'"+password+"'"+")", null, function( error, results, fields) {
  if(error){    
      return next(error);
  }else{

    // console.log(results[0][0]);
    
    resolve(results[0][0]);   
  }});
 
}

  );
}



exports.registerAdminDbNow = function (data,password) {

  // console.log(phone_number+" ;"+password);
  
  return new Promise( function (resolve,next) {
    dbconnection.query("CALL  registerTheAdmin("+"'"+JSON.stringify(data)+"'"+","+"'"+password+"'"+")", null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
      // console.log(results[0][0]);
      resolve(results[0][0]);   
    }});
   
  }
  
    );
  }


exports.registerSmartAgentDbNow = function (data,password) {

  // console.log(phone_number+" ;"+password);
  
  return new Promise( function (resolve,next) {
    dbconnection.query("CALL  registerTheSmartAgent("+"'"+JSON.stringify(data)+"'"+","+"'"+password+"'"+")", null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
      // console.log(results[0][0]);
      resolve(results[0][0]);   
    }});
   
  }
  
    );
  }
  
  

  
exports.registerSmartSaverAgent = function (data,password,next) {

  // console.log(phone_number+" ;"+password);
  
  return new Promise( function (resolve,next) {
    dbconnection.query("CALL registerSmartSaverAgent("+"'"+JSON.stringify(data)+"'"+","+"'"+password+"'"+")", null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
      // console.log(results[0][0]);
      resolve(results[0][0]);   
    }});
   
  }
  
    );
  }
  

exports.registerPhoneNumberPasswordAdmin = function (phone_number,password,next) {

// console.log(phone_number+" ;"+password);

return new Promise( function (resolve,next) {
  dbconnection.query("CALL registerPhoneNumberPasswordAdmin("+"'"+phone_number+"'"+","+"'"+password+"'"+")", null, function( error, results, fields) {
  if(error){    
      return next(error);
  }else{
    // console.log(results[0][0]);
    resolve(results[0][0]);   
  }});
 
}

  );
}


exports. checkSMSBalance=function(next){

return new Promise( function (resolve,next) {

    var sql = "CALL getTheNumberOfSMSs()";
    
    dbconnection.query(sql, null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
 
 
        //   console.log(results);
       

        resolve(Boolean(results[0][0].number_of_sms>0));
    }
    } );});

}

exports. reduceSMSs=function(){

return new Promise( function (resolve,next) {

    var sql = "CALL reduceSMSs()";
    
    dbconnection.query(sql, null, function( error, results, fields) {
    if(error){    
        return next(error);
    }else{
 
 
          // console.log(results);
       

        resolve('Done');
    }
    } );});
}


exports. getTheCountryRegions=function(){
return new Promise(function (resolve,next) {
  var sql = "CALL allCountryRegions()";
  console.log(sql);
  dbconnection.query(sql, null, function( error, results) {
  if(error){    
      return next(error);
  }else{
    console.log(results[0]);
     resolve(results[0]);
  }
} );});

} 




exports. getTheUserRolesRegistered=function(the_user_contact){
  
  return new Promise(function (resolve,next) {
    var sql = "CALL getTheUserRolesRegistered("+"'"+the_user_contact+"'"+")";
    // console.log(sql);
    dbconnection.query(sql, null, function( error, results) {
    if(error){    
        return next(error);
    }else{
      // console.log(results);
       resolve(results[0]);
    }
  } );});
  
  } 

exports. getTheUserRoles=function(){
return new Promise(function (resolve,next) {
  var sql = "CALL getTheUserRoles()";
  // console.log(sql);
  dbconnection.query(sql, null, function( error, results) {
  if(error){    
      return next(error);
  }else{
    // console.log(results);
     resolve(results[0]);
  }
} );});

} 



exports. getTheCompanyPetrolStations=function(){
return new Promise(function (resolve,next) {
  var sql = "CALL getTheCompanyPetrolStations()";
  // console.log(sql);
  dbconnection.query(sql, null, function( error, results) {
  if(error){    
      return next(error);
  }else{
    // console.log(results);
     resolve(results[0]);
  }
} );});

} 




exports.getThePetrolStations = function (company_station) {

return new Promise(function (resolve,next) {

  var sql = "CALL getThePetrolStations(" +"'"+ company_station+"'" + ")";
// console.log(sql);
dbconnection.query(sql, null, function (error, results, fields) {
  if (error) {
    return next(error);
  } else {
    // console.log(results[0][0].balance);

    resolve(results[0]);
  }
});
});

}
