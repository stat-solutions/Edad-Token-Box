-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema edadtokenapp

-- Arrange company setup,continent,continental region,country,business unit,country region.

-- user,user roles,next of kin, address,

-- constants
-- --------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `edadtokenapp` DEFAULT CHARACTER SET utf8 ;
USE `edadtokenapp` ;


/*==============PART ONE:COMPANY SETUP=============*/

-- Table `the_company_datails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_company_datails` (
  `the_company_details_id` INT(11) NOT NULL AUTO_INCREMENT,
  `the_company_name` VARCHAR(100) NULL DEFAULT 'Edad Coin SMS-Ltd',
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`the_company_details_id`)
  )
ENGINE = InnoDB
AUTO_INCREMENT = 16000
DEFAULT CHARACTER SET = utf8;



-- ---------------------------------------------------
-- Table `continent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `continent` (
  `continent_id` INT(11) NOT NULL AUTO_INCREMENT,
  `continent_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_the_company_details_id_continent` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`continent_id`),
  CONSTRAINT `fk_the_company_details_id_continent`
    FOREIGN KEY (`fk_the_company_details_id_continent`)
    REFERENCES `the_company_datails` (`the_company_details_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 300
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_the_company_details_id_continent_idx` ON `continent` (`fk_the_company_details_id_continent` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `continental_region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `continental_region` (
  `continental_region_id` INT(11) NOT NULL AUTO_INCREMENT,
  `continental_region_name` VARCHAR(100) NULL DEFAULT 'East Africa',
  `fk_continent_id_continental_region` INT(11) NULL DEFAULT '1',
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`continental_region_id`),
  CONSTRAINT `fk_continent_id_continental_region`
    FOREIGN KEY (`fk_continent_id_continental_region`)
    REFERENCES `continent` (`continent_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 400
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_continent_id_continental_region` ON `continental_region` (`fk_continent_id_continental_region` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `country` (
  `country_id` INT(11) NOT NULL AUTO_INCREMENT,
  `country_name` VARCHAR(100) NULL DEFAULT 'Uganda',
  `fk_continental_region_id_country` INT(11) NULL DEFAULT '1',
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`country_id`),
  CONSTRAINT `fk_continental_region_id_country` 
  FOREIGN KEY (`fk_continental_region_id_country`) 
  REFERENCES `continental_region`(`continental_region_id`)
   ON DELETE CASCADE 
   ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 500
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_continental_region_id_country_idx` ON `country`(`fk_continental_region_id_country` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `bussiness_unit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bussiness_unit` (
  `bussiness_unit_id` INT(11) NOT NULL AUTO_INCREMENT,
  `bussiness_unit_type` VARCHAR(45) NULL,
  `bussines_unit_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_country_id_bussiness_unit` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`bussiness_unit_id`),
  CONSTRAINT `fk_country_id_bussiness_unit`
    FOREIGN KEY (`fk_country_id_bussiness_unit`)
    REFERENCES `country` (`country_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 60
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_country_id_bussiness_unit_idx` ON `bussiness_unit` (`fk_country_id_bussiness_unit` ASC) VISIBLE;




-- -----------------------------------------------------
-- Table `country_region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `country_region` (
  `country_region_id` INT(11) NOT NULL AUTO_INCREMENT,
  `country_region_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_country_id_country_region` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
 PRIMARY KEY (`country_region_id`),
  CONSTRAINT `fk_country_id_country_region`
    FOREIGN KEY (`fk_country_id_country_region`)
    REFERENCES `country` (`country_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 700
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_country_id_country_region_idx` ON `country_region` (`fk_country_id_country_region` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `language` (
  `language_id` INT(11) NOT NULL AUTO_INCREMENT,
  `language_name` VARCHAR(100) NULL DEFAULT 'English (United Kingdom)',
  `language_iso_code` VARCHAR(45) NULL DEFAULT 'en-gb',
  `fk_country_id_language` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`language_id`),
  CONSTRAINT `fk_country_id_language`
    FOREIGN KEY (`fk_country_id_language`)
    REFERENCES `country` (`country_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 12000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_country_id_language` ON `language` (`fk_country_id_language` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `banks`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `banks` (
  `banks_id` INT(11) NOT NULL AUTO_INCREMENT,
  `banks_name` VARCHAR(100) NULL DEFAULT NULL,
  `banks_short_name` VARCHAR(45) NULL DEFAULT NULL,
  `banks_swift_code` VARCHAR(100) NULL DEFAULT NULL,
  `fk_country_id_banks` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`banks_id`),
  CONSTRAINT `fk_country_id_banks`
    FOREIGN KEY (`fk_country_id_banks`)
    REFERENCES `country` (`country_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 50
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_country_id_banks` ON `banks` (`fk_country_id_banks` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `bank_details`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_details` (
  `bank_details_id` INT(11) NOT NULL AUTO_INCREMENT,
  `system_bank_account_number` VARCHAR(100) NULL DEFAULT NULL,
  `system_bank_name` VARCHAR(100) NULL DEFAULT NULL,
  `actual_bank_account_number` VARCHAR(100) NULL DEFAULT NULL,
  `actual_bank_account_name` VARCHAR(100) NULL DEFAULT NULL,
  `bank_branch_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_next_of_kin_id_bank_details` INT(11) NULL DEFAULT NULL,

  `fk_banks_id_bank_details` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`bank_details_id`),
  CONSTRAINT `fk_banks_id_bank_details`
    FOREIGN KEY (`fk_banks_id_bank_details`)
    REFERENCES `banks` (`banks_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_next_of_kin_id_bank_details`
    FOREIGN KEY (`fk_next_of_kin_id_bank_details`)
    REFERENCES `next_of_kin` (`next_of_kin_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 40
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_next_of_kin_id_bank_details` ON `bank_details` (`fk_next_of_kin_id_bank_details` ASC) VISIBLE;

CREATE INDEX `fk_banks_id_bank_details` ON `bank_details` (`fk_banks_id_bank_details` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `country_currency`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `country_currency` (
  `country_currency_id` INT(11) NOT NULL AUTO_INCREMENT,
  `country_currency_name` VARCHAR(100) NULL DEFAULT NULL,
  `country_currency_short_name` VARCHAR(100) NULL DEFAULT NULL,
  `country_currency_symbol` VARCHAR(45) NULL DEFAULT NULL,

  `fk_country_id_country_currency` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`country_currency_id`),
  CONSTRAINT `fk_country_id_country_currency`
    FOREIGN KEY (`fk_country_id_country_currency`)
    REFERENCES `country` (`country_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 600
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_country_id_country_currency` ON `country_currency` (`fk_country_id_country_currency` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `gate_way`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `gate_way` (
  `gate_way_id` INT(11) NOT NULL AUTO_INCREMENT,
  `gate_way_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_country_currency_id_gate_way` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`gate_way_id`),
  CONSTRAINT `fk_country_currency_id_gate_way`
    FOREIGN KEY (`fk_country_currency_id_gate_way`)
    REFERENCES `country_currency` (`country_currency_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_country_currency_id_gate_way` ON `gate_way` (`fk_country_currency_id_gate_way` ASC) VISIBLE;





/*==============PART TWO:USER DETAILS SETUPS=============*/

-- ---------------------------------------------------
-- Table `user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS  `user_role`;
CREATE TABLE IF NOT EXISTS `user_role` (
  `user_role_id` INT NOT NULL,-- 1000=SMART SAVER...
  `user_role_name` VARCHAR(45) NULL,
  `user_role_category` VARCHAR(45) NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
   PRIMARY KEY (`user_role_id`))
 ENGINE=InnoDB  DEFAULT CHARSET=utf8;



-- ---------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS  `users`;

CREATE TABLE `users` (
  `users_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_contact` varchar(45) DEFAULT '0782231039',
  `users_password` varchar(500) DEFAULT 'XXXXXX',
  `users_approval_status` INT, -- 1=Created,2=Approved
  `fk_user_role_id_users` int(11) DEFAULT NULL,
  `fk_country_region_id_users` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`users_id`),
  KEY `fk_user_role_id_users` (`fk_user_role_id_users`),
  CONSTRAINT `fk_user_role_id_users` FOREIGN KEY (`fk_user_role_id_users`) REFERENCES `user_role` (`user_role_id`) ON DELETE CASCADE,

   CONSTRAINT `fk_country_region_id_users`
    FOREIGN KEY (`fk_country_region_id_users`)
    REFERENCES `country_region` (`country_region_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=100000000 DEFAULT CHARSET=utf8;

CREATE INDEX `fk_user_role_id_users_idx` ON `users` (`fk_user_role_id_users` ASC) VISIBLE;

CREATE INDEX `fk_country_region_id_users_idx` ON `users` (`fk_country_region_id_users` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `token_approval`
-- -----------------------------------------------------

DROP TABLE IF EXISTS  `token_approval`;

CREATE TABLE `token_approval` (
  
  `token_approval_status` INT, -- 1=Created,2=Approved
  
  `token_approval_type` varchar(45),  -- 1=Admin, 2=Agent

  `token_approval_type_contact` varchar(45) DEFAULT '0782231039',

  `fk_box_general_ledger_id_token_approval` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  KEY `fk_box_general_ledger_id_token_approval` (`fk_box_general_ledger_id_token_approval`),
  CONSTRAINT `fk_box_general_ledger_id_token_approval` FOREIGN KEY (`fk_box_general_ledger_id_token_approval`) REFERENCES `box_general_ledger` (`box_general_ledger_id`) ON DELETE CASCADE
 
 ON UPDATE 

 NO ACTION

) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE INDEX `fk_box_general_ledger_id_token_approval_idx` ON `token_approval` (`fk_box_general_ledger_id_token_approval` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `token_approval_type`
-- -----------------------------------------------------

DROP TABLE IF EXISTS  `token_approval_type`;

CREATE TABLE `token_approval_type` (
  
  `token_approval_actual_type` INT, -- 1=Withdraw,2=Purchase
  


  `fk_box_general_ledger_id_token_approval_type` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  KEY `fk_box_general_ledger_id_token_approval_type` (`fk_box_general_ledger_id_token_approval_type`),
  CONSTRAINT `fk_box_general_ledger_id_token_approval_type` FOREIGN KEY (`fk_box_general_ledger_id_token_approval_type`) REFERENCES `box_general_ledger` (`box_general_ledger_id`) ON DELETE CASCADE
 
 ON UPDATE 

 NO ACTION

) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE INDEX `fk_box_general_ledger_id_token_approval_type_idx` ON `token_approval_type` (`fk_box_general_ledger_id_token_approval_type` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `agents_commision`
-- -----------------------------------------------------

DROP TABLE IF EXISTS  `agents_commision`;

CREATE TABLE `agents_commision` (
  
  `token_approval_status` INT, -- 1=Created,2=Approved
  
  `token_approval_type` varchar(45),  -- 1=Admin, 2=Agent

  `token_approval_type_contact` varchar(45) DEFAULT '0782231039',

  `fk_box_general_ledger_id_token_approval` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  KEY `fk_box_general_ledger_id_token_approval` (`fk_box_general_ledger_id_token_approval`),
  CONSTRAINT `fk_box_general_ledger_id_token_approval` FOREIGN KEY (`fk_box_general_ledger_id_token_approval`) REFERENCES `box_general_ledger` (`box_general_ledger_id`) ON DELETE CASCADE
 
 ON UPDATE 

 NO ACTION

) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE INDEX `fk_box_general_ledger_id_token_approval_idx` ON `token_approval` (`fk_box_general_ledger_id_token_approval` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `users_approval`
-- -----------------------------------------------------

DROP TABLE IF EXISTS  `users_approval`;

CREATE TABLE `users_approval` (
  `users_approval_status` INT, -- 1=Created,2=Approved
  
  `users_approval_type` varchar(45),  -- 1=Admin, 2=Agent

  `users_approval_type_contact` varchar(45) DEFAULT '0782231039',

  `fk_users_id_users_approval` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  KEY `fk_users_id_users_approval` (`fk_users_id_users_approval`),
  CONSTRAINT `fk_users_id_users_approval` FOREIGN KEY (`fk_users_id_users_approval`) REFERENCES `users` (`users_id`) ON DELETE CASCADE
 
 ON UPDATE 

 NO ACTION

) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE INDEX `fk_users_id_users_approval_idx` ON `users_approval` (`fk_users_id_users_approval` ASC) VISIBLE;


/*The first next of kin will always be the company details to enforce referential integrity and be able to use the tables say adress for both next of kin, users and the company */


-- -----------------------------------------------------
-- Table `next_of_kin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `next_of_kin` (
  `next_of_kin_id` INT(11) NOT NULL AUTO_INCREMENT,
  `relationship_with_user` VARCHAR(45) NULL DEFAULT 'Husband',
  `fk_users_id_next_of_kin` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`next_of_kin_id`),
  CONSTRAINT `fk_users_id_next_of_kin`
    FOREIGN KEY (`fk_users_id_next_of_kin`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 13000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_users_id_next_of_kin_indx` ON `next_of_kin` (`fk_users_id_next_of_kin` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `document_identification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `document_identification` (
  `document_identification_id` INT(11) NOT NULL AUTO_INCREMENT,
  `document_type` VARCHAR(100) NULL DEFAULT NULL,
  `document_number` VARCHAR(100) NULL DEFAULT NULL,
  `identification_number` VARCHAR(100) NULL DEFAULT NULL,
  `insuance_date` TIMESTAMP NULL DEFAULT NULL,
  `expirely_date` TIMESTAMP NULL DEFAULT NULL,
  `issueing_authority` VARCHAR(200) NULL DEFAULT NULL,
  `fk_next_of_kin_id_document_identification` INT(11) NULL DEFAULT NULL,
  `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`document_identification_id`),
  CONSTRAINT `fk_next_of_kin_id_document_identification`
    FOREIGN KEY (`fk_next_of_kin_id_document_identification`)
    REFERENCES `next_of_kin` (`next_of_kin_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1000
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `next_of_kin_id` ON `document_identification` (`fk_next_of_kin_id_document_identification` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `images_path`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `images_path` (
  `images_path_id` INT(11) NOT NULL AUTO_INCREMENT,
  `images_path_actual_path` VARCHAR(100) NULL DEFAULT NULL,
  `image_name` VARCHAR(100) NULL DEFAULT NULL,
  `image_caption` VARCHAR(100) NULL DEFAULT NULL,
  `fk_next_of_kin_id_images_path` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`images_path_id`),
  CONSTRAINT `fk_next_of_kin_id_images_path`
    FOREIGN KEY (`fk_next_of_kin_id_images_path`)
    REFERENCES `next_of_kin` (`next_of_kin_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 11000
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `fk_next_of_kin_id_images_path` ON `images_path` (`fk_next_of_kin_id_images_path` ASC) VISIBLE;





-- ---------------------------------------------------
-- Table `common_bio_data`
-- -----------------------------------------------------
DROP TABLE IF  EXISTS `common_bio_data`;
CREATE TABLE IF NOT EXISTS `common_bio_data` (
  `common_bio_data_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT 'Augustine Bazirake Googo',
  `sex` VARCHAR(45) NULL DEFAULT 'Male',
  `date_of_birth` VARCHAR(45) NULL DEFAULT '1983-10-04',
    `national_id` VARCHAR(60) NULL DEFAULT 'XXXXXXXXXX',
  `fk_next_of_kin_id_common_bio_data` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`common_bio_data_id`),
  CONSTRAINT `fk_next_of_kin_id_common_bio_data`
    FOREIGN KEY (`fk_next_of_kin_id_common_bio_data`)
    REFERENCES `next_of_kin` (`next_of_kin_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
  
ENGINE = InnoDB
AUTO_INCREMENT = 90
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_next_of_kin_id_common_bio_data` ON `common_bio_data` (`fk_next_of_kin_id_common_bio_data` ASC) VISIBLE;




-- ---------------------------------------------------
-- Table `contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contacts` (
  `contact_id` INT(11) NOT NULL AUTO_INCREMENT,
  `phone1` VARCHAR(100) NULL DEFAULT NULL,
  `phone2` VARCHAR(100) NULL DEFAULT NULL,
  `phone3` VARCHAR(100) NULL DEFAULT NULL,
  `email1` VARCHAR(100) NULL DEFAULT NULL,
  `email2` VARCHAR(100) NULL DEFAULT NULL,
  `fk_next_of_kin_id_contacts` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`contact_id`),
  CONSTRAINT `fk_next_of_kin_id_contacts`
  FOREIGN KEY (`fk_next_of_kin_id_contacts`)
  REFERENCES `next_of_kin`(`next_of_kin_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION)

ENGINE = InnoDB
AUTO_INCREMENT = 200
DEFAULT CHARACTER SET = utf8;

CREATE INDEX fk_next_of_kin_id_contacts_indx ON
`contacts`(`fk_next_of_kin_id_contacts` ASC);



-- --------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `address` (
  `address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `box_number` VARCHAR(200) NULL DEFAULT NULL,
  `fk_next_of_kin_id_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`address_id`),

  CONSTRAINT `fk_next_of_kin_id_address`
    FOREIGN KEY (`fk_next_of_kin_id_address`)
    REFERENCES `next_of_kin` (`next_of_kin_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
KEY_BLOCK_SIZE = 1;


CREATE INDEX `fk_next_of_kin_id_address` ON `address` (`fk_next_of_kin_id_address` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `current_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `current_address` (
  `current_address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `residance_status` VARCHAR(100) NULL DEFAULT NULL,
  `plot_number` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_current_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`current_address_id`),
  CONSTRAINT `address_id`
    FOREIGN KEY (`fk_address_id_current_address`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 800
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `address_id` ON `current_address` (`fk_address_id_current_address` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `home_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_address` (
  `home_address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `place_of_birth` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_home_address` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`home_address_id`),
  CONSTRAINT `fk_address_id_home_address`
    FOREIGN KEY (`fk_address_id_home_address`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 9000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_home_address` ON `home_address` (`fk_address_id_home_address` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `city` (
  `city_id` INT(11) NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_city` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`city_id`),
  CONSTRAINT `fk_address_id_city`
    FOREIGN KEY (`fk_address_id_city`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 80
DEFAULT CHARACTER SET = utf8;


CREATE INDEX `fk_address_id_city_indx` ON `city` (`fk_address_id_city` ASC) VISIBLE;




-- ---------------------------------------------------
-- Table `district`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `district` (
  `district_id` INT(11) NOT NULL AUTO_INCREMENT,
  `district_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_district` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`district_id`),
  CONSTRAINT `fk_address_id_district`
    FOREIGN KEY (`fk_address_id_district`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
 )
ENGINE = InnoDB
AUTO_INCREMENT = 900
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_district_indx` ON `district` (`fk_address_id_district` ASC) VISIBLE;



-- -----------------------------------------------------
-- Table `county`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `county` (
  `county_id` INT(11) NOT NULL AUTO_INCREMENT,
  `county_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_county` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`county_id`),
  CONSTRAINT `fk_address_id_county`
    FOREIGN KEY (`fk_address_id_county`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 800
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_district_id_county_indx` ON `county` (`fk_address_id_county` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `sub_county`
-- -------------------------------------------------
CREATE TABLE IF NOT EXISTS `sub_county` (
  `sub_county_id` INT(11) NOT NULL AUTO_INCREMENT,
  `sub_county_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_sub_county` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`sub_county_id`),
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  CONSTRAINT `fk_address_id_sub_county`
    FOREIGN KEY (`fk_address_id_sub_county`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 15000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_sub_county_indx` ON `sub_county` (`fk_address_id_sub_county` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `parish`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `parish` (
  `parish_id` INT(11) NOT NULL AUTO_INCREMENT,
  `parish_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_parish` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`parish_id`),
  CONSTRAINT `fk_address_id_parish`
    FOREIGN KEY (`fk_address_id_parish`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 14000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_parish_indx` ON `parish` (`fk_address_id_parish` ASC) VISIBLE;


-- ---------------------------------------------------
-- Table `town`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `town` (
  `town_id` INT(11) NOT NULL AUTO_INCREMENT,
  `town_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_town` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`town_id`),
  CONSTRAINT `fk_address_id_town`
    FOREIGN KEY (`fk_address_id_town`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_town_indx` ON `town` (`fk_address_id_town` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `village`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `village` (
  `village_id` INT(11) NOT NULL AUTO_INCREMENT,
  `village_name` VARCHAR(100) NULL DEFAULT NULL,
  `fk_address_id_village` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`village_id`),
  CONSTRAINT `fk_address_id_village`
    FOREIGN KEY (`fk_address_id_village`)
    REFERENCES `address` (`address_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 18000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_address_id_village_indx` ON `village` (`fk_address_id_village` ASC) VISIBLE;










/*==============PART 3: BOX TRANSACTIONS=============*/

-- ---------------------------------------------------
-- Table `gate_way_transactions`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `gate_way_transactions` (
  
  `gate_way_transactions_id` INT(11) NOT NULL AUTO_INCREMENT,
  `transaction_date` TIMESTAMP NULL DEFAULT NULL,
  `amount_transacted` VARCHAR(45) NULL DEFAULT NULL,
  `txn_ref_number` VARCHAR(45) NULL DEFAULT NULL,
   `txn_ref_message` VARCHAR(45) NULL DEFAULT NULL,
  `source_name` VARCHAR(45) NULL DEFAULT NULL,
  `txn_status` VARCHAR(45) NULL DEFAULT NULL,
  `fk_gate_way_id_gate_way_transactions` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`gate_way_transactions_id`),
  CONSTRAINT `fk_gate_way_id_gate_way_transactions`
    FOREIGN KEY (`fk_gate_way_id_gate_way_transactions`)
    REFERENCES `gate_way` (`gate_way_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 8000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_gate_way_id_gate_way_transactions` ON `gate_way_transactions` (`fk_gate_way_id_gate_way_transactions` ASC) VISIBLE;





-- ---------------------------------------------------
-- Table `box_general_ledger`
-- ---------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `box_general_ledger` (
--   `box_general_ledger_id` INT(11) NOT NULL AUTO_INCREMENT,
--   `txn_date` TIMESTAMP  NULL DEFAULT NULL,
--   `trn_narration` TINYTEXT NULL DEFAULT NULL,
--   `transfered_from_box_account` VARCHAR(100) NULL DEFAULT NULL,
--   `edad_box_account` VARCHAR(100) NULL DEFAULT NULL,
--   `tokens_debit` DOUBLE NULL DEFAULT NULL,
--   `tokens_credit` DOUBLE NULL DEFAULT NULL,
--   `fk_edad_box_id_box_general_ledger` INT(11) NULL DEFAULT NULL,
--    `fk_gate_way_transactions_id_box_general_ledger` INT(11) NULL DEFAULT NULL,
--   PRIMARY KEY (`box_general_ledger_id`),

--   CONSTRAINT `fk_edad_box_id_box_general_ledger`
--   FOREIGN KEY (`fk_edad_box_id_box_general_ledger`)
--   REFERENCES `edad_box`(`edad_box_id`)
--   ON DELETE CASCADE
--   ON UPDATE NO ACTION,
  
--     CONSTRAINT `fk_gate_way_transactions_id_box_general_ledger`
--   FOREIGN KEY (`fk_gate_way_transactions_id_box_general_ledger`)
--   REFERENCES `gate_way_transactions`(`gate_way_transactions_id`)
--   ON DELETE CASCADE
--   ON UPDATE NO ACTION)
-- ENGINE = InnoDB
-- AUTO_INCREMENT = 4000
-- DEFAULT CHARACTER SET = utf8;

-- CREATE INDEX `fk_edad_box_id_box_general_ledger_indx` ON `box_general_ledger`(`fk_edad_box_id_box_general_ledger` ASC);

-- CREATE INDEX `fk_gate_way_transactions_id_box_general_ledger_indx` ON `box_general_ledger`(`fk_gate_way_transactions_id_box_general_ledger` ASC);




-- ---------------------------------------------------
-- Table `box_general_ledger`
-- ---------------------------------------------------
DROP TABLE IF EXISTS `box_general_ledger`;

CREATE TABLE IF NOT EXISTS `box_general_ledger` (
  `box_general_ledger_id` INT(11) NOT NULL AUTO_INCREMENT,
  `txn_date` TIMESTAMP NULL DEFAULT NULL,
  `trn_narration` TINYTEXT NULL DEFAULT NULL,
  `transfered_from_box_account` VARCHAR(100) NULL DEFAULT NULL,
  `edad_box_account` VARCHAR(100) NULL DEFAULT NULL,
  `tokens_debit` DOUBLE NULL DEFAULT NULL,
  `tokens_credit` DOUBLE NULL DEFAULT NULL,
  `fk_edad_box_id_box_general_ledger` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`box_general_ledger_id`),

  CONSTRAINT `fk_edad_box_id_box_general_ledger`
  FOREIGN KEY (`fk_edad_box_id_box_general_ledger`)
  REFERENCES `edad_box`(`edad_box_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_edad_box_id_box_general_ledger_indx` ON `box_general_ledger`(`fk_edad_box_id_box_general_ledger` ASC);


-- ---------------------------------------------------
            -- Table `edad_box`
-- ---------------------------------------------------
CREATE TABLE IF NOT EXISTS `edad_box` (
  `edad_box_id` INT NOT NULL AUTO_INCREMENT,
  `edad_box_type_name` VARCHAR(45) NULL DEFAULT 'Individual',
  `edad_box_type_category` VARCHAR(45) NULL DEFAULT 'Box_for_God',
  `edad_box_type_sub_category` VARCHAR(45) NULL DEFAULT 'individual_box_for_God',
  `edad_box_type_sub_category_id` INT NULL,
  `fk_user_id_edad_box` INT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`edad_box_id`),
  CONSTRAINT `fk_user_id_edad_box`
    FOREIGN KEY (`fk_user_id_edad_box`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3000
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_user_id_edad_box_idx` ON `edad_box` (`fk_user_id_edad_box` ASC) VISIBLE;




-- ---------------------------------------------------
-- Table `box_balance_day`
-- Running balance of the day for the system
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `box_balance_day` (
  `box_balance_day_id` INT(11) NOT NULL AUTO_INCREMENT,
  `trn_date` TIMESTAMP,
  `trn_account_id` VARCHAR(100) NULL DEFAULT NULL,
  `trn_balance` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`box_balance_day_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8;




-- -----------------------------------------------------
-- Table `box_balance_account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `box_balance_account` (
  `box_balance_account_id` INT NOT NULL AUTO_INCREMENT,
  `trn_date` TIMESTAMP,
  `complete_status` INT NULL, -- 1=OnGoing,2=Completed
  `individual_box_sub_category_box` INT NULL,
  `individual_box_balance` VARCHAR(45) NULL,
  `fk_edad_general_balances_box_balance_account` INT NULL,
  PRIMARY KEY (`box_balance_account_id`),
  CONSTRAINT `fk_edad_general_balances_box_balance_account`
    FOREIGN KEY (`fk_edad_general_balances_box_balance_account`)
    REFERENCES `box_general_ledger` (`box_general_ledger_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 171000;

CREATE INDEX `fk_edad_general_balances_box_balance_account_idx` ON `box_balance_account` (`fk_edad_general_balances_box_balance_account` ASC) VISIBLE;



-- =================PART 4: EDAD CONSTANTS==========
-- ---------------------------------------------------
-- Table `edad_constants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `edad_constants` (
  `edad_constants_id` INT(11) NOT NULL AUTO_INCREMENT,
  `edad_interestRate_payable` DOUBLE NULL DEFAULT NULL,
  `edad_interestRate_days`  INT(11)  NULL DEFAULT NULL,
  `edad_interest_withdraw_days` INT(11) NULL DEFAULT NULL,
  `edad_number_of_tokens` DOUBLE NULL DEFAULT NULL,
   `interest_paid_on_agency` INT(11) NULL DEFAULT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`edad_constants_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 100
DEFAULT CHARACTER SET = utf8;






-- ---------------------------------------------------
-- Table `interest_accrued`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interest_accrued` (
  `interest_accrued_id` INT(11) NOT NULL AUTO_INCREMENT,
  `token_balance` DOUBLE NULL DEFAULT NULL,
  `interest_removed` DOUBLE NULL DEFAULT NULL,
  `interest_added` DOUBLE NULL DEFAULT NULL,
  `interest_balance` DOUBLE NULL DEFAULT NULL,
  `interest_start_time` TIMESTAMP,
  `interest_expirely_time` TIMESTAMP,
  `number_of_days_accrued` INT,
  `number_of_days_to_withdraw` INT,
  `fk_box_balance_account_id_interest_accrued` INT NULL,
  `fk_user_id_interest_accrued` INT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`interest_accrued_id`),
  
  CONSTRAINT `fk_box_balance_account_id_interest_accrued`
  FOREIGN KEY (`fk_box_balance_account_id_interest_accrued`)
  REFERENCES `box_balance_account` (`box_balance_account_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,

  CONSTRAINT `fk_user_id_interest_accrued`
  FOREIGN KEY (`fk_user_id_interest_accrued`)
  REFERENCES `users` (`users_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION 
  )
ENGINE = InnoDB
AUTO_INCREMENT = 10007
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_box_balance_account_id_interest_accrued_idx` ON `interest_accrued` (`fk_box_balance_account_id_interest_accrued` ASC) VISIBLE;
CREATE INDEX `fk_user_id_interest_accrued_idx` ON `interest_accrued` (`fk_user_id_interest_accrued` ASC) VISIBLE;




-- ---------------------------------------------------
-- Table `interest_accrued_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interest_accrued_details` (
  `interest_accrued_details_id` INT(11) NOT NULL AUTO_INCREMENT,
  `token_balance_details` DOUBLE NULL DEFAULT NULL,
  `interest_removed_details` DOUBLE NULL DEFAULT NULL,
  `interest_added_details` DOUBLE NULL DEFAULT NULL,
  `interest_balance_details` DOUBLE NULL DEFAULT NULL,
  `interest_expirely_time_details` TIMESTAMP,
  `number_of_days_accrued_details` INT,
  `fk_interest_accrued_id_interest_accrued_details` INT NULL,
  `fk_user_id_interest_accrued_details` INT NULL,
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`interest_accrued_details_id`),
  
  CONSTRAINT `fk_interest_accrued_id_interest_accrued_details`
  FOREIGN KEY (`fk_interest_accrued_id_interest_accrued_details`)
  REFERENCES `interest_accrued` (`interest_accrued_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,

  CONSTRAINT `fk_user_id_interest_accrued_details`
  FOREIGN KEY (`fk_user_id_interest_accrued_details`)
  REFERENCES `users` (`users_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION 
  )
ENGINE = InnoDB
AUTO_INCREMENT = 30007
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_interest_accrued_id_interest_accrued_details_idx` ON `interest_accrued_details` (`fk_interest_accrued_id_interest_accrued_details` ASC) VISIBLE;
CREATE INDEX `fk_user_id_interest_accrued_details_idx` ON `interest_accrued_details` (`fk_user_id_interest_accrued_details` ASC) VISIBLE;



-- ---------------------------------------------------
-- Table `token_approval`
-- -----------------------------------------------------

DROP TABLE IF EXISTS  `interest_accrue_complete`;

CREATE TABLE `interest_accrue_complete` (
  `interest_accrue_status` INT, -- 1=OnGoing,2=Completed
  
  `fk_fk_user_id_edad_box_interest_accrue_complete` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  KEY `fk_fk_user_id_edad_box_interest_accrue_complete` (`fk_fk_user_id_edad_box_interest_accrue_complete`),
  CONSTRAINT `fk_fk_user_id_edad_box_interest_accrue_complete` FOREIGN KEY (`fk_fk_user_id_edad_box_interest_accrue_complete`) REFERENCES `edad_box` (`fk_user_id_edad_box`) ON DELETE CASCADE
 
 ON UPDATE 

 NO ACTION

) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE INDEX `fk_fk_user_id_edad_box_interest_accrue_complete_idx` ON `interest_accrue_complete` (`fk_fk_user_id_edad_box_interest_accrue_complete` ASC) VISIBLE;




-- -----------------------------------------------------
-- Table `edad_sequence_numbers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `edad_id_generator` (
  `individual_box_saving_id` INT NULL DEFAULT NULL,
  `individual_box_vending_id` INT NULL DEFAULT NULL,
  `individual_box_agency_id` INT NULL DEFAULT NULL,
  `individual_box_for_God_id` INT NULL DEFAULT NULL,
  `individual_box_school_fees_id` INT NULL DEFAULT NULL,
  `Group_box_id` INT NULL DEFAULT NULL,
  `Box_for_God_id` INT NULL DEFAULT NULL,
  `school_box_id` INT NULL DEFAULT NULL
  )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;






-- ---------------------------------------------------
-- Table `continents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `continents` (
  `continents_id` INT NOT NULL AUTO_INCREMENT,
  `continents_name` VARCHAR(45) NULL,
  PRIMARY KEY (`continents_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 80000;


-- -----------------------------------------------------
-- Table `continental_regions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `continental_regions` (
  `continental_regions_id` INT NOT NULL AUTO_INCREMENT,
  `continental_regions_name` VARCHAR(45) NULL,
  PRIMARY KEY (`continental_regions_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 70000;


-- -----------------------------------------------------
-- Table `countries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `countries` (
  `idcountries_id` INT NOT NULL AUTO_INCREMENT,
  `countries_name` VARCHAR(100) NULL,
  `countries_code` VARCHAR(45) NULL,
  PRIMARY KEY (`idcountries_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 110000;


-- -----------------------------------------------------
-- Table `currencies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `currencies` (
  `currencies_id` INT NOT NULL AUTO_INCREMENT,
  `currencies_country_region` VARCHAR(100) NULL,
  `currencies_name` VARCHAR(100) NULL,
  `currencies_alphabetic_code` VARCHAR(45) NULL,
  `currencies_numeric_code` VARCHAR(45) NULL,
  `currencies_minor_unit` INT NULL,
  PRIMARY KEY (`currencies_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9000;



-- -----------------------------------------------------
-- Table `sms_management` a table holding the counter for the SMSs that the company has bought
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sms_management` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number_of_sms` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1;







/*==============PART 5: GENERAL LEDGER=============*/


-- -----------------------------------------------------
-- Table `accounts_created_store`



-- -----------------------------------------------------
DROP TABLE IF EXISTS `accounts_created_store`;

CREATE TABLE IF NOT EXISTS `accounts_created_store` (
  `accounts_created_store_id` INT NOT NULL AUTO_INCREMENT,
  `account_creation_date` TIMESTAMP NULL,
  `account_type` VARCHAR(45) NULL,--  Control,Item,ControlItem -- NOTES:account_type Control will have so many accounts feeding to it.
  -- Account type Item will have no other accounts feeding into it

  `account_name` VARCHAR(45) NULL,
  `account_number` VARCHAR(45) NULL,
   `control_account_number` VARCHAR(45) NULL,
  `account_cat_4` VARCHAR(45) NULL, --  Cash And Cash Equivalents
  `account_cat_3` VARCHAR(45) NULL,--  Current_Assets etc
  `account_cat_2` VARCHAR(45) NULL,-- Asset,Liability,Equity,Expense OR Revenue
  `account_cat_1` VARCHAR(45) NULL,-- Debit OR Credit 
  `account_status` VARCHAR(45) NULL,--  Created,First_Approved,Second_approved,Active,Dormant,Closed
  `fk_user_id_created_by_accounts_created_store` INT,
  `fk_user_id_first_approved_by_accounts_created_store` INT,
  `fk_user_id_second_approved_by_accounts_created_store` INT,
  `update_at` TIMESTAMP NULL,
  PRIMARY KEY (`accounts_created_store_id`),

  CONSTRAINT `fk_user_id_created_by_accounts_created_store`
    FOREIGN KEY (`fk_user_id_created_by_accounts_created_store`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

      CONSTRAINT `fk_user_id_first_approved_by_accounts_created_store`
    FOREIGN KEY (`fk_user_id_first_approved_by_accounts_created_store`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
    CONSTRAINT `fk_user_id_second_approved_by_accounts_created_store`
    FOREIGN KEY (`fk_user_id_second_approved_by_accounts_created_store`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_user_id_created_by_accounts_created_store_idx` ON `accounts_created_store` (`fk_user_id_created_by_accounts_created_store` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_accounts_created_store_idx` ON `accounts_created_store` (`fk_user_id_first_approved_by_accounts_created_store` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_accounts_created_store_idx` ON `accounts_created_store` (`fk_user_id_second_approved_by_accounts_created_store` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `balance_per_day`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `balance_per_day`;

CREATE TABLE IF NOT EXISTS `balance_per_day` (
  `balances_per_day_id` INT NOT NULL AUTO_INCREMENT,
  `sys_date` TIMESTAMP NULL,--  The system date. Not known to the user. Does not change. Current date
    `post_date` TIMESTAMP NULL,--  Posting date generally determined by user, will be used for reporting
  `account_number` VARCHAR(45) NULL,
  `account_name` VARCHAR(45) NULL,
  `balance_p_day` VARCHAR(45) NULL,
  `fk_general_ledger_id_balance_per_day` INT NULL,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`balances_per_day_id`),
  CONSTRAINT `fk_general_ledger_id_balance_per_day`
  FOREIGN KEY (`fk_general_ledger_id_balance_per_day`)
  REFERENCES  `general_ledger`(`general_ledger_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION
  )
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_general_ledger_id_balance_per_day_idx` ON `balance_per_day` (`fk_general_ledger_id_balance_per_day` ASC) VISIBLE;




-- -----------------------------------------------------
-- Table `balance_per_account`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `balance_per_account`;

CREATE TABLE IF NOT EXISTS `balance_per_account` (
  `balance_per_account_id` INT NOT NULL AUTO_INCREMENT,
  `sys_date` TIMESTAMP NULL,--  The system date. Not known to the user. Does not change. Current date
    `post_date` TIMESTAMP NULL,--  Posting date generally determined by user, will be used for reporting
  `account_number` VARCHAR(45) NULL,
  `account_name` VARCHAR(45) NULL,
  `balance` VARCHAR(45) NULL,
  `fk_general_ledger_id_balance_per_account` INT NULL,
  `update_at` TIMESTAMP,
  PRIMARY KEY (`balance_per_account_id`),
  CONSTRAINT `fk_general_ledger_id_balance_per_account`
  FOREIGN KEY (`fk_general_ledger_id_balance_per_account`)
  REFERENCES  `general_ledger`(`general_ledger_id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION
  )
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_general_ledger_id_balance_per_day_idx` ON `balance_per_account` (`fk_general_ledger_id_balance_per_account` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `general_ledger`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `general_ledger` (
  `general_ledger_id` INT NOT NULL,--  The unique identifier for each transaction. Will be the table Primary key
   `trn_ref` INT NULL,--  (Ref auto transact registration)System generated code for auto posting from the banking or mobile money systems
   `sys_date` TIMESTAMP NULL,--  The system date. Not known to the user. Does not change. Current date
    `post_date` TIMESTAMP NULL,--  Posting date generally determined by user, will be used for reporting
    `narration` VARCHAR(500) NULL,--  Notes appended to the transaction for more clarity. Should not exceed 500 characters
    `debit_amount` VARCHAR(45) NULL,--  Debit amount(Dr), for debit transactions. All trasactions 
    `dr_amnt_default_cy_equiv` VARCHAR(45) NULL,--  debit amount default currency equivalent is the equivalent amount of the default currency. if our default currency is set to be euro, then a posting on the dollar ledger will have an equivalent amount in euros stored in this column.
       `credit_amount` VARCHAR(45) NULL,--  credit amount
  `cr_amnt_default_cy_equiv` VARCHAR(45) NULL,--  credit amount default currency equivalent is the equivalent amount of the default currency. if our default currency is set to be euro, then a posting on the dollar ledger will have an equivalent amount in euros stored in this column.
  `running_bal` VARCHAR(45) NULL,--  for query items, the balances
   `bal_amnt_default_cy_equiv` VARCHAR(45) NULL,--  balance amount default currency equivalent is the equivalent amount of the default currency. if our default currency is set to be euro, then a posting on the dollar ledger will have an equivalent amount in euros stored in this column.
     `dr_cr_code` VARCHAR(45) NULL,--  Debit or credit transaction type identifier
       `trn_family_code` VARCHAR(45) NULL,--  identifier for transactions in the same family. for example, dr cash, cr supplier both legs will have the same id.
           `batch_code` VARCHAR(45) NULL,--  transactions will be batched. a batch may have different transaction types and family.

`fk_trn_type_id_general_ledger` INT,
  `fk_user_id_created_by_general_ledger` INT,
  `fk_user_id_first_approved_by_general_ledger` INT,
  `fk_user_id_second_approved_by_general_ledger` INT,

`fk_supported_currencies_id_general_ledger` INT NULL,
`fk_accounts_created_store_id_general_ledger`INT NULL,

  PRIMARY KEY (`general_ledge r_id`) ,

  CONSTRAINT `fk_trn_type_id_general_ledger`
    FOREIGN KEY (`fk_trn_type_id_general_ledger`)
    REFERENCES `trn_type` (`trn_type_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

      CONSTRAINT `fk_supported_currencies_id_general_ledger`
    FOREIGN KEY (`fk_supported_currencies_id_general_ledger`)
    REFERENCES `supported_currencies` (`supported_currencies_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    CONSTRAINT `fk_user_id_created_by_general_ledger`
    FOREIGN KEY (`fk_user_id_created_by_general_ledger`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

      CONSTRAINT `fk_user_id_first_approved_by_general_ledger`
    FOREIGN KEY (`fk_user_id_first_approved_by_general_ledger`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

       CONSTRAINT `fk_user_id_second_approved_by_general_ledger`
    FOREIGN KEY (`fk_user_id_second_approved_by_general_ledger`)
    REFERENCES `users` (`users_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

     CONSTRAINT `fk_accounts_created_store_id_general_ledger`
    FOREIGN KEY (`fk_accounts_created_store_id_general_ledger`)
    REFERENCES `accounts_created_store` (`accounts_created_store_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 100000;

CREATE INDEX `fk_supported_currencies_id_general_ledger_idx` ON `general_ledger` (`fk_supported_currencies_id_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_accounts_created_store_id_general_ledger_idx` ON `general_ledger` (`fk_accounts_created_store_id_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_user_id_created_by_general_ledger_idx` ON `general_ledger` (`fk_user_id_created_by_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_general_ledger_idx` ON `general_ledger` (`fk_user_id_first_approved_by_general_ledger` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_general_ledger_idx` ON `general_ledger` (`fk_user_id_second_approved_by_general_ledger` ASC) VISIBLE;

CREATE INDEX `trn_family_code_idx` ON `general_ledger` (`trn_family_code` ASC) VISIBLE;

CREATE INDEX `batch_code_idx` ON `general_ledger` (`batch_code` ASC) VISIBLE;

CREATE INDEX `fk_trn_type_id_general_ledger_idx` ON `general_ledger` (`fk_trn_type_id_general_ledger` ASC) VISIBLE;


-- -----------------------------------------------------
-- `supported_currencies`
-- -----------------------------------------------------

CREATE TABLE `supported_currencies` (
  `supported_currencies_id` int(11) NOT NULL AUTO_INCREMENT,
  `supported_currencies_code` VARCHAR(45) NULL,
   `currency_category` VARCHAR(45) NULL,--  should be designated as either default or others. The interest rate should be maintained aganist default currency
  `fk_currencies_id_supported_currencies` INT,

  PRIMARY KEY (`supported_currencies_id`),

 CONSTRAINT `fk_currencies_id_supported_currencies`
 FOREIGN KEY (`fk_currencies_id_supported_currencies`)
 REFERENCES `currencies`(`currencies_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_currencies_id_supported_currencies_idx` ON `supported_currencies` (`fk_currencies_id_supported_currencies` ASC) VISIBLE;




-- -----------------------------------------------------
-- `daily_interest_rate`
-- -----------------------------------------------------
-- To be updated at midnight every day.
CREATE TABLE `daily_interest_rate` (
  `daily_interest_rate_id` int(11) NOT NULL AUTO_INCREMENT,
  `posting_date` TIMESTAMP NOT NULL,
    `the_interest_rate` DOUBLE,
  `fk_supported_currencies_id_daily_interest_rate` INT,


  PRIMARY KEY (`daily_interest_rate_id`),

 CONSTRAINT `fk_supported_currencies_id_daily_interest_rate`
 FOREIGN KEY (`fk_supported_currencies_id_daily_interest_rate`)
 REFERENCES `supported_currencies`(`supported_currencies_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION


) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_supported_currencies_id_daily_interest_rate_idx` ON `daily_interest_rate` (`fk_supported_currencies_id_daily_interest_rate` ASC) VISIBLE;



-- -----------------------------------------------------
-- This is the template upon which account numbers are generated for each specific account type 
-- Table `accounts_generators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `accounts_generators` (
  `template_assets` INT NULL DEFAULT 1000000,
  `template_expenses` INT NULL DEFAULT 2000000,
  `template_revenues` INT NULL DEFAULT 3000000,
  `template_equity` INT NULL DEFAULT 4000000,
   `template_liabilities` INT NULL DEFAULT 5000000
  )
ENGINE=InnoDB  DEFAULT CHARSET=latin1;


-- -----------------------------------------------------
-- `datesforsystem`
-- -----------------------------------------------------

CREATE TABLE `posting_date` (
  `posting_date_id` int(11) NOT NULL AUTO_INCREMENT,
  `posting_date` date NOT NULL DEFAULT '1970-01-01 00:00:00',
    `post_date_status` VARCHAR(45) NULL,--  Initiated,First_Approved,Second_approved,Changed,
  `fk_user_id_created_by_posting_date` INT,
  `fk_user_id_first_approved_by_posting_date` INT,
  `fk_user_id_second_approved_by_posting_date` INT,

  PRIMARY KEY (`posting_date_id`),

 CONSTRAINT `fk_user_id_created_by_posting_date`
 FOREIGN KEY (`fk_user_id_created_by_posting_date`)
 REFERENCES `users`(`users_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION,

  CONSTRAINT `fk_user_id_first_approved_by_posting_date`
 FOREIGN KEY (`fk_user_id_first_approved_by_posting_date`)
 REFERENCES `users`(`users_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION,


   CONSTRAINT `fk_user_id_second_approved_by_posting_date`
 FOREIGN KEY (`fk_user_id_second_approved_by_posting_date`)
 REFERENCES `users`(`users_id`)
 ON DELETE CASCADE
 ON UPDATE NO ACTION


) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_user_id_created_by_posting_date_idx` ON `posting_date` (`fk_user_id_created_by_posting_date` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_posting_date_idx` ON `posting_date` (`fk_user_id_first_approved_by_posting_date` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_posting_date_idx` ON `posting_date` (`fk_user_id_second_approved_by_posting_date` ASC) VISIBLE;


DROP TABLE IF EXISTS `trn_process`;

CREATE TABLE `trn_process` (
  `trn_process_id` int(11) NOT NULL AUTO_INCREMENT,
  `dr_account_name` varchar(100) DEFAULT '0',
  `dr_account_number` varchar(100) DEFAULT '0',
  `cr_account_name` varchar(100) DEFAULT '0',
  `cr_account_number`  varchar(100) DEFAULT '0',
  `trn_process_status` INT ,--  Created,First_Approved,Second_approved,Active,Dormant,Closed
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
    `fk_trn_type_id_trn_process` INT,
  `fk_user_id_created_by_trn_process` INT,
  `fk_user_id_first_approved_by_trn_process` INT,
  `fk_user_id_second_approved_by_trn_process` INT,
  PRIMARY KEY (`trn_process_id`),

  CONSTRAINT `fk_trn_type_id_trn_process`
  FOREIGN KEY (`fk_trn_type_id_trn_process`)
  REFERENCES  `trn_type`(`trn_type_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_created_by_trn_process`
  FOREIGN KEY (`fk_user_id_created_by_trn_process`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_first_approved_by_trn_process`
  FOREIGN KEY (`fk_user_id_first_approved_by_trn_process`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

    CONSTRAINT `fk_user_id_second_approved_by_trn_process`
  FOREIGN KEY (`fk_user_id_second_approved_by_trn_process`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE

) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_trn_type_id_trn_process_indx` ON `trn_process`(`fk_trn_type_id_trn_process` ASC) VISIBLE;

CREATE INDEX `fk_user_id_created_by_trn_process_indx` ON `trn_process`(`fk_user_id_created_by_trn_process` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_trn_process_indx` ON `trn_process`(`fk_user_id_first_approved_by_trn_process` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_trn_process_indx` ON `trn_process`(`fk_user_id_second_approved_by_trn_process` ASC) VISIBLE;

--  -----------------------------------------------------
/*  `trn_type` 

This will be a list of all acceptable transactions types.

 These types should have their behaviour hardcoded. This means that a trasaction type that will for example create a cash expense should be hardcoded by directing to debit expense and crediting cash.

 The process should be only created on a transaction type.This means transaction processes belonging to the same transaction type will have the same behavior.

 However the transaction process can be domarnt without necessariry affecting the transaction type.

 The transaction type will be hardcorded but it should be able  to vary it's status, such as activated,dormanted, closed etc
 
  */
--  ----------------------------------------------------------------

CREATE TABLE `trn_type` (
  `trn_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `trn_type_name` varchar(100) DEFAULT '0',-- should hava a max of 100 characters camel case expenseCash=100,expenseBank=101
  `trn_type_code` INT,--  Ranges from 100-999
  `trn_type_discription` VARCHAR(300) DEFAULT '0',
   `created_at` TIMESTAMP,
  `update_at` TIMESTAMP,
   `fk_user_id_created_by_trn_type` INT,
  `fk_user_id_first_approved_by_trn_type` INT,
  `fk_user_id_second_approved_by_trn_type` INT,
  PRIMARY KEY (`trn_type_id`),
  
   CONSTRAINT `fk_user_id_created_by_trn_type`
  FOREIGN KEY (`fk_user_id_created_by_trn_type`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_first_approved_by_trn_type`
  FOREIGN KEY (`fk_user_id_first_approved_by_trn_type`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

    CONSTRAINT `fk_user_id_second_approved_by_trn_type`
  FOREIGN KEY (`fk_user_id_second_approved_by_trn_type`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_user_id_created_by_trn_type_indx` ON `trn_type`(`fk_user_id_created_by_trn_type` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_trn_type_indx` ON `trn_type`(`fk_user_id_first_approved_by_trn_type` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_trn_type_indx` ON `trn_type`(`fk_user_id_second_approved_by_trn_type` ASC) VISIBLE;


DROP TABLE IF EXISTS `approval_requirement`;

CREATE TABLE `approval_requirement` (
   `one_row_restrict` ENUM('') NOT NULL,
  `account_created_status` int(11) DEFAULT '3',-- Account status flag, 1=Requires approval,2=Requires first approval only,3=Does not require approval
  `posted_entry_status` int(11) DEFAULT '30',-- 10=Requires approval,20=Requires first approval only,30=Does not require approval
  `special_account_creation_status` int(11) DEFAULT '300',-- 100=Requires approval,200=Requires first approval only,300=Does not require approval
  `trn_account_creation_status` int(11) DEFAULT '3000',-- 1000=Requires approval,2000=Requires first approval only,3000=Does not require approval
  `trn_process_creation_status` int(11) DEFAULT '30000',-- 10000=Requires approval,20000=Requires first approval only,30000=Does not require approval
  `posting_date_changing` int(11) DEFAULT '60000',-- 40000=Requires approval,50000=Requires first approval only,60000=Does not require approval

  `SyIdA7` int(11) DEFAULT '70000',
  `SyIdA8` int(11) DEFAULT '80000',
  `SyIdA9` int(11) DEFAULT '90000',
  `SyIdA10` int(11) DEFAULT '100000',
  `SyIdA11` int(11) DEFAULT '110000',
  `SyIdA12` int(11) DEFAULT '120000',-- batchNumber generator
  `SyIdA13` int(11) DEFAULT '130000',
  `SyIdA14` int(11) DEFAULT '140000',
    `SyIdA15` int(11) DEFAULT '1500000',
  `SyIdA16` int(11) DEFAULT '1600000',
  `SyIdA17` int(11) DEFAULT '1700000',
  `SyIdA18` int(11) DEFAULT '1800000',
  `SyIdA19` int(11) DEFAULT '1900000',
  `SyIdA20` int(11) DEFAULT '2000000',
  `OtherThree` varchar(45) DEFAULT 'NCO',
  `OtherFour` varchar(45) DEFAULT 'NCO',
  `OtherFive` varchar(45) DEFAULT 'NCO',
  PRIMARY KEY(`one_row_restrict`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `systemids`;

CREATE TABLE `systemids` (
   `one_row_restrict` ENUM('') NOT NULL,
  `SyIdA1` int(11) DEFAULT '2',
  `SyIdA2` int(11) DEFAULT '10',
  `SyIdA3` int(11) DEFAULT '100',
  `SyIdA4` int(11) DEFAULT '1000',
  `SyIdA5` int(11) DEFAULT '10000',
  `SyIdA6` int(11) DEFAULT '20000',
  `SyIdA7` int(11) DEFAULT '70000',
  `SyIdA8` int(11) DEFAULT '80000',
  `SyIdA9` int(11) DEFAULT '90000',
  `SyIdA10` int(11) DEFAULT '100000',
  `SyIdA11` int(11) DEFAULT '110000',
  `SyIdA12` int(11) DEFAULT '120000',-- batchNumber generator
  `SyIdA13` int(11) DEFAULT '130000',
  `SyIdA14` int(11) DEFAULT '140000',
    `SyIdA15` int(11) DEFAULT '1500000',
  `SyIdA16` int(11) DEFAULT '1600000',
  `SyIdA17` int(11) DEFAULT '1700000',
  `SyIdA18` int(11) DEFAULT '1800000',
  `SyIdA19` int(11) DEFAULT '1900000',
  `SyIdA20` int(11) DEFAULT '2000000',
  `OtherThree` varchar(45) DEFAULT 'NCO',
  `OtherFour` varchar(45) DEFAULT 'NCO',
  `OtherFive` varchar(45) DEFAULT 'NCO',
  PRIMARY KEY(`one_row_restrict`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/* The concept of special accounts applies from the fact that for some accounts like CASH appear recurrent, however during the creation of accounts, there is no determination of whether it is cash or bank as long as it belongs to assets, to hard code some processes we need a way to designate certain accounts like CASH so that it is associated later*/

DROP TABLE IF EXISTS `special_account_setups`;
CREATE TABLE `special_account_setups` (
  `special_account_setups_id` int(11) NOT NULL AUTO_INCREMENT,
  `special_account_setups_name` varchar(100) DEFAULT '0',--  CASH,BANK
  `account_name` varchar(300) DEFAULT '0',
  `accout_number` varchar(300) DEFAULT '0',
  `created_at` TIMESTAMP,
   `fk_user_id_created_by_special_account_setups` INT,
  `fk_user_id_first_approved_by_special_account_setups` INT,
  `fk_user_id_second_approved_by_special_account_setups` INT,
  
  PRIMARY KEY (`special_account_setups_id`),

  
   CONSTRAINT `fk_user_id_created_by_special_account_setups`
  FOREIGN KEY (`fk_user_id_created_by_special_account_setups`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

   CONSTRAINT `fk_user_id_first_approved_by_special_account_setups`
  FOREIGN KEY (`fk_user_id_first_approved_by_special_account_setups`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE,

    CONSTRAINT `fk_user_id_second_approved_by_special_account_setups`
  FOREIGN KEY (`fk_user_id_second_approved_by_special_account_setups`)
  REFERENCES  `users`(`users_id`)
  ON UPDATE NO ACTION
  ON DELETE CASCADE)

ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

CREATE INDEX `fk_user_id_created_by_special_account_setups_indx` ON `special_account_setups`(`fk_user_id_created_by_special_account_setups` ASC) VISIBLE;

CREATE INDEX `fk_user_id_first_approved_by_special_account_setups_indx` ON `special_account_setups`(`fk_user_id_first_approved_by_special_account_setups` ASC) VISIBLE;

CREATE INDEX `fk_user_id_second_approved_by_special_account_setups_indx` ON `special_account_setups`(`fk_user_id_second_approved_by_special_account_setups` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
