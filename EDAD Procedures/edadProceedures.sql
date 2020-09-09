

--  SELECT l.trn_id,l.loan_id,l.applicant_account_name,l.applicant_account_number,l.loan_cycle_status,l.loan_tenure,l.interest_rate,l.princimpal_amount,l.total_interest,l.balance_due,l.TotalPrincipalPaid,l.TotalPrincipalRemaining,l.TotalInterestPaid,l.TotalInterestRemaining,l.TotalAccumulatedInterestPaid,l.TotalAccumulatedInterestRemaining,l.instalment_start_date,l.instalment_next_due_date,l.instalment_end_date,m. kin_mobile_1,m.kin_mobile_2,m.email,m.kampala_residence,m.occupation,m.employer from pmms_loans.new_loan_appstore l INNER JOIN pmms.master m ON l.applicant_account_number=m.account_number WHERE l.loan_cycle_status='Disbursed' INTO OUTFILE 'zulumaindb1.sql' FIELDS TERMINATED BY '#' LINES TERMINATED BY '\n';


/*  USER ROLES DATA */

--  SELECT l.trn_id,l.loan_id,l.applicant_account_name,l.applicant_account_number,l.loan_cycle_status,l.loan_tenure,l.princimpal_amount,l.total_interest,l.balance_due,l.TotalPrincipalPaid,l.TotalPrincipalRemaining,l.TotalInterestPaid,l.TotalInterestRemaining,l.TotalAccumulatedInterestPaid,l.TotalAccumulatedInterestRemaining,l.instalment_start_date,l.instalment_next_due_date,l.instalment_end_date,m. kin_mobile_1,m.kin_mobile_2,m.email,m.kampala_residence,m.occupation,m.employer from pmms_loans.new_loan_appstore l INNER JOIN pmms.master m ON l.applicant_account_number=m.account_number WHERE l.loan_cycle_status='Disbursed' INTO OUTFILE 'zulumain.sql' FIELDS TERMINATED BY '#' LINES TERMINATED BY '\n';

-- INSERT INTO user_role VALUES(1000,'smart_saver','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1001,'smart_agent','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1002,'smart_vendor','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1003,'normal_group_box','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1004,'box_for_God','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1005,'school_fees_box','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1006,'admin','normal',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()),(1007,'admin','super',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 



-- INSERT INTO `continents` VALUES (80000,'ASIA '),(80001,'AFRICA '),(80002,'NORTH AMERICA'),(80003,'SOUTH AMERICA '),(80004,'ANTARCTICA '),(80005,'EUROPE '),(80006,'AUSTRALIA ');

-- INSERT INTO `countries` VALUES (110058,'AFGHANISTAN','AF'),(110059,'ALAND ISLANDS','AX'),(110060,'ALBANIA','AL'),(110061,'ALGERIA','DZ'),(110062,'AMERICAN SAMOA','AS'),(110063,'ANDORRA','AD'),(110064,'ANGOLA','AO'),(110065,'ANGUILLA','AI'),(110066,'ANTARCTICA','AQ'),(110067,'ANTIGUA AND BARBUDA','AG'),(110068,'ARGENTINA','AR'),(110069,'ARMENIA','AM'),(110070,'ARUBA','AW'),(110071,'AUSTRALIA','AU'),(110072,'AUSTRIA','AT'),(110073,'AZERBAIJAN','AZ'),(110074,'BAHAMAS','BS'),(110075,'BAHRAIN','BH'),(110076,'BANGLADESH','BD'),(110077,'BARBADOS','BB'),(110078,'BELARUS','BY'),(110079,'BELGIUM','BE'),(110080,'BELIZE','BZ'),(110081,'BENIN','BJ'),(110082,'BERMUDA','BM'),(110083,'BHUTAN','BT'),(110084,'BOLIVIA','BO'),(110085,'BONAIRE-SINT EUSTATIUS AND SABA','BQ'),(110086,'BOSNIA AND HERZEGOVINA','BA'),(110087,'BOTSWANA','BW'),(110088,'BOUVET ISLAND','BV'),(110089,'BRAZIL','BR'),(110090,'BRITISH INDIAN OCEAN TERRITORY','IO'),(110091,'BRUNEI DARUSSALAM','BN'),(110092,'BULGARIA','BG'),(110093,'BURKINA FASO','BF'),(110094,'BURUNDI','BI'),(110095,'CAMBODIA','KH'),(110096,'CAMEROON','CM'),(110097,'CANADA','CA'),(110098,'CAPE VERDE','CV'),(110099,'CAYMAN ISLANDS','KY'),(110100,'CENTRAL AFRICAN REPUBLIC','CF'),(110101,'CHAD','TD'),(110102,'CHILE','CL'),(110103,'CHINA','CN'),(110104,'CHRISTMAS ISLAND','CX'),(110105,'COCOS-KEELING ISLANDS','CC'),(110106,'COLOMBIA','CO'),(110107,'COMOROS','KM'),(110108,'CONGO','CG'),(110109,'CONGO-THE DEMOCRATIC REPUBLIC OF ','CD'),(110110,'COOK ISLANDS','CK'),(110111,'COSTA RICA','CR'),(110112,'CROATIA','HR'),(110113,'CUBA','CU'),(110114,'CURAÇAO','CW'),(110115,'CYPRUS','CY'),(110116,'CZECHIA','CZ'),(110117,'DENMARK','DK'),(110118,'DJIBOUTI','DJ'),(110119,'DOMINICA','DM'),(110120,'DOMINICAN REPUBLIC','DO'),(110121,'ECUADOR','EC'),(110122,'EGYPT','EG'),(110123,'EL SALVADOR','SV'),(110124,'EQUATORIAL GUINEA','GQ'),(110125,'ERITREA','ER'),(110126,'ESTONIA','EE'),(110127,'ETHIOPIA','ET'),(110128,'FALKLAND ISLANDS -MALVINAS','FK'),(110129,'FAROE ISLANDS','FO'),(110130,'FIJI','FJ'),(110131,'FINLAND','FI'),(110132,'FRANCE','FR'),(110133,'FRENCH GUIANA','GF'),(110134,'FRENCH POLYNESIA','PF'),(110135,'FRENCH SOUTHERN TERRITORIES','TF'),(110136,'GABON','GA'),(110137,'GAMBIA','GM'),(110138,'GEORGIA','GE'),(110139,'GERMANY','DE'),(110140,'GHANA','GH'),(110141,'GIBRALTAR','GI'),(110142,'GREECE','GR'),(110143,'GREENLAND','GL'),(110144,'GRENADA','GD'),(110145,'GUADELOUPE','GP'),(110146,'GUAM','GU'),(110147,'GUATEMALA','GT'),(110148,'GUERNSEY','GG'),(110149,'GUINEA','GN'),(110150,'GUINEA-BISSAU','GW'),(110151,'GUYANA','GY'),(110152,'HAITI','HT'),(110153,'HEARD AND MC DONALD ISLANDS','HM'),(110154,'HOLY SEE-VATICAN CITY STATE','VA'),(110155,'HONDURAS','HN'),(110156,'HONG KONG','HK'),(110157,'HUNGARY','HU'),(110158,'ICELAND','IS'),(110159,'INDIA','IN'),(110160,'INDONESIA','ID'),(110161,'IRAN-ISLAMIC REPUBLIC OF','IR'),(110162,'IRAQ','IQ'),(110163,'IRELAND','IE'),(110164,'ISLE OF MAN','IM'),(110165,'ISRAEL','IL'),(110166,'ITALY','IT'),(110167,'JAMAICA','JM'),(110168,'JAPAN','JP'),(110169,'JERSEY','JE'),(110170,'JORDAN','JO'),(110171,'KAZAKSTAN','KZ'),(110172,'KENYA','KE'),(110173,'KIRIBATI','KI'),(110174,'KOREA-REPUBLIC OF','KR'),(110175,'KOSOVO-TEMPORARY CODE','XK'),(110176,'KUWAIT','KW'),(110177,'KYRGYZSTAN','KG'),(110178,'LATVIA','LV'),(110179,'LEBANON','LB'),(110180,'LESOTHO','LS'),(110181,'LIBERIA','LR'),(110182,'LIBYAN ARAB JAMAHIRIYA','LY'),(110183,'LIECHTENSTEIN','LI'),(110184,'LITHUANIA','LT'),(110185,'LUXEMBOURG','LU'),(110186,'MACAO','MO'),(110187,'MACEDONIA-THE FORMER YUGOSLAV REPUBLIC OF','MK'),(110188,'MADAGASCAR','MG'),(110189,'MALAWI','MW'),(110190,'MALAYSIA','MY'),(110191,'MALDIVES','MV'),(110192,'MALI','ML'),(110193,'MALTA','MT'),(110194,'MARSHALL ISLANDS','MH'),(110195,'MARTINIQUE','MQ'),(110196,'MAURITANIA','MR'),(110197,'MAURITIUS','MU'),(110198,'MAYOTTE','YT'),(110199,'MEXICO','MX'),(110200,'MICRONESIA-FEDERATED STATES OF','FM'),(110201,'MOLDOVA-REPUBLIC OF','MD'),(110202,'MONACO','MC'),(110203,'MONGOLIA','MN'),(110204,'MONTENEGRO','ME'),(110205,'MONTSERRAT','MS'),(110206,'MOROCCO','MA'),(110207,'MOZAMBIQUE','MZ'),(110208,'MYANMAR','MM'),(110209,'NAMIBIA','NA'),(110210,'NAURU','NR'),(110211,'NEPAL','NP'),(110212,'NETHERLANDS','NL'),(110213,'NETHERLANDS ANTILLES','AN'),(110214,'NEW CALEDONIA','NC'),(110215,'NEW ZEALAND','NZ'),(110216,'NICARAGUA','NI'),(110217,'NIGER','NE'),(110218,'NIGERIA','NG'),(110219,'NIUE','NU'),(110220,'NORFOLK ISLAND','NF'),(110221,'NORTHERN MARIANA ISLANDS','MP'),(110222,'NORWAY','NO'),(110223,'OMAN','OM'),(110224,'PAKISTAN','PK'),(110225,'PALAU','PW'),(110226,'PALESTINIAN TERRITORY-OCCUPIED','PS'),(110227,'PANAMA','PA'),(110228,'PAPUA NEW GUINEA','PG'),(110229,'PARAGUAY','PY'),(110230,'PERU','PE'),(110231,'PHILIPPINES','PH'),(110232,'PITCAIRN','PN'),(110233,'POLAND','PL'),(110234,'PORTUGAL','PT'),(110235,'PUERTO RICO','PR'),(110236,'QATAR','QA'),(110237,'REPUBLIC OF SERBIA','RS'),(110238,'REUNION','RE'),(110239,'ROMANIA','RO'),(110240,'RUSSIA FEDERATION','RU'),(110241,'RWANDA','RW'),(110242,'SAINT BARTHÉLEMY','BL'),(110243,'SAINT HELENA','SH'),(110244,'SAINT KITTS-NEVIS','KN'),(110245,'SAINT LUCIA','LC'),(110246,'SAINT MARTIN','MF'),(110247,'SAINT PIERRE AND MIQUELON','PM'),(110248,'SAINT VINCENT AND THE GRENADINES','VC'),(110249,'SAMOA','WS'),(110250,'SAN MARINO','SM'),(110251,'SAO TOME AND PRINCIPE','ST'),(110252,'SAUDI ARABIA','SA'),(110253,'SENEGAL','SN'),(110254,'SERBIA AND MONTENEGRO','CS'),(110255,'SEYCHELLES','SC'),(110256,'SIERRA LEONE','SL'),(110257,'SINGAPORE','SG'),(110258,'SINT MAARTEN','SX'),(110259,'SLOVAKIA','SK'),(110260,'SLOVENIA','SI'),(110261,'SOLOMON ISLANDS','SB'),(110262,'SOMALIA','SO'),(110263,'SOUTH AFRICA','ZA'),(110264,'SOUTH GEORGIA-THE SOUTH SANDWICH ISLANDS','GS'),(110265,'SOUTH SUDAN','SS'),(110266,'SPAIN','ES'),(110267,'SRI LANKA','LK'),(110268,'SUDAN','SD'),(110269,'SURINAME','SR'),(110270,'SVALBARD AND JAN MAYEN','SJ'),(110271,'SWAZILAND','SZ'),(110272,'SWEDEN','SE'),(110273,'SWITZERLAND','CH'),(110274,'SYRIAN ARAB REPUBLIC','SY'),(110275,'TAIWAN-PROVINCE OF CHINA','TW'),(110276,'TAJIKISTAN','TJ'),(110277,'TANZANIA-UNITED REPUBLIC OF','TZ'),(110278,'THAILAND','TH'),(110279,'TIMOR-LESTE','TL'),(110280,'TOGO','TG'),(110281,'TOKELAU','TK'),(110282,'TONGA','TO'),(110283,'TRINIDAD AND TOBAGO','TT'),(110284,'TUNISIA','TN'),(110285,'TURKEY','TR'),(110286,'TURKISH REP N CYPRUS-TEMPORARY CODE','XT'),(110287,'TURKMENISTAN','TM'),(110288,'TURKS AND CAICOS ISLANDS','TC'),(110289,'TUVALU','TV'),(110290,'UGANDA','UG'),(110291,'UKRAINE','UA'),(110292,'UNITED ARAB EMIRATES','AE'),(110293,'UNITED KINGDOM','GB'),(110294,'UNITED STATES','US'),(110295,'UNITED STATES MINOR OUTLYING ISLANDS','UM'),(110296,'URUGUAY','UY'),(110297,'UZBEKISTAN','UZ'),(110298,'VANUATU','VU'),(110299,'VENEZUELA','VE'),(110300,'VIETNAM','VN'),(110301,'VIRGIN ISLANDS-BRITISH','VG'),(110302,'VIRGIN ISLANDS-US','VI'),(110303,'WALLIS AND FUTUNA','WF'),(110304,'WESTERN SAHARA','EH'),(110305,'YEMEN','YE'),(110306,'ZAMBIA','ZM'),(110307,'ZIMBABWE','ZW');


-- INSERT INTO `continental_regions` VALUES (70070,'EASTERN AFRICA'),(70071,'MIDDLE AFRICA'),(70072,'NORTHERN AFRICA'),(70073,'SOUTHERN AFRICA'),(70074,'WESTERN AFRICA'),(70075,'THE CARIBBEAN'),(70076,'CENTRAL AMERICA'),(70077,'SOUTH AMERICA'),(70078,'NORTHERN AMERICA'),(70079,'MIDDLE EAST'),(70080,'OCEANIA'),(70081,'CENTRAL ASIA'),(70082,'EAST ASIA '),(70083,'SOUTH ASIA'),(70084,'SOUTHEAST ASIA'),(70085,'WESTERN ASIA'),(70086,'CENTRAL EUROPE'),(70087,'EASTERN EUROPE'),(70088,'NORTHEN EUROPE'),(70089,'SOUTHERN EUROPE'),(70090,'SOUTHEASTERN EUROPE'),(70091,'SOUTHWESTERN EUROPE'),(70092,'WESTERN EUROPE');



-- INSERT INTO `currencies` VALUES (100000,'AFGHANISTAN','Afghani','AFN','971',2),(100001,'LITHUANIA','Euro','EUR','978',2),(100002,'LUXEMBOURG','Euro','EUR','978',2),(100003,'MACAO','Pataca','MOP','446',2),(100004,'MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)','Denar','MKD','807',2),(100005,'MADAGASCAR','Malagasy Ariary','MGA','969',2),(100006,'MALAWI','Malawi Kwacha','MWK','454',2),(100007,'MALAYSIA','Malaysian Ringgit','MYR','458',2),(100008,'MALDIVES','Rufiyaa','MVR','462',2),(100009,'MALI','CFA Franc BCEAO','XOF','952',0),(100010,'MALTA','Euro','EUR','978',2),(100011,'MARSHALL ISLANDS (THE)','US Dollar','USD','840',2),(100012,'MARTINIQUE','Euro','EUR','978',2),(100013,'MAURITANIA','Ouguiya','MRU','929',2),(100014,'MAURITIUS','Mauritius Rupee','MUR','480',2),(100015,'MAYOTTE','Euro','EUR','978',2),(100016,'MEXICO','Mexican Peso','MXN','484',2),(100017,'MEXICO','Mexican Unidad de Inversion (UDI)','MXV','979',2),(100018,'MICRONESIA (FEDERATED STATES OF)','US Dollar','USD','840',2),(100019,'MOLDOVA (THE REPUBLIC OF)','Moldovan Leu','MDL','498',2),(100020,'MONACO','Euro','EUR','978',2),(100021,'MONGOLIA','Tugrik','MNT','496',2),(100022,'MONTENEGRO','Euro','EUR','978',2),(100023,'MONTSERRAT','East Caribbean Dollar','XCD','951',2),(100024,'MOROCCO','Moroccan Dirham','MAD','504',2),(100025,'MOZAMBIQUE','Mozambique Metical','MZN','943',2),(100026,'MYANMAR','Kyat','MMK','104',2),(100027,'NAMIBIA','Namibia Dollar','NAD','516',2),(100028,'NAMIBIA','Rand','ZAR','710',2),(100029,'NAURU','Australian Dollar','AUD','036',2),(100030,'NEPAL','Nepalese Rupee','NPR','524',2),(100031,'NETHERLANDS (THE)','Euro','EUR','978',2),(100032,'NEW CALEDONIA','CFP Franc','XPF','953',0),(100033,'NEW ZEALAND','New Zealand Dollar','NZD','554',2),(100034,'NICARAGUA','Cordoba Oro','NIO','558',2),(100035,'NIGER (THE)','CFA Franc BCEAO','XOF','952',0),(100036,'NIGERIA','Naira','NGN','566',2),(100037,'NIUE','New Zealand Dollar','NZD','554',2),(100038,'NORFOLK ISLAND','Australian Dollar','AUD','036',2),(100039,'NORTHERN MARIANA ISLANDS (THE)','US Dollar','USD','840',2),(100040,'NORWAY','Norwegian Krone','NOK','578',2),(100041,'OMAN','Rial Omani','OMR','512',3),(100042,'PAKISTAN','Pakistan Rupee','PKR','586',2),(100043,'PALAU','US Dollar','USD','840',2),(100044,'PANAMA','Balboa','PAB','590',2),(100045,'PANAMA','US Dollar','USD','840',2),(100046,'PAPUA NEW GUINEA','Kina','PGK','598',2),(100047,'PARAGUAY','Guarani','PYG','600',0),(100048,'PERU','Sol','PEN','604',2),(100049,'PHILIPPINES (THE)','Philippine Peso','PHP','608',2),(100050,'PITCAIRN','New Zealand Dollar','NZD','554',2),(100051,'POLAND','Zloty','PLN','985',2),(100052,'PORTUGAL','Euro','EUR','978',2),(100053,'PUERTO RICO','US Dollar','USD','840',2),(100054,'QATAR','Qatari Rial','QAR','634',2),(100055,'RÉUNION','Euro','EUR','978',2),(100056,'AFGHANISTAN','Afghani','AFN','971',2),(100057,'ÅLAND ISLANDS','Euro','EUR','978',2),(100058,'ALBANIA','Lek','ALL','008',2),(100059,'ALGERIA','Algerian Dinar','DZD','012',2),(100060,'AMERICAN SAMOA','US Dollar','USD','840',2),(100061,'ANDORRA','Euro','EUR','978',2),(100062,'ANGOLA','Kwanza','AOA','973',2),(100063,'ANGUILLA','East Caribbean Dollar','XCD','951',2),(100064,'ANTIGUA AND BARBUDA','East Caribbean Dollar','XCD','951',2),(100065,'ARGENTINA','Argentine Peso','ARS','032',2),(100066,'ARMENIA','Armenian Dram','AMD','051',2),(100067,'ARUBA','Aruban Florin','AWG','533',2),(100068,'AUSTRALIA','Australian Dollar','AUD','036',2),(100069,'AUSTRIA','Euro','EUR','978',2),(100070,'AZERBAIJAN','Azerbaijan Manat','AZN','944',2),(100071,'BAHAMAS (THE)','Bahamian Dollar','BSD','044',2),(100072,'BAHRAIN','Bahraini Dinar','BHD','048',3),(100073,'BANGLADESH','Taka','BDT','050',2),(100074,'BARBADOS','Barbados Dollar','BBD','052',2),(100075,'BELARUS','Belarusian Ruble','BYN','933',2),(100076,'BELGIUM','Euro','EUR','978',2),(100077,'BELIZE','Belize Dollar','BZD','084',2),(100078,'BENIN','CFA Franc BCEAO','XOF','952',0),(100079,'BERMUDA','Bermudian Dollar','BMD','060',2),(100080,'BHUTAN','Indian Rupee','INR','356',2),(100081,'BHUTAN','Ngultrum','BTN','064',2),(100082,'BOLIVIA (PLURINATIONAL STATE OF)','Boliviano','BOB','068',2),(100083,'BOLIVIA (PLURINATIONAL STATE OF)','Mvdol','BOV','984',2),(100084,'BONAIRE, SINT EUSTATIUS AND SABA','US Dollar','USD','840',2),(100085,'BOSNIA AND HERZEGOVINA','Convertible Mark','BAM','977',2),(100086,'BOTSWANA','Pula','BWP','072',2),(100087,'BOUVET ISLAND','Norwegian Krone','NOK','578',2),(100088,'BRAZIL','Brazilian Real','BRL','986',2),(100089,'BRITISH INDIAN OCEAN TERRITORY (THE)','US Dollar','USD','840',2),(100090,'BRUNEI DARUSSALAM','Brunei Dollar','BND','096',2),(100091,'BULGARIA','Bulgarian Lev','BGN','975',2),(100092,'BURKINA FASO','CFA Franc BCEAO','XOF','952',0),(100093,'BURUNDI','Burundi Franc','BIF','108',0),(100094,'CABO VERDE','Cabo Verde Escudo','CVE','132',2),(100095,'CAMBODIA','Riel','KHR','116',2),(100096,'CAMEROON','CFA Franc BEAC','XAF','950',0),(100097,'CANADA','Canadian Dollar','CAD','124',2),(100098,'CAYMAN ISLANDS (THE)','Cayman Islands Dollar','KYD','136',2),(100099,'CENTRAL AFRICAN REPUBLIC (THE)','CFA Franc BEAC','XAF','950',0),(100100,'CHAD','CFA Franc BEAC','XAF','950',0),(100101,'CHILE','Chilean Peso','CLP','152',0),(100102,'CHILE','Unidad de Fomento','CLF','990',4),(100103,'CHINA','Yuan Renminbi','CNY','156',2),(100104,'CHRISTMAS ISLAND','Australian Dollar','AUD','036',2),(100105,'COCOS (KEELING) ISLANDS (THE)','Australian Dollar','AUD','036',2),(100106,'COLOMBIA','Colombian Peso','COP','170',2),(100107,'COLOMBIA','Unidad de Valor Real','COU','970',2),(100108,'COMOROS (THE)','Comorian Franc ','KMF','174',0),(100109,'CONGO (THE DEMOCRATIC REPUBLIC OF THE)','Congolese Franc','CDF','976',2),(100110,'CONGO (THE)','CFA Franc BEAC','XAF','950',0),(100111,'COOK ISLANDS (THE)','New Zealand Dollar','NZD','554',2),(100112,'COSTA RICA','Costa Rican Colon','CRC','188',2),(100113,'CROATIA','Kuna','HRK','191',2),(100114,'CUBA','Cuban Peso','CUP','192',2),(100115,'CUBA','Peso Convertible','CUC','931',2),(100116,'CURAÇAO','Netherlands Antillean Guilder','ANG','532',2),(100117,'CYPRUS','Euro','EUR','978',2),(100118,'CZECHIA','Czech Koruna','CZK','203',2),(100119,'DENMARK','Danish Krone','DKK','208',2),(100120,'DJIBOUTI','Djibouti Franc','DJF','262',0),(100121,'DOMINICA','East Caribbean Dollar','XCD','951',2),(100122,'DOMINICAN REPUBLIC (THE)','Dominican Peso','DOP','214',2),(100123,'ECUADOR','US Dollar','USD','840',2),(100124,'EGYPT','Egyptian Pound','EGP','818',2),(100125,'EL SALVADOR','El Salvador Colon','SVC','222',2),(100126,'EL SALVADOR','US Dollar','USD','840',2),(100127,'EQUATORIAL GUINEA','CFA Franc BEAC','XAF','950',0),(100128,'ERITREA','Nakfa','ERN','232',2),(100129,'ESTONIA','Euro','EUR','978',2),(100130,'ETHIOPIA','Ethiopian Birr','ETB','230',2),(100131,'EUROPEAN UNION','Euro','EUR','978',2),(100132,'FALKLAND ISLANDS (THE) [MALVINAS]','Falkland Islands Pound','FKP','238',2),(100133,'FAROE ISLANDS (THE)','Danish Krone','DKK','208',2),(100134,'FIJI','Fiji Dollar','FJD','242',2),(100135,'FINLAND','Euro','EUR','978',2),(100136,'FRANCE','Euro','EUR','978',2),(100137,'FRENCH GUIANA','Euro','EUR','978',2),(100138,'FRENCH POLYNESIA','CFP Franc','XPF','953',0),(100139,'FRENCH SOUTHERN TERRITORIES (THE)','Euro','EUR','978',2),(100140,'GABON','CFA Franc BEAC','XAF','950',0),(100141,'GAMBIA (THE)','Dalasi','GMD','270',2),(100142,'GEORGIA','Lari','GEL','981',2),(100143,'GERMANY','Euro','EUR','978',2),(100144,'GHANA','Ghana Cedi','GHS','936',2),(100145,'GIBRALTAR','Gibraltar Pound','GIP','292',2),(100146,'GREECE','Euro','EUR','978',2),(100147,'GREENLAND','Danish Krone','DKK','208',2),(100148,'GRENADA','East Caribbean Dollar','XCD','951',2),(100149,'GUADELOUPE','Euro','EUR','978',2),(100150,'GUAM','US Dollar','USD','840',2),(100151,'GUATEMALA','Quetzal','GTQ','320',2),(100152,'GUERNSEY','Pound Sterling','GBP','826',2),(100153,'GUINEA','Guinean Franc','GNF','324',0),(100154,'GUINEA-BISSAU','CFA Franc BCEAO','XOF','952',0),(100155,'GUYANA','Guyana Dollar','GYD','328',2),(100156,'HAITI','Gourde','HTG','332',2),(100157,'HAITI','US Dollar','USD','840',2),(100158,'HEARD ISLAND AND McDONALD ISLANDS','Australian Dollar','AUD','036',2),(100159,'HOLY SEE (THE)','Euro','EUR','978',2),(100160,'HONDURAS','Lempira','HNL','340',2),(100161,'HONG KONG','Hong Kong Dollar','HKD','344',2),(100162,'HUNGARY','Forint','HUF','348',2),(100163,'ICELAND','Iceland Krona','ISK','352',0),(100164,'INDIA','Indian Rupee','INR','356',2),(100165,'INDONESIA','Rupiah','IDR','360',2),(100166,'IRAN (ISLAMIC REPUBLIC OF)','Iranian Rial','IRR','364',2),(100167,'IRAQ','Iraqi Dinar','IQD','368',3),(100168,'IRELAND','Euro','EUR','978',2),(100169,'ISLE OF MAN','Pound Sterling','GBP','826',2),(100170,'ISRAEL','New Israeli Sheqel','ILS','376',2),(100171,'ITALY','Euro','EUR','978',2),(100172,'JAMAICA','Jamaican Dollar','JMD','388',2),(100173,'JAPAN','Yen','JPY','392',0),(100174,'JERSEY','Pound Sterling','GBP','826',2),(100175,'JORDAN','Jordanian Dinar','JOD','400',3),(100176,'KAZAKHSTAN','Tenge','KZT','398',2),(100177,'KENYA','Kenyan Shilling','KES','404',2),(100178,'KIRIBATI','Australian Dollar','AUD','036',2),(100179,'KOREA (THE DEMOCRATIC PEOPLE?S REPUBLIC OF)','North Korean Won','KPW','408',2),(100180,'KOREA (THE REPUBLIC OF)','Won','KRW','410',0),(100181,'KUWAIT','Kuwaiti Dinar','KWD','414',3),(100182,'KYRGYZSTAN','Som','KGS','417',2),(100183,'LAO PEOPLE?S DEMOCRATIC REPUBLIC (THE)','Lao Kip','LAK','418',2),(100184,'LATVIA','Euro','EUR','978',2),(100185,'LEBANON','Lebanese Pound','LBP','422',2),(100186,'LESOTHO','Loti','LSL','426',2),(100187,'LESOTHO','Rand','ZAR','710',2),(100188,'LIBERIA','Liberian Dollar','LRD','430',2),(100189,'LIBYA','Libyan Dinar','LYD','434',3),(100190,'LIECHTENSTEIN','Swiss Franc','CHF','756',2),(100191,'ROMANIA','Romanian Leu','RON','946',2),(100192,'RUSSIAN FEDERATION (THE)','Russian Ruble','RUB','643',2),(100193,'RWANDA','Rwanda Franc','RWF','646',0),(100194,'SAINT BARTHÉLEMY','Euro','EUR','978',2),(100195,'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA','Saint Helena Pound','SHP','654',2),(100196,'SAINT KITTS AND NEVIS','East Caribbean Dollar','XCD','951',2),(100197,'SAINT LUCIA','East Caribbean Dollar','XCD','951',2),(100198,'SAINT MARTIN (FRENCH PART)','Euro','EUR','978',2),(100199,'SAINT PIERRE AND MIQUELON','Euro','EUR','978',2),(100200,'SAINT VINCENT AND THE GRENADINES','East Caribbean Dollar','XCD','951',2),(100201,'SAMOA','Tala','WST','882',2),(100202,'SAN MARINO','Euro','EUR','978',2),(100203,'SAO TOME AND PRINCIPE','Dobra','STN','930',2),(100204,'SAUDI ARABIA','Saudi Riyal','SAR','682',2),(100205,'SENEGAL','CFA Franc BCEAO','XOF','952',0),(100206,'SERBIA','Serbian Dinar','RSD','941',2),(100207,'SEYCHELLES','Seychelles Rupee','SCR','690',2),(100208,'SIERRA LEONE','Leone','SLL','694',2),(100209,'SINGAPORE','Singapore Dollar','SGD','702',2),(100210,'SINT MAARTEN (DUTCH PART)','Netherlands Antillean Guilder','ANG','532',2),(100211,'SLOVAKIA','Euro','EUR','978',2),(100212,'SLOVENIA','Euro','EUR','978',2),(100213,'SOLOMON ISLANDS','Solomon Islands Dollar','SBD','090',2),(100214,'SOMALIA','Somali Shilling','SOS','706',2),(100215,'SOUTH AFRICA','Rand','ZAR','710',2),(100216,'SOUTH SUDAN','South Sudanese Pound','SSP','728',2),(100217,'SPAIN','Euro','EUR','978',2),(100218,'SRI LANKA','Sri Lanka Rupee','LKR','144',2),(100219,'SUDAN (THE)','Sudanese Pound','SDG','938',2),(100220,'SURINAME','Surinam Dollar','SRD','968',2),(100221,'SVALBARD AND JAN MAYEN','Norwegian Krone','NOK','578',2),(100222,'ESWATINI','Lilangeni','SZL','748',2),(100223,'SWEDEN','Swedish Krona','SEK','752',2),(100224,'SWITZERLAND','Swiss Franc','CHF','756',2),(100225,'SWITZERLAND','WIR Euro','CHE','947',2),(100226,'SWITZERLAND','WIR Franc','CHW','948',2),(100227,'SYRIAN ARAB REPUBLIC','Syrian Pound','SYP','760',2),(100228,'TAIWAN (PROVINCE OF CHINA)','New Taiwan Dollar','TWD','901',2),(100229,'TAJIKISTAN','Somoni','TJS','972',2),(100230,'TANZANIA, UNITED REPUBLIC OF','Tanzanian Shilling','TZS','834',2),(100231,'THAILAND','Baht','THB','764',2),(100232,'TIMOR-LESTE','US Dollar','USD','840',2),(100233,'TOGO','CFA Franc BCEAO','XOF','952',0),(100234,'TOKELAU','New Zealand Dollar','NZD','554',2),(100235,'TONGA','Pa?anga','TOP','776',2),(100236,'TRINIDAD AND TOBAGO','Trinidad and Tobago Dollar','TTD','780',2),(100237,'TUNISIA','Tunisian Dinar','TND','788',3),(100238,'TURKEY','Turkish Lira','TRY','949',2),(100239,'TURKMENISTAN','Turkmenistan New Manat','TMT','934',2),(100240,'TURKS AND CAICOS ISLANDS (THE)','US Dollar','USD','840',2),(100241,'TUVALU','Australian Dollar','AUD','036',2),(100242,'UGANDA','Uganda Shilling','UGX','800',0),(100243,'UKRAINE','Hryvnia','UAH','980',2),(100244,'UNITED ARAB EMIRATES (THE)','UAE Dirham','AED','784',2),(100245,'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)','Pound Sterling','GBP','826',2),(100246,'UNITED STATES MINOR OUTLYING ISLANDS (THE)','US Dollar','USD','840',2),(100247,'UNITED STATES OF AMERICA (THE)','US Dollar','USD','840',2),(100248,'UNITED STATES OF AMERICA (THE)','US Dollar (Next day)','USN','997',2),(100249,'URUGUAY','Peso Uruguayo','UYU','858',2),(100250,'URUGUAY','Uruguay Peso en Unidades Indexadas (UI)','UYI','940',0),(100251,'URUGUAY','Unidad Previsional','UYW','927',4),(100252,'UZBEKISTAN','Uzbekistan Sum','UZS','860',2),(100253,'VANUATU','Vatu','VUV','548',0),(100254,'VENEZUELA (BOLIVARIAN REPUBLIC OF)','Bolívar Soberano','VES','928',2),(100255,'VIET NAM','Dong','VND','704',0),(100256,'VIRGIN ISLANDS (BRITISH)','US Dollar','USD','840',2),(100257,'VIRGIN ISLANDS (U.S.)','US Dollar','USD','840',2),(100258,'WALLIS AND FUTUNA','CFP Franc','XPF','953',0),(100259,'WESTERN SAHARA','Moroccan Dirham','MAD','504',2),(100260,'YEMEN','Yemeni Rial','YER','886',2),(100261,'ZAMBIA','Zambian Kwacha','ZMW','967',2),(100262,'ZIMBABWE','Zimbabwe Dollar','ZWL','932',2);


-- INSERT INTO `edad_sequence_numbers` VALUES(200000000,300000000,400000000,500000000,600000000,7000000,8000000,9000000);

-- INSERT INTO `accounts_generators` VALUES(1000000,2000000,3000000,4000000,5000000);

--UPDATE users SET  fk_user_role_id_users=1002 WHERE  users_id=100000000;

-- INSERT INTO systemids VALUES('',2,10,100,1000,10000,20000,70000,80000,90000,100000,110000,120000,130000,140000,1500000,1600000,1700000,1800000,1900000,1400000,'NCO','NCO','NCO');

--INSERT INTO sms_management VALUES(NULL,5);


-- INSERT INTO  the_company_datails VALUES(NULL,'EDAD COINBOX-SMC',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());


-- INSERT INTO  continent VALUES(NULL,'AFRICA',16000,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

-- INSERT INTO  continental_region VALUES(NULL,'EASTERN AFRICA',300,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

-- INSERT INTO  country VALUES(NULL,'UGANDA',400,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

-- INSERT INTO  bussiness_unit VALUES(NULL,'BRANCH','SEETA',500,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

-- INSERT INTO  country_region VALUES(NULL,'CENTRAL UGANDA',500,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

-- INSERT INTO  edad_constants VALUES(NULL,48,360,365,100000000,10,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

/* SUPER USER DETAILS */
--INSERT INTO  users VALUES(NULL,'0776867911','$2b$14$br6WeurpvN1jGbOt7zP4F.L6LYmxjdHyPy8EbjFvH573T.lc2y192',1,1007,700,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

--INSERT INTO edad_box VALUES(NULL,'Individual','Individual_box','individual_box_saving',100000052,100000052,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

--INSERT INTO next_of_kin VALUES(NULL,'My_self',100000052,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());


--INSERT INTO common_bio_data VALUES(NULL,'BYAMUKAMA DANIEL','Male','1950-03-01','XXXXXXXXXX',13052,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

--INSERT INTO  users_approval VALUES(1,1,'0776867911',100000052, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());





/* CURRENT ID GENERATOR FUNCTION */

DROP FUNCTION IF EXISTS IdGenerator;
DELIMITER ##
CREATE FUNCTION IdGenerator(idTypeToGen VARCHAR(30)) 
RETURNS INT
DETERMINISTIC
BEGIN

DECLARE theIdInQuestion INT;

IF idTypeToGen='AGENT' THEN

SELECT  individual_box_agency_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET individual_box_agency_id =theIdInQuestion;

ELSEIF idTypeToGen='SAVER' THEN

SELECT  individual_box_saving_id INTO theIdInQuestion FROM edad_id_generator;

 SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET individual_box_saving_id =theIdInQuestion;

ELSEIF idTypeToGen='VENDOR' THEN


SELECT   individual_box_vending_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET  individual_box_vending_id =theIdInQuestion;


ELSEIF idTypeToGen='IND_GOD' THEN

SELECT   individual_box_for_God_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET  individual_box_for_God_id =theIdInQuestion;

ELSEIF idTypeToGen='IND_SCHOOLFEES' THEN

SELECT   individual_box_school_fees_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET  individual_box_school_fees_id =theIdInQuestion;

ELSEIF idTypeToGen='GROUP' THEN

SELECT   Group_box_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET  Group_box_id =theIdInQuestion;

ELSEIF idTypeToGen='GROUP_GOD' THEN


SELECT    Box_for_God_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET   Box_for_God_id =theIdInQuestion;

ELSEIF idTypeToGen='GROUP_SCHOOL' THEN

SELECT    school_box_id INTO theIdInQuestion FROM edad_id_generator;

SET theIdInQuestion=theIdInQuestion+1;

UPDATE edad_id_generator SET   school_box_id =theIdInQuestion;

END IF;

 

RETURN theIdInQuestion;
END ##
DELIMITER ;


/* COUNT ALL USER ROLES */
DROP PROCEDURE IF EXISTS getTheUserRolesRegistered;

DELIMITER ##

CREATE PROCEDURE   getTheUserRolesRegistered(IN thePhoneNumber VARCHAR(45)) 

BEGIN

SELECT COUNT(users_id) AS roles FROM users  WHERE users_contact=thePhoneNumber;

END ##

DELIMITER ;



/* COUNT ALL USER ROLES */
DROP PROCEDURE IF EXISTS isPhoneNumberExists;

DELIMITER ##

CREATE PROCEDURE   isPhoneNumberExists(IN data JSON) 

BEGIN

          
SELECT cbd.name,cbd.national_id FROM users u INNER JOIN user_role ur ON u.fk_user_role_id_users=ur.user_role_id INNER JOIN next_of_kin nok ON nok.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nok.next_of_kin_id WHERE u.users_contact=JSON_UNQUOTE(JSON_EXTRACT(data, '$.theContact')) AND ur.user_role_id=JSON_UNQUOTE(JSON_EXTRACT(data, '$.theRole'));

END ##

DELIMITER ;




/* GET THE ROLES */


DROP PROCEDURE IF EXISTS getTheUserRoles;

DELIMITER ##

CREATE PROCEDURE   getTheUserRoles() 

BEGIN

 select u.fk_user_role_id_users AS user_role_id,ur.user_role_name,u.users_contact from users u INNER JOIN user_role ur ON u.fk_user_role_id_users=ur.user_role_id;

END ##

DELIMITER ;



/* REGISTER ADMIN*/
DROP PROCEDURE IF EXISTS `registerTheAdmin`;
DELIMITER ##
CREATE PROCEDURE `registerTheAdmin`(IN data JSON,IN password VARCHAR(200))
BEGIN

DECLARE the_users_id,the_next_of_kin_id,regionalId INT;

IF ISNULL(regionalId) THEN
SET regionalId=0;
END IF;

INSERT INTO  users VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.main_contact_number')),password,1,1006,700,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET the_users_id=LAST_INSERT_ID();



INSERT INTO edad_box VALUES(NULL,'Individual','Individual_box','individual_box_general',the_users_id,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

INSERT INTO interest_accrue_complete VALUES(1,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

INSERT INTO interest_accrue_complete VALUES(1,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 


INSERT INTO next_of_kin VALUES(NULL,'My_self',the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET the_next_of_kin_id=LAST_INSERT_ID();


INSERT INTO common_bio_data VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.full_name')),JSON_UNQUOTE(JSON_EXTRACT(data,'$.sex')),'1970-03-01','XXXXXXXXXX',the_next_of_kin_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

INSERT INTO  users_approval VALUES(1,1,'0759516531',the_users_id, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

SELECT users_id,users_contact,fk_user_role_id_users FROM users where users_id=the_users_id;

END ##
DELIMITER ;




/* REGISTER SMART SAVER*/
DROP PROCEDURE IF EXISTS registerTheSmartSaver;
DELIMITER ##
CREATE PROCEDURE   registerTheSmartSaver(IN data JSON,IN password VARCHAR(200)) 
BEGIN

DECLARE the_users_id,the_next_of_kin_id,the_box_id,regionalId INT;

IF ISNULL(regionalId) THEN
SET regionalId=0;
END IF;

INSERT INTO  users VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.main_contact_number')),password,1,1000,JSON_UNQUOTE(JSON_EXTRACT(data,'$.country_region_id')),CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET the_users_id=LAST_INSERT_ID();



INSERT INTO edad_box VALUES(NULL,'Individual','Individual_box','individual_box_saving',the_users_id,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

INSERT INTO interest_accrue_complete VALUES(1,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 


INSERT INTO next_of_kin VALUES(NULL,'My_self',the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET the_next_of_kin_id=LAST_INSERT_ID();

INSERT INTO common_bio_data VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.full_name')),JSON_UNQUOTE(JSON_EXTRACT(data,'$.sex')),'1970-03-01',JSON_UNQUOTE(JSON_EXTRACT(data,'$.national_id')),the_next_of_kin_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

INSERT INTO  users_approval VALUES(1,1,'0759516531',the_users_id, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

SELECT users_id,users_contact,fk_user_role_id_users FROM users where users_id=the_users_id;

END ##
DELIMITER ;






/* REGISTER SMART AGENT*/
DROP PROCEDURE IF EXISTS registerTheSmartAgent;
DELIMITER ##
CREATE PROCEDURE   registerTheSmartAgent(IN data JSON,IN password VARCHAR(200)) 
BEGIN

DECLARE the_users_id,the_next_of_kin_id INT;

INSERT INTO  users VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.main_contact_number')),password,1,1001,JSON_UNQUOTE(JSON_EXTRACT(data,'$.country_region_id')),CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

SET the_users_id=LAST_INSERT_ID();



INSERT INTO edad_box VALUES(NULL,'Individual','Individual_box','individual_box_agency',IdGenerator('AGENT'),the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

INSERT INTO interest_accrue_complete VALUES(1,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

INSERT INTO next_of_kin VALUES(NULL,'My_self',the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET the_next_of_kin_id=LAST_INSERT_ID();


INSERT INTO common_bio_data VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.full_name')),JSON_UNQUOTE(JSON_EXTRACT(data,'$.sex')),'1970-01-01',JSON_UNQUOTE(JSON_EXTRACT(data,'$.national_id')),the_next_of_kin_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

INSERT INTO  users_approval VALUES(1,1,'0759516531',the_users_id, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

SELECT users_id,users_contact,fk_user_role_id_users FROM users where users_id=the_users_id;

END ##
DELIMITER ;




/* TEST WHETHER COMPANY ADDED */
DROP PROCEDURE IF EXISTS isAgentRegistered;
DELIMITER ##
CREATE PROCEDURE   isAgentRegistered(IN agentContactNumber VARCHAR(60)) 
BEGIN

SELECT  COUNT(u. users_id) AS agent_registered FROM  users u INNER JOIN user_role ul ON u.fk_user_role_id_users=ul.user_role_id WHERE ul.user_role_id=1001 AND u.users_contact=agentContactNumber;

END ##
DELIMITER ;



/* ALL CONTINENTS */
DROP PROCEDURE IF EXISTS allCountryRegions;
DELIMITER ##
CREATE PROCEDURE   allCountryRegions() 
BEGIN
SELECT country_region_id,country_region_name FROM country_region;
END ##
DELIMITER ;




/* ALL CONTINENTS */
DROP PROCEDURE IF EXISTS allContinents;
DELIMITER ##
CREATE PROCEDURE   allContinents() 
BEGIN
SELECT continents_name FROM continents;
END ##
DELIMITER ;


DROP PROCEDURE IF EXISTS initSetUps;
DELIMITER ##
CREATE PROCEDURE   initSetUps() 
BEGIN
SELECT edad_constants_id,edad_interestRate_payable,edad_interestRate_days,edad_interest_withdraw_days FROM edad_constants WHERE edad_constants_id>215; -- Why edad_constants_id>215
END ##
DELIMITER ;
-- uex024n



/* ALL CONTINENTAL REGIONS */
DROP PROCEDURE IF EXISTS allContinentalRegions;
DELIMITER ##
CREATE PROCEDURE   allContinentalRegions() 
BEGIN
SELECT  continental_regions_name FROM continental_regions;
END ##
DELIMITER ;



/* ALL COUNTRIES */
DROP PROCEDURE IF EXISTS allCountries;
DELIMITER ##
CREATE PROCEDURE   allCountries() 
BEGIN
SELECT  countries_name FROM countries;
END ##
DELIMITER ;


/*The first next of kin will always be the company details to enforce referential integrity and be able to use the tables say adress for both next of kin, users and the company */


/* SAVE INITIAL CONTACT DETAILS FOR THE COMPANY */
DROP PROCEDURE IF EXISTS saveInitialCompanyContactDetals;
DELIMITER ##
CREATE PROCEDURE   saveInitialCompanyContactDetals(IN data JSON) 
BEGIN

DECLARE company_id INT;

SELECT  next_of_kin_id INTO company_id FROM next_of_kin ORDER BY next_of_kin_id ASC LIMIT 1;

INSERT INTO contacts VALUES (NULL,
JSON_UNQUOTE(JSON_EXTRACT(data,'$.mobile_contact')),
JSON_UNQUOTE(JSON_EXTRACT(data,'$.mobile_contact2')),
JSON_UNQUOTE(JSON_EXTRACT(data,'$.office_contact')),
JSON_UNQUOTE(JSON_EXTRACT(data,'$.email_contact_1')),
JSON_UNQUOTE(JSON_EXTRACT(data,'$.email_contact_2')),
company_id,
CURRENT_TIMESTAMP(),
CURRENT_TIMESTAMP());
INSERT INTO address VALUES (NULL,JSON_UNQUOTE(JSON_EXTRACT(data,'$.box_number')),company_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

END ##
DELIMITER ;


/* TEST WHETHER COMPANY ADDED */
DROP PROCEDURE IF EXISTS companyIsRegisted;
DELIMITER ##
CREATE PROCEDURE   companyIsRegisted() 
BEGIN

SELECT  COUNT(the_company_details_id) AS added_companey FROM  the_company_datails;

END ##
DELIMITER ;




/* TEST WHETHER CONSTANTS ADDED */
DROP PROCEDURE IF EXISTS constantAdded;
DELIMITER ##
CREATE PROCEDURE   constantAdded() 
BEGIN

/* DECLARE added_constants INT; */

SELECT  COUNT(edad_constants_id) AS  added_constants FROM edad_constants;

END ##
DELIMITER ;






/* POST COMPANY SETUP */
DROP PROCEDURE IF EXISTS registerTheCompany;
DELIMITER ##
CREATE PROCEDURE   registerTheCompany(IN data JSON) 
BEGIN
DECLARE last_company_id INT;
DECLARE last_continent_id INT;
DECLARE last_continental_region_id INT;
DECLARE last_countries_id INT;

INSERT INTO  the_company_datails VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data, '$.company_name')),CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET last_company_id=LAST_INSERT_ID();
INSERT INTO  continent VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data, '$.continent_name')),last_company_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());
SET last_continent_id=LAST_INSERT_ID();
INSERT INTO  continental_region VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data, '$.continental_region_name')),last_continent_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());
SET last_continental_region_id=LAST_INSERT_ID();
INSERT INTO  country VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data, '$.countries_name')),last_continental_region_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());
SET last_countries_id=LAST_INSERT_ID();
INSERT INTO  bussiness_unit VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data, '$.business_unit_type')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.business_unit_name')),last_countries_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());
END ##
DELIMITER ;


/* POST CONSTANTS */
DROP PROCEDURE IF EXISTS postInitialConstantDetails;
DELIMITER ##
CREATE PROCEDURE   postInitialConstantDetails(IN data JSON) 
BEGIN
INSERT INTO  edad_constants VALUES(NULL,JSON_UNQUOTE(JSON_EXTRACT(data, '$.interest_payable')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.compute_interestRate_days')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.withdraw_interestRate_days')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.edad_number_of_tokens')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.interest_paid_on_agency')),CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());
END ##
DELIMITER ;








/* GET user_id,password,phone number and role OF THE USER */
DROP PROCEDURE IF EXISTS getNormaUserLogInDetails;
DELIMITER ##
CREATE PROCEDURE   getNormaUserLogInDetails(IN data JSON) 
BEGIN

IF JSON_LENGTH(data)>2 THEN
SELECT * FROM  users WHERE users_contact=JSON_UNQUOTE(JSON_EXTRACT(data, '$.main_contact_number')) AND  fk_user_role_id_users=JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_role_id'));
ELSE

SELECT * FROM  users WHERE users_contact=JSON_UNQUOTE(JSON_EXTRACT(data, '$.main_contact_number'));

END IF;
END ##
DELIMITER ;


/* TEST WHETHER USER EXISTS */
DROP PROCEDURE IF EXISTS userExists;
DELIMITER ##
CREATE PROCEDURE   userExists(IN phone_number VARCHAR(45)) 
BEGIN
SELECT  COUNT(users_id) AS user_exists FROM  users WHERE users_contact=phone_number;
END ##
DELIMITER ;


/* TEST WHETHER USER EXISTS */
DROP PROCEDURE IF EXISTS smartSaverExists;
DELIMITER ##
CREATE PROCEDURE   smartSaverExists(IN phone_number VARCHAR(45)) 
BEGIN

SELECT  COUNT(u.users_id) AS user_exists FROM  users u INNER JOIN user_role ul ON u.fk_user_role_id_users=ul.user_role_id WHERE u.users_contact=phone_number AND ul.user_role_id=1000;

END ##
DELIMITER ;


/* TEST WHETHER EDAD BOX BALANCE EXISTS */
DROP PROCEDURE IF EXISTS boxBalanceExists;
DELIMITER ##
CREATE PROCEDURE   boxBalanceExists(IN box_id INT) 
BEGIN
SELECT  COUNT(box_balance_account_id) AS  box_balance_exists FROM box_balance_account WHERE individual_box_sub_category_box=box_id;
END ##
DELIMITER ;


/* CREATE INITIAL ADMIN DETAILS
DROP PROCEDURE IF EXISTS registerPhoneNumberPasswordAdmin;
DELIMITER ##
CREATE PROCEDURE   registerPhoneNumberPasswordAdmin(IN phone_number VARCHAR(45),IN password VARCHAR(200)) 
BEGIN

DECLARE the_users_id INT;

INSERT INTO  users VALUES(NULL,phone_number,password,1001,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

SET the_users_id=LAST_INSERT_ID();

SELECT users_id,users_name,fk_user_role_id_users FROM users where users_id=the_users_id;

INSERT INTO edad_box VALUES(NULL,'Individual','Individual_box','individual_box_general',the_users_id,the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

INSERT INTO next_of_kin VALUES(NULL,'My_self',the_users_id,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

END ##
DELIMITER ;

*/



/* TEST WHETHER USER EXISTS */
DROP PROCEDURE IF EXISTS mainBalance;
DELIMITER ##
CREATE PROCEDURE   mainBalance(IN user_id VARCHAR(45),OUT balance VARCHAR(45)) 
BEGIN


SELECT  COUNT(box_balance_account_id) INTO  @balanceExFlag FROM  box_balance_account WHERE  individual_box_sub_category_box=user_id;

 IF @balanceExFlag>0 THEN

SELECT individual_box_balance  FROM  box_balance_account  WHERE  individual_box_sub_category_box=user_id ORDER BY  box_balance_account_id DESC LIMIT 1 INTO balance;

-- SELECT balance;
END IF;

IF @balanceExFlag<=0 THEN

SELECT 0.00 INTO balance;
-- SELECT balance;
END IF;

END ##
DELIMITER ;


/* TEST WHETHER USER EXISTS */
DROP PROCEDURE IF EXISTS mainBalance1;
DELIMITER ##
CREATE PROCEDURE   mainBalance1(IN user_id VARCHAR(45)) 
BEGIN


SELECT  COUNT(box_balance_account_id) INTO  @balanceExFlag FROM  box_balance_account WHERE  individual_box_sub_category_box=user_id;

 IF @balanceExFlag>0 THEN

SELECT individual_box_balance AS balance   FROM  box_balance_account WHERE  individual_box_sub_category_box=user_id ORDER BY  box_balance_account_id DESC LIMIT 1;

END IF;

IF @balanceExFlag<=0 THEN

SELECT 0.00 AS balance;

END IF;

END ##
DELIMITER ;



/* POST CONSTANTS 
DROP PROCEDURE IF EXISTS postEdadTxn;
DELIMITER ##
CREATE PROCEDURE   postEdadTxn(IN data JSON,IN narration VARCHAR(200)) 

BEGIN

DECLARE existingNumberOfTokens,remainingNumberOfTokens,totalBoxTokens  DOUBLE;

-- tokensAvailableForSave,remainTokenForSave
DECLARE edadBoxId INT;
-- SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type'));
IF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'BOX_DEPOSIT' THEN

SELECT edad_number_of_tokens FROM edad_constants INTO existingNumberOfTokens;
-- SELECT existingNumberOfTokens;
SET remainingNumberOfTokens=existingNumberOfTokens-JSON_UNQUOTE(JSON_EXTRACT(data, '$.number_of_tokens'));

UPDATE edad_constants SET edad_number_of_tokens=remainingNumberOfTokens;

SELECT edad_box_id  INTO edadBoxId FROM edad_box  WHERE  fk_user_id_edad_box=JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')) AND edad_box_type_sub_category='individual_box_general';
-- SELECT edadBoxId;
INSERT INTO box_general_ledger VALUES(NULL,DATE(NOW()),narration,JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')),
JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')),0,JSON_UNQUOTE(JSON_EXTRACT(data, '$.number_of_tokens')),edadBoxId);

CALL mainBalance(JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')),@theExistBalance);

SET totalBoxTokens=@theExistBalance+JSON_UNQUOTE(JSON_EXTRACT(data, '$.number_of_tokens'));
-- sELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.number_of_tokens'));
-- SELECT @theExistBalance;
-- SELECT totalBoxTokens;
INSERT INTO box_balance_account VALUES(NULL,DATE(NOW()),JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')),totalBoxTokens,LAST_INSERT_ID());


-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'BOX_WITHDRAW' THEN


-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'BOX_TRANSFER' THEN

--  SELECT individual_box_balance FROM   box_balance_account WHERE individual_box_sub_category_box=100000002 ORDER BY box_balance_account_id DESC LIMIT 1;

--  tokensAvailableForSave



-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'SAVINGS_TRANSFER' THEN





-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'AGENCY_TRANSFER' THEN

-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'VENDING_TRANSFER' THEN

-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'INDIVIDUAL_BOX_FOR_GOD_TRANSFER' THEN

-- WHEN JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'INDIVIDUAL_SCHOOL_FEES_TRANSFER' THEN


-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'GROUP_TRANSFER' THEN

-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'BOX_FOR_GOD_TRANSFER' THEN

-- ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.txn_type')) = 'SCHOOL_FEES_TRANSFER' THEN

END IF;

-- *165#FINANCIAL SERVICES9030014840590



END ##
DELIMITER ;

*/


/* POST CONSTANTS */
DROP PROCEDURE IF EXISTS postEdadTxnIN;
DELIMITER ##
CREATE PROCEDURE   postEdadTxnIN(IN data JSON,IN narration VARCHAR(200)) 
BEGIN


END ##
DELIMITER ;

/* POST CONSTANTS */
DROP PROCEDURE IF EXISTS postEdadTxnOUT;
DELIMITER ##
CREATE PROCEDURE   postEdadTxnOUT(IN data JSON,IN narration VARCHAR(200)) 
BEGIN


END ##
DELIMITER ;




/*POST MAIN BOX TRANSACTIONS*/

DROP PROCEDURE IF EXISTS purchaseSMSs;

DELIMITER ##
CREATE PROCEDURE   purchaseSMSs(IN data JSON) 
BEGIN

DECLARE existingSmsBalance,newSmsBalance INT;
SELECT number_of_sms FROM sms_management INTO existingSmsBalance;

SET newSmsBalance=existingSmsBalance+JSON_UNQUOTE(JSON_EXTRACT(data, '$.number_of_SMSs'));

UPDATE sms_management SET number_of_sms=newSmsBalance;

END ##
DELIMITER ;




/*POST MAIN BOX TRANSACTIONS*/

DROP PROCEDURE IF EXISTS reduceSMSs;

DELIMITER ##
CREATE PROCEDURE   reduceSMSs() 
BEGIN

DECLARE existingSmsBalance,newSmsBalance INT;

SELECT number_of_sms FROM sms_management INTO existingSmsBalance;

SET newSmsBalance=existingSmsBalance-1;

UPDATE sms_management SET number_of_sms=newSmsBalance;

END ##
DELIMITER ;

/* TEST WHETHER SAVINGS ARE REGISTERED */








/* TEST WHETHER SAVINGS ARE REGISTERED */


DROP PROCEDURE IF EXISTS aregroupAccountsThere;
DELIMITER ##
CREATE PROCEDURE   aregroupAccountsThere(IN user_id INT) 
BEGIN
-- SELECT user_id; If the group account id and edad_box_type_sub_category is group_box, then the group is registered
SELECT  COUNT(edad_box_type_sub_category_id) AS registered_group FROM  edad_box WHERE edad_box_type_sub_category='group_box' AND fk_user_id_edad_box=user_id;

END ##
DELIMITER ;


DROP PROCEDURE IF EXISTS registerGroupService;
DELIMITER ##
CREATE PROCEDURE   registerGroupService(IN data JSON) 
BEGIN

DECLARE existingGroupId,newGroupId INT;

SELECT group_box_id INTO existingGroupId FROM edad_sequence_numbers;
SET newGroupId=existingGroupId-1;

UPDATE edad_sequence_numbers SET group_box_id=newGroupId;

/*By associating the user id with the newly created group id, the user becomes the sole admin of the group only can he withdraw from the group box. */
INSERT INTO edad_box VALUES(NULL,'Group','Group_box','Group_box_general',existingGroupId,JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')));

INSERT INTO interest_accrue_complete VALUES(1,JSON_UNQUOTE(JSON_EXTRACT(data, '$.user_id')),CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP()); 

END ##
DELIMITER ;




/*GET THE AVAILABLE SMSs*/

DROP PROCEDURE IF EXISTS getTheNumberOfSMSs;

DELIMITER ##
CREATE PROCEDURE   getTheNumberOfSMSs() 
BEGIN
SELECT number_of_sms  FROM sms_management;


END ##
DELIMITER ;




/*GET THE TXN HISTORY*/

-- DROP PROCEDURE IF EXISTS txnHistory;

-- DELIMITER ##
-- CREATE PROCEDURE   txnHistory(IN boxId INT) 
-- BEGIN
-- SELECT  DATE_FORMAT(DATE(g.txn_date),"%d/%m/%Y") AS txn_date ,g.trn_narration,g.tokens_debit,g.tokens_credit,b.individual_box_balance FROM box_general_ledger g INNER JOIN box_balance_account b ON g.box_general_ledger_id=b.fk_edad_general_balances_box_balance_account WHERE g.edad_box_account=boxId ORDER BY g.box_general_ledger_id DESC LIMIT 5;
-- END ##
-- DELIMITER ;







  DROP PROCEDURE IF EXISTS CreateAccount;
 
 	DELIMITER  ##
--  IN cat1 VARCHAR(200),IN cat2 VARCHAR(200),IN cat3 VARCHAR(200),IN cat4 VARCHAR(200),IN accountName VARCHAR(200),IN UserId VARCHAR(80)
   CREATE PROCEDURE  CreateAccount (IN data JSON) BEGIN
  
  DECLARE `id`,`account_status_flag` INT;

  DECLARE `account_status` VARCHAR(20);

  -- the account_status should be a flag which should determine how the account should behave.


   SELECT `SyIdA1` FROM `systemids` INTO `account_status_flag`;

   CALL the_user_id(JSON_UNQUOTE(JSON_EXTRACT(data, '$.account_name')),@user_id_db);

   IF `account_status_flag`=1 THEN
    SET  `account_status`='Created';-- this implies that the account has to first be approved
   END IF;

   IF `account_status_flag`=2 THEN
    SET  `account_status`='Active';-- this implies that the account does not need to be approved
   END IF;

  
  IF JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat2'))='Assets' THEN
  
  SELECT `template_assets` INTO @id_assets1 FROM  `accounts_generators`;
  
  IF @id_assets1<1999999 THEN
  
  SET `id`=@id_assets1+1;
    UPDATE `accounts_generators` SET `template_asset`=`id`; 
  END IF;
  
  ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat2'))='Expenses' THEN
    SELECT `template_expenses` INTO @id_expenses1 FROM  `accounts_generators`;
	
  IF @id_expenses1<2999999 THEN
  
   SET `id`= @id_expenses1+1;

  UPDATE `accounts_generators` SET `template_expenses`=`id`;
  END IF;

  
    ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat2'))='Revenues' THEN
  SELECT `template_revenues` INTO @id_revenues1 FROM  `accounts_generators`;	

	IF @id_revenues1<3999999 THEN
  
   SET `id`=@id_revenues1+1;

    UPDATE `accounts_generators` SET `template_revenues`=`id`; 
  END IF;
	
  ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat2'))='Equity' THEN
	 
	  SELECT `template_equity` INTO @id_equity1 FROM  `accounts_generators`; 
	  
	 IF @id_equity1<4999999 THEN
  
   SET id=@id_equity1+1;

  UPDATE `accounts_generators` SET `template_equity`=`id`;

  END IF;

    ELSEIF JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat2'))='Liabilities' THEN

  SELECT `template_liabilities` INTO @id_liabilities1 FROM  `accounts_generators`;	

	IF @id_liabilities1<5999999 THEN
  
   SET id=@id_liabilities1+1;

  UPDATE `accounts_generators` SET `template_liabilities`=`id`; 

  END IF;
	
  END IF;
   
  INSERT INTO accounts_created_store VALUES(null,CURRENT_TIMESTAMP(),JSON_UNQUOTE(JSON_EXTRACT(data, '$.account_name')),`id`,JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat4')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat3')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat2')),JSON_UNQUOTE(JSON_EXTRACT(data, '$.cat1')),`account_status`,@user_id_db,@user_id_db,CURRENT_TIMESTAMP(),'NA','NA','NA');
  
   INSERT INTO balance_per_day VALUES(null,CURRENT_TIMESTAMP(),`id`,JSON_UNQUOTE(JSON_EXTRACT(data, '$.account_name')),'0.0',@user_id_db,CURRENT_TIMESTAMP());
     END ##
 DELIMITER ;
 

 
 DROP PROCEDURE IF EXISTS The_user_id;
 	DELIMITER ##
   CREATE PROCEDURE  The_user_id (IN `the_user_name` VARCHAR(45), OUT `the_id` INT) BEGIN
  SELECT `user_id` INTO `the_id` FROM `users` WHERE `user_name`=`the_user_name`;
  
  IF  ISNULL(`the_id`) THEN

  SET `the_id`=0;

  END IF;
      END  ##
 DELIMITER ;


 DROP PROCEDURE IF EXISTS SystemDate;

 	DELIMITER  ##
   CREATE PROCEDURE  SystemDate (OUT originalDate DATE  ) BEGIN
  SELECT SystemDate INTO originalDate FROM DatesForSystem ;
      END ##
 DELIMITER ;


DROP PROCEDURE IF EXISTS postingDate;
 	DELIMITER  ##
   CREATE PROCEDURE  postingDate (OUT originalDate DATE  ) BEGIN
    SELECT PostingmDate INTO originalDate FROM  DatesForSystem;
     END ##
 DELIMITER ;


 DELETE FROM accountstemplate;
 DELETE FROM balancesdb;
 DELETE FROM generalledger;
 DELETE FROM stock;

  DELETE FROM salesledger;
  DELETE FROM salestracker;
  DELETE FROM specialaccountsetup;

   DELETE FROM txnscategories;
   DELETE FROM txnsprocess;

 

DROP PROCEDURE IF EXISTS createTxnPosting;
 
 	DELIMITER  ##

   CREATE PROCEDURE  createTxnPosting (IN txnName VARCHAR(200),IN drAccount VARCHAR(200),IN crAccount VARCHAR(200)) BEGIN
  
    SELECT AccountNumber INTO @drAccountNumber FROM accountstemplate WHERE AccountName=drAccount; 
    
     SELECT AccountNumber INTO @crAccountNumber FROM accountstemplate WHERE AccountName=crAccount; 

 CALL SystemDate(@dateNow);
  
  INSERT INTO TxnsProcess VALUES(null,txnName,@drAccountNumber,drAccount,@crAccountNumber,crAccount,@dateNow,'NA','NA','NA');
  

     END ##
 DELIMITER ;



DROP PROCEDURE IF EXISTS doubleEntryManager;
DELIMITER  ##
  -- data=amount,trn_ref,trn_type,supported_currencies_id,narration,created_by,first_approved,second_approved
 CREATE PROCEDURE  doubleEntryManager (IN data JSON) BEGIN
 
 DECLARE i,j INT;
DECLARE batchNumberL VARCHAR(30);
DECLARE exJData,newData JSON;


SET batchNumberL=batchNumberFunc(); -- Set batch number for all these entries in the batch

SET i= JSON_LENGTH(JSON_EXTRACT(data,"$.post_entries"));-- Determine the number of items in the batch

SET exJData=JSON_EXTRACT(data,"$.post_entries");-- extract all the items in the batch

SET j=0;

loop1: REPEAT --  loop through the batch and process each item

SET @sqlE=CONCAT(CAST("SET @exJData1=" AS CHAR CHARACTER SET utf8),CAST("JSON_EXTRACT(" AS CHAR CHARACTER SET utf8),CAST("'" AS CHAR CHARACTER SET utf8),exJData,CAST("'" AS CHAR CHARACTER SET utf8),CAST(",'$[" AS CHAR CHARACTER SET utf8),j,CAST("]')" AS CHAR CHARACTER SET utf8)); -- Select the jth item in the batch
SELECT @sqlE; 
PREPARE smt FROM @sqlE;  EXECUTE smt; DROP PREPARE smt;

IF JSON_UNQUOTE(JSON_EXTRACT(@exJData1, '$.trn_type_name'))='expenseCash' THEN --  determine it's trasaction type and if it is expense cash process expense
SELECT tp.dr_account_name INTO @dr_account from trn_process tp INNER JOIN trn_type tt ON tp.fk_trn_type_id_trn_process=tt.trn_type_id where tt.trn_type_name=JSON_UNQUOTE(JSON_EXTRACT(@exJData1, '$.trn_type_name')); --  determine the debit account

SELECT  account_name INTO @cashAccount FROM special_account_setups WHERE special_account_setups_name='CASH'; --  determine the credit account and since it cash get it from special  accounts

CALL trnFamilyValue(@trnFamily); -- get transaction family code

 SET @newData=JSON_INSERT(@exJData1,'$.debit_account', @dr_account ,'$.credit_account', @cashAccount, '$.batch_code' ,@batchNumber,'$.trn_family_code', @trnFamily );

--  newData=amount,trn_ref,trn_type,supported_currencies_id,narration,created_by,first_approved,second_approved,debit_account,credit_account,batch_code,trn_family_code
CALL post_trn ('DEBIT',newData);

CALL post_trn ('CREDIT',newData);

    END IF;

    SET j=j+1;
    UNTIL j >= i
     END REPEAT;

    END ##
 DELIMITER ;





DROP PROCEDURE IF EXISTS post_trn;
 	DELIMITER  ##
 -- entryType=DEBIT OR CREDIT
 -- data=amount,trn_ref,trn_type,supported_currencies_id,narration,created_by,first_approved,second_approved,debit_account,credit_account,batch_code,trn_family_code
   CREATE PROCEDURE  post_trn (IN entryType VARCHAR(45),IN data JSON) BEGIN

DECLARE actualAmount DOUBLE;

  CALL postingDate(@postingDate); /* The posting time stamp should be as flexible as possible though changing posting timestamp should never be put back below the date last posted to; chaging posting date to an earlier date should require approval */


  CALL theAccountDetails(JSON_UNQUOTE(JSON_EXTRACT(data, '$.account_name')),@accountType,@cat2); -- Recover the account type from the account created store  which could either be Control,Item,ControlItem. This should guide on how transactions should be posted.

    SELECT dir.the_interest_rate INTO @rate from daily_interest_rate dir
  INNER JOIN supported_currencies sc ON sc.supported_currencies_id=dir.fk_supported_currencies_id_daily_interest_rate WHERE (sc.supported_currencies_id=JSON_UNQUOTE(JSON_EXTRACT(data, '$.supported_currencies_id')) AND (DATE_FORMAT(DATE(dir.`posting_date`),'%d/%m/%Y')=DATE_FORMAT(DATE(@postingDate),'%d/%m/%Y');

  SET actualAmount=@rate*JSON_UNQUOTE(JSON_EXTRACT(data, '$.amount'));

  -- For each transaction, a conversion from the normal rate to the default currency amount will be done. Each transaction unit will carry the supported_currencies_id which will be used to retrive the interest rate for the day

 SET @sql_text1 = concat(CAST("SELECT balance INTO @balance_day FROM balance_per_day WHERE   `account_name`=" AS CHAR CHARACTER SET utf8),JSON_UNQUOTE(JSON_EXTRACT(data, '$.dr_account')),CAST(" AND `post_date`<=" AS CHAR CHARACTER SET utf8),CAST("'" AS CHAR CHARACTER SET utf8),@postingDate,CAST("'" AS CHAR CHARACTER SET utf8),CAST(" ORDER BY `balances_per_day_id` DESC Limit 1" AS CHAR CHARACTER SET utf8));

  PREPARE stmt1 FROM @sql_text1;EXECUTE stmt1;DROP PREPARE stmt1;


   SET @sql_text1 = concat(CAST("SELECT balance INTO @balance_account FROM balance_per_account WHERE   `account_name`=" AS CHAR CHARACTER SET utf8),JSON_UNQUOTE(JSON_EXTRACT(data, '$.dr_account')),CAST(" AND `post_date`<=" AS CHAR CHARACTER SET utf8),CAST("'" AS CHAR CHARACTER SET utf8),@postingDate,CAST("'" AS CHAR CHARACTER SET utf8),CAST(" ORDER BY `balance_per_account_id` DESC Limit 1" AS CHAR CHARACTER SET utf8));

  PREPARE stmt1 FROM @sql_text1;EXECUTE stmt1;DROP PREPARE stmt1;



  IF actualAmount>0 THEN


      IF entryType='DEBIT' THEN


  IF @cat2='Expenses' THEN

      IF @accountType='Item' THEN
-- If the account type is Item, then the account balance of the account and the account balance of the control must be adjusted
        CALL debitAssetExpense(actualAmount,@accountBalanceDr,@newBalanceDr);

   CALL  updateLedgersBalances
    (accountNumber,@accountNamenDr,narration,txnTyp, BatchNumber,amount,@newBalanceDr, UserId);
     
     
     END IF;

     
 IF @accountType='ControlItem' THEN

        CALL debitAssetExpense(amount,@accountBalanceDr,@newBalanceDr);

   CALL  updateLedgersBalances
    (accountNumber,@accountNamenDr,narration,txnTyp, BatchNumber,amount,@newBalanceDr, UserId);
     
     
     END IF;



       END IF;
        

       IF @cat2='Assets' THEN

       CALL debitAssetExpense(JSON_UNQUOTE(JSON_EXTRACT(data, '$.amount')),@accountBalanceDr,@newBalanceDr); 

       CALL  updateLedgersBalances(data,@newBalanceDr);

       END IF;

      
          IF @cat2='Liabilities' THEN
         CALL debitLiabilityEquityRevenue(amount,@accountBalanceDr,@newBalanceDr);
CALL  updateLedgersBalances (accountNumber, @accountNamenDr,narration,txnTyp, BatchNumber,amount,@newBalanceDr, UserId);

       END IF;

         IF @cat2='Revenue' THEN
        CALL debitLiabilityEquityRevenue(amount,@accountBalanceDr,@newBalanceDr);
CALL  updateLedgersBalances (accountNumber,@accountNamenDr,narration,txnTyp, BatchNumber,amount,@newBalanceDr, UserId);

       END IF;

         IF @cat2='Equity' THEN

        CALL debitLiabilityEquityRevenue(amount,@accountBalanceDr,@newBalanceDr);
CALL  updateLedgersBalances (accountNumber, @accountNamenDr,narration,txnTyp, BatchNumber,amount,@newBalanceDr, UserId);


       END IF;

      END IF;

       



       IF txnTyp='CREDIT' THEN

      SET @sql_text4 = concat(CAST("SELECT AccountName  FROM `accountstemplate` WHERE AccountNumber=" AS CHAR CHARACTER SET utf8),accountNumber,CAST(" INTO @accountNamenCr" AS CHAR CHARACTER SET utf8));
 
 SELECT @sql_text4,@postingDate;
  PREPARE stmt4 FROM @sql_text4;
  EXECUTE stmt4;
DROP PREPARE stmt4;



 SET @sql_text1 = concat(CAST("SELECT Balance INTO @accountBalanceCr FROM balancesdb WHERE   accountNumber=" AS CHAR CHARACTER SET utf8),accountNumber,CAST(" AND postDate<=" AS CHAR CHARACTER SET utf8),CAST("'" AS CHAR CHARACTER SET utf8),@postingDate,CAST("'" AS CHAR CHARACTER SET utf8),CAST(" ORDER BY TxnId DESC Limit 1" AS CHAR CHARACTER SET utf8));
 
 SELECT @sql_text1,@postingDate;
  PREPARE stmt1 FROM @sql_text1;
  EXECUTE stmt1;
DROP PREPARE stmt1;

  SELECT @accountNamenCr,@accountBalanceCr;


        
         IF accountType='ASSET' THEN
CALL creditAssetExpense(amount,@accountBalanceCr,@newBalanceCr);
CALL  updateLedgersBalancesCREDIT (accountNumber, @accountNamenCr,narration,txnTyp, BatchNumber,amount,@newBalanceCr, UserId);

       END IF;

        IF accountType='EXPENSE' THEN
        CALL creditAssetExpense(amount,@accountBalanceCr,@newBalanceCr);
CALL  updateLedgersBalancesCREDIT (accountNumber, @accountNamenCr,narration,txnTyp, BatchNumber,amount,@newBalanceCr, UserId);

       END IF;
        
          IF accountType='LIABILITY' THEN
         CALL creditLiabilityEquityRevenue(amount,@accountBalanceCr,@newBalanceCr);
         CALL  updateLedgersBalancesCREDIT (accountNumber, @accountNamenCr,narration,txnTyp, BatchNumber,amount,@newBalanceCr, UserId);
       END IF;

         IF accountType='REVENUE' THEN
CALL creditLiabilityEquityRevenue(amount,@accountBalanceCr,@newBalanceCr);
CALL  updateLedgersBalancesCREDIT (accountNumber, @accountNamenCr,narration,txnTyp, BatchNumber,amount,@newBalanceCr, UserId);
       END IF;

         IF accountType='EQUITY' THEN
CALL creditLiabilityEquityRevenue(amount,@accountBalanceCr,@newBalanceCr);
CALL  updateLedgersBalancesCREDIT (accountNumber, @accountNamenCr,narration,txnTyp, BatchNumber,amount,@newBalanceCr, UserId);
       END IF;



      END IF;

       END IF;

SET @accountBalanceCr=0.0;
SET @newBalanceCr=0.0;

SET @accountBalanceDr=0.0;
SET @newBalanceDr=0.0;
     END ##
 DELIMITER ;




 DROP PROCEDURE IF EXISTS debitAssetExpense;
 	DELIMITER  ##
   CREATE PROCEDURE  debitAssetExpense (IN amount DOUBLE,IN originalBalance DOUBLE,OUT computedBalance DOUBLE) BEGIN
  SET computedBalance=originalBalance+amount;
     END ##
 DELIMITER ;


  DROP PROCEDURE IF EXISTS debitLiabilityEquityRevenue;
 	DELIMITER  ##
   CREATE PROCEDURE  debitLiabilityEquityRevenue (IN amount DOUBLE,IN originalBalance DOUBLE,OUT computedBalance DOUBLE) BEGIN
  SET computedBalance=originalBalance-amount;
     END ##
 DELIMITER ;

 DROP PROCEDURE IF EXISTS creditAssetExpense;
 	DELIMITER  ##
   CREATE PROCEDURE  creditAssetExpense (IN amount DOUBLE,IN originalBalance DOUBLE,OUT computedBalance DOUBLE) BEGIN
  SET computedBalance=originalBalance-amount;
     END ##
 DELIMITER ;

  DROP PROCEDURE IF EXISTS creditLiabilityEquityRevenue;
 	DELIMITER  ##
   CREATE PROCEDURE  creditLiabilityEquityRevenue (IN amount DOUBLE,IN originalBalance DOUBLE,OUT computedBalance DOUBLE) BEGIN
  SET computedBalance=originalBalance+amount;
     END ##
 DELIMITER ;






 DROP PROCEDURE IF EXISTS updateLedgersBalancesDebit;
 
 	DELIMITER  ##

   CREATE PROCEDURE  updateLedgersBalancesDebit (IN data JSON,IN newBalance DOUBLE) BEGIN
   
    CALL postingDate(@postingDate);

   /* SELECT PostingmDate INTO originalDate FROM  DatesForSystem;*/

    SELECT `balances_per_day_id`,DATE_FORMAT(DATE(`post_date`),"%d/%m/%Y") INTO @trnId, @previousPostDate FROM balance_per_day WHERE `account_name`=JSON_UNQUOTE(JSON_EXTRACT(data, '$.account_name')) AND DATE_FORMAT(DATE(`post_date`),"%d/%m/%Y")<=@postingDate ORDER BY balances_per_day_id DESC Limit 1;
   
     CALL accountExists(JSON_UNQUOTE(JSON_EXTRACT(data, '$.account_name')),@theAccountExists);

    IF @theAccountExists>0 THEN

  
  IF JSON_UNQUOTE(JSON_EXTRACT(data, '$.amount'))>0 THEN

  INSERT INTO general_ledger VALUES(
    null,
    JSON_UNQUOTE(JSON_EXTRACT(data, '$.trn_ref')),
    CURDATE(),
    @postingDate,
    JSON_EXTRACT(data, '$.narration')),
    JSON_EXTRACT(data, '$.narration')),
   );
  
  IF @postingDate>@previousPostDate THEN

  INSERT INTO balancesdb VALUES(null,@postingDate,CURDATE(),accountNumberX,accountName,newBalance,userId,'NA','NA','NA');
  
  END IF;

   
    IF @postingDate<=@previousPostDate THEN


UPDATE balancesdb SET Balance=newBalance WHERE TxnId=@trnId;


  END IF;


  END IF;
  
  END IF;

     END ##
 DELIMITER ;



DROP PROCEDURE IF EXISTS accountExists;
DELIMITER  ##
CREATE PROCEDURE  accountExists (IN theAccount VARCHAR(30),OUT accountNumbers INTEGER ) BEGIN

SELECT COUNT(accounts_created_store_id) AS accounts  FROM accounts_created_store WHERE account_name=theAccount INTO accountNumbers;

END ##
DELIMITER ;

 
 DROP PROCEDURE IF EXISTS salesTxnProcessing;
 
 	DELIMITER  ##
	

   CREATE PROCEDURE  salesTxnProcessing (IN tableId VARCHAR(30),IN stockIdx VARCHAR(100),IN productName VARCHAR(100),IN NoOfItems VARCHAR(80),IN RetailPrice VARCHAR(100),IN batchDode VARCHAR(100),IN userId VARCHAR(100)) BEGIN

  SELECT tableId,stockIdx,productName,NoOfItems,RetailPrice,batchDode,userId;

   SELECT DrAccountName INTO @drAccountNameStock FROM TxnsProcess WHERE TxnName='stockSales'; 

-- SELECT @drAccountNameStock ;

    SELECT DrAccountName INTO @drAccountNameRevenue FROM TxnsProcess WHERE TxnName='revenueSales'; 

-- SELECT @drAccountNameRevenue;
  
  
   SELECT ItemsRemaining,ItemsSold,RetailCostPrice,RetailSellingPrice INTO @numberOfItem,@SoldItems,@costP,@actualSell FROM stock WHERE StockId=stockIdx;
  
  
  SELECT  @numberOfItem,@SoldItems,@costP,@actualSell;

   SET @WholeSale=@costP*NoOfItems;

   SET @ActualWhole=@actualSell*NoOfItems;
   
   SET @MarkUp=RetailPrice-@WholeSale;

   SET @PercentMark=((@MarkUp/@WholeSale)*100);

  SET @Discount=@ActualWhole-RetailPrice;

  SET @remainingStock=@numberOfItem-NoOfItems;

  SET @itemsSold=@SoldItems+NoOfItems;

  SET @PercentDiscount=((@Discount/@ActualWhole)*100);


   CALL  doubleEntryManager (tableId,'COMMON','stockSales',@drAccountNameStock,@WholeSale,productName,batchDode,userId);

  CALL  doubleEntryManager (tableId,'COMMON','revenueSales',@drAccountNameRevenue,@MarkUp,productName,batchDode,userId);

   CALL postingDate(@postingDate);

    CALL SystemDate(@dateNow);
    
 UPDATE stock SET ItemsSold=@itemsSold,ItemsRemaining=@remainingStock WHERE StockId=stockIdx;
SELECT stockIdx;

    INSERT INTO salesTracker VALUES(null,@dateNow,@dateNow,@postingDate,stockIdx,productName,NoOfItems,RetailPrice,userId,'NA','NA','NA');
 
       INSERT INTO SalesLedger VALUES(null,@dateNow,@dateNow,@postingDate,stockIdx,productName,NoOfItems,RetailPrice,@MarkUp,@PercentMark,userId,'NA','NA','NA');

      

       IF @Discount<0 THEN

        INSERT INTO dicountedSales VALUES(null,@dateNow,@dateNow,@postingDate,stockIdx,productName,
        @ActualWhole,RetailPrice,@Discount,@PercentDiscount,userId,'NA','NA','NA');

       END IF;

       
       IF @Discount>0 THEN

         INSERT INTO hickedSales VALUES(null,@dateNow,@dateNow,@postingDate,stockIdx,productName,

         @ActualWhole,RetailPrice,@Discount,@PercentDiscount,userId,'NA','NA','NA');


       END IF;
SET @ActualWhole=0.0;
SET @Discount=0.0;
SET @PercentDiscount=0.0;
SET @MarkUp=0.0;
SET @PercentMark=0.0;
SET @itemsSold=0.0;
SET @costP=0.0;
SET @actualSell=0.0;

    END ##
 DELIMITER ;
 
 
 
 






DROP PROCEDURE IF EXISTS computeBalancesStatement;

DELIMITER  ##

CREATE PROCEDURE computeBalancesStatement(IN accountNamexx VARCHAR(100), IN startDatexx DATE,IN endDatexx DATE) READS SQL DATA BEGIN


CALL accountNumberByAccountName(accountNamexx,@accountN);
CALL previousAccountBalance(@accountN,startDatexx, @theRunBalTwo);
CALL generalLedgerStatement(@accountN, @theRunBalTwo, startDatexx,endDatexx);

END  ##

DELIMITER ;





DROP PROCEDURE IF EXISTS accountNumberByAccountName;

DELIMITER  ##

CREATE PROCEDURE accountNumberByAccountName(IN accountNamexxx VARCHAR(100),OUT accountNumberXX VARCHAR(100)) READS SQL DATA BEGIN


 SELECT AccountNumber INTO accountNumberXX FROM accountstemplate WHERE AccountName=accountNamexxx;
 

END  ##

DELIMITER ;


    
	DROP PROCEDURE IF EXISTS previousAccountBalance;

DELIMITER  ##

CREATE PROCEDURE previousAccountBalance(IN accountNumberV VARCHAR(50),IN fistPostDate DATE, OUT theRunBal DOUBLE) READS SQL DATA BEGIN

 SELECT Balance INTO theRunBal FROM balancesdb WHERE postDate<=fistPostDate AND accountNumber=accountNumberV ORDER BY TxnId DESC Limit 1;
 
 IF theRunBal  IS NULL THEN
 
 SET theRunBal=0.0;
 
 END IF;

END  ##

DELIMITER ;



	
DROP PROCEDURE IF EXISTS generalLedgerStatement;

DELIMITER  ##

CREATE PROCEDURE generalLedgerStatement(IN accountNumbers VARCHAR(100), IN prevBal VARCHAR(100), IN startDate DATE,IN endDate DATE) READS SQL DATA BEGIN

 DECLARE txnIdS VARCHAR(30);

 DECLARE l_done INTEGER DEFAULT 0;DECLARE Ids INTEGER DEFAULT 0;
 
 DECLARE batch VARCHAR(30); DECLARE pdate DATE; DECLARE narr VARCHAR(200); DECLARE debit DOUBLE DEFAULT 0.0; DECLARE credit DOUBLE DEFAULT 0.0; DECLARE runningBalance DOUBLE DEFAULT 8000000.0; DECLARE userId VARCHAR(30);

DECLARE forSelectingTxnIds CURSOR FOR SELECT TxnId  FROM generalledger WHERE ((PostDate>=startDate AND PostDate<=endDate) AND AccountNumber=accountNumbers);
 
 DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;
 
/*  SELECT accountName,startDate,endDate; */
 


/*  
IF @runningBalance IS NULL THEN */
/* SET @runningBalance=0.0; */
/* END IF; */

/* SELECT @runningBalance; */

DROP TABLE IF EXISTS temp_ledgerstatement;

CREATE TEMPORARY  TABLE temp_ledgerstatement(id INTEGER,temp_BatchNumber VARCHAR(30),temp_PostDate DATE,temp_Narration VARCHAR(200),temp_DEDITAmount DOUBLE,temp_CREDITAmount DOUBLE,temp_runBalance DOUBLE);






 OPEN forSelectingTxnIds;



accounts_loop: LOOP 



 FETCH forSelectingTxnIds into txnIdS;
 
 
 IF l_done=1 THEN

LEAVE accounts_loop;

 END IF;
 
 
 
 SELECT BatchNumber,PostDate,Narration,DEDITAmount,CREDITAmount  INTO batch,pdate,narr,debit,credit FROM generalledger WHERE TxnId=txnIdS;
 
 SET Ids=Ids+1;
   
   IF accountNumbers LIKE '1%' THEN
   
 SET prevBal=prevBal+debit-credit;
 
ELSEIF accountNumbers LIKE '2%' THEN
 SET prevBal=prevBal+debit-credit;
ELSEIF accountNumbers LIKE '3%' THEN
 SET prevBal=prevBal+credit-debit;
ELSEIF accountNumbers LIKE '4%' THEN
 SET prevBal=prevBal+credit-debit;
ELSEIF accountNumbers LIKE '5%' THEN
 SET prevBal=prevBal+credit-debit;
END IF;

 INSERT INTO temp_ledgerstatement VALUES(Ids,batch,pdate,narr,debit,credit,prevBal);


 



SET l_done=0;

 END LOOP accounts_loop;

 CLOSE forSelectingTxnIds;
 


SELECT Id,temp_BatchNumber,temp_PostDate,temp_Narration,temp_DEDITAmount ,temp_CREDITAmount ,temp_runBalance  FROM temp_ledgerstatement;


END  ##

DELIMITER ;

CALL computeBalancesStatement('Cash At Hand','2019-02-01','2019-05-18');

-- DROP PROCEDURE IF EXISTS test;
-- DELIMITER ##
-- CREATE PROCEDURE test(OUT `VAR` VARCHAR(20)) BEGIN

-- DECLARE `var1`,`var2` INT;
-- DECLARE `VAR3` VARCHAR(10);
-- SELECT `SyIdA1` FROM `systemids` INTO `var1`;
-- SELECT `SyIdA2` FROM `systemids` INTO `var2`;
-- SELECT `OtherThree` FROM `systemids` INTO `var3`;
-- SELECT `SyIdA9` FROM `systemids` INTO @var4;
-- SET `VAR`=`var1`+`var2`+@var4;
-- SELECT `VAR`;

-- END ##
-- DELIMITER ;

DROP PROCEDURE IF EXISTS tableTest;
DELIMITER ##
CREATE PROCEDURE tableTest(IN data JSON) BEGIN
-- DECLARE i,j INT;
-- DECLARE exJData JSON;

-- SET i= JSON_LENGTH(JSON_EXTRACT(data,"$.users"));

-- SET exJData=JSON_EXTRACT(data,"$.users");

-- SELECT exJData;

-- SET j=0;
-- loop1: REPEAT


-- SET @sqlE=CONCAT(CAST("SET @exJData1=" AS CHAR CHARACTER SET utf8),CAST("JSON_EXTRACT(" AS CHAR CHARACTER SET utf8),CAST("'" AS CHAR CHARACTER SET utf8),exJData,CAST("'" AS CHAR CHARACTER SET utf8),CAST(",'$[" AS CHAR CHARACTER SET utf8),j,CAST("]')" AS CHAR CHARACTER SET utf8));

-- PREPARE smt FROM @sqlE;  EXECUTE smt; DROP PREPARE smt;

-- -- SELECT  @exJData1;

-- SELECT JSON_EXTRACT(@exJData1,"$.name"),JSON_EXTRACT(@exJData1,"$.email"),JSON_EXTRACT(@exJData1,"$.dob");


--     SET j=j+1;
   
-- UNTIL j >= i
-- END REPEAT;

END ##
DELIMITER ;






/* BATCH NUMBER FUNCTION */
--  SyIdA12 is the batchNumber Generator
DROP FUNCTION IF EXISTS batchNumberFunc;
DELIMITER ##
CREATE FUNCTION batchNumberFunc() 
RETURNS VARCHAR(60)
DETERMINISTIC
BEGIN
DECLARE theBacth VARCHAR(40);
SELECT SyIdA12 INTO theBacth FROM systemids;

SET theBacth=theBacth+1;

UPDATE systemids SET SyIdA12=theBacth;
RETURN theBacth;
END ##
DELIMITER ;



--  SyIdA1 is the trnFamily Generator

DROP PROCEDURE IF EXISTS trnFamilyValue;

DELIMITER ##

CREATE PROCEDURE trnFamilyValue(OUT trnFamilyGen INT) BEGIN

SELECT SyIdA1 INTO @existingTrnFamily FROM systemids;

SET trnFamilyGen=@existingTrnFamily+1;

UPDATE systemids SET SyIdA1=trnFamilyGen;

END ##

DELIMITER ;


--  SyIdA1 is the trnFamily Generator

DROP PROCEDURE IF EXISTS theAccountDetails;

DELIMITER ##

CREATE PROCEDURE theAccountDetails(IN theAccount VARCHAR(45),OUT theAccountType INT,OUT cat2 VARCHAR(45)) BEGIN

SELECT `account_type`,`account_cat_2` INTO theAccountType,cat2 FROM `accounts_created_store` WHERE `account_name`=theAccount;

END ##

DELIMITER ;


-- /* EDAD BOX ID FUNCTION */
-- DROP FUNCTION IF EXISTS retriveEdadBoxId;
-- DELIMITER ##

-- CREATE FUNCTION retriveEdadBoxId(userId INT) 
-- RETURNS INTEGER
-- DETERMINISTIC
-- BEGIN
-- DECLARE theEdadId INTEGER;
-- SELECT edad_box_id INTO theEdadId FROM edad_box WHERE fk_user_id_edad_box=userId;
-- RETURN theEdadId;
-- END ##
-- DELIMITER ;



-- /* EDAD BOX ID FUNCTION */
-- DROP FUNCTION IF EXISTS retriveEdadBoxId;
-- DELIMITER ##

-- CREATE FUNCTION retriveEdadBoxId(userId INT) 
-- RETURNS INTEGER
-- DETERMINISTIC
-- BEGIN
-- DECLARE theEdadId INTEGER;
-- SELECT edad_box_id INTO theEdadId FROM edad_box WHERE fk_user_id_edad_box=userId;
-- RETURN theEdadId;
-- END ##
-- DELIMITER ;



--  SyIdA1 is the trnFamily Generator

DROP PROCEDURE IF EXISTS txnHistory;

DELIMITER ##

CREATE PROCEDURE txnHistory(IN useId VARCHAR(45)) BEGIN

DECLARE DATE,TIMET,TYPE,NUMBER_PLATE VARCHAR(60);

DECLARE DEBIT,CREDIT,OLDRUNNING_BALANCE,NEWRUNNING_BALANCE DOUBLE;

DECLARE l_done,edadBoxId INT;

DECLARE forSelectingGeneralLedgerTxns CURSOR FOR SELECT bgl.box_general_ledger_id  FROM box_general_ledger bgl INNER JOIN edad_box eb ON  eb.edad_box_id=bgl.fk_edad_box_id_box_general_ledger INNER JOIN token_approval ta ON ta.fk_box_general_ledger_id_token_approval=bgl.box_general_ledger_id WHERE eb.fk_user_id_edad_box=useId AND  ta.token_approval_status=2;

DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;


DROP TABLE IF EXISTS temp_ledger;

CREATE TEMPORARY  TABLE temp_ledger(id INT,trn_date VARCHAR(60),trn_time TIME,trn_narration VARCHAR(60),debit_amount DOUBLE,credit_amount DOUBLE,running_balance DOUBLE);

DROP TABLE IF EXISTS temp_dledger1;

CREATE TEMPORARY  TABLE temp_dledger1(id INT,trn_date VARCHAR(60),trn_time TIME,trn_narration VARCHAR(60),debit_amount DOUBLE,credit_amount DOUBLE,running_balance DOUBLE);

--  number_plate
OPEN forSelectingGeneralLedgerTxns;

 

IF ISNULL(OLDRUNNING_BALANCE) THEN

SET OLDRUNNING_BALANCE=0;

END IF;

SET OLDRUNNING_BALANCE=0;
SET CREDIT=0;
SET DEBIT=0;
SET @TOTAL_DEBIT=0;

SET @TOTAL_CREDIT=0;

SET @ID=0;

accounts_loop: LOOP 
FETCH forSelectingGeneralLedgerTxns into edadBoxId;


IF l_done=1 THEN
LEAVE accounts_loop;
END IF;
 

--  SELECT edadBoxId;

 SELECT DATE_FORMAT(DATE(bgl.txn_date),"%d/%m/%Y"),TIME(bgl.txn_date),bgl.trn_narration,bgl.tokens_debit,bgl.tokens_credit INTO DATE,TIMET,TYPE,DEBIT,CREDIT FROM box_general_ledger bgl INNER JOIN token_approval ta ON bgl.box_general_ledger_id=ta.fk_box_general_ledger_id_token_approval  WHERE bgl.box_general_ledger_id=edadBoxId AND ta.token_approval_status=2;


IF ISNULL(DEBIT) THEN

SET DEBIT=0;

END IF;

IF ISNULL(CREDIT) THEN

SET CREDIT=0;

END IF;


SET OLDRUNNING_BALANCE=OLDRUNNING_BALANCE+CREDIT-DEBIT;
-- SELECT OLDRUNNING_BALANCE,CREDIT,DEBIT;
SET @TOTAL_DEBIT=@TOTAL_DEBIT+DEBIT;

SET @TOTAL_CREDIT=@TOTAL_CREDIT+CREDIT;


SET @ID=@ID+1;

IF DEBIT=0 THEN

SET DEBIT=NULL;

END IF;

IF CREDIT=0 THEN

SET CREDIT=NULL;

END IF;

 IF OLDRUNNING_BALANCE>0 THEN  
INSERT INTO temp_ledger VALUES(@ID,DATE,TIMET,TYPE,DEBIT,CREDIT,OLDRUNNING_BALANCE);
END IF;

SET l_done=0;
END LOOP accounts_loop;
CLOSE forSelectingGeneralLedgerTxns;

SET @NET_BALANCE=@TOTAL_CREDIT-@TOTAL_DEBIT;




   INSERT INTO  temp_dledger1( 
  `id`,
  `trn_date` ,
  `trn_time` ,
  `trn_narration`,
  `debit_amount` ,
  `credit_amount` ,
  `running_balance`
  ) SELECT 
   `id`,
  `trn_date` ,
  `trn_time` ,
  `trn_narration`,
  `debit_amount`,
  `credit_amount` ,
  `running_balance`  FROM temp_ledger ORDER BY id DESC LIMIT 5;
  
INSERT INTO temp_dledger1 VALUES(NULL,'TOTAL/NET BALANCE',NULL,NULL,@TOTAL_DEBIT,@TOTAL_CREDIT,@NET_BALANCE);

SELECT * FROM temp_dledger1 ORDER BY id ASC;



END ##

DELIMITER ;




/* CURRENT SHIFT FUNCTION */
DROP FUNCTION IF EXISTS boxBalance;

DELIMITER ##

CREATE FUNCTION boxBalance(userId INT) 
RETURNS DOUBLE
DETERMINISTIC

BEGIN

DECLARE BOX_BALANCE DOUBLE;


 SELECT bb.individual_box_balance INTO BOX_BALANCE FROM box_balance_account bb INNER JOIN  box_general_ledger bgl ON bb. fk_edad_general_balances_box_balance_account=bgl.box_general_ledger_id INNER JOIN edad_box eb ON eb.edad_box_id=bgl. fk_edad_box_id_box_general_ledger WHERE eb.fk_user_id_edad_box=userId AND bb.complete_status=1  ORDER BY bb.box_balance_account_id DESC LIMIT 1;

RETURN BOX_BALANCE;

END ##
DELIMITER ;



--  SyIdA1 is the trnFamily Generator

DROP PROCEDURE IF EXISTS saversBalance;
DELIMITER ##
CREATE PROCEDURE saversBalance(IN userId VARCHAR(45)) BEGIN

DECLARE BOX_BALANCE DOUBLE;

 SELECT ROUND(bb.individual_box_balance,4) INTO BOX_BALANCE FROM box_balance_account bb INNER JOIN  box_general_ledger bgl ON bb. fk_edad_general_balances_box_balance_account=bgl.box_general_ledger_id INNER JOIN edad_box eb ON eb.edad_box_id=bgl.fk_edad_box_id_box_general_ledger WHERE eb.fk_user_id_edad_box=userId  ORDER BY bb.box_balance_account_id DESC LIMIT 1;

SELECT BOX_BALANCE;

END ##

DELIMITER ;









/* TEST WHETHER COMPANY ADDED */
DROP PROCEDURE IF EXISTS runningBalanceOfTokens;
DELIMITER ##

CREATE PROCEDURE   runningBalanceOfTokens() 
BEGIN

SELECT edad_number_of_tokens AS balance FROM edad_constants;

END ##

DELIMITER ;




DROP EVENT IF EXISTS `change_daily_balances`;
CREATE  EVENT `change_daily_balances` ON SCHEDULE EVERY 24 HOUR STARTS CURRENT_TIMESTAMP() ON COMPLETION NOT PRESERVE ENABLE DO CALL changeBalance(CURRENT_TIMESTAMP());

DROP EVENT IF EXISTS `manage_interest`;
CREATE  EVENT `manage_interest` ON SCHEDULE EVERY 20 MINUTE STARTS CURRENT_TIMESTAMP() ON COMPLETION NOT PRESERVE ENABLE DO CALL manage_interest(CURRENT_TIMESTAMP());



/* TEST WHETHER COMPANY ADDED */

DROP PROCEDURE IF EXISTS `manage_interest`;
DELIMITER ##

CREATE  PROCEDURE `manage_interest`(IN timeStatmp TIMESTAMP)
BEGIN

DECLARE boxId,interestDays,oldAccruedDays,newAccruedDays,oldWithdrawDays,newWithdrawDays,interestExists,boxIdX,boxIdXY,AccruedId INT DEFAULT 0;

DECLARE newexpirelyTime ,expirelyTime TIMESTAMP;

DECLARE interestRateUsed, theActualBalance,interestComputed,oldInterestBal,newInterestBal,oldInterestAdded,newInterestAdded,NEWRUNNING_BALANCE,OLDRUNNING_BALANCE DOUBLE DEFAULT 0;


DECLARE l_done INTEGER DEFAULT 0;

DECLARE selectTrnIds CURSOR FOR SELECT b.fk_user_id_edad_box   FROM edad_box b INNER JOIN interest_accrue_complete iac ON iac.fk_fk_user_id_edad_box_interest_accrue_complete=b.fk_user_id_edad_box WHERE (b.edad_box_type_sub_category='individual_box_saving' OR b.edad_box_type_sub_category='individual_box_vending') AND iac.interest_accrue_status=1;

 
DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;

OPEN selectTrnIds;


LedgerIds_loop: LOOP

 FETCH selectTrnIds into boxId;

SELECT boxId;
 
SELECT edad_box_type_sub_category_id INTO boxIdX FROM edad_box WHERE fk_user_id_edad_box=boxId;
-- SELECT boxIdX;

SELECT box_balance_account_id INTO boxIdXY FROM box_balance_account WHERE individual_box_sub_category_box=boxIdX ORDER BY box_balance_account_id DESC LIMIT 1;

-- SELECT boxIdXY;

 IF l_done=1 THEN
LEAVE LedgerIds_loop;
 END IF;


SELECT  boxBalance(boxId) INTO theActualBalance; 

IF ISNULL(theActualBalance) THEN

SET theActualBalance=0;

END IF;

-- SELECT theActualBalance;

IF theActualBalance>0 THEN 

SELECT edad_interestRate_payable,edad_interestRate_days INTO  interestRateUsed,interestDays FROM edad_constants;


SET interestComputed=((theActualBalance*interestRateUsed)/(interestDays*100)); 
-- SELECT interestComputed;
SELECT COUNT(interest_accrued_id) INTO interestExists FROM interest_accrued WHERE fk_user_id_interest_accrued=boxId;
-- SELECT interestExists;
 IF interestExists>0 THEN
-- SELECT boxId;
SELECT interest_balance,interest_added,number_of_days_accrued,number_of_days_to_withdraw,interest_expirely_time,interest_accrued_id INTO oldInterestBal,oldInterestAdded,oldAccruedDays,oldWithdrawDays,expirelyTime,AccruedId FROM interest_accrued WHERE fk_user_id_interest_accrued=boxId; 

-- SELECT oldInterestBal,oldInterestAdded,oldAccruedDays,expirelyTime;

-- SELECT timeStatmp;

IF expirelyTime<=timeStatmp THEN

SET newInterestBal=oldInterestBal+interestComputed;

-- SELECT newInterestBal;
SET newInterestAdded=oldInterestAdded+interestComputed;
-- SELECT newInterestAdded;
SET newAccruedDays=oldAccruedDays+1;
-- SELECT newAccruedDays;

SET newWithdrawDays=oldWithdrawDays+1;

SET newexpirelyTime=expirelyTime + INTERVAL 24 HOUR;

-- SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;
  
-- SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE-interestComputed;

-- UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;

CALL reduceTokensConstant(interestComputed);

UPDATE interest_accrued SET token_balance=theActualBalance,interest_added=ROUND(newInterestAdded,4),interest_balance=ROUND(newInterestBal,4),number_of_days_accrued=newAccruedDays,number_of_days_to_withdraw=newWithdrawDays, update_at=CURRENT_TIMESTAMP,interest_expirely_time=newexpirelyTime WHERE fk_user_id_interest_accrued=boxId;

INSERT INTO interest_accrued_details VALUES(NULL,theActualBalance,0,ROUND(newInterestAdded,4),ROUND(newInterestBal,4),newexpirelyTime,newAccruedDays,AccruedId,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);



IF newAccruedDays>=interestDays THEN

UPDATE box_balance_account SET  complete_status=2 WHERE individual_box_sub_category_box= boxIdX;

UPDATE interest_accrue_complete SET interest_accrue_status=2 WHERE fk_fk_user_id_edad_box_interest_accrue_complete=boxId;

END IF;

END IF;


ELSE

SET newexpirelyTime=CURRENT_TIMESTAMP + INTERVAL 24 HOUR;

INSERT INTO interest_accrued VALUES(NULL,0,0,0,0,CURRENT_TIMESTAMP,newexpirelyTime,0,0,boxIdXY,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

END IF;

END IF;

SET l_done=0;

END LOOP LedgerIds_loop;

CLOSE selectTrnIds;

END ##

DELIMITER ;




--  SyIdA1 is the trnFamily Generator

DROP PROCEDURE IF EXISTS saversInterest;
DELIMITER ##
CREATE PROCEDURE saversInterest(IN userId VARCHAR(45)) BEGIN

DECLARE INTEREST_BAL DOUBLE;

 SELECT interest_balance INTO INTEREST_BAL FROM interest_accrued WHERE fk_user_id_interest_accrued=userId;

IF ISNULL(INTEREST_BAL) THEN 
SET INTEREST_BAL=0;
END IF;

SELECT INTEREST_BAL AS interest;

END ##

DELIMITER ;


-- CALL smartSaverBuyTokens('{"users_savers_id":100000048,"users_savers_contact":"0782231039","users_role_savers":1000,"amount_due":268000,"number_of_tokens":"45"}');

-- select u.employee_id,u.password,r.display_name,b.name,u.status from users u INNER JOIN users_roles ur ON u.id=ur.user_id INNER JOIN roles r ON ur.role_id=r.id INNER JOIN  users_branches ub ON ub.user_id=u.id INNER JOIN branches b ON ub.branch_id=b.id;





DROP PROCEDURE IF EXISTS smartAgentBuyTokens;

DELIMITER ##

CREATE PROCEDURE smartAgentBuyTokens(IN SData JSON) BEGIN

DECLARE perDtrnId,theEdadId,theEdadBoxAccount,last_insert_gen INTEGER;

DECLARE  boxaccountBalanceOld,boxaccountBalanceNew,boxaccountPerDayBalanceOld,boxaccountPerDayBalanceNew DOUBLE;

DECLARE userName VARCHAR(80);

SELECT edad_box_id,edad_box_type_sub_category_id INTO theEdadId,theEdadBoxAccount FROM edad_box WHERE fk_user_id_edad_box=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_id'));
-- SELECT theEdadId,theEdadBoxAccount;

SELECT cbd.name INTO userName FROM common_bio_data cbd INNER JOIN next_of_kin nk ON nk.next_of_kin_id =cbd.fk_next_of_kin_id_common_bio_data INNER JOIN users u ON u.users_id=nk.fk_users_id_next_of_kin WHERE u.users_id=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_id'));

-- SELECT userName;

INSERT INTO box_general_ledger VALUES(NULL,CURRENT_TIMESTAMP,userName,theEdadBoxAccount,theEdadBoxAccount,NULL,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.number_of_tokens'))*1.1,theEdadId);

SET last_insert_gen=LAST_INSERT_ID();



INSERT INTO `token_approval` VALUES(1,1,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_contact')),last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

SELECT 1 AS completed;

END ##

DELIMITER ;


-- CALL sellTokensAgent('{"user_id":100000076,"user_contact_number":"0782231039","final_contact_number":"0781331616","amount_due":"","tokens_to_sell":"56","user_role_name":"smart_saver","user_role_id":1000}')


-- CALL sellTokensAgent('{"user_id":100000076,"user_contact_number":"0782231039","final_contact_number":"0781331616","amount_due":"","tokens_to_sell":"47","user_role_name":"smart_saver","user_role_id":1000}')

DROP PROCEDURE IF EXISTS sellTokensAgent;

DELIMITER ##

CREATE PROCEDURE sellTokensAgent(IN SData JSON) BEGIN

DECLARE ToUserdId INT;


SELECT  u.users_id INTO ToUserdId FROM users u INNER JOIN user_role ur ON u.fk_user_role_id_users=ur.user_role_id WHERE u.users_contact=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.final_contact_number')) AND ur.user_role_id=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.user_role_id'));
SELECT ToUserdId;
CALL  reduceTokensLedger(JSON_UNQUOTE(JSON_EXTRACT(SData, '$.user_id')),ToUserdId,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.tokens_to_sell')),JSON_UNQUOTE(JSON_EXTRACT(SData, '$.user_contact_number')),JSON_UNQUOTE(JSON_EXTRACT(SData, '$.final_contact_number')),@ledgerIdReduce); 
SELECT @ledgerIdReduce;

CALL approveTokenDetailsGeneralReduce(@ledgerIdReduce);

CALL  increaseTokensLedger(JSON_UNQUOTE(JSON_EXTRACT(SData, '$.user_id')),ToUserdId,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.tokens_to_sell')),JSON_UNQUOTE(JSON_EXTRACT(SData, '$.user_contact_number')),JSON_UNQUOTE(JSON_EXTRACT(SData, '$.final_contact_number')),@ledgerIdIncrease); 
SELECT @ledgerIdIncrease;
CALL approveTokenDetailsGeneralIncrease(@ledgerIdIncrease);

END ##

DELIMITER ;







DROP PROCEDURE IF EXISTS increaseTokensLedger;

DELIMITER ##

CREATE PROCEDURE increaseTokensLedger(IN fromID INT,IN toID INT,IN tokens DOUBLE,IN contactFrom VARCHAR(45),IN contactIn VARCHAR(45),OUT ledgerIdIncrease INT) BEGIN

DECLARE perDtrnId,theEdadIdTo,theEdadIdFrom,theEdadBoxAccountTo,theEdadBoxAccountFrom,last_insert_gen INTEGER;

DECLARE  boxaccountBalanceOld,boxaccountBalanceNew,boxaccountPerDayBalanceOld,boxaccountPerDayBalanceNew DOUBLE;

DECLARE userName VARCHAR(80);

SELECT edad_box_id,edad_box_type_sub_category_id INTO theEdadIdTo,theEdadBoxAccountTo FROM edad_box WHERE fk_user_id_edad_box=toID;

SELECT edad_box_id,edad_box_type_sub_category_id INTO theEdadIdFrom,theEdadBoxAccountFrom FROM edad_box WHERE fk_user_id_edad_box=fromID;


SELECT cbd.name INTO userName FROM common_bio_data cbd INNER JOIN next_of_kin nk ON nk.next_of_kin_id =cbd.fk_next_of_kin_id_common_bio_data INNER JOIN users u ON u.users_id=nk.fk_users_id_next_of_kin WHERE u.users_id=fromID;

-- SELECT userName;

INSERT INTO box_general_ledger VALUES(NULL,CURRENT_TIMESTAMP,userName,theEdadBoxAccountFrom,theEdadBoxAccountTo,NULL,tokens,theEdadIdTo);

SET last_insert_gen=LAST_INSERT_ID();



INSERT INTO `token_approval` VALUES(2,2,contactIn,last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

SET ledgerIdIncrease=last_insert_gen;

END ##

DELIMITER ;



DROP PROCEDURE IF EXISTS reduceTokensLedger;

DELIMITER ##

CREATE PROCEDURE reduceTokensLedger(IN fromID INT,IN toID INT,IN tokens DOUBLE,IN contactFrom VARCHAR(45),IN contactIn VARCHAR(45),OUT ledgerIdReduce INT) BEGIN

DECLARE perDtrnId,theEdadIdTo,theEdadIdFrom,theEdadBoxAccountTo,theEdadBoxAccountFrom,last_insert_gen INTEGER;

DECLARE  boxaccountBalanceOld,boxaccountBalanceNew,boxaccountPerDayBalanceOld,boxaccountPerDayBalanceNew DOUBLE;

DECLARE userName VARCHAR(80);

SELECT edad_box_id,edad_box_type_sub_category_id INTO theEdadIdTo,theEdadBoxAccountTo FROM edad_box WHERE fk_user_id_edad_box=toID;
SELECT theEdadIdTo,theEdadBoxAccountTo;
SELECT edad_box_id,edad_box_type_sub_category_id INTO theEdadIdFrom,theEdadBoxAccountFrom FROM edad_box WHERE fk_user_id_edad_box=fromID;

SELECT theEdadIdFrom,theEdadBoxAccountFrom;

SELECT cbd.name INTO userName FROM common_bio_data cbd INNER JOIN next_of_kin nk ON nk.next_of_kin_id =cbd.fk_next_of_kin_id_common_bio_data INNER JOIN users u ON u.users_id=nk.fk_users_id_next_of_kin WHERE u.users_id=toID;

-- SELECT userName;

INSERT INTO box_general_ledger VALUES(NULL,CURRENT_TIMESTAMP,userName,theEdadBoxAccountFrom,theEdadBoxAccountFrom,tokens,NULL,theEdadIdFrom);

SET last_insert_gen=LAST_INSERT_ID();



INSERT INTO `token_approval` VALUES(2,2,contactIn,last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

SET ledgerIdReduce=last_insert_gen;

END ##

DELIMITER ;



--  SyIdA1 is the trnFamily Generator
-- Approve	#	Trn Date	Trn Time	Name	Phone	#Tokens Purchased	Amount Equivalent

DROP PROCEDURE IF EXISTS approveTokenDetailsGeneralIncrease;

DELIMITER ##

CREATE PROCEDURE approveTokenDetailsGeneralIncrease(IN ledgerId VARCHAR(60)) BEGIN

DECLARE theEdadBoxAccount,perDtrnId,boxId,the_box_id,interestExists,interestStatusExists  INT;

DECLARE boxaccountBalanceOld,boxaccountPerDayBalanceOld,TOKENS,OLDRUNNING_BALANCE,NEWRUNNING_BALANCE,boxaccountBalanceNew,boxaccountPerDayBalanceNew DOUBLE;

DECLARE newexpirelyTime ,expirelyTime TIMESTAMP;

UPDATE token_approval SET token_approval_status=2 WHERE fk_box_general_ledger_id_token_approval=ledgerId;

--  SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;

SELECT bgl.tokens_credit,bgl.edad_box_account INTO TOKENS,theEdadBoxAccount FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

-- SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE-TOKENS;

-- UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;



-- SELECT last_insert_gen;

SELECT individual_box_balance INTO boxaccountBalanceOld FROM box_balance_account WHERE individual_box_sub_category_box=theEdadBoxAccount ORDER BY box_balance_account_id DESC LIMIT 1;

-- SELECT boxaccountBalanceOld;

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

-- SELECT boxaccountPerDayBalanceOld;

IF ISNULL(boxaccountBalanceOld) THEN

SET boxaccountBalanceOld=0;

END IF;

IF ISNULL(boxaccountPerDayBalanceOld) THEN

SET boxaccountPerDayBalanceOld=0;

INSERT INTO box_balance_day VALUES(NULL,CURRENT_TIMESTAMP,theEdadBoxAccount,boxaccountPerDayBalanceOld);

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

END IF;


SET boxaccountBalanceNew=boxaccountBalanceOld+TOKENS;


SET boxaccountPerDayBalanceNew=boxaccountPerDayBalanceOld+TOKENS;


INSERT INTO box_balance_account VALUES(NULL,CURRENT_TIMESTAMP,1,theEdadBoxAccount,boxaccountBalanceNew,ledgerId);

SET the_box_id=LAST_INSERT_ID();

SELECT fk_user_id_edad_box INTO boxId FROM edad_box WHERE edad_box_type_sub_category_id=theEdadBoxAccount;



SELECT COUNT(interest_accrued_id) INTO interestExists FROM interest_accrued WHERE fk_user_id_interest_accrued=boxId;

IF interestExists<1 THEN 

SET newexpirelyTime=CURRENT_TIMESTAMP + INTERVAL 24 HOUR;

INSERT INTO interest_accrued VALUES(NULL,0,0,0,0,CURRENT_TIMESTAMP,newexpirelyTime,0,0,the_box_id,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

UPDATE  box_balance_day SET  trn_balance=boxaccountPerDayBalanceNew WHERE box_balance_day_id=perDtrnId;

END IF;

SELECT COUNT(interest_accrue_status) INTO interestStatusExists FROM interest_accrue_complete WHERE fk_fk_user_id_edad_box_interest_accrue_complete=boxId;

IF interestStatusExists<1 THEN 

INSERT INTO interest_accrue_complete VALUES(1,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

END IF;

SELECT u.users_contact,cbd.name,ROUND(bgl.tokens_credit,4) FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

END ##

DELIMITER ;




DROP PROCEDURE IF EXISTS approveTokenDetailsGeneralReduce;

DELIMITER ##

CREATE PROCEDURE approveTokenDetailsGeneralReduce(IN ledgerId VARCHAR(60)) BEGIN

DECLARE theEdadBoxAccount,perDtrnId,boxId,the_box_id,interestExists,interestStatusExists  INT;

DECLARE boxaccountBalanceOld,boxaccountPerDayBalanceOld,TOKENS,OLDRUNNING_BALANCE,NEWRUNNING_BALANCE,boxaccountBalanceNew,boxaccountPerDayBalanceNew DOUBLE;

DECLARE newexpirelyTime ,expirelyTime TIMESTAMP;

UPDATE token_approval SET token_approval_status=2 WHERE fk_box_general_ledger_id_token_approval=ledgerId;

--  SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;

SELECT bgl.tokens_debit,bgl.edad_box_account INTO TOKENS,theEdadBoxAccount FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

-- SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE-TOKENS;

-- UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;



-- SELECT last_insert_gen;

SELECT individual_box_balance INTO boxaccountBalanceOld FROM box_balance_account WHERE individual_box_sub_category_box=theEdadBoxAccount ORDER BY box_balance_account_id DESC LIMIT 1;

-- SELECT boxaccountBalanceOld;

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

-- SELECT boxaccountPerDayBalanceOld;

IF ISNULL(boxaccountBalanceOld) THEN

SET boxaccountBalanceOld=0;

END IF;

IF ISNULL(boxaccountPerDayBalanceOld) THEN

SET boxaccountPerDayBalanceOld=0;

INSERT INTO box_balance_day VALUES(NULL,CURRENT_TIMESTAMP,theEdadBoxAccount,boxaccountPerDayBalanceOld);

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

END IF;


SET boxaccountBalanceNew=boxaccountBalanceOld-TOKENS;


SET boxaccountPerDayBalanceNew=boxaccountPerDayBalanceOld-TOKENS;


INSERT INTO box_balance_account VALUES(NULL,CURRENT_TIMESTAMP,1,theEdadBoxAccount,boxaccountBalanceNew,ledgerId);

SET the_box_id=LAST_INSERT_ID();

SELECT fk_user_id_edad_box INTO boxId FROM edad_box WHERE edad_box_type_sub_category_id=theEdadBoxAccount;



SELECT COUNT(interest_accrued_id) INTO interestExists FROM interest_accrued WHERE fk_user_id_interest_accrued=boxId;

IF interestExists<1 THEN 

SET newexpirelyTime=CURRENT_TIMESTAMP + INTERVAL 24 HOUR;

INSERT INTO interest_accrued VALUES(NULL,0,0,0,0,CURRENT_TIMESTAMP,newexpirelyTime,0,0,the_box_id,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

UPDATE  box_balance_day SET  trn_balance=boxaccountPerDayBalanceNew WHERE box_balance_day_id=perDtrnId;

END IF;

SELECT COUNT(interest_accrue_status) INTO interestStatusExists FROM interest_accrue_complete WHERE fk_fk_user_id_edad_box_interest_accrue_complete=boxId;

IF interestStatusExists<1 THEN 

INSERT INTO interest_accrue_complete VALUES(1,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

END IF;

SELECT u.users_contact,cbd.name,ROUND(bgl.tokens_debit,4) FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

END ##

DELIMITER ;









DROP PROCEDURE IF EXISTS smartSaverWithdrawTokens;

DELIMITER ##

CREATE PROCEDURE smartSaverWithdrawTokens(IN SData JSON) BEGIN

DECLARE perDtrnId,theEdadId,theEdadBoxAccount,last_insert_gen INTEGER;

DECLARE  boxaccountBalanceOld,boxaccountBalanceNew,boxaccountPerDayBalanceOld,boxaccountPerDayBalanceNew DOUBLE;

DECLARE userName VARCHAR(80);

SELECT edad_box_id, edad_box_type_sub_category_id INTO theEdadId,theEdadBoxAccount FROM edad_box WHERE fk_user_id_edad_box=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_id'));

-- SELECT theEdadId,theEdadBoxAccount;

SELECT cbd.name INTO userName FROM common_bio_data cbd INNER JOIN next_of_kin nk ON nk.next_of_kin_id =cbd.fk_next_of_kin_id_common_bio_data INNER JOIN users u ON u.users_id=nk.fk_users_id_next_of_kin WHERE u.users_id=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_id'));

-- SELECT userName;
-- The box general ledger is considered having a credit status since it holds values relating to the customer/user
INSERT INTO box_general_ledger VALUES(NULL,CURRENT_TIMESTAMP,userName,theEdadBoxAccount,theEdadBoxAccount,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.number_of_tokens')),NULL,theEdadId);

SET last_insert_gen=LAST_INSERT_ID();



INSERT INTO `token_approval` VALUES(1,1,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_contact')),last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO `token_approval_type` VALUES(1,last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

SELECT 1 AS completed;

END ##

DELIMITER ;


DROP PROCEDURE IF EXISTS smartSaverBuyTokens;

DELIMITER ##

CREATE PROCEDURE smartSaverBuyTokens(IN SData JSON) BEGIN

DECLARE perDtrnId,theEdadId,theEdadBoxAccount,last_insert_gen INTEGER;

DECLARE  boxaccountBalanceOld,boxaccountBalanceNew,boxaccountPerDayBalanceOld,boxaccountPerDayBalanceNew DOUBLE;

DECLARE userName VARCHAR(80);

SELECT edad_box_id,edad_box_type_sub_category_id INTO theEdadId,theEdadBoxAccount FROM edad_box WHERE fk_user_id_edad_box=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_id'));
-- SELECT theEdadId,theEdadBoxAccount;

SELECT cbd.name INTO userName FROM common_bio_data cbd INNER JOIN next_of_kin nk ON nk.next_of_kin_id =cbd.fk_next_of_kin_id_common_bio_data INNER JOIN users u ON u.users_id=nk.fk_users_id_next_of_kin WHERE u.users_id=JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_id'));

-- SELECT userName;

INSERT INTO box_general_ledger VALUES(NULL,CURRENT_TIMESTAMP,userName,theEdadBoxAccount,theEdadBoxAccount,NULL,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.number_of_tokens')),theEdadId);

SET last_insert_gen=LAST_INSERT_ID();



INSERT INTO `token_approval` VALUES(1,1,JSON_UNQUOTE(JSON_EXTRACT(SData, '$.users_savers_contact')),last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO `token_approval_type` VALUES(2,last_insert_gen,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

SELECT 1 AS completed;

END ##

DELIMITER ;






--  SyIdA1 is the trnFamily Generator
-- Approve	#	Trn Date	Trn Time	Name	Phone	#Tokens Purchased	Amount Equivalent

DROP PROCEDURE IF EXISTS allClientsAdminPurchaseApproval;
DELIMITER ##

CREATE PROCEDURE allClientsAdminPurchaseApproval() BEGIN


DECLARE DATE,TIME,TYPE,NAME,PHONE VARCHAR(60);
DECLARE TOKEN_P,AMOUNT_E DOUBLE;
DECLARE l_done,edId,ledgerId INT;

DECLARE forSelectingGeneralLedgerTxns CURSOR FOR SELECT bgl.box_general_ledger_id  FROM box_general_ledger bgl INNER JOIN token_approval ta ON  ta. fk_box_general_ledger_id_token_approval=bgl.box_general_ledger_id INNER JOIN token_approval_type tat ON tat.fk_box_general_ledger_id_token_approval_type=bgl.box_general_ledger_id WHERE (ta.token_approval_status=1 AND tat.token_approval_actual_type=2);

DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;


DROP TABLE IF EXISTS approval_datails;

CREATE TEMPORARY  TABLE approval_datails(id INT,lId INT,trn_date VARCHAR(60),trn_time VARCHAR(60),trn_type VARCHAR(60),name VARCHAR(60),phone VARCHAR(60),tokens_purchased DOUBLE,expected_amount DOUBLE);
--  number_plate
OPEN forSelectingGeneralLedgerTxns;

 

SET @TOTAL_DEBIT=0;

SET @TOTAL_CREDIT=0;

SET @ID=0;

accounts_loop: LOOP 
FETCH forSelectingGeneralLedgerTxns into edId;


IF l_done=1 THEN
LEAVE accounts_loop;
END IF;
 

--  SELECT edadBoxId;

 SELECT  DATE_FORMAT(DATE(bgl.txn_date),"%d/%m/%Y"),TIME(bgl.txn_date),eb.edad_box_type_sub_category,bgl.trn_narration,u.users_contact,bgl.tokens_credit INTO DATE,TIME,TYPE,NAME,PHONE,TOKEN_P  FROM box_general_ledger bgl INNER JOIN token_approval ta ON bgl.box_general_ledger_id=ta.fk_box_general_ledger_id_token_approval INNER JOIN edad_box eb  ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id INNER JOIN  users u ON u.users_id=eb.fk_user_id_edad_box INNER JOIN token_approval_type tat ON tat.fk_box_general_ledger_id_token_approval_type=bgl.box_general_ledger_id WHERE ((bgl.box_general_ledger_id=edId AND ta.token_approval_status=1) AND (tat.token_approval_actual_type=2));


IF ISNULL(TOKEN_P) THEN

SET TOKEN_P=0;

END IF;



SET AMOUNT_E=TOKEN_P*1000;

-- SELECT OLDRUNNING_BALANCE,CREDIT,DEBIT,AMOUNT_E;

SET @TOTAL_DEBIT=@TOTAL_DEBIT+TOKEN_P;

SET @TOTAL_CREDIT=@TOTAL_CREDIT+AMOUNT_E;


SET @ID=@ID+1;

IF TYPE='individual_box_saving' THEN
SET TYPE='Smart Savings';
ELSEIF TYPE='individual_box_vending' THEN
SET TYPE='Smart Vending';
ELSEIF TYPE='individual_box_agency' THEN
SET TYPE='Smart Agency';
END IF;


 IF TOKEN_P>0 THEN  
INSERT INTO approval_datails VALUES(@ID,edId,DATE,TIME,TYPE,NAME,PHONE,ROUND(TOKEN_P,4),ROUND(AMOUNT_E,2));
END IF;

SET l_done=0;
END LOOP accounts_loop;
CLOSE forSelectingGeneralLedgerTxns;


INSERT INTO approval_datails VALUES(NULL,NULL,'TOTAL/NET BALANCE',NULL,NULL,NULL,NULL,ROUND(@TOTAL_DEBIT,4),ROUND(@TOTAL_CREDIT,2));


SELECT * FROM approval_datails;

END ##

DELIMITER ;






--  SyIdA1 is the trnFamily Generator
-- Approve	#	Trn Date	Trn Time	Name	Phone	#Tokens Purchased	Amount Equivalent

DROP PROCEDURE IF EXISTS allClientsAdminWithdrawApproval;
DELIMITER ##

CREATE PROCEDURE allClientsAdminWithdrawApproval() BEGIN


DECLARE DATE,TIME,TYPE,NAME,PHONE VARCHAR(60);
DECLARE TOKEN_P,AMOUNT_E DOUBLE;
DECLARE l_done,edId,ledgerId INT;

DECLARE forSelectingGeneralLedgerTxns CURSOR FOR SELECT bgl.box_general_ledger_id  FROM box_general_ledger bgl INNER JOIN token_approval ta ON  ta. fk_box_general_ledger_id_token_approval=bgl.box_general_ledger_id INNER JOIN token_approval_type tat ON tat.fk_box_general_ledger_id_token_approval_type=bgl.box_general_ledger_id WHERE (ta.token_approval_status=1 AND tat.token_approval_actual_type=1);

DECLARE CONTINUE HANDLER FOR NOT FOUND SET l_done=1;


DROP TABLE IF EXISTS approval_datails_withdraw;

CREATE TEMPORARY  TABLE approval_datails_withdraw(id INT,lId INT,trn_date VARCHAR(60),trn_time VARCHAR(60),trn_type VARCHAR(60),name VARCHAR(60),phone VARCHAR(60),tokens_purchased DOUBLE,expected_amount DOUBLE);
--  number_plate
OPEN forSelectingGeneralLedgerTxns;

 

SET @TOTAL_DEBIT=0;

SET @TOTAL_CREDIT=0;

SET @ID=0;

accounts_loop: LOOP 

FETCH forSelectingGeneralLedgerTxns into edId;



IF l_done=1 THEN
LEAVE accounts_loop;
END IF;
 

/* SELECT edId; */

 SELECT  DATE_FORMAT(DATE(bgl.txn_date),"%d/%m/%Y"),TIME(bgl.txn_date),eb.edad_box_type_sub_category,bgl.trn_narration,u.users_contact,bgl.tokens_debit INTO DATE,TIME,TYPE,NAME,PHONE,TOKEN_P  FROM box_general_ledger bgl INNER JOIN token_approval ta ON bgl.box_general_ledger_id=ta.fk_box_general_ledger_id_token_approval INNER JOIN edad_box eb  ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id INNER JOIN  users u ON u.users_id=eb.fk_user_id_edad_box  WHERE bgl.box_general_ledger_id=edId ;

/* SELECT DATE,TIME,TYPE,NAME,PHONE,TOKEN_P; */
IF ISNULL(TOKEN_P) THEN

SET TOKEN_P=0;

END IF;



SET AMOUNT_E=TOKEN_P*1000;

-- SELECT OLDRUNNING_BALANCE,CREDIT,DEBIT,AMOUNT_E;

SET @TOTAL_DEBIT=@TOTAL_DEBIT+TOKEN_P;

SET @TOTAL_CREDIT=@TOTAL_CREDIT+AMOUNT_E;


SET @ID=@ID+1;

IF TYPE='individual_box_saving' THEN
SET TYPE='Smart Savings';
ELSEIF TYPE='individual_box_vending' THEN
SET TYPE='Smart Vending';
ELSEIF TYPE='individual_box_agency' THEN
SET TYPE='Smart Agency';
END IF;


 IF TOKEN_P>0 THEN  
INSERT INTO approval_datails_withdraw VALUES(@ID,edId,DATE,TIME,TYPE,NAME,PHONE,ROUND(TOKEN_P,4),ROUND(AMOUNT_E,2));
END IF;

SET l_done=0;
END LOOP accounts_loop;
CLOSE forSelectingGeneralLedgerTxns;


INSERT INTO approval_datails_withdraw VALUES(NULL,NULL,'TOTAL/NET BALANCE',NULL,NULL,NULL,NULL,ROUND(@TOTAL_DEBIT,4),ROUND(@TOTAL_CREDIT,2));


SELECT * FROM approval_datails_withdraw;

END ##

DELIMITER ;






--  SyIdA1 is the trnFamily Generator
-- Approve	#	Trn Date	Trn Time	Name	Phone	#Tokens Purchased	Amount Equivalent
DROP PROCEDURE IF EXISTS approveTokenDetailsPurchase;

DELIMITER ##

CREATE PROCEDURE approveTokenDetailsPurchase(IN ledgerId VARCHAR(60)) BEGIN

DECLARE theEdadBoxAccount,perDtrnId,boxId,the_box_id,interestExists,interestStatusExists  INT;

DECLARE boxaccountBalanceOld,boxaccountPerDayBalanceOld,TOKENS,OLDRUNNING_BALANCE,NEWRUNNING_BALANCE,boxaccountBalanceNew,boxaccountPerDayBalanceNew DOUBLE;

DECLARE newexpirelyTime ,expirelyTime TIMESTAMP;

UPDATE token_approval SET token_approval_status=2 WHERE fk_box_general_ledger_id_token_approval=ledgerId;

--  SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;

SELECT bgl.tokens_credit,bgl.edad_box_account INTO TOKENS,theEdadBoxAccount FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

-- SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE-TOKENS;

-- UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;

CALL reduceTokensConstant(TOKENS);

-- SELECT last_insert_gen;

SELECT individual_box_balance INTO boxaccountBalanceOld FROM box_balance_account WHERE individual_box_sub_category_box=theEdadBoxAccount ORDER BY box_balance_account_id DESC LIMIT 1;

-- SELECT boxaccountBalanceOld;

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

-- SELECT boxaccountPerDayBalanceOld;

IF ISNULL(boxaccountBalanceOld) THEN

SET boxaccountBalanceOld=0;

END IF;

IF ISNULL(boxaccountPerDayBalanceOld) THEN

SET boxaccountPerDayBalanceOld=0;

INSERT INTO box_balance_day VALUES(NULL,CURRENT_TIMESTAMP,theEdadBoxAccount,boxaccountPerDayBalanceOld);

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

END IF;


SET boxaccountBalanceNew=boxaccountBalanceOld+TOKENS;


SET boxaccountPerDayBalanceNew=boxaccountPerDayBalanceOld+TOKENS;


INSERT INTO box_balance_account VALUES(NULL,CURRENT_TIMESTAMP,1,theEdadBoxAccount,boxaccountBalanceNew,ledgerId);

SET the_box_id=LAST_INSERT_ID();

SELECT fk_user_id_edad_box INTO boxId FROM edad_box WHERE edad_box_type_sub_category_id=theEdadBoxAccount;



SELECT COUNT(interest_accrued_id) INTO interestExists FROM interest_accrued WHERE fk_user_id_interest_accrued=boxId;

IF interestExists<1 THEN 

SET newexpirelyTime=CURRENT_TIMESTAMP + INTERVAL 24 HOUR;

INSERT INTO interest_accrued VALUES(NULL,0,0,0,0,CURRENT_TIMESTAMP,newexpirelyTime,0,0,the_box_id,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

UPDATE  box_balance_day SET  trn_balance=boxaccountPerDayBalanceNew WHERE box_balance_day_id=perDtrnId;

END IF;

SELECT COUNT(interest_accrue_status) INTO interestStatusExists FROM interest_accrue_complete WHERE fk_fk_user_id_edad_box_interest_accrue_complete=boxId;

IF interestStatusExists<1 THEN 

INSERT INTO interest_accrue_complete VALUES(1,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

END IF;

SELECT u.users_contact,cbd.name,ROUND(bgl.tokens_credit,4) FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

END ##

DELIMITER ;





--  SyIdA1 is the trnFamily Generator

-- Approve	#	Trn Date	Trn Time	Name	Phone	#Tokens Purchased	Amount Equivalent

DROP PROCEDURE IF EXISTS approveTokenDetailsWithdraw;

DELIMITER ##

CREATE PROCEDURE approveTokenDetailsWithdraw(IN ledgerId VARCHAR(60)) BEGIN

DECLARE theEdadBoxAccount,perDtrnId,boxId,the_box_id,interestExists,interestStatusExists  INT;

DECLARE boxaccountBalanceOld,boxaccountPerDayBalanceOld,TOKENS,OLDRUNNING_BALANCE,NEWRUNNING_BALANCE,boxaccountBalanceNew,boxaccountPerDayBalanceNew DOUBLE;

DECLARE newexpirelyTime ,expirelyTime TIMESTAMP;

UPDATE token_approval SET token_approval_status=2 WHERE fk_box_general_ledger_id_token_approval=ledgerId;

--  SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;

SELECT bgl.tokens_credit,bgl.edad_box_account INTO TOKENS,theEdadBoxAccount FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

-- SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE-TOKENS;

-- UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;

CALL increaseTokensConstant(TOKENS);

-- SELECT last_insert_gen;

SELECT individual_box_balance INTO boxaccountBalanceOld FROM box_balance_account WHERE individual_box_sub_category_box=theEdadBoxAccount ORDER BY box_balance_account_id DESC LIMIT 1;

-- SELECT boxaccountBalanceOld;

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

-- SELECT boxaccountPerDayBalanceOld;

IF ISNULL(boxaccountBalanceOld) THEN

SET boxaccountBalanceOld=0;

END IF;

IF ISNULL(boxaccountPerDayBalanceOld) THEN

SET boxaccountPerDayBalanceOld=0;

INSERT INTO box_balance_day VALUES(NULL,CURRENT_TIMESTAMP,theEdadBoxAccount,boxaccountPerDayBalanceOld);

SELECT box_balance_day_id,trn_balance  INTO perDtrnId, boxaccountPerDayBalanceOld FROM box_balance_day WHERE trn_account_id=theEdadBoxAccount AND trn_date<=CURRENT_TIMESTAMP ORDER BY box_balance_day_id DESC LIMIT 1;

END IF;


SET boxaccountBalanceNew=boxaccountBalanceOld+TOKENS;


SET boxaccountPerDayBalanceNew=boxaccountPerDayBalanceOld+TOKENS;


INSERT INTO box_balance_account VALUES(NULL,CURRENT_TIMESTAMP,1,theEdadBoxAccount,boxaccountBalanceNew,ledgerId);

SET the_box_id=LAST_INSERT_ID();

SELECT fk_user_id_edad_box INTO boxId FROM edad_box WHERE edad_box_type_sub_category_id=theEdadBoxAccount;



SELECT COUNT(interest_accrued_id) INTO interestExists FROM interest_accrued WHERE fk_user_id_interest_accrued=boxId;

IF interestExists<1 THEN 

SET newexpirelyTime=CURRENT_TIMESTAMP + INTERVAL 24 HOUR;

INSERT INTO interest_accrued VALUES(NULL,0,0,0,0,CURRENT_TIMESTAMP,newexpirelyTime,0,0,the_box_id,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

UPDATE  box_balance_day SET  trn_balance=boxaccountPerDayBalanceNew WHERE box_balance_day_id=perDtrnId;

END IF;

SELECT COUNT(interest_accrue_status) INTO interestStatusExists FROM interest_accrue_complete WHERE fk_fk_user_id_edad_box_interest_accrue_complete=boxId;

IF interestStatusExists<1 THEN 

INSERT INTO interest_accrue_complete VALUES(1,boxId,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

END IF;

SELECT u.users_contact,cbd.name,ROUND(bgl.tokens_credit,4) FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;

END ##

DELIMITER ;







/* BATCH NUMBER FUNCTION */

--  SyIdA12 is the batchNumber Generator

DROP PROCEDURE IF EXISTS  increaseTokensConstant;

DELIMITER ##

CREATE PROCEDURE increaseTokensConstant(TOKENS DOUBLE) 

BEGIN

DECLARE OLDRUNNING_BALANCE,NEWRUNNING_BALANCE DOUBLE;


 SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;

SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE+TOKENS;

UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;

END ##

DELIMITER ;




/* BATCH NUMBER FUNCTION */
--  SyIdA12 is the batchNumber Generator
DROP PROCEDURE IF EXISTS reduceTokensConstant;
DELIMITER ##
CREATE PROCEDURE reduceTokensConstant(TOKENS DOUBLE) 
BEGIN

DECLARE OLDRUNNING_BALANCE,NEWRUNNING_BALANCE DOUBLE;

SELECT edad_number_of_tokens INTO OLDRUNNING_BALANCE FROM edad_constants;

SET NEWRUNNING_BALANCE=OLDRUNNING_BALANCE-TOKENS;

UPDATE  edad_constants SET edad_number_of_tokens=NEWRUNNING_BALANCE;

END ##
DELIMITER ;






--  SyIdA1 is the trnFamily Generator
-- Approve	#	Trn Date	Trn Time	Name	Phone	#Tokens Purchased	Amount Equivalent
DROP PROCEDURE IF EXISTS rejectTokenDetails;

DELIMITER ##

CREATE PROCEDURE rejectTokenDetails(IN ledgerId VARCHAR(60)) BEGIN

UPDATE token_approval SET token_approval_status=3 WHERE fk_box_general_ledger_id_token_approval=ledgerId;

SELECT u.users_contact,cbd.name,bgl.tokens_credit FROM users u INNER JOIN next_of_kin nk ON nk.fk_users_id_next_of_kin=u.users_id INNER JOIN common_bio_data cbd ON cbd.fk_next_of_kin_id_common_bio_data=nk.next_of_kin_id INNER JOIN edad_box eb ON eb.fk_user_id_edad_box=u.users_id INNER JOIN  box_general_ledger bgl ON bgl.fk_edad_box_id_box_general_ledger=eb.edad_box_id WHERE bgl.box_general_ledger_id=ledgerId;


END ##

DELIMITER ;





