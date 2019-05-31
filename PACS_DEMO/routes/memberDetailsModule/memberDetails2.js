var express = require('express');
var router = express.Router();
var pgdbconnect=require('../database/pgdbconnect');


router.post('/logintemp',function(req,res){
   res.render('memberModule/memberAddDetails');
});


router.post('/mem_details',function(req,res){
    console.log("Hii");

    //Member details-start//

    var  mem_typ = req.body.mem_typ;
    var mem_id = req.body.mem_id;
    var emp_code = req.body.emp_code;
    var doj = req.body.doj;
    var dob = req.body.dob;
    var dor = req.body.dor;
    var adm_no = req.body.adm_no;
    var dept = req.body.dept;
    var ent_fee = req.body.ent_fee;
    var crncytyp = req.body.crncytyp;
    var shr_bal = req.body.shr_bal;
    var cntr_pay = req.body.cntr_pay;
    var thrift_dept = req.body.thrift_dept;
    var dras = req.body.dras;
    var bnk_acc_no = req.body.bnk_acc_no;
    var opn_bal = req.body.opn_bal;
    var cls_bal = req.body.cls_bal;
    var remarks = req.body.remarks;

    console.log("Member Details",mem_typ,mem_id,emp_code,doj,dob,dor,adm_no,dept,ent_fee,crncytyp,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,remarks);

    //Member details-end//

    /////////////////////////////////////////////////////////////////////////

    //Personal details-start//


    var title = req.body.title;
    var fname = req.body.fname;
    var mname = req.body.mname;
    var lname = req.body.lname;
    var father_name = req.body.father_name;
    var spouse = req.body.spouse;
    var selectedop = req.body.selectedop;
    var sgender = req.body.sgender;
    var pob = req.body.pob;
    var mar_status = req.body.mar_status;
    var religion = req.body.religion;
    var caste = req.body.caste;
    var occupation = req.body.occupation;
    var cust_category = req.body.cust_category;
    var cust_type = req.body.cust_type;
    var buss_segment = req.body.buss_segment;
    var mem_comm = req.body.mem_comm;
    var guardian = req.body.guardian;
    var ph_no = req.body.ph_no;
    var email_id = req.body.email_id;
    var adhar_no = req.body.adhar_no;
    var ration_no = req.body.ration_no;
    var voter_id = req.body.voter_id;
    var pan_id = req.body.pan_id;
    var under_poverty = req.body.under_poverty;
    var fam_members = req.body.fam_members;
    var dept_no = req.body.dept_no;
    var minority = req.body.minority;
    var minority1 = req.body.minority1;
    var land_owner = req.body.land_owner;
    var resd_status = req.body.resd_status;
    var shg_no = req.body.shg_no;
    var kcc = req.body.kcc;
    var s_mem = req.body.s_mem;
    var s_staf = req.body.s_staf;
    var acc_holder = req.body.acc_holder;
    var high_edu = req.body.high_edu;

    console.log("Personal Details",title,fname,mname,lname,father_name,spouse,selectedop,sgender,pob,mar_status,religion,caste,occupation,cust_category,cust_type,buss_segment,mem_comm,guardian,ph_no,email_id,adhar_no,ration_no,voter_id,pan_id,under_poverty,fam_members,dept_no,minority,minority1,land_owner,resd_status,shg_no,kcc,s_mem,s_staf,acc_holder,high_edu);

    //Personal details-end//

    ///////////////////////////////////////////////////////////////////////////////

     //Present address-start//

    var add_type = req.body.add_type;
    var add_line = req.body.add_line;
    var village = req.body.village;
    var panchayat = req.body.panchayat;
    var city = req.body.city;
    var state = req.body.state;
    var country = req.body.country;
    var pincode = req.body.pincode;
    var rsm = req.body.rsm;
    var rsy = req.body.rsy;

    console.log("Present Address",add_type,add_line,village,city,state,country,panchayat,pincode,rsm,rsy);

    //Present address-end//

    ///////////////////////////////////////////////////////////////////////////////////////

    //Permanent address-start//

    var address_type = req.body.address_type;
    var address_line = req.body.address_line;
    var vilg = req.body.vilg;
    var panc = req.body.panc;
    var citie = req.body.citie;
    var stat = req.body.stat;
    var ctry = req.body.ctry;
    var picd = req.body.picd;
    var mnth = req.body.mnth;
    var year = req.body.year;

    console.log("Permanent Address",address_type,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year);

    //Permanent address-end//

    /////////////////////////////////////////////////////////////////////////////////////////////

    //Loans - start//

    var e_month = req.body.e_month;
    var loan_amt = req.body.loan_amt;
    var amt_used = req.body.amt_used;

    console.log("Loans",e_month,loan_amt,amt_used);

    //Loans - end//

    //////////////////////////////////////////////////////////////////////////////////////////////

    //Nominee - start//

    var nominee_type = req.body.nominee_type;
    var fst_name = req.body.fst_name;
    var mid_name = req.body.mid_name;
    var lst_name = req.body.lst_name;
    var fath_name = req.body.fath_name;
    var rel = req.body.rel;
    var gen = req.body.gen;
    var occup = req.body.occup;
    var date_ob = req.body.date_ob;
    var ac_num = req.body.ac_num;
    var addr_type = req.body.addr_type;
    var addr_line = req.body.addr_line;
    var vilge = req.body.vilge;
    var panch = req.body.panch;
    var distcity = req.body.distcity;
    var stat1 = req.body.stat1;
    var countr = req.body.countr;
    var pin_cd = req.body.pin_cd;
    var phone_no = req.body.phone_no;
    var email = req.body.email;
    var adh_no = req.body.adh_no;
    var ism = req.body.ism;

    console.log("Nominee Address",nominee_type,fst_name,mid_name,lst_name,fath_name,rel,gen,occup,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,stat1,countr,pin_cd,phone_no,email,adh_no,ism);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
        console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
    {
        if(err) throw err;
        console.log("result2 is", result2);




    /*country*/

    // var country = req.body.country;
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
        console.log("result3 is", result3);


    //Nominee - end//

    /////////////////////////////////////////////////////////////////////////////////////

    pgdbconnect.query("insert into member_details ( md_ch_member_id, md_ch_member_type_code, md_d_doj, md_d_dor, md_ch_admission_number, md_ch_department, md_n_entrance_fee_amt, md_n_opening_share_balance, md_ch_counter_pay, md_n_thrift_deposit, md_ch_dras, md_ch_bank_account_number, md_n_opening_balance, md_n_closing_balance, md_ch_del_flg,md_n_employee_code,md_ch_entrance_fee_cur) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)",[mem_id,mem_typ,doj,dor,adm_no,dept,ent_fee,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,'N',emp_code,crncytyp],function(err,loginres){
    if(err) throw err;
    console.log("Result of Member Details",loginres);

        pgdbconnect.query("insert into member_personal_details (mpd_ch_member_id, mpd_ch_title, mpd_ch_first_name, mpd_ch_middle_name, mpd_ch_last_name, mpd_ch_gender, mpd_d_dob, mpd_ch_pob, mpd_n_phone_number, mpd_ch_emailid, mpd_ch_father_name, mpd_ch_marital_status, mpd_ch_spouse_name, mpd_ch_spouse_gender, mpd_n_total_family_members, mpd_n_no_of_dependents, mpd_ch_higher_qualification, mpd_ch_religion, mpd_ch_caste, mpd_ch_occupation, mpd_n_aadhar_card_number, mpd_n_pan_card_number, mpd_n_voterid, mpd_n_ration_card_number, mpd_ch_residential_status, mpd_ch_customer_category, mpd_ch_customer_type, mpd_ch_business_segment, mpd_ch_member_community, mpd_ch_guardian, mpd_ch_under_poverty, mpd_ch_minority, mpd_ch_land_owned_by, mpd_ch_shg_member, mpd_ch_kcc_holdercharacter, mpd_ch_is_society_member, mpd_ch_is_society_staff, mpd_ch_is_account_holder, mpd_ch_address_type1, mpd_ch_address_line1, mpd_ch_village1, mpd_ch_panchayat1, mpd_ch_city1, mpd_ch_state1, mpd_ch_country1, mpd_n_pincode1, mpd_d_residing_since_month1, mpd_d_residing_since_year1, mpd_ch_address_type2, mpd_ch_address_line2, mpd_ch_village2, mpd_ch_panchayat2, mpd_ch_city2, mpd_ch_state2, mpd_ch_country2, mpd_n_pincode2, mpd_d_residing_since_month2, mpd_d_residing_since_year2, mpd_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59)",[mem_id,title,fname,mname,lname,selectedop,dob,pob,ph_no,email_id,father_name,mar_status,spouse,sgender,fam_members,dept_no,high_edu,religion,caste,occupation,adhar_no,pan_id,voter_id,ration_no,resd_status,cust_category,cust_type,buss_segment,mem_comm,guardian,under_poverty,minority,land_owner,shg_no,kcc,s_mem,s_staf,acc_holder,add_type,add_line,village,panchayat,city,state,country,pincode,rsm,rsy,address_type,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year,'N'],function(err,loginres1){
        if(err) throw err;
        console.log("Result of Personal Details",loginres1);

            pgdbconnect.query("insert into member_loan_details ( mld_ch_member_id, mld_ch_eligible_for_loan, mld_n_total_eligible_loan_amount, mld_n_total_amount_used, mld_n_employee_code,mld_ch_del_flg) values ($1,$2,$3,$4,$5,$6)",[mem_id,e_month,loan_amt,amt_used,emp_code,'N'],function(err,resu){
            if(err) throw err;
            console.log("Result of Loan Details",resu);

                pgdbconnect.query("insert into member_nominee_details ( mnd_ch_member_id, mnd_ch_title, mnd_ch_first_name, mnd_ch_middle_name, mnd_ch_last_name, mnd_ch_father_name, mnd_ch_relation, mnd_ch_gender, mnd_d_dob, mnd_n_account_num, mnd_ch_address_type, mnd_ch_address_line, mnd_ch_village, mnd_ch_panchayat, mnd_ch_city, mnd_ch_states, mnd_ch_country, mnd_n_pincode, mnd_n_phone_number, mnd_ch_emailid, mnd_ch_aadhar_card_number, mnd_ch_del_flg, mnd_ch_is_society_member) values  ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)",[mem_id,nominee_type,fst_name,mid_name,lst_name,fath_name,rel,gen,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,state,countr,pin_cd,phone_no,email,adh_no,'N',ism],function(err,resul){
                if(err) throw err;
                console.log("Result of Nominee Details",resul);
                });
            });
        });
    });

    req.flash('success_msg',"Data inserted successfully");
                   res.locals.message=req.flash();

    res.render('memberModule/memberAddDetails',{
        cities:result1.rows,
        states:result2.rows,
        countries:result3.rows
    });
    });
});
});
});



////////////////////////////////////
router.get('/memberdetails',function(req,res){

   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
       console.log("result1 is", result1);


   /*states*/

   // var state = req.body.state;
   // console.log(state);
   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
   {
       if(err) throw err;
       console.log("result2 is", result2);



   /*country*/

   // var country = req.body.country;
   // console.log(country);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
   {
       if(err) throw err;
       console.log("result3 is", result3);

       req.flash('success_msg',"Data inserted successfully");
                   res.locals.message=req.flash();

       res.render('memberModule/memberAddDetails',{
       cities:result1.rows,
        states:result2.rows,
        countries:result3.rows
   });
   });
   });
});
});





// Members Share Page
router.get('/mem_share',function(req,res){
   res.render('memberModule/member_shares');
});

// Members Share Search Page
router.get('/mem_share_search',function(req,res){
   res.render('memberModule/member_share_search');
});

// Members House Details Page
router.get('/mem_hse_det',function(req,res){
   res.render('memberModule/member_house_details');
});

// Members House Details Search Page
router.get('/mem_hse_det_ser',function(req,res){
   res.render('memberModule/member_house_details_search');
});


/* Farm machinery-start*/

// Members Farm Machinery Page
router.get('/mem_farm_add',function(req,res){
    var divtype=req.query.key;

   pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {
   res.render('memberModule/member_farm_machinery',{
        memberdetails:result2.rows,
        pagetype:divtype
   });
});
});

// Members Farm Machinery Search Page
router.get('/mem_farm_search',function(req,res){

     pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_del_flg='N'",function(err,result3) {
   res.render('memberModule/member_farm_machinery_search',{
 memberdetails:result2.rows,
 memfarmdetails:result3.rows
   });
     });
     });
});

router.post('/mem_farm_machinery_add',mem_farm_machinery);
    function mem_farm_machinery(req,res){


        var memid=req.body.mem_sel;
        var VechicleName=req.body.vehiclename;
        var VechilceRegisterNumber=req.body.vehicle_reg_num;
        var YearofPurchase=req.body.yearofpurchase;
        var VechicleDescription=req.body.vehicledescription;
        var PurchaseValue=req.body.purchase_value;
        var marketValue=req.body.market_value;
        var farmmachineryid;

console.log('VechicleName',VechicleName);
console.log('VechilceRegisterNumber',VechilceRegisterNumber);
console.log('YearofPurchase',YearofPurchase);
console.log('VechicleDescription',VechicleDescription);

pgdbconnect.query("select * from farm_machinery_details",function(err,result) {
    if(result.rowCount==0){
        farmmachineryid='1'
  pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

pgdbconnect.query("insert into farm_machinery_details(fmd_n_farm_mach_id,fmd_ch_member_id,fmd_ch_vehicle_name,fmd_n_vehicle_reg_num,fmd_ch_year_of_purchase,fmd_ch_vehicle_description,fmd_ch_purchase_value,fmd_n_market_value,fmd_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",[farmmachineryid,memid,VechicleName,VechilceRegisterNumber,YearofPurchase,VechicleDescription,PurchaseValue,PurchaseValue,'N'],function(err,formres){

    if (err)
    {
        console.error('Error with table query', err);
}
else
{
      req.flash('success_msg', 'Record Added successfully');
      res.locals.message=req.flash();
      res.render('memberModule/member_farm_machinery',{
         pagetype:'ADD',
        // memfarmdetails:result2.rows,
         memberdetails:result2.rows
     });
}

});
    });

}
else{
  pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

     pgdbconnect.query("select max(fmd_n_farm_mach_id) from farm_machinery_details",function(err,result) {
        console.log("max value check",result)
        console.log("max value check",result.rows[0].max)

        farmmachineryid=parseInt(result.rows[0].max)+1;
        console.log("when more rows exxxists",farmmachineryid)

pgdbconnect.query("insert into farm_machinery_details(fmd_n_farm_mach_id,fmd_ch_member_id,fmd_ch_vehicle_name,fmd_n_vehicle_reg_num,fmd_ch_year_of_purchase,fmd_ch_vehicle_description,fmd_ch_purchase_value,fmd_n_market_value,fmd_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",[farmmachineryid,memid,VechicleName,VechilceRegisterNumber,YearofPurchase,VechicleDescription,PurchaseValue,PurchaseValue,'N'],function(err,formres){

    if (err)
    {
        console.error('Error with table query', err);
}
else
{
      req.flash('success_msg', 'Record Added successfully');
      res.locals.message=req.flash();
      res.render('memberModule/member_farm_machinery',{
         pagetype:'ADD',
          memberdetails:result2.rows
     });
}

});
     });
});
}
});
    }



    router.post('/edit_data_record_farm_mach',function(req,res){
    console.log("FARM MACHINERY EDIT DATA POPULATE");
    var divtype="EDIT";


    //Bank Branch details-start//
var farmmachinery_id= req.body.farmmachinery_ed_id;
console.log("farm  id to edit",farmmachinery_id)
pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

            //console.log("Result of Branch", result5);
       pgdbconnect.query("select * from farm_machinery_details where fmd_n_farm_mach_id=$1 ",[farmmachinery_id],function(err,searchres)

            {
                console.log("searchres")
    var member_farm_id = searchres.rows[0].fmd_n_farm_mach_id;
    var memberid= searchres.rows[0].fmd_ch_member_id;
    var vehiclename = searchres.rows[0].fmd_ch_vehicle_name;
    var vehicle_reg_num =  searchres.rows[0].fmd_n_vehicle_reg_num;
    var year_of_purchase =  searchres.rows[0].fmd_ch_year_of_purchase;

    var vehicle_desc = searchres.rows[0].fmd_ch_vehicle_description;
    var purchase_value =  searchres.rows[0].fmd_ch_purchase_value;
    var market_value =  searchres.rows[0].fmd_n_market_value;




    res.render('memberModule/member_farm_machinery',{
        member_farm_id:member_farm_id,
        memberid:memberid,
        vehiclename:vehiclename,
        vehicle_reg_num:vehicle_reg_num,
        year_of_purchase:year_of_purchase,
        vehicle_desc:vehicle_desc,
        purchase_value:purchase_value,
        market_value:market_value,
        pagetype:"EDIT",
        memberdetails:result2.rows
    });
});

 });
    });

router.post('/update_farm_mach_save',update_farm_mach_save)
 function update_farm_mach_save(req,res){

   var member_farm_id=req.body.memfarmid_edit;
   var memberid=req.body.memberid_ed;
   var vehiclename=req.body.vehiclename_ed;
   var vehicle_reg_num=req.body.vehicle_reg_num_ed;
   var year_of_purchase=req.body.yearofpurchase_ed;
   var vehicle_desc=req.body.vehicledescription_ed;
   var purchase_value=req.body.purchase_value_ed;
   var market_value=req.body.market_value_ed;

console.log("Data to update FARM MACHINERY",memberid,vehiclename,vehicle_reg_num,year_of_purchase,vehicle_desc,purchase_value,market_value,member_farm_id);

  pgdbconnect.query("UPDATE farm_machinery_details SET fmd_ch_member_id=$1, fmd_ch_vehicle_name=$2, fmd_n_vehicle_reg_num=$3, fmd_ch_year_of_purchase=$4, fmd_ch_vehicle_description=$5, fmd_ch_purchase_value=$6, fmd_n_market_value=$7,fmd_n_farm_mach_id=$8  WHERE fmd_n_farm_mach_id=$9 ",[memberid,vehiclename,vehicle_reg_num,year_of_purchase,vehicle_desc,purchase_value,market_value,member_farm_id,member_farm_id],function(err,farmmachupdate){

    if (err) throw err;
    console.log("FARM MACHINERY UPDATED RESULT",farmmachupdate)

   pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,memberdetails){

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_del_flg='N' order by fmd_n_farm_mach_id",function(err,farmmachinerydetails){
    req.flash('success_msg', 'Record Updated successfully');
    res.locals.message=req.flash();
   res.render('memberModule/member_farm_machinery_search',{
    memberdetails:memberdetails.rows,
   memfarmdetails: farmmachinerydetails.rows

});
   });

});
  });
 }

 router.post('/view_data_record_farm_mach',function(req,res){
    console.log("FARM MACHINERY EDIT DATA POPULATE");
    var divtype="VIEW";


    //Bank Branch details-start//
var farmmachinery_id= req.body.farmmachinery_vw_id;
console.log("farm  id to view",farmmachinery_id)
pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,result2) {

            console.log("VIEWWWWWWWW", result2);
       pgdbconnect.query("select * from farm_machinery_details where fmd_n_farm_mach_id=$1",[farmmachinery_id],function(err,searchres)

            {
                console.log("searchres")
    var member_farm_id = searchres.rows[0].fmd_n_farm_mach_id;
    var memberid= searchres.rows[0].fmd_ch_member_id;
    var vehiclename = searchres.rows[0].fmd_ch_vehicle_name;
    var vehicle_reg_num =  searchres.rows[0].fmd_n_vehicle_reg_num;
    var year_of_purchase =  searchres.rows[0].fmd_ch_year_of_purchase;
    var vehicle_desc = searchres.rows[0].fmd_ch_vehicle_description;
    var purchase_value =  searchres.rows[0].fmd_ch_purchase_value;
    var market_value =  searchres.rows[0].fmd_n_market_value;


    res.render('memberModule/member_farm_machinery',{
        member_farm_id:member_farm_id,
        memberid:memberid,
        vehiclename:vehiclename,
        vehicle_reg_num:vehicle_reg_num,
        year_of_purchase:year_of_purchase,
        vehicle_desc:vehicle_desc,
        purchase_value:purchase_value,
        market_value:market_value,
        pagetype:"VIEW",
        memberdetails:result2.rows
    });
});

 });
    });


router.post('/delete_data_record_farm_mach',delete_data_record_farm_mach)
 function delete_data_record_farm_mach(req,res){

var member_farm_id=req.body.farmmachinery_dl_id;

 pgdbconnect.query("UPDATE farm_machinery_details SET fmd_ch_del_flg='Y' WHERE fmd_n_farm_mach_id=$1 ",[member_farm_id],function(err,farmmachupdate){

    if (err) throw err;
    console.log("FARM MACHINERY UPDATED RESULT",farmmachupdate)

   pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id",function(err,memberdetails){

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_del_flg='N' order by fmd_n_farm_mach_id",function(err,farmmachinerydetails){
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
   res.render('memberModule/member_farm_machinery_search',{
    memberdetails:memberdetails.rows,
    memfarmdetails: farmmachinerydetails.rows

});
   });
});
 });

}


router.post('/mem_farm_search1',function(req,res){
var farm_mch_id=req.body.mem_sel;
var vehiclename=req.body.vehiclename1;
console.log("Seacrh 222",farm_mch_id,vehiclename)
     pgdbconnect.query("select * from member_details where md_ch_del_flg='N' order by md_ch_member_id ",function(err,result2) {

         pgdbconnect.query("select * from farm_machinery_details where fmd_ch_member_id=$1 and fmd_ch_vehicle_name=$2 and fmd_ch_del_flg='N'",[farm_mch_id,vehiclename],function(err,result3) {
   res.render('memberModule/member_farm_machinery_search',{
 memberdetails:result2.rows,
 memfarmdetails:result3.rows
   });
     });
     });
});
/* Farm machinery-end*/



/*Member Dividend -START*/

router.post('/edit_data_record',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//

var memid= req.body.tempmemberid;
// var memid1= req.body.tempmemberid;

console.log("member id to edit",memid)


            //console.log("Result of Branch", result5);
            pgdbconnect.query("select * from member_dividend where md_n_member_dividend_id=$1",[memid],function(err,searchres)

            {

                pgdbconnect.query("select * from member_details ",function(err,memres){

                console.log("searchres")
    var member_div_id = searchres.rows[0].md_n_member_dividend_id;
    var member_id=searchres.rows[0].md_ch_member_id;
    var shares = searchres.rows[0].md_n_num_shares;
    var share_fee =  searchres.rows[0].md_n_share_fee;
    var divpay =  searchres.rows[0].md_n_dividend_payable;

    var totdivpay = searchres.rows[0].md_n_tot_dividend_payable;
    var finacialyear =  searchres.rows[0].md_ch_financial_year;
    var shareinclude =  searchres.rows[0].md_n_num_shares_included;
    var sharecapital=  searchres.rows[0].md_n_share_capital;

    var divarr =  searchres.rows[0].md_n_dividend_arrears;
    var income =  searchres.rows[0].md_n_others_income;
    var finalamt =  searchres.rows[0].md_n_final_amt;
    var folio =  searchres.rows[0].md_n_folio_num;
    var date =  searchres.rows[0].md_d_date;


    req.flash('success_msg', 'Data can be Editable');
res.locals.message=req.flash();





                res.render('memberModule/member_dividend',{

        //bankdetails:searchbrres.rows,
        member_div_id:member_div_id,
        shares:shares,
        share_fee:share_fee,
        divpay:divpay,

        totdivpay:totdivpay,
        finacialyear:finacialyear,
        shareinclude:shareinclude,
        sharecapital:sharecapital,

        divarr:divarr,
        income:income,
        finalamt:finalamt,
        folio:folio,
        date:date,

        pagetype:"EDIT",
        Dividendres:memres.rows,
        member_id:member_id

                });

    });
});


 });

 router.post('/viewdata_record',function(req,res){

    var divtype="VIEW";
    console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//
var memid= req.body.tempmemberid1;
console.log("member id to edit",memid)


pgdbconnect.query("select * from member_dividend where md_n_member_dividend_id=$1",[memid],function(err,searchres)

{
    console.log("searchres")
var member_id = searchres.rows[0].md_n_member_dividend_id;
var member_id1c=searchres.rows[0].md_ch_member_id;
var shares = searchres.rows[0].md_n_num_shares;
var share_fee =  searchres.rows[0].md_n_share_fee;
var divpay =  searchres.rows[0].md_n_dividend_payable;

var totdivpay = searchres.rows[0].md_n_tot_dividend_payable;
var finacialyear =  searchres.rows[0].md_ch_financial_year;
var shareinclude =  searchres.rows[0].md_n_num_shares_included;
var sharecapital=  searchres.rows[0].md_n_share_capital;

var divarr =  searchres.rows[0].md_n_dividend_arrears;
var income =  searchres.rows[0].md_n_others_income;
var finalamt =  searchres.rows[0].md_n_final_amt;
var folio =  searchres.rows[0].md_n_folio_num;
var date =  searchres.rows[0].md_d_date;

console.log("data to edit",member_id,shares,share_fee,divpay,totdivpay);


req.flash('success_msg', 'Data viewing successfully');
res.locals.message=req.flash();
    res.render('memberModule/member_dividend',{

//bankdetails:searchbrres.rows,
member_id:member_id,
shares:shares,
share_fee:share_fee,
divpay:divpay,
member_id1c:member_id1c,

totdivpay:totdivpay,
finacialyear:finacialyear,
shareinclude:shareinclude,
sharecapital:sharecapital,

divarr:divarr,
income:income,
finalamt:finalamt,
folio:folio,
date:date,

pagetype:"VIEW",


});
});


});



router.post('/delete_member_dividend_record',function(req,res){



    var memid= req.body.tempmemberid2;
    console.log("id to delete",memid)
    pgdbconnect.query("update member_dividend set md_ch_del_flg=$1 where md_n_member_dividend_id=$2",['Y',memid],function(err,delres){

        console.log("deleted result",delres);
        pgdbconnect.query("select * from member_dividend where md_ch_del_flg=$1",['N'],function(err,searchres){

    //Bank Branch details-start//
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
        res.render('memberModule/member_div_search',{
            ressearch:searchres.rows

    });
});
});
});


router.get('/mem_div_search',mem_div_search)
function mem_div_search(req,res){
    console.log("MEMBER DIVIDEND SEARCH")


     pgdbconnect.query("select * from member_dividend where md_ch_del_flg='N' ",function(err,ressearch){

         if(err)
         {
            console.log("result1 is", ressearch);
         }
else
{

    var ressearch = ressearch.rows;
}
    res.render('memberModule/member_div_search',{
        ressearch:ressearch

    });
});
}



router.post('/mem_dividend_searcher',mem_dividend_searcher)
    function mem_dividend_searcher(req,res)
    {
    console.log("MEMBER SEARCHing");
    var mid=req.body.opn_shr_bal;
    var fyear=req.body.opn_shr_bal1
    console.log('midpppppp',mid);

 console.log('fyear',fyear);

    pgdbconnect.query("select * from member_dividend where md_ch_member_id=$1 and md_ch_financial_year=$2 and md_ch_del_flg=$3",[mid,fyear,'N'],function(err,ressearch1){



        console.log("search result",ressearch1.rows)
        if(err)
        {
           console.log("Error with table query", err);
        }

        else
        {

            res.render('memberModule/member_div_search',{
                ressearch:ressearch1.rows,


            });

        }
     });

    }


router.get('/mem_div',mem_div)
function mem_div(req,res){

var divtype=req.query.key;
    console.log("page type on member module",divtype)
 pgdbconnect.query("select * from member_details",function(err,Dividendres){
 if (err)
  {
             console.error('Error with table query', err);
 }
 else
 {
             var Dividendres = Dividendres.rows;
 }


    res.render('memberModule/member_dividend',
    {
pagetype:"ADD",
    Dividendres:Dividendres
  });
});
}




 router.post('/mem_div_insert',mem_div_insert)
 function mem_div_insert(req,res){

   var mid=req.body.div_sel;
   var mid1=req.body.opn_shr_bal;
   var share=req.body.ent_fee1;
   var sharesinclude=req.body.no_f_shr_inc;
   var sharefree=req.body.ent_fee2;
   var sharecapital=req.body.opn_shr_bal1;
   var dividendamount=req.body.ent_fee3;
   var DividendArrears=req.body.opn_shr_bal2;
   var DividendPayable=req.body.ent_fee4;
   var OtherIncome=req.body.opn_shr_bal3;
 //var TotalDiviodend=req.body.ent_fee;
   var FinalAmount=req.body.opn_shr_bal4;

console.log('shares',share);
console.log('sharesinclude',sharesinclude);
console.log('sharesinclude',sharesinclude);
console.log('sharefree',sharefree);
console.log('sharecapital',sharecapital);
console.log('dividendamount',dividendamount);
console.log('DividendArrears',DividendArrears);
console.log('DividendPayable',DividendPayable);
console.log('FinalAmount',FinalAmount);
var memberdivid;
pgdbconnect.query("select * from member_dividend",function(err,result) {
    if(result.rowCount==0){
        memberdivid=1;

        pgdbconnect.query("insert into member_dividend(md_n_member_dividend_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included, md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
            if (err)
            {
                       console.error('Error with table query', err);
           }
           else
         {

           req.flash('success_msg', 'Data inserted successfully');
           res.locals.message=req.flash();

           pgdbconnect.query("select * from member_details",function(err,Dividendres2){
           res.render('memberModule/member_dividend',{
            Dividendres:Dividendres2.rows,
            pagetype:"ADD"
        });
           });
         }
        });
    }

    else{

        pgdbconnect.query("select max(md_n_member_dividend_id) from member_dividend",function(err,result) {
            console.log("max value check",result)
            console.log("max value check",result.rows[0].max)

            memberdivid=parseInt(result.rows[0].max)+1;
            console.log("when more rows exxxists",memberdivid)



  pgdbconnect.query("insert into member_dividend(md_n_member_dividend_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included, md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
    if (err)
    {
               console.error('Error with table query', err);
   }
   else
 {
   // res.redirect('/memberDetailsModule/memberDetails/mem_div');
   //flash messege
   req.flash('success_msg', 'Data inserted successfully');
   res.locals.message=req.flash();

   pgdbconnect.query("select * from member_details",function(err,Dividendres3){
   res.render('memberModule/member_dividend',{
    Dividendres:Dividendres3.rows,
    pagetype:"ADD"
});
   });
}
});

});

    }
 });
}

//insert editing data
/////////////////////////////////////////////////////////////////////////352///

router.post('/member_editing',member_editing)
 function member_editing(req,res){
var memdivid=req.body.memdivid_edit;
   var mid=req.body.opn_shr_bal_vw;
   var fyear=req.body.opn_shr_bal_ed11;
   var share=req.body.ent_fee_ed;
   var sharesinclude=req.body.opn_shr_bal_ed;
   var sharefree=req.body.ent_fee_ed1;
   var sharecapital=req.body.opn_shr_bal_ed1;
   var dividendamount=req.body.ent_fee_ed2;
   var DividendArrears=req.body.opn_shr_bal_ed2;
   var DividendPayable=req.body.ent_fee_ed3;
   var OtherIncome=req.body.opn_shr_bal_ed3;
//   var TotalDiviodend=req.body.ent_fee_ed4;
   var FinalAmount=req.body.opn_shr_bal_ed4;

console.log('middd',mid);
console.log('fyear',fyear);
console.log('sharesinclude',sharesinclude);
console.log("mem div id",memdivid)
pgdbconnect.query("update member_dividend set md_ch_financial_year=$1,md_n_num_shares=$2,md_n_num_shares_included=$3,md_n_share_fee=$4,md_n_share_capital=$5,md_n_dividend_payable=$6,md_n_dividend_arrears=$7,md_n_tot_dividend_payable=$8,md_n_final_amt=$9,md_n_others_income=$10 where md_n_member_dividend_id=$11",[fyear,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,memdivid],function(err,Dividendedit){

    if (err)
    {
               console.error('Error with table query', err);
   }
   else
 {
   // res.redirect('/memberDetailsModule/memberDetails/mem_div');
   //flash messege
//    req.flash('success_msg', 'Data inserted successfully');
//    res.locals.message=req.flash();

   pgdbconnect.query("select * from member_dividend where md_ch_del_flg='N'",function(err,Dividendupdate){
//     req.flash('success_msg', 'Data inserted successfully');
//     res.locals.message=req.flash();
//    res.render('memberModule/member_div_dividend',{
//     // Dividendupdate:Dividendupdate.rows,
//     //  pagetype:"EDIT"

req.flash('success_msg', 'Record updated successfully');
res.locals.message=req.flash();
    res.render('memberModule/member_div_search',{
        ressearch:Dividendupdate.rows
 });
   });
 }

});
 }

/*Member Dividend -END*/


router.get('/kcc',function(req,res){
   res.render('memberModule/member_kcc_add');
});
router.get('/kcc_search',function(req,res){
   res.render('memberModule/member_kcc_search');
});


module.exports = router;