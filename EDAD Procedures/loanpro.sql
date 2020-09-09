

/* The concept of special accounts applies from the fact that for some accounts like CASH appear recurrent, however during the creation of accounts, there is no determination of whether it is cash or bank as long as it belongs to assets, to hard code some processes we need a way to designate certain accounts like CASH so that it is associated later*/

-- DROP TABLE IF EXISTS `connect_network`;
-- CREATE TABLE `connect_network` (
--   `connect_status` int(11),
--   `connect_ip` varchar(100) DEFAULT '0')

-- ENGINE=InnoDB  DEFAULT CHARSET=latin1;

-- INSERT INTO connect_network VALUES(1,'192.168.2.10');

--  INSERT INTO the_company_datails VALUES(NULL,'TRUST LEND SERVICES LTD','GANDA BRANCH','P.O BOX 28886 KAMPALA UGANDA',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS loanPortfolioPaid;

DELIMITER ##

CREATE FUNCTION loanPortfolioPaid(userId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC

BEGIN

DECLARE portFolio DOUBLE;

select SUM(instalments_paid) INTO portFolio FROM new_loan_appstore where gruop_id=userId AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;





/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS userName;
DELIMITER ##
CREATE FUNCTION userName(userId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC
BEGIN
DECLARE userNameNow VARCHAR(40);

SELECT account_name INTO userNameNow FROM pmms.log_in WHERE  user_id=userId ;

IF ISNULL(userNameNow) THEN 
SET userNameNow="MISSING";
END IF;

RETURN userNameNow;
END ##
DELIMITER ;





/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS loanPortfolio;

DELIMITER ##

CREATE FUNCTION loanPortfolio(userId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC

BEGIN

DECLARE portFolio DOUBLE;

select SUM(total_loanAmount) INTO portFolio FROM new_loan_appstore where gruop_id=userId  AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;



/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS loanPortfolioRemaining;

DELIMITER ##

CREATE FUNCTION loanPortfolioRemaining(userId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC

BEGIN

DECLARE portFolio DOUBLE;

select SUM(balance_due) INTO portFolio FROM new_loan_appstore where gruop_id=userId  AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;


/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS customerName;
DELIMITER ##
CREATE FUNCTION customerName(loanId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC
BEGIN
DECLARE customerNameNow VARCHAR(40);

SELECT applicant_account_name INTO customerNameNow FROM new_loan_appstore WHERE  loan_id=loanId  AND loan_cycle_status='Disbursed';

RETURN customerNameNow;
END ##
DELIMITER ;


/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS customeAccount;
DELIMITER ##
CREATE FUNCTION customeAccount(loanId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC
BEGIN
DECLARE customerAccountNow VARCHAR(40);

SELECT applicant_account_number INTO customerAccountNow FROM new_loan_appstore WHERE  loan_id=userId  AND loan_cycle_status='Disbursed';

RETURN customerAccountNow;
END ##
DELIMITER ;



/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS loanPortfolioId;

DELIMITER ##

CREATE FUNCTION loanPortfolioId(loanId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC

BEGIN

DECLARE portFolio DOUBLE;

select total_loanAmount INTO portFolio FROM new_loan_appstore where loan_id=loanId  AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;





/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS loanPortfolioPaidId;

DELIMITER ##

CREATE FUNCTION loanPortfolioPaidId(loanId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC

BEGIN

DECLARE portFolio DOUBLE;

select instalments_paid INTO portFolio FROM new_loan_appstore where gruop_id=loanId  AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;



/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS loanPortfolioRemainingId;

DELIMITER ##

CREATE FUNCTION loanPortfolioRemainingId(loanId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC

BEGIN

DECLARE portFolio DOUBLE;

select balance_due INTO portFolio FROM new_loan_appstore where gruop_id=loanId  AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;



/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS numberOfLoans;

DELIMITER ##

CREATE FUNCTION numberOfLoans(userId INT) 
RETURNS INT
DETERMINISTIC

BEGIN

DECLARE portFolio INT;

select COUNT(balance_due) INTO portFolio FROM new_loan_appstore where gruop_id=userId  AND loan_cycle_status='Disbursed';

RETURN portFolio;

END ##
DELIMITER ;



/* NUMBER OF DAYS IN ARREARS FUNCTION */
DROP FUNCTION IF EXISTS numberOfDayInArrears;

DELIMITER ##

CREATE FUNCTION numberOfDayInArrears( loanId VARCHAR(45)) 
RETURNS INT
DETERMINISTIC

BEGIN

DECLARE lastDueDate DATE;

DECLARE dayInArrears INT;

SELECT la.instalment_due_date INTO  lastDueDate FROM new_loan_appstoreamort la INNER JOIN new_loan_appstore nl ON la.master2_id=nl.loan_id WHERE NOT la.instalment_status='P' AND nl.loan_id=loanId ORDER BY la.trn_id ASC LIMIT 1;

SET dayInArrears=DATEDIFF(DATE(NOW()),lastDueDate);
IF dayInArrears<0 THEN
SET dayInArrears=0;
ELSE
SET dayInArrears=dayInArrears+1;
END IF;
RETURN dayInArrears;

END ##
DELIMITER ;




/* NUMBER OF DAYS IN ARREARS FUNCTION */
DROP FUNCTION IF EXISTS instalmentDueDate;

DELIMITER ##

CREATE FUNCTION instalmentDueDate( loanId VARCHAR(45)) 
RETURNS VARCHAR(45)
DETERMINISTIC

BEGIN

DECLARE lastDueDate DATE;



SELECT instalment_due_date INTO  lastDueDate FROM new_loan_appstoreamort  WHERE NOT instalment_status='P' AND master2_id=loanId ORDER BY trn_id ASC LIMIT 1;

IF ISNULL(lastDueDate) THEN
SET lastDueDate= DATE(NOW());
END IF;

RETURN lastDueDate;

END ##
DELIMITER ;



/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS arrearRangeManger;

DELIMITER ##

CREATE FUNCTION arrearRangeManger( loanId VARCHAR(45)) 
RETURNS VARCHAR(30)
DETERMINISTIC

BEGIN

DECLARE theRange VARCHAR(30);

IF numberOfDayInArrears(loanId)>=0 AND numberOfDayInArrears(loanId)<30 THEN 

SET theRange='0-29';

ELSEIF numberOfDayInArrears(loanId)>=30 AND numberOfDayInArrears(loanId)<60 THEN

SET theRange='30-59';

ELSEIF numberOfDayInArrears(loanId)>=60 AND numberOfDayInArrears(loanId)<90 THEN

SET theRange='60-89';

ELSEIF  numberOfDayInArrears(loanId)>=90 AND numberOfDayInArrears(loanId)<360 THEN

SET theRange='90-359';

ELSEIF  numberOfDayInArrears(loanId)>=360 THEN

SET theRange='360 And Above';

END IF;



RETURN theRange;

END ##
DELIMITER ;



/* ALL CONTINENTAL REGIONS */
DROP PROCEDURE IF EXISTS officerPortfolio;

DELIMITER ##

CREATE PROCEDURE   officerPortfolio()
BEGIN
   
 DECLARE l_done, staffIds,ID INT;
 
DECLARE forSelectingStaffIds CURSOR FOR SELECT DISTINCT(gruop_id)   FROM new_loan_appstore where loan_cycle_status='Disbursed';
 
DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;
 


DROP TABLE IF EXISTS loan_port_report;

CREATE TEMPORARY  TABLE loan_port_report(id_1 INTEGER,officer_id INT,officer_name VARCHAR(60),number_customers INT,loan_porfolio DOUBLE,loans_paid DOUBLE,loans_remaining DOUBLE,loans_0_30 DOUBLE,loans_31_60 DOUBLE,loans_61_90 DOUBLE,loans_91_360 DOUBLE,above_360 DOUBLE);


DROP TABLE IF EXISTS loan_port_report2;

CREATE TEMPORARY  TABLE loan_port_report2(id_2 INTEGER,officer_id INT,officer_name VARCHAR(60),number_customers INT,loan_porfolio DOUBLE,loans_paid DOUBLE,loans_remaining DOUBLE,loans_0_30 DOUBLE,loans_31_60 DOUBLE,loans_61_90 DOUBLE,loans_91_360 DOUBLE,above_360 DOUBLE);

SET ID=0;

 OPEN forSelectingStaffIds;



accounts_loop: LOOP 



 FETCH forSelectingStaffIds into staffIds;
 
 
 IF l_done=1 THEN

LEAVE accounts_loop;

 END IF;
 
 SET ID=ID+1;

-- SELECT staffIds;

CALL portFolioCategory (staffIds,'0-29', @portfolio029);
CALL portFolioCategory (staffIds,'30-59', @portfolio3059);
CALL portFolioCategory (staffIds,'60-89', @portfolio6059);
CALL portFolioCategory (staffIds,'90-359', @portfolio90359);
CALL portFolioCategory (staffIds,'360 And Above', @portfolio360AndAbove);


-- SELECT  @portfolio029,@portfolio3059,@portfolio6059,@portfolio90359,@portfolio360AndAbove;
IF ISNULL(ID) THEN 

SET ID=0;
END IF;

IF ISNULL(staffIds) THEN 

SET ID=10000;
END IF;

IF ISNULL(@portfolio029) THEN 

SET @portfolio029=0;
END IF;

IF ISNULL(@portfolio3059) THEN 

SET @portfolio3059=0;
END IF;

IF ISNULL(@portfolio3059) THEN 

SET @portfolio3059=0;
END IF;

IF ISNULL(@portfolio6059) THEN 

SET @portfolio6059=0;
END IF;

IF ISNULL(@portfolio90359) THEN 

SET @portfolio90359=0;
END IF;

IF ISNULL(@portfolio360AndAbove) THEN 

SET @portfolio360AndAbove=0;
END IF;
SELECT userName(staffIds) INTO @staffName;

IF ISNULL(@staffName) THEN
SET @staffName='MISSING';
END IF;

INSERT INTO loan_port_report VALUES(ID,staffIds,@staffName,numberOfLoans(staffIds),loanPortfolio(staffIds),loanPortfolioPaid(staffIds),loanPortfolioRemaining(staffIds),@portfolio029,@portfolio3059,@portfolio6059,@portfolio90359,@portfolio360AndAbove);


    SET l_done=0;
 END LOOP accounts_loop;



 CLOSE forSelectingStaffIds;

INSERT INTO  loan_port_report2( 
  `id_2`,
  `officer_id` ,
  `officer_name` ,
  `number_customers` ,
  `loan_porfolio` ,
  `loans_paid` ,
  `loans_remaining` ,
  `loans_0_30`,
`loans_31_60`,
`loans_61_90`,
`loans_91_360`,
`above_360`
  ) SELECT 
   `id_1`,
  `officer_id` ,
  `officer_name` ,
  `number_customers` ,
  `loan_porfolio` ,
  `loans_paid` ,
  `loans_remaining` ,
  `loans_0_30`,
`loans_31_60`,
`loans_61_90`,
`loans_91_360`,
`above_360`  FROM loan_port_report;

INSERT INTO  loan_port_report2( 
  `id_2`,
  `officer_id` ,
  `officer_name` ,
  `number_customers` ,
  `loan_porfolio` ,
  `loans_paid` ,
  `loans_remaining` ,
  `loans_0_30`,
`loans_31_60`,
`loans_61_90`,
`loans_91_360`,
`above_360`
  ) SELECT 
   "-"L,
 "-" ,
"TOTAL" ,
  SUM(`number_customers`) ,
 SUM(`loan_porfolio` ),
 SUM(`loans_paid`) ,
 SUM( `loans_remaining` ),
 SUM(  `loans_0_30`),
 SUM(`loans_31_60`),
 SUM(`loans_61_90`),
 SUM(`loans_91_360`),
SUM(`above_360`) FROM loan_port_report;

 SELECT * FROM loan_port_report2;

END

##
DELIMITER ;


call officerPortfolio();






/* ALL CONTINENTAL REGIONS */
DROP PROCEDURE IF EXISTS portFolioCategory;

DELIMITER ##

CREATE PROCEDURE  portFolioCategory (IN staffId INT,IN arrearsRangeComp VARCHAR(30), OUT portFolio1 DOUBLE)
BEGIN
   
 DECLARE l_done INT;

 DECLARE balanceDue DOUBLE;

 DECLARE arrearsRange,loanIds VARCHAR(30);
 
DECLARE forSelectingStaffIds CURSOR FOR SELECT loan_id FROM new_loan_appstore WHERE gruop_id=staffId AND loan_cycle_status='Disbursed';

DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;
 
SET portFolio1=0;

OPEN forSelectingStaffIds;
accounts_loop: LOOP 



 FETCH forSelectingStaffIds into loanIds;
 
 
 IF l_done=1 THEN

LEAVE accounts_loop;

 END IF;

--  SELECT loanIds,staffId;
 
 SELECT arrearRangeManger(loanIds) INTO arrearsRange;

-- SELECT arrearsRange;

IF arrearsRange=arrearsRangeComp THEN

SELECT balance_due INTO balanceDue FROM new_loan_appstore WHERE loan_id=loanIds;

SET portFolio1=portFolio1+balanceDue;

END IF;


SET l_done=0;

 END LOOP accounts_loop;

 CLOSE forSelectingStaffIds;

--  SELECT portFolio1;
 
END
##
DELIMITER ;






/* AGING ANYLYSIS */
DROP PROCEDURE IF EXISTS agingAnalysis;

DELIMITER ##

CREATE PROCEDURE   agingAnalysis()
BEGIN
   
 DECLARE l_done,ID,arrears INT;

 DECLARE loanPort,paidport,remainport,prince,princepaid,princeremain,p_remain,i_remain,interestRem DOUBLE;

 DECLARE customerContactNumber,loanId,TrnId,customerName,TrnDate,DisDate VARCHAR(45);

DECLARE forSelectingLoanIds CURSOR FOR SELECT trn_id   FROM new_loan_appstore WHERE loan_cycle_status='Disbursed' ;
 
DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;
 
SET ID =0;

DROP TABLE IF EXISTS aging_loan_analysis1;

CREATE TEMPORARY  TABLE aging_loan_analysis1(id_1 INTEGER,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT);

DROP TABLE IF EXISTS aging_loan_analysis2;

CREATE TEMPORARY  TABLE aging_loan_analysis2(id_2 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_2`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;


DROP TABLE IF EXISTS aging_loan_analysis3;

CREATE TEMPORARY  TABLE aging_loan_analysis3(id_3 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_3`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;


DROP TABLE IF EXISTS aging_loan_analysis4;

CREATE TEMPORARY  TABLE aging_loan_analysis4(id_4 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_4`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS aging_loan_analysis5;

CREATE TEMPORARY  TABLE aging_loan_analysis5(id_5 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_5`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS aging_loan_analysis6;

CREATE TEMPORARY  TABLE aging_loan_analysis6(id_6 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_6`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS aging_loan_analysis7;

CREATE TEMPORARY  TABLE aging_loan_analysis7(id_7 INTEGER,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

 OPEN forSelectingLoanIds;

accounts_loop: LOOP 



 FETCH forSelectingLoanIds into TrnId;
 
--  SELECT loanId;

 IF l_done=1 THEN

LEAVE accounts_loop;

 END IF;

 SELECT loan_id INTO loanId FROM new_loan_appstore WHERE trn_id=TrnId;

SELECT pl.applicant_account_name,m.mobile1,pl.trn_date,pl.princimpal_amount,pl.TotalPrincipalRemaining,pl.TotalInterestRemaining INTO customerName, customerContactNumber,TrnDate,remainport,princeremain,interestRem FROM pmms.master m INNER JOIN pmms_loans.new_loan_appstore pl ON pl.applicant_account_number=m.account_number WHERE  pl.trn_id=TrnId;

-- SELECT customerContactNumber,loanPort,paidport,remainport,prince,princepaid,princeremain;

SELECT SUM(PrincipalRemaining),SUM(InterestRemaing),numberOfDayInArrears(loanId) INTO p_remain,i_remain,arrears FROM new_loan_appstoreamort WHERE master2_id=loanId AND instalment_due_date<=DATE(NOW()) AND NOT instalment_status='P';

-- SELECT p_remain,i_remain,arrears;

 SET ID=ID+1;

 IF ISNULL(remainport) THEN
SET remainport=0;
 END IF;

  IF ISNULL(princeremain) THEN
SET princeremain=0;
 END IF;

 IF ISNULL(interestRem) THEN
SET interestRem=0;
 END IF;

  IF ISNULL(p_remain) THEN
SET p_remain=0;
 END IF;

  IF ISNULL(i_remain) THEN
SET i_remain=0;
 END IF;

   IF ISNULL(arrears) THEN
SET arrears=0;
 END IF;


INSERT INTO aging_loan_analysis1 VALUES (ID,customerName,customerContactNumber,DATE_FORMAT(TrnDate,'%d/%m/%Y'),DATE_FORMAT(instalmentDueDate(loanId),'%d/%m/%Y'),remainport,princeremain,interestRem,p_remain,i_remain,arrears);


    SET l_done=0;
 END LOOP accounts_loop;

 CLOSE forSelectingLoanIds;

 SELECT COUNT(id_1) INTO @port1  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears<30;
 SELECT COUNT(id_1) INTO @port2  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=30 AND number_of_days_in_arrears<60 ;
  SELECT COUNT(id_1) INTO @port3  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=60 AND number_of_days_in_arrears<90 ;
   SELECT COUNT(id_1) INTO @port4  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=90 AND number_of_days_in_arrears<360 ;

 SELECT COUNT(id_1) INTO @port5  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=360;




IF @port1 >0 THEN
 INSERT INTO aging_loan_analysis2 VALUES(0,'0-30','PERFORMING PORTFOLIO',"-","-","-","-","-","-","-","-");

  INSERT INTO  aging_loan_analysis2( 
  `id_2`,
  `customer_name` ,
  `customer_contact` ,
  `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
`interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears<30 ORDER BY number_of_days_in_arrears ASC;
   

  
  INSERT INTO  aging_loan_analysis2( 
  `id_2`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  'TOTAL' ,
  "-" ,
  "-" ,
  "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 0  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears<30;

  --  INSERT INTO aging_loan_analysis2 VALUES(0,"-","-","-","-","-","-","-","-");
END IF;

IF @port2 >0 THEN
   INSERT INTO aging_loan_analysis3 VALUES(0,'30-60','PORTFOLIO AT RISK',"-","-","-","-","-","-","-",0);
  
  INSERT INTO  aging_loan_analysis3( 
  `id_3`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=30 AND number_of_days_in_arrears<60 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis3( 
  `id_3`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 0  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=30 AND number_of_days_in_arrears<60 ;

  --  INSERT INTO aging_loan_analysis3 VALUES(0,"-","-","-","-","-","-","-","-");

END IF;

IF @port3 >0 THEN

   INSERT INTO aging_loan_analysis4 VALUES(0,'60-90','PORTFOLIO AT RISK',"-","-","-","-","-","-","-",0);

    
    INSERT INTO  aging_loan_analysis4( 
  `id_4`,
  `customer_name` ,
  `customer_contact` ,
     `date_taken`,
     `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=60 AND number_of_days_in_arrears<90 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis4( 
  `id_4`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 0  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=60 AND number_of_days_in_arrears<90 ;

  --  INSERT INTO aging_loan_analysis4 VALUES(0,"-","-","-","-","-","-","-","-");


END IF;

IF @port4 >0 THEN
   INSERT INTO aging_loan_analysis5 VALUES(0,'90-360','NON PERFORMING PORTFOLIO',"-","-","-","-","-","-","-",0);
    
   
    INSERT INTO  aging_loan_analysis5( 
  `id_5`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,
    `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,
    `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=90 AND number_of_days_in_arrears<360 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis5( 
  `id_5`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,
    `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 0 FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=90 AND number_of_days_in_arrears<360 ;

  --  INSERT INTO aging_loan_analysis5 VALUES(0,"-","-","-","-","-","-","-","-");


END IF;

IF @port5 >0 THEN
   INSERT INTO aging_loan_analysis6 VALUES(0,'360 AND Above','PORTFOLIO DUE FOR WRITE OFF',"-","-","-","-","-","-","-",0);

   
    INSERT INTO  aging_loan_analysis6( 
  `id_6`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
`interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=360 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis5( 
  `id_5`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  0,
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 0  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=360; 

END IF;

   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_2`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis2;

  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_3`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis3;

  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_4`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis4;
  
  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_5`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis5;

  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_6`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis6;

SELECT  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` FROM aging_loan_analysis7;
END

##
DELIMITER ;

CALL agingAnalysis();




/* AGING ANYLYSIS */
DROP PROCEDURE IF EXISTS agingAnalysisStaff;

DELIMITER ##

CREATE PROCEDURE   agingAnalysisStaff(IN staffId INT)
BEGIN
   
 DECLARE l_done,ID,arrears INT;

 DECLARE loanPort,paidport,remainport,prince,princepaid,princeremain,p_remain,i_remain,interestRem DOUBLE;

 DECLARE customerContactNumber,loanId,customerName,TrnDate,DisDate VARCHAR(45);

DECLARE forSelectingLoanIds CURSOR FOR SELECT loan_id   FROM new_loan_appstore WHERE loan_cycle_status='Disbursed' AND gruop_id=staffId ;
 
DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;
 
SET ID =0;

DROP TABLE IF EXISTS aging_loan_analysis1;

CREATE TEMPORARY  TABLE aging_loan_analysis1(id_1 INTEGER,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT);

DROP TABLE IF EXISTS aging_loan_analysis2;

CREATE TEMPORARY  TABLE aging_loan_analysis2(id_2 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_2`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;


DROP TABLE IF EXISTS aging_loan_analysis3;

CREATE TEMPORARY  TABLE aging_loan_analysis3(id_3 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_3`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;


DROP TABLE IF EXISTS aging_loan_analysis4;

CREATE TEMPORARY  TABLE aging_loan_analysis4(id_4 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_4`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS aging_loan_analysis5;

CREATE TEMPORARY  TABLE aging_loan_analysis5(id_5 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_5`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS aging_loan_analysis6;

CREATE TEMPORARY  TABLE aging_loan_analysis6(id_6 INTEGER NOT NULL AUTO_INCREMENT,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT, PRIMARY KEY (`id_6`))ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS aging_loan_analysis7;

CREATE TEMPORARY  TABLE aging_loan_analysis7(id_7 INTEGER,customer_name VARCHAR(60),customer_contact VARCHAR(60),date_taken VARCHAR(60),due_date VARCHAR(60),loans_remaining DOUBLE,principal_remaining DOUBLE,interest_remaining DOUBLE,principal_inarrears DOUBLE,interest_inarrears DOUBLE,number_of_days_in_arrears INT)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

 OPEN forSelectingLoanIds;

accounts_loop: LOOP 



 FETCH forSelectingLoanIds into loanId;
 
--  SELECT loanId;

 IF l_done=1 THEN

LEAVE accounts_loop;

 END IF;
SELECT pl.applicant_account_name,m.mobile1,pl.trn_date,pl.princimpal_amount,pl.TotalPrincipalRemaining,pl.TotalInterestRemaining INTO customerName, customerContactNumber,TrnDate,remainport,princeremain,interestRem FROM pmms.master m INNER JOIN pmms_loans.new_loan_appstore pl ON pl.applicant_account_number=m.account_number WHERE  pl.loan_id=loanId;
-- SELECT customerContactNumber,loanPort,paidport,remainport,prince,princepaid,princeremain;
SELECT SUM(PrincipalRemaining),SUM(InterestRemaing),numberOfDayInArrears(loanId) INTO p_remain,i_remain,arrears FROM new_loan_appstoreamort WHERE master2_id=loanId AND instalment_due_date<=DATE(NOW()) AND NOT instalment_status='P';

-- SELECT p_remain,i_remain,arrears;

 SET ID=ID+1;

 IF ISNULL(remainport) THEN
SET remainport=0;
 END IF;

  IF ISNULL(princeremain) THEN
SET princeremain=0;
 END IF;

 IF ISNULL(interestRem) THEN
SET interestRem=0;
 END IF;

  IF ISNULL(p_remain) THEN
SET p_remain=0;
 END IF;

  IF ISNULL(i_remain) THEN
SET i_remain=0;
 END IF;

   IF ISNULL(arrears) THEN
SET arrears=0;
 END IF;

INSERT INTO aging_loan_analysis1 VALUES (ID,customerName,customerContactNumber,DATE_FORMAT(TrnDate,'%d/%m/%Y'),DATE_FORMAT(instalmentDueDate(loanId),'%d/%m/%Y'),remainport,princeremain,interestRem,p_remain,i_remain,arrears);


    SET l_done=0;
 END LOOP accounts_loop;

 CLOSE forSelectingLoanIds;

 SELECT COUNT(id_1) INTO @port1  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears<30;
 SELECT COUNT(id_1) INTO @port2  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=30 AND number_of_days_in_arrears<60 ;
  SELECT COUNT(id_1) INTO @port3  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=60 AND number_of_days_in_arrears<90 ;
   SELECT COUNT(id_1) INTO @port4  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=90 AND number_of_days_in_arrears<360 ;

 SELECT COUNT(id_1) INTO @port5  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=360;




IF @port1 >0 THEN
 INSERT INTO aging_loan_analysis2 VALUES(0,'0-30','PERFORMING PORTFOLIO',"-","-","-","-","-","-","-","-");

  INSERT INTO  aging_loan_analysis2( 
  `id_2`,
  `customer_name` ,
  `customer_contact` ,
  `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
`interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears<30 ORDER BY number_of_days_in_arrears ASC;
   

  
  INSERT INTO  aging_loan_analysis2( 
  `id_2`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  'TOTAL' ,
  "-" ,
  "-" ,
  "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 "-"  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears<30;

  --  INSERT INTO aging_loan_analysis2 VALUES(0,"-","-","-","-","-","-","-","-");
END IF;

IF @port2 >0 THEN
   INSERT INTO aging_loan_analysis3 VALUES(0,'30-60','PORTFOLIO AT RISK',"-","-","-","-","-","-","-","-");
  
  INSERT INTO  aging_loan_analysis3( 
  `id_3`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=30 AND number_of_days_in_arrears<60 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis3( 
  `id_3`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 "-"  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=30 AND number_of_days_in_arrears<60 ;

  --  INSERT INTO aging_loan_analysis3 VALUES(0,"-","-","-","-","-","-","-","-");

END IF;

IF @port3 >0 THEN

   INSERT INTO aging_loan_analysis4 VALUES(0,'60-90','PORTFOLIO AT RISK',"-","-","-","-","-","-","-","-");

    
    INSERT INTO  aging_loan_analysis4( 
  `id_4`,
  `customer_name` ,
  `customer_contact` ,
     `date_taken`,
     `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=60 AND number_of_days_in_arrears<90 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis4( 
  `id_4`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 "-"  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=60 AND number_of_days_in_arrears<90 ;

  --  INSERT INTO aging_loan_analysis4 VALUES(0,"-","-","-","-","-","-","-","-");


END IF;

IF @port4 >0 THEN
   INSERT INTO aging_loan_analysis5 VALUES(0,'90-360','NON PERFORMING PORTFOLIO',"-","-","-","-","-","-","-","-");
    
   
    INSERT INTO  aging_loan_analysis5( 
  `id_5`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,
    `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,
    `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=90 AND number_of_days_in_arrears<360 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis5( 
  `id_5`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,
    `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 "-"  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=90 AND number_of_days_in_arrears<360 ;

  --  INSERT INTO aging_loan_analysis5 VALUES(0,"-","-","-","-","-","-","-","-");


END IF;

IF @port5 >0 THEN
   INSERT INTO aging_loan_analysis6 VALUES(0,'360 AND Above','PORTFOLIO DUE FOR WRITE OFF',"-","-","-","-","-","-","-","-");

   
    INSERT INTO  aging_loan_analysis6( 
  `id_6`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
`interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=360 ORDER BY number_of_days_in_arrears ASC;
   
INSERT INTO  aging_loan_analysis5( 
  `id_5`,
  `customer_name` ,
  `customer_contact` ,
    `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
  "-",
  'TOTAL' ,
  "-" ,
    "-" ,
      "-" ,
 SUM( `loans_remaining`) ,
  SUM(`principal_remaining`) ,
  SUM(`interest_remaining`),
  SUM(`principal_inarrears`) ,
  SUM(`interest_inarrears`) ,
 "-"  FROM aging_loan_analysis1 WHERE number_of_days_in_arrears>=360; 

END IF;

   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_2`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis2;

  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_3`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis3;

  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_4`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis4;
  
  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_5`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis5;

  
   INSERT INTO  aging_loan_analysis7( 
  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,`due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` 
  ) SELECT 
   `id_6`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears`  FROM aging_loan_analysis6;

SELECT  `id_7`,
  `customer_name` ,
  `customer_contact` ,
      `date_taken`,
      `due_date`,
  `loans_remaining` ,
  `principal_remaining` ,
  `interest_remaining`,
  `principal_inarrears` ,
  `interest_inarrears` ,
  `number_of_days_in_arrears` FROM aging_loan_analysis7;
END

##
DELIMITER ;

CALL agingAnalysisStaff(10022);




/* LOAN RECEIPT PRINTING */
DROP PROCEDURE IF EXISTS loanPrintingDetails;

DELIMITER ##

CREATE PROCEDURE   loanPrintingDetails(IN batchNumber VARCHAR(45),IN staffId VARCHAR(45))
BEGIN

 DECLARE l_done INT;
 DECLARE AmountPaidL,AmountRemainL,loan_takenL,princimpalL,interestL DOUBLE;
  DECLARE loanTrnIdL,companyName,companyBranch,companyBoxNumber,accountNumberL,LoanStatus VARCHAR(60);
DECLARE date_takenL DATE;

DROP TABLE IF EXISTS loanPrintDetails;

CREATE TEMPORARY  TABLE loanPrintDetails(
id_1 INTEGER, -- 0
company_name VARCHAR(60),-- 1
company_branch VARCHAR(60),-- 2
company_box_number VARCHAR(60),-- 3
customer_name VARCHAR(60),-- 4
staff_name VARCHAR(60),-- 5
loan_taken VARCHAR(60),-- 6
date_taken DATE,-- 7
loans_paid VARCHAR(60),-- 8
loan_remaining VARCHAR(60),-- 9
batchNumber  VARCHAR(60),-- 10
loanID  VARCHAR(60),-- 11
trn_date VARCHAR(60),-- 12
trn_time TIME,-- 13
LoanStatus VARCHAR(60),-- 14
princimpal_amount VARCHAR(60),-- 15
interest_amount VARCHAR(60));-- 16


SELECT loanTrnId,AmountPaid,LoanBalance,AccountNumber,LoanStatusReport INTO loanTrnIdL,AmountPaidL,AmountRemainL,accountNumberL ,LoanStatus FROM   loandisburserepaystatement WHERE BatchCode=batchNumber;

SELECT the_company_name, the_company_branch,the_company_box_number INTO companyName,companyBranch, companyBoxNumber FROM the_company_datails;

SELECT ExpectedTotalAmount,TrnDate,AmountDisbursed,ExpectedInterest INTO loan_takenL,date_takenL,princimpalL,interestL  FROM loandisburserepaystatement WHERE loanTrnId=loanTrnIdL ORDER BY TrnId ASC LIMIT 1;

select trn_id into l_done from general_ledger where chq_number=batchNumber ORDER BY trn_id ASC LIMIT 1;
-- select AmountRemainL;
INSERT INTO loanPrintDetails VALUES (l_done,companyName,companyBranch,companyBoxNumber,customerNameL(accountNumberL),staffName(staffId),FORMAT(loan_takenL,0),date_takenL,FORMAT(AmountPaidL,0),FORMAT(AmountRemainL,0),batchNumber,loanTrnIdL,DATE_FORMAT(DATE(NOW()),'%d/%m/%Y'),TIME(NOW()),LoanStatus,FORMAT(princimpalL,0),FORMAT(interestL,0));


   SELECT * FROM loanPrintDetails;

END

##
DELIMITER ;

CALL loanPrintingDetails('BTN5160',10019);




/* CURRENT SHIFT FUNCTION */

DROP FUNCTION IF EXISTS customerNameL;
DELIMITER ##
CREATE FUNCTION customerNameL(accounNumber VARCHAR(30)) 
RETURNS VARCHAR(60)
DETERMINISTIC
BEGIN
DECLARE customerNameNow VARCHAR(40);

SELECT account_name INTO customerNameNow FROM account_created_store WHERE  account_number=accounNumber;
IF ISNULL(customerNameNow) THEN
 SET customerNameNow='MISSING';
 END IF;
RETURN customerNameNow;
END ##
DELIMITER ;


/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS staffName;
DELIMITER ##
CREATE FUNCTION staffName(staffId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC
BEGIN
DECLARE staffNameNow VARCHAR(40);

SELECT account_name INTO staffNameNow FROM log_in WHERE  user_id=staffId;
 IF ISNULL(staffNameNow) THEN
 SET staffNameNow='MISSING';
 END IF;
RETURN staffNameNow;
END ##
DELIMITER ;


/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS staffName1;
DELIMITER ##
CREATE FUNCTION staffName1(staffId INT) 
RETURNS VARCHAR(40)
DETERMINISTIC
BEGIN
DECLARE staffNameNow VARCHAR(40);

SELECT account_name INTO staffNameNow FROM pmms.log_in WHERE  user_id=staffId;
 IF ISNULL(staffNameNow) THEN
 SET staffNameNow='MISSING';
 END IF;
RETURN staffNameNow;
END ##
DELIMITER ;