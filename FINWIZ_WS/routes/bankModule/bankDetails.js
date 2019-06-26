var express = require('express');
var router = express.Router();
var pgdbconnect=require('../../routes/database/pgdbconnect');

var moment=require('moment');


// Bank Page
router.get('/bank',function(req,res){
    res.render('bankModule/bank');
});



/* Associate Bank - START*/


        router.post('/delete_bank_data',function(req,res){

   
  
            var delid= req.body.tempbankdelid1;
            console.log("id to delete",delid)
            pgdbconnect.query("update associate_bank set ab_ch_del_flg=$1 where ab_ch_bank_id=$2",['Y',delid],function(err,delres){
        
                console.log("deleted result",delres);
                pgdbconnect.query("select * from associate_bank where ab_ch_del_flg=$1 order by ab_ch_bank_id",['N'],function(err,searchres){
                    pgdbconnect.query("select * from associate_bank where ab_ch_del_flg='N'",function(err,bankreslt){
    
                        if(err) throw err;
                   // console.log("deleted result11",searchres);
            //Bank Branch details-start//
            req.flash('success_msg', 'Record Deleted successfully');
            res.locals.message=req.flash();
                res.render('bankModule/associatebanksearch',{
               
                    bankdetails:searchres.rows,
                    banksrch:bankreslt.rows
                });    
        
            });
        });
        });
        });


// Bank Page
router.get('/asso_bank',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,rslt) {
        if(err) throw err;
        //console.log("result2 is", rslt);

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
        if(err) throw err;
       // console.log("Bank code details is", reslt);

    res.render('bankModule/associate_bank',{
        states:rslt.rows,
        bank:reslt.rows,
        pagetype:divtype
    });
});
});
});
 
///////////associate bank edit records//////
router.get('/asso_bank_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,rslt) {
        if(err) throw err;
       // console.log("result2 is", rslt);

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
        if(err) throw err;
       // console.log("Bank code details is", reslt);
        pgdbconnect.query("select * from associate_bank limit 50 ",function(err,bankres){
    
            if(err) throw err;
         
            
    res.render('bankModule/associate_bank',{
        states:rslt.rows,
        bank:reslt.rows,
        pagetype:divtype,
        bankdetails:bankres.rows

    });
});
});
});
});
router.get('/asso_bank_search',function(req,res){
    pgdbconnect.query("select * from associate_bank where ab_ch_del_flg='N'",function(err,bankres){
    
        if(err) throw err;
        pgdbconnect.query("select * from associate_bank where ab_ch_del_flg='N'",function(err,bankreslt){
    
            if(err) throw err;
     
        
res.render('bankModule/associatebanksearch',{

    bankdetails:bankres.rows,
    banksrch:bankreslt.rows
});
           
        });
    });
});


     router.post('/search_particular_rec', function(req,res){
console.log("search particular record");

var search_bank_code = req.body.search_bank_code;
var bank_name = req.body.bank_name;
var Is_dccb = req.body.Is_dccb;
console.log(search_bank_code, bank_name, Is_dccb);

pgdbconnect.query("select * from associate_bank where ((ab_n_bank_code=$1 or ab_ch_bank_name=$2 or ab_ch_is_dccb=$3 ) and (ab_ch_del_flg='N'))",[search_bank_code,bank_name,Is_dccb],function(err,searchres) 
{
    if(err) throw err;
   // console.log("searchres is", searchres.rows);
   pgdbconnect.query("select * from associate_bank where ab_ch_del_flg='N'",function(err,bankreslt){
    
    if(err) throw err;


    res.render('bankModule/associatebanksearch',{

        bankdetails:searchres.rows,
        banksrch:bankreslt.rows
    
    });
});
 });
});


 
router.post('/bnk_details',function(req,res){
    console.log("Hii");
var divtype='ADD';
var bank_cd = req.body.bank_cd;                                     
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
var bank_id;
pgdbconnect.query("select * from associate_bank",function(err,result) {
    if(result.rowCount==0){
        bank_id='1'

console.log("Bank Details",bank_id,bank_cd,bnk_name,is_dccb,add_line1,district,bnkstate,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2);
pgdbconnect.query("insert into associate_bank ( ab_ch_bank_id,ab_n_bank_code, ab_ch_bank_name, ab_ch_is_dccb, ab_ch_address_line1, ab_ch_district, ab_ch_state, ab_n_pincode, ab_ch_landmark,  ab_n_phone_number1, ab_n_phone_number2, ab_ch_email, ab_ch_url, ab_n_contact_person1, ab_n_contact_person2, ab_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)",[bank_id,bank_cd,bnk_name,is_dccb,add_line1,district,bnkstate,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2,'N'],function(err,loginres){
    if(err) throw err;
    console.log("Result of Bank Details");

});
pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,rslt) {
    if(err) throw err;
   // console.log("result2 is", rslt);
    
    pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
        if(err) throw err;
        //console.log("Bank code details is", reslt);

    //flash messege
        req.flash('success_msg', 'Data inserted successfully');
       res.locals.message=req.flash();
       
res.render('bankModule/associate_bank',{
    states:rslt.rows,
    bank:reslt.rows,
    pagetype:divtype
});
});

});
    }
else{

    
    pgdbconnect.query("select max(ab_ch_bank_id) from associate_bank",function(err,result) {
       // console.log("max value check",result)
      //  console.log("max value check",result.rows[0].max)
      
        bank_id=parseInt(result.rows[0].max)+1;
      //  console.log("when more rows exxxists",bank_id)



console.log("Bank Details",bank_id,bank_cd,bnk_name,is_dccb,add_line1,district,bnkstate,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2);
pgdbconnect.query("insert into associate_bank ( ab_ch_bank_id,ab_n_bank_code, ab_ch_bank_name, ab_ch_is_dccb, ab_ch_address_line1, ab_ch_district, ab_ch_state, ab_n_pincode, ab_ch_landmark,  ab_n_phone_number1, ab_n_phone_number2, ab_ch_email, ab_ch_url, ab_n_contact_person1, ab_n_contact_person2, ab_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)",[bank_id,bank_cd,bnk_name,is_dccb,add_line1,district,bnkstate,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2,'N'],function(err,loginres){
    if(err) throw err;
    console.log("Result of Bank Details");

});
pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,rslt) {
    if(err) throw err;
   // console.log("result2 is", rslt);
    
    pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
        if(err) throw err;
        //console.log("Bank code details is", reslt);

    //flash messege
        req.flash('success_msg', 'Data inserted successfully');
       res.locals.message=req.flash();
       
res.render('bankModule/associate_bank',{
    states:rslt.rows,
    bank:reslt.rows,
    pagetype:divtype
});
});

});
    });
}
});
});


router.post('/edit_data_populate',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//
var bankid= req.body.tempbankid;
//console.log("bank id to edit",bankid)

    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result2) 
    {
        if(err) throw err;
       // console.log("result2 is", result2);

        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
        {
            if(err) throw err;
           // console.log("Result of Bank", result4);

            pgdbconnect.query("select * from associate_bank where ab_ch_bank_id=$1 order by ab_ch_bank_id ",[bankid],function(err,searchres)
    
            {
                console.log("searchres",searchres);
                var bank_edit_id =  searchres.rows[0].ab_ch_bank_id;
    var bank_code = searchres.rows[0].ab_n_bank_code;
    var bnk_name = searchres.rows[0].ab_ch_bank_name;
    var is_dccb =  searchres.rows[0].ab_ch_is_dccb;
    var add_line1 = searchres.rows[0].ab_ch_address_line1;
    var dist =  searchres.rows[0].ab_ch_district;
    var state =  searchres.rows[0].ab_ch_state;
    var pincode =  searchres.rows[0].ab_n_pincode;
    var land_mark =  searchres.rows[0].ab_ch_landmark;
    var phone1 =  searchres.rows[0].ab_n_phone_number1;
    var phone2 =  searchres.rows[0].ab_n_phone_number2;
    var mail_id =  searchres.rows[0].ab_ch_email;
    var url =  searchres.rows[0].ab_ch_url;
    var con1 =  searchres.rows[0].ab_n_contact_person1;
    var con2 =  searchres.rows[0].ab_n_contact_person2;
   
                res.render('bankModule/associate_bank',{

        bank_edit_id:bank_edit_id,
        bank_code:bank_code,
        bnk_name:bnk_name,  
        is_dccb:is_dccb,  
        add_line1:add_line1, 
        dist:dist, 
        state:state, 
        pincode:pincode, 
        land_mark:land_mark, 
        phone1:phone1, 
        phone2:phone2, 
        mail_id:mail_id, 
        url:url, 
        con1:con1, 
        con2:con2,
        pagetype:"EDIT",
        bank:result4.rows,
        states:result2.rows
       
    });
});
});
});
    });



      
router.post('/update_bank_edit',function(req,res){
    console.log("Welcomeedittttt");
   
    var bank_cd_ed = req.body.bank_cd_ed;
    var bnk_name_ed = req.body.bnk_name_ed;
    var is_dccb_ed = req.body.is_dccb_ed;
    var add_line1_ed = req.body.add_line1_ed;
    var district_ed = req.body.district_ed;
    var bnkstate_ed = req.body.bnkstate_ed;
    var pincode_ed= req.body.pincode_ed;
    var land_mark_ed= req.body.land_mark_ed;
    var ph_num1_ed= req.body.ph_num1_ed;
    var ph_num2_ed= req.body.ph_num2_ed;
    var email_ed= req.body.email_ed;
    var url_ed= req.body.url_ed;
    var con_per1_ed= req.body.con_per1_ed;
    var con_per2_ed= req.body.con_per2_ed;
    var bank_edit_id= req.body.bank_edit;
    
    console.log("edit details",bank_cd_ed,bnk_name_ed,is_dccb_ed,add_line1_ed,district_ed,bnkstate_ed,pincode_ed,land_mark_ed,ph_num1_ed,ph_num2_ed,email_ed,url_ed,con_per1_ed,con_per2_ed,bank_edit_id);
    pgdbconnect.query('update associate_bank set ab_n_bank_code=$1,ab_ch_bank_name=$2, ab_ch_is_dccb=$3,ab_ch_address_line1=$4,ab_ch_district=$5,ab_ch_state=$6,ab_n_pincode=$7,ab_ch_landmark=$8,ab_n_phone_number1=$9,ab_n_phone_number2=$10,ab_ch_email=$11,ab_ch_url=$12,ab_n_contact_person1=$13,ab_n_contact_person2=$14 where ab_ch_bank_id=$15',[bank_cd_ed,bnk_name_ed,is_dccb_ed,add_line1_ed,district_ed,bnkstate_ed,pincode_ed,land_mark_ed,ph_num1_ed,ph_num2_ed,email_ed,url_ed,con_per1_ed,con_per2_ed,bank_edit_id],function(err,result){

            if(err) throw err;
          
   //      console.log("result12:",result);
      
            pgdbconnect.query("select * from associate_bank where ab_ch_del_flg='N'",function(err,loginres){
                if(err) throw err;
               // console.log("result:",loginres);

               pgdbconnect.query("select * from associate_bank where ab_ch_del_flg='N'",function(err,bankreslt){
    
                if(err) throw err;
              
   //flash messege
   req.flash('success_msg', 'Data updated successfully');
   res.locals.message=req.flash();
   
            res.render('bankModule/associatebanksearch',{
                bankdetails:loginres.rows,
                banksrch:bankreslt.rows
                
            });
            });
        });
        });
    

    });

    router.post('/view_bank_data',function(req,res){
        console.log("populate fields");
        var divtype="VIEW";
      console.log("DIV TYPE on view data",divtype);
    
        //Bank Branch details-start//
    var bankid= req.body.tempbankvid;
    console.log("bank id to view",bankid)
    
     
    
                pgdbconnect.query("select * from associate_bank where ab_ch_bank_id=$1 order by ab_ch_bank_id ",[bankid],function(err,searchres)
        
                {
                    console.log("searchres",searchres)
        var bank_code = searchres.rows[0].ab_n_bank_code; 
        var bnk_name = searchres.rows[0].ab_ch_bank_name;
        var is_dccb =  searchres.rows[0].ab_ch_is_dccb;
        var add_line1 = searchres.rows[0].ab_ch_address_line1;
        var dist =  searchres.rows[0].ab_ch_district;
        var state =  searchres.rows[0].ab_ch_state;
        var pincode =  searchres.rows[0].ab_n_pincode;
        var land_mark =  searchres.rows[0].ab_ch_landmark;
        var phone1 =  searchres.rows[0].ab_n_phone_number1;
        var phone2 =  searchres.rows[0].ab_n_phone_number2;
        var mail_id =  searchres.rows[0].ab_ch_email;
        var url =  searchres.rows[0].ab_ch_url;
        var con1 =  searchres.rows[0].ab_n_contact_person1;
        var con2 =  searchres.rows[0].ab_n_contact_person2;
        
                    res.render('bankModule/associate_bank',{
    
           
            bank_code:bank_code,
            bnk_name:bnk_name,  
            is_dccb:is_dccb,  
            add_line1:add_line1, 
            dist:dist, 
            state:state, 
            pincode:pincode, 
            land_mark:land_mark, 
            phone1:phone1, 
            phone2:phone2, 
            mail_id:mail_id, 
            url:url, 
            con1:con1, 
            con2:con2,
            pagetype:"VIEW"
        
        });
    });
    
        });


/* Associate Bank - END*/

/* Associate Branch - START*/
router.get('/asso_branch_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,rslt) {
        if(err) throw err;
       // console.log("result2 is", rslt);

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
        if(err) throw err;
       // console.log("Bank code details is", reslt);
        pgdbconnect.query("select * from associate_bank limit 50 ",function(err,bankres){
    
            if(err) throw err;
         
            
    res.render('bankModule/associate_branch',{
        states:rslt.rows,
        banks:reslt.rows,
        pagetype:divtype,
        branchdetails:bankres.rows

    });
});
});
});
});


router.get('/asso_branch',function(req,res){
    var divtype=req.query.key;

    console.log("DIV TYPE",divtype);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result2) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
        {
            if(err) throw err;
            //console.log("Result of Bank", result4);


    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
            //.log("Result of Branch", result5);

    res.render('bankModule/associate_branch',{
        states:result2.rows,
        banks:result4.rows,
        branch:result5.rows,
        pagetype:divtype
        
    });
    });    
    });
});
});


router.get('/asso_branch_search',function(req,res){

    console.log("vgwvcs");
 
    pgdbconnect.query("select * from associate_branch  where abb_ch_del_flg='N'",function(err,branchres){
    
        if(err) throw err;
        console.log(branchres);
        pgdbconnect.query("select * from associate_branch where abb_ch_del_flg='N'",function(err,braresu){
    
            if(err) throw err;
         

    res.render('bankModule/associatebranchsearch',{
        branchdetails:branchres.rows,
        brdetails :braresu.rows
    });
            });
            
            });
    });


    router.post('/search_particular_brrec', function(req,res){
        console.log("search particular record");
        
        var search_brbank_code = req.body.search_brbank_code;
        var search_brbank_name = req.body.search_brbank_name;
        var search_branch_code = req.body.search_branch_code;
        var search_branch_name = req.body.search_branch_name;
        var search_ifsc_cd = req.body.search_ifsc_cd;
        var search_ifsc_rtgs = req.body.search_ifsc_rtgs;
        var search_micr_cd = req.body.search_micr_cd;

        console.log("micr_code",search_micr_cd)
       
    console.log("specific",search_brbank_code,search_brbank_name,search_branch_code,search_branch_name,search_ifsc_cd,search_ifsc_rtgs,search_micr_cd);
   console.log("t r f",search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd=='')
   if( search_brbank_code!='' && search_brbank_name!=''&& search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
   search_brbank_code = req.body.search_brbank_code;
   search_brbank_name = req.body.search_brbank_name;
   search_branch_code = req.body.search_branch_code;
   search_branch_name = req.body.search_branch_name;
   search_ifsc_cd = req.body.search_ifsc_cd;
   search_ifsc_rtgs = req.body.search_ifsc_rtgs;
   search_micr_cd = req.body.search_micr_cd;
}
   

else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }


 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }


else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }


else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }
 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }
 // only Account Status
 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = req.body.search_micr_cd;
 }
   
///////////////////////////

// only Bank Code and Bank Name 
else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd =null;
 }
// only Bank Code and Branch Code 
else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }
// only Bank Code and Branch Name 
else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }

// only Bank Code and Account Number
else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }
// only Bank Code and Associated Bank Account Type
else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }
 // only Bank Code and Account Status
else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null ;
    search_micr_cd = req.body.search_micr_cd;
 }

//////////////////////////
 
// only Branch Code and Bank name
else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='Select' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null ;
    search_micr_cd = null;
 }
// only Branch Code and Branch name
 else if( search_brbank_code=='Select' && search_brbank_name=='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null ;
    search_micr_cd = null;
 }
// only Branch Code and Account Number
else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd = null;
 }
// only Branch Code and Associated Bank Account Type
else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }
// only Branch Code and  Account Status
else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd =req.body.search_micr_cd;
 }
/////////////////////////////
// only Bank Name and Branch Name
else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd =null;
 }
// only Bank Name and Account Number
else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd =null;
 }
// only Bank Name and Associated Bank Account Type
else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_cd;
    search_micr_cd =null;
 }

 // only Bank Name and Account Status
else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd =req.body.search_micr_cd;
 }

 ///////////////////////
 // only Branch Name and Account Number
 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd =null;
 }
// only Branch Name and Associated Bank Account Type
else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd =null;
 }
// only Branch Name and Account Status
else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd =req.body.search_micr_cd;
 }
///////////////////
// only Account Number and Associated Bank Account Type
else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }

else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd = req.body.search_micr_cd;
 }

else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd=='Select' && search_ifsc_rtgs!='' && search_micr_cd!=''){
    console.log("only bank code entered")
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd = req.body.search_micr_cd;
 }

 /////////////////
// only Bank Code , Bank name , Branch Code
else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null ;
    search_micr_cd = null;
 }

 // only Bank Code , Bank name , Branch Name

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs = null ;
    search_micr_cd = null;
 }


 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd;
    search_ifsc_rtgs = null ;
    search_micr_cd = null;
 }


 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs ;
    search_micr_cd = null;
 }


else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = null;
    search_ifsc_rtgs =  null;
    search_micr_cd = req.body.search_micr_cd;
 }



else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null;
    search_ifsc_rtgs =  null;
    search_micr_cd = null;
 }


 else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null; 
    search_ifsc_cd =req.body.search_ifsc_cd;
    search_ifsc_rtgs =  null;
    search_micr_cd = null;
 }

 else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='Select' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null; 
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }

 else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='Select' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name = null; 
    search_ifsc_cd = null; 
    search_ifsc_rtgs = null ;
    search_micr_cd =  req.body.search_micr_cd;
 }

 else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name; 
    search_ifsc_cd =   req.body.search_ifsc_cd;
    search_ifsc_rtgs = null ;
    search_micr_cd = null; 
 }

 else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='Select' && search_ifsc_rtgs!='' && search_micr_cd==''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name; 
    search_ifsc_cd = null;
    search_ifsc_rtgs =req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }

else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='Select' && search_ifsc_rtgs=='' && search_micr_cd!=''){
    console.log("only bank code entered")
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name = req.body.search_branch_name; 
    search_ifsc_cd = null;
    search_ifsc_rtgs = null;
    search_micr_cd = req.body.search_micr_cd;
 }

 /////////////////////

else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){

    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }

else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd!=''){

    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  req.body.search_micr_cd;
 }


 else if( search_brbank_code!='' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='Select' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
  
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  req.body.search_micr_cd;
 }


 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){
   
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
    
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
   
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  null;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
   
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  null;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  req.body.search_micr_cd;
 }


 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
  
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
 
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }


 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
  
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs = null ;
    search_micr_cd =  req.body.search_micr_cd;
 }

 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
 
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs = req.body.search_ifsc_rtgs ;
    search_micr_cd =  null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd!=''){

    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  req.body.search_micr_cd;
 }


 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
  
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  req.body.search_micr_cd;
 }

 ///////////

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd==''){

    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  null;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){

    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  null;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
   
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  null;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){

    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  null;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  req.body.search_micr_cd;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){
 
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  null;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
  
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
 
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  req.body.search_micr_cd;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
  
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
    
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd =  req.body.search_micr_cd;
 }

 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
    
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd =  req.body.search_micr_cd;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd==''){

    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd = null;
 }


 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
  
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){
  
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs =  null;
    search_micr_cd = req.body.search_micr_cd;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){

    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs=='' && search_micr_cd!=''){

    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd = req.body.search_micr_cd;
 }

 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code=='Select' && search_branch_name=='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
 
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = null;
    search_branch_name =  null;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd = req.body.search_micr_cd;
 }

 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
   
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }


 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd = req.body.search_micr_cd;
 }


 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code=='Select' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
    
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = null;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  req.body.search_ifsc_rtgs;;
    search_micr_cd = req.body.search_micr_cd;
 }
///////////
 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = req.body.search_ifsc_cd; 
    search_ifsc_rtgs =  null;
    search_micr_cd = null;
 }
 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd = null;
 }
 
 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs=='' && search_micr_cd!=''){

    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd = null; 
    search_ifsc_rtgs = null;
    search_micr_cd =  req.body.search_micr_cd;;
 }
 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd =  req.body.search_ifsc_cd;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }
 else if( search_brbank_code=='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
   
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd =  req.body.search_ifsc_cd;
    search_ifsc_rtgs = null;
    search_micr_cd =  req.body.search_micr_cd;;
 }
 else if( search_brbank_code=='Select' && search_brbank_name=='Select' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
    
    search_brbank_code = null;
    search_brbank_name = null;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd =  req.body.search_ifsc_cd;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd =  req.body.search_micr_cd;;
 }
 
///////////////////////////

else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd==''){
    
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd =  req.body.search_ifsc_cd;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd =  null;
 }
 else if( search_brbank_code!='' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd=='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
   
    search_brbank_code = req.body.search_brbank_code;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd =  null;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd =  req.body.search_micr_cd;
 }
 else if( search_brbank_code=='Select' && search_brbank_name!='' && search_branch_code!='' && search_branch_name!='' && search_ifsc_cd!='' && search_ifsc_rtgs!='' && search_micr_cd!=''){
   
    search_brbank_code = null;
    search_brbank_name = req.body.search_brbank_name;
    search_branch_code = req.body.search_branch_code;
    search_branch_name =  req.body.search_branch_name;
    search_ifsc_cd =  req.body.search_ifsc_cd;
    search_ifsc_rtgs = req.body.search_ifsc_rtgs;
    search_micr_cd =  req.body.search_micr_cd;;
 }
 
       
        console.log(search_brbank_code,search_brbank_name,search_branch_code,search_branch_name,search_ifsc_cd,search_ifsc_rtgs,search_micr_cd);
        
        pgdbconnect.query("select * from associate_branch where ((abb_ch_bank_code=$1 or abb_ch_bank_name=$2 or abb_n_branch_code=$3 or abb_ch_branch_name=$4 or abb_n_ifs_code_neft=$5 or abb_n_ifs_code_rtgs=$6 or abb_n_micr_code=$7) and abb_ch_del_flg='N') ",[search_brbank_code,search_brbank_name,search_branch_code,search_branch_name,search_ifsc_cd,search_ifsc_rtgs,search_micr_cd],function(err,searchbrres) 
        {
            if(err) throw err;
            console.log("searchbrres is", searchbrres.rows);
            pgdbconnect.query("select * from associate_branch where abb_ch_del_flg='N'",function(err,braresu){
    
                if(err) throw err;
            
            
        
            res.render('bankModule/associatebranchsearch',{
        
                branchdetails:searchbrres.rows,
                brdetails :braresu.rows
            });
        });
         });
        });
      

router.post('/branch_details',function(req,res){
    console.log("Hii");

  

    var divtype='ADD';
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
var branch_id;
    pgdbconnect.query("select * from associate_branch",function(err,result) {
        if(result.rowCount==0){
            branch_id='1'

  
    console.log("Bank Branch Details",record_bnk_cd,record_bnk_name,record_branch_code,record_branch_name,ifsc_cd,ifsc_rtgs,micr_code,add_line1,district,state,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2,branch_id);

    pgdbconnect.query("insert into associate_branch (abb_ch_bank_code, abb_ch_bank_name, abb_n_branch_code, abb_ch_branch_name, abb_n_ifs_code_neft, abb_n_ifs_code_rtgs, abb_n_micr_code, abb_ch_address_line1, abb_ch_district, abb_ch_state, abb_n_pincode, abb_ch_landmark, abb_n_phone_number1, abb_n_phone_number2, abb_ch_email, abb_ch_url, abb_n_contact_person1, abb_n_contact_person2, ab_ch_branch_id,abb_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)",[record_bnk_cd,record_bnk_name,record_branch_code,record_branch_name,ifsc_cd,ifsc_rtgs,micr_code,add_line1,district,state,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2, branch_id,'N'],function(err,loginres){
        if(err) throw err;
      
           
        console.log("Result of Member Details",loginres);

    });

    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result2) 
    {
        if(err) throw err;
      //  console.log("Result of States", result2);

        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
            {
                if(err) throw err;
              //  console.log("Result of Bank", result4);


        pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
            {
                if(err) throw err;
               // console.log("Result of Branch", result5);

        req.flash('success_msg',"Data inserted successfully");
                   res.locals.message=req.flash();

    res.render('bankModule/associate_branch',{
        states:result2.rows,
        banks:result4.rows,
        branch:result5.rows,
        pagetype:divtype
    });
    });
    });});
    }
    else{
        pgdbconnect.query("select max(ab_ch_branch_id) from associate_branch",function(err,result) {
           // console.log("max value check",result)
          //  console.log("max value check",result.rows[0].max)
          
            branch_id=parseInt(result.rows[0].max)+1;
           console.log("when more rows exxxists",branch_id)
    
  
    console.log("Bank Branch Details",record_bnk_cd,record_bnk_name,record_branch_code,record_branch_name,ifsc_cd,ifsc_rtgs,micr_code,add_line1,district,state,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2);

    pgdbconnect.query("insert into associate_branch (abb_n_bank_code, abb_ch_bank_name, abb_n_branch_code, abb_ch_branch_name, abb_n_ifs_code_neft, abb_n_ifs_code_rtgs, abb_n_micr_code, abb_ch_address_line1, abb_ch_district, abb_ch_state, abb_n_pincode, abb_ch_landmark, abb_n_phone_number1, abb_n_phone_number2, abb_ch_email, abb_ch_url, abb_n_contact_person1, abb_n_contact_person2, ab_ch_branch_id,abb_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)",[record_bnk_cd,record_bnk_name,record_branch_code,record_branch_name,ifsc_cd,ifsc_rtgs,micr_code,add_line1,district,state,pincode,land_mark,ph_num1,ph_num2,email,url,con_per1,con_per2, branch_id,'N'],function(err,loginres){
        if(err) throw err;
      
           
        console.log("Result of Member Details",loginres);

 

    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result2) 
    {
        if(err) throw err;
      //  console.log("Result of States", result2);

        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
            {
                if(err) throw err;
              //  console.log("Result of Bank", result4);


        pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
            {
                if(err) throw err;
               // console.log("Result of Branch", result5);

        req.flash('success_msg',"Data inserted successfully");
                   res.locals.message=req.flash();

    res.render('bankModule/associate_branch',{
        states:result2.rows,
        banks:result4.rows,
        branch:result5.rows,
        pagetype:divtype
    });
    });
});
});
  });
    });

    }

        });

    });




    router.post('/edit_branchdata_populate',function(req,res){
        console.log("populate fields");
        var divtype="EDIT";
      console.log("DIV TYPE on edit populate",divtype);
    
       
    var branchid= req.body.tempbranchid;
    console.log("branch id to edit",branchid)
    
    pgdbconnect.query("select * from common_code_tbl where code_id='STA' limit 50",function(err,result11) 
    {
        if(err) throw err;
        //console.log("result2 is", result2);

        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result10)
        {
            if(err) throw err;
            //console.log("Result of Bank", result4);


    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
        {
    if(err) throw err;
                pgdbconnect.query("select * from associate_branch where ab_ch_branch_id=$1",[branchid],function(err,searchres)
        
                {
                    console.log("searchres",searchres)
        var br_brcode = searchres.rows[0].abb_n_bank_code;
        var br_brname = searchres.rows[0].abb_ch_bank_name;
        var br_code=  searchres.rows[0].abb_n_branch_code;
        var br_name =  searchres.rows[0].abb_ch_branch_name;
      
        var br_neft =  searchres.rows[0].abb_n_ifs_code_neft;
        var br_rtgs =  searchres.rows[0].abb_n_ifs_code_rtgs;
        var br_micr_code =  searchres.rows[0].abb_n_micr_code;
        var br_add_linebr1 =  searchres.rows[0].abb_ch_address_line1;
        var br_state =  searchres.rows[0].abb_ch_state;
        var br_pin =  searchres.rows[0].abb_n_pincode;
        var br_dist =  searchres.rows[0].abb_ch_district;
        var br_land =  searchres.rows[0].abb_ch_landmark;
        var br_phone1 =  searchres.rows[0].abb_n_phone_number1;
        var br_phone2 =  searchres.rows[0].abb_n_phone_number2;
        var br_email =  searchres.rows[0].abb_ch_email;
        var br_url =  searchres.rows[0].abb_ch_url;
        var br_con1 =  searchres.rows[0].abb_n_contact_person1;
        var br_con2 =  searchres.rows[0].abb_n_contact_person2;
        var branch_edit_id =  searchres.rows[0].ab_ch_branch_id;
      
      
                    res.render('bankModule/associate_branch',{
    
            //bankdetails:searchbrres.rows,
            br_brcode:br_brcode,
            br_brname:br_brname,  
            br_code:br_code,  
            br_name:br_name, 
           
            br_neft:br_neft, 
            br_rtgs:br_rtgs, 
            br_micr_code:br_micr_code, 
            br_add_linebr1:br_add_linebr1, 
            br_dist:br_dist, 
            br_state:br_state, 
            br_pin:br_pin, 
       
            br_land:br_land,
            br_phone1:br_phone1, 
            br_phone2:br_phone2,
            br_email:br_email, 
      
            br_url:br_url,
            br_con1:br_con1,
            br_con2:br_con2,
            branch_edit_id:branch_edit_id,
            pagetype:"EDIT",
            branch:result9.rows,
            states:result11.rows,
            banks:result10.rows
        
        });
    });
    });
    });
    });
    });

    router.post('/update_branch_edit',function(req,res){
        console.log("Welcomeedittttt");
        var bank_cd_ed = req.body.bank_cd_ed;
        var bnk_name_ed = req.body.bnk_name_ed;
        var branch_cd_ed = req.body.branch_cd_ed;
        var branch_name_ed = req.body.branch_name_ed;
        var ifsc_cd_ed = req.body.ifsc_cd_ed;
        var ifsc_rtgs_ed = req.body.ifsc_rtgs_ed;
        var micr_code_ed= req.body.micr_code_ed;
        var add_line1_ed= req.body.add_line1_ed;
        var district_ed= req.body.district_ed;
        var state_ed= req.body.state_ed;
        var pincode_ed= req.body.pincode_ed;
        var land_mark_ed= req.body.land_mark_ed;
        var ph_num1_ed= req.body.ph_num1_ed;
        var ph_num2_ed= req.body.ph_num2_ed;
        var email_ed= req.body.email_ed;
        var br_url= req.body.br_url;
        var con_per1_ed= req.body.con_per1_ed;
        var con_per2_ed= req.body.con_per2_ed;
        var branch_edit= req.body.branch_edit;

       
        
        console.log("edit details",bank_cd_ed,bnk_name_ed,branch_cd_ed,
        branch_name_ed,ifsc_cd_ed,ifsc_rtgs_ed,micr_code_ed,add_line1_ed,district_ed,state_ed,pincode_ed,land_mark_ed,ph_num1_ed,ph_num2_ed,email_ed,br_url,con_per1_ed,con_per2_ed,branch_edit);
        pgdbconnect.query('update associate_branch set abb_n_bank_code=$1,abb_ch_bank_name=$2,abb_n_branch_code=$3,abb_ch_branch_name=$4,abb_n_ifs_code_neft=$5,abb_n_ifs_code_rtgs=$6,abb_n_micr_code=$7,abb_ch_address_line1=$8,abb_ch_district=$9,abb_ch_state=$10,abb_n_pincode=$11,abb_ch_landmark=$12,abb_n_phone_number1=$13,abb_n_phone_number2=$14,abb_ch_email=$15,abb_ch_url=$16,abb_n_contact_person1=$17,abb_n_contact_person2=$18 where ab_ch_branch_id=$19',[bank_cd_ed,bnk_name_ed,branch_cd_ed,
            branch_name_ed,ifsc_cd_ed,ifsc_rtgs_ed,micr_code_ed,add_line1_ed,district_ed,state_ed,pincode_ed,land_mark_ed,ph_num1_ed,ph_num2_ed,email_ed,br_url,con_per1_ed,con_per2_ed,branch_edit],function(err,result){
    
                if(err) throw err;
              
    
          
                pgdbconnect.query('select * from associate_branch',function(err,loginres){
                    if(err) throw err;
                    console.log("result:",loginres);

                    pgdbconnect.query("select * from associate_branch where abb_ch_del_flg='N'",function(err,braresu){
    
                        if(err) throw err;
                     
       //flash messege
       req.flash('success_msg', 'Data inserted successfully');
       res.locals.message=req.flash();
       
                res.render('bankModule/associatebranchsearch',{
                    branchdetails:loginres.rows,
                    brdetails :braresu.rows
                });
                    
                });
                });    
            });
        });
    
        router.post('/view_branch_data',function(req,res){
            console.log("populate fields on viewing");
            var divtype="VIEW";
          console.log("DIV TYPE on view data",divtype);
        
           
        var branchid= req.body.tempbankbrid;
        console.log("bank id to view",branchid)
        
         
        
                    pgdbconnect.query("select * from associate_branch where ab_ch_branch_id=$1 order by ab_ch_branch_id ",[branchid],function(err,searchres)
            
                    {
                        console.log("searchres",searchres)
                        var br_brcode = searchres.rows[0].abb_n_bank_code;
                        var br_brname = searchres.rows[0].abb_ch_bank_name;
                        var br_code=  searchres.rows[0].abb_n_branch_code;
                        var br_name =  searchres.rows[0].abb_ch_branch_name;
                      
                        var br_neft =  searchres.rows[0].abb_n_ifs_code_neft;
                        var br_rtgs =  searchres.rows[0].abb_n_ifs_code_rtgs;
                        var br_micr_code =  searchres.rows[0].abb_n_micr_code;
                        var br_add_linebr1 =  searchres.rows[0].abb_ch_address_line1;
                        var br_state =  searchres.rows[0].abb_ch_state;
                        var br_pin =  searchres.rows[0].abb_n_pincode;
                        var br_dist =  searchres.rows[0].abb_ch_district;
                        var br_land =  searchres.rows[0].abb_ch_landmark;
                        var br_phone1 =  searchres.rows[0].abb_n_phone_number1;
                        var br_phone2 =  searchres.rows[0].abb_n_phone_number2;
                        var br_email =  searchres.rows[0].abb_ch_email;
                        var br_url =  searchres.rows[0].abb_ch_url;
                        var br_con1 =  searchres.rows[0].abb_n_contact_person1;
                        var br_con2 =  searchres.rows[0].abb_n_contact_person2;
                        
                        res.render('bankModule/associate_branch',{
        
               
                            br_brcode:br_brcode,
                            br_brname:br_brname,  
                            br_code:br_code,  
                            br_name:br_name, 
                           
                            br_neft:br_neft, 
                            br_rtgs:br_rtgs, 
                            br_micr_code:br_micr_code, 
                            br_add_linebr1:br_add_linebr1, 
                            br_dist:br_dist, 
                            br_state:br_state, 
                            br_pin:br_pin, 
                       
                            br_land:br_land,
                            br_phone1:br_phone1, 
                            br_phone2:br_phone2,
                            br_email:br_email, 
                      
                            br_url:br_url,
                            br_con1:br_con1,
                            br_con2:br_con2,
                            pagetype:"VIEW"
            
            });
        });
    });
        router.post('/delete_branch_data',function(req,res){

   
  
            var delid= req.body.tempbankdelid;
            console.log("id to delete",delid)
            pgdbconnect.query("update associate_branch set abb_ch_del_flg=$1 where ab_ch_branch_id=$2",['Y',delid],function(err,delres){
        
                console.log("deleted result",delres);
                pgdbconnect.query("select * from associate_branch where abb_ch_del_flg=$1",['N'],function(err,searchres){
        
               pgdbconnect.query("select * from associate_branch where abb_ch_del_flg='N'",function(err,braresu){
    
            if(err) throw err;
            req.flash('success_msg', 'Record Deleted successfully');
            res.locals.message=req.flash();
                res.render('bankModule/associatebranchsearch',{
                    branchdetails:searchres.rows,
                    brdetails:braresu.rows
                });
            });
        });
        });
        });

/*Account Master Details- START1*/

///////////////////Master Search///////////////////
router.post('/search_particular_master_record', function(req,res){
    console.log("search particular master_record");
    
    var master_code_search = req.body.master_code_search;
    var master_name_search = req.body.master_name_search;
    var branch_code_search = req.body.branch_code_search;
    var branch_name_search = req.body.branch_name_search;
    var acc_num_search = req.body.acc_num_search;
    var masteracc_type_search = req.body.masteracc_type_search;
    var acc_status_search = req.body.acc_status_search;
   
    console.log("specific",master_code_search,master_name_search,branch_code_search,branch_name_search,acc_num_search,masteracc_type_search,acc_status_search);
   console.log("t r f",master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select')
   if( master_code_search!='' && master_name_search!=''&& branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search!=''){
   master_code_search = req.body.master_code_search;
   master_name_search = req.body.master_name_search;
   branch_code_search = req.body.branch_code_search;
   branch_name_search = req.body.branch_name_search;
   acc_num_search = req.body.acc_num_search;
   masteracc_type_search = req.body.masteracc_type_search;
   acc_status_search = req.body.acc_status_search;
}
   
// only Bank Code
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }

 // only Bank Name
 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }

// only Branch Code
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }

 // only Branch Name
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }
 // only Account Number
 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search = null;
 }
 // only Associated Bank Account Type
 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search = null;
 }
 // only Account Status
 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = req.body.acc_status_search;
 }
   
///////////////////////////

// only Bank Code and Bank Name 
else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }
// only Bank Code and Branch Code 
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }
// only Bank Code and Branch Name 
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = null;
 }

// only Bank Code and Account Number
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search = null;
 }
// only Bank Code and Associated Bank Account Type
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search = null;
 }
 // only Bank Code and Account Status
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null ;
    acc_status_search = req.body.acc_status_search;
 }

//////////////////////////
 
// only Branch Code and Bank name
else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search=='Select' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null ;
    acc_status_search = null;
 }
// only Branch Code and Branch name
 else if( master_code_search=='Select' && master_name_search=='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = null ;
    acc_status_search = null;
 }
// only Branch Code and Account Number
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search = null;
 }
// only Branch Code and Associated Bank Account Type
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search = null;
 }
// only Branch Code and  Account Status
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search =req.body.acc_status_search;
 }
/////////////////////////////
// only Bank Name and Branch Name
else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search =null;
 }
// only Bank Name and Account Number
else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search =null;
 }
// only Bank Name and Associated Bank Account Type
else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = req.body.acc_num_search;
    acc_status_search =null;
 }

 // only Bank Name and Account Status
else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search =req.body.acc_status_search;
 }

 ///////////////////////
 // only Branch Name and Account Number
 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search =null;
 }
// only Branch Name and Associated Bank Account Type
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search =null;
 }
// only Branch Name and Account Status
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search =req.body.acc_status_search;
 }
///////////////////
// only Account Number and Associated Bank Account Type
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search = null;
 }
// only Account Number and Account Status
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search = req.body.acc_status_search;
 }
 ///////////////////
 // only Associated Bank Account Type and Account Status
else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search=='Select' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search = req.body.acc_status_search;
 }

 /////////////////
// only Bank Code , Bank name , Branch Code
else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null;
    acc_num_search = null;
    masteracc_type_search = null ;
    acc_status_search = null;
 }

 // only Bank Code , Bank name , Branch Name

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search = null ;
    acc_status_search = null;
 }
 // only Bank Code , Bank name , Account number 

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search;
    masteracc_type_search = null ;
    acc_status_search = null;
 }
 // only Bank Code , Bank name , Account Type

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = null;
    masteracc_type_search = req.body.masteracc_type_search ;
    acc_status_search = null;
 }
// only Bank Code , Bank name , Account Status

else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = null;
    masteracc_type_search =  null;
    acc_status_search = req.body.acc_status_search;
 }

 // only Bank Code , Branch Code , Branch Name

else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null;
    masteracc_type_search =  null;
    acc_status_search = null;
 }
 // only Bank Code , Branch Code , Account number

 else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null; 
    acc_num_search =req.body.acc_num_search;
    masteracc_type_search =  null;
    acc_status_search = null;
 }
 // only Bank Code , Branch Code , Account type 
 else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='Select' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null; 
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search = null;
 }
 // only Bank Code , Branch Code , Account status
 else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='Select' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search = null; 
    acc_num_search = null; 
    masteracc_type_search = null ;
    acc_status_search =  req.body.acc_status_search;
 }
////////////////////////
 // only Bank Code , Branch name , Account number
 else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search; 
    acc_num_search =   req.body.acc_num_search;
    masteracc_type_search = null ;
    acc_status_search = null; 
 }
 // only Bank Code , Branch Name , Account type
 else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='Select' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search; 
    acc_num_search = null;
    masteracc_type_search =req.body.masteracc_type_search;
    acc_status_search =  null;
 }
// only Bank Code , Branch Name , Account status
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='Select' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search = req.body.branch_name_search; 
    acc_num_search = null;
    masteracc_type_search = null;
    acc_status_search = req.body.acc_status_search;
 }

 /////////////////////
// only Bank Code , Account number , Account type
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  null;
 }
// only Bank Code , Account number , Account status
else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  req.body.acc_status_search;
 }


 else if( master_code_search!='' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='Select' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  req.body.acc_status_search;
 }


 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  null;
    acc_status_search =  null;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  null;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  null;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  null;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  null;
    acc_num_search = null; 
    masteracc_type_search =  null;
    acc_status_search =  req.body.acc_status_search;
 }


 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  null;
 }

 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  null;
 }


 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search = null ;
    acc_status_search =  req.body.acc_status_search;
 }

 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search = req.body.masteracc_type_search ;
    acc_status_search =  null;
 }

 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  req.body.acc_status_search;
 }


 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  req.body.acc_status_search;
 }

 ///////////

 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  null;
    acc_status_search =  null;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  null;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  null;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  null;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  null;
    acc_num_search = null; 
    masteracc_type_search =  null;
    acc_status_search =  req.body.acc_status_search;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  null;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  null;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  null;
    acc_status_search =  req.body.acc_status_search;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  null;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search =  req.body.acc_status_search;
 }

 else if( master_code_search!='' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search =  req.body.acc_status_search;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search = null;
 }


 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search = null;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search =  null;
    acc_status_search = req.body.acc_status_search;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search = null;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search = req.body.acc_status_search;
 }

 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search=='Select' && branch_name_search=='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = null;
    branch_name_search =  null;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search = req.body.acc_status_search;
 }

 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;
    acc_status_search = null;
 }


 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search==''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search = req.body.acc_status_search;
 }


 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search=='Select' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = null;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  req.body.masteracc_type_search;;
    acc_status_search = req.body.acc_status_search;
 }
///////////
 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='Select' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = req.body.acc_num_search; 
    masteracc_type_search =  null;
    acc_status_search = null;
 }
 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search = null;
 }
 
 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search=='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search = null; 
    masteracc_type_search = null;
    acc_status_search =  req.body.acc_status_search;;
 }
 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search =  req.body.acc_num_search;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search =  null;
 }
 else if( master_code_search=='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='Select' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search =  req.body.acc_num_search;
    masteracc_type_search = null;
    acc_status_search =  req.body.acc_status_search;;
 }
 else if( master_code_search=='Select' && master_name_search=='Select' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = null;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search =  req.body.acc_num_search;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search =  req.body.acc_status_search;;
 }
 
///////////////////////////

else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search=='Select'){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search =  req.body.acc_num_search;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search =  null;
 }
 else if( master_code_search!='' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search=='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = req.body.master_code_search;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search =  null;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search =  req.body.acc_status_search;
 }
 else if( master_code_search=='Select' && master_name_search!='' && branch_code_search!='' && branch_name_search!='' && acc_num_search!='' && masteracc_type_search!='' && acc_status_search!=''){
    console.log("only bank code entered")
    master_code_search = null;
    master_name_search = req.body.master_name_search;
    branch_code_search = req.body.branch_code_search;
    branch_name_search =  req.body.branch_name_search;
    acc_num_search =  req.body.acc_num_search;
    masteracc_type_search = req.body.masteracc_type_search;
    acc_status_search =  req.body.acc_status_search;;
 }
 
 

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
    {
        if(err) throw err;
       // console.log("Result of Bank", result4);

        pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
           // console.log("Result of Branch", result5);




    pgdbconnect.query("select * from associate_bank_account_master where (aba_ch_bank_code=$1 or aba_ch_bank_name=$2 or aba_ch_branch_code=$3 or aba_ch_branch_name=$4 or aba_n_acct_number=$5 or aba_ch_associate_bank_acct_type=$6 or aba_ch_acct_status=$7) and (aba_ch_del_flg='N') ",[master_code_search,master_name_search,branch_code_search,branch_name_search,acc_num_search,masteracc_type_search,acc_status_search],function(err,mastersearchres) 
    {
      
        if(err) throw err;
        // console.log("mastersearchres is", mastersearchres.rows);
    
         pgdbconnect.query("select *  from associate_bank_account_master where aba_ch_del_flg=$1",['N'] ,function(err,result6){
      
        res.render('bankModule/associate_bank_account_master_search',{

            bankcd:result4.rows,
            masterdetails:mastersearchres.rows,
            branchcdmaster:result5.rows,
          mastersrch:result6.rows
    
    });  
  });
     });
    }); 
});
    });

router.get('/asso_bank_account_master',function(req,res){

    var divtype=req.query.key;

    console.log("DIV TYPE",divtype);
    

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
    {
        if(err) throw err;
        console.log("Result of Bank", result4);

        pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
            console.log("Result of Branch", result5);

            pgdbconnect.query("select * from associate_bank_account_master where aba_ch_del_flg=$1",['N'],function(err,searchres){
    res.render('bankModule/associate_bank_account_master',{
    bankcdmaster:result4.rows,
    branchcdmaster:result5.rows,
    pagetype:divtype
});
        });
    });
});
});

router.post('/acc_master_details',function(req,res){
    var divtype="ADD";

    console.log("DIV TYPE",divtype);
    console.log("Hii");

    var master_code = req.body.master_code;
    
    var master_name = req.body.master_name;
    var master_brcode = req.body.master_brcode;
    var master_br_name = req.body.master_br_name;
    var accmaster_no = req.body.accmaster_no;
    var ass_bankacc_code = req.body.ass_bankacc_code;
    var masteracc_type = req.body.masteracc_type
    var masteracc_status = req.body.masteracc_status
    var master_description = req.body.master_description;
   console.log("master_acc_details:",master_code,master_name,master_brcode, master_br_name,accmaster_no,ass_bankacc_code,masteracc_type,masteracc_status,master_description);
console.log("ewruo",master_brcode)
var masterbankid;
pgdbconnect.query("select * from associate_bank_account_master",function(err,resu){
    if(resu.rowCount==0){
        masterbankid=1;

   pgdbconnect.query("insert into associate_bank_account_master (aba_n_bank_id,aba_ch_bank_code,aba_ch_bank_name,aba_ch_branch_code,aba_ch_branch_name,aba_n_acct_number,aba_ch_associate_bank_acct_code, aba_ch_associate_bank_acct_type, aba_ch_acct_status, aba_ch_description, aba_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[masterbankid,master_code,master_name,master_brcode,master_br_name,accmaster_no,ass_bankacc_code,masteracc_type,masteracc_status,master_description,'N'],function(err,loginres){
    if(err) throw err;
    console.log("Result of bank account master  Details",loginres);
   });

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
    {
        if(err) throw err;
       // console.log("Result of Bank", result4);

        pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
           // console.log("Result of Branch", result5);

                                
    // pgdbconnect.query("select aba_ch_bank_code, aba_ch_bank_name, aba_ch_branch_code, aba_ch_branch_name, aba_n_acct_number, aba_ch_associate_bank_acct_code, aba_ch_associate_bank_acct_type, aba_ch_description  from associate_bank_account_master  where  aba_ch_del_flg=$1",['N'],function(err,result6){   
    //             if(err) throw err;
                // console.log("Result of Branch", result6);

        //flash messege
        req.flash('success_msg', 'Data inserted successfully');
        res.locals.message=req.flash();

        
        // pgdbconnect.query("select * from associate_bank_account_master where aba_ch_del_flg=$1",['N'],function(err,searchres){
    res.render('bankModule/associate_bank_account_master',{
    bankcdmaster:result4.rows,
    branchcdmaster:result5.rows,
    pagetype:divtype
    //masterdetails:result6.rows
        
});
        });
    // });
    // });
});
}
else
{
    pgdbconnect.query("select max(aba_n_bank_id) from associate_bank_account_master",function(err,resul) {
        console.log("max value check",resul)
        console.log("max value check",resul.rows[0].max)
      
        masterbankid=parseInt(resul.rows[0].max)+1;
        console.log("when more rows exxxists",masterbankid)


        
        pgdbconnect.query("insert into associate_bank_account_master ( aba_n_bank_id,aba_ch_bank_code, aba_ch_bank_name, aba_ch_branch_code, aba_ch_branch_name, aba_n_acct_number, aba_ch_associate_bank_acct_code, aba_ch_associate_bank_acct_type, aba_ch_acct_status, aba_ch_description, aba_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[masterbankid,master_code,master_name,master_brcode,master_br_name,accmaster_no,ass_bankacc_code,masteracc_type,masteracc_status,master_description,'N'],function(err,loginres){
            if(err) throw err;
            console.log("Result of bank account master  Details",loginres);

            pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
            {
                if(err) throw err;
                // console.log("Result of Bank", result4);
        
                pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
                {
                    if(err) throw err;
                    // console.log("Result of Branch", result5);
        
                  
            // pgdbconnect.query("select aba_ch_bank_code, aba_ch_bank_name, aba_ch_branch_code, aba_ch_branch_name, aba_n_acct_number, aba_ch_associate_bank_acct_code, aba_ch_associate_bank_acct_type, aba_ch_description  from associate_bank_account_master  where  aba_ch_del_flg=$1",['N'],function(err,result6)
            // {
            //             if(err) throw err;
                //flash messege
                req.flash('success_msg', 'Data inserted successfully');
                res.locals.message=req.flash();
        
            res.render('bankModule/associate_bank_account_master',{
            bankcdmaster:result4.rows,
            branchcdmaster:result5.rows,
            pagetype:divtype
           // masterdetails:result6.rows
});
                        });
            });
        });
    });
// });
}
});
});


router.get('/asso_bank_account_master_search',function(req,res){
    var divtype=req.query.key;

    console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
    {
        if(err) throw err;
        console.log("Result of Bank", result4);
        pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
            console.log("Result of Branch", result5);
    

    pgdbconnect.query("select *  from associate_bank_account_master where aba_ch_del_flg=$1",['N'] ,function(err,result6)
    {
        if(err) throw err;
        console.log("Result of Branch", result6);
        pgdbconnect.query("select *  from associate_bank_account_master where aba_ch_del_flg=$1",['N'] ,function(err,result7)
        {
            if(err) throw err;
            console.log("Result of Branch", result6);
       

    res.render('bankModule/associate_bank_account_master_search',{
        pagetype:divtype,
        bankcd:result4.rows,
        branchcdmaster:result5.rows,
    masterdetails:result6.rows,
    mastersrch:result7.rows
 
});
});
  
});
});
});
});

router.post('/acc_master_edit',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//
var masterid= req.body.tempmasterid;
console.log("bank id to edit",masterid)


        pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
        {
            if(err) throw err;
           // console.log("Result of Bank", result4);

           pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;


            pgdbconnect.query("select * from associate_bank_account_master where aba_n_bank_id=$1 order by aba_n_bank_id ",[masterid],function(err,reslt)
    
            {
                pgdbconnect.query("select * from associate_bank_account_master where aba_ch_del_flg=$1",['N'],function(err,searchres){
                console.log("searchres",reslt)
    var mbank_code = reslt.rows[0].aba_ch_bank_code;
    var mbnk_name = reslt.rows[0].aba_ch_bank_name;
    var mbranch_code =  reslt.rows[0].aba_ch_branch_code;
    var mbranch_name = reslt.rows[0].aba_ch_branch_name;
    var macct_number =  reslt.rows[0].aba_n_acct_number;
    var massociate_bank_acct_code =  reslt.rows[0].aba_ch_associate_bank_acct_code;
    var massociate_bank_acct_type =  reslt.rows[0].aba_ch_associate_bank_acct_type;
    var macct_status =  reslt.rows[0].aba_ch_acct_status;
    var masterbankid=reslt.rows[0].aba_n_bank_id;
    var masterdesc=reslt.rows[0].aba_ch_description;

    
                res.render('bankModule/associate_bank_account_master',{


                    //bankdetails:searchbrres.rows,
        bankcdmaster:result4.rows,
        branchcdmaster:result5.rows,
        mbank_code:mbank_code,
        mbnk_name:mbnk_name,
        mbranch_code:mbranch_code,
        mbranch_name:mbranch_name,
        macct_number:macct_number,
        massociate_bank_acct_code:massociate_bank_acct_code,
        massociate_bank_acct_type:massociate_bank_acct_type,
        macct_status:macct_status,
        pagetype:"EDIT",
        bank:result4.rows,
        masterbankid:masterbankid,
        masterdesc:masterdesc
    
                });

    });
});
});
});
});


router.post('/update_master_edit',function(req,res){
    console.log("editing master account details");
    var master_code_ed = req.body.master_code_ed;
    var master_name_ed = req.body.master_name_ed;
    var master_brcode_ed = req.body.master_brcode_ed;
    var master_br_name_ed = req.body.master_br_name_ed;
    var accmaster_no_ed = req.body.accmaster_no_ed;
    var ass_bankacc_code_ed = req.body.ass_bankacc_code_ed;
    var masteracc_type_ed= req.body.masteracc_type_ed;
    var masteracc_status_ed= req.body.masteracc_status_ed;
    var masteracc_status_ed= req.body.master_description_ed;
    var editmaster_bank_id=req.body.editmaster_bank_id;
    console.log('iddd',editmaster_bank_id)
   
    
    console.log("edit details",master_code_ed,master_name_ed,master_brcode_ed,master_br_name_ed,accmaster_no_ed,ass_bankacc_code_ed,masteracc_type_ed,masteracc_status_ed,masteracc_status_ed,editmaster_bank_id);
    pgdbconnect.query('update associate_bank_account_master set aba_ch_bank_code=$1,aba_ch_bank_name=$2,aba_ch_branch_code=$3,aba_ch_branch_name=$4,aba_n_acct_number=$5,aba_ch_associate_bank_acct_code=$6,aba_ch_associate_bank_acct_type=$7,aba_ch_acct_status=$8,aba_ch_description=$9 where aba_n_bank_id=$10',[master_code_ed,master_name_ed,master_brcode_ed,master_br_name_ed,accmaster_no_ed,ass_bankacc_code_ed,masteracc_type_ed,masteracc_status_ed,masteracc_status_ed,editmaster_bank_id],function(err,result){

            if(err) throw err;
          
            pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
            {
                if(err) throw err;
                console.log("Result of Bank", result4);
                pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
                {
                    if(err) throw err;
                    console.log("Result of Branch", result5);
            
      
            pgdbconnect.query('select * from associate_bank_account_master where aba_ch_del_flg=$1',['N'],function(err,loginres){
                if(err) throw err;
                console.log("result:",loginres);
   //flash messege
   req.flash('success_msg', 'Data Updated successfully');
   res.locals.message=req.flash();
   
            res.render('bankModule/associate_bank_account_master_search',{
                bankdetails:loginres.rows,
                bankcd:result4.rows,
                branchcdmaster:result5.rows,
                masterdetails:loginres.rows
            });
          
        });
            
        });
    
    });
});

    });




    
    

router.post('/acc_master_view',function(req,res){
    console.log("populate fields");
    var divtype="VIEW";
  console.log("DIV TYPE on VIEW populate",divtype);

    //Bank Branch view details-start//
var masterid2= req.body.tempmasterid1;
console.log("bank id to view",masterid2)


      

            pgdbconnect.query("select * from associate_bank_account_master where aba_n_bank_id=$1 order by aba_n_bank_id ",[masterid2],function(err,reslt)
    
            {
                pgdbconnect.query("select * from associate_bank_account_master where aba_ch_del_flg=$1",['N'],function(err,searchres){
                console.log("searchres",reslt)
    var mbank_code = reslt.rows[0].aba_ch_bank_code;
    var mbnk_name = reslt.rows[0].aba_ch_bank_name;
    var mbranch_code =  reslt.rows[0].aba_ch_branch_code;
    var mbranch_name = reslt.rows[0].aba_ch_branch_name;
    var macct_number =  reslt.rows[0].aba_n_acct_number;
    var massociate_bank_acct_code =  reslt.rows[0].aba_ch_associate_bank_acct_code;
    var massociate_bank_acct_type =  reslt.rows[0].aba_ch_associate_bank_acct_type;
    var macct_status =  reslt.rows[0].aba_ch_acct_status;
      var masterbankid_view=reslt.rows[0].aba_n_bank_id;
      var desc=reslt.rows[0].aba_ch_description;
    
                res.render('bankModule/associate_bank_account_master',{


                    
        //bankdetails:searchbrres.rows,

        mbank_code:mbank_code,
        mbnk_name:mbnk_name,
        mbranch_code:mbranch_code,
        mbranch_name:mbranch_name,
        macct_number:macct_number,
        massociate_bank_acct_code:massociate_bank_acct_code,
        massociate_bank_acct_type:massociate_bank_acct_type,
        macct_status:macct_status,
        pagetype:"VIEW",
        masterbankid_view:masterbankid_view,
        desc:desc


        
    });
});
});
});



 
        
router.post('/acc_master_delete',function(req,res){
    console.log("populate fields");
    var divtype="DELETE";
  console.log("DIV TYPE on edit populate",divtype);


  
  
    var del= req.body.tempmasterdelete;
    console.log("id to delete",del)
    pgdbconnect.query("update associate_bank_account_master set aba_ch_del_flg=$1 where aba_n_bank_id=$2",['Y',del],function(err,delres){

        console.log("deleted result",delres);
       
            pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4)
            {
                if(err) throw err;
               // console.log("Result of Bank", result4);
    
               pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
            {
                if(err) throw err;
                    
              

                pgdbconnect.query("select * from associate_bank_account_master where aba_ch_del_flg=$1",['N'],function(err,result6){
                    pgdbconnect.query("select * from associate_bank_account_master where aba_ch_del_flg=$1",['N'],function(err,result9){

    //Bank Branch details-start
    //flash
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
        res.render('bankModule/associate_bank_account_master_search',{
            bankcd:result4.rows,
            branchcdmaster:result5.rows,
            mastersrch:result6.rows,
            masterdetails:result9.rows,
        pagetype:"DELETE"
        
     
    });
});
});
});
});
});
});
  
/*Account Master Details- END*/   

/*Associate Bank Account Type- START*/ 
//Associate Bank Account Type
router.get('/asso_bank_account_type',function(req,res){
var divtype=req.query.key;
console.log("DIV TYPE",divtype);


    res.render('bankModule/associated_bank_acctype',{
        pagetype:divtype 
    });
});

//Associate Bank Account Type Insertion
router.post('/asso_bank_acc_insert',function(req,res){

    var divtype="ADD";
    console.log("DIV TYPE",divtype);

    ass_bnk_type_code=req.body.ass_bnk_type_code_ad;
    bnk_acc_type=req.body.bnk_acc_type_ad;
    ban_acc_typ_desc=req.body.ban_acc_typ_desc_ad;

    var acc_type_id;
    pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1",['N'], function(err,resl){

        if(resl.rowCount==0){
            acc_type_id=1;

    pgdbconnect.query("insert into associate_bank_account_type(abat_n_acc_type_id,abat_ch_bank_code, abat_ch_account_type, abat_ch_description, abat_ch_del_flg) values ($1,$2,$3,$4,$5)",[acc_type_id,ass_bnk_type_code,bnk_acc_type,ban_acc_typ_desc,'N'],function(err,rslt) {
        if(err) throw err;

        //flash messege
        req.flash('success_msg', 'Data inserted successfully');
        res.locals.message=req.flash();

    res.render('bankModule/associated_bank_acctype',{
        pagetype:divtype
    });
});
        }
    else
    {
        pgdbconnect.query("select max(abat_n_acc_type_id) from associate_bank_account_type",function(err,reslt) {
            console.log("max value check",reslt)
            console.log("max value check",reslt.rows[0].max)
          
            acc_type_id=parseInt(reslt.rows[0].max)+1;
            console.log("when more rows exxxists",acc_type_id);

            pgdbconnect.query("insert into associate_bank_account_type(abat_n_acc_type_id,abat_ch_bank_code, abat_ch_account_type, abat_ch_description, abat_ch_del_flg) values ($1,$2,$3,$4,$5)",[acc_type_id,ass_bnk_type_code,bnk_acc_type,ban_acc_typ_desc,'N'],function(err,rslt) {
                if(err) throw err;
        console.log("data",reslt);
                //flash messege
                req.flash('success_msg', 'Data inserted successfully');
                res.locals.message=req.flash();
        
            res.render('bankModule/associated_bank_acctype',{
                pagetype:divtype
            });
        });
        });
    }
});
});


//Associate Bank Account Type Edit
router.post('/asso_acctyp_edit', function(req,res){
    var divtype="EDIT";
    console.log("DIV TYPE",divtype);

    var edit_acc_typ= req.body.edit_acc_typ;
  console.log("cheque id to edit",edit_acc_typ)

  pgdbconnect.query("select * from associate_bank_account_type where abat_n_acc_type_id=$1 order by abat_n_acc_type_id",[edit_acc_typ],function(err,rsl)
   {
    if(err) throw err;
    console.log("Editing Details",rsl);
    var bnk_typ_code = rsl.rows[0].abat_ch_bank_code;
    var bnk_acc_typ = rsl.rows[0].abat_ch_account_type;
    var bnk_acc_desc = rsl.rows[0].abat_ch_description;
    var bnk_acc_typ_id=rsl.rows[0].abat_n_acc_type_id;

    res.render('bankModule/associated_bank_acctype',{
        bnk_typ_code:bnk_typ_code,
        bnk_acc_typ:bnk_acc_typ,
        bnk_acc_desc:bnk_acc_desc,
        bnk_acc_typ_id:bnk_acc_typ_id,
        pagetype:divtype,
        edit_acc_typ:edit_acc_typ

    });
});
});

//Associate Bank Account Type Update
router.post('/asso_acctyp_update', function(req,res){

console.log("Updating");
var up_bnkcd= req.body.ass_bnk_type_code_ed;
var up_bnktyp= req.body.bnk_acc_type_ed;
var up_bnkdesc= req.body.ban_acc_typ_desc_ed;
var up_asso_id_ed=req.body.asso_id_ed;
console.log(up_asso_id_ed);

  pgdbconnect.query("update associate_bank_account_type set abat_ch_bank_code=$1, abat_ch_account_type=$2, abat_ch_description=$3 where abat_n_acc_type_id=$4",[up_bnkcd,up_bnktyp,up_bnkdesc,up_asso_id_ed],function(err,rsl)
   {
    if(err) throw err;

    pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1",['N'],function(err,relt) 
    {
        if(err) throw err;
        console.log("search bank type is", relt.rows);
        pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1 order by abat_ch_bank_code",['N'],function(err,relts) 
   
    {
        if(err) throw err;
    
        //flash messege
        req.flash('success_msg', 'Data updated successfully');
        res.locals.message=req.flash();


    res.render('bankModule/associated_bank_acctype_search',{
        acctypesrch:relt.rows,
        up_bnk_acctyp:rsl.rows,
        acccdsrch:relts.rows
 
    });
    });
});
});
});

//Associate Bank Account Type View
router.post('/asso_acctyp_view', function(req,res){
    var divtype="VIEW";
    console.log("DIV TYPE",divtype);

    var view_acc_typ= req.body.view_acc_typ;
  console.log("acc id to view",view_acc_typ)

  pgdbconnect.query("select * from associate_bank_account_type where abat_n_acc_type_id=$1 order by abat_n_acc_type_id",[view_acc_typ],function(err,rslt)
   {
    if(err) throw err;
    console.log("viewinf Details",rslt);
    var vw_bnk_typ_code = rslt.rows[0].abat_ch_bank_code;
    var vw_bnk_acc_typ = rslt.rows[0].abat_ch_account_type;
    var vw_bnk_acc_desc = rslt.rows[0].abat_ch_description;

    res.render('bankModule/associated_bank_acctype',{
        vw_bnk_typ_code:vw_bnk_typ_code,
        vw_bnk_acc_typ:vw_bnk_acc_typ,
        vw_bnk_acc_desc:vw_bnk_acc_desc,
        pagetype:divtype,
        view_acc_typ:view_acc_typ
    });
});
});

//Associate Bank Account Type Delete
router.post('/asso_acctyp_delete', function(req,res){


    var delete_acc_typ= req.body.delete_acc_typ;
  console.log("acc id to delete",delete_acc_typ)

  pgdbconnect.query("update associate_bank_account_type set abat_ch_del_flg=$1 where abat_n_acc_type_id=$2 ",['Y',delete_acc_typ],function(err,rslt)
   {
    if(err) throw err;
    console.log("viewinf Details",rslt);

    pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1",['N'] ,function(err,relt) 
    {
        if(err) throw err;
        console.log("search bank type is", relt.rows);
        pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1 order by abat_ch_bank_code",['N'],function(err,relts) 
   
        {
            if(err) throw err;
    

        //flash messege
        req.flash('success_msg', 'Data Deleted successfully');
        res.locals.message=req.flash();

    res.render('bankModule/associated_bank_acctype_search',{
        acctypesrch:relt.rows,
        acccdsrch:relts.rows

});
    });
});
});
});


//Associate Bank Account Type Search 
router.post('/asso_acctyp_srch', function(req,res){
    console.log("search particular record");
    
    var assobnk_acc_cd = req.body.assobnk_acc_cd;
    var assobnk_acc_typ = req.body.assobnk_acc_typ;

console.log("searching record",assobnk_acc_cd,assobnk_acc_typ);
    
    pgdbconnect.query("select * from associate_bank_account_type where ((abat_ch_bank_code=$1 or abat_ch_account_type=$2) and (abat_ch_del_flg='N')) ",[assobnk_acc_cd,assobnk_acc_typ],function(err,relt) 
    {
        if(err) throw err;
        console.log("search bank type is", relt.rows);

        pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1 order by abat_ch_bank_code",['N'],function(err,relts) 
   
    {
        if(err) throw err;

    
        res.render('bankModule/associated_bank_acctype_search',{
            acctypesrch:relt.rows,
            acccdsrch:relts.rows
        });
    });
     });
    });


router.get('/asso_bank_account_search',function(req,res){
    pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1 order by abat_ch_bank_code",['N'],function(err,relt) 
   
    {
        if(err) throw err;
        console.log("search bank type is", relt.rows);
        pgdbconnect.query("select * from associate_bank_account_type where abat_ch_del_flg=$1 order by abat_ch_bank_code",['N'],function(err,relts) 
   
        {
            if(err) throw err;

    res.render('bankModule/associated_bank_acctype_search',{
        acctypesrch:relt.rows,
        acccdsrch:relts.rows
    });
});
});
});
/*Associate Bank Account Type- END*/ 


//////////////////////////CHEQUE BOOK START //////////////////////////////////////////////////////////

router.get('/asso_bank_cheque_book',function(req,res){
    var divtype=req.query.key;

    console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
    {
if(err) throw err;

    res.render('bankModule/associate_bank_chequebook_details',{
        pagetype:divtype,
        branch:result9.rows
    });
});
});
/////////////////////////////////////////////////////////////////////

router.get('/asso_bank_cheque_book_search',function(req,res){
    var divtype=req.query.key;

    console.log("DIV TYPE",divtype);
  

    pgdbconnect.query("select  * from associated_bank_chequebook_details where acb_ch_del_flg='N' ",function(err,res1){
        if(err) throw err;
    console.log("Result of associate_bank_chequebook_details",res1);
    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
    {
if(err) throw err;

    res.render('bankModule/associate_bank_chequebook_search',{
        pagetype:divtype,
        chequedetails:res1.rows,
        branch:result9.rows
    });
    });
});
});
///////////////////////////////////////////////////////////

router.post('/asso_bank_cheque_book_add',function(req,res){

      var divtype="ADD";

    console.log("DIV TYPE",divtype);

    var ass_chqbok_brmaster = req.body.ass_chqbok_brmaster;
    var ass_bnk_num = req.body.ass_bnk_num;
    var category_master = req.body.category_master;
    var chq_bok_num = req.body.chq_bok_num;
    var series = req.body.series;
    var num_chq_leaves = req.body.num_chq_leaves;
    var star_num = req.body.star_num
    var end_num = req.body.end_num
    var chq_book_status = req.body.chq_book_status;

    pgdbconnect.query("select * from associated_bank_chequebook_details",function(err,chqres) {
        if(chqres.rowCount==0){
            cheque_id='1'

    console.log("cheque_details:",ass_chqbok_brmaster,ass_bnk_num,category_master, chq_bok_num,series,num_chq_leaves,star_num,end_num,chq_book_status);


    pgdbconnect.query("insert into associated_bank_chequebook_details (acb_ch_chequebook_id,acb_ch_associate_branch_master, acb_ch_associated_bank_acct_num, acb_ch_category_master, acb_ch_cheque_book_num, acb_ch_series, acb_n_num_cheque_leaves, acb_n_start_num, acb_n_end_num, acb_ch_cheque_book_status,acb_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[cheque_id,ass_chqbok_brmaster,ass_bnk_num,category_master,chq_bok_num,series,num_chq_leaves,star_num,end_num,chq_book_status,'N'],function(err,loginres){

         if(err) throw err;
     console.log("Result of associate_bank_chequebook_details",loginres);
  
     pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
     {
 if(err) throw err;
     pgdbconnect.query("select   acb_ch_associate_branch_master, acb_ch_associated_bank_acct_num, acb_ch_category_master, acb_ch_cheque_book_num, acb_ch_series, acb_n_num_cheque_leaves, acb_n_start_num, acb_n_end_num, acb_ch_cheque_book_status,acb_ch_del_flg  from associated_bank_chequebook_details",function(err,res1){
        if(err) throw err;
    console.log("Result of associate_bank_chequebook_details",res1);

      
     //flash messege
     req.flash('success_msg', 'Data inserted successfully');
     res.locals.message=req.flash();

     res.render('bankModule/associate_bank_chequebook_details',{
        branch:result9.rows,
    pagetype:divtype
    
    });
});
    });
});
    }

    
else{
    pgdbconnect.query("select max(acb_ch_chequebook_id) from associated_bank_chequebook_details",function(err,chqres) {
        console.log("max value check",chqres)
        console.log("max value check",chqres.rows[0].max)
      
        cheque_id=parseInt(chqres.rows[0].max)+1;
        console.log("when more rows exxxists",cheque_id)

        pgdbconnect.query("insert into associated_bank_chequebook_details (acb_ch_chequebook_id,acb_ch_associate_branch_master, acb_ch_associated_bank_acct_num, acb_ch_category_master, acb_ch_cheque_book_num, acb_ch_series, acb_n_num_cheque_leaves, acb_n_start_num, acb_n_end_num, acb_ch_cheque_book_status,acb_ch_del_flg) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[cheque_id,ass_chqbok_brmaster,ass_bnk_num,category_master,chq_bok_num,series,num_chq_leaves,star_num,end_num,chq_book_status,'N'],function(err,loginres){

            if(err) throw err;
        console.log("Result of associate_bank_chequebook_details",loginres);
 
       
        pgdbconnect.query("select   acb_ch_associate_branch_master, acb_ch_associated_bank_acct_num, acb_ch_category_master, acb_ch_cheque_book_num, acb_ch_series, acb_n_num_cheque_leaves, acb_n_start_num, acb_n_end_num, acb_ch_cheque_book_status,acb_ch_del_flg  from associated_bank_chequebook_details",function(err,res1){
           if(err) throw err;
       console.log("Result of associate_bank_chequebook_details",res1);
       pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
       {
   if(err) throw err;
         
        //flash messege
        req.flash('success_msg', 'Data inserted successfully');
        res.locals.message=req.flash();
   
        res.render('bankModule/associate_bank_chequebook_details',{
       pagetype:divtype,
       branch:result9.rows,
       chequedetails:res1.rows
       });
       });
   });
       });
    });
       }
    });
});

//////////////////////////////////////////////////////////////

router.post('/search_particular_chequerec', function(req,res){
    console.log("search particular cheque record")
var chq_bnk_mstr=req.body.chq_bnk_mstr;
var chq_bnk_acc_num=req.body.chq_bnk_acc_num;
var chq_bnk_ctgry_mstr=req.body.chq_bnk_ctgry_mstr;
var chq_bk_num=req.body.chq_bk_num;



console.log("hi",chq_bnk_mstr,chq_bnk_acc_num,chq_bnk_ctgry_mstr,chq_bk_num);

pgdbconnect.query("select * from associated_bank_chequebook_details where (acb_ch_associate_branch_master=$1 or acb_ch_associated_bank_acct_num=$2 or acb_ch_category_master=$3 or acb_ch_cheque_book_num=$4) and (acb_ch_del_flg='N')",[chq_bnk_mstr,chq_bnk_acc_num,chq_bnk_ctgry_mstr,chq_bk_num],function(err,chequeserch) 
{
    if(err) throw err;
    console.log("chequeserch is", chequeserch.rows);
    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
    {
if(err) throw err;
    res.render('bankModule/associate_bank_chequebook_search',{

        chequedetails:chequeserch.rows,
        branch:result9.rows
    });
});
});

});
//////////////////////////////////////////////////////////


router.get('/asso_bank_cheque_book_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);
     
pgdbconnect.query("select * from associated_bank_chequebook_details",function(err,chequeres){
    
    if(err) throw err;
    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
     {
 if(err) throw err;
    res.render('bankModule/associate_bank_chequebook_details',{
       
        pagetype:divtype,
        chequedetails:chequeres.rows,
        branch:result9.rows

    });
});
});
});
//////////////////////////////////////////////////////////


router.post('/cheque_edit_data_populate',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

  var chequeid= req.body.tempchequeid;
  console.log("cheque id to edit",chequeid)
  

  pgdbconnect.query("select * from associated_bank_chequebook_details where acb_ch_chequebook_id=$1 order by acb_ch_chequebook_id",[chequeid],function(err,cheqsearch)
   {
    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
    {
if(err) throw err;
    console.log("cheqsearch",cheqsearch)


var bank_master=cheqsearch.rows[0].acb_ch_associate_branch_master;
var bank_acct_num=cheqsearch.rows[0].acb_ch_associated_bank_acct_num;
var categ_master=cheqsearch.rows[0].acb_ch_category_master;
var cheque_book_num=cheqsearch.rows[0].acb_ch_cheque_book_num;
var seri=cheqsearch.rows[0].acb_ch_series;
var num_cheque_leaves=cheqsearch.rows[0].acb_n_num_cheque_leaves;
var start_number=cheqsearch.rows[0].acb_n_start_num;
var end_number=cheqsearch.rows[0].acb_n_end_num;
var cheque_book_status=cheqsearch.rows[0].acb_ch_cheque_book_status;
var cheque_book_id = cheqsearch.rows[0].acb_ch_chequebook_id;
//console.log("data to cheque edit",branch_code,bank_master,bank_acct_num,categ_master,cheque_book_num,seri,num_cheque_leaves,start_number,end_number,cheque_book_status);

res.render('bankModule/associate_bank_chequebook_details',{
 
  
    bank_master:bank_master,
    bank_acct_num:bank_acct_num,
    categ_master:categ_master,
    cheque_book_num:cheque_book_num,
    seri:seri,
    num_cheque_leaves:num_cheque_leaves,
    start_number:start_number,
    end_number:end_number,
    cheque_book_status:cheque_book_status,
    pagetype:"EDIT",
    cheque_book_id:cheque_book_id,
    branch:result9.rows
});
});
});
});
/////////////////////////////////////////////////////////////

router.post('/update_cheque_edit',function(req,res){
    console.log("Welcome");

    var ass_chqbok_brmaster_ed = req.body.ass_chqbok_brmaster_ed;
    var ass_bnk_num_ed = req.body.ass_bnk_num_ed;
    var category_master_ed= req.body.category_master_ed;
    var chq_bok_num_ed = req.body.chq_bok_num_ed;
    var series_ed = req.body.series_ed;
    var num_chq_leaves_ed = req.body.num_chq_leaves_ed;
    var start_num_ed = req.body.start_num_ed;
    var end_num_ed = req.body.end_num_ed;
    var chq_book_status_ed = req.body.chq_book_status_ed;
    var chequebookchk_ed = req.body.chequebookchk_ed;

    console.log("edit details",ass_chqbok_brmaster_ed,ass_bnk_num_ed,category_master_ed,chq_bok_num_ed,series_ed,num_chq_leaves_ed,start_num_ed,end_num_ed,chq_book_status_ed,chequebookchk_ed);
    pgdbconnect.query('update associated_bank_chequebook_details set acb_ch_associate_branch_master=$1,acb_ch_associated_bank_acct_num=$2,acb_ch_category_master=$3,acb_ch_cheque_book_num=$4,acb_ch_series=$5,acb_n_num_cheque_leaves=$6,acb_n_start_num=$7,acb_n_end_num=$8,acb_ch_cheque_book_status=$9 where acb_ch_chequebook_id=$10',[ass_chqbok_brmaster_ed,ass_bnk_num_ed,category_master_ed,chq_bok_num_ed,series_ed,num_chq_leaves_ed,start_num_ed,end_num_ed,chq_book_status_ed,chequebookchk_ed],function(err,chqreslt){
         if(err) throw err;
        
console.log(chqreslt)
      
        pgdbconnect.query('select * from associated_bank_chequebook_details where acb_ch_del_flg=$1',['N'],function(err,chequeres){
             if(err) throw err;
            console.log("result:",chequeres);
            pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
            {
        if(err) throw err;
//flash messege
req.flash('success_msg', 'Data updated successfully');
res.locals.message=req.flash();

        res.render('bankModule/associate_bank_chequebook_search',{
          chequedetails:chequeres.rows,
       branch:result9.rows
        });
        });
        
    });
  
});

});

//////////////////////////////////////////////////////////


router.post('/cheque_view_data_populate',function(req,res){
    console.log("populate fields");
    var divtype="VIEW cheque book";
  console.log("DIV TYPE on edit populate",divtype);

  var cheqid= req.body.tempviewchequeid;
  console.log("cheque id to view",cheqid)
  

  pgdbconnect.query("select * from associated_bank_chequebook_details where acb_ch_chequebook_id=$1 order by acb_ch_chequebook_id",[cheqid],function(err,cheqsearch)
   {
    console.log("cheqsearch",cheqsearch)


var bank_master=cheqsearch.rows[0].acb_ch_associate_branch_master;
var bank_acct_num=cheqsearch.rows[0].acb_ch_associated_bank_acct_num;
var categ_master=cheqsearch.rows[0].acb_ch_category_master;
var cheque_book_num=cheqsearch.rows[0].acb_ch_cheque_book_num;
var seri=cheqsearch.rows[0].acb_ch_series;
var num_cheque_leaves=cheqsearch.rows[0].acb_n_num_cheque_leaves;
var start_number=cheqsearch.rows[0].acb_n_start_num;
var end_number=cheqsearch.rows[0].acb_n_end_num;
var cheque_book_status=cheqsearch.rows[0].acb_ch_cheque_book_status;

//console.log("data to cheque edit",branch_code,bank_master,bank_acct_num,categ_master,cheque_book_num,seri,num_cheque_leaves,start_number,end_number,cheque_book_status);

res.render('bankModule/associate_bank_chequebook_details',{
 
  
    bank_master:bank_master,
    bank_acct_num:bank_acct_num,
    categ_master:categ_master,
    cheque_book_num:cheque_book_num,
    seri:seri,
    num_cheque_leaves:num_cheque_leaves,
    start_number:start_number,
    end_number:end_number,
    cheque_book_status:cheque_book_status,
    pagetype:"VIEW"
    
});
});
});

///////////////////////////////////////////////////

router.post('/cheque_book_delete',function(req,res){

    var cheqdel= req.body.tempchequedeleteid;
  console.log("cheque id to delete",cheqdel)
  
  pgdbconnect.query('update associated_bank_chequebook_details set acb_ch_del_flg=$1 where acb_ch_chequebook_id=$2',['Y',cheqdel],function(err,delres1){
    console.log("deleted result",delres1);
    pgdbconnect.query("select * from branch_code_details limit 50",function(err,result9)
    {
if(err) throw err;
    pgdbconnect.query("select * from associated_bank_chequebook_details where acb_ch_del_flg=$1",['N'],function(err,searchres){

     req.flash('success_msg', 'Record Deleted successfully');
     res.locals.message=req.flash();
     res.render('bankModule/associate_bank_chequebook_search',{
        chequedetails:searchres.rows,
        branch:result9.rows
});
});
});
});
});
//////////////////////////CHEQUE BOOK END //////////////////////////////////////////////////////////


 /*Associate Bank Deposit Master-START*/
         //Associate Bank Deposit Master
router.get('/asso_bank_deposit_master_search',function(req,res){

    pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg='N'",function(err,bankdepres){
    
        if(err) throw err;
        pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg='N'",function(err,searchres1){
            if(err) throw err;

    res.render('bankModule/associate_bank_deposit_master_search',{
        depositdetails:bankdepres.rows,
      depdetails:searchres1.rows
    });
});
});
});
///////edit bank deposit details////
router.get('/asso_bank_dep_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from gl_code",function(err,rslt) {
        if(err) throw err;
       // console.log("result2 is", rslt);

            pgdbconnect.query("select * from associate_bank_deposit_master",function(err,bankdepres){
    
            if(err) throw err;
         
            
    res.render('bankModule/asso_bank_deposit_master',{
        glcode:rslt.rows,
        pagetype:divtype,
        depositdetails:bankdepres.rows

    });
});
});
});

////////associate bank deposit master detsils///////
router.get('/asso_bank_deposit_master',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE DEPOSIT",divtype);

    pgdbconnect.query("select * from gl_code",function(err,rslt) {
        if(err) throw err;
        //console.log("result2 is", rslt);

  
        pgdbconnect.query("select * from associate_bank_deposit_master",function(err,bankdepres) {
            if(err) throw err;
    res.render('bankModule/associate_bank_deposit_master',{
        glcode:rslt.rows,
        depositdetails:bankdepres.rows,
        pagetype:divtype
    });
});
});


router.post('/asso_bank_deposit_master_add',function(req,res){
    console.log("Hii");
var divtype='ADD';
var Short_name = req.body.Short_name;                                     
var master_deposit_name = req.body.master_deposit_name;                                
var deposit_gl_name = req.body.deposit_gl_name;                                
var deposit_accnum = req.body.deposit_accnum;                                
var add_bnkdep_typ = req.body.add_bnkdep_typ;                                
var add_bnk_depnum = req.body.add_bnk_depnum;                                 
var deposit_opening_bal = req.body.deposit_opening_bal;                                 
var deposit_closing_bal = req.body.deposit_closing_bal;                                  
var deposit_opening_date = req.body.deposit_opening_date;                                
var deposit_favor = req.body.deposit_favor;                                 
var deposit_interest_rate = req.body.deposit_interest_rate;                                 
var deposit_maturity_date = req.body.deposit_maturity_date;                                 
var deposit_interest_date = req.body.deposit_interest_date;                                
var account_dep_type = req.body.account_dep_type;
var account_dep_master = req.body.account_dep_master;
var exampleFormControlTextarea2 = req.body.exampleFormControlTextarea2;
var deposit_id;
pgdbconnect.query("select * from associate_bank_deposit_master",function(err,result) {
    if(result.rowCount==0){
        deposit_id='1'

console.log("Bank Details",deposit_id,Short_name,master_deposit_name,deposit_gl_name,deposit_accnum,add_bnkdep_typ,add_bnk_depnum,deposit_opening_bal,deposit_closing_bal,deposit_opening_date,deposit_favor,deposit_interest_rate,deposit_maturity_date,deposit_interest_date,account_dep_type,account_dep_master,exampleFormControlTextarea2);
pgdbconnect.query("insert into associate_bank_deposit_master( abdm_ch_bank_deposit_id,abdm_ch_short_name,abdm_ch_name, abdm_n_gl_code, abdm_n_acct_num, abdm_ch_bank_deposit_type, abdm_n_bank_deposit_num, abdm_n_opening_bal, abdm_n_cur_bal, abdm_opn_date, abdm_ch_favouring, abdm_n_nt_rate, abdm_d_maturity_date, abdm_d_int_paid_date, abdm_ch_acct_type, abdm_ch_associate_branch_master,abdm_ch_description, abdm_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)",[deposit_id,Short_name,master_deposit_name,deposit_gl_name,deposit_accnum,add_bnkdep_typ,add_bnk_depnum,deposit_opening_bal,deposit_closing_bal,deposit_opening_date,deposit_favor,deposit_interest_rate,deposit_maturity_date,deposit_interest_date,account_dep_type,account_dep_master,exampleFormControlTextarea2,'N'],function(err,loginres){
    if(err) throw err;
    console.log("Result of Bank Deposit Details");

});
pgdbconnect.query("select * from gl_code",function(err,rslt) {
    if(err) throw err;
   // console.log("result2 is", rslt);
    

    //flash messege
        req.flash('success_msg', 'Data inserted successfully');
       res.locals.message=req.flash();
       
res.render('bankModule/associate_bank_deposit_master',{
    glcode:rslt.rows,
    pagetype:divtype
});
});


    }
else{

    
    pgdbconnect.query("select max(abdm_ch_bank_deposit_id) from associate_bank_deposit_master",function(err,result) {
       // console.log("max value check",result)
      //  console.log("max value check",result.rows[0].max)
      
      deposit_id=parseInt(result.rows[0].max)+1;
      //  console.log("when more rows exxxists",bank_id)



      console.log("Bank Deposit Details",deposit_id,Short_name,master_deposit_name,deposit_gl_name,deposit_accnum,add_bnkdep_typ,add_bnk_depnum,deposit_opening_bal,deposit_closing_bal,deposit_opening_date,deposit_favor,deposit_interest_rate,deposit_maturity_date,deposit_interest_date,account_dep_type,account_dep_master,exampleFormControlTextarea2);
      pgdbconnect.query("insert into associate_bank_deposit_master( abdm_ch_bank_deposit_id,abdm_ch_short_name,abdm_ch_name, abdm_n_gl_code, abdm_n_acct_num, abdm_ch_bank_deposit_type, abdm_n_bank_deposit_num, abdm_n_opening_bal, abdm_n_cur_bal, abdm_opn_date, abdm_ch_favouring, abdm_n_nt_rate, abdm_d_maturity_date, abdm_d_int_paid_date, abdm_ch_acct_type, abdm_ch_associate_branch_master,abdm_ch_description, abdm_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)",[deposit_id,Short_name,master_deposit_name,deposit_gl_name,deposit_accnum,add_bnkdep_typ,add_bnk_depnum,deposit_opening_bal,deposit_closing_bal,deposit_opening_date,deposit_favor,deposit_interest_rate,deposit_maturity_date,deposit_interest_date,account_dep_type,account_dep_master,exampleFormControlTextarea2,'N'],function(err,loginres){
          if(err) throw err;
          console.log("Result of Bank Deposit Details");
      
      });
      pgdbconnect.query("select * from gl_code",function(err,rslt) {
        if(err) throw err;
    //flash messege
        req.flash('success_msg', 'Data inserted successfully');
       res.locals.message=req.flash();
       
res.render('bankModule/associate_bank_deposit_master',{
    glcode:rslt.rows,
    pagetype:divtype
});
});

});}
    });

});
});



//////edit///////
router.post('/edit_depositdata_populate',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//
var depositid= req.body.tempdepositeid;
console.log("deposit id to edit",depositid)

pgdbconnect.query("select * from gl_code",function(err,result9) 
{
    if(err) throw err;
    //console.log("result2 is", result2);

            pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_bank_deposit_id=$1",[depositid],function(err,searchres)
    
            {
                console.log("searchres",searchres)
    var dep_edit_id =  searchres.rows[0].abdm_ch_bank_deposit_id;
    var dep_short_name = searchres.rows[0].abdm_ch_short_name;
    var dep_name = searchres.rows[0].abdm_ch_name;
    var dep_code=  searchres.rows[0].abdm_n_gl_code;
    var dep_acc_num =  searchres.rows[0].abdm_n_acct_num;
  
    var dep_type=  searchres.rows[0].abdm_ch_bank_deposit_type;
    var dep_depnum =  searchres.rows[0].abdm_n_bank_deposit_num;
    var dep_obal =  searchres.rows[0].abdm_n_opening_bal;
    var deposit_closing_bal =  searchres.rows[0].abdm_n_cur_bal;
    var dep_odate =  searchres.rows[0].abdm_opn_date;
    var dep_bcode =  searchres.rows[0].abdm_ch_branch_code;
    var dep_fav =  searchres.rows[0].abdm_ch_favouring;
    var dep_int_rate =  searchres.rows[0].abdm_n_nt_rate;
    var dep_mdate =  searchres.rows[0].abdm_d_maturity_date;
    var dep_pdate =  searchres.rows[0].abdm_d_int_paid_date;
    var dep_acc_type =  searchres.rows[0].abdm_ch_acct_type;
    var dep_br_master =  searchres.rows[0].abdm_ch_associate_branch_master;
    var dep_desc =  searchres.rows[0].abdm_ch_description;
  
   
  
  
                res.render('bankModule/associate_bank_deposit_master',{

        //bankdetails:searchbrres.rows,
        dep_edit_id:dep_edit_id,
        dep_short_name:dep_short_name,
        dep_name:dep_name,  
        dep_code:dep_code,  
        dep_acc_num:dep_acc_num, 
       
        dep_type:dep_type, 
        dep_depnum:dep_depnum, 
        dep_obal:dep_obal, 
        deposit_closing_bal:deposit_closing_bal, 
        dep_odate:dep_odate, 
        dep_bcode:dep_bcode, 
        dep_fav:dep_fav, 
   
        dep_int_rate:dep_int_rate,
        dep_mdate:dep_mdate, 
        dep_pdate:dep_pdate,
        dep_acc_type:dep_acc_type, 
  
        dep_br_master:dep_br_master,
        dep_desc:dep_desc,
        pagetype:"EDIT",
        glcode:result9.rows,
        moment:moment
    
    });
});
});
});


/////update/////
router.post('/update_deposit_edit',function(req,res){
    console.log("Welcomeedittttt");
    var deposit_edit= req.body.deposit_edit;

    var Short_name_ed = req.body.Short_name_ed;
    var master_deposit_name_ed = req.body.master_deposit_name_ed;
    var deposit_gl_name_ed = req.body.deposit_gl_name_ed;
    var deposit_accnum_ed = req.body.deposit_accnum_ed;
    var add_bnkdep_typ_ed = req.body.add_bnkdep_typ_ed;
    var add_bnk_depnum_ed = req.body.add_bnk_depnum_ed;
    var deposit_opening_bal_ed= req.body.deposit_opening_bal_ed;
    var deposit_closing_bal_ed= req.body.deposit_closing_bal_ed;
    var deposit_opening_date_ed= req.body.deposit_opening_date_ed;
    var deposit_favor_ed= req.body.deposit_favor_ed;
    var deposit_interest_rate_ed= req.body.deposit_interest_rate_ed;
    var deposit_maturity_date_ed= req.body.deposit_maturity_date_ed;
    var deposit_interest_date_ed= req.body.deposit_interest_date_ed;
    var acc_type_ed= req.body.acc_type_ed;
    var acc_br_master_ed= req.body.acc_br_master_ed;
    var exampleFormControlTextarea2= req.body.exampleFormControlTextarea2;
  

   
    console.log("edit deposit details1",deposit_edit,Short_name_ed,master_deposit_name_ed,deposit_gl_name_ed,deposit_accnum_ed,add_bnkdep_typ_ed,
    add_bnk_depnum_ed,deposit_opening_bal_ed,deposit_closing_bal_ed,deposit_opening_date_ed,deposit_favor_ed,deposit_interest_rate_ed,deposit_maturity_date_ed,deposit_interest_date_ed,
    acc_type_ed,acc_br_master_ed,exampleFormControlTextarea2);
    pgdbconnect.query('update associate_bank_deposit_master set abdm_ch_short_name=$1,abdm_ch_name=$2,abdm_n_gl_code=$3,abdm_n_acct_num=$4,abdm_ch_bank_deposit_type=$5,abdm_n_bank_deposit_num=$6,abdm_n_opening_bal=$7,abdm_n_cur_bal=$8,abdm_opn_date=$9,abdm_ch_favouring=$10,abdm_n_nt_rate=$11,abdm_d_maturity_date=$12,abdm_d_int_paid_date=$13,abdm_ch_acct_type=$14,abdm_ch_associate_branch_master=$15,abdm_ch_description=$16 where abdm_ch_bank_deposit_id=$17',[Short_name_ed,master_deposit_name_ed,deposit_gl_name_ed,deposit_accnum_ed,add_bnkdep_typ_ed,add_bnk_depnum_ed,deposit_opening_bal_ed,deposit_closing_bal_ed,deposit_opening_date_ed,deposit_favor_ed,deposit_interest_rate_ed,deposit_maturity_date_ed,deposit_interest_date_ed,acc_type_ed,acc_br_master_ed,exampleFormControlTextarea2,deposit_edit],function(err,result){

            if(err) throw err;
          console.log("deposit updating",result);

          
            pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg='N'",function(err,loginres){
                if(err) throw err;
                console.log("result:",loginres);

            pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg='N'",function(err,searchres1){
            if(err) throw err;

   //flash messege
   req.flash('success_msg', 'Data updated successfully');
   res.locals.message=req.flash();
   
            res.render('bankModule/associate_bank_deposit_master_search',{
                depositdetails:loginres.rows,
                depdetails:searchres1.rows
            });
            });    
        });
    });
});


    router.post('/view_deposit_data',function(req,res){
        console.log("populate fields on viewing");
        var divtype="VIEW";
      console.log("DIV TYPE on view data",divtype);
    
        //Bank Branch details-start//
    var depid= req.body.tempdepvid;
    console.log("bank id to view",depid)
    
     
    
                pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_bank_deposit_id=$1 order by abdm_ch_bank_deposit_id ",[depid],function(err,searchres)
        
                {
                    console.log("searchres",searchres)
                    var dep_edit_id =  searchres.rows[0].abdm_ch_bank_deposit_id;
                    var dep_short_name = searchres.rows[0].abdm_ch_short_name;
                    var dep_name = searchres.rows[0].abdm_ch_name;
                    var dep_code=  searchres.rows[0].abdm_n_gl_code;
                    var dep_acc_num =  searchres.rows[0].abdm_n_acct_num;
                  
                    var dep_type=  searchres.rows[0].abdm_ch_bank_deposit_type;
                    var dep_depnum =  searchres.rows[0].abdm_n_bank_deposit_num;
                    var dep_obal =  searchres.rows[0].abdm_n_opening_bal;
                    var deposit_closing_bal =  searchres.rows[0].abdm_n_cur_bal;
                    var dep_odate =  searchres.rows[0].abdm_opn_date;
                    var dep_bcode =  searchres.rows[0].abdm_ch_branch_code;
                    var dep_fav =  searchres.rows[0].abdm_ch_favouring;
                    var dep_int_rate =  searchres.rows[0].abdm_n_nt_rate;
                    var dep_mdate =  searchres.rows[0].abdm_d_maturity_date;
                    var dep_pdate =  searchres.rows[0].abdm_d_int_paid_date;
                    var dep_acc_type =  searchres.rows[0].abdm_ch_acct_type;
                    var dep_br_master =  searchres.rows[0].abdm_ch_associate_branch_master;
                    var dep_desc =  searchres.rows[0].abdm_ch_description;
                    res.render('bankModule/associate_bank_deposit_master',{
    
           
        dep_edit_id:dep_edit_id,
        dep_short_name:dep_short_name,
        dep_name:dep_name,  
        dep_code:dep_code,  
        dep_acc_num:dep_acc_num, 
       
        dep_type:dep_type, 
        dep_depnum:dep_depnum, 
        dep_obal:dep_obal, 
        deposit_closing_bal:deposit_closing_bal, 
        dep_odate:dep_odate, 
        dep_bcode:dep_bcode, 
        dep_fav:dep_fav, 
   
        dep_int_rate:dep_int_rate,
        dep_mdate:dep_mdate, 
        dep_pdate:dep_pdate, 
        dep_acc_type:dep_acc_type, 
  
        dep_br_master:dep_br_master,
        dep_desc:dep_desc,
        pagetype:"VIEW",
        moment:moment
        
        });
    });
});







 router.post('/search_particular_deposit_rec', function(req,res){
console.log("search particular record depositt");

var gl_cd = req.body.gl_cd;
var ac_deposit_num = req.body.ac_deposit_num;
var bnk_dep_num = req.body.bnk_dep_num;
console.log(gl_cd, ac_deposit_num, bnk_dep_num);
console.log(gl_cd!=null && ac_deposit_num!='' && bnk_dep_num!='')
console.log(gl_cd!='' && ac_deposit_num!='' && bnk_dep_num=='')
console.log(gl_cd!=null && ac_deposit_num=='' && bnk_dep_num!='')
console.log(gl_cd=='Select' && ac_deposit_num=='' && bnk_dep_num!='')
console.log(gl_cd=='' && ac_deposit_num!='' && bnk_dep_num=='')   


// All fields
if(gl_cd!='' && ac_deposit_num!='' && bnk_dep_num!=''){
    gl_cd = req.body.gl_cd;
    ac_deposit_num = req.body.ac_deposit_num;
    bnk_dep_num = req.body.bnk_dep_num;
}

// Only GL CODE
else if(gl_cd!=null && ac_deposit_num=='' && bnk_dep_num=='' ){
    console.log("when only Gl code is filled")
    gl_cd = req.body.gl_cd;
    ac_deposit_num=null;
    bnk_dep_num=null;
 }

 // Only Account Number
 else if(gl_cd=='Select GL Code' && ac_deposit_num!='' && bnk_dep_num=='' ){
    console.log("when only ac_deposit_num is filled")
    gl_cd=null;
    ac_deposit_num=req.body.ac_deposit_num;
    bnk_dep_num=null;
   
 }

  // Only Bank Deposit Number
 else if(gl_cd=='Select GL Code' && ac_deposit_num=='' && bnk_dep_num!=''){
    console.log("when only bank deposit  is filled")
    gl_cd=null;
    ac_deposit_num=null;
    bnk_dep_num= req.body.bnk_dep_num;
   
 }

 // GL CODE and Account Number
else if(gl_cd!='' && ac_deposit_num!='' && bnk_dep_num==''){
   console.log("when bank deposit number is missing")
   gl_cd = req.body.gl_cd;
   ac_deposit_num = req.body.ac_deposit_num;
   bnk_dep_num=null;
}

// GL CODE and Bank Deposit Number
else if(gl_cd!='' && ac_deposit_num=='' && bnk_dep_num!=''){
    console.log("when bank deposit number is missing")
    gl_cd = req.body.gl_cd;
    ac_deposit_num = null;
    bnk_dep_num= req.body.bnk_dep_num;
 }

 // Account Number and Bank Deposit Number
else if(gl_cd=='Select GL Code' && ac_deposit_num!='' && bnk_dep_num!=''){
    console.log("when bank deposit number is missing")
    gl_cd = null;
    ac_deposit_num = req.body.ac_deposit_num;
    bnk_dep_num= req.body.bnk_dep_num;
 }
 
pgdbconnect.query("select * from associate_bank_deposit_master where (abdm_n_gl_code=$1 or abdm_n_acct_num=$2 or abdm_n_bank_deposit_num=$3) and (abdm_ch_del_flg='N')",[gl_cd,ac_deposit_num,bnk_dep_num],function(err,searchres) 
{
    if(err) throw err;
   console.log("searchres is", searchres.rows);

   pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg='N'",function(err,searchres1){
    if(err) throw err;
    

    res.render('bankModule/associate_bank_deposit_master_search',{

        depositdetails:searchres.rows,
        depdetails:searchres1.rows
    });
});
 });
});


 router.post('/delete_deposit_data',function(req,res){


    var delid= req.body.tempdepdelid;
    console.log("id to delete",delid)
    pgdbconnect.query("update associate_bank_deposit_master set abdm_ch_del_flg=$1 where abdm_ch_bank_deposit_id=$2",['Y',delid],function(err,delres){

        console.log("deleted result",delres);
        pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg=$1 order by abdm_ch_bank_deposit_id ",['N'],function(err,searchres){
            pgdbconnect.query("select * from associate_bank_deposit_master where abdm_ch_del_flg='N'",function(err,searchres1){
                if(err) throw err;
    
    //Bank Branch details-start//
    req.flash('success_msg', 'Record Deleted successfully');
    res.locals.message=req.flash();
        res.render('bankModule/associate_bank_deposit_master_search',{
            depositdetails:searchres.rows,
            depdetails:searchres1.rows
    });
});
});
});
});
/*Associate Bank Deposit Master-END*/



/*Associated Bank Deposit Returns-START*/
router.get('/asso_bank_deposit_returns',function(req,res){
    var divtype=req.query.key;
    console.log("DIV TYPE",divtype);
    
    
        res.render('bankModule/associated_bank_deposit_returns',{
            pagetype:divtype 
        });
    });


//Associated Bank Deposit Returns Insertion
router.post('/asso_bank_acc_deposit_insert',function(req,res){

    var divtype="ADD";
    console.log("DIV TYPE",divtype);

    asso_depo_mstr_ad=req.body.asso_depo_mstr_ad;
    asso_depo_date_ad=req.body.asso_depo_date_ad;
    asso_depo_amt_ad=req.body.asso_depo_amt_ad;
    asso_depo_tdsamt_ad=req.body.asso_depo_tdsamt_ad;
    asso_depo_totalamt_ad=req.body.asso_depo_totalamt_ad;

    var asso_depo_id;
    pgdbconnect.query("select * from associate_bank_deposit_returns where abdr_ch_del_flg=$1",['N'], function(err,resl){

        if(resl.rowCount==0){
            asso_depo_id=1;

            asso_depo_id,asso_depo_mstr_ad,asso_depo_date_ad,asso_depo_amt_ad,asso_depo_tdsamt_ad,asso_depo_totalamt_ad,'N'

    pgdbconnect.query("insert into associate_bank_deposit_returns(abdr_n_deposit_id, abdr_ch_associate_bank_deposit_master, abdr_d_return_date, abdr_n_receive_amt, abdr_n_tds_amt, abdr_n_total_amt, abdr_ch_del_flg)values ($1,$2,$3,$4,$5,$6,$7)",[asso_depo_id,asso_depo_mstr_ad,asso_depo_date_ad,asso_depo_amt_ad,asso_depo_tdsamt_ad,asso_depo_totalamt_ad,'N'],function(err,rslt) {
        if(err) throw err;

        //flash messege
        req.flash('success_msg', 'Data inserted successfully');
        res.locals.message=req.flash();

    res.render('bankModule/associated_bank_deposit_returns',{
        pagetype:divtype
    });
});
        }
    else
    {
        pgdbconnect.query("select max(abdr_n_deposit_id) from associate_bank_deposit_returns",function(err,reslt) {
            console.log("max value check",reslt)
            console.log("max value check",reslt.rows[0].max)
          
            asso_depo_id=parseInt(reslt.rows[0].max)+1;
            console.log("when more rows exxxists",asso_depo_id);

            pgdbconnect.query("insert into associate_bank_deposit_returns(abdr_n_deposit_id, abdr_ch_associate_bank_deposit_master, abdr_d_return_date, abdr_n_receive_amt, abdr_n_tds_amt, abdr_n_total_amt, abdr_ch_del_flg)values ($1,$2,$3,$4,$5,$6,$7)",[asso_depo_id,asso_depo_mstr_ad,asso_depo_date_ad,asso_depo_amt_ad,asso_depo_tdsamt_ad,asso_depo_totalamt_ad,'N'],function(err,rslt) {
                if(err) throw err;
        console.log("data",rslt);
                //flash messege
                req.flash('success_msg', 'Data inserted successfully');
                res.locals.message=req.flash();
        
            res.render('bankModule/associated_bank_deposit_returns',{
                pagetype:divtype
            });
        });
        });
    }
});
});


//Associated Bank Deposit Returns Edit
router.post('/asso_bank_acc_deposit_edit', function(req,res){
    var divtype="EDIT";
    console.log("DIV TYPE",divtype);

    var edit_rtrn_typ= req.body.edit_rtrn_typ;
  console.log("cheque id to edit",edit_rtrn_typ)

  pgdbconnect.query("select * from associate_bank_deposit_returns where abdr_n_deposit_id=$1 order by abdr_n_deposit_id",[edit_rtrn_typ],function(err,rsl)
   {
    if(err) throw err;
    console.log("Editing Details",rsl);
    var ed_dep_id = rsl.rows[0].abdr_n_deposit_id;
    var ed_dep_master = rsl.rows[0].abdr_ch_associate_bank_deposit_master;
    var ed_dep_rtrndt = rsl.rows[0].abdr_d_return_date;
    var ed_dep_recvamt = rsl.rows[0].abdr_n_receive_amt;
    var ed_dep_tdsamt=rsl.rows[0].abdr_n_tds_amt;
    var ed_dep_ttlamt=rsl.rows[0].abdr_n_total_amt;

    res.render('bankModule/associated_bank_deposit_returns',{
        ed_dep_id:ed_dep_id,
        ed_dep_master:ed_dep_master,
        ed_dep_rtrndt:ed_dep_rtrndt,
        ed_dep_recvamt:ed_dep_recvamt,
        ed_dep_tdsamt:ed_dep_tdsamt,
        ed_dep_ttlamt:ed_dep_ttlamt,
        pagetype:divtype,
        edit_rtrn_typ:edit_rtrn_typ,
        moment:moment

    });
});
});


//Associated Bank Deposit Returns Update
router.post('/asso_bank_acc_deposit_update', function(req,res){

    console.log("Updating");
    var up_dep_master= req.body.asso_depo_mstr_ed;
    console.log(up_dep_master);
    //var up_dep_rtrndt= req.body.asso_depo_date_ed;
    var up_dep_rtrndt= req.body.deposit_opening_date;
    
    var up_dep_recvamt= req.body.asso_depo_amt_ed;
    var up_dep_tdsamt=req.body.asso_depo_tdsamt_ed;
    var up_dep_ttlamt= req.body.asso_depo_totalamt_ed;
    var up_dep_id=req.body.return_dep_ed;
    console.log(up_dep_id);
    
      pgdbconnect.query("update associate_bank_deposit_returns set abdr_ch_associate_bank_deposit_master=$1, abdr_d_return_date=$2, abdr_n_receive_amt=$3, abdr_n_tds_amt=$4, abdr_n_total_amt=$5 where abdr_n_deposit_id=$6",[up_dep_master,up_dep_rtrndt,up_dep_recvamt,up_dep_tdsamt,up_dep_ttlamt,up_dep_id],function(err,rsl)
       {
        if(err) throw err;
    
        pgdbconnect.query("select * from associate_bank_deposit_returns where abdr_ch_del_flg=$1 order by abdr_n_deposit_id",['N'], function(err,resl){


        
            //flash messege
            req.flash('success_msg', 'Data updated successfully');
            res.locals.message=req.flash();
    
    
            res.render('bankModule/associated_bank_deposit_returns_search',{
            depositdtls:resl.rows,
            up_dep_rtrn:rsl.rows,
            moment:moment
     
        });
        });
    });
    });

//Associated Bank Deposit Returns View
router.post('/asso_bank_acc_deposit_view', function(req,res){

    var divtype="VIEW";
    console.log("DIV TYPE",divtype);

    var view_rtrn_typ= req.body.view_rtrn_typ;
  console.log("acc id to view",view_rtrn_typ)
  pgdbconnect.query("select * from associate_bank_deposit_returns where abdr_n_deposit_id=$1 order by abdr_n_deposit_id",[view_rtrn_typ],function(err,rsl)
  {
    if(err) throw err;
    var vw_dep_id = rsl.rows[0].abdr_n_deposit_id;
    var vw_dep_master = rsl.rows[0].abdr_ch_associate_bank_deposit_master;
    var vw_dep_rtrndt = rsl.rows[0].abdr_d_return_date;
    var vw_dep_recvamt = rsl.rows[0].abdr_n_receive_amt;
    var vw_dep_tdsamt=rsl.rows[0].abdr_n_tds_amt;
    var vw_dep_ttlamt=rsl.rows[0].abdr_n_total_amt;
    
            res.render('bankModule/associated_bank_deposit_returns',{
                vw_dep_id:vw_dep_id,
                vw_dep_master:vw_dep_master,
                vw_dep_rtrndt:vw_dep_rtrndt,
                vw_dep_recvamt:vw_dep_recvamt,
                vw_dep_tdsamt:vw_dep_tdsamt,
                vw_dep_ttlamt:vw_dep_ttlamt,
                pagetype:divtype,
                view_rtrn_typ:view_rtrn_typ,
                moment:moment
     
        });
        });
    });

//Associated Bank Deposit Returns Delete
router.post('/asso_bank_acc_deposit_delete', function(req,res){


    var delete_rtrn_typ= req.body.delete_rtrn_typ;
  console.log("acc id to delete",delete_rtrn_typ)

  pgdbconnect.query("update associate_bank_deposit_returns set abdr_ch_del_flg=$1 where abdr_n_deposit_id=$2 ",['Y',delete_rtrn_typ],function(err,rsl)
   {
    if(err) throw err;
    console.log("delete Details",rsl.rows);

    pgdbconnect.query("select * from associate_bank_deposit_returns where abdr_ch_del_flg=$1 order by abdr_n_deposit_id",['N'] ,function(err,resl) 
    {
        if(err) throw err;
        console.log("search bank type is", resl.rows);

        //flash messege
        req.flash('success_msg', 'Data Deleted successfully');
        res.locals.message=req.flash();

    res.render('bankModule/associated_bank_deposit_returns_search',{
        up_dep_rtrn:rsl.rows,
        depositdtls:resl.rows,
        moment:moment
});
    });
});
});


//Associate Bank Account Type Search Particular Record
router.post('/asso_bank_deposit_returns_srch', function(req,res){
    console.log("search particular record");
    
    var ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    var return_date = req.body.return_date;
    var return_date1 = req.body.return_date1;
    var return_amount = req.body.return_amount;
    var ser_and1 = req.body.ser_and1;
    var return_tds_amount = req.body.return_tds_amount;
    var tds_and = req.body.tds_and;
    console.log("searching record",ser_ass_bnk_depmas,return_date,return_date1,return_amount,ser_and1,return_tds_amount,tds_and);

// All Fields
if(ser_ass_bnk_depmas!='' && return_date!='' && return_date1!='' && return_amount!='' && ser_and1!=''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Only Associated Bank Deposit Master
   else if(ser_ass_bnk_depmas!='' && return_date=='' && return_date1=='' && return_amount=='' && ser_and1==''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = null;
    return_date1 = null;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = null;
    tds_and = null;
}

// Only Return Date
else if(ser_ass_bnk_depmas=='' && return_date!='' && return_date1!='' && return_amount=='' && ser_and1==''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = null;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = null;
    tds_and = null;
}

// Only Recived Amount
else if(ser_ass_bnk_depmas=='' && return_date=='' && return_date1=='' && return_amount!='' && ser_and1!=''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = null;
    return_date = null;
    return_date1 = null;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = null;
    tds_and = null;
}

// Only TDS Amount
else if(ser_ass_bnk_depmas=='' && return_date=='' && return_date1=='' && return_amount=='' && ser_and1==''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = null;
    return_date = null;
    return_date1 = null;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Associated Bank Deposit Master and Return Date
  else if(ser_ass_bnk_depmas!='' && return_date!='' && return_date1!='' && return_amount=='' && ser_and1==''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = null;
    tds_and = null;
}

// Associated Bank Deposit Master and Recived Amount
else if(ser_ass_bnk_depmas!='' && return_date=='' && return_date1=='' && return_amount!='' && ser_and1!=''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = null;
    return_date1 = null;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = null;
    tds_and = null;
}

// Associated Bank Deposit Master and TDS Amount
else if(ser_ass_bnk_depmas!='' && return_date=='' && return_date1=='' && return_amount=='' && ser_and1==''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = null;
    return_date1 = null;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Return Date and Recived Amount
else if(ser_ass_bnk_depmas=='' && return_date!='' && return_date1!='' && return_amount!='' && ser_and1!=''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = null;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = null;
    tds_and = null;
}

// Return Date and TDS Amount
else if(ser_ass_bnk_depmas=='' && return_date!='' && return_date1!='' && return_amount=='' && ser_and1==''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = null;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Recived Amount and TDS Amount
else if(ser_ass_bnk_depmas=='' && return_date=='' && return_date1=='' && return_amount!='' && ser_and1!=''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = null;
    return_date = null;
    return_date1 = null;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Associated Bank Deposit Master , Return Date and Recived Amount
else if(ser_ass_bnk_depmas!='' && return_date!='' && return_date1!='' && return_amount!='' && ser_and1!=''&& return_tds_amount=='' && tds_and==''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = null;
    tds_and = null;
}

// Associated Bank Deposit Master , Return Date and TDS Amount
else if(ser_ass_bnk_depmas!='' && return_date!='' && return_date1!='' && return_amount=='' && ser_and1==''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = null;
    ser_and1 = null;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Associated Bank Deposit Master ,  Recived Amount and TDS Amount
else if(ser_ass_bnk_depmas!='' && return_date=='' && return_date1=='' && return_amount!='' && ser_and1!=''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = req.body.ser_ass_bnk_depmas;
    return_date = null;
    return_date1 = null;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}

// Return Date , Recived Amount and TDS Amount
else if(ser_ass_bnk_depmas=='' && return_date!='' && return_date1!='' && return_amount!='' && ser_and1!=''&& return_tds_amount!='' && tds_and!=''){
    ser_ass_bnk_depmas = null;
    return_date = req.body.return_date;
    return_date1 = req.body.return_date1;
    return_amount = req.body.return_amount;
    ser_and1 = req.body.ser_and1;
    return_tds_amount = req.body.return_tds_amount;
    tds_and = req.body.tds_and;
}


    pgdbconnect.query("select * from associate_bank_deposit_returns where (abdr_ch_associate_bank_deposit_master=$1 or (abdr_d_return_date between $2 and $3) or (abdr_n_receive_amt between $4 and $5) or (abdr_n_tds_amt between $6 and $7)) and abdr_ch_del_flg='N' ",[ser_ass_bnk_depmas,return_date,return_date1,return_amount,ser_and1,return_tds_amount,tds_and],function(err,resl) 
    {
        if(err) throw err;
        console.log("search bank type is", resl.rows);
    
        res.render('bankModule/associated_bank_deposit_returns_search',{
            depositdtls:resl.rows,
        moment:moment
        });
    });
     });

// Associated Bank Deposit Returns Search 

router.get('/asso_bank_deposit_returns_search',function(req,res){

    pgdbconnect.query("select * from associate_bank_deposit_returns where abdr_ch_del_flg=$1 order by abdr_n_deposit_id",['N'], function(err,resl){


    res.render('bankModule/associated_bank_deposit_returns_search',{
        depositdtls:resl.rows,
        moment:moment
    });
    });
});
/*Associated Bank Deposit Returns-END*/
module.exports = router;