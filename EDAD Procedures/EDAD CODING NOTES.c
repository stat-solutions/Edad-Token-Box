Foriegn key refereces will be handled as follows:fk_country_currency_id_gate_way  fk_ means foreign key country_currency_id is primary key of the table being referenced and gate_way is the table name of table refenecing.
So we can read it as foreign key fk_country_currency_id_gate_way refereces country_currency table on the country_currency_id primary key and is referenced by gate_way table


Each EDAD BOX Will have a type id and will also hold edad_box_type_name, edad_box_type_category,edad_box_type_sub_category and edad_box_type_sub_category_id 
The edad_box_type_name will be such as Individual OR Group
The edad_box_type_category will be such as Individual_box,Group_box,Box_for_God,school_box
The edad_box_type_sub_category will be such as individual_box_general, individual_box_saving,individual_box_vending,individual_box_agency,individual_box_for_God,individual_box_school_fees. Each edad user will have a box which will be the first line of reference. The individual box id will automatically identify each user in a group box.

These sub_categories will be the basis for creation of the box numbers which will be unique identifiers for each box type. The box numbers will be generated from the table which will have unique id as follows:

individual_box_saving_id=100000000
individual_box_vending_id=200000000
individual_box_agency_id=300000000
individual_box_for_God_id=400000000
individual_box_school_fees_id=500000000
group_box_id=600000000
Box_for_God_id=700000000
school_box_id=800000000



The edad general box txns will be a collection of all trasactions made on the box. It will act as the general ledger of any accounting system
The transaction type will include:BOX_WITHDRAW,BOX_DEPOSIT,BOX_TRANSFER_OUT,BOX_TRANSFER_IN,God_Box_transfer,Savings_transfer,

The edad_trn_type table cotains the possible transactions that can take place in the EDAD BOX. These include but not limited to Deposits,Withdraws And Transfers. These transactions types are further categorised according to the target to which the Transaction relates to; For example, Deposits could be categorised as For_God,School_Fees,Vending,Saving,Agency.Like wise tranfers can be categorised as interest etc. We also need to categorise edad_trn_type_direction transactions as either credits (In) debits(Out)

The following tables will be needed to summurise the tokens balances:
balances_per_account_per_day
balances_per_account_per_transaction



CHANGES
There will be two boxes for the start, individual box and group box. The individual box will have the individual subcategory id in the range of 100000000 while the group account will have the sub category id in the range of 200000000