var express = require('express');
var router = express.Router();
var pgdbconnect=require('../../routes/database/pgdbconnect');




// Bank Page
router.get('/bank',function(req,res){
    res.render('bankModule/bank');
});
//Bank Account Master
router.get('/asso_bank_account_master',function(req,res){
    res.render('bankModule/associate_bank_account_master');
});

router.get('/asso_bank_account_master_search',function(req,res){
    res.render('bankModule/associate_bank_account_master_search');
});
//Cheque Book 
router.get('/asso_bank_cheque_book',function(req,res){
    res.render('bankModule/associate_bank_chequebook_details');
});
router.get('/asso_bank_cheque_book_search',function(req,res){
    res.render('bankModule/associate_bank_chequebook_search');
});

//Associate Bank Account Type
router.get('/asso_bank_account_type',function(req,res){
    res.render('bankModule/');
});

router.get('/asso_bank_account_search',function(req,res){
    res.render('bankModule/associate_bank_acctype_search');
});

// Bank Page
router.get('/asso_bank',function(req,res){
var divtype=req.query.key;

console.log("DIV TYPE",divtype);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,rslt) {
        if(err) throw err;
        console.log("result2 is", rslt);

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
        if(err) throw err;
        console.log("Bank code details is", reslt);

    res.render('bankModule/associate_bank',{
        states:rslt.rows,
        bank:reslt.rows,
        pagetype:divtype
    });
});
});
});

//associate bank_ back to ssearch

router.get('/asso_bank_search',function(req,res){
    console.log("vgwvcs");
 
    pgdbconnect.query("select ab_n_bank_code,ab_ch_bank_name,ab_ch_is_dccb,ab_ch_status from associate_bank limit 50 ",function(err,bankres){
    
        if(err) throw err;
        console.log(bankres);
        
            res.render('bankModule/associatebanksearch',{
            bankdetails:bankres.rows
            
            });
            
            });
        });


// Bank Page
router.get('/asso_branch',function(req,res){
    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result2) 
    {
        if(err) throw err;
        console.log("result2 is", result2);

        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
        {
            if(err) throw err;
            console.log("Result of Bank", result4);


    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
            console.log("Result of Branch", result5);

    res.render('bankModule/associate_branch',{
        states:result2.rows,
        banks:result4.rows,
        branch:result5.rows
        
    });
    });    
    });
});
});


router.get('/asso_branch_search',function(req,res){

    console.log("vgwvcs");
 
    pgdbconnect.query("select abb_n_bank_code, abb_ch_bank_name, abb_n_branch_code, abb_ch_branch_name,abb_ch_is_dccb, abb_n_ifs_code_neft, abb_n_ifs_code_rtgs, abb_n_micr_code from associate_branch limit 100 ",function(err,branchres){
    
        if(err) throw err;
        console.log(branchres);
            

    res.render('bankModule/associatebranchsearch',{
        branchdetails:branchres.rows
            
            });
            
            });
    });




router.post('/branch_details',function(req,res){
    console.log("Hii");

    //Bank Branch details-start//

    var record_bnk_cd = req.body.record_bnk_cd;
    
    var record_bnk_name = req.body.record_bnk_name;
    var record_branch_code = req.body.record_branch_code;
    var record_branch_name = req.body.record_branch_name;
    var ifsc_cd = req.body.ifsc_cd;
    var ifsc_rtgs = req.body.ifsc_rtgs;
    var micr_code = req.body.micr_code
    var add_line1 = req.body.add_line1
    var district = req.body.district;
    var state = req.body.state;
    var pincode = req.body.pincode;
    var land_mark = req.body.land_mark;
    var ph_num1 = req.body.ph_num1;
    var ph_num2 = req.body.ph_num2;
    var email = req.body.email;
    var url = req.body.url;
    var con_per1 = req.body.con_per1;
    var con_per2 = req.body.con_per2;
                        
    console.log("Bank Branch Details",record_bnk_cd,record_bnk_name,record_branch_code,record_branch_name,ifsc_cd,ifsc_rtgs,micr_code,add_line1,district,state,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2);

    pgdbconnect.query("insert into associate_branch ( abb_n_bank_code, abb_ch_bank_name, abb_n_branch_code, abb_ch_branch_name, abb_n_ifs_code_neft, abb_n_ifs_code_rtgs, abb_n_micr_code, abb_ch_address_line1, abb_ch_district, abb_ch_state, abb_n_pincode, abb_ch_landmark, abb_n_phone_number1, abb_n_phone_number2, abb_ch_email, abb_ch_url, abb_n_contact_person1, abb_n_contact_person2, abb_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)",[record_bnk_cd,record_bnk_name,record_branch_code,record_branch_name,ifsc_cd,ifsc_rtgs,micr_code,add_line1,district,state,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2,'N'],function(err,loginres){
        if(err) throw err;
        console.log("Result of Member Details",loginres);

    });

    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        console.log("Result of States", result2);

        pgdbconnect.query("select * from bank_code_details",function(err,result4)
            {
                if(err) throw err;
                console.log("Result of Bank", result4);


        pgdbconnect.query("select * from branch_code_details",function(err,result5)
            {
                if(err) throw err;
                console.log("Result of Branch", result5);

        req.flash('success_msg',"Data inserted successfully");
                   res.locals.message=req.flash();

    res.render('bankModule/associate_branch',{
        states:result2.rows,
        banks:result4.rows,
        branch:result5.rows
    });
    });
    });
});
});



router.post('/bnk_details',function(req,res){
    console.log("Hii");

var bnk_cd = req.body.bnk_cd;                                     
var bnk_name = req.body.bnk_name;                                
var is_dccb = req.body.is_dccb;                                
var add_line1 = req.body.add_line1;                                
var district = req.body.district;                                
var bnkstate = req.body.bnkstate;                                 
var pincode = req.body.pincode;                                 
var land_mark = req.body.land_mark;                                  
var ph_num1 = req.body.ph_num1;                                
var ph_num2 = req.body.ph_num2;                                 
var email = req.body.email;                                 
var url = req.body.url;                                 
var con_per1 = req.body.con_per1;                                
var con_per2 = req.body.con_per2;


console.log("Bank Details",bnk_cd,bnk_name,is_dccb,add_line1,district,bnkstate,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2);
pgdbconnect.query("insert into associate_bank ( ab_n_bank_code, ab_ch_bank_name, ab_ch_is_dccb, ab_ch_address_line1, ab_ch_district, ab_ch_state, ab_n_pincode, ab_ch_landmark,  ab_n_phone_number1, ab_n_phone_number2, ab_ch_email, ab_ch_url, ab_n_contact_person1, ab_n_contact_person2, ab_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)",[bnk_cd,bnk_name,is_dccb,add_line1,district,bnkstate,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2,'N'],function(err,loginres){
    if(err) throw err;
    console.log("Result of Bank Details",loginres.rows[0]);

});
pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,rslt) {
    if(err) throw err;
    console.log("result2 is", rslt);
    
    pgdbconnect.query("select * from bank_code_details ",function(err,reslt) {
        if(err) throw err;
        console.log("Bank code details is", reslt);

    //flash messege
        req.flash('success_msg', 'Data inserted successfully');
       res.locals.message=req.flash();
       
res.render('bankModule/associate_bank',{
    states:rslt.rows,
    bank:reslt.rows
});
});
});
});
module.exports = router;