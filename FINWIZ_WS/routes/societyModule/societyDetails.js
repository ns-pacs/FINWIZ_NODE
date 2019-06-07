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

/*Society-Bank-START*/
/////////////////////////////////////////////////////////////////

 //Bank Add screen
 router.get('/scty_bank_add',function(req,res){
   var divtype=req.query.key;

   console.log("DIV TYPE",divtype);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
 {
     if(err) throw err;

     pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
     {
         if(err) throw err;

         pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
         {
             if(err) throw err;

               
             pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) 
             {
               if(err) throw err;

    res.render('societyModule/scty_Bank_Add',{
      cities:result1.rows,
      states:result2.rows,
      countries:result3.rows,
      bank:reslt.rows,
      pagetype:divtype
 });
});
         });
      });
   });
});



///////////////////////////////////////////////////////////

router.post('/society_bank_add',function(req,res){

   var divtype="ADD";

 console.log("DIV TYPE",divtype);

 var soc_add_bnk_code               = req.body.soc_add_bnk_code;
 var soc_add_bnk_name               = req.body.soc_add_bnk_name;
 var soc_bnk_address_address_line   = req.body.soc_bnk_address_address_line;
 var soc_bnk_address_lndmark        = req.body.soc_bnk_address_lndmark;
 var soc_bnk_address_village        = req.body.soc_bnk_address_village;
 var soc_bnk_address_pncht_mdl      = req.body.soc_bnk_address_pncht_mdl;
 var soc_bnk_address_city           = req.body.soc_bnk_address_city;
 var soc_bnk_address_district       = req.body.soc_bnk_address_district;
 var soc_bnk_address_state          = req.body.soc_bnk_address_state;
 var soc_bnk_address_country        = req.body.soc_bnk_address_country;
 var soc_bnk_address_postal_code    = req.body.soc_bnk_address_postal_code;
 var soc_bnk_address_phnum1         = req.body.soc_bnk_address_phnum1;
 var soc_bnk_address_phnum2         = req.body.soc_bnk_address_phnum2;
 var soc_bnk_address_emial          = req.body.soc_bnk_address_emial;
 var soc_bnk_address_url            = req.body.soc_bnk_address_url;
 var soc_bnk_address_latitude       = req.body.soc_bnk_address_latitude;
 var soc_bnk_address_Longitude      = req.body.soc_bnk_address_Longitude;
 var soc_bnk_address_key_con_per1   = req.body.soc_bnk_address_key_con_per1;
 var soc_bnk_name1                  = req.body.soc_bnk_name1;
 var soc_bnk_address_key_con_per2   = req.body.soc_bnk_address_key_con_per2;
 var soc_bnk_name2                  = req.body.soc_bnk_name2;
 var societybank_id;

 pgdbconnect.query("select * from society_bank ",function(err,result) {
   if(result.rowCount==0){
       societybank_id=1;
 
 console.log("Result of societybank1",soc_add_bnk_code,soc_add_bnk_name,soc_bnk_address_address_line,soc_bnk_address_lndmark,soc_bnk_address_village,soc_bnk_address_pncht_mdl,soc_bnk_address_city,soc_bnk_address_district,soc_bnk_address_state,soc_bnk_address_country,soc_bnk_address_postal_code,soc_bnk_address_phnum1,soc_bnk_address_phnum2,soc_bnk_address_emial,soc_bnk_address_url,soc_bnk_address_latitude,soc_bnk_address_Longitude,soc_bnk_address_key_con_per1,soc_bnk_name1,soc_bnk_address_key_con_per2,soc_bnk_name2);


 pgdbconnect.query("insert into society_bank ( sb_n_id,sb_ch_bank_code, sb_ch_bank_name, sb_ch_addr_line, sb_ch_land_mark, sb_ch_village,sb_ch_panchayat_mandal, sb_ch_city, sb_ch_district,  sb_ch_state, sb_ch_country, sb_n_postal_code, sb_n_phone_num1, sb_n_phone_num2, sb_ch_email_1, sb_ch_url, sb_ch_latitude, sb_ch_longitude, sb_ch_key_contact_person1, sb_ch_key_cp_name1,sb_ch_key_contact_person2,sb_ch_key_cp_name2,sb_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)",[ societybank_id,soc_add_bnk_code,soc_add_bnk_name,soc_bnk_address_address_line,soc_bnk_address_lndmark,soc_bnk_address_village,soc_bnk_address_pncht_mdl,soc_bnk_address_city,soc_bnk_address_district,soc_bnk_address_state,soc_bnk_address_country,soc_bnk_address_postal_code,soc_bnk_address_phnum1,soc_bnk_address_phnum2,soc_bnk_address_emial,soc_bnk_address_url,soc_bnk_address_latitude,soc_bnk_address_Longitude,soc_bnk_address_key_con_per1,soc_bnk_name1,soc_bnk_address_key_con_per2,soc_bnk_name2,'N'],function(err,loginres){
 if(err) throw err;
 console.log("Result of Society Bank1 ",loginres);
 });

 pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
 {
     if(err) throw err;

     pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
     {
         if(err) throw err;

         pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
         {
             if(err) throw err;

               
             pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) 
             {
               if(err) throw err;
             //console.log("Bank code details is", reslt);

                 
 
req.flash('success_msg',"Society Bank Details Added succesfully");
res.locals.message=req.flash();

res.render('societyModule/scty_Bank_Add',{
  cities:result1.rows,
  states:result2.rows,
  countries:result3.rows,
  bank:reslt.rows,
  pagetype:divtype
             });
          });
       });
    });
  });
}
else{

   pgdbconnect.query("select max(sb_n_id) from society_bank",function(err,result) {
      console.log("max value check",result)
      console.log("max value check",result.rows[0].max)
     
     societybank_id=parseInt(result.rows[0].max)+1;

     console.log("Result of societybank1",soc_bnk_address_address_line,soc_bnk_address_lndmark,soc_bnk_address_village,soc_bnk_address_pncht_mdl,soc_bnk_address_city,soc_bnk_address_district,soc_bnk_address_state,soc_bnk_address_country,soc_bnk_address_postal_code,soc_bnk_address_phnum1,soc_bnk_address_phnum2,soc_bnk_address_emial,soc_bnk_address_url,soc_bnk_address_latitude,soc_bnk_address_Longitude,soc_bnk_address_key_con_per1,soc_bnk_address_key_con_per2);


     pgdbconnect.query("insert into society_bank ( sb_n_id,sb_ch_bank_code, sb_ch_bank_name, sb_ch_addr_line, sb_ch_land_mark, sb_ch_village, sb_ch_panchayat_mandal, sb_ch_city, sb_ch_district, sb_ch_state, sb_ch_country, sb_n_postal_code, sb_n_phone_num1, sb_n_phone_num2, sb_ch_email_1, sb_ch_url, sb_ch_latitude, sb_ch_longitude, sb_ch_key_contact_person1, sb_ch_key_cp_name1,sb_ch_key_contact_person2,sb_ch_key_cp_name2,sb_ch_del_flg) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)",[ societybank_id,soc_add_bnk_code,soc_add_bnk_name,soc_bnk_address_address_line,soc_bnk_address_lndmark,soc_bnk_address_village,soc_bnk_address_pncht_mdl,soc_bnk_address_city,soc_bnk_address_district,soc_bnk_address_state,soc_bnk_address_country,soc_bnk_address_postal_code,soc_bnk_address_phnum1,soc_bnk_address_phnum2,soc_bnk_address_emial,soc_bnk_address_url,soc_bnk_address_latitude,soc_bnk_address_Longitude,soc_bnk_address_key_con_per1,soc_bnk_name1,soc_bnk_address_key_con_per2,soc_bnk_name2,'N'],function(err,loginres){
      if(err) throw err;
      console.log("Result of Society Bank1 ",loginres);
      });
     

 pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
 {
     if(err) throw err;

     pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
     {
         if(err) throw err;

         pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
         {
             if(err) throw err;

               
             pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) 
             {
               if(err) throw err;
             //console.log("Bank code details is", reslt);

                 
 
req.flash('success_msg',"Society Bank Details Added succesfully");
res.locals.message=req.flash();

res.render('societyModule/scty_Bank_Add',{
  cities:result1.rows,
  states:result2.rows,
  countries:result3.rows,
  bank:reslt.rows,
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

/////////////////////////////////////////////////////////////////

router.get('/scty_bank_edit',function(req,res){
   var divtype=req.query.key;

console.log("DIV TYPE",divtype);
    
pgdbconnect.query("select * from society_bank",function(err,societybnkres){
   if(err) throw err;

   pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
  
       pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
       {
           if(err) throw err;
  
           pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
           {
               if(err) throw err;
  
                 
               pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) 
               {
                 if(err) throw err;
  

   res.render('societyModule/scty_Bank_Add',{
      cities:result1.rows,
      states:result2.rows,
      countries:result3.rows,
      bank:reslt.rows,
      pagetype:divtype,
      societybankdetails:societybnkres.rows
   });
});
});
       });
      });
   });
});

////////////////////////////////////////////


router.post('/society_bank_edit_data_populate',function(req,res){
   console.log("populate fields");
   var divtype="EDIT";
 console.log("DIV TYPE on edit populate",divtype);

 var societybankid= req.body.tempsocbnkid;
 console.log("society bank id to edit",societybankid)

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

      pgdbconnect.query("select * from bank_code_details limit 50",function(err,result4) 
      {
        if(err) throw err;
      //console.log("Bank code details is", reslt);

 pgdbconnect.query("select * from society_bank where sb_n_id=$1 order by sb_n_id",[societybankid],function(err,societybnksearch)
  {
   console.log("memssssssssss",societybnksearch)
   var sb_edit_id                          =  societybnksearch.rows[0]. sb_n_id; 
   var edit_soc_add_bnk_code               =  societybnksearch.rows[0]. sb_ch_bank_code;
   var edit_soc_add_bnk_name               =  societybnksearch.rows[0]. sb_ch_bank_name;
   var edit_soc_bnk_address_address_line   =  societybnksearch.rows[0]. sb_ch_addr_line;
   var edit_soc_bnk_address_lndmark        =  societybnksearch.rows[0]. sb_ch_land_mark;
   var edit_soc_bnk_address_village        =  societybnksearch.rows[0]. sb_ch_village;
   var edit_soc_bnk_address_pncht_mdl      =  societybnksearch.rows[0]. sb_ch_panchayat_mandal;
   var edit_soc_bnk_address_city           =  societybnksearch.rows[0]. sb_ch_city;
   var edit_soc_bnk_address_district       =  societybnksearch.rows[0]. sb_ch_district;
   var edit_soc_bnk_address_state          =  societybnksearch.rows[0]. sb_ch_state;
   var edit_soc_bnk_address_country        =  societybnksearch.rows[0]. sb_ch_country;
   var edit_soc_bnk_address_postal_code    =  societybnksearch.rows[0]. sb_n_postal_code;
   var edit_soc_bnk_address_phnum1         =  societybnksearch.rows[0]. sb_n_phone_num1;
   var edit_soc_bnk_address_phnum2         =  societybnksearch.rows[0]. sb_n_phone_num2;
   var edit_soc_bnk_address_emial          =  societybnksearch.rows[0]. sb_ch_email_1;
   var edit_soc_bnk_address_url            =  societybnksearch.rows[0]. sb_ch_url;
   var edit_soc_bnk_address_latitude       =  societybnksearch.rows[0]. sb_ch_latitude;
   var edit_soc_bnk_address_Longitude      =  societybnksearch.rows[0]. sb_ch_longitude;
   var edit_soc_bnk_address_key_con_per1   =  societybnksearch.rows[0]. sb_ch_key_contact_person1;
   var edit_soc_bnk_name1                  =  societybnksearch.rows[0]. sb_ch_key_cp_name1;
   var edit_soc_bnk_address_key_con_per2   =  societybnksearch.rows[0]. sb_ch_key_contact_person2;
   var edit_soc_bnk_name2                  =  societybnksearch.rows[0]. sb_ch_key_cp_name2;

   res.render('societyModule/scty_Bank_Add',{
      sb_edit_id:sb_edit_id,
      edit_soc_add_bnk_code:edit_soc_add_bnk_code,
      edit_soc_add_bnk_name:edit_soc_add_bnk_name,
      edit_soc_bnk_address_address_line:edit_soc_bnk_address_address_line,
      edit_soc_bnk_address_lndmark:edit_soc_bnk_address_lndmark,
      edit_soc_bnk_address_village:edit_soc_bnk_address_village,
      edit_soc_bnk_address_pncht_mdl:edit_soc_bnk_address_pncht_mdl,
      edit_soc_bnk_address_city:edit_soc_bnk_address_city,
      edit_soc_bnk_address_district:edit_soc_bnk_address_district,
      edit_soc_bnk_address_state:edit_soc_bnk_address_state,
      edit_soc_bnk_address_country:edit_soc_bnk_address_country,
      edit_soc_bnk_address_postal_code:edit_soc_bnk_address_postal_code,
      edit_soc_bnk_address_phnum1:edit_soc_bnk_address_phnum1,
      edit_soc_bnk_address_phnum2:edit_soc_bnk_address_phnum2,
      edit_soc_bnk_address_emial:edit_soc_bnk_address_emial,
      edit_soc_bnk_address_url:edit_soc_bnk_address_url,
      edit_soc_bnk_address_latitude:edit_soc_bnk_address_latitude,
      edit_soc_bnk_address_Longitude:edit_soc_bnk_address_Longitude,
      edit_soc_bnk_address_key_con_per1:edit_soc_bnk_address_key_con_per1,
      edit_soc_bnk_name1:edit_soc_bnk_name1,
      edit_soc_bnk_address_key_con_per2:edit_soc_bnk_address_key_con_per2,
      edit_soc_bnk_name2:edit_soc_bnk_name2,
      pagetype:"EDIT",
      societybankid:societybankid,
      cities:result1.rows,
      states:result2.rows,
      countries:result3.rows,
      bank:result4.rows
   });
});
      });
   });
});
   });
});



//////////////////////////////

router.post('/update_societyBank_edit',function(req,res){
   console.log("Welcome");

   var soc_add_bnk_code_ed                = req.body.soc_add_bnk_code_ed;
   var soc_add_bnk_name_ed                = req.body.soc_add_bnk_name_ed;
   var soc_bnk_address_address_line_ed    = req.body.soc_bnk_address_address_line_ed;
   var soc_bnk_address_lndmark_ed         = req.body.soc_bnk_address_lndmark_ed;
   var soc_bnk_address_village_ed         = req.body.soc_bnk_address_village_ed;
   var soc_bnk_address_pncht_mdl_ed       = req.body.soc_bnk_address_pncht_mdl_ed;
   var soc_bnk_address_city_ed            = req.body.soc_bnk_address_city_ed;
   var soc_bnk_address_district_ed        = req.body.soc_bnk_address_district_ed;
   var soc_bnk_address_state_ed           = req.body.soc_bnk_address_state_ed;
   var soc_bnk_address_country_ed         = req.body.soc_bnk_address_country_ed;
   var soc_bnk_address_postal_code_ed     = req.body.soc_bnk_address_postal_code_ed;
   var soc_bnk_address_phonenumber1_ed    = req.body.soc_bnk_address_phonenumber1_ed;
   var soc_bnk_address_phonenumber2_ed    = req.body.soc_bnk_address_phonenumber2_ed;
   var soc_bnk_address_emial_ed           = req.body.soc_bnk_address_emial_ed;        
   var soc_bnk_address_url_ed             = req.body.soc_bnk_address_url_ed;
   var soc_bnk_address_latitude_ed        = req.body.soc_bnk_address_latitude_ed;         
   var soc_bnk_address_Longitude_ed       = req.body.soc_bnk_address_Longitude_ed;
   var soc_bnk_address_key_con_per1_ed    = req.body.soc_bnk_address_key_con_per1_ed;   
   var soc_bnk_name1_ed                   =  req.body.soc_bnk_name1_ed;     
   var soc_bnk_address_key_con_per2_ed    = req.body.soc_bnk_address_key_con_per2_ed;
   var soc_bnk_name2_ed                   =  req.body.soc_bnk_name2_ed; 
   var socbank_edit                       = req.body.socbank_edit;
   
   console.log("bnk details",soc_add_bnk_code_ed,soc_add_bnk_name_ed,soc_bnk_address_address_line_ed,soc_bnk_address_lndmark_ed,soc_bnk_address_village_ed,soc_bnk_address_pncht_mdl_ed,soc_bnk_address_city_ed,soc_bnk_address_district_ed,soc_bnk_address_state_ed,soc_bnk_address_country_ed,soc_bnk_address_postal_code_ed,soc_bnk_address_phonenumber1_ed,soc_bnk_address_phonenumber2_ed,soc_bnk_address_emial_ed,soc_bnk_address_url_ed,soc_bnk_address_latitude_ed,soc_bnk_address_Longitude_ed,soc_bnk_address_key_con_per1_ed,soc_bnk_name1_ed,soc_bnk_address_key_con_per2_ed,soc_bnk_name2_ed,socbank_edit)

pgdbconnect.query('update society_bank set  sb_ch_bank_code=$1, sb_ch_bank_name=$2, sb_ch_addr_line=$3, sb_ch_land_mark=$4, sb_ch_village=$5,sb_ch_panchayat_mandal=$6, sb_ch_city=$7, sb_ch_district=$8, sb_ch_state=$9, sb_ch_country=$10, sb_n_postal_code=$11, sb_n_phone_num1=$12, sb_n_phone_num2=$13, sb_ch_email_1=$14, sb_ch_url=$15, sb_ch_latitude=$16, sb_ch_longitude=$17, sb_ch_key_contact_person1=$18, sb_ch_key_cp_name1=$19,sb_ch_key_contact_person2=$20,sb_ch_key_cp_name2=$21 where sb_n_id=$22',[soc_add_bnk_code_ed,soc_add_bnk_name_ed,soc_bnk_address_address_line_ed,soc_bnk_address_lndmark_ed,soc_bnk_address_village_ed,soc_bnk_address_pncht_mdl_ed,soc_bnk_address_city_ed,soc_bnk_address_district_ed,soc_bnk_address_state_ed,soc_bnk_address_country_ed,soc_bnk_address_postal_code_ed,soc_bnk_address_phonenumber1_ed,soc_bnk_address_phonenumber2_ed,soc_bnk_address_emial_ed,soc_bnk_address_url_ed,soc_bnk_address_latitude_ed,soc_bnk_address_Longitude_ed,soc_bnk_address_key_con_per1_ed,soc_bnk_name1_ed,soc_bnk_address_key_con_per2_ed,soc_bnk_name2_ed,socbank_edit],function(err,result){
   if(err) throw err;
   console.log("sbresult",result)


      pgdbconnect.query("select * from society_bank where sb_ch_del_flg=$1",['N'],function(err,reslt){
         if(err) throw err;


            pgdbconnect.query("select * from bank_code_details limit 50",function(err,bankreslt) 
            {
              if(err) throw err;

   //flash messege
   req.flash('success_msg', 'Data updated successfully');
   res.locals.message=req.flash();
   
  
      res.render('societyModule/scty_Bank_Search',{
     
      societybankdetails:reslt.rows,
      banksrch:bankreslt.rows
        
   });
  });
           });
        });
      });


/////////////////////////////////////////////////////////////////////////////


router.post('/society_bank_view_data_populate',function(req,res){
   console.log("populate fields");
   var divtype="VIEW";
 console.log("DIV TYPE on edit populate",divtype);

 var societybankid= req.body.tempsocbnkviewid;
 console.log("society bank id to edit",societybankid)


 pgdbconnect.query("select * from society_bank where sb_n_id=$1 order by sb_n_id",[societybankid],function(err,societybnksearch)
  {
   console.log("memssssssssss",societybnksearch)
   var sb_view_id                          =  societybnksearch.rows[0]. sb_n_id; 
   var view_soc_add_bnk_code               =  societybnksearch.rows[0]. sb_ch_bank_code;
   var view_soc_add_bnk_name               =  societybnksearch.rows[0]. sb_ch_bank_name;
   var view_soc_bnk_address_address_line   =  societybnksearch.rows[0]. sb_ch_addr_line;
   var view_soc_bnk_address_lndmark        =  societybnksearch.rows[0]. sb_ch_land_mark;
   var view_soc_bnk_address_village        =  societybnksearch.rows[0]. sb_ch_village;
   var view_soc_bnk_address_pncht_mdl      =  societybnksearch.rows[0]. sb_ch_panchayat_mandal;
   var view_soc_bnk_address_city           =  societybnksearch.rows[0]. sb_ch_city;
   var view_soc_bnk_address_district       =  societybnksearch.rows[0]. sb_ch_district;
   var view_soc_bnk_address_state          =  societybnksearch.rows[0]. sb_ch_state;
   var view_soc_bnk_address_country        =  societybnksearch.rows[0]. sb_ch_country;
   var view_soc_bnk_address_postal_code    =  societybnksearch.rows[0]. sb_n_postal_code;
   var view_soc_bnk_address_phnum1         =  societybnksearch.rows[0]. sb_n_phone_num1;
   var view_soc_bnk_address_phnum2         =  societybnksearch.rows[0]. sb_n_phone_num2;
   var view_soc_bnk_address_emial          =  societybnksearch.rows[0]. sb_ch_email_1;
   var view_soc_bnk_address_url            =  societybnksearch.rows[0]. sb_ch_url;
   var view_soc_bnk_address_latitude       =  societybnksearch.rows[0]. sb_ch_latitude;
   var view_soc_bnk_address_Longitude      =  societybnksearch.rows[0]. sb_ch_longitude;
   var view_soc_bnk_address_key_con_per1   =  societybnksearch.rows[0]. sb_ch_key_contact_person1;
   var view_soc_bnk_name1                  =  societybnksearch.rows[0]. sb_ch_key_cp_name1;
   var view_soc_bnk_address_key_con_per2   =  societybnksearch.rows[0]. sb_ch_key_contact_person2;
   var view_soc_bnk_name2                  =  societybnksearch.rows[0]. sb_ch_key_cp_name2;

   res.render('societyModule/scty_Bank_Add',{
      sb_view_id:sb_view_id,
      view_soc_add_bnk_code:view_soc_add_bnk_code,
      view_soc_add_bnk_name:view_soc_add_bnk_name,
      view_soc_bnk_address_address_line:view_soc_bnk_address_address_line,
      view_soc_bnk_address_lndmark:view_soc_bnk_address_lndmark,
      view_soc_bnk_address_village:view_soc_bnk_address_village,
      view_soc_bnk_address_pncht_mdl:view_soc_bnk_address_pncht_mdl,
      view_soc_bnk_address_city:view_soc_bnk_address_city,
      view_soc_bnk_address_district:view_soc_bnk_address_district,
      view_soc_bnk_address_state:view_soc_bnk_address_state,
      view_soc_bnk_address_country:view_soc_bnk_address_country,
      view_soc_bnk_address_postal_code:view_soc_bnk_address_postal_code,
      view_soc_bnk_address_phnum1:view_soc_bnk_address_phnum1,
      view_soc_bnk_address_phnum2:view_soc_bnk_address_phnum2,
      view_soc_bnk_address_emial:view_soc_bnk_address_emial,
      view_soc_bnk_address_url:view_soc_bnk_address_url,
      view_soc_bnk_address_latitude:view_soc_bnk_address_latitude,
      view_soc_bnk_address_Longitude:view_soc_bnk_address_Longitude,
      view_soc_bnk_address_key_con_per1:view_soc_bnk_address_key_con_per1,
      view_soc_bnk_name1:view_soc_bnk_name1,
      view_soc_bnk_address_key_con_per2:view_soc_bnk_address_key_con_per2,
      view_soc_bnk_name2:view_soc_bnk_name2,
      pagetype:"VIEW",
      societybankid:societybankid
     
   });
});
      });


/////////////////////////////////////////////////////////////////////////////////

router.post('/delete_societybank_data',function(req,res){

   
  
   var societybankid= req.body.tempsocbankdelid;
   console.log("id to delete",societybankid)
   pgdbconnect.query("update society_bank set sb_ch_del_flg=$1 where sb_n_id=$2",['Y',societybankid],function(err,delres){
      if (err) throw err;

       console.log("deleted result",delres);
       pgdbconnect.query("select * from society_bank where sb_ch_del_flg=$1 order by sb_n_id",['N'],function(err,searchres){

           pgdbconnect.query("select * from society_bank where sb_ch_del_flg='N'",function(err,bankreslt){

               if(err) throw err;
           console.log("deleted result11",searchres);
 
   req.flash('success_msg', 'Record Deleted successfully');
   res.locals.message=req.flash();
   res.render('societyModule/scty_Bank_Search',{
      
         societybankdetails:searchres.rows,
           banksrch:bankreslt.rows
       });    

   });
});
});
});

/////////////////////////////////////////////////////////////////////////////////

 //Bank Search screen
 router.get('/scty_bank_search',function(req,res){
   var divtype=req.query.key;

   console.log("DIV TYPE",divtype);
   pgdbconnect.query("select * from bank_code_details limit 50",function(err,result5) 
   {
     if(err) throw err;

   pgdbconnect.query("select  * from society_bank where sb_ch_del_flg='N' ",function(err,res1){
      if(err) throw err;
  console.log("Result of society_bank_details",res1);

  res.render('societyModule/scty_Bank_Search',{
      banksrch:result5.rows,
      pagetype:divtype,
      societybankdetails:res1.rows
     });
   });  
});
 });

//////////////////////////////////////////////

router.post('/search_particular_socbnkrec', function(req,res){
   console.log("search particular record");

   var society_bnk_ser_bnkcode = req.body.society_bnk_ser_bnkcode;
   var society_bnk_ser_bnknme  = req.body.society_bnk_ser_bnknme;
   console.log("search record",society_bnk_ser_bnkcode,society_bnk_ser_bnknme);


   pgdbconnect.query("select * from society_bank where sb_ch_bank_code=$1 and sb_ch_bank_name=$2 and (sb_ch_del_flg='N')",[society_bnk_ser_bnkcode,society_bnk_ser_bnknme],function(err,searchres) 
   {
    if(err) throw err;
    console.log("searchres is", searchres.rows);

   pgdbconnect.query("select * from society_bank where sb_ch_del_flg='N'",function(err,bankreslt){
    
    if(err) throw err;
    console.log("per res", searchres.rows);
    
   //  pgdbconnect.query("select * from bank_code_details limit 50",function(err,result6) 

   //  {
   //    if(err) throw err;
   //    console.log(" res", searchres.rows);

    res.render('societyModule/scty_Bank_Search',{

      societybankdetails:searchres.rows,
      banksrch:bankreslt.rows
    
    });
});
 });
});
// });




/////////////////////////////////////////////////////////////////
/*Society-Bank-END*/

 


 

 //Society Branch-START//

 //Branch Add screen
 router.get('/scty_branch_add',function(req,res){
   var divtype="ADD";

   pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
      if(err) throw err;
      pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
     // console.log("Bank code details is", reslt);
     pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
     {
      if(err) throw err;
     
      pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
     {
      if(err) throw err;
 

    res.render('societyModule/scty_Branch_Add',{
      cities:resu1.rows,
      states:resu2.rows,
      bank:reslt.rows,
      branch:result5.rows,
      pagetype:divtype
    });
    });
    });
 });
 });
 });
//add branch details
 router.post('/scty_branch_add_det',function(req,res){
   var divtype="ADD";
   console.log("DIV TYPE",divtype);

var scty_br_id;
 //tab1
  var society_branch_bnkcode = req.body.society_branch_bnkcode;
  console.log("code",society_branch_bnkcode)
  var society_branch_brcode = req.body.society_branch_brcode;
  var society_branch_brname = req.body.society_branch_brname;
  var society_branch_brtype = req.body.society_branch_brtype;
  var society_branch_ifsc_neft = req.body.society_branch_ifsc_neft;
  var society_branch_ifsc_rtgs = req.body.society_branch_ifsc_rtgs;
  var society_branch_micr_cd = req.body.society_branch_micr_cd;
  //tab2
  var soc_branch_add_addline = req.body.soc_branch_add_addline;
  var soc_branch_add_lndmark = req.body.soc_branch_add_lndmark;
  var soc_branch_add_village = req.body.soc_branch_add_village;
  var soc_branch_add_pch_mndal = req.body.soc_branch_add_pch_mndal;
  var soc_branch_add_city = JSON.parse(req.body.soc_branch_add_city).city;
  var soc_branch_add_distict = req.body.soc_branch_add_distict;
  var soc_branch_add_state = req.body.soc_branch_add_state;
  var soc_branch_add_country = req.body.soc_branch_add_country;
  var soc_branch_add_postalcd = req.body.soc_branch_add_postalcd;
  var soc_branch_add_phone_num1 = req.body.soc_branch_add_phone_num1;
  var soc_branch_add_phone_num2 = req.body.soc_branch_add_phone_num2;
  var soc_branch_add_email1 = req.body.soc_branch_add_email1;
  var soc_branch_add_url = req.body.soc_branch_add_url;
  var soc_branch_add_latitude = req.body.soc_branch_add_latitude;
  var soc_branch_add_longitude = req.body.soc_branch_add_longitude;
  var soc_branch_add_key_con_per1 = req.body.soc_br_address_key_con_per1;
   var soc_br_name1 = req.body.soc_br_name1;
  var soc_branch_add_key_con_per2 = req.body.soc_br_address_key_con_per2;
  var soc_br_name2 = req.body.soc_br_name2;


  console.log("Society Branch Details",society_branch_bnkcode,society_branch_brcode,society_branch_brname,society_branch_brtype,society_branch_ifsc_neft,society_branch_ifsc_rtgs,society_branch_micr_cd,soc_branch_add_addline,soc_branch_add_lndmark,soc_branch_add_village,soc_branch_add_pch_mndal,soc_branch_add_city,soc_branch_add_distict,soc_branch_add_state,soc_branch_add_country,soc_branch_add_postalcd,soc_branch_add_phone_num1,soc_branch_add_phone_num2,soc_branch_add_email1,soc_branch_add_url,soc_branch_add_latitude,soc_branch_add_longitude,soc_branch_add_key_con_per1,soc_br_name1,soc_branch_add_key_con_per2,soc_br_name2);


  pgdbconnect.query("select * from society_branch",function(err,result) {
      if(result.rowCount==0){
         scty_br_id=1;
  pgdbconnect.query( "insert into society_branch(sbr_ch_bank_code,sbr_n_branch_code,sbr_ch_branch_name,sbr_ch_branch_type,sbr_ch_ifs_code_neft,sbr_ch_ifs_code_rtgs,sbr_n_micr_code,sbr_ch_addr_line,sbr_ch_land_mark,sbr_ch_village,sbr_ch_panchayat_mandal,sbr_ch_city,sbr_ch_district,sbr_ch_state_name,sbr_ch_country,sbr_n_postal_code,sbr_n_phone_num1,sbr_n_phone_num2,sbr_ch_email1,sbr_ch_url,sbr_ch_latitude,sbr_ch_longitude,sbr_ch_key_contact_person1,sbr_ch_key_contact_person_name1,sbr_ch_key_contact_person2,sbr_ch_key_contact_person_name2,sbr_ch_del_flg,sbr_n_branch_id)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28)",[society_branch_bnkcode,society_branch_brcode,society_branch_brname,society_branch_brtype,society_branch_ifsc_neft,society_branch_ifsc_rtgs,society_branch_micr_cd,soc_branch_add_addline,soc_branch_add_lndmark,soc_branch_add_village,soc_branch_add_pch_mndal,soc_branch_add_city,soc_branch_add_distict,soc_branch_add_state,soc_branch_add_country,soc_branch_add_postalcd,soc_branch_add_phone_num1,soc_branch_add_phone_num2,soc_branch_add_email1,soc_branch_add_url,soc_branch_add_latitude,soc_branch_add_longitude,soc_branch_add_key_con_per1,soc_br_name1,soc_branch_add_key_con_per2,soc_br_name2,'N',scty_br_id] ,function(err,res1){

      if(err) throw err;
      console.log("society branch details",res1);

  pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,resu)
 {
     if(err) throw err;
     pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
      if(err) throw err;
     pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
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

 res.render('societyModule/scty_Branch_Add',{
   cities:resu1.rows,
   states:resu2.rows,
     member:resu.rows,
     bank:reslt.rows,
     branch:result5.rows,
     pagetype:divtype
 });
});
});
});
});
 });
});
}
else{
  pgdbconnect.query("select max(sbr_n_branch_id) from society_branch",function(err,result) {
     // console.log("max value check",result)
    //  console.log("max value check",result.rows[0].max)

    scty_br_id=parseInt(result.rows[0].max)+1;
    //  console.log("when more rows exxxists",scty_br_id)



    pgdbconnect.query( "insert into society_branch(sbr_ch_bank_code,sbr_n_branch_code,sbr_ch_branch_name,sbr_ch_branch_type,sbr_ch_ifs_code_neft,sbr_ch_ifs_code_rtgs,sbr_n_micr_code,sbr_ch_addr_line,sbr_ch_land_mark,sbr_ch_village,sbr_ch_panchayat_mandal,sbr_ch_city,sbr_ch_district,sbr_ch_state_name,sbr_ch_country,sbr_n_postal_code,sbr_n_phone_num1,sbr_n_phone_num2,sbr_ch_email1,sbr_ch_url,sbr_ch_latitude,sbr_ch_longitude,sbr_ch_key_contact_person1,sbr_ch_key_contact_person_name1,sbr_ch_key_contact_person2,sbr_ch_key_contact_person_name2,sbr_ch_del_flg,sbr_n_branch_id)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28)",[society_branch_bnkcode,society_branch_brcode,society_branch_brname,society_branch_brtype,society_branch_ifsc_neft,society_branch_ifsc_rtgs,society_branch_micr_cd,soc_branch_add_addline,soc_branch_add_lndmark,soc_branch_add_village,soc_branch_add_pch_mndal,soc_branch_add_city,soc_branch_add_distict,soc_branch_add_state,soc_branch_add_country,soc_branch_add_postalcd,soc_branch_add_phone_num1,soc_branch_add_phone_num2,soc_branch_add_email1,soc_branch_add_url,soc_branch_add_latitude,soc_branch_add_longitude,soc_branch_add_key_con_per1,soc_br_name1,soc_branch_add_key_con_per2,soc_br_name2,'N',scty_br_id] ,function(err,res1){

   if(err) throw err;
   console.log("society branch details",res1);
pgdbconnect.query("select * from society_branch where sbr_ch_del_flg=$1",['N'],function(err,resu)
{
 if(err) throw err;
 pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
   if(err) throw err;
  pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
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


res.render('societyModule/scty_Branch_Add',{
 member:resu.rows,
 cities:resu1.rows,
 states:resu2.rows,
 bank:reslt.rows,
 branch:result5.rows,
 pagetype:divtype
});
});
});
});
});
  });});
});
}

});
});



router.post('/scty_br_edit',function(req,res){
   console.log("populate fields");
   var divtype="EDIT";
 console.log("DIV TYPE on edit populate",divtype);

   //Bank Branch details-start//
var sctybrid= req.body.tempsctybrid;
//console.log("bank id to edit",bankid)

pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
   if(err) throw err;
  pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
     {
         if(err) throw err;
         pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
{
 if(err) throw err;

 pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
{
 if(err) throw err;
 pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,loginres){
   if(err) throw err;
   pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,sctyreslt){
      if(err) throw err;

           pgdbconnect.query("select * from society_branch where sbr_n_branch_id=$1 order by sbr_n_branch_id ",[sctybrid],function(err,searchresren)
   
           {
               console.log("searchres",searchresren);
   var scty_bank_code=  searchresren.rows[0].sbr_ch_bank_code; 
    var scty_br_code=  searchresren.rows[0].sbr_n_branch_code;
   var br_name = searchresren.rows[0].sbr_ch_branch_name;
   var br_type = searchresren.rows[0].sbr_ch_branch_type;
   var neft =  searchresren.rows[0].sbr_ch_ifs_code_neft;
   var rtgs = searchresren.rows[0].sbr_ch_ifs_code_rtgs;
   var micr =  searchresren.rows[0].sbr_n_micr_code;
   var add_line =  searchresren.rows[0].sbr_ch_addr_line;
   var landmark = searchresren.rows[0].sbr_ch_land_mark;
   var vill =  searchresren.rows[0].sbr_ch_village;
   var panchayath =  searchresren.rows[0].sbr_ch_panchayat_mandal;
   var city = searchresren.rows[0].sbr_ch_city;
   var dist =  searchresren.rows[0].sbr_ch_district;
   var state =  searchresren.rows[0].sbr_ch_state_name;
   var cntry = searchresren.rows[0].sbr_ch_country;
   var postal =  searchresren.rows[0].sbr_n_postal_code;
   var phno1 =  searchresren.rows[0].sbr_n_phone_num1;
   var phno2 = searchresren.rows[0].sbr_n_phone_num2;
   var email =  searchresren.rows[0].sbr_ch_email1;
   var url =  searchresren.rows[0].sbr_ch_url;
   var lat = searchresren.rows[0].sbr_ch_latitude;
   var long =  searchresren.rows[0].sbr_ch_longitude;
   var per1 =  searchresren.rows[0].sbr_ch_key_contact_person1;
   var pname1 = searchresren.rows[0].sbr_ch_key_contact_person_name1;
   var per2 =  searchresren.rows[0].sbr_ch_key_contact_person2;
   var pname2 =  searchresren.rows[0].sbr_ch_key_contact_person_name2;
   var br_id_edit = searchresren.rows[0].sbr_n_branch_id;
  
  
   
  
  
               res.render('societyModule/scty_Branch_Add',{

                  scty_bank_code:scty_bank_code,
                  scty_br_code:scty_br_code,
                  br_name:br_name,  
                  br_type:br_type,  
                  neft:neft, 
                  rtgs:rtgs, 
                  micr:micr, 
                  add_line:add_line,
                  landmark:landmark,
                  vill:vill,  
                  panchayath:panchayath,  
                  city:city, 
                  dist:dist, 
                  state:state, 
                  cntry:cntry,
                  postal:postal,
                  phno1:phno1,  
                  phno2:phno2,  
                  email:email, 
                  url:url, 
                  lat:lat,
                  long:long,
                  per1:per1,
                  pname1:pname1,  
                  per2:per2,  
                  pname2:pname2, 
                  br_id_edit:br_id_edit, 
                  bank:reslt.rows,
                  branch:result5.rows,
                  cities:resu1.rows,
                  states:resu2.rows,
                  sctydetails:loginres.rows,
                  sctysrch   :sctyreslt.rows,
                   pagetype:"EDIT"
               }); 
               });
               });
           });
         });
      });
   });
});
});

router.post('/scty_br_view',function(req,res){
   console.log("populate fields");
   var divtype="VIEW";
 console.log("DIV TYPE on edit populate",divtype);

   //Bank Branch details-start//
var sctybrid1= req.body.tempsctybrid1;
//console.log("bank id to edit",bankid)
pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
   if(err) throw err;
  pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
     {
         if(err) throw err;
         pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
{
 if(err) throw err;

 pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
{
 if(err) throw err;
 pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,loginres){
   if(err) throw err;
 pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,sctyreslt){
   if(err) throw err;
           pgdbconnect.query("select * from society_branch where sbr_n_branch_id=$1 order by sbr_n_branch_id ",[sctybrid1],function(err,searchresren)
   
           {
               console.log("searchres",searchresren);
               var scty_bank_code_vw=  searchresren.rows[0].sbr_ch_bank_code; 
               var scty_br_code_vw=  searchresren.rows[0].sbr_n_branch_id;
              var br_name_vw = searchresren.rows[0].sbr_ch_branch_name;
              var br_type_vw = searchresren.rows[0].sbr_ch_branch_type;
              var neft_vw =  searchresren.rows[0].sbr_ch_ifs_code_neft;
              var rtgs_vw = searchresren.rows[0].sbr_ch_ifs_code_rtgs;
              var micr_vw =  searchresren.rows[0].sbr_n_micr_code;
              var add_line_vw =  searchresren.rows[0].sbr_ch_addr_line;
              var landmark_vw = searchresren.rows[0].sbr_ch_land_mark;
              var vill_vw =  searchresren.rows[0].sbr_ch_village;
              var panchayath_vw =  searchresren.rows[0].sbr_ch_panchayat_mandal;
              var city_vw = searchresren.rows[0].sbr_ch_city;
              var dist_vw =  searchresren.rows[0].sbr_ch_district;
              var state_vw =  searchresren.rows[0].sbr_ch_state_name;
              var cntry_vw = searchresren.rows[0].sbr_ch_country;
              var postal_vw =  searchresren.rows[0].sbr_n_postal_code;
              var phno1_vw =  searchresren.rows[0].sbr_n_phone_num1;
              var phno2_vw = searchresren.rows[0].sbr_n_phone_num2;
              var email_vw =  searchresren.rows[0].sbr_ch_email1;
              var url_vw =  searchresren.rows[0].sbr_ch_url;
              var lat_vw = searchresren.rows[0].sbr_ch_latitude;
              var long_vw =  searchresren.rows[0].sbr_ch_longitude;
              var per1_vw =  searchresren.rows[0].sbr_ch_key_contact_person1;
              var pname1_vw = searchresren.rows[0].sbr_ch_key_contact_person_name1;
              var per2_vw =  searchresren.rows[0].sbr_ch_key_contact_person2;
              var pname2_vw =  searchresren.rows[0].sbr_ch_key_contact_person_name2;
              var br_id_vw = searchresren.rows[0].sbr_n_branch_id;
   
  
  
               res.render('societyModule/scty_Branch_Add',{

                  scty_bank_code_vw : scty_bank_code_vw,
                  scty_br_code_vw : scty_br_code_vw,
                  br_name_vw : br_name_vw,  
                  br_type_vw : br_type_vw,  
                  neft_vw : neft_vw, 
                  rtgs_vw : rtgs_vw, 
                  micr_vw : micr_vw, 
                  add_line_vw : add_line_vw,
                  landmark_vw : landmark_vw,
                  vill_vw : vill_vw,  
                  panchayath_vw : panchayath_vw,  
                  city_vw : city_vw, 
                  dist_vw : dist_vw, 
                  state_vw : state_vw, 
                  cntry_vw : cntry_vw,
                  postal_vw : postal_vw,
                  phno1_vw : phno1_vw,  
                  phno2_vw : phno2_vw,  
                  email_vw : email_vw, 
                  url_vw  : url_vw, 
                  lat_vw : lat_vw,
                  long_vw : long_vw,
                  per1_vw : per1_vw,
                  pname1_vw : pname1_vw,  
                  per2_vw : per2_vw,  
                  pname2_vw : pname2_vw, 
                  br_id_vw : br_id_vw, 
                  bank:reslt.rows,
                  branch:result5.rows,
                  cities:resu1.rows,
                  states:resu2.rows,
                  sctysrch:sctyreslt.rows,
                  sctydetails:loginres.rows,
                   pagetype:"VIEW"
               });
               });
               });
            });
            });
         });
      });
   });
});


router.post('/update_scty_br_edit',function(req,res){
   console.log("Welcomeedittttt");
  
   var society_branch_bnkcode_ed = req.body.society_branch_bnkcode_ed;
   var society_branch_brcode_ed = req.body.society_branch_brcode_ed;
   var society_branch_brname_ed = req.body.society_branch_brname_ed;
   var society_branch_brtype_ed = req.body.society_branch_brtype_ed;
   var society_branch_ifsc_neft_ed = req.body.society_branch_ifsc_neft_ed;
   var society_branch_ifsc_rtgs_ed = req.body.society_branch_ifsc_rtgs_ed;
   var society_branch_micr_cd_ed = req.body.society_branch_micr_cd_ed;


   var soc_branch_add_addline_ed = req.body.soc_branch_add_addline_ed;
   var soc_branch_add_lndmark_ed = req.body.soc_branch_add_lndmark_ed;
   var soc_branch_add_village_ed = req.body.soc_branch_add_village_ed;
   var soc_branch_add_pch_mndal_ed = req.body.soc_branch_add_pch_mndal_ed;
   var soc_branch_add_city_ed = JSON.parse(req.body.soc_branch_add_city_ed).city;
   var soc_branch_add_distict_ed = req.body.soc_branch_add_distict_ed;
   var soc_branch_add_state_ed = req.body.soc_branch_add_state_ed;
   var soc_branch_add_country_ed = req.body.soc_branch_add_country_ed;
   var soc_branch_add_postalcd_ed = req.body.soc_branch_add_postalcd_ed;
   var soc_branch_add_phone_num1_ed = req.body.soc_branch_add_phone_num1_ed;
   var soc_branch_add_phone_num2_ed = req.body.soc_branch_add_phone_num2_ed;
   var soc_branch_add_email1_ed = req.body.soc_branch_add_email1_ed;
   var soc_branch_add_url_ed = req.body.soc_branch_add_url_ed;
   var soc_branch_add_latitude_ed = req.body.soc_branch_add_latitude_ed;
   var soc_branch_add_longitude_ed = req.body.soc_branch_add_longitude_ed;
   var soc_br_address_key_con_per1_ed = req.body.soc_br_address_key_con_per1_ed;
   var soc_br_name1_ed = req.body.soc_br_name1_ed;
   var soc_br_address_key_con_per2_ed = req.body.soc_br_address_key_con_per2_ed;
   var soc_br_name2_ed = req.body.soc_br_name2_ed;
   var br_id_edit= req.body.br_edit;
   
   pgdbconnect.query('update society_branch set sbr_ch_bank_code=$1,sbr_n_branch_code=$2,sbr_ch_branch_name=$3,sbr_ch_branch_type=$4,sbr_ch_ifs_code_neft=$5,sbr_ch_ifs_code_rtgs=$6,sbr_n_micr_code=$7,sbr_ch_addr_line=$8,sbr_ch_land_mark=$9,sbr_ch_village=$10,sbr_ch_panchayat_mandal=$11,sbr_ch_city=$12,sbr_ch_district=$13,sbr_ch_state_name=$14,sbr_ch_country=$15,sbr_n_postal_code=$16,sbr_n_phone_num1=$17,sbr_n_phone_num2=$18,sbr_ch_email1=$19,sbr_ch_url=$20,sbr_ch_latitude=$21,sbr_ch_longitude=$22,sbr_ch_key_contact_person1=$23,sbr_ch_key_contact_person_name1=$24,sbr_ch_key_contact_person2=$25,sbr_ch_key_contact_person_name2=$26 where sbr_n_branch_id=$27',
   [society_branch_bnkcode_ed,society_branch_brcode_ed,society_branch_brname_ed,society_branch_brtype_ed,society_branch_ifsc_neft_ed,society_branch_ifsc_rtgs_ed,society_branch_micr_cd_ed,soc_branch_add_addline_ed,soc_branch_add_lndmark_ed,soc_branch_add_village_ed,soc_branch_add_pch_mndal_ed,soc_branch_add_city_ed,soc_branch_add_distict_ed,soc_branch_add_state_ed,soc_branch_add_country_ed,soc_branch_add_postalcd_ed,soc_branch_add_phone_num1_ed,soc_branch_add_phone_num2_ed,soc_branch_add_email1_ed, soc_branch_add_url_ed,soc_branch_add_latitude_ed,soc_branch_add_longitude_ed,soc_br_address_key_con_per1_ed,soc_br_name1_ed,soc_br_address_key_con_per2_ed,soc_br_name2_ed,br_id_edit],function(err,result){


           if(err) throw err;
         
      console.log("result12:",result);
  pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
   if(err) throw err;
  pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
     {
         if(err) throw err;
         pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,resu1)
{
 if(err) throw err;

 pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,resu2)
{
 if(err) throw err;
     
           pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,loginres){
               if(err) throw err;
              // console.log("result:",loginres);

              pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,sctyreslt){
               if(err) throw err;
   
  //flash messege
  req.flash('success_msg', 'Data updated successfully');
  res.locals.message=req.flash();
  
           res.render('societyModule/scty_Branch_Search',{
               sctydetails:loginres.rows,
               sctysrch:sctyreslt.rows,
               bank:reslt.rows,
               branch:result5.rows,
               cities:resu1.rows,
               states:resu2.rows
           });
         });
         });
           });
         });
           });
           });
       });
  });



 //Branch Search screen
 router.get('/scty_branch_search',function(req,res){
   pgdbconnect.query("select * from bank_code_details limit 50",function(err,reslt) {
      if(err) throw err;
     pgdbconnect.query("select * from branch_code_details limit 50",function(err,result5)
        {
            if(err) throw err;
   pgdbconnect.query("select * from society_branch where sbr_ch_del_flg=$1",['N'],function(err,searchres){
      if(err) throw err;
      pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,sctyreslt){
         if(err) throw err;
    res.render('societyModule/scty_Branch_Search',{
      sctydetails:searchres.rows,
      sctysrch:sctyreslt.rows,
      bank:reslt.rows,
      branch:result5.rows
    });
   });
    });
 });
});
 });


router.post('/search_particular_scty_branch_rec', function(req,res){
   console.log("search particular record");
   
   var society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   var society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   var society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   var society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   var society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
   console.log(society_branch_ser_bnkcd, society_branch_ser_brcode, society_branch_ser_brnme,society_branch_ser_ifsc_neft,society_branch_ser_ifsc_rtgs);
   

   
if(society_branch_ser_bnkcd!='' && society_branch_ser_brcode!='' && society_branch_ser_brnme!='' && society_branch_ser_ifsc_neft!='' && society_branch_ser_ifsc_rtgs!='')
{
   society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}

else if(society_branch_ser_bnkcd!='' && society_branch_ser_brcode =='Select' && society_branch_ser_brnme =='' && society_branch_ser_ifsc_neft =='Select' && society_branch_ser_ifsc_rtgs =='Select')
{
   society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = null;
}

else if(society_branch_ser_bnkcd =='Select' && society_branch_ser_brcode !='' && society_branch_ser_brnme =='' && society_branch_ser_ifsc_neft =='Select' && society_branch_ser_ifsc_rtgs =='Select')
{
   society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = null;
} 

else if(society_branch_ser_bnkcd =='Select' && society_branch_ser_brcode =='Select' && society_branch_ser_brnme !='' && society_branch_ser_ifsc_neft =='Select' && society_branch_ser_ifsc_rtgs =='Select')
{
   society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = null;
} 

else if(society_branch_ser_bnkcd =='Select' && society_branch_ser_brcode =='Select' && society_branch_ser_brnme =='' && society_branch_ser_ifsc_neft !='' && society_branch_ser_ifsc_rtgs =='Select')
{
   society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = null;
} 

else if(society_branch_ser_bnkcd =='Select' && society_branch_ser_brcode =='Select' && society_branch_ser_brnme =='' && society_branch_ser_ifsc_neft =='Select' && society_branch_ser_ifsc_rtgs !='')
{
   society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
} 
////////////


else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode!="" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = null;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = null ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = null ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = null ;
   society_branch_ser_brnme = null ;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme ;
   society_branch_ser_ifsc_neft = null ;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode!="" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode ;
   society_branch_ser_brnme = null ;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_brnme ;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode!="" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode ;
   society_branch_ser_brnme = null ;
   society_branch_ser_ifsc_neft =  null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_brnme;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme ;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme ;
   society_branch_ser_ifsc_neft =null ;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null ;
   society_branch_ser_brnme = null ;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft ;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme ;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft ;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode ;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme ;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_neft;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme=="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode ;
   society_branch_ser_brnme =  null;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_neft;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode =null;
   society_branch_ser_brnme =  req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_neft;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs=="Select")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = null;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft=="Select" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = req.body.society_branch_ser_brcode;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = null;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd!="" && society_branch_ser_brcode=="Select" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brcode = null;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}
else if(society_branch_ser_bnkcd=="Select" && society_branch_ser_brcode!="" && society_branch_ser_brnme!="" && society_branch_ser_ifsc_neft!="" && society_branch_ser_ifsc_rtgs!="")
{
society_branch_ser_bnkcd = null;
   society_branch_ser_brcode = req.body.society_branch_ser_bnkcd;
   society_branch_ser_brnme = req.body.society_branch_ser_brnme;
   society_branch_ser_ifsc_neft = req.body.society_branch_ser_ifsc_neft;
   society_branch_ser_ifsc_rtgs = req.body.society_branch_ser_ifsc_rtgs;
}

   pgdbconnect.query("select * from society_branch where (sbr_ch_bank_code=$1 or sbr_n_branch_code=$2 or sbr_ch_branch_name=$3 or sbr_ch_ifs_code_neft=$4 or sbr_ch_ifs_code_rtgs=$5)  and (sbr_ch_del_flg='N')",[society_branch_ser_bnkcd,society_branch_ser_brcode,society_branch_ser_brnme,society_branch_ser_ifsc_neft,society_branch_ser_ifsc_rtgs],function(err,searchres) 
   {
       if(err) throw err;
         console.log("searchres is", searchres.rows);
       pgdbconnect.query("select * from society_branch where sbr_ch_del_flg=$1",['N'],function(err,searchres1){
         if(err) throw err;
      console.log("searchres is", searchres.rows);
      pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,branchreslt){
       
       if(err) throw err;
       
   
   
       res.render('societyModule/scty_Branch_Search',{
         sctydetails:searchres.rows,
           bankdetails:searchres1.rows,
           sctysrch:branchreslt.rows
       });
       });
   });
    });
   });
router.post('/delete_scty_br_populate',function(req,res){

   
  
   var delid= req.body.tempsctybrid2;
   console.log("id to delete",delid)
   pgdbconnect.query("update society_branch set sbr_ch_del_flg=$1 where sbr_n_branch_id=$2",['Y',delid],function(err,delres){

       console.log("deleted result",delres);
       pgdbconnect.query("select * from society_branch where sbr_ch_del_flg=$1 order by sbr_n_branch_id",['N'],function(err,searchres){
          if(err) throw err;
           pgdbconnect.query("select * from society_branch where sbr_ch_del_flg='N'",function(err,sctyreslt){

               if(err) throw err;
          // console.log("deleted result11",searchres);
   //Bank Branch details-start//
   req.flash('success_msg', 'Record Deleted successfully');
   res.locals.message=req.flash();
       res.render('societyModule/scty_Branch_Search',{
      
         sctydetails:searchres.rows,
           sctysrch:sctyreslt.rows
       });    

   });
});
});
});


//Society Branch-END//
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
 

 module.exports=router;