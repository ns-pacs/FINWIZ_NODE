var express = require('express');
var router = express.Router();
var pgdbconnect=require('../database/pgdbconnect');
var moment=require('moment');
const upload=require("express-fileupload");
router.use(upload())

router.post('/logintemp',function(req,res){
   res.render('memberModule/memberAddDetails');
});

/* Member Details -START*/
router.post('/check_memberid_existence',function(req,res){
    var memid=req.body.memid;
    console.log("member id existence check",memid)
        pgdbconnect.query("select * from member_details where md_ch_member_id=$1",[memid],function(err,result){ 
if(err) throw err;
console.log("result on memid existence",result)
res.json(result.rowCount)
});
});

router.post('/mem_details_add',function(req,res){
    console.log("Hii hellooooooooooooo");

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

    var filename_photo= req.files.uploadDoc_photograph.name;
    var  filename_sign= req.files.uploadDoc_signature.name ;                 
    console.log("filenames",filename_photo,filename_sign)
    
    console.log("Member Details",mem_typ,mem_id,emp_code,doj,dob,dor,adm_no,dept,ent_fee,crncytyp,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,remarks);


   console.log("check1",req.files)
     if(req.files){
         console.log("check1",req.files)
         var file=req.files.uploadDoc_signature,
        
         uploadDoc_signature=file.name;
         console.log("check2",file)
         file.mv("D:/PACS_WS/PACS_DEMO/public/uploads/signature/"+uploadDoc_signature,function(err){
             console.log("moving file")
        if(err){
            console.log("error on file mv",err)
           // res.send("error occured")
        }
        else{
            console.log("done")
        }
    })
}

console.log("Hii");
console.log("check3",req.files)
 if(req.files){
     console.log("check3",req.files)
     var file=req.files.uploadDoc_photograph,
    
     uploadDoc_photograph=file.name;
     console.log("check4",file)
     file.mv("D:/PACS_WS/PACS_DEMO/public/uploads/photograph/"+uploadDoc_photograph,function(err){
         console.log("moving file")
    if(err){
        console.log("error on file mv",err)
       // res.send("error occured")
    }
    else{
        console.log("done")
    }
})
}
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
     if(spouse=='Single' || spouse=='Divorced'){
        var sgender = null;}
        else{
            var sgender = req.body.sgender;
        }
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
    var city = JSON.parse(req.body.city).city;
    console.log(city);
    var state = req.body.state;
    var country = req.body.country;
    var pincode = req.body.pincode;
    var rsm = req.body.rsm;
    var rsy = req.body.rsy;

    console.log("Present Address",add_type,add_line,village,city,state,country,panchayat,pincode,rsm,rsy);

    //Present address-end//

    ///////////////////////////////////////////////////////////////////////////////////////

    //Permanent address-start//

    var myCheck = req.body.myCheck;
    var address_line = req.body.address_line;
    var vilg = req.body.vilg;
    var panc = req.body.panc;
    var citie = JSON.parse(req.body.citie).city;
    console.log(citie)
    var stat = req.body.stat;
    var ctry = req.body.ctry;
    var picd = req.body.picd;
    var mnth = req.body.mnth;
    var year = req.body.year;

    console.log("Permanent Address",myCheck,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year);

    //Permanent address-end//

    /////////////////////////////////////////////////////////////////////////////////////////////

    //Loans - start//

    var e_month = req.body.e_month;
    var loan_amt = req.body.loan_amt;
    var amt_used;

    console.log("Loans",e_month,loan_amt,amt_used);

    if(req.body.amt_used!=''){
        console.log("loan amnt filled",req.body.amt_used);
        amt_used = req.body.amt_used;
    }
    else if(req.body.amt_used==''){
        amt_used=null;
    }



    //Loans - end//

    //////////////////////////////////////////////////////////////////////////////////////////////

    //Nominee - start//

    var nominee_type = req.body.nominee_type;                                     
    var fst_name = req.body.fst_name;                                
    var mid_name = req.body.mid_name;                                
    var lst_name = req.body.lst_name;                                
    var fath_name = req.body.fath_name;                                
    var relation = req.body.relation;                                 
    var gen = req.body.gen_nom;                                 
    var occup = req.body.occup;                                  
    var date_ob = req.body.date_ob;                                
    var ac_num = req.body.ac_num;                                 
    var addr_type = req.body.addr_type;                                 
    var addr_line = req.body.addr_line;                                 
    var vilge = req.body.vilge;                                
    var panch = req.body.panch;                                
    var distcity = JSON.parse(req.body.distcity).city;
    console.log(distcity);                            
    var stat1 = req.body.stat1;                                
    var countr = req.body.countr;                                
    var pin_cd = req.body.pin_cd;                                
    var phone_no = req.body.phone_no;                                
    var email = req.body.email;                                
    var adh_no = req.body.adh_no;                                
    var ism = req.body.ism;                                
    
    console.log("Nominee Address",nominee_type,fst_name,mid_name,lst_name,fath_name,relation,gen,occup,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,stat1,countr,pin_cd,phone_no,email,adh_no,ism);
    
    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
       // console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;                 
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

    


    /*country*/

    // var country = req.body.country;                 
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
       // console.log("result3 is", result3);


    //Nominee - end//

    /////////////////////////////////////////////////////////////////////////////////////
    console.log("Personal Details",mem_id,title,fname,mname,lname,selectedop,dob,pob,ph_no,email_id,father_name,mar_status,spouse,sgender,fam_members,dept_no,high_edu)
    console.log("Personal Details",religion,caste,occupation,adhar_no,pan_id,voter_id,ration_no,resd_status,cust_category,cust_type)
    console.log("Personal Details",buss_segment,mem_comm,guardian,under_poverty,minority,land_owner,shg_no,kcc,s_mem,s_staf,acc_holder,add_type,add_line,village,panchayat,city,state,country,pincode,rsm,rsy,myCheck,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year,'N',filename_photo,filename_sign)

    pgdbconnect.query("insert into member_details ( md_ch_member_id, md_ch_member_type_code, md_d_doj, md_d_dor, md_ch_admission_number, md_ch_department, md_n_fee_amt, md_n_opening_share_balance, md_ch_counter_pay, md_n_thrift_deposit, md_ch_dras, md_ch_bank_account_number, md_n_opening_balance, md_n_closing_balance, md_ch_del_flg,md_n_employee_code,md_ch_entrance_fee_cur,md_ch_remarks) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)",[mem_id,mem_typ,doj,dor,adm_no,dept,ent_fee,shr_bal,cntr_pay,thrift_dept,dras,bnk_acc_no,opn_bal,cls_bal,'N',emp_code,crncytyp,remarks],function(err,loginres){
    if(err) throw err;
    console.log("Result of Member Details",loginres);

        pgdbconnect.query("insert into member_personal_details (mpd_ch_member_id, mpd_ch_title, mpd_ch_first_name, mpd_ch_middle_name, mpd_ch_last_name, mpd_ch_gender, mpd_d_dob, mpd_ch_pob, mpd_n_phone_number, mpd_ch_emailid, mpd_ch_father_name, mpd_ch_marital_status, mpd_ch_spouse_name, mpd_ch_spouse_gender, mpd_n_total_family_members, mpd_n_no_of_dependents, mpd_ch_higher_qualification, mpd_ch_religion, mpd_ch_caste, mpd_ch_occupation, mpd_n_aadhar_card_number, mpd_n_pan_card_number, mpd_n_voterid, mpd_n_ration_card_number, mpd_ch_residential_status, mpd_ch_customer_category, mpd_ch_customer_type, mpd_ch_business_segment, mpd_ch_member_community, mpd_ch_guardian, mpd_ch_under_poverty, mpd_ch_minority, mpd_ch_land_owned_by, mpd_ch_shg_member, mpd_ch_kcc_holdercharacter, mpd_ch_is_society_member, mpd_ch_is_society_staff, mpd_ch_is_account_holder, mpd_ch_address_type1, mpd_ch_address_line1, mpd_ch_village1, mpd_ch_panchayat1, mpd_ch_city1, mpd_ch_state1, mpd_ch_country1, mpd_n_pincode1, mpd_ch_residing_since_month1, mpd_ch_residing_since_year1, mpd_ch_address_type2, mpd_ch_address_line2, mpd_ch_village2, mpd_ch_panchayat2, mpd_ch_city2, mpd_ch_state2, mpd_ch_country2, mpd_n_pincode2, mpd_ch_residing_since_month2, mpd_ch_residing_since_year2, mpd_ch_del_flg,photo_file_doc_name,signature_file_doc_name) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61)",[mem_id,title,fname,mname,lname,selectedop,dob,pob,ph_no,email_id,father_name,mar_status,spouse,sgender,fam_members,dept_no,high_edu,religion,caste,occupation,adhar_no,pan_id,voter_id,ration_no,resd_status,cust_category,cust_type,buss_segment,mem_comm,guardian,under_poverty,minority,land_owner,shg_no,kcc,s_mem,s_staf,acc_holder,add_type,add_line,village,panchayat,city,state,country,pincode,rsm,rsy,myCheck,address_line,vilg,panc,citie,stat,ctry,picd,mnth,year,'N',filename_photo,filename_sign],function(err,loginres1){
        if(err) throw err;
        console.log("Result of Personal Details",loginres1);

            pgdbconnect.query("insert into member_loan_details ( mld_ch_member_id, mld_ch_eligible_for_loan, mld_n_total_eligible_loan_amount, mld_n_total_amount_used, mld_n_employee_code,mld_ch_del_flg) values ($1,$2,$3,$4,$5,$6)",[mem_id,e_month,loan_amt,amt_used,emp_code,'N'],function(err,resu){
            if(err) throw err;
            console.log("Result of Loan Details",resu);

                pgdbconnect.query("insert into member_nominee_details ( mnd_ch_member_id, mnd_ch_title, mnd_ch_first_name, mnd_ch_middle_name, mnd_ch_last_name, mnd_ch_father_name, mnd_ch_relation, mnd_ch_gender, mnd_d_dob, mnd_n_account_num, mnd_ch_address_type, mnd_ch_address_line, mnd_ch_village, mnd_ch_panchayat, mnd_ch_city, mnd_ch_states, mnd_ch_country, mnd_n_pincode, mnd_n_phone_number, mnd_ch_emailid, mnd_ch_aadhar_card_number, mnd_ch_del_flg, mnd_ch_is_society_member,mnd_ch_occupation) values  ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24)",[mem_id,nominee_type,fst_name,mid_name,lst_name,fath_name,relation,gen,date_ob,ac_num,addr_type,addr_line,vilge,panch,distcity,state,countr,pin_cd,phone_no,email,adh_no,'N',ism,occup],function(err,resul){
                if(err) throw err;
                console.log("Result of Nominee Details",resul);


    

    req.flash('success_msg',"Member Details Added succesfully for "+ fname +"");
                   res.locals.message=req.flash();

    res.render('memberModule/memberAddDetails',{
        cities:result1.rows,
        states:result2.rows,
        countries:result3.rows,
	pagetype:'ADD'
    });
});
 });
                });
            });
        
router.get('/memberdetails_edit',function(req,res){
    var divtype=req.query.key;



console.log("DIV TYPE",divtype);
     
pgdbconnect.query("select * from member_details",function(err,membres1){
    if(err) throw err;

    pgdbconnect.query("select * from member_personal_details",function(err,membres2){
        if(err) throw err;

        pgdbconnect.query("select * from member_loan_details",function(err,membres3){
            if(err) throw err;

            pgdbconnect.query("select * from member_nominee_details",function(err,membres4){
                if(err) throw err;
    

     res.render('memberModule/memberAddDetails',{
       
        pagetype:divtype,
        memberdetails:membres1.rows,
        memberdetails2:membres2.rows,
        memberdetails3:membres3.rows,
        memberdetails4:membres4.rows
    });
});
});
})
});
});
    });
});
});
});

router.get('/memberdetails',function(req,res){
     var divtype=req.query.key;

    console.log("DIV TYPE",divtype);
   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
       console.log("result1 is", result1);

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
   {
       if(err) throw err;
       console.log("result2 is", result2);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
   {
       if(err) throw err;
       console.log("result3 is", result3);

      // req.flash('success_msg',"Data inserted successfully");
                   //res.locals.message=req.flash();

       res.render('memberModule/memberAddDetails',{
       cities:result1.rows,
        states:result2.rows,
        countries:result3.rows,
         pagetype:divtype
   });
   });
   });
});
});

router.post('/member_edit_data_populate',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

  var memberid= req.body.tempmemberid;
  console.log("member id to edit",memberid)

  pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
       // console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;                 
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

    /*country*/

    // var country = req.body.country;                 
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
       // console.log("result3 is", result3);

  pgdbconnect.query("select * from member_details where md_ch_member_id=$1 order by md_ch_member_id",[memberid],function(err,membsearch)
   {
    console.log("memssssssssss",membsearch)
  
    var   edit_mem_typ = membsearch.rows[0].md_ch_member_type_code;
    var   edit_mem_id = membsearch.rows[0].md_ch_member_id;
    var   edit_emp_code =membsearch.rows[0].md_n_employee_code;
    var   edit_doj = membsearch.rows[0].md_d_doj;
    var   edit_dor = membsearch.rows[0].md_d_dor;
    var   edit_adm_no = membsearch.rows[0].md_ch_admission_number;
    var   edit_dept = membsearch.rows[0].md_ch_department;
    var   edit_ent_fee = membsearch.rows[0].md_n_fee_amt;
    var   edit_shr_bal = membsearch.rows[0].md_n_opening_share_balance;
    var   edit_crncytyp = membsearch.rows[0].md_ch_entrance_fee_cur;
    var   edit_cntr_pay = membsearch.rows[0].md_ch_counter_pay;
    console.log("member edit_cntr_pay on populate",edit_cntr_pay)

    var   edit_thrift_dept = membsearch.rows[0].md_n_thrift_deposit;
    var   edit_dras = membsearch.rows[0].md_ch_dras;
    var   edit_bnk_acc_no = membsearch.rows[0].md_ch_bank_account_number;
    var   edit_opn_bal = membsearch.rows[0].md_n_opening_balance;
    var   edit_cls_bal = membsearch.rows[0].md_n_closing_balance;
    var   edit_remarks = membsearch.rows[0].md_ch_remarks;
   
  

    console.log("data of member",edit_mem_typ,edit_mem_id,edit_emp_code,edit_doj,edit_dor,edit_adm_no,edit_dept,edit_ent_fee,edit_shr_bal,edit_cntr_pay,edit_thrift_dept,edit_dras,edit_bnk_acc_no,edit_opn_bal,edit_cls_bal,edit_remarks)


    pgdbconnect.query("select * from member_personal_details where mpd_ch_member_id=$1 order by mpd_ch_member_id",[memberid],function(err,membsearch)
    {
     console.log("membersearch",membsearch)

    var edit_memp_id = membsearch.rows[0].mpd_ch_member_id;
    var edit_title = membsearch.rows[0].mpd_ch_title;
    var edit_fname = membsearch.rows[0].mpd_ch_first_name;
    var edit_mname = membsearch.rows[0].mpd_ch_middle_name;
    var edit_lname = membsearch.rows[0].mpd_ch_last_name;
    var edit_father_name = membsearch.rows[0].mpd_ch_father_name;
    var edit_spouse = membsearch.rows[0].mpd_ch_spouse_name;
    var edit_selectedop = membsearch.rows[0].mpd_ch_gender;
    console.log("member gender on populate",edit_selectedop)
    var edit_sgender = membsearch.rows[0].mpd_ch_spouse_gender;
    console.log("member gender on populate",edit_sgender)
    var edit_pob = membsearch.rows[0].mpd_ch_pob;
    var edit_mar_status = membsearch.rows[0].mpd_ch_marital_status;
    var edit_religion = membsearch.rows[0].mpd_ch_religion;
    var edit_caste = membsearch.rows[0].mpd_ch_caste;
    var edit_occupation = membsearch.rows[0].mpd_ch_occupation;
    var edit_cust_category = membsearch.rows[0].mpd_ch_customer_category;
    var edit_cust_type = membsearch.rows[0].mpd_ch_customer_type;
    var edit_buss_segment = membsearch.rows[0].mpd_ch_business_segment;
    var edit_mem_comm = membsearch.rows[0].mpd_ch_member_community;
    var edit_guardian = membsearch.rows[0].mpd_ch_guardian;
    var edit_ph_no = membsearch.rows[0].mpd_n_phone_number;
    var edit_email_id = membsearch.rows[0].mpd_ch_emailid;
    var edit_adhar_no = membsearch.rows[0].mpd_n_aadhar_card_number;
    var edit_ration_no = membsearch.rows[0].mpd_n_ration_card_number;
    var edit_voter_id = membsearch.rows[0].mpd_n_voterid;
    var edit_pan_id = membsearch.rows[0].mpd_n_pan_card_number;
    var edit_under_poverty = membsearch.rows[0].mpd_ch_under_poverty;
    var edit_fam_members = membsearch.rows[0].mpd_n_total_family_members;
    var edit_dept_no = membsearch.rows[0].mpd_n_no_of_dependents;
    var edit_minority = membsearch.rows[0].mpd_ch_minority;
    var edit_minority1 = membsearch.rows[0].mpd_ch_religion;
    var edit_land_owner = membsearch.rows[0].mpd_ch_land_owned_by;
    var edit_resd_status = membsearch.rows[0].mpd_ch_residential_status;
    var edit_shg_no = membsearch.rows[0].mpd_ch_shg_member;
    var edit_kcc = membsearch.rows[0].mpd_ch_kcc_holdercharacter;
    var edit_s_mem = membsearch.rows[0].mpd_ch_is_society_member;
    var edit_s_staf = membsearch.rows[0].mpd_ch_is_society_staff;
    var edit_acc_holder = membsearch.rows[0].mpd_ch_is_account_holder;
    var edit_high_edu = membsearch.rows[0].mpd_ch_higher_qualification;
    var edit_signature = membsearch.rows[0].signature_file_doc_name;
    var edit_photo = membsearch.rows[0].photo_file_doc_name;
    console.log("file names on populating",edit_signature,edit_photo)
    var edit_dob = membsearch.rows[0].mpd_d_dob;



    var edit_add_type = membsearch.rows[0].mpd_ch_address_type1;
    var edit_add_line = membsearch.rows[0].mpd_ch_address_line1;
    var edit_village = membsearch.rows[0].mpd_ch_village1;  
    var edit_panchayat = membsearch.rows[0].mpd_ch_panchayat1;
    var edit_city = membsearch.rows[0].mpd_ch_city1;
    var edit_state = membsearch.rows[0]. mpd_ch_state1;
    var edit_country = membsearch.rows[0].mpd_ch_country1;  
    var edit_pincode = membsearch.rows[0].mpd_n_pincode1;
    var edit_rsm = membsearch.rows[0].mpd_ch_residing_since_month1; 
    var edit_rsy = membsearch.rows[0].mpd_ch_residing_since_year1;

    // var myCheck = req.body.myCheck;
    var edit_address_line = membsearch.rows[0].mpd_ch_address_line2;
    var edit_vilg = membsearch.rows[0].mpd_ch_village2;
    var edit_panc = membsearch.rows[0].mpd_ch_panchayat2;
    var edit_citie = membsearch.rows[0].mpd_ch_city2;
    var edit_stat = membsearch.rows[0].mpd_ch_state2;
    var edit_ctry = membsearch.rows[0].mpd_ch_country2;
    var edit_picd = membsearch.rows[0].mpd_n_pincode2;
    var edit_mnth = membsearch.rows[0].mpd_ch_residing_since_month2; 
    var edit_year = membsearch.rows[0].mpd_ch_residing_since_year2;

    pgdbconnect.query("select * from member_loan_details where mld_ch_member_id=$1 order by mld_ch_member_id",[memberid],function(err,membsearch)
    {
     console.log("lucky",membsearch.rows)
     var edit_mld = membsearch.rows[0].mld_ch_member_id;
     var edit_e_month = membsearch.rows[0].mld_ch_eligible_for_loan;
     console.log("shivu",edit_e_month)
     var edit_loan_amt = membsearch.rows[0].mld_n_total_eligible_loan_amount;
     var edit_amt_used = membsearch.rows[0].mld_n_total_amount_used;
 
     console.log("Loans", edit_mld,edit_e_month,edit_loan_amt,edit_amt_used);

     pgdbconnect.query("select * from member_nominee_details where mnd_ch_member_id=$1 order by mnd_ch_member_id",[memberid],function(err,membsearch)
     {
      console.log("membersearch",membsearch)

      var  edit_mnd_ch_member_id = membsearch.rows[0]. mnd_ch_member_id; 
      var  edit_nominee_type =  membsearch.rows[0]. mnd_ch_title;                       
      var  edit_fst_name =  membsearch.rows[0].mnd_ch_first_name;                            
      var  edit_mid_name =  membsearch.rows[0].mnd_ch_middle_name;                            
      var  edit_lst_name =  membsearch.rows[0].mnd_ch_last_name;                           
      var  edit_fath_name =  membsearch.rows[0].mnd_ch_father_name;                               
      var  edit_rel =  membsearch.rows[0].mnd_ch_relation;                              
      var  edit_gen = membsearch.rows[0]. mnd_ch_gender;                               
      var  edit_occup =  membsearch.rows[0].mnd_ch_occupation;                                
      var  edit_date_ob =  membsearch.rows[0].  mnd_d_dob;                             
      var  edit_ac_num =  membsearch.rows[0]. mnd_n_account_num;                                
      var  edit_addr_type =  membsearch.rows[0]. mnd_ch_address_type;                                
      var  edit_addr_line =  membsearch.rows[0]. mnd_ch_address_line;                              
      var  edit_vilge =  membsearch.rows[0]. mnd_ch_village;                    
      var  edit_panch =  membsearch.rows[0].mnd_ch_panchayat;                 
      var  edit_distcity =  membsearch.rows[0].  mnd_ch_city;                 
      var  edit_stat1 =  membsearch.rows[0]. mnd_ch_states;                            
      var  edit_countr =  membsearch.rows[0]. mnd_ch_country;                       
      var  edit_pin_cd =  membsearch.rows[0]. mnd_n_pincode;                          
      var  edit_phone_no =  membsearch.rows[0]. mnd_n_phone_number;                              
      var  edit_email =  membsearch.rows[0]. mnd_ch_emailid;                       
      var  edit_adh_no =  membsearch.rows[0].  mnd_ch_aadhar_card_number;                             
      var  edit_ism =  membsearch.rows[0].mnd_ch_is_society_member;


    res.render('memberModule/memberAddDetails',{

        cities:result1.rows,
        states:result2.rows,
        countries:result3.rows,

        edit_mem_typ:edit_mem_typ,
        edit_mem_id:edit_mem_id,
        edit_emp_code:edit_emp_code,
        edit_doj:edit_doj,
        edit_dor:edit_dor,
        edit_adm_no:edit_adm_no,
        edit_dept:edit_dept,
        edit_ent_fee:edit_ent_fee,
        edit_crncytyp:edit_crncytyp,
        edit_shr_bal:edit_shr_bal,
        edit_cntr_pay:edit_cntr_pay,
        edit_thrift_dept:edit_thrift_dept,
        edit_dras:edit_dras,
        edit_bnk_acc_no:edit_bnk_acc_no,
        edit_opn_bal:edit_opn_bal,
        edit_cls_bal:edit_cls_bal,
        edit_remarks:edit_remarks,

         edit_memp_id:edit_memp_id,   
         edit_title:edit_title,
         edit_fname:edit_fname,
         edit_mname : edit_mname,
         edit_lname :edit_lname,
         edit_father_name :edit_father_name,
         edit_spouse :edit_spouse,
         edit_selectedop : edit_selectedop,
         edit_sgender :edit_sgender,
         edit_pob:edit_pob,
         edit_mar_status :edit_mar_status,
         edit_religion :edit_religion,
         edit_caste :edit_caste,
         edit_occupation :edit_occupation,
         edit_cust_category :edit_cust_category,
         edit_cust_type :edit_cust_type,
         edit_buss_segment :edit_buss_segment,
         edit_mem_comm :edit_mem_comm,
         edit_guardian :edit_guardian,
         edit_ph_no:edit_ph_no,
         edit_email_id  :edit_email_id,
         edit_adhar_no :edit_adhar_no,
         edit_ration_no :edit_ration_no,
         edit_voter_id :edit_voter_id,
         edit_pan_id :edit_pan_id,
         edit_under_poverty :edit_under_poverty,
         edit_fam_members :edit_fam_members,
         edit_dept_no :edit_dept_no,
         edit_minority :edit_minority,
         edit_minority1: edit_minority1,
         edit_land_owner :edit_land_owner,
         edit_resd_status :edit_resd_status,
         edit_shg_no:edit_shg_no,
         edit_kcc :edit_kcc,
         edit_s_mem :edit_s_mem,
         edit_s_staf :edit_s_staf,
         edit_acc_holder :edit_acc_holder,
         edit_high_edu:edit_high_edu,
         edit_signature:edit_signature,
         edit_photo:edit_photo,
         edit_dob :edit_dob,

        
     edit_add_type:edit_add_type,
     edit_add_line:edit_add_line,
     edit_village :edit_village,
     edit_panchayat :edit_panchayat,
     edit_city:edit_city,
     edit_state :edit_state,
     edit_country :edit_country,
     edit_pincode :edit_pincode,
     edit_rsm :edit_rsm,
     edit_rsy :edit_rsy,

 // var myCheck = req.body.myCheck;
    edit_address_line :edit_address_line,
    edit_vilg :edit_vilg,
    edit_panc :edit_panc,
    edit_citie :edit_citie,
    edit_stat :edit_stat,
    edit_ctry :edit_ctry,
    edit_picd :edit_picd,
    edit_mnth : edit_mnth,
    edit_year :edit_year,

    edit_e_month:edit_e_month,
    edit_loan_amt:edit_loan_amt,
    edit_amt_used:edit_amt_used,

     edit_mnd_ch_member_id :edit_mnd_ch_member_id,
     edit_nominee_type :  edit_nominee_type,                
     edit_fst_name  :  edit_fst_name,            
     edit_mid_name  :  edit_mid_name ,                      
     edit_lst_name  :  edit_lst_name,                       
     edit_fath_name  : edit_fath_name ,                        
     edit_rel :   edit_rel  ,              
     edit_gen :  edit_gen ,                   
     edit_occup  :edit_occup,                          
     edit_date_ob :edit_date_ob  ,                 
     edit_ac_num :edit_ac_num  ,                
     edit_addr_type :  edit_addr_type ,                            
     edit_addr_line :  edit_addr_line ,                          
     edit_vilge  : edit_vilge,         
     edit_panch  : edit_panch,            
     edit_distcity :edit_distcity ,                
     edit_stat1   : edit_stat1,             
     edit_countr : edit_countr ,           
     edit_pin_cd : edit_pin_cd ,             
     edit_phone_no  : edit_phone_no  ,               
     edit_email: edit_email,           
     edit_adh_no  :edit_adh_no,                  
     edit_ism :  edit_ism,
     pagetype:"EDIT",
     moment:moment
    });
});
   });
});
});
});
    })
});
});

router.post('/update_member_edit',function(req,res){
    console.log("Welcome");

    /// Member Details

    var mem_typ_ed = req.body.mem_typ_ed;
    var mem_id_ed = req.body.mem_id_ed;
    var emp_code_ed = req.body.emp_code_ed;
    var doj_ed = req.body.doj_ed;
   
    var dor_ed = req.body.dor_ed;
    var adm_no_ed = req.body.adm_no_ed;
    var dept_ed = req.body.dept_ed;
    var ent_fee_ed = req.body.ent_fee_ed;
    var crncytyp_ed = req.body.crncytyp_ed;
    var shr_bal_ed = req.body.shr_bal_ed;
    var cntr_pay_ed = req.body.cntr_pay_ed;
    var thrift_dept_ed = req.body.thrift_dept_ed;
    var dras_ed = req.body.dras_ed;
    var bnk_acc_no_ed= req.body.bnk_acc_no_ed;        
    var opn_bal_ed = req.body.opn_bal_ed;
    var cls_bal_ed = req.body.cls_bal_ed;         
    var remarks_ed = req.body.remarks_ed;

    console.log("Member Details",mem_typ_ed,mem_id_ed,emp_code_ed,doj_ed,dob_id_ed,dor_ed,adm_no_ed,dept_ed,ent_fee_ed,crncytyp_ed,shr_bal_ed,cntr_pay_ed,thrift_dept_ed, dras_ed,bnk_acc_no_ed,opn_bal_ed,cls_bal_ed,remarks_ed)
  
    /// Personal Details

    var title_ed = req.body.title_ed;
    var fname_ed = req.body.fname_ed;
    var mname_ed = req.body.mname_ed;
    var lname_ed = req.body.lname_ed;
    var father_name_ed = req.body.father_name_ed;
    var mar_status_ed = req.body.mar_status_ed;
    var selectedop_ed= req.body.selectedop_ed;
    var sgender_ed = req.body.sgender_ed;
    var pob_ed = req.body.pob_ed;
    var spouse_ed = req.body.spouse_ed;
    var religion_ed = req.body.religion_ed;
    var caste_ed = req.body.caste_ed;
    var occupation_ed = req.body.occupation_ed;
    var cust_category_ed = req.body.cust_category_ed;
    var cust_type_ed = req.body.cust_type_ed;            
    var buss_segment_ed = req.body.buss_segment_ed;
    var mem_comm_ed= req.body.mem_comm_ed;
    var guardian_ed = req.body.guardian_ed;
    var ph_no_ed = req.body.ph_no_ed;
    var email_id_ed = req.body.email_id_ed;
    var adhar_no_ed = req.body.adhar_no_ed;
    var ration_no_ed = req.body.ration_no_ed;        
    var voter_id_ed = req.body.voter_id_ed;
    var pan_id_ed = req.body.pan_id_ed;
    var under_poverty_ed = req.body.under_poverty_ed;
    var fam_members_ed = req.body.fam_members_ed;
    var dept_no_ed= req.body.dept_no_ed;
    var minority_ed = req.body.minority_ed;
    var minority1_ed = req.body.minority1_ed;      
    var land_owner_ed = req.body.land_owner_ed;
    var resd_status_ed = req.body.resd_status_ed;
    var shg_no_ed = req.body.shg_no_ed;
    var kcc_ed = req.body.kcc_ed;
    var s_mem_ed = req.body.s_mem_ed;
    var s_staf_ed = req.body.s_staf_ed;
    var acc_holder_ed = req.body.acc_holder_ed;
    var high_edu_ed= req.body.high_edu_ed;
    var uploadDoc_signature_ed = req.files.uploadDoc_signature_ed.name;
    var uploadDoc_photograph_ed= req.files.uploadDoc_photograph_ed.name;
    var dob_id_ed= req.body.dob_id_ed;



 console.log("check1",req.files)
     if(req.files){
         console.log("check1",req.files)
         var file=req.files.uploadDoc_signature_ed,
        
         uploadDoc_signature_ed=file.name;
         console.log("check2",file)
         file.mv("D:/PACS_WS/PACS_DEMO/public/uploads/signature/"+uploadDoc_signature_ed,function(err){
             console.log("moving file")
        if(err){
            console.log("error on file mv",err)
           // res.send("error occured")
        }
        else{
            console.log("done")
        }
    })
}

console.log("check1",req.files)
     if(req.files){
         console.log("check1",req.files)
         var file=req.files.uploadDoc_photograph_ed,
        
         uploadDoc_photograph_ed=file.name;
         console.log("check2",file)
         file.mv("D:/PACS_WS/PACS_DEMO/public/uploads/signature/"+uploadDoc_photograph_ed,function(err){
             console.log("moving file")
        if(err){
            console.log("error on file mv",err)
           // res.send("error occured")
        }
        else{
            console.log("done")
        }
    })
}

    console.log("Personal Details",title_ed,fname_ed,mname_ed,lname_ed,father_name_ed,mar_status_ed,selectedop_ed,sgender_ed,pob_ed,spouse_ed,religion_ed,caste_ed,occupation_ed,cust_category_ed,cust_type_ed,buss_segment_ed,mem_comm_ed,guardian_ed,ph_no_ed,email_id_ed,adhar_no_ed, ration_no_ed,voter_id_ed,pan_id_ed,under_poverty_ed,fam_members_ed,dept_no_ed,minority_ed,minority1_ed,land_owner_ed,resd_status_ed,shg_no_ed,kcc_ed,s_mem_ed,s_staf_ed,acc_holder_ed,high_edu_ed,uploadDoc_signature_ed,uploadDoc_photograph_ed)
   
    // present Address

    var add_type_ed = req.body.add_type_ed;
    var add_line_ed = req.body.add_line_ed;
    var village_ed = req.body.village_ed;
    var panchayat_ed = req.body.panchayat_ed;
    var city_ed = JSON.parse(req.body.city_ed).city;
    console.log(city_ed);
    var state_ed = req.body.state_ed;
    var country_ed = req.body.country_ed;
    var pincode_ed = req.body.pincode_ed;
    var rsm_ed = req.body.rsm_ed;
    var rsy_ed= req.body.rsy_ed;

    console.log("Present Address",add_type_ed,add_line_ed,village_ed,panchayat_ed,city_ed,state_ed,country_ed,pincode_ed,rsm_ed,rsy_ed)

    // permanent Address

    var address_type_ed = req.body.address_type_ed;
    var address_line_ed = req.body.address_line_ed;
    var vilg_ed = req.body.vilg_ed;
    var panc_ed = req.body.panc_ed;
   console.log("city on editing",req.body.citie_ed)
    var citie_ed = JSON.parse(req.body.citie_ed).city;
    console.log("city on editing",citie_ed)
    var stat_ed = req.body.stat_ed;
    var ctry_ed = req.body.ctry_ed;
    var picd_ed = req.body.picd_ed;
    var mnth_ed = req.body.mnth_ed;
    var year_ed = req.body.year_ed;

    console.log("Permanent Address",address_type_ed,address_line_ed,vilg_ed,panc_ed,citie_ed,stat_ed,ctry_ed,picd_ed,mnth_ed,year_ed)

    // loan details

    var e_month_ed = req.body.e_month_ed;
    var loan_amt_ed = req.body.loan_amt_ed;
    var amt_used_ed= req.body.amt_used_ed;

    console.log("Loan Details",e_month_ed,loan_amt_ed,amt_used_ed)

    // nominee details

    var nominee_type_ed = req.body.nominee_type_ed;
    var fst_name_ed = req.body.fst_name_ed;
    var mid_name_ed = req.body.mid_name_ed;
    var lst_name_ed = req.body.lst_name_ed;
    var fath_name_ed = req.body.fath_name_ed;
    var rel_ed = req.body.rel_ed;
    var gen_nom_ed = req.body.gen_nom_ed;
    var occup_ed = req.body.occup_ed;
    var date_ob_ed = req.body.date_ob_ed;
    var ac_num_ed= req.body.ac_num_ed;
    var addr_type_ed = req.body.addr_type_ed;
    var addr_line_ed = req.body.addr_line_ed;
    var vilge_ed = req.body.vilge_ed;   
    var panch_ed = req.body.panch_ed;
    var distcity_ed = JSON.parse(req.body.distcity_ed).city;
    console.log(distcity_ed);
    var stat1_ed = req.body.stat1_ed;
    var countr_ed = req.body.countr_ed;
    var pin_cd_ed = req.body.pin_cd_ed;
    var phone_no_ed = req.body.phone_no_ed;
    var email_ed= req.body.email_ed;
    var adh_no_ed = req.body.adh_no_ed;
    var ism_ed = req.body.ism_ed;
    




   
    console.log("Nominee Details",nominee_type_ed,fst_name_ed,mid_name_ed,lst_name_ed,fath_name_ed,rel_ed,gen_nom_ed,occup_ed,date_ob_ed,ac_num_ed,addr_type_ed,addr_line_ed, vilge_ed,panch_ed,distcity_ed,stat1_ed,countr_ed,pin_cd_ed,phone_no_ed,email_ed,adh_no_ed,ism_ed)
   
   
    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
       // console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;                 
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

    /*country*/

    // var country = req.body.country;                 
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
       // console.log("result3 is", result3);


       pgdbconnect.query('update member_details set md_ch_member_type_code=$1,md_n_employee_code=$2, md_d_doj=$3, md_d_dor=$4,md_ch_admission_number=$5, md_ch_department=$6,md_n_fee_amt=$7, md_ch_entrance_fee_cur=$8, md_n_opening_share_balance=$9,md_ch_counter_pay=$10,md_n_thrift_deposit=$11, md_ch_dras=$12, md_ch_bank_account_number=$13,md_n_opening_balance=$14, md_n_closing_balance=$15, md_ch_remarks=$16 where md_ch_member_id=$17',[mem_typ_ed,emp_code_ed,doj_ed,dor_ed,adm_no_ed,dept_ed,ent_fee_ed,crncytyp_ed,shr_bal_ed,cntr_pay_ed,thrift_dept_ed, dras_ed,bnk_acc_no_ed,opn_bal_ed,cls_bal_ed,remarks_ed,mem_id_ed],function(err,memreslt1){
        if(err) throw err;
        console.log(memreslt1)
              
         pgdbconnect.query('update  member_personal_details set  mpd_ch_title=$1, mpd_ch_first_name=$2, mpd_ch_middle_name=$3, mpd_ch_last_name=$4, mpd_ch_father_name=$5, mpd_ch_marital_status=$6, mpd_ch_gender=$7, mpd_ch_spouse_gender=$8, mpd_ch_pob=$9, mpd_ch_spouse_name=$10, mpd_ch_religion=$11, mpd_ch_caste=$12,mpd_ch_occupation=$13,mpd_ch_customer_category=$14, mpd_ch_customer_type=$15, mpd_ch_business_segment=$16, mpd_ch_member_community=$17, mpd_ch_guardian=$18,  mpd_n_phone_number=$19, mpd_ch_emailid=$20, mpd_n_aadhar_card_number=$21,mpd_n_ration_card_number=$22,mpd_n_voterid=$23 ,mpd_n_pan_card_number=$24,mpd_ch_under_poverty=$25, mpd_n_total_family_members=$26, mpd_n_no_of_dependents=$27,mpd_ch_minority=$28,mpd_ch_land_owned_by=$29,mpd_ch_residential_status=$30,  mpd_ch_shg_member=$31, mpd_ch_kcc_holdercharacter=$32, mpd_ch_is_society_member=$33, mpd_ch_is_society_staff=$34,mpd_ch_is_account_holder=$35,mpd_ch_higher_qualification=$36 ,mpd_ch_address_type1=$37, mpd_ch_address_line1=$38, mpd_ch_village1=$39, mpd_ch_panchayat1=$40, mpd_ch_city1=$41, mpd_ch_state1=$42, mpd_ch_country1=$43, mpd_n_pincode1=$44, mpd_ch_residing_since_month1=$45, mpd_ch_residing_since_year1=$46,mpd_ch_address_type2=$47, mpd_ch_address_line2=$48, mpd_ch_village2=$49, mpd_ch_panchayat2=$50, mpd_ch_city2=$51, mpd_ch_state2=$52, mpd_ch_country2=$53, mpd_n_pincode2=$54, mpd_d_dob=$55,  mpd_ch_residing_since_month2=$56, mpd_ch_residing_since_year2=$57,photo_file_doc_name=$58,signature_file_doc_name=$59 where mpd_ch_member_id=$60',[ title_ed,fname_ed,mname_ed,lname_ed,father_name_ed,mar_status_ed,selectedop_ed,sgender_ed,pob_ed,spouse_ed,religion_ed,caste_ed,occupation_ed,cust_category_ed,cust_type_ed,buss_segment_ed,mem_comm_ed,guardian_ed,ph_no_ed,email_id_ed,adhar_no_ed, ration_no_ed,voter_id_ed,pan_id_ed,under_poverty_ed,fam_members_ed,dept_no_ed,minority_ed,land_owner_ed,resd_status_ed,shg_no_ed,kcc_ed,s_mem_ed,s_staf_ed,acc_holder_ed,high_edu_ed,add_type_ed,add_line_ed,village_ed,panchayat_ed,city_ed,state_ed,country_ed,pincode_ed,rsm_ed,rsy_ed,address_type_ed,address_line_ed,vilg_ed,panc_ed,citie_ed,stat_ed,ctry_ed,picd_ed,dob_id_ed,mnth_ed,year_ed,uploadDoc_photograph_ed,uploadDoc_signature_ed,mem_id_ed],function(err,memreslt2){
          if(err) throw err;
          console.log(memreslt2)
console.log("id to update",mem_id_ed)
            pgdbconnect.query('update  member_loan_details set mld_ch_eligible_for_loan=$1,mld_n_total_eligible_loan_amount=$2, mld_n_total_amount_used=$3 where mld_ch_member_id=$4',[e_month_ed,loan_amt_ed,amt_used_ed,mem_id_ed],function(err,memreslt3){
             if(err) throw err;
             console.log(memreslt3)

             pgdbconnect.query('update member_nominee_details set  mnd_ch_title=$1, mnd_ch_first_name=$2, mnd_ch_middle_name=$3, mnd_ch_last_name=$4, mnd_ch_father_name=$5, mnd_ch_relation=$6, mnd_ch_gender=$7,mnd_ch_occupation=$8,mnd_d_dob=$9, mnd_n_account_num=$10, mnd_ch_address_type=$11, mnd_ch_address_line=$12, mnd_ch_village=$13, mnd_ch_panchayat=$14, mnd_ch_city=$15, mnd_ch_states=$16, mnd_ch_country=$17, mnd_n_pincode=$18, mnd_n_phone_number=$19, mnd_ch_emailid=$20, mnd_ch_aadhar_card_number=$21, mnd_ch_is_society_member=$22  where mnd_ch_member_id=$23',[nominee_type_ed,fst_name_ed,mid_name_ed,lst_name_ed,fath_name_ed,rel_ed,gen_nom_ed,occup_ed,date_ob_ed,ac_num_ed,addr_type_ed,addr_line_ed, vilge_ed,panch_ed,distcity_ed,stat1_ed,countr_ed,pin_cd_ed,phone_no_ed,email_ed,adh_no_ed,ism_ed,mem_id_ed],function(err,memreslt4){
                if(err) throw err;
                console.log(memreslt4)




       pgdbconnect.query('select * from member_details where md_ch_del_flg=$1',['N'],function(err,membresult){
        if(err) throw err;
       console.log("result:",membresult);

//flash messege
req.flash('success_msg', 'Data updated successfully');
res.locals.message=req.flash();

   res.render('memberModule/memberAddDetailsSearch',{
    memberdetails:membresult.rows,
    moment:moment
   });
   });

});
    });
});
    });
});
});
});
});      

router.post('/member_view_data_populate',function(req,res){
    console.log("populate fields");
    var divtype="VIEW";
  console.log("DIV TYPE on view populate",divtype);

  var memberid1= req.body.tempviewmemberid;
  console.log("member id to view",memberid1)

  pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
       // console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;                 
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

    /*country*/

    // var country = req.body.country;                 
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
       // console.log("result3 is", result3);

  pgdbconnect.query("select * from member_details where md_ch_member_id=$1 order by md_ch_member_id",[memberid1],function(err,membsearch)
   {
    console.log("luckyqqqq",membsearch)
  
    var   view_mem_typ = membsearch.rows[0].md_ch_member_type_code;
    var   view_mem_id = membsearch.rows[0].md_ch_member_id;
    var   view_emp_code =membsearch.rows[0].md_n_employee_code;
    var   view_doj = membsearch.rows[0].md_d_doj;
    var   view_dor = membsearch.rows[0].md_d_dor;
    var   view_adm_no = membsearch.rows[0].md_ch_admission_number;
    var   view_dept = membsearch.rows[0].md_ch_department;
    var   view_ent_fee = membsearch.rows[0].md_n_fee_amt;
    var   view_shr_bal = membsearch.rows[0].md_n_opening_share_balance;
    var   view_crncytyp = membsearch.rows[0].md_ch_entrance_fee_cur;
    var   view_cntr_pay = membsearch.rows[0].md_ch_counter_pay;
    console.log("counter payyyy",view_cntr_pay)
    var   view_thrift_dept = membsearch.rows[0].md_n_thrift_deposit;
    var   view_dras = membsearch.rows[0].md_ch_dras;
    var   view_bnk_acc_no = membsearch.rows[0].md_ch_bank_account_number;
    var   view_opn_bal = membsearch.rows[0].md_n_opening_balance;
    var   view_cls_bal = membsearch.rows[0].md_n_closing_balance;
    var   view_remarks = membsearch.rows[0].md_ch_remarks;
   
    // var  remarks = membsearch.rows[0].

    console.log("data of member",view_mem_typ,view_mem_id,view_emp_code,view_doj,view_dor,view_adm_no,view_dept,view_ent_fee,view_shr_bal,view_crncytyp,view_cntr_pay,view_thrift_dept,view_dras,view_bnk_acc_no,view_opn_bal,view_cls_bal,view_remarks)


    pgdbconnect.query("select * from member_personal_details where mpd_ch_member_id=$1 order by mpd_ch_member_id",[memberid1],function(err,membsearch)
    {
     console.log("membersearch",membsearch)

    var view_memp_id = membsearch.rows[0].mpd_ch_member_id;
    var view_dob = membsearch.rows[0].mpd_d_dob;
    var view_title = membsearch.rows[0].mpd_ch_title;
    var view_fname = membsearch.rows[0].mpd_ch_first_name;
    var view_mname = membsearch.rows[0].mpd_ch_middle_name;
    var view_lname = membsearch.rows[0].mpd_ch_last_name;
    var view_father_name = membsearch.rows[0].mpd_ch_father_name;
    var view_spouse = membsearch.rows[0].mpd_ch_spouse_name;
    var view_selectedop = membsearch.rows[0].mpd_ch_gender;
    var view_sgender = membsearch.rows[0].mpd_ch_spouse_gender;
    var view_pob = membsearch.rows[0].mpd_ch_pob;
    var view_mar_status = membsearch.rows[0].mpd_ch_marital_status;
    var view_religion = membsearch.rows[0].mpd_ch_religion;
    var view_caste = membsearch.rows[0].mpd_ch_caste;
    var view_occupation = membsearch.rows[0].mpd_ch_occupation;
    var view_cust_category = membsearch.rows[0].mpd_ch_customer_category;
    var view_cust_type = membsearch.rows[0].mpd_ch_customer_type;
    var view_buss_segment = membsearch.rows[0].mpd_ch_business_segment;
    var view_mem_comm = membsearch.rows[0].mpd_ch_member_community;
    var view_guardian = membsearch.rows[0].mpd_ch_guardian;
    var view_ph_no = membsearch.rows[0].mpd_n_phone_number;
    var view_email_id = membsearch.rows[0].mpd_ch_emailid;
    var view_adhar_no = membsearch.rows[0].mpd_n_aadhar_card_number;
    var view_ration_no = membsearch.rows[0].mpd_n_ration_card_number;
    var view_voter_id = membsearch.rows[0].mpd_n_voterid;
    var view_pan_id = membsearch.rows[0].mpd_n_pan_card_number;
    var view_under_poverty = membsearch.rows[0].mpd_ch_under_poverty;
    var view_fam_members = membsearch.rows[0].mpd_n_total_family_members;
    var view_dept_no = membsearch.rows[0].mpd_n_no_of_dependents;
    var view_minority = membsearch.rows[0].mpd_ch_minority;
    var view_minority1 = membsearch.rows[0].mpd_ch_religion;
    var view_land_owner = membsearch.rows[0].mpd_ch_land_owned_by;
    var view_resd_status = membsearch.rows[0].mpd_ch_residential_status;
    var view_shg_no = membsearch.rows[0].mpd_ch_shg_member;
    var view_kcc = membsearch.rows[0].mpd_ch_kcc_holdercharacter;
    var view_s_mem = membsearch.rows[0].mpd_ch_is_society_member;
    var view_s_staf = membsearch.rows[0].mpd_ch_is_society_staff;
    var view_acc_holder = membsearch.rows[0].mpd_ch_is_account_holder;
    var view_high_edu = membsearch.rows[0].mpd_ch_higher_qualification;
    var view_signature = membsearch.rows[0].signature_file_doc_name;
    var view_photo = membsearch.rows[0].photo_file_doc_name;
    var view_dob = membsearch.rows[0].mpd_d_dob;


    var view_add_type = membsearch.rows[0].mpd_ch_address_type1;
    var view_add_line = membsearch.rows[0].mpd_ch_address_line1;
    var view_village = membsearch.rows[0].mpd_ch_village1;  
    var view_panchayat = membsearch.rows[0].mpd_ch_panchayat1;
    var view_city = membsearch.rows[0].mpd_ch_city1;
    var view_state = membsearch.rows[0]. mpd_ch_state1;
    var view_country = membsearch.rows[0].mpd_ch_country1;  
    var view_pincode = membsearch.rows[0].mpd_n_pincode1;
    var view_rsm = membsearch.rows[0].mpd_ch_residing_since_month1; 
    var view_rsy = membsearch.rows[0].mpd_ch_residing_since_year1;

    // var myCheck = req.body.myCheck;
    var view_address_line = membsearch.rows[0].mpd_ch_address_line2;
    var view_vilg = membsearch.rows[0].mpd_ch_village2;
    var view_panc = membsearch.rows[0].mpd_ch_panchayat2;
    var view_citie = membsearch.rows[0].mpd_ch_city2;
    var view_stat = membsearch.rows[0].mpd_ch_state2;
    var view_ctry = membsearch.rows[0].mpd_ch_country2;
    var view_picd = membsearch.rows[0].mpd_n_pincode2;
    var view_mnth = membsearch.rows[0].mpd_ch_residing_since_month2; 
    var view_year = membsearch.rows[0].mpd_ch_residing_since_year2;

    pgdbconnect.query("select * from member_loan_details where mld_ch_member_id=$1 order by mld_ch_member_id",[memberid1],function(err,membsearch)
    {
     console.log("lucky",membsearch)
     var view_mld = membsearch.rows[0].mld_ch_member_id;
     var view_e_month = membsearch.rows[0].mld_ch_eligible_for_loan;
     var view_loan_amt = membsearch.rows[0].mld_n_total_eligible_loan_amount;
     var view_amt_used = membsearch.rows[0].mld_n_total_amount_used;
 
     console.log("Loans", view_mld,view_e_month,view_loan_amt,view_amt_used);

     pgdbconnect.query("select * from member_nominee_details where mnd_ch_member_id=$1 order by mnd_ch_member_id",[memberid1],function(err,membsearch)
     {
      console.log("membersearch",membsearch)

      var  view_mnd_ch_member_id = membsearch.rows[0]. mnd_ch_member_id; 
      var  view_nominee_type =  membsearch.rows[0]. mnd_ch_title;                       
      var  view_fst_name =  membsearch.rows[0].mnd_ch_first_name;                            
      var  view_mid_name =  membsearch.rows[0].mnd_ch_middle_name;                            
      var  view_lst_name =  membsearch.rows[0].mnd_ch_last_name;                           
      var  view_fath_name =  membsearch.rows[0].mnd_ch_father_name;                               
      var  view_rel =  membsearch.rows[0].mnd_ch_relation;                              
      var  view_gen = membsearch.rows[0]. mnd_ch_gender;                               
      var  view_occup =  membsearch.rows[0]. mnd_ch_occupation;                               
      var  view_date_ob =  membsearch.rows[0].  mnd_d_dob;                             
      var  view_ac_num =  membsearch.rows[0]. mnd_n_account_num;                                
      var  view_addr_type =  membsearch.rows[0]. mnd_ch_address_type;                                
      var  view_addr_line =  membsearch.rows[0]. mnd_ch_address_line;                              
      var  view_vilge =  membsearch.rows[0]. mnd_ch_village;                    
      var  view_panch =  membsearch.rows[0].mnd_ch_panchayat;                 
      var  view_distcity =  membsearch.rows[0].  mnd_ch_city;                 
      var  view_stat1 =  membsearch.rows[0]. mnd_ch_states;                            
      var  view_countr =  membsearch.rows[0]. mnd_ch_country;                       
      var  view_pin_cd =  membsearch.rows[0]. mnd_n_pincode;                          
      var  view_phone_no =  membsearch.rows[0]. mnd_n_phone_number;                              
      var  view_email =  membsearch.rows[0]. mnd_ch_emailid;                       
      var  view_adh_no =  membsearch.rows[0].  mnd_ch_aadhar_card_number;                             
      var  view_ism =  membsearch.rows[0].mnd_ch_is_society_member;


    res.render('memberModule/memberAddDetails',{

        cities:result1.rows,
        states:result2.rows,
        countries:result3.rows,

        view_mem_typ:view_mem_typ,
        view_mem_id:view_mem_id,
        view_emp_code:view_emp_code,
        view_doj:view_doj,
        view_dor:view_dor,
        view_adm_no:view_adm_no,
        view_dept:view_dept,
        view_ent_fee:view_ent_fee,
        view_crncytyp:view_crncytyp,
        view_shr_bal:view_shr_bal,
        view_cntr_pay:view_cntr_pay,
        view_thrift_dept:view_thrift_dept,
        view_dras:view_dras,
        view_bnk_acc_no:view_bnk_acc_no,
        view_opn_bal:view_opn_bal,
        view_cls_bal:view_cls_bal,
        view_remarks:view_remarks,
        view_memp_id:view_memp_id,   
        view_title:view_title,

         view_fname:view_fname,
         view_mname :view_mname,
         view_lname :view_lname,
         view_father_name :view_father_name,
         view_spouse :view_spouse,
         view_selectedop : view_selectedop,
         view_sgender :view_sgender,
         view_pob:view_pob,
         view_mar_status :view_mar_status,
         view_religion :view_religion,
         view_caste :view_caste,
         view_occupation :view_occupation,
         view_cust_category :view_cust_category,
         view_cust_type :view_cust_type,
         view_buss_segment :view_buss_segment,
         view_mem_comm :view_mem_comm,
         view_guardian :view_guardian,
         view_ph_no:view_ph_no,
         view_email_id  :view_email_id,
         view_adhar_no :view_adhar_no,
         view_ration_no :view_ration_no,
         view_voter_id :view_voter_id,
         view_pan_id :view_pan_id,
         view_under_poverty :view_under_poverty,
         view_fam_members :view_fam_members,
         view_dept_no :view_dept_no,
         view_minority :view_minority,
         view_minority1: view_minority1,
         view_land_owner :view_land_owner,
         view_resd_status :view_resd_status,
         view_shg_no:view_shg_no,
         view_kcc :view_kcc,
         view_s_mem :view_s_mem,
         view_s_staf :view_s_staf,
         view_acc_holder :view_acc_holder,
         view_high_edu:view_high_edu,
         view_signature:view_signature,
         view_photo:view_photo,
         view_dob :view_dob,

        
     view_add_type:view_add_type,
     view_add_line:view_add_line,
     view_village :view_village,
     view_panchayat :view_panchayat,
     view_city:view_city,
     view_state :view_state,
     view_country :view_country,
     view_pincode :view_pincode,
     view_rsm :view_rsm,
     view_rsy :view_rsy,

 // var myCheck = req.body.myCheck;
    view_address_line :view_address_line,
    view_vilg :view_vilg,
    view_panc :view_panc,
    view_citie :view_citie,
    view_stat :view_stat,
    view_ctry :view_ctry,
    view_picd :view_picd,
    view_mnth :view_mnth,
    view_year :view_year,

    view_e_month:view_e_month,
    view_loan_amt:view_loan_amt,
    view_amt_used:view_amt_used,

     view_mnd_ch_member_id :view_mnd_ch_member_id,
     view_nominee_type :  view_nominee_type,                
     view_fst_name  :  view_fst_name,            
     view_mid_name  :  view_mid_name ,                      
     view_lst_name  :  view_lst_name,                       
     view_fath_name  : view_fath_name ,                        
     view_rel :   view_rel  ,              
     view_gen :  view_gen ,                   
     view_occup  :view_occup,                          
     view_date_ob :view_date_ob  ,                 
     view_ac_num :view_ac_num  ,                
     view_addr_type :  view_addr_type ,                            
     view_addr_line :  view_addr_line ,                          
     view_vilge  : view_vilge,         
     view_panch  : view_panch,            
     view_distcity :view_distcity ,                
     view_stat1   : view_stat1,             
     view_countr : view_countr ,           
     view_pin_cd : view_pin_cd ,             
     view_phone_no  : view_phone_no  ,               
     view_email: view_email,           
     view_adh_no  :view_adh_no,                  
     view_ism :  view_ism,
     pagetype:"VIEW",
     moment:moment

    });
});
   });
});
});
});
    })
});
});

router.post('/member_details_delete',function(req,res){

    var memberdel= req.body.tempmemberdeleteid;
  console.log("member  id to delete",memberdel)
  
  pgdbconnect.query('update member_details set md_ch_del_flg=$1 where md_ch_member_id=$2',['Y',memberdel],function(err,delres1){
    console.log("deleted result",delres1);

    pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,searchres){

     req.flash('success_msg', 'Record Deleted successfully');
     res.locals.message=req.flash();
     res.render('memberModule/memberAddDetailsSearch',{
        memberdetails:searchres.rows,
        moment:moment

});
});
});
});

router.get('/memberdetails_search',function(req,res){
    var divtype=req.query.key;

    console.log("DIV TYPE",divtype);

    pgdbconnect.query("select  * from member_details where md_ch_del_flg='N' ",function(err,membres1){
        if(err) throw err;
        console.log("Result of member_details",membres1);

    res.render('memberModule/memberAddDetailsSearch',{
    pagetype:divtype,
    memberdetails:membres1.rows,
    moment:moment

 });
});
});

router.post('/search_particular_membrec', function(req,res){
    console.log("search particular member record")
var mem_sch_member_id=req.body.mem_sch_member_id;
var mem_sch_department=req.body.mem_sch_department;

console.log("hi",mem_sch_member_id,mem_sch_department);

pgdbconnect.query("select * from member_details where (md_ch_member_id=$1 or md_ch_department=$2 ) and (md_ch_del_flg='N')",[mem_sch_member_id,mem_sch_department],function(err,memberserch) 
{
    if(err) throw err;
    console.log("member search is", memberserch.rows);

    res.render('memberModule/memberAddDetailsSearch',{
       memberdetails: memberserch.rows,   
       moment:moment
    });
});
});
/*Member Details - END*/
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

pgdbconnect.query("insert into farm_machinery_details(fmd_n_farm_mach_id,fmd_ch_member_id,fmd_ch_vehicle_name,fmd_ch_vehicle_reg_num,fmd_ch_year_of_purchase,fmd_ch_vehicle_description,fmd_n_purchase_value,fmd_n_market_value,fmd_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",[farmmachineryid,memid,VechicleName,VechilceRegisterNumber,YearofPurchase,VechicleDescription,PurchaseValue,marketValue,'N'],function(err,formres){

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

pgdbconnect.query("insert into farm_machinery_details(fmd_n_farm_mach_id,fmd_ch_member_id,fmd_ch_vehicle_name,fmd_ch_vehicle_reg_num,fmd_ch_year_of_purchase,fmd_ch_vehicle_description,fmd_n_purchase_value,fmd_n_market_value,fmd_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",[farmmachineryid,memid,VechicleName,VechilceRegisterNumber,YearofPurchase,VechicleDescription,PurchaseValue,PurchaseValue,'N'],function(err,formres){

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
    var vehicle_reg_num =  searchres.rows[0].fmd_ch_vehicle_reg_num;
    var year_of_purchase =  searchres.rows[0].fmd_ch_year_of_purchase;

    var vehicle_desc = searchres.rows[0].fmd_ch_vehicle_description;
    var purchase_value =  searchres.rows[0].fmd_n_purchase_value;
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

  pgdbconnect.query("UPDATE farm_machinery_details SET fmd_ch_member_id=$1, fmd_ch_vehicle_name=$2, fmd_ch_vehicle_reg_num=$3, fmd_ch_year_of_purchase=$4, fmd_ch_vehicle_description=$5, fmd_n_purchase_value=$6, fmd_n_market_value=$7,fmd_n_farm_mach_id=$8  WHERE fmd_n_farm_mach_id=$9 ",[memberid,vehiclename,vehicle_reg_num,year_of_purchase,vehicle_desc,purchase_value,market_value,member_farm_id,member_farm_id],function(err,farmmachupdate){

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
    var vehicle_reg_num =  searchres.rows[0].fmd_ch_vehicle_reg_num;
    var year_of_purchase =  searchres.rows[0].fmd_ch_year_of_purchase;
    var vehicle_desc = searchres.rows[0].fmd_ch_vehicle_description;
    var purchase_value =  searchres.rows[0].fmd_n_purchase_value;
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

         pgdbconnect.query("select * from farm_machinery_details where (fmd_ch_member_id=$1 or fmd_ch_vehicle_name=$2) and fmd_ch_del_flg='N'",[farm_mch_id,vehiclename],function(err,result3) {
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
var divdentAmt=  searchres.rows[0].md_n_dividend_amt;
    var divarr =  searchres.rows[0].md_n_dividend_arrears;
    var income =  searchres.rows[0].md_n_others_income;
    var finalamt =  searchres.rows[0].md_n_final_amt;
   // var folio =  searchres.rows[0].md_n_folio_num;

console.log("edit populate dividend",member_div_id,member_id,shares,share_fee,divpay,totdivpay,finacialyear,shareinclude,sharecapital,divarr,income,finalamt)
    req.flash('success_msg', 'Data can be Editable');
res.locals.message=req.flash();



    pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){


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
         divdentAmt:divdentAmt,
        divarr:divarr,
        income:income,
        finalamt:finalamt,
       
        

        pagetype:"EDIT",
        Dividendres:memres.rows,
        member_id:member_id,
       memberdetails:ressearch1.rows

                });

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
var divdentAmt=  searchres.rows[0].md_n_dividend_amt;
var divarr =  searchres.rows[0].md_n_dividend_arrears;
var income =  searchres.rows[0].md_n_others_income;
var finalamt =  searchres.rows[0].md_n_final_amt;
//var folio =  searchres.rows[0].md_n_folio_num;


console.log("data to edit",member_id,shares,share_fee,divpay,totdivpay);


req.flash('success_msg', 'Data viewing successfully');
res.locals.message=req.flash();
    pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

    res.render('memberModule/member_dividend',{

//bankdetails:searchbrres.rows,
member_id:member_id,
member_id1c:member_id1c,
shares:shares,
share_fee:share_fee,
divpay:divpay,

divdentAmt:divdentAmt,
totdivpay:totdivpay,
finacialyear:finacialyear,
shareinclude:shareinclude,
sharecapital:sharecapital,

divarr:divarr,
income:income,
finalamt:finalamt,
//folio:folio,


pagetype:"VIEW",
memberdetails:ressearch1.rows


});
});
});


});



router.post('/delete_member_dividend_record',function(req,res){



    var memid= req.body.tempmemberid2;
    console.log("id to delete",memid)
    pgdbconnect.query("update member_dividend set md_ch_del_flg=$1 where md_n_member_dividend_id=$2",['Y',memid],function(err,delres){

        console.log("deleted result",delres);
        pgdbconnect.query("select * from member_dividend where md_ch_del_flg=$1",['N'],function(err,searchres){
                       pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

    //Bank Branch details-start//
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
        res.render('memberModule/member_div_search',{
            ressearch:searchres.rows,
            memberdetails:ressearch1.rows

    });
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
                       pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
res.render('memberModule/member_div_search',{
        ressearch:ressearch,
        memberdetails:ressearch1.rows


    });
                       });
}

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

    pgdbconnect.query("select * from member_dividend where ((md_ch_member_id=$1 or md_ch_financial_year=$2) and (md_ch_del_flg=$3))",[mid,fyear,'N'],function(err,ressearch1){
        console.log("search result",ressearch1.rows)
        if(err)
        {
           console.log("Error with table query", err);
        }

        else
        {


   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch){

            res.render('memberModule/member_div_search',{
                ressearch:ressearch1.rows,
                memberdetails:ressearch.rows,

            });
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

            pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){


    res.render('memberModule/member_dividend',
    {
pagetype:"ADD",
    Dividendres:Dividendres,
    memberdetails:ressearch1.rows
  });

});
}
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
 var TotalDiviodendpayable=req.body.ent_fee5;
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
console.log("dividend details",TotalDiviodendpayable,memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome)
pgdbconnect.query("insert into member_dividend(md_n_member_dividend_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included,md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,md_n_dividend_amt,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,DividendPayable,DividendArrears,dividendamount,TotalDiviodendpayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
            if (err)
            {
                       console.error('Error with table query', err);
           }
           else
         {

           req.flash('success_msg', 'Data inserted successfully');
           res.locals.message=req.flash();

                       pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
           res.render('memberModule/member_dividend',{
            memberdetails:ressearch1.rows,
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


console.log("dividend details",TotalDiviodendpayable,memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome)

pgdbconnect.query("insert into member_dividend(md_n_member_dividend_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included,md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,md_n_dividend_amt,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,DividendPayable,DividendArrears,dividendamount,TotalDiviodendpayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
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

            pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
           res.render('memberModule/member_dividend',{
            memberdetails:ressearch1.rows,
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
   var memberid=req.body.memberid_ed;
   var fyear=req.body.opn_shr_bal_ed11;
   var share=req.body.ent_fee_ed;
   var sharesinclude=req.body.opn_shr_bal_ed;
   var sharefree=req.body.ent_fee_ed1;
   var sharecapital=req.body.opn_shr_bal_ed1;
   var dividendamount=req.body.ent_fee_ed2;
   var DividendArrears=req.body.opn_shr_bal_ed2;
   var DividendPayable=req.body.ent_fee_ed3;
   var OtherIncome=req.body.opn_shr_bal_ed3;
  var TotalDiviodend=req.body.ent_fee_ed4;
   var FinalAmount=req.body.opn_shr_bal_ed4;
 

console.log('middd',mid);
console.log('fyear',fyear);
console.log('sharesinclude',sharesinclude);
console.log("mem div id",memdivid)
console.log("editable data",fyear,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,memberid,TotalDiviodend,memdivid)
pgdbconnect.query("update member_dividend set md_ch_financial_year=$1,md_n_num_shares=$2,md_n_num_shares_included=$3,md_n_share_fee=$4,md_n_share_capital=$5,mkd_n_dividend_amt=$6,md_n_dividend_payable=$7,md_n_dividend_arrears=$8,md_n_final_amt=$9,md_n_others_income=$10,md_ch_member_id=$11,md_n_tot_dividend_payable=$12 where md_n_member_dividend_id=$13",
[fyear,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendPayable,DividendArrears,FinalAmount,OtherIncome,memberid,TotalDiviodend,memdivid],function(err,Dividendedit){
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
          pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

req.flash('success_msg', 'Record updated successfully');
res.locals.message=req.flash();
    res.render('memberModule/member_div_search',{
        ressearch:Dividendupdate.rows,
        memberdetails:ressearch1.rows

 });
   });
   });
 }

});
 }

/*Member Dividend -END*/


/*KCC -START*/
router.get('/kcc_search',function(req,res){

    console.log("Entered Kcc Search");
    pgdbconnect.query("select * from member_card_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,ressearch){

        if(err)
        {
           console.log("result1 is", ressearch);
        }
 else
 {
    console.log("ressearch",ressearch)
   var ressearch = ressearch.rows;
 }
    res.render('memberModule/member_kcc_search',{
       ressearch:ressearch,
       moment:moment
 
   });
 });
 });


///// Member kcc search
router.post('/mem_kcc_func',function(req,res){

    var mem_name=req.body.mem_name1;
    var card_num=req.body.card_num1;
    console.log("data to search11111111",mem_name,card_num)
    pgdbconnect.query("select * from member_card_details where (mcd_ch_member_name=$1 or mcd_ch_card_number=$2) and (mcd_ch_del_flg =$3)",[mem_name,card_num,'N'],function(err,ressearch1){
        console.log("search result",ressearch1)
        if(err)
        {
           console.log("Error with table query", err);
        }
        else
        {
                res.render('memberModule/member_kcc_search',{
                ressearch:ressearch1.rows,
                moment:moment
            });
        }
        });
     });



// Members kcc , add card details(ejs)
router.get('/kcc',function(req,res){

    var divtype=req.query.key;
    console.log("page type on member module",divtype);

    pgdbconnect.query("select md_ch_member_id from member_details",function(err,Dividendres){
        if (err)
        {
        console.error('Error with table query', err);
        }
        else
        {
        var Dividendres = Dividendres.rows;
        }

        res.render('memberModule/member_kcc_add',
        {
            pagetype:divtype,
        Dividendres:Dividendres

        });
        });
        });


///// Kcc add details , add card details(ejs)////
router.post('/mem_kcc_add',function(req,res){
    console.log("kccccc");
    var memid= req.body.div_sel_kcc;
    var mem_name=req.body.mem_name;
    var issued_btwn= req.body.kcc_from_date;//
    var issued_btwn_and=req.body.kcc_to_date;
    var card_num= req.body.card_num;
console.log("issued_btwn",issued_btwn,issued_btwn_and)
    var membercardid;

    pgdbconnect.query("select * from member_card_details",function(err,result) {
        if(result.rowCount==0){
            membercardid=1;

                pgdbconnect.query("insert into member_card_details(mcd_ch_member_id, mcd_ch_member_name, mcd_ch_card_number, mcd_d_from_date, mcd_d_to_date,mcd_ch_del_flg,md_n_member_card_id) values($1,$2,$3,$4,$5,$6,$7)",[memid,mem_name,card_num,issued_btwn,issued_btwn_and,'N',membercardid],function(err,result){


            if (err)
                {
                           console.error('Error with table query', err);
               }
               else
             {

                pgdbconnect.query("select md_ch_member_id from member_details",function(err,Dividendres){
                 console.log("sssssssss",result);
                  req.flash('success_msg', 'Record Inserted successfully');
     res.locals.message=req.flash();
                res.render('memberModule/member_kcc_add',
                {
                Dividendres:Dividendres.rows,
                pagetype:"ADD"
                });
                });
             }

              });
            } /////endof result.rowCount

            else{

                pgdbconnect.query("select max(md_n_member_card_id) from member_card_details",function(err,result) {
                    console.log("max value check",result)
                    console.log("max value check",result.rows[0].max)

                    membercardid=parseInt(result.rows[0].max)+1;
                    console.log("when more rows exxxists",membercardid)

                    pgdbconnect.query("insert into member_card_details(mcd_ch_member_id, mcd_ch_member_name, mcd_ch_card_number, mcd_d_from_date, mcd_d_to_date,mcd_ch_del_flg,md_n_member_card_id) values($1,$2,$3,$4,$5,$6,$7)",[memid,mem_name,card_num,issued_btwn,issued_btwn_and,'N',membercardid],function(err,result){
                        if (err)
                        {
                                   console.error('Error with table query', err);
                       }
                       else
                     {
                        pgdbconnect.query("select md_ch_member_id from member_details",function(err,Dividendres){
                         console.log("sssssssss",result);
                          req.flash('success_msg', 'Record Inserted successfully');
     res.locals.message=req.flash();
                        res.render('memberModule/member_kcc_add',
                        {
                        Dividendres:Dividendres.rows,
                        pagetype:"ADD"
                        });
                        });
                     }
                      });
            });
    }
    });
 });


router.post('/mem_kcc_edit',mem_kcc_edit)
function mem_kcc_edit(req,res){

    var member_kcc_id=req.body.kkcidp;
    var div_sel_edit=req.body.memkcc_edit;
    var mem_name_edit=req.body.mem_name2;
    var memberid=req.body.memid_kcc_ed;
    //var date_btw_from_edit=req.body.iss_btwn2;
    var date_btw_from_edit=req.body.kcc_from_date_ed;
  
    //var date_btw_to_edit=req.body.iss_btwn_and2;
    var date_btw_to_edit=req.body.kcc_to_date_ed;
    var card_num_edit=req.body.card_num2;

    console.log('member_kcc_id',member_kcc_id);
    console.log('div_sel_edit',div_sel_edit);
    console.log('mem_name_editar',mem_name_edit);
    console.log('date_btw_from_edit',date_btw_from_edit);
    console.log('date_btw_to_edit',date_btw_to_edit);
    console.log('card_num_edit',card_num_edit);


    pgdbconnect.query("UPDATE member_card_details set mcd_ch_member_name=$1,mcd_ch_card_number=$2,mcd_d_to_date=$3,mcd_d_from_date=$4,mcd_ch_member_id=$5 where md_n_member_card_id=$6 and  mcd_ch_del_flg='N'",[mem_name_edit,card_num_edit,date_btw_to_edit,date_btw_from_edit,memberid,div_sel_edit],function(err,Dividendedit){

    if (err) throw err;
     console.log("KCC UPDATED RESULT",Dividendedit);

//    pgdbconnect.query("select * from member_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,Dividendupdate){
    pgdbconnect.query("select * from member_card_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,kccdetails){

     req.flash('success_msg', 'Record Updated successfully');
     res.locals.message=req.flash();

    res.render('memberModule/member_kcc_search',{
        // Dividendres:Dividendupdate.rows,
        ressearch: kccdetails.rows,
        moment:moment
 
 });
    });
    });


// });
}

router.post('/edit_data_populate_kcc',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //kcc details-start//
var memid= req.body.tempmemberid_edit_kcc;
console.log("member id to edit",memid)

    //   pgdbconnect.query("select * from member_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,result2) {


            //console.log("Result of Branch", result5);
            pgdbconnect.query("select * from member_card_details where md_n_member_card_id=$1",[memid],function(err,searchres)
            {

       pgdbconnect.query("select * from member_details",function(err,result2) {


                console.log("searchres");

    var member_n_id = searchres.rows[0].md_n_member_card_id;
     var member_id = searchres.rows[0].mcd_ch_member_id;
    var memberName = searchres.rows[0].mcd_ch_member_name;
    var cardNum =  searchres.rows[0].mcd_ch_card_number;
    var fromDate =  searchres.rows[0].mcd_d_from_date;
    var toDate = searchres.rows[0].mcd_d_to_date;

   console.log("member_n_id",member_n_id);
   console.log("member_id",member_id);
    console.log("data to edit",member_id,memberName,cardNum,fromDate,toDate);



                res.render('memberModule/member_kcc_add',{

        //bankdetails:searchbrres.rows,
        member_id:member_id,
        member_n_id:member_n_id,
        member_Name:memberName,
        card_Num:cardNum,
        from_Date:fromDate,
        to_Date:toDate,
        pagetype:"EDIT",
        Dividendres:result2.rows,
        moment:moment


    });

});
});
 });


 router.post('/viewdata_populate_kcc',function(req,res){

    var divtype="VIEW";
    console.log("DIV TYPE on edit populate",divtype);


var memid= req.body.tempmemberid_view_kcc;
console.log("member id to edit",memid)


pgdbconnect.query("select * from member_card_details where md_n_member_card_id=$1",[memid],function(err,searchres)

{
    console.log("searchres")

    var member_id = searchres.rows[0].md_n_member_card_id;
    var memberName = searchres.rows[0].mcd_ch_member_name;
    var cardNum =  searchres.rows[0].mcd_ch_card_number;
    var fromDate =  searchres.rows[0].mcd_d_from_date;
    var toDate = searchres.rows[0].mcd_d_to_date;

    console.log("data to view",member_id,memberName,cardNum,fromDate,toDate);


                res.render('memberModule/member_kcc_add',{


            member_id:member_id,
            member_Name:memberName,
            card_Num:cardNum,
            from_Date:fromDate,
            to_Date:toDate,
            pagetype:"VIEW",
            Dividendres:searchres.rows,
            moment:moment
           


            });
            });
            });


     router.post('/delete_data_record_kcc',function(req,res){
     console.log('entering to delete');
var member_kcc_id=req.body.kcc_dl_id;
    console.log("id to delete",member_kcc_id)

 pgdbconnect.query("UPDATE member_card_details SET mcd_ch_del_flg=$1 where md_n_member_card_id=$2",['Y',member_kcc_id],function(err,kccupdate){

    if (err) throw err;
    console.log("KCC UPDATED RESULT AFTER DELETE",kccupdate)


         pgdbconnect.query("select * from member_card_details where mcd_ch_del_flg='N' order by mcd_ch_member_id",function(err,kccdetails){
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
   res.render('memberModule/member_kcc_search',{
    // memberdetails:memberdetails.rows,
    ressearch: kccdetails.rows,
    moment:moment

});
   });
});


});
/*KCC -END*/

/* MEMBER SHARE DETAILS- START*/
router.get('/mem_share',mem_share)
function mem_share(req,res){

var divtype=req.query.key;
    console.log("page type on member module",divtype)
 pgdbconnect.query("select * from member_details",function(err,memres){
 if (err)
  {
             console.error('Error with table query', err);
 }
 else
 {
             var memresult = memres.rows;
 }


    res.render('memberModule/member_shares',
    {
pagetype:"ADD",
memberdetails:memresult
  });
});
}







 router.post('/mem_share_details_insert',mem_share_details_insert)
 function mem_share_details_insert(req,res)
 {
    var memid=req.body.div_share;
    // var date=req.body.date;
    // changed by ranjeet
     var date=req.body.shr_date;
    
    // var boardmeeting=req.body.date1;
    var boardmeeting=req.body.do_brd_mtg;
    //  end changes
    var boardmeetingid=req.body.opn_shr_bal;
    var boardmeetingdetails=req.body.meeting_details;
    console.log('memberdetailsinsert',boardmeetingdetails)
    var FolioMember=req.body.ent_fee1;
    var ShareValue=req.body.ent_fee2;
    var CertificateNo=req.body.opn_shr_bal2;
    var DistinctiveNumber=req.body.ent_fee3;
    var ShareRedeemed=req.body.opn_shr_bal3;
    var RedeemedShareValue=req.body.ent_fee4;
    var RedeemedDistinctiveNumber=req.body.opn_shr_bal4;
    var BalanceShares=req.body.ent_fee5;
    var BalanceShareValues=req.body.opn_shr_bal5;
    var CertificateBalanceShares=req.body.ent_fee6;
    var DistinctiveShareBalance=req.body.opn_shr_bal6;
    var Days=req.body.ent_fee7;
    var Product=req.body.Product;
    var shares_allocated=req.body.opn_shr_bal1

   console.log('mid',memid);
   console.log('date',date);
   console.log('boardmeeting',boardmeeting);
   console.log('boardmeetingdetails',boardmeetingdetails);
   console.log('FolioMember',FolioMember);
   console.log('ShareValue',ShareValue);
   console.log('CertificateNo',CertificateNo);
   console.log('DistinctiveNumber',DistinctiveNumber);
   console.log('ShareRedeemed',ShareRedeemed);
   console.log('RedeemedShareValue',RedeemedShareValue);

   var memsearchdetail;
   pgdbconnect.query("select * from member_share_details ",function(err,result) {
       if(result.rowCount==0){
        memsearchdetail=1;


console.log("data to insert member share",memsearchdetail,memid,date,boardmeeting,boardmeetingid,boardmeetingdetails,FolioMember,ShareValue,CertificateNo,DistinctiveNumber,ShareRedeemed,RedeemedShareValue,RedeemedDistinctiveNumber,BalanceShares,BalanceShareValues,CertificateBalanceShares,DistinctiveShareBalance,Days,Product,'N',shares_allocated)
    pgdbconnect.query("insert into member_share_details(msd_n_member_share_id,msd_ch_member_id,msd_d_date, msd_d_board_meeting_date,msd_ch_board_meeting_id,msd_ch_board_meeting_details,msd_n_day_book_folio_num,msd_n_share_value,msd_ch_share_certificate_num,msd_ch_share_distinctive_num,msd_n_redeemed_share_value,msd_n_num_shares_redeemed,msd_ch_redeemed_shares_distinctive,msd_n_bal_share,msd_n_balance_shares_value,msd_n_share_certificate_balance_shares,msd_n_distinctive_shares_balance,msd_n_days,msd_ch_product,msd_ch_del_flg,msd_n_num_shares_allotted)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)",[memsearchdetail,memid,date,boardmeeting,boardmeetingid,boardmeetingdetails,FolioMember,ShareValue,CertificateNo,DistinctiveNumber,ShareRedeemed,RedeemedShareValue,RedeemedDistinctiveNumber,BalanceShares,BalanceShareValues,CertificateBalanceShares,DistinctiveShareBalance,Days,Product,'N',shares_allocated],function(err,Shareres){
        if (err)
        {
            console.error('Error with table query', err);
}
else
{

    req.flash('success_msg', 'Data inserted successfully');
    res.locals.message=req.flash();

pgdbconnect.query("select * from member_details where md_ch_del_flg='N'",function(err,shareres21){
    res.render('memberModule/member_shares',{
        memberdetails:shareres21.rows,
       pagetype:"ADD"
});
    });
}
});
 }

 else{

    pgdbconnect.query("select max(msd_n_member_share_id) from member_share_details",function(err,result) {
        console.log("max value check",result)
        console.log("max value check",result.rows[0].max)

        memberdivid=parseInt(result.rows[0].max)+1;
        console.log("when more rows exxxists",memberdivid)

        pgdbconnect.query("insert into member_share_details(msd_n_member_share_id,msd_ch_member_id,msd_d_date, msd_d_board_meeting_date,msd_ch_board_meeting_id,msd_ch_board_meeting_details,msd_n_day_book_folio_num,msd_n_share_value,msd_ch_share_certificate_num,msd_ch_share_distinctive_num,msd_n_redeemed_share_value,msd_n_num_shares_redeemed,msd_ch_redeemed_shares_distinctive,msd_n_bal_share,msd_n_balance_shares_value,msd_n_share_certificate_balance_shares,msd_n_distinctive_shares_balance,msd_n_days,msd_ch_product,msd_ch_del_flg,msd_n_num_shares_allotted)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)",[memberdivid,memid,date,boardmeeting,boardmeetingid,boardmeetingdetails,FolioMember,ShareValue,CertificateNo,DistinctiveNumber,ShareRedeemed,RedeemedShareValue,RedeemedDistinctiveNumber,BalanceShares,BalanceShareValues,CertificateBalanceShares,DistinctiveShareBalance,Days,Product,'N',shares_allocated],function(err,Shareres){


// pgdbconnect.query("insert into member_share_details(msd_n_member_share_id,md_ch_member_id,md_ch_financial_year,md_n_num_shares,md_n_num_shares_included, md_n_share_fee,md_n_share_capital,md_n_dividend_payable,md_n_dividend_arrears,md_n_tot_dividend_payable,md_n_final_amt,md_n_others_income,md_ch_del_flg) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",[memberdivid,mid,mid1,share,sharesinclude,sharefree,sharecapital,dividendamount,DividendArrears,DividendPayable,FinalAmount,OtherIncome,'N'],function(err,Dividendres1){
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

pgdbconnect.query("select * from member_details where md_ch_del_flg='N'",function(err,shareres21){
res.render('memberModule/member_shares',{
    memberdetails:shareres21.rows,
pagetype:"ADD"
});
});
}
});

});
 }
});
 }




 router.get('/mem_share_search',mem_share_search)
 function mem_share_search(req,res){
     console.log("MEMBER DIVIDEND SEARCH 1")

        pgdbconnect.query("select * from member_share_details where msd_ch_del_flg=$1",['N'],function(err,shareressearchs){

//   console.log("membersids",ressearch1)
          if(err)
          {
             console.log("result1 is", err);
          }
 else
 {


           pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

     res.render('memberModule/member_share_search',{
        shareressearchs:shareressearchs.rows,
        pagetype:"ADD",
        memberdetails:ressearch1.rows,
        moment:moment
 
     });
      });
      }


 });
 }





router.post('/mem_share_detail_searcher',mem_share_detail_searcher)
function mem_share_detail_searcher(req,res)
{
console.log("MEMBER SEARCHing");
var mid=req.body.opn_shr_bal;
var filono=req.body.opn_shr_balshare;
var date=req.body.shr_sch_frm_date;
var betweendate=req.body.shr_sch_to_date;
console.log('data to search',req.body.opn_shr_bal,req.body.opn_shr_balshare,req.body.shr_sch_frm_date,req.body.shr_sch_to_date);
console.log(mid!=null && filono!='' && date!='' && betweendate!='')
console.log(date=='' && betweendate=='' && mid!='' && filono!='')
console.log(mid!=null && filono=='' && date=='' && betweendate=='')
console.log(mid=='Select' && filono=='' && date!='' && betweendate!='')

console.log(mid=='' && filono!='' && date=='' && betweendate=='')
//console.log(mid=='' && filono=='' && date!='' && betweendate=='')



if(mid!='' && filono!='' && date!='' && betweendate!=''){
     mid=req.body.opn_shr_bal;
     filono=req.body.opn_shr_balshare;
     date=req.body.shr_sch_frm_date;
     betweendate=req.body.shr_sch_to_date;
}
else if(date=='' && betweendate=='' && mid!='' && filono!=''){
    console.log("when both dates are missing")
     mid=req.body.opn_shr_bal;
     filono=req.body.opn_shr_balshare;
    date=null;
    betweendate=null;

}

else if(mid!=null && filono=='' && date=='' && betweendate==''){
    console.log("when only mid is filled")
    mid=req.body.opn_shr_bal;
    filono=null;
    date=null;
    betweendate=null;
}
else if(mid=='Select' && filono=='' && date!='' && betweendate!=''){
    console.log("when both date are filled")
    mid=null;
    filono=null;
    date=req.body.shr_sch_frm_date;
    betweendate=req.body.shr_sch_to_date;
}
else if(mid=='' && filono!='' && date=='' && betweendate==''){
    console.log("when only folio is filled")
    mid=null;
    filono=req.body.opn_shr_balshare;
    date=null;
    betweendate=null;
}
// changed by ranjeet
// var date=req.body.date1;
// var betweendate=req.body.date2;

// end changes
console.log('midpppppp',mid);
console.log('filono',filono);
console.log('date',date);
console.log('betweendate',betweendate);



// pgdbconnect.query("select * from member_share_details where msd_d_date between $1 and $2 or msd_ch_member_id=$3 or msd_n_day_book_folio_num=$4",[date,betweendate,mid,filono],function(err,shareressearch1){

    pgdbconnect.query("select * from member_share_details where (msd_ch_member_id=$1 or msd_n_day_book_folio_num=$2 or (msd_d_date between $3 and $4)) and msd_ch_del_flg='N'",[mid,filono,date,betweendate],function(err,shareressearch1){

    // console.log("search result",shareressearch1.rows)
    if(err)

    {
       console.log("Error with table query", err);
    }

    else
    {
                                   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch3){

        res.render('memberModule/member_share_search',{
            shareressearchs:shareressearch1.rows,
            memberdetails:ressearch3.rows

        });
                                   });
    }

    });
    }



router.post('/edit_sharedata_record',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//

var memshareid= req.body.tempshareid;
// var memid1= req.body.tempmemberid;

 console.log("member id to edit",memshareid);


            //console.log("Result of Branch", result5);
            pgdbconnect.query("select * from member_share_details where msd_n_member_share_id=$1 and msd_ch_del_flg=$2 ",[memshareid,'N'],function(err,searchres)

            {

                 pgdbconnect.query("select * from member_details",function(err,memshres){

                    var member_id = searchres.rows[0].msd_ch_member_id;
                    var shareid=searchres.rows[0].msd_n_member_share_id;
                    var date=searchres.rows[0].msd_d_date;
                    var meetingid=searchres.rows[0].msd_ch_member_id;


                    var bordmeetingdate=searchres.rows[0].msd_d_board_meeting_date;

                    var meeting_details=searchres.rows[0].msd_ch_board_meeting_details;
                    console.log('meeting details',meeting_details)
                    var folionum=searchres.rows[0].msd_n_day_book_folio_num;

                    var sharevalue=searchres.rows[0].msd_n_share_value;

                    var share_certificate=searchres.rows[0].msd_ch_share_certificate_num;
                    var share_allocate=searchres.rows[0].msd_n_num_shares_allotted;
                    var share_districtive=searchres.rows[0].msd_ch_share_distinctive_num;
                    var shares_redeem=searchres.rows[0].msd_n_num_shares_redeemed;
                    var shareredeem_value =searchres.rows[0].msd_n_redeemed_share_value;

                    var redeem_dist_num=searchres.rows[0].msd_ch_redeemed_shares_distinctive;
                    var share_balance=searchres.rows[0].msd_n_bal_share;
                    var share_balance_value=searchres.rows[0].msd_n_balance_shares_value;
                    var share_balance_certificate=searchres.rows[0].msd_n_share_certificate_balance_shares;
                    var share_dist_balance=searchres.rows[0].msd_n_distinctive_shares_balance;

                    var days=searchres.rows[0].msd_n_days;
                    var product=searchres.rows[0].msd_ch_product;




                    //req.flash('success_msg', 'Data can be editable');
//res.locals.message=req.flash();
    res.render('memberModule/member_shares',{
        member_id:member_id,
        shareid:shareid,
        bordmeetingdate:bordmeetingdate,
        meeting_details:meeting_details,
        meetingid:meetingid,
        date:date,
        folionum:folionum,
        sharevalue:sharevalue,
        share_certificate:share_certificate,
        share_allocate:share_allocate,
        share_districtive:share_districtive,
        shares_redeem:shares_redeem,
        shareredeem_value:shareredeem_value,
        redeem_dist_num:redeem_dist_num,
        share_balance:share_balance,
        share_balance_value:share_balance_value,
        share_balance_certificate:share_balance_certificate,
        share_dist_balance:share_dist_balance,
        days:days,
        product:product,
         pagetype:"EDIT",
         Dividendshare:memshres.rows,
         moment:moment

    });
});
            });

        });

//////////////////////////////////////////////////////////////////////////////////////////////////

        router.post('/view_sharedata_record',function(req,res){
            console.log("populate fields");
            var divtype="EDIT";
          console.log("DIV TYPE on edit populate",divtype);

            //Bank Branch details-start//

        var memshareid= req.body.tempshareid1;
        // var memid1= req.body.tempmemberid;

         console.log("member id to edit",memshareid);


                    //console.log("Result of Branch", result5);
                    pgdbconnect.query("select * from member_share_details where msd_n_member_share_id=$1 and msd_ch_del_flg=$2 ",[memshareid,'N'],function(err,searchres)

                    {

                         pgdbconnect.query("select * from member_share_details ",function(err,memshres){

                            var member_id = searchres.rows[0].msd_ch_member_id;
                            var shareid=searchres.rows[0].msd_n_member_share_id;
                            console.log('shareid dispay',shareid)
                            var date=searchres.rows[0].msd_d_date;

                            var meetingid=searchres.rows[0].msd_ch_member_id;
                            var bordmeetingdate=searchres.rows[0].msd_d_board_meeting_date;
                            var meeting_details=searchres.rows[0].msd_ch_board_meeting_details;
                            console.log('meeetingg details',meeting_details);

                            var folionum=searchres.rows[0].msd_n_day_book_folio_num;

                            var sharevalue=searchres.rows[0].msd_n_share_value;

                            var share_certificate=searchres.rows[0].msd_ch_share_certificate_num;
                            var share_allocate=searchres.rows[0].msd_n_num_shares_allotted;
                            var share_districtive=searchres.rows[0].msd_ch_share_distinctive_num;
                            var shares_redeem=searchres.rows[0].msd_n_num_shares_redeemed;
                            var shareredeem_value =searchres.rows[0].msd_n_redeemed_share_value;

                            var redeem_dist_num=searchres.rows[0].msd_ch_redeemed_shares_distinctive;
                            var share_balance=searchres.rows[0].msd_n_bal_share;
                            var share_balance_value=searchres.rows[0].msd_n_balance_shares_value;
                            var share_balance_certificate=searchres.rows[0].msd_n_share_certificate_balance_shares;
                            var share_dist_balance=searchres.rows[0].msd_n_distinctive_shares_balance;

                            var days=searchres.rows[0].msd_n_days;
                            var product=searchres.rows[0].msd_ch_product;
                            console.log('productiddddddddd',product);
        
                          //  req.flash('success_msg', 'Data viewing successfully');
        //res.locals.message=req.flash();
            res.render('memberModule/member_shares',{
                member_id:member_id,
                shareid:shareid,
                bordmeetingdate:bordmeetingdate,
                meeting_details:meeting_details,
                meetingid:meetingid,
                date:date,
                folionum:folionum,
                sharevalue:sharevalue,
                share_certificate:share_certificate,
                share_allocate:share_allocate,
                share_districtive:share_districtive,
                shares_redeem:shares_redeem,
                shareredeem_value:shareredeem_value,
                redeem_dist_num:redeem_dist_num,
                share_balance:share_balance,
                share_balance_value:share_balance_value,
                share_balance_certificate:share_balance_certificate,
                share_dist_balance:share_dist_balance,
                days:days,
                product:product,
                 pagetype:"VIEW",
                 Dividendshare:memshres.rows,
                 moment:moment
        
            });
        });
                    });

                });

        //delete share
                router.post('/delete_sharedata_record',delete_sharedata_record)
                function delete_sharedata_record(req,res){



                    var memid= req.body.tempshareid2;
                    console.log("id to delete",memid)
                    pgdbconnect.query("update member_share_details set msd_ch_del_flg=$1 where msd_n_member_share_id=$2",['Y',memid],function(err,delres){

                        console.log("deleted result",delres);
                        pgdbconnect.query("select * from member_share_details where msd_ch_del_flg=$1",['N'],function(err,searchres){
                                   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){

                    //Bank Branch details-start//
                    req.flash('success_msg', 'Record Deleted successfully');
                    res.locals.message=req.flash();
                        res.render('memberModule/member_share_search',{
                            shareressearchs:searchres.rows,
                             memberdetails:ressearch1.rows

                    });
                                   });
                });
                });
                };


                router.post('/member_sharedata_upedating',member_sharedata_upedating);
                function member_sharedata_upedating(req,res){

                    var member_id = req.body.divmemid_ed;
                    console.log("member shared EDITTTTTTTTTT",member_id)
                    var shareid=req.body.shared_edit;
                    // changed by ranjeet
                    // var date=req.body.ed_date;
                    // var bordmeetingdate=req.body.ed_date1;
                    var date=req.body.shr_date_ed;
                    var bordmeetingdate=req.body.do_brd_mtg_ed;
                    // end changes

                    var meetingid=req.body.opn_shr_bal_ed;
                    
                    var meeting_details=req.body.meeting_details_ed;

                    var folionum=req.body.ent_fee1_ed2;

                    var sharevalue=req.body.ent_fee2_ed3;

                    var share_certificate=req.body.opn_shr_bal2_ed3;
                    var share_allocate=req.body.opn_shr_bal1_ed2;
                    var share_districtive=req.body.ent_fee3_ed;
                    var shares_redeem=req.body.opn_shr_bal3_ed;
                    var shareredeem_value =req.body.ent_fee4_ed;

                    var redeem_dist_num=req.body.opn_shr_bal4_ed;
                    var share_balance=req.body.ent_fee5_ed;
                    var share_balance_value=req.body.opn_shr_bal5_ed;
                    var share_balance_certificate=req.body.ent_fee6_ed;
                    var share_dist_balance=req.body.opn_shr_bal6_ed;

                    var days=req.body.ent_fee7_ed;
                    var product=req.body.Product;

                    console.log('member_id',member_id);
                    console.log('shareid',shareid);
                    console.log('date',date);

console.log("data to update member shares",date,bordmeetingdate,meetingid,meeting_details,folionum,sharevalue,share_certificate,share_districtive,shareredeem_value,shares_redeem,redeem_dist_num,share_balance,share_balance_value,share_balance_certificate,share_dist_balance,days,product,share_allocate,member_id,shareid)

                    pgdbconnect.query("update member_share_details set msd_d_date=$1, msd_d_board_meeting_date=$2,msd_ch_board_meeting_id=$3,msd_ch_board_meeting_details=$4,msd_n_day_book_folio_num=$5,msd_n_share_value=$6,msd_ch_share_certificate_num=$7,msd_ch_share_distinctive_num=$8,msd_n_redeemed_share_value=$9,msd_n_num_shares_redeemed=$10,msd_ch_redeemed_shares_distinctive=$11,msd_n_bal_share=$12,msd_n_balance_shares_value=$13,msd_n_share_certificate_balance_shares=$14,msd_n_distinctive_shares_balance=$15,msd_n_days=$16,msd_ch_product=$17,msd_n_num_shares_allotted=$18,msd_ch_member_id=$19 where msd_n_member_share_id=$20",[date,bordmeetingdate,meetingid,meeting_details,folionum,sharevalue,share_certificate,share_districtive,shareredeem_value,shares_redeem,redeem_dist_num,share_balance,share_balance_value,share_balance_certificate,share_dist_balance,days,product,share_allocate,member_id,shareid],function(err,upsearchres){

                        if (err)
                        {
                                   console.error('Error with table query', err);
                       }
                       else
                     {

                       pgdbconnect.query("select * from member_share_details where msd_ch_del_flg='N'",function(err,shareupdate){
                   pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,ressearch1){
                    req.flash('success_msg', 'Record updated successfully');
                    res.locals.message=req.flash();
                        res.render('memberModule/member_share_search',{
                            shareressearchs:shareupdate.rows,
                            memberdetails:ressearch1.rows

                     });
                       });
                       });
                     }

                    });
                     }
/* MEMBER SHARE DETAILS- END*/


/* MEMBER HOUSE DETAILS- START*/

router.get('/mem_hse_det',function(req,res){

    pgdbconnect.query("select * from member_details",function(err,resu)
    {
        if(err) throw err;


    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
    {
        if(err) throw err;


        pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
    {
        if(err) throw err;

    res.render('memberModule/member_house_details',{
        member:resu.rows,
       cities:resu1.rows,
       states:resu2.rows,
       pagetype:'ADD'

    });

});
    });

});

});
router.post('/mem_hse_det_add',function(req,res){
     var divtype="ADD";
     console.log("DIV TYPE",divtype);

  var house_id;
    var selt_mem = req.body.selt_mem;
    var house_num = req.body.house_num;
    var add_line = req.body.add_line;
    var vill_town = req.body.vill_town;
    var mem_city =JSON.parse(req.body.mem_city).city;
    console.log(mem_city);
    var house_state = req.body.house_state;
    var pincode = req.body.pincode;
    var description = req.body.description;
    var area_sqft = req.body.area_sqft;
    var market_value = req.body.market_value;
    console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);


    pgdbconnect.query("select * from member_house_details",function(err,result) {
        if(result.rowCount==0){
            house_id=1;

    // console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);
    pgdbconnect.query( "insert into member_house_details(mhd_ch_member_id,mhd_ch_house_number,mhd_ch_address_line1,mhd_ch_village,mhd_ch_city,mhd_ch_state,mhd_n_pincode,mhd_ch_description,mhd_n_builtup_area_sqft,mhd_n_market_value,mhd_ch_del_flg,mhd_ch_house_mem_id)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value,'N',house_id] ,function(err,res1){

        if(err) throw err;
        console.log("member house details",res1);

    pgdbconnect.query("select * from member_details where md_ch_member_id='N'",function(err,resu)
   {
       if(err) throw err;

       pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
   {
       if(err) throw err;

       pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
   {
       if(err) throw err;

     req.flash('success_msg',"Data inserted successfully");
     res.locals.message=req.flash();

   res.render('memberModule/member_house_details',{
       member:resu.rows,
       cities:resu1.rows,
       states:resu2.rows,
       pagetype:divtype
   });
});
});
});
});

}
else{
    pgdbconnect.query("select max(mhd_ch_house_mem_id) from member_house_details",function(err,result) {
       // console.log("max value check",result)
      //  console.log("max value check",result.rows[0].max)

      house_id=parseInt(result.rows[0].max)+1;
      //  console.log("when more rows exxxists",bank_id)



// console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);
pgdbconnect.query( "INSERT INTO member_house_details(mhd_ch_member_id, mhd_ch_house_number, mhd_ch_address_line1, mhd_ch_village, mhd_ch_city, mhd_ch_state, mhd_n_pincode, mhd_ch_description, mhd_n_builtup_area_sqft, mhd_n_market_value, mhd_ch_del_flg, mhd_ch_house_mem_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value,'N',house_id] ,function(err,res1){
    if(err) throw err;
    console.log("member house details",res1);

pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,resu)
{
   if(err) throw err;

   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
{
   if(err) throw err;

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
{
   if(err) throw err;

     req.flash('success_msg',"Data inserted successfully");
     res.locals.message=req.flash();


res.render('memberModule/member_house_details',{
   member:resu.rows,
   cities:resu1.rows,
   states:resu2.rows,
   pagetype:divtype
});
});
});
});
});
    });
}

});})





router.get('/mem_hse_det_ser',function(req,res){

    // pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,memres){
    pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,houseres){
 pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg='N' ",function(err,searchres)
    {


        if(err) throw err;
   res.render('memberModule/member_house_details_search',{
   houseresults:houseres.rows,
   memberdetails:searchres.rows
});
 });
});
});




router.post('/search_particular_house_rec', function(req,res){
    console.log("search particular record");

    var search_sel_mem = req.body.search_sel_mem;


    pgdbconnect.query("select * from member_house_details where (mhd_ch_member_id=$1) and (mhd_ch_del_flg='N')",[search_sel_mem],function(err,searchres)
    {
        if(err) throw err;
       // console.log("searchres is", searchres.rows);
     pgdbconnect.query("select * from member_house_details where  mhd_ch_del_flg=$1",['N'],function(err,memres){
 if(err) throw err;
        res.render('memberModule/member_house_details_search',{

            houseresults:searchres.rows,
           memberdetails:memres.rows
});

        });
    });
     });

     router.post('/edit_data_populate',function(req,res){
        console.log("populate fields");
        var divtype="EDIT";
      console.log("DIV TYPE on edit populate",divtype);

        //Member House details-start//
    var houseid= req.body.temphouseid;
    console.log("House id to edit",houseid)
    pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,result1)
    {
        if(err) throw err;

        pgdbconnect.query("select * from common_code_tbl where code_id='CTY'limit 50",function(err,result2)
        {
            if(err) throw err;
           // console.log("result2 is", result2);

            pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result4)
            {
                if(err) throw err;
               // console.log("Result of Member House", result4);

                pgdbconnect.query("select * from member_house_details where mhd_ch_house_mem_id=$1",[houseid],function(err,searchres)

                {
           pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,memberres)
{
                    console.log("searchres",memberres);
        var house_edit_id =  searchres.rows[0].mhd_ch_house_mem_id;
        var selt_mem = searchres.rows[0].mhd_ch_member_id;
        var house_num = searchres.rows[0].mhd_ch_house_number;
        var add_line1 = searchres.rows[0].mhd_ch_address_line1;
        var village =  searchres.rows[0].mhd_ch_village;
        var city = searchres.rows[0].mhd_ch_city;
        var state =  searchres.rows[0].mhd_ch_state;
        console.log("city state",state,city)
        var pincode =  searchres.rows[0].mhd_n_pincode;
        var desc =  searchres.rows[0].mhd_ch_description;
        var area =  searchres.rows[0].mhd_n_builtup_area_sqft;
        var market_value =  searchres.rows[0].mhd_n_market_value;

                    res.render('memberModule/member_house_details',{
                        selt_mem:selt_mem,
            house_edit_id:house_edit_id,
            house_num:house_num,
            add_line1:add_line1,
            village:village,
            city:city,
            state:state,
            pincode:pincode,
            desc:desc,
            area:area,
            market_value:market_value,
            pagetype:divtype,

            states:result4.rows,
            cities:result2.rows,
            member:result1.rows,
            memberdetails:memberres.rows

        });
    });
    });
    });
        });
    });
    });

  ///////member house details edit records//////
router.get('/member_house_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,result1)
{
    if(err) throw err;

    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result2)
    {
        if(err) throw err;
       // console.log("result2 is", result2);

        pgdbconnect.query("select * from common_code_tbl where code_id='STA' ",function(err,result4)
        {
            if(err) throw err;
       // console.log("Bank code details is", reslt);
        pgdbconnect.query("select * from member_house_details  where mhd_ch_del_flg=$1",['N'],function(err,houseres){

            if(err) throw err;


    res.render('memberModule/member_house_details',{
        states:result4.rows,
        cities:result2.rows,
        member:result1.rows,
        pagetype:divtype,
        houseresults:houseres.rows

    });
});
});
});
});
});


router.post('/update_member_house_edit',function(req,res){
    console.log("Welcome");

    var mem_ed = req.body.mem_ed;
    console.log("id to update",mem_ed)
    var house_num_ed = req.body.house_num_ed;
    var add_line1_ed = req.body.add_line1_ed;
    var village_ed = req.body.village_ed;
    var city_ed = JSON.parse(req.body.city_ed).city;
    console.log(city_ed)
    var hsestate_ed = req.body.hsestate_ed;
    var pincode_ed = req.body.pincode_ed;
    var desc_ed = req.body.desc_ed;
    var area_ed = req.body.area_ed;
    var market_value_ed = req.body.market_value_ed;
    var house_edit_id =  req.body.house_edit_id;

    console.log("edit details",mem_ed,house_num_ed,add_line1_ed,village_ed,city_ed,hsestate_ed,pincode_ed,desc_ed,area_ed,market_value_ed,house_edit_id);
    pgdbconnect.query('update member_house_details set mhd_ch_member_id=$1,mhd_ch_house_number=$2, mhd_ch_address_line1=$3,mhd_ch_village=$4,mhd_ch_city=$5,mhd_ch_state=$6,mhd_n_pincode=$7,mhd_ch_description=$8,mhd_n_builtup_area_sqft=$9,mhd_n_market_value=$10 where mhd_ch_house_mem_id=$11',[mem_ed,house_num_ed,add_line1_ed,village_ed,city_ed,hsestate_ed,pincode_ed,desc_ed,area_ed,market_value_ed,house_edit_id],function(err,result){

            if(err) throw err;

   //      console.log("result12:",result);
            pgdbconnect.query("select * from member_details where md_ch_del_flg=$1",['N'],function(err,memres){

   pgdbconnect.query("select * from member_house_details  where mhd_ch_del_flg=$1",['N'],function(err,houseres){

    if(err) throw err;
               // console.log("result:",loginres);
   //flash messege
   req.flash('success_msg', 'Data updated successfully');
   res.locals.message=req.flash();

            res.render('memberModule/member_house_details_search',{
                houseresults:houseres.rows,
                memberdetails:memres.rows

            });
        });
            });

        });


    });


    router.post('/view_data_populate',function(req,res){
        console.log("populate fields");
        var divtype="VIEW";
      console.log("DIV TYPE on view data",divtype);

        //Bank Branch details-start//
    var houseid= req.body.temphouseid1;
    console.log("house id to view",houseid)



                pgdbconnect.query("select * from member_house_details where mhd_ch_house_mem_id=$1",[houseid],function(err,searchres)
                {
                    console.log("searchres",searchres);
        var house_edit_id =  searchres.rows[0].mhd_ch_house_mem_id;
        var selt_mem = searchres.rows[0].selt_mem;
        var house_num = searchres.rows[0].mhd_ch_house_number;
        var add_line1 = searchres.rows[0].mhd_ch_address_line1;
        var village =  searchres.rows[0].mhd_ch_village;
        var city = searchres.rows[0].mhd_ch_city;
        var state =  searchres.rows[0].mhd_ch_state;
        var pincode =  searchres.rows[0].mhd_n_pincode;
        var desc =  searchres.rows[0].mhd_ch_description;
        var area =  searchres.rows[0].mhd_n_builtup_area_sqft;
        var market_value =  searchres.rows[0].mhd_n_market_value;

        res.render('memberModule/member_house_details',{
            selt_mem:selt_mem,
            house_edit_id:house_edit_id,
            house_num:house_num,
            add_line1:add_line1,
            village:village,
            city:city,
            state:state,
            pincode:pincode,
            desc:desc,
            area:area,
            market_value:market_value,
            pagetype:divtype,
            pagetype:"VIEW"

        });
    });

        });


router.post('/delete_data_populate',function(req,res){

    console.log("delete");

            var delid= req.body.temphouseid2;
            console.log("id to delete",delid)
            pgdbconnect.query("update member_house_details set mhd_ch_del_flg=$1 where mhd_ch_house_mem_id=$2",['Y',delid],function(err,delres){

                console.log("deleted result",delres);
          pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,memres){

                pgdbconnect.query("select * from member_house_details where mhd_ch_del_flg=$1",['N'],function(err,searchres){
                   // console.log("deleted result11",searchres);
            //house delete details-start//
             req.flash('success_msg', 'Record Deleted successfully');
             res.locals.message=req.flash();
                res.render('memberModule/member_house_details_search',{

                    houseresults:searchres.rows,
                    memberdetails:memres.rows
              });

            });
        });
        });
        });

/* MEMBER HOUSE DETAILS- END*/
module.exports = router;