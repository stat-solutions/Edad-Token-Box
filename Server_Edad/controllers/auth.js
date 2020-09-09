var express = require("express");
var router = express.Router();
var request = require("request");
var SMS = require("../services/other_services/smsService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const randtoken = require("rand-token");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
var bodyParser = require("body-parser");
const saltRounds = 14;
const CRYPITOL_KEY = "secretkey23456";
var authDbService = require("../services/db_services/authService");
const refreshTokens = {};
const passportOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: CRYPITOL_KEY
};

passport.use(
  new JwtStrategy(passportOpts, function(jwtPayload, done) {
    const expirationDate = new Date(jwtPayload.exp * 1000);
    if (expirationDate < new Date()) {
      return done(null, false);
    }
    done(null, jwtPayload);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.main_contact_number);
});

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.get("/getUserRoles", function(req, res, next) {
  authDbService
    .getTheUserRoles()
    .then(function(results) {
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    })
    .catch(next);
});

router.get("/getNumberOfRoles", function(req, res, next) {
  console.log(req.query.id);
  authDbService
    .getTheUserRolesRegistered(req.query.id)
    .then(function(results) {
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    })
    .catch(next);
});


router.post("/login", function(req, res, next) {
  // console.log(req.body);
  authDbService
    .theUserExists(req.body.main_contact_number)
    .then(function(results1) {
      // console.log(results1);
      if (results1) {
        authDbService
          .getDbCredentialsNormalUser(req.body)
          .then(function(results) {
            console.log(req.body.password);
            console.log(results.users_password);
            if (bcrypt.compareSync(req.body.password, results.users_password)) {
              const payload = {
                user_id: results.users_id,
                user_contact: results.users_contact,
                approval_status: results.users_approval_status,
                user_role: results.fk_user_role_id_users
              };
              const token = jwt.sign(payload, CRYPITOL_KEY, {
                expiresIn: 100000
              });
              // const refreshToken = randtoken.uid(256);
              // refreshTokens[refreshToken] = results.user_name;
              res.json({ jwt: token});
            } else {
              res.status(405).json("Invalid phone number or password");
            }
          })
          .catch(next);
      } else {
        res.status(407).json("User Not Registered");
      }
    })
    .catch(next);
});


router.get("/isAdminRegistered", function(req, res, next) {
  authDbService
    .findWtherAdminIsRegistered(req.query.id)
    .then(function(results) {
      // console.log(results);
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    })
    .catch(next);
});



router.get("/isAgentRegistered", function(req, res, next) {
  authDbService
    .findWtherAgentIsRegistered(req.query.id)
    .then(function(results) {
      // console.log(results);
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    })
    .catch(next);
});


router.post("/registerAdminNow", function(req, res, next) {

  const password = bcrypt.hashSync(req.body.password, saltRounds);

// console.log(req.body);

  authDbService
    .findWtherAdminIsRegistered(req.body.main_contact_number)
    .then(function(results1) {
      if (results1) {
        res.status(401).json("Admin mobile number already exists!!!");
      } else {
 authDbService .registerAdminDbNow( req.body,password)
          .then(function(results) {
            // console.log('before'+results.users_id);

            const payload = {
              user_id: results.users_id,
              user_contact: results.users_contact,
              user_role: results.fk_user_role_id_users
            };

            const sms = {
              contanct_number: results.users_contact,
              message:
                "You have successfully registered for EDAD ADMINISTRATION. Please first first contact your manager for Approval!!"
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

            const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 116000 });

            res.json('Registration was successfull');
          })
          .catch(next);
      }
    })
    .catch(next);

      });


router.post("/registerSmartAgent", function(req, res, next) {

  const password = bcrypt.hashSync(req.body.password, saltRounds);
 authDbService.registerSmartAgentDbNow(
            req.body,
            password
          )
          .then(function(results) {
           

            const sms = {
              contanct_number: results.users_name,
              message:
                "Welcome to EDAD Token Saving Box!!. You have successfully registered. Please purchase the token box first!!"
            };

            // authDbService
            //   .checkSMSBalance(next)
            //   .then(function(result) {
            //     if (result) {
                  // console.log('First'+' '+sms);

              //     SMS.sendSMS(sms, next);
              //   }
              // })
              // .catch(next);

            // const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 600 });

            res.json(results);
          })
          .catch(next);
      }
    // })
    // .catch(next);
// }
);



router.get("/isAgentRegistered", function(req, res, next) {
  authDbService
    .findWtherAgentIsRegistered(req.query.id)
    .then(function(results) {
      // console.log(results);
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    })
    .catch(next);
});


router.post("/registerSmartSaver", function(req, res, next) {

  
  const password = bcrypt.hashSync(req.body.password, saltRounds);

  authDbService
    .theSmartSaverExists(req.body.main_contact_number, next)
    .then(function(results1) {
      if (results1) {
        res.status(401).json("User mobile number already exists!!!");
      } else {
 authDbService .registerSmartSaverNow( req.body,password)
          .then(function(results) {
            // console.log('before'+results.users_id);

            const payload = {
              user_id: results.users_id,
              user_contact: results.users_contact,
              user_role: results.fk_user_role_id_users
            };

            const sms = {
              contanct_number: results.users_contact,
              message:
                "You have successfully registered for SMART SAVINGS with EDAD TOKEN BOX. Please proceed and login to your token box account and purchase tokens to realise an annual rate of 36% on your tokens!!"
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

            const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 600 });

            res.json('Registration was successfull');
          })
          .catch(next);
      }
    })
    .catch(next);

      }
    // })
    // .catch(next);
// }
);



router.post("/registerSmartSaverAgent", function(req, res, next) {
  
  const password = bcrypt.hashSync(req.body.password, saltRounds);

  authDbService
    .theSmartSaverExists(req.body.main_contact_number, next)
    .then(function(results1) {
      if (results1) {
        res.status(401).json("User mobile number already exists!!!");
      } else {
 authDbService .registerSmartSaverAgent( req.body,password)
          .then(function(results) {
            // console.log('before'+results.users_id);

            const payload = {
              user_id: results.users_id,
              user_contact: results.users_contact,
              user_role: results.fk_user_role_id_users
            };

            const sms = {
              contanct_number: results.users_contact,
              message:
                "You have successfully registered for SMART SAVINGS with EDAD TOKEN BOX. Please first send UGX 10,000 to your Agent to buy a box then you can login to your box account!!"
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

            const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 600 });

            res.json('Registration was successfull');
          })
          .catch(next);
      }
    })
    .catch(next);
});

router.get("/getTheCountryRegions", function(req, res, next) {
  authDbService
    .getTheCountryRegions()
    .then(function(results) {
      // console.log(results);
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    })
    .catch(next);
});

router.post("/logout", function(req, res) {
  const refreshToken = req.body.refreshToken;
  if (refreshToken in refreshTokens) {
    delete refreshTokens[refreshToken];
  }
  res.sendStatus(204);
});

router.post("/refresh", function(req, res) {
  const refreshToken = req.body.refreshToken;

  if (refreshToken in refreshTokens) {
    const payload = {
      user_id: results.user_id,
      user_contact: results.user_name,
      user_role: results.fk_users_roles_id_users
    };
    const token = jwt.sign(payload, CRYPITOL_KEY, { expiresIn: 600 });
    res.json({ jwt: token });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
