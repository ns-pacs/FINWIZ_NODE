var express = require('express');
var router = express.Router();
var pgdbconnect=require('../database/pgdbconnect');
var moment=require('moment');




/* Society- KCC Targets- START*/

//KCC Target Add screen
router.get('/scty_kcc_trgt_add',function(req,res){
  res.render('societyModule/scty_KCC_Target_Add',{
       pagetype:'ADD'
   });
});

//KCC Target Search screen
router.get('/scty_kcc_trgt_search',function(req,res){

   pgdbconnect.query("select * from society_kcc_targets_details where skcc_ch_del_flg='N'",function(err,kccres){

		if(err)
		{
		   console.log("result1 is", kccres);
		}
    
else{
   
res.render('societyModule/scty_KCC_Target_Search',{
	kcctarget:kccres.rows
    
    });
}     
});
});


  




//kcc insertion

router.post('/kcc_target_insert',function(req,res){

   var finance_year=req.body.fin_year;
   var member_cat=req.body.cust_category;
   var target_quantity=req.body.trgt_qty;
  
   console.log('member category',member_cat)
  
  var kccid;
  
   pgdbconnect.query("select * from society_kcc_targets_details",function(err,result) {
     if(result.rowCount==0){
      kccid='1';
   
   pgdbconnect.query("insert into society_kcc_targets_details(skcc_n_target_id,skcc_ch_financial_year,skcc_ch_mem_category,skcc_n_target_quantity,skcc_ch_del_flg)values($1,$2,$3,$4,$5)",[kccid,finance_year,member_cat,target_quantity,'N'],function(err,kccres) {
     if (err)
      {
          console.error('Error with table query', err);
  }
  else
  {
        req.flash('success_msg', 'Record Added successfully');
        res.locals.message=req.flash();
  
  res.render('societyModule/scty_KCC_Target_Add',{
     pagetype:"ADD",
  
  });
  }
   });
     }
  else{
  
   pgdbconnect.query("select max(skcc_n_target_id) from society_kcc_targets_details",function(err,result) {
     console.log("max value check",result)
     console.log("max value check",result.rows[0].max)
  
     kcc_target_id=parseInt(result.rows[0].max)+1;
     console.log("when more rows exxxists",kcc_target_id)
  
  
     pgdbconnect.query("insert into society_kcc_targets_details(skcc_n_target_id,skcc_ch_financial_year,skcc_ch_mem_category,skcc_n_target_quantity,skcc_ch_del_flg)values($1,$2,$3,$4,$5)",[kcc_target_id,finance_year,member_cat,target_quantity,'N'],function(err,kccres) {

  
        if (err)
        {
           console.error('Error with table query', err);
     }
  
     else
     {
          req.flash('success_msg', 'Record Added successfully');
          res.locals.message=req.flash();
          res.render('societyModule/scty_KCC_Target_Add',{
          pagetype:"ADD",
  
          });
     }
  });
  
  });
  
  }
  
   });
  
  });
  




//kcc target edit screen


router.post('/kcc_target_edit',function(req,res){
	console.log("within account search")

	var divtype="EDIT";
	console.log('divtype',divtype)
var kccid=req.body.kcctargettempid1;
console.log('accccid',kccid);

	pgdbconnect.query("select * from society_kcc_targets_details where skcc_n_target_id=$1",[kccid],function(err,searchres){

var kcc_target_id=searchres.rows[0].skcc_n_target_id;
var financial_year=searchres.rows[0].skcc_ch_financial_year;
var member_cat=searchres.rows[0].skcc_ch_mem_category;
var target_qty=searchres.rows[0].skcc_n_target_quantity;

console.log('kcc_target_id',kcc_target_id);
console.log('financial_year',financial_year);
console.log('member_cat',member_cat);
console.log('target_qty',target_qty);




res.render('societyModule/scty_KCC_Target_Add',{

   kcc_target_id:kcc_target_id,
   
   financial_year:financial_year,
   member_cat:member_cat,
   target_qty:target_qty,
   pagetype:"EDIT"

});
   });
});


//update kcc trget 
router.post('/kcctarget_update_record',function(req,res){
   var finance_year=req.body.fin_year_ed;
   var member_cat=req.body.cust_category_ed;
   var target_quantity=req.body.trgt_qty_ed;
   var kcc_targetid=req.body.kcc_target_id_ed;

console.log('finance_year',finance_year);
console.log('member_cattttttttttt',member_cat);
console.log('target_quantity',target_quantity);
console.log('kcc_targetid',kcc_targetid);

pgdbconnect.query("update society_kcc_targets_details set skcc_ch_financial_year=$1,skcc_ch_mem_category=$2,skcc_n_target_quantity=$3 where skcc_n_target_id=$4",[finance_year,member_cat,target_quantity,kcc_targetid],function(err,kccupres) {

   if (err)
   {
            console.error('Error with table query', err);
   }
   else{
   pgdbconnect.query("select * from society_kcc_targets_details where skcc_ch_del_flg=$1",['N'],function(err,kccres1){

      req.flash('success_msg', 'Record updated successfully');
      res.locals.message=req.flash();
         res.render('societyModule/scty_KCC_Target_Search',{

            kcctarget:kccres1.rows
         });
      });
   }
});
});


//kcc target view

router.post('/kcc_target_view',function(req,res){
	console.log("within account search")

	var divtype="VIEW";
	console.log('divtype',divtype)
var kccid=req.body.kcctargettempid2;
console.log('accccid',kccid);

	pgdbconnect.query("select * from society_kcc_targets_details where skcc_n_target_id=$1",[kccid],function(err,searchres){

var kcc_target_id=searchres.rows[0].skcc_n_target_id;
var financial_year=searchres.rows[0].skcc_ch_financial_year;
var member_cat=searchres.rows[0].skcc_ch_mem_category;
var target_qty=searchres.rows[0].skcc_n_target_quantity;

console.log('kcc_target_id',kcc_target_id);
console.log('financial_year',financial_year);
console.log('member_cat',member_cat);
console.log('target_qty',target_qty);




res.render('societyModule/scty_KCC_Target_Add',{

   kcc_target_id:kcc_target_id,
   
   financial_year:financial_year,
   member_cat:member_cat,
   target_qty:target_qty,
   pagetype:"VIEW"

});
   });
});

//kcc target delete


   
router.post('/kcc_target_delete',function(req,res){

		var kcc_target_id=req.body.tempkccid3;
		console.log('kcc_target_id',kcc_target_id)
   
	pgdbconnect.query("UPDATE society_kcc_targets_details SET skcc_ch_del_flg='Y' WHERE skcc_n_target_id=$1 ",[kcc_target_id],function(err,upres2){
   
	   if (err) throw err;
	   console.log("kcc target UPDATED RESULT",upres2)

	   pgdbconnect.query("select * from society_kcc_targets_details where skcc_ch_del_flg='N'",function(err,result){

		req.flash('success_msg', 'Record Deleted successfully');
		res.locals.message=req.flash();
		res.render('societyModule/scty_KCC_Target_Search',{

			kcctarget:result.rows
		});
	});
});
	});

//kcc target searcher


router.post('/kcc_target_searcher',kcc_target_searcher)
    function kcc_target_searcher(req,res)
    {

		var fin_year=req.body.fin_year
		var mem_cat=req.body.cust_category


console.log('fin_year',fin_year);
console.log('mem_cat',mem_cat);
pgdbconnect.query("select * from society_kcc_targets_details where ((skcc_ch_financial_year=$1 or skcc_ch_mem_category=$2) and skcc_ch_del_flg='N')",[fin_year,mem_cat],function(err,upres2){

	console.log('search result is',upres2)

	if(err)
	{
	   console.log("Error with table query",err);
	}

	else
	{
	
			res.render('societyModule/scty_KCC_Target_Search',{

				kcctarget:upres2.rows
			});
		
	}
});
	}
/* Society- KCC Targets-END */
////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Society- KCC Credit Limits- START*/

//KCC Credit Limit Add screen
router.get('/scty_kcc_cr_lim_add',function(req,res){

   res.render('societyModule/scty_KCC_Credit_Limit_Add',{
      pagetype:'ADD'

});
});


//kcc credit limit insertion
router.post('/kcc_credit_insert',function(req,res){

   var loan_type=req.body.kc_crd_lmt;
   var member_credit_cat=req.body.cust_category;
   var kcc_date=req.body.kcc_crd_dt;
   var sanction_lmt=req.body.sacn_crd_lmt;

  
   console.log('member category',member_credit_cat)
  
  var kcc_credit_id;
  
   pgdbconnect.query("select * from society_kcc_credit_limit_details",function(err,result) {
     if(result.rowCount==0){
      kcc_credit_id='1';
   
   pgdbconnect.query("insert into society_kcc_credit_limit_details(scl_ch_loan_type,scl_ch_mem_category,scl_d_sanctioned_date,scl_n_sanctioned_amt,scl_n_credit_limit_id,scl_ch_del_flg)values($1,$2,$3,$4,$5,$6)",[loan_type,member_credit_cat,kcc_date,sanction_lmt,kcc_credit_id,'N'],function(err,kccres) {
     if (err)
      {
          console.error('Error with table query', err);
  }
  else
  {
        req.flash('success_msg', 'Record Added successfully');
        res.locals.message=req.flash();
  
  res.render('societyModule/scty_KCC_Credit_Limit_Add',{
     pagetype:"ADD",
  
  });
  }
   });
     }
  else{
  
   pgdbconnect.query("select max(scl_n_credit_limit_id) from society_kcc_credit_limit_details",function(err,result) {
     console.log("max value check",result)
     console.log("max value check",result.rows[0].max)
  
     kcc_credit_lmt_id=parseInt(result.rows[0].max)+1;
     console.log("when more rows exxxists",kcc_credit_lmt_id)
  
  

      pgdbconnect.query("insert into society_kcc_credit_limit_details(scl_ch_loan_type,scl_ch_mem_category,scl_d_sanctioned_date,scl_n_sanctioned_amt,scl_n_credit_limit_id,scl_ch_del_flg)values($1,$2,$3,$4,$5,$6)",[loan_type,member_credit_cat,kcc_date,sanction_lmt,kcc_credit_lmt_id,'N'],function(err,kccres) {

        if (err)
        {
           console.error('Error with table query', err);
     }
  
     else
     {
          req.flash('success_msg', 'Record Added successfully');
          res.locals.message=req.flash();
          res.render('societyModule/scty_KCC_Credit_Limit_Add',{
          pagetype:"ADD",
  
          });
     }
  });
  
  });
  
  }
  
   });
  
  });
  



//KCC credit lmt Search screen
router.get('/scty_kcc_cr_lim_search',function(req,res){
   console.log('within searcher');

   pgdbconnect.query("select * from society_kcc_credit_limit_details where scl_ch_del_flg='N'",function(err,kccres){

		if(err)
		{
		   console.log("result1issssssssssssss", kccres);
		}
    
else{
   
res.render('societyModule/scty_KCC_Credit_Limit_Search',{
   kcclmt:kccres.rows,
   moment:moment
    
    });
}     
});
});


 //kcc credit limit edit
 
 
 router.post('/kcc_credit_lmt_edit',function(req,res){
	console.log("within account search")

	var divtype="EDIT";
	console.log('divtype',divtype)
var kccid=req.body.kcccreditid1;
console.log('accccid',kccid);

	pgdbconnect.query("select * from society_kcc_credit_limit_details where scl_n_credit_limit_id=$1",[kccid],function(err,searchres){

var loan_type =searchres.rows[0].scl_ch_loan_type;
var mem_cat =searchres.rows[0].scl_ch_mem_category;
var kcc_date =searchres.rows[0].scl_d_sanctioned_date;
var sanction_amt =searchres.rows[0].scl_n_sanctioned_amt;
var kcc_credit_lmt_id=searchres.rows[0].scl_n_credit_limit_id;

res.render('societyModule/scty_KCC_Credit_Limit_Add',{

loan_type:loan_type,
mem_cat:mem_cat,
kcc_date:kcc_date,
sanction_amt:sanction_amt,
kcc_credit_lmt_id:kcc_credit_lmt_id,

pagetype:"EDIT",
moment:moment
});
   });
});


//kcc credit lmt update
router.post('/kcct_credit_lmt_update_record',function(req,res){
   var loan_type =req.body.kc_crd_lmt;
   var mem_cat =req.body.cust_category;
   var kcc_date =req.body.kcc_crd_dt;
   var sanction_amt =req.body.sacn_crd_lmt;
   var kcc_credit_lmt_id=req.body.kcc_credit_id_ed


   console.log('loan_type',loan_type);
   console.log('mem_cat',mem_cat);
   console.log('kcc_date',kcc_date);
   console.log('sanction_amt',sanction_amt);
   console.log('kcc_credit_lmt_id',kcc_credit_lmt_id);


pgdbconnect.query("update society_kcc_credit_limit_details set scl_ch_loan_type=$1,scl_ch_mem_category=$2,scl_d_sanctioned_date=$3,scl_n_sanctioned_amt=$4 where scl_n_credit_limit_id=$5",[loan_type,mem_cat,kcc_date,sanction_amt,kcc_credit_lmt_id],function(err,kccupres) {

   if (err)
   {
            console.error('Error with table query', err);
   }
   else{
   pgdbconnect.query("select * from society_kcc_credit_limit_details where scl_ch_del_flg=$1",['N'],function(err,kccres1){

      req.flash('success_msg', 'Record updated successfully');
      res.locals.message=req.flash();
      res.render('societyModule/scty_KCC_Credit_Limit_Search',{

         kcclmt:kccres1.rows,
         moment:moment
         });
      });
   }
});
});



//kcc credid lmt view



router.post('/kcc_credit_lmt_view',function(req,res){
	console.log("within account search")

	var divtype="VIEW";
	console.log('divtype',divtype)
var kccid=req.body.kcccreditid2;
console.log('accccid',kccid);

	pgdbconnect.query("select * from society_kcc_credit_limit_details where scl_n_credit_limit_id=$1",[kccid],function(err,searchres){

var loan_type =searchres.rows[0].scl_ch_loan_type;
var mem_cat =searchres.rows[0].scl_ch_mem_category;
var kcc_date =searchres.rows[0].scl_d_sanctioned_date;
var sanction_amt =searchres.rows[0].scl_n_sanctioned_amt;
var kcc_credit_lmt_id=searchres.rows[0].scl_n_credit_limit_id;

res.render('societyModule/scty_KCC_Credit_Limit_Add',{

loan_type:loan_type,
mem_cat:mem_cat,
kcc_date:kcc_date,
sanction_amt:sanction_amt,
kcc_credit_lmt_id:kcc_credit_lmt_id,

pagetype:"VIEW",
moment:moment
});
   });
});

//kcc credit lmt


 
router.post('/kcc_credit_lmt_delete',function(req,res){

   var kcc_credit_id=req.body.tempkccid3;
   console.log('kcc_credit_id',kcc_credit_id)

pgdbconnect.query("UPDATE society_kcc_credit_limit_details SET scl_ch_del_flg='Y' WHERE scl_n_credit_limit_id=$1 ",[kcc_credit_id],function(err,upres2){

   if (err) throw err;
   console.log("kcc target UPDATED RESULT",upres2)

   pgdbconnect.query("select * from society_kcc_credit_limit_details where scl_ch_del_flg='N'",function(err,result){

   req.flash('success_msg', 'Record Deleted successfully');
   res.locals.message=req.flash();
   res.render('societyModule/scty_KCC_Credit_Limit_Search',{

      kcclmt:result.rows,
      moment:moment
   });
});
});
});


//kcc credit searcher


router.post('/scty_kcc_credit_lim_search',scty_kcc_credit_lim_search)
    function scty_kcc_credit_lim_search(req,res)
    {

		var loan_type=req.body.kc_crd_lmt;
      var mem_cat=req.body.cust_category;
      var sanction_date=req.body.kcc_crd_dt;



console.log('loan_type',loan_type);
console.log('mem_cat',mem_cat);
console.log('sanction',sanction_date);



if(loan_type!='' && mem_cat!='' && sanction_date!=''){

	var loan_type=req.body.kc_crd_lmt;
      var mem_cat=req.body.cust_category;
      var sanction_date=req.body.kcc_crd_dt;

}


else if(loan_type=='' && mem_cat!='' && sanction_date!=''){

   var loan_type=null;
   var mem_cat=req.body.cust_category;
   var sanction_date=req.body.kcc_crd_dt;
}

else if(loan_type!='' && mem_cat=='' && sanction_date!=''){

   var loan_type=req.body.kc_crd_lmt;
   var mem_cat=null;
   var sanction_date=req.body.kcc_crd_dt;
}

else if(loan_type!='' && mem_cat!='' && sanction_date==''){

   var loan_type=req.body.kc_crd_lmt;
   var mem_cat=req.body.cust_category;
   var sanction_date=null;
}





pgdbconnect.query("select * from society_kcc_credit_limit_details where ((scl_ch_loan_type=$1 or scl_ch_mem_category=$2 or scl_d_sanctioned_date=$3 ) and scl_ch_del_flg='N')",[loan_type,mem_cat,sanction_date],function(err,upres2){

	console.log('search result is',upres2)

	if(err)
	{
	   console.log("Error with table query",err);
	}

	else
	{
	
			res.render('societyModule/scty_KCC_Credit_Limit_Search',{

            kcclmt:upres2.rows,
            moment:moment
			});
		
	}
});
	}

/* Society- KCC Credit Limits- END*/
























//Holiday List Add screen
router.get('/scty_holiday_lst_add',function(req,res){
    res.render('societyModule/scty_Holiday_Lst_Add');
 });

 //Holiday List Search screen
 router.get('/scty_holiday_lst_search',function(req,res){
    res.render('societyModule/scty_Holiday_Lst_Search');
 });

 //Department Add screen
 router.get('/scty_dept_add',function(req,res){
    res.render('societyModule/scty_Department_Add');
 });

 //Department Search screen
 router.get('/scty_dept_search',function(req,res){
    res.render('societyModule/scty_Department_Search');
 });

 //Bank Add screen
 router.get('/scty_bank_add',function(req,res){
    res.render('societyModule/scty_Bank_Add');
 });

 //Bank Search screen
 router.get('/scty_bank_search',function(req,res){
    res.render('societyModule/scty_Bank_Search');
 });

 //Branch Add screen
 router.get('/scty_branch_add',function(req,res){
    res.render('societyModule/scty_Branch_Add');
 });

 //Branch Search screen
 router.get('/scty_branch_search',function(req,res){
    res.render('societyModule/scty_Branch_Search');
 });

 //ChequeBook Details Add screen
 router.get('/scty_chq_book_det_add',function(req,res){
    res.render('societyModule/scty_ChequeBook_Details_Add');
 });

 //ChequeBook Details Search screen
 router.get('/scty_chq_book_det_search',function(req,res){
    res.render('societyModule/scty_ChequeBook_Details_Search');
 });

 //Account Scheme  Add screen
 router.get('/scty_acc_schm_add',function(req,res){
    res.render('societyModule/scty_Account_Scheme_Add');
 });

 //Account Scheme  Search screen
 router.get('/scty_acc_schm_search',function(req,res){
    res.render('societyModule/scty_Account_Scheme_Search');
 });

 //Account Type  Add screen
 router.get('/scty_acc_typ_add',function(req,res){
    res.render('societyModule/scty_Account_Type_Add');
 });

 //Account Type Search screen
 router.get('/scty_acc_typ_search',function(req,res){
    res.render('societyModule/scty_Account_Type_Search');
 });

 //Insurance Add screen
 router.get('/scty_insurance_add',function(req,res){
    res.render('societyModule/scty_Insurance_Add');
 });

 //Insurance Search screen
 router.get('/scty_insurance_search',function(req,res){
    res.render('societyModule/scty_Insurance_Search');
 });

 
 

 module.exports=router;