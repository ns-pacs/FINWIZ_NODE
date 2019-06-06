var express = require('express');
var router = express.Router();
var pgdbconnect=require('../database/pgdbconnect');
var moment=require('moment');

/* Society- Holiday List- START*/
//Holiday List Add screen
router.get('/scty_holiday_lst_add',function(req,res){
   var divtype=req.query.key;
   res.render('societyModule/scty_Holiday_Lst_Add',{
       
      pagetype:divtype
  });
});


router.get('/holi_lst',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);
   res.render('societyModule/scty_Holiday_Lst_Add',{
       
       pagetype:divtype
   });
});


///////////holiday list edit records//////
router.get('/holi_lst_edit',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);

  
       pgdbconnect.query("select * from society_holiday_list",function(err,holires){
   
           if(err) throw err;
        
           
   res.render('societyModule/scty_Holiday_Lst_Add',{
       pagetype:divtype,
       listdetails:holires.rows

   });
});
});




 //Holiday List Search screen
 router.get('/scty_holiday_lst_search',function(req,res){
   pgdbconnect.query("select * from society_holiday_list where shl_ch_del_flg='N'",function(err,holires){
    
      if(err) throw err;
    res.render('societyModule/scty_Holiday_Lst_Search',{
      listdetails:holires.rows,
      moment:moment
   });
 });
 });

///search particular record

     router.post('/search_particular_rec', function(req,res){
//console.log("search particular record");

var holi_from_date = req.body.holi_from_date;
var holi_to_date = req.body.holi_to_date;
var comp_from_date = req.body.comp_from_date;
var comp_to_date = req.body.comp_to_date;
//console.log("holiday searchhhhhhhh",holi_from_date, holi_to_date, comp_from_date,comp_to_date);

if(holi_from_date!='' && holi_to_date!='' && comp_from_date!=''  && comp_to_date!=''){
 holi_from_date = req.body.holi_from_date;
 holi_to_date = req.body.holi_to_date;
 comp_from_date = req.body.comp_from_date;
 comp_to_date = req.body.comp_to_date;
}

else if(holi_from_date!='' && holi_to_date!='' && comp_from_date==''  && comp_to_date==''){
 holi_from_date = req.body.holi_from_date;
 holi_to_date = req.body.holi_to_date;
 comp_from_date = null;
 comp_to_date = null;
}

else if(holi_from_date=='' && holi_to_date=='' && comp_from_date!=''  && comp_to_date!=''){
    console.log("when first two dates are empty")
 holi_from_date = null;
 holi_to_date = null;
 comp_from_date = req.body.comp_from_date;
 comp_to_date = req.body.comp_to_date;
}

pgdbconnect.query("select * from society_holiday_list where (shl_d_holiday_from_date=$1 and shl_d_holiday_to_date=$2) or (shl_d_compensation_from_date=$3 and shl_d_compensation_to_date=$4)  and shl_ch_del_flg='N'",[holi_from_date, holi_to_date, comp_from_date,comp_to_date],function(err,searchres) 
{
    if(err) throw err;
   // console.log("searchres is", searchres.rows);
   pgdbconnect.query("select * from society_holiday_list where shl_ch_del_flg='N'",function(err,holireslt){
    
    if(err) throw err;


    res.render('societyModule/scty_Holiday_Lst_Search',{

        listdetails:searchres.rows,
        holidaysrch:holireslt.rows,
        moment:moment
    
    });
});
 });
});



///add holiday records//

router.post('/holiday_details',function(req,res){
   console.log("Hii");
var divtype='ADD';

var holi_from_date_add = req.body.holi_from_date_add;                                     
var holi_to_date_add = req.body.holi_to_date_add;                                
var comp_from_date_add = req.body.comp_from_date_add;                                
var comp_to_date_add = req.body.comp_to_date_add;                                
var Iscomp_holi = req.body.Iscomp_holi;                                
var purp = req.body.purp;                                 
var holi_add = req.body.holi_add;                                 
var holiday_id;
pgdbconnect.query("select * from society_holiday_list",function(err,result) {
   if(result.rowCount==0){
      holiday_id='1'

console.log("Holiday List Details",holiday_id,holi_from_date_add,holi_to_date_add,comp_from_date_add,comp_to_date_add,Iscomp_holi,purp,holi_add);
pgdbconnect.query("insert into society_holiday_list ( shl_n_hldy_id,shl_d_holiday_from_date,shl_d_holiday_to_date,shl_d_compensation_from_date,shl_d_compensation_to_date,shl_ch_is_compensating_hldy,shl_ch_purpose,shl_ch_hldy_type,shl_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",[holiday_id,holi_from_date_add,holi_to_date_add,comp_from_date_add,comp_to_date_add,Iscomp_holi,purp,holi_add,'N'],function(err,loginres){
   if(err) throw err;
   console.log("Result of Holiday list Details");

});

   //flash messege
       req.flash('success_msg', 'Data inserted successfully');
      res.locals.message=req.flash();
      
res.render('societyModule/scty_Holiday_Lst_Add',{
   pagetype:divtype

});
   }
else{

   
   pgdbconnect.query("select max(shl_n_hldy_id) from society_holiday_list",function(err,result) {
      // console.log("max value check",result)
     //  console.log("max value check",result.rows[0].max)
     
     holiday_id=parseInt(result.rows[0].max)+1;
     //  console.log("when more rows exxxists",bank_id)



     console.log("Holiday List Details",holiday_id,holi_from_date_add,holi_to_date_add,comp_from_date_add,comp_to_date_add,Iscomp_holi,purp,holi_add);
pgdbconnect.query("insert into society_holiday_list ( shl_n_hldy_id,shl_d_holiday_from_date,shl_d_holiday_to_date,shl_d_compensation_from_date,shl_d_compensation_to_date,shl_ch_is_compensating_hldy,shl_ch_purpose,shl_ch_hldy_type,shl_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)",[holiday_id,holi_from_date_add,holi_to_date_add,comp_from_date_add,comp_to_date_add,Iscomp_holi,purp,holi_add,'N'],function(err,loginres){
      if(err) throw err;
        console.log("Result of Holiday list Details");
     
     });
     
        //flash messege
            req.flash('success_msg', 'Data inserted successfully');
           res.locals.message=req.flash();
           
     res.render('societyModule/scty_Holiday_Lst_Add',{
        pagetype:divtype
     

     });
   });
}
});
});

///edit holiday list records///

router.post('/holiday_edit', function(req,res){
   var divtype="EDIT";
   console.log("DIV TYPE",divtype);

   
   var edit_list= req.body.templistid;
 console.log("cheque id to edit",edit_list)

 pgdbconnect.query("select * from society_holiday_list where shl_n_hldy_id=$1 order by shl_n_hldy_id",[edit_list],function(err,searchres)
  {
   if(err) throw err;
   console.log("Editing Details",searchres);

   var holiday_edit_id =  searchres.rows[0].shl_n_hldy_id;
   var holi_from_date_ed = searchres.rows[0].shl_d_holiday_from_date;
   var holi_to_date_ed = searchres.rows[0].shl_d_holiday_to_date;
   var comp_from_date_ed = searchres.rows[0].shl_d_compensation_from_date;
   var comp_to_date_ed = searchres.rows[0].shl_d_compensation_to_date;
   var Iscomp_holi_ed=searchres.rows[0].shl_ch_is_compensating_hldy;
   var purp_ed=searchres.rows[0].shl_ch_purpose;
   var holi_vw=searchres.rows[0].shl_ch_hldy_type;

   res.render('societyModule/scty_Holiday_Lst_Add',{
      holi_from_date_ed:holi_from_date_ed,
      holi_to_date_ed:holi_to_date_ed,
      comp_from_date_ed:comp_from_date_ed,
      comp_to_date_ed:comp_to_date_ed,
      Iscomp_holi_ed:Iscomp_holi_ed,
      purp_ed:purp_ed,
       pagetype:divtype,
       holi_vw:holi_vw,
       holiday_edit_id:holiday_edit_id,
       moment:moment

   });
});
});

////update holiday records/////

router.post('/holiday_list_update', function(req,res){

   console.log("Updating");

   var holi_from_date_ed= req.body.holi_from_date_ed;
   var holi_to_date_ed= req.body.holi_to_date_ed;
   var comp_from_date_ed= req.body.comp_from_date_ed;
   var comp_to_date_ed=req.body.comp_to_date_ed;
   var Iscomp_holi_ed= req.body.Iscomp_holi_ed;
   var purp_ed=req.body.purp_ed;
   var holi_vw=req.body.holi_vw;
   var edit_list=req.body.edit_list;
  
     pgdbconnect.query("update society_holiday_list set shl_d_holiday_from_date=$1,shl_d_holiday_to_date=$2, shl_ch_is_compensating_hldy=$3,shl_ch_purpose=$4, shl_d_compensation_from_date=$5,shl_d_compensation_to_date=$6,shl_ch_hldy_type=$7 where shl_n_hldy_id=$8",[holi_from_date_ed,holi_to_date_ed,Iscomp_holi_ed,purp_ed,comp_from_date_ed,comp_to_date_ed,holi_vw,edit_list],function(err,rsl)
      {
       if(err) throw err;
   
       pgdbconnect.query("select * from society_holiday_list where shl_ch_del_flg=$1 order by shl_n_hldy_id",['N'], function(err,resl){

           //flash messege
           req.flash('success_msg', 'Data updated successfully');
           res.locals.message=req.flash();
   
   
           res.render('societyModule/scty_Holiday_Lst_Search',{
            listdetails:resl.rows,
           holidetails:rsl.rows,
           moment:moment
    
       });
       });
   });
   });




   //Holiday list View//
router.post('/holiday_list_view', function(req,res){

   var divtype="VIEW";
   console.log("DIV TYPE",divtype);

   var view_holiday_id= req.body.templistidvw;
 console.log("acc id to view",view_holiday_id)
 pgdbconnect.query("select * from society_holiday_list where shl_n_hldy_id=$1 order by shl_n_hldy_id",[view_holiday_id],function(err,rsl)
 {
   if(err) throw err;
   var holi_from_date_vw = rsl.rows[0].shl_d_holiday_from_date;
   var holi_to_date_vw = rsl.rows[0].shl_d_holiday_to_date;
   var comp_from_date_vw = rsl.rows[0].shl_d_compensation_from_date;
   var comp_to_date_vw = rsl.rows[0].shl_d_compensation_to_date;
   var Iscomp_holi_vw=rsl.rows[0].shl_ch_is_compensating_hldy;
   var purp_vw=rsl.rows[0].shl_ch_purpose;
   var holi_vw=rsl.rows[0].shl_ch_hldy_type;
   var view_holiday=rsl.rows[0].shl_n_hldy_id;


   
   
           res.render('societyModule/scty_Holiday_Lst_Add',{
            holi_from_date_vw:holi_from_date_vw,
            holi_to_date_vw:holi_to_date_vw,
            comp_from_date_vw:comp_from_date_vw,
            comp_to_date_vw:comp_to_date_vw,
            Iscomp_holi_vw:Iscomp_holi_vw,
            purp_vw:purp_vw,
            holi_vw:holi_vw,
            pagetype:divtype,
            view_holiday:view_holiday,
            moment:moment
    
       });
       });
   });



   //delete holiday details
 router.post('/delete_holiday_row',function(req,res){

   var delid= req.body.tempholidaydelid1;
   console.log("id to delete",delid)
   pgdbconnect.query("update society_holiday_list set shl_ch_del_flg=$1 where shl_n_hldy_id=$2",['Y',delid],function(err,delres){

       console.log("deleted result",delres);
       pgdbconnect.query("select * from society_holiday_list where shl_ch_del_flg=$1 order by shl_n_hldy_id",['N'],function(err,searchres){
          
      
   req.flash('success_msg', 'Record Deleted successfully');
   res.locals.message=req.flash();
       res.render('societyModule/scty_Holiday_Lst_Search',{
      
           listdetails:searchres.rows,
           moment:moment
       });    

   });
});
});

/* Society- Holiday List- END*/

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


/* Society-Account Scheme- START*/
 //Account Scheme  Add screen
 router.get('/scty_acc_schm_add',function(req,res){
   var divtype=req.query.key;
    res.render('societyModule/scty_Account_Scheme_Add',{
      pagetype:divtype
    });
 });

 router.get('/acc_scheme',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);
   res.render('societyModule/scty_Account_Scheme_Add',{
       pagetype:divtype
   });
});

///////////account scheme edit records//////
router.get('/acc_scheme_edit',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);

  
       pgdbconnect.query("select * from society_account_scheme",function(err,schres){
   
           if(err) throw err;
        
           
   res.render('societyModule/scty_Account_Scheme_Add',{
       pagetype:divtype,
       schemedetails:schres.rows

   });
});
});

 //Account Scheme  Search screen
 router.get('/scty_acc_schm_search',function(req,res){
   pgdbconnect.query("select * from society_account_scheme where sas_ch_del_flg='N'",function(err,scheres){
      if(err) throw err;
    res.render('societyModule/scty_Account_Scheme_Search',{
      schemedetails:scheres.rows
    });
   });
 });


//search particular record in account scheme search page//

router.post('/search_particular_scheme_rec', function(req,res){
   console.log("search particular record");
   
   var scty_acc_schm_code = req.body.scty_acc_schm_code;
   var scty_acc_schm_schm = req.body.scty_acc_schm_schm;
   console.log(scty_acc_schm_code, scty_acc_schm_schm);
   
   pgdbconnect.query("select * from society_account_scheme where ((sas_ch_scheme_code=$1 or sas_ch_scheme_type=$2) and (sas_ch_del_flg='N'))",[scty_acc_schm_code, scty_acc_schm_schm],function(err,searchres) 
   {
       if(err) throw err;
      // console.log("searchres is", searchres.rows);
      pgdbconnect.query("select * from society_account_scheme where sas_ch_del_flg='N'",function(err,schreslt){
       
       if(err) throw err;
   
   
       res.render('societyModule/scty_Account_Scheme_Search',{
   
         schemedetails:searchres.rows,
           schemesrch:schreslt.rows
       
       });
   });
    });
   });

///add account sheme records//

router.post('/acc_scheme_details',function(req,res){
   console.log("Hii");
var divtype='ADD';

var scty_acc_schm_code_add = req.body.scty_acc_schm_code_add;                                     
var scty_acc_schm_schm_add = req.body.scty_acc_schm_schm_add;                                                                                                
var scheme_id;
pgdbconnect.query("select * from society_account_scheme order by sas_n_scheme_id",function(err,result) {
   if(result.rowCount==0){
      scheme_id='1'

console.log("Account Scheme Details",scheme_id,scty_acc_schm_code_add,scty_acc_schm_schm_add);
pgdbconnect.query("insert into society_account_scheme ( sas_n_scheme_id,sas_ch_scheme_code,sas_ch_scheme_type,sas_ch_del_flg) values ($1,$2,$3,$4)",[scheme_id,scty_acc_schm_code_add,scty_acc_schm_schm_add,'N'],function(err,loginres){
   if(err) throw err;
   console.log("Result of Account Details");

});

   //flash messege
       req.flash('success_msg', 'Data inserted successfully');
      res.locals.message=req.flash();
      
res.render('societyModule/scty_Account_Scheme_Add',{
   pagetype:divtype

});
   }
else{

   
   pgdbconnect.query("select max(sas_n_scheme_id) from society_account_scheme",function(err,result) {
      // console.log("max value check",result)
     //  console.log("max value check",result.rows[0].max)
     
     scheme_id=parseInt(result.rows[0].max)+1;
     //  console.log("when more rows exxxists",bank_id)



     console.log("Account Scheme Details",scheme_id,scty_acc_schm_code_add,scty_acc_schm_schm_add);
pgdbconnect.query("insert into society_account_scheme ( sas_n_scheme_id,sas_ch_scheme_code,sas_ch_scheme_type,sas_ch_del_flg) values ($1,$2,$3,$4)",[scheme_id,scty_acc_schm_code_add,scty_acc_schm_schm_add,'N'],function(err,loginres){
   if(err) throw err;
   console.log("Result of Account Details");
     
     });
     
        //flash messege
            req.flash('success_msg', 'Data inserted successfully');
           res.locals.message=req.flash();
           
     res.render('societyModule/scty_Account_Scheme_Add',{
        pagetype:divtype
     

     });
   });
}
});
});

///edit account scheme records///

router.post('/scheme_edit', function(req,res){
   var divtype="EDIT";
   console.log("DIV TYPE",divtype);

   
   var sch_edit= req.body.tempschided;
 console.log("acc id to edit",sch_edit)

 pgdbconnect.query("select * from society_account_scheme where sas_n_scheme_id=$1 order by sas_n_scheme_id",[sch_edit],function(err,searchres)
  {
   if(err) throw err;
   console.log("Editing Details",searchres);

   var scty_scheme_id =  searchres.rows[0].sas_n_scheme_id;
   var scty_acc_schm_code_ed = searchres.rows[0].sas_ch_scheme_code;
   var scty_acc_schm_schm_ed = searchres.rows[0].sas_ch_scheme_type;
   res.render('societyModule/scty_Account_Scheme_Add',{
      scty_scheme_id:scty_scheme_id,
      scty_acc_schm_code_ed:scty_acc_schm_code_ed,
      scty_acc_schm_schm_ed:scty_acc_schm_schm_ed,
       pagetype:divtype
   });
});
});


////update account scheme records/////

router.post('/acc_scheme_update', function(req,res){

   console.log("Updating");

   var scty_acc_schm_code_ed= req.body.scty_acc_schm_code_ed;
   var scty_acc_schm_schm_ed= req.body.scty_acc_schm_schm_ed;
   var scty_scheme_id=req.body.scty_scheme_id;
  
     pgdbconnect.query("update society_account_scheme set sas_ch_scheme_code=$1,sas_ch_scheme_type=$2 where sas_n_scheme_id=$3",[scty_acc_schm_code_ed,scty_acc_schm_schm_ed,scty_scheme_id],function(err,rsl)
      {
       if(err) throw err;
   
       pgdbconnect.query("select * from society_account_scheme where sas_ch_del_flg=$1 order by sas_n_scheme_id",['N'], function(err,resl){

           //flash messege
           req.flash('success_msg', 'Data updated successfully');
           res.locals.message=req.flash();
   
   
           res.render('societyModule/scty_Account_Scheme_Search',{
            schemedetails:resl.rows,
           accschdetails:rsl.rows
    
       });
       });
   });
   });


 //Account scheme View//
 router.post('/view_sheme_data', function(req,res){

   var divtype="VIEW";
   console.log("DIV TYPEeee",divtype);

   var view_sch_id= req.body.tempschidvw;
 console.log("acc id to view",view_sch_id)
 pgdbconnect.query("select * from society_account_scheme where sas_n_scheme_id=$1 order by sas_n_scheme_id",[view_sch_id],function(err,searchres)
 {
   if(err) throw err;
   var scty_scheme_id_vw =  searchres.rows[0].sas_n_scheme_id;
   var scty_acc_schm_code_vw = searchres.rows[0].sas_ch_scheme_code;
   var scty_acc_schm_schm_vw = searchres.rows[0].sas_ch_scheme_type;

   
           res.render('societyModule/scty_Account_Scheme_Add',{
            scty_scheme_id_vw:scty_scheme_id_vw,
            scty_acc_schm_code_vw:scty_acc_schm_code_vw,
            scty_acc_schm_schm_vw:scty_acc_schm_schm_vw,
            pagetype:'VIEW'
    
       });
       });
   });



   //delete account scheme details
 router.post('/delete_scheme_data',function(req,res){

   var delid= req.body.tempschiddel;
   console.log("id to delete",delid)
   pgdbconnect.query("update society_account_scheme set sas_ch_del_flg=$1 where sas_n_scheme_id=$2",['Y',delid],function(err,delres){

       console.log("deleted result",delres);
       pgdbconnect.query("select * from society_account_scheme where sas_ch_del_flg=$1 order by sas_n_scheme_id",['N'],function(err,searchres){
          
      
   req.flash('success_msg', 'Record Deleted successfully');
   res.locals.message=req.flash();

       res.render('societyModule/scty_Account_Scheme_Search',{
      
           schemedetails:searchres.rows
       });    

   });
});
});



/////////////////////////////END//////////////

/* Society-Account Scheme- END*/

/* Society-Account TYPE- START*/
////////////////////////////////ACC TYPE START/////////////////////////////////
 //Account Type  Add screen
 router.get('/scty_acc_typ_add',function(req,res){
   var divtype=req.query.key;
    res.render('societyModule/scty_Account_Type_Add',{
       pagetype:divtype
    });
 });

 router.get('/acc_type',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);
   res.render('societyModule/scty_Account_Type_Add',{
       
       pagetype:divtype
   });
});

///////////account type edit records//////
router.get('/acc_type_edit',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);

  
       pgdbconnect.query("select * from society_account_type",function(err,accres){
   
           if(err) throw err;
        
           
   res.render('societyModule/scty_Account_Type_Add',{
       pagetype:divtype,
       accdetails:accres.rows

   });
});
});

 //Account Type Search screen
 router.get('/scty_acc_typ_search',function(req,res){
   pgdbconnect.query("select * from society_account_type where sat_ch_del_flg='N'",function(err,accres){
      if(err) throw err;
    res.render('societyModule/scty_Account_Type_Search',{
      accdetails:accres.rows
    });
 });
});
 
//search particular record in account type search page//

router.post('/search_particular_acc_rec', function(req,res){
   console.log("search particular record");
   
   var scty_acc_typ_srch = req.body.scty_acc_typ_srch;
   var scty_acc_typ_shrt_nme_srch = req.body.scty_acc_typ_shrt_nme_srch;
   var scty_acc_typ_desc_srch = req.body.scty_acc_typ_desc_srch;
   console.log(scty_acc_typ_srch, scty_acc_typ_shrt_nme_srch, scty_acc_typ_desc_srch);
   
   pgdbconnect.query("select * from society_account_type where ((sat_ch_acct_type=$1 or sat_ch_short_name=$2 or sat_ch_description=$3 ) and (sat_ch_del_flg='N'))",[scty_acc_typ_srch, scty_acc_typ_shrt_nme_srch, scty_acc_typ_desc_srch],function(err,searchres) 
   {
       if(err) throw err;
      // console.log("searchres is", searchres.rows);
      pgdbconnect.query("select * from society_account_type where sat_ch_del_flg='N'",function(err,accreslt){
       
       if(err) throw err;
   
   
       res.render('societyModule/scty_Account_Type_Search',{
   
           accdetails:searchres.rows,
           accsrch:accreslt.rows
       
       });
   });
    });
   });

///add account records//

router.post('/acc_details',function(req,res){
   console.log("Hii");
var divtype='ADD';

var scty_acc_typ = req.body.scty_acc_typ;                                     
var scty_acc_typ_shrt_nme_add = req.body.scty_acc_typ_shrt_nme_add;                                
var scty_acc_typ_desc_add = req.body.scty_acc_typ_desc_add;                                                                 
var account_id;
pgdbconnect.query("select * from society_account_type order by sat_n_account_id",function(err,result) {
   if(result.rowCount==0){
      account_id='1'

console.log("Account Details",account_id,scty_acc_typ,scty_acc_typ_shrt_nme_add,scty_acc_typ_desc_add);
pgdbconnect.query("insert into society_account_type ( sat_n_account_id,sat_ch_acct_type,sat_ch_short_name, sat_ch_description,sat_ch_del_flg) values ($1,$2,$3,$4,$5)",[account_id,scty_acc_typ,scty_acc_typ_shrt_nme_add,scty_acc_typ_desc_add,'N'],function(err,loginres){
   if(err) throw err;
   console.log("Result of Account Details");

});

   //flash messege
       req.flash('success_msg', 'Data inserted successfully');
      res.locals.message=req.flash();
      
res.render('societyModule/scty_Account_Type_Add',{
   pagetype:divtype

});
   }
else{

   
   pgdbconnect.query("select max(sat_n_account_id) from society_account_type",function(err,result) {
      // console.log("max value check",result)
     //  console.log("max value check",result.rows[0].max)
     
     account_id=parseInt(result.rows[0].max)+1;
     //  console.log("when more rows exxxists",bank_id)



     console.log("Account Details",account_id,scty_acc_typ,scty_acc_typ_shrt_nme_add,scty_acc_typ_desc_add);
     pgdbconnect.query("insert into society_account_type ( sat_n_account_id,sat_ch_acct_type,sat_ch_short_name, sat_ch_description,sat_ch_del_flg) values ($1,$2,$3,$4,$5)",[account_id,scty_acc_typ,scty_acc_typ_shrt_nme_add,scty_acc_typ_desc_add,'N'],function(err,loginres){
      if(err) throw err;
        console.log("Result of Account Details");
     
     });
     
        //flash messege
            req.flash('success_msg', 'Data inserted successfully');
           res.locals.message=req.flash();
           
     res.render('societyModule/scty_Account_Type_Add',{
        pagetype:divtype
     

     });
   });
}
});
});



///edit account type records///

router.post('/account_edit', function(req,res){
   var divtype="EDIT";
   console.log("DIV TYPE",divtype);

   
   var acc_edit= req.body.tempaccided;
 console.log("acc id to edit",acc_edit)

 pgdbconnect.query("select * from society_account_type where sat_n_account_id=$1 order by sat_n_account_id",[acc_edit],function(err,searchres)
  {
   if(err) throw err;
   console.log("Editing Details",searchres);

   var scty_acc_id =  searchres.rows[0].sat_n_account_id;
   var scty_acc_typ_ed = searchres.rows[0].sat_ch_acct_type;
   var scty_acc_typ_shrt_nme_ed = searchres.rows[0].sat_ch_short_name;
   var scty_acc_typ_desc_ed = searchres.rows[0].sat_ch_description;

   res.render('societyModule/scty_Account_Type_Add',{
      scty_acc_id:scty_acc_id,
      scty_acc_typ_ed:scty_acc_typ_ed,
      scty_acc_typ_shrt_nme_ed:scty_acc_typ_shrt_nme_ed,
      scty_acc_typ_desc_ed:scty_acc_typ_desc_ed,
       pagetype:divtype
   });
});
});

////update account type records/////

router.post('/acc_tye_update', function(req,res){

   console.log("Updating");

   var scty_acc_typ_ed= req.body.scty_acc_typ_ed;
   var scty_acc_typ_shrt_nme_ed= req.body.scty_acc_typ_shrt_nme_ed;
   var scty_acc_typ_desc_ed= req.body.scty_acc_typ_desc_ed;
   var scty_acc_id=req.body.scty_acc_id;
  
     pgdbconnect.query("update society_account_type set sat_ch_acct_type=$1,sat_ch_short_name=$2, sat_ch_description=$3 where sat_n_account_id=$4",[scty_acc_typ_ed,scty_acc_typ_shrt_nme_ed,scty_acc_typ_desc_ed,scty_acc_id],function(err,rsl)
      {
       if(err) throw err;
   
       pgdbconnect.query("select * from society_account_type where sat_ch_del_flg=$1 order by sat_n_account_id",['N'], function(err,resl){

           //flash messege
           req.flash('success_msg', 'Data updated successfully');
           res.locals.message=req.flash();
   
   
           res.render('societyModule/scty_Account_Type_Search',{
            accdetails:resl.rows,
           typedetails:rsl.rows
    
       });
       });
   });
   });




   //Account Type View//
router.post('/view_acc_data', function(req,res){

   var divtype="VIEW";
   console.log("DIV TYPEeee",divtype);

   var view_acc_id= req.body.tempaccidvw;
 console.log("acc id to view",view_acc_id)
 pgdbconnect.query("select * from society_account_type where sat_n_account_id=$1 order by sat_n_account_id",[view_acc_id],function(err,rsl)
 {
   if(err) throw err;
   var scty_acc_id_vw =  rsl.rows[0].sat_n_account_id;
   var scty_acc_typ_vw = rsl.rows[0].sat_ch_acct_type;
   var scty_acc_typ_shrt_nme_vw= rsl.rows[0].sat_ch_short_name;
   var scty_acc_typ_desc_vw = rsl.rows[0].sat_ch_description;

   
           res.render('societyModule/scty_Account_Type_Add',{
            scty_acc_id_vw:scty_acc_id_vw,
            scty_acc_typ_vw:scty_acc_typ_vw,
            scty_acc_typ_shrt_nme_vw:scty_acc_typ_shrt_nme_vw,
            scty_acc_typ_desc_vw:scty_acc_typ_desc_vw,
            pagetype:'VIEW'
    
       });
       });
   });



   //delete Account Type details
 router.post('/delete_acc_data',function(req,res){

   var delid= req.body.tempacciddel;
   console.log("id to delete",delid)
   pgdbconnect.query("update society_account_type set sat_ch_del_flg=$1 where sat_n_account_id=$2",['Y',delid],function(err,delres){

       console.log("deleted result",delres);
       pgdbconnect.query("select * from society_account_type where sat_ch_del_flg=$1 order by sat_n_account_id",['N'],function(err,searchres){
          
      
   req.flash('success_msg', 'Record Deleted successfully');
   res.locals.message=req.flash();

       res.render('societyModule/scty_Account_Type_Search',{
      
           accdetails:searchres.rows
       });    

   });
});
});

/////////////////////////////END//////////////
/* Society-Account TYPE- END*/



 //Insurance Add screen
 router.get('/scty_insurance_add',function(req,res){
    res.render('societyModule/scty_Insurance_Add');
 });

 //Insurance Search screen
 router.get('/scty_insurance_search',function(req,res){
    res.render('societyModule/scty_Insurance_Search');
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
 
 

 module.exports=router;