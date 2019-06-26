var express = require('express');
var router = express.Router();
var pgdbconnect=require('../../routes/database/pgdbconnect');
var moment=require('moment');



/*Account Renewal -START*/
// account_renewal_details
router.get('/acc_renewal',function(req,res){
    res.render('accountsModule/account_renewal_details');
 });


 router.get('/account_renewal',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

    res.render('accountsModule/account_renewal_details',{
        pagetype:divtype
    });
});


 ////////account renewal  edit records//////

 router.get('/acc_renewal_edit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);
        pgdbconnect.query("select * from account_renewal_detail",function(err,renres){
    
            if(err) throw err;
            
    res.render('accountsModule/account_renewal_details',{
        pagetype:divtype,
        renewaldetails:renres.rows

    });
});
});

 // account_renewal_search
 router.get('/acc_renewal_details_search',function(req,res){
    pgdbconnect.query("select * from account_renewal_detail where ard_ch_del_flg='N'",function(err,renwres){
    
        if(err) throw err;
       
        
            res.render('accountsModule/account_renewal_details_search',{
                renewaldetails:renwres.rows,
                moment:moment
                    
        });
    });
 });

///////////////search particular record in account renewal search/////////////

router.post('/search_particular_ren_rec', function(req,res){
    console.log("search particular renewal record");
    
   var acc_renw_acc_typ = req.body.acc_renw_acc_typ;
   var acc_renw_acc_num = req.body.acc_renw_acc_num;
   var acc_renw_date_btw = req.body.acc_renw_date_btw;
   var acc_renw_date_and = req.body.acc_renw_date_and;
   var acc_renw_mem_id = req.body.acc_renw_mem_id;

   //////////////all
if(acc_renw_acc_typ!='' && acc_renw_acc_num!='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id!='')
{
        acc_renw_acc_typ = req.body.acc_renw_acc_typ;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = req.body.acc_renw_mem_id; 
}

////////////////1
else if(acc_renw_acc_typ!='' && acc_renw_acc_num=='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = req.body.acc_renw_acc_typ;   
        acc_renw_acc_num = null;   
        acc_renw_date_btw = null;   
        acc_renw_date_and = null;    
        acc_renw_mem_id = null; 
}
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num!='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = null;   
        acc_renw_date_and = null;    
        acc_renw_mem_id = null; 
}
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num=='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = null;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = null; 
}
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num=='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id!='')
{ console.log("t o f",acc_renw_acc_typ=='Select' && acc_renw_acc_num=='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id!='' )
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = null;   
        acc_renw_date_btw = null;   
        acc_renw_date_and = null;    
        acc_renw_mem_id = req.body.acc_renw_mem_id; 
}

//////////////////2
else if(acc_renw_acc_typ!='' && acc_renw_acc_num!='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = req.body.acc_renw_acc_typ;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = null;   
        acc_renw_date_and = null;    
        acc_renw_mem_id = null; 
}
else if(acc_renw_acc_typ!='' && acc_renw_acc_num=='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = req.body.acc_renw_acc_typ;   
        acc_renw_acc_num = null;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = null; 
}
else if(acc_renw_acc_typ!='' && acc_renw_acc_num=='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id!='')
{
        acc_renw_acc_typ = req.body.acc_renw_acc_typ;   
        acc_renw_acc_num = null;   
        acc_renw_date_btw = null;   
        acc_renw_date_and = null;    
        acc_renw_mem_id = req.body.acc_renw_date_btw; 
}
///////////////3
else if(acc_renw_acc_typ!='' && acc_renw_acc_num!='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = req.body.acc_renw_acc_typ;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = null; 
}
///////////////
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num!='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id=='Select')
{
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = null; 
}
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num!='' && acc_renw_date_btw=='' && acc_renw_date_and=='' && acc_renw_mem_id!='Select')
{
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = null;   
        acc_renw_date_and = null;    
        acc_renw_mem_id = req.body.acc_renw_mem_id; 
}
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num!='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id!='Select')
{
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = req.body.acc_renw_acc_num;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = req.body.acc_renw_mem_id; 
}
else if(acc_renw_acc_typ=='Select' && acc_renw_acc_num=='' && acc_renw_date_btw!='' && acc_renw_date_and!='' && acc_renw_mem_id!='Select')
{
        acc_renw_acc_typ = null;   
        acc_renw_acc_num = null;   
        acc_renw_date_btw = req.body.acc_renw_date_btw;   
        acc_renw_date_and = req.body.acc_renw_date_and;    
        acc_renw_mem_id = req.body.acc_renw_mem_id; 
}

    console.log(acc_renw_acc_typ, acc_renw_acc_num, acc_renw_date_btw,acc_renw_date_and,acc_renw_mem_id);

    
    pgdbconnect.query("select * from account_renewal_detail where (ard_ch_acct_type=$1 or ard_ch_acct_num=$2 or (ard_d_renewal_date between $3 and $4 ) or ard_ch_member=$5)  and (ard_ch_del_flg='N')",[acc_renw_acc_typ, acc_renw_acc_num, acc_renw_date_btw,acc_renw_date_and,acc_renw_mem_id],function(err,searchrenres) 
    {
        if(err) throw err;
       // console.log("searchres is", searchres.rows);
    
        res.render('accountsModule/account_renewal_details_search',{
            renewaldetails:searchrenres.rows,
            moment:moment
        
        });
    });
     });

 //// add_account_renewal_details

 router.post('/acc_renewal_add',function(req,res){
	var divtype="ADD";
	console.log("DIV TYPE",divtype);

   var acc_ren_id;
   var acc_renw_acc_typ_sear = req.body.acc_renw_acc_typ_sear;
   var acc_renw_acc_mem_sear = req.body.acc_renw_acc_mem_sear;
   var acc_renw_mem_id_sear = req.body.acc_renw_mem_id_sear;
   var acc_renw_renw_date = req.body.acc_renw_renw_date;
   var acc_renw_renw_amount = req.body.acc_renw_renw_amount;
   var acc_renw_instal_amount = req.body.acc_renw_instal_amount;

   console.log("renewal Details",acc_renw_acc_typ_sear,acc_renw_acc_mem_sear,acc_renw_mem_id_sear,acc_renw_renw_date,acc_renw_renw_amount,acc_renw_instal_amount);


   pgdbconnect.query("select * from account_renewal_detail",function(err,result) {
	   if(result.rowCount==0){
		acc_ren_id=1;

   pgdbconnect.query( "insert into account_renewal_detail(ard_ch_acct_type,ard_ch_acct_num,ard_ch_member,ard_d_renewal_date,ard_n_renewal_amt,ard_n_installment_amt,ard_n_renewal_id,ard_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8)",[acc_renw_acc_typ_sear,acc_renw_acc_mem_sear,acc_renw_mem_id_sear,acc_renw_renw_date,acc_renw_renw_amount,acc_renw_instal_amount,acc_ren_id,'N'] ,function(err,res1){

	   if(err) throw err;
	   console.log("account renewal detail",res1);

	req.flash('success_msg',"Data inserted successfully");
	res.locals.message=req.flash();

  res.render('accountsModule/account_renewal_details',{
	  pagetype:divtype
  });
});


}
else{
   pgdbconnect.query("select max(ard_n_renewal_id) from account_renewal_detail",function(err,result) {
	   console.log("max value check",result)
	   console.log("max value check",result.rows[0].max)

	 acc_ren_id=parseInt(result.rows[0].max)+1;
	 //  console.log("when more rows exxxists",bank_id)



// console.log("House Details",selt_mem,house_num,add_line,vill_town,mem_city,house_state,pincode,description,area_sqft,market_value);
pgdbconnect.query( "insert into account_renewal_detail(ard_ch_acct_type,ard_ch_acct_num,ard_ch_member,ard_d_renewal_date,ard_n_renewal_amt,ard_n_installment_amt,ard_n_renewal_id,ard_ch_del_flg)values($1,$2,$3,$4,$5,$6,$7,$8)",[acc_renw_acc_typ_sear,acc_renw_acc_mem_sear,acc_renw_mem_id_sear,acc_renw_renw_date,acc_renw_renw_amount,acc_renw_instal_amount,acc_ren_id,'N'] ,function(err,res1){
	if(err) throw err;
   console.log("account renewal details",res1);


	req.flash('success_msg',"Data inserted successfully");
	res.locals.message=req.flash();


res.render('accountsModule/account_renewal_details',{

  pagetype:divtype
});
});
});
}

});})

//////edit renewal records/////////////////


router.post('/edit_renewal_data',function(req,res){
    console.log("populate fields");
    var divtype="EDIT";
  console.log("DIV TYPE on edit populate",divtype);

    //Bank Branch details-start//
var renewalid= req.body.temprenid;
//console.log("bank id to edit",bankid)

            pgdbconnect.query("select * from account_renewal_detail where ard_n_renewal_id=$1 order by ard_n_renewal_id ",[renewalid],function(err,searchresren)
    
            {
                console.log("searchres",searchresren);
    var ren_id=  searchresren.rows[0].ard_n_renewal_id; 
     var acc_type=  searchresren.rows[0].ard_ch_acct_type;
    var acc_num = searchresren.rows[0].ard_ch_acct_num;
    var mem_id = searchresren.rows[0].ard_ch_member;
    var ren_date =  searchresren.rows[0].ard_d_renewal_date;
    var ren_amt = searchresren.rows[0].ard_n_renewal_amt;
    var install_amt =  searchresren.rows[0].ard_n_installment_amt;
   
    
   
   
                res.render('accountsModule/account_renewal_details',{

                    ren_id:ren_id,
                    acc_type:acc_type,
                    acc_num:acc_num,  
                    mem_id:mem_id,  
                    ren_date:ren_date, 
                    ren_amt:ren_amt, 
                    install_amt:install_amt, 
                    pagetype:"EDIT",
                    moment:moment
      
       
    });
});
});


router.post('/update_renewal_edit',function(req,res){
    console.log("Welcomeedittttt");
   
    var acc_renw_acc_typ_sear_ed = req.body.acc_renw_acc_typ_sear_ed;
    var acc_renw_acc_mem_sear_ed = req.body.acc_renw_acc_mem_sear_ed;
    var acc_renw_mem_sear_ed = req.body.acc_renw_mem_sear_ed;
    var acc_renw_renw_date_ed = req.body.acc_renw_renw_date_ed;
    var acc_renw_renw_amoun_ed = req.body.acc_renw_renw_amoun_ed;
    var acc_renw_instal_amount_ed = req.body.acc_renw_instal_amount_ed;
    var renewal_edit= req.body.renewal_edit;
    
    var acc_renw_mem_sear_ed = req.body.acc_renw_mem_sear_ed;
    console.log("edit details",acc_renw_acc_typ_sear_ed,acc_renw_acc_mem_sear_ed,acc_renw_mem_sear_ed,acc_renw_renw_date_ed,acc_renw_renw_amoun_ed,acc_renw_instal_amount_ed,renewal_edit);
    pgdbconnect.query('update account_renewal_detail set ard_ch_acct_type=$1,ard_ch_acct_num=$2, ard_ch_member=$3,ard_d_renewal_date=$4,ard_n_renewal_amt=$5,ard_n_installment_amt=$6 where ard_n_renewal_id=$7',[acc_renw_acc_typ_sear_ed,acc_renw_acc_mem_sear_ed,acc_renw_mem_sear_ed,acc_renw_renw_date_ed,acc_renw_renw_amoun_ed,acc_renw_instal_amount_ed,renewal_edit],function(err,result){

            if(err) throw err;
          
   //      console.log("result12:",result);
      
            pgdbconnect.query("select * from account_renewal_detail where ard_ch_del_flg='N'",function(err,loginres){
                if(err) throw err;
               // console.log("result:",loginres);

    
   //flash messege
   req.flash('success_msg', 'Data updated successfully');
   res.locals.message=req.flash();
   
            res.render('accountsModule/account_renewal_details_search',{
                renewaldetails:loginres.rows,
                moment:moment
                
            
                
            });
            });
        });
	});
 
////////////////view renewal data/////////////////

	router.post('/view_renewal_data',function(req,res){
		console.log("populate fields");
		var divtype="VIEW";
	  console.log("DIV TYPE on view data",divtype);
	
		//Bank Branch details-start//
	var renvwid= req.body.temprenvid;
	console.log("ren id to view",renvwid)
	
	 
	
				pgdbconnect.query("select * from account_renewal_detail where ard_n_renewal_id=$1 order by ard_n_renewal_id ",[renvwid],function(err,searchresren1)
		
				{
					console.log("searchresren1",searchresren1)
					var acc_type=  searchresren1.rows[0].ard_ch_acct_type;
				   var acc_num = searchresren1.rows[0].ard_ch_acct_num;
				   var mem_id = searchresren1.rows[0].ard_ch_member;
				   var ren_date =  searchresren1.rows[0].ard_d_renewal_date;
				   var ren_amt = searchresren1.rows[0].ard_n_renewal_amt;
				   var install_amt =  searchresren1.rows[0].ard_n_installment_amt;
					res.render('accountsModule/account_renewal_details',{
	
		   
						acc_type:acc_type,
						acc_num:acc_num,  
						mem_id:mem_id,  
						ren_date:ren_date, 
						ren_amt:ren_amt, 
						install_amt:install_amt,
                         pagetype:"VIEW",
                         moment:moment
		
		});
	});
	
		});

//////////////delete renewal details/////

		
        router.post('/delete_renewal_data',function(req,res){

   
  
            var delid= req.body.temprendelid;
            console.log("id to delete",delid)
            pgdbconnect.query("update account_renewal_detail set ard_ch_del_flg=$1 where ard_n_renewal_id=$2",['Y',delid],function(err,delres){
        
                console.log("deleted result",delres);
                pgdbconnect.query("select * from account_renewal_detail where ard_ch_del_flg=$1 order by ard_n_renewal_id",['N'],function(err,searchres){
                   // console.log("deleted result11",searchres);
            //Bank Branch details-start//
            req.flash('success_msg', 'Record Deleted successfully');
            res.locals.message=req.flash();
                res.render('accountsModule/account_renewal_details_search',{
               
                    renewaldetails:searchres.rows,
                    moment:moment
                    
        
            });
        });
        });
        });



/*Account Renewal -END*/

/*Account Limits -START*/
// account limits add
router.get('/acc_lmt_add',function(req,res){

	res.render('accountsModule/account_limit_add');
});


router.get('/account_limit',function(req,res){
    var divtype=req.query.key;

console.log("DIV TYPE",divtype);

    res.render('accountsModule/account_limit_add',{
        pagetype:divtype
    });
});




//account limits insertion

router.post('/acclimit_record_insert',function(req,res){

 var select_account=req.body.sel_acct;
 var lower_limit=req.body.lwr_lmt;
 var upper_limit=req.body.upr_lmt;
 var acc_num=req.body.acc_num;
 console.log('select_account',select_account);
 console.log('lower_limit',lower_limit);
 console.log('upper_limit',upper_limit);
 console.log('acc_num',acc_num);


var accountid;

 pgdbconnect.query("select * from account_limit",function(err,result) {
	if(result.rowCount==0){
     accountid='1';
 
 pgdbconnect.query("insert into account_limit(al_n_limit_id,al_ch_acct_num,al_n_upper_limit,al_n_lower_limit,al_ch_del_flg,al_ch_acct_type)values($1,$2,$3,$4,$5,$6)",[accountid,acc_num,upper_limit,lower_limit,'N',select_account],function(err,acclimres) {
	if (err)
    {
        console.error('Error with table query', err);
}
else
{
      req.flash('success_msg', 'Record Added successfully');
      res.locals.message=req.flash();

res.render('accountsModule/account_limit_add',{
	pagetype:"ADD",

});
}
 });
	}
else{

 pgdbconnect.query("select max(al_n_limit_id) from account_limit",function(err,result) {
	console.log("max value check",result)
	console.log("max value check",result.rows[0].max)

	account_limit_id=parseInt(result.rows[0].max)+1;
	console.log("when more rows exxxists",account_limit_id)



	pgdbconnect.query("insert into account_limit (al_n_limit_id,al_ch_acct_num,al_n_upper_limit,al_n_lower_limit,al_ch_del_flg,al_ch_acct_type)values($1,$2,$3,$4,$5,$6)",[account_limit_id,acc_num,upper_limit,lower_limit,'N',select_account],function(err,acclimres1) {

		if (err)
		{
			console.error('Error with table query', err);
	}

	else
	{
		  req.flash('success_msg', 'Record Added successfully');
		  res.locals.message=req.flash();
		  res.render('accountsModule/account_limit_add',{
		  pagetype:"ADD",

		  });
	}
});

});

}

 });

});


//acclimit search

router.get('/acc_lmt_search',function(req,res){
console.log("within account limits")
     pgdbconnect.query("select * from account_limit where al_ch_del_flg='N'",function(err,acclimres){

		if(err)
		{
		   console.log("result1 is", acclimres);
		}
    
else{
   
res.render('accountsModule/account_limit_search',{
	acclimres:acclimres.rows
    
    });
}     
});
	 
});

//acc_lmt_edit


router.post('/acc_lmt_edit',function(req,res){
	console.log("within account search")

	var divtype="EDIT";
	console.log('divtype',divtype)
var accid=req.body.tempmemberid;
console.log('accccid',accid);

	pgdbconnect.query("select * from account_limit where al_n_limit_id=$1",[accid],function(err,searchres){

var acc_lmt_id=searchres.rows[0].al_n_limit_id;
var upper_limit=searchres.rows[0].al_n_upper_limit;
var lower_limit=searchres.rows[0].al_n_lower_limit;
var acc_type=searchres.rows[0].al_ch_acct_type;
var acc_num=searchres.rows[0].al_ch_acct_num;



console.log('acc_type',acc_type);
console.log('upper_limit',upper_limit);
console.log('lower_limit',lower_limit);


res.render('accountsModule/account_limit_add',{

	acc_type:acc_type,
	upper_limit:upper_limit,
	pagetype:"EDIT",
	 acc_lmt_id:acc_lmt_id,
     acc_num:acc_num,

	lower_limit:lower_limit

});
	});


});

//acclim update
router.post('/acclimit_update_record',function(req,res){
	console.log("account updating")

	var select_account=req.body.sel_acct_ed;
	var lower_limit=req.body.lwr_lmt_ed;
	var upper_limit=req.body.upr_lmt_ed;
var lmt_num=req.body.acc_lmt_ed;
var acc_num=req.body.acc_num_ed;
console.log('acc_lmt_id',select_account);
console.log('upper_limit',upper_limit);
console.log('lower_limit',lower_limit);


console.log('lmt_numrrrrrrrrrrrrrr',lmt_num)
	 pgdbconnect.query("update account_limit set al_ch_acct_type=$1,al_n_upper_limit=$2,al_n_lower_limit=$3,al_ch_acct_num=$4 where al_n_limit_id=$5",[select_account,upper_limit,lower_limit,acc_num,lmt_num],function(err,updateres){
		if (err)
		{
				   console.error('Error with table query', err);
	   }
	   else{
		pgdbconnect.query("select * from account_limit where al_ch_del_flg=$1",['N'],function(err,accres1){

			req.flash('success_msg', 'Record updated successfully');
			res.locals.message=req.flash();
				res.render('accountsModule/account_limit_search',{

					acclimres:accres1.rows
				});
			});

	   }

	});

	});



//acc_view


	router.post('/acc_lmt_view',function(req,res){
		console.log("within account search")
	
		var divtype="VIEW";
		console.log('divtype',divtype)
		var accid=req.body.tempmemberid1;
	
		pgdbconnect.query("select * from account_limit where al_n_limit_id=$1",[accid],function(err,searchres){
	
	var acc_type=searchres.rows[0].al_ch_acct_type;
	var upper_limit=searchres.rows[0].al_n_upper_limit;
	var lower_limit=searchres.rows[0].al_n_lower_limit;
	var lmt_num=searchres.rows[0].al_n_limit_id;
    var acc_num=searchres.rows[0].al_ch_acct_num;
	// console.log('acc_lmt_id',acc_lmt_id);
	console.log('upper_limit',upper_limit);
	console.log('lower_limit',lower_limit);
	
	
	res.render('accountsModule/account_limit_add',{
	
		acc_type:acc_type,
		upper_limit:upper_limit,
		pagetype:"VIEW",
		lmt_num:lmt_num,
        acc_num:acc_num,
	
		lower_limit:lower_limit
	
	});
		});
	
	
	});
	
///acc delete



	router.post('/acc_lmt_delete',acc_lmt_delete)
	function acc_lmt_delete(req,res){
   
		var lmt_num=req.body.tempmemberid3;
		console.log('lmt_num',lmt_num)
   
	pgdbconnect.query("UPDATE account_limit SET al_ch_del_flg='Y' WHERE al_n_limit_id=$1 ",[lmt_num],function(err,upres2){
   
	   if (err) throw err;
	   console.log("acclmt UPDATED RESULT",upres2)

	   pgdbconnect.query("select * from account_limit where al_ch_del_flg='N'",function(err,result){

		req.flash('success_msg', 'Record Deleted successfully');
		res.locals.message=req.flash();
		res.render('accountsModule/account_limit_search',{

			acclimres:result.rows
		});
	});
});
	}


	router.post('/acclmt_search',acclmt_search)
	function acclmt_search(req,res){

	}


	router.post('/acc_lmt_searcher',acc_lmt_searcher)
    function acc_lmt_searcher(req,res)
    {

		var acc_type=req.body.acc_typ
		var acc_num=req.body.acc_num


console.log('acc_type',acc_type);
console.log('acc_num',acc_num);
pgdbconnect.query("select * from account_limit where ((al_ch_acct_type=$1 or al_ch_acct_num=$2) and al_ch_del_flg='N')",[acc_type,acc_num],function(err,upres2){

	console.log('search result is',upres2)

	if(err)
	{
	   console.log("Error with table query",err);
	}

	else
	{
	
			res.render('accountsModule/account_limit_search',{

				acclimres:upres2.rows
			});
		
	}
});
	}



/*Account Limits -END*/
/*ACCOUNTS ADD DETAILS-START*/
 router.post('/ajax_acc_schemes',function(req,res){
     pgdbconnect.query("select ac_ch_acct_scheme from account_codes",function(err,rel)
         {
             if(err) throw err;
             console.log("Result of Account Scheme", rel);
             res.json(rel.rows);
});
});
//////////////////////////////////////
router.get('/acc_add',function(req,res){

    var divtype=req.query.key;
    console.log("DIV TYPE",divtype);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
       //console.log("result1 is", result1);

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
   {
       if(err) throw err;
       //console.log("result2 is", result2);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
   {
       if(err) throw err;
       //console.log("result3 is", result3);

    console.log("Accounts Page rendered")
	res.render('accountsModule/accounts_add',{
        pagetype:divtype,
        acc_cities:result1.rows,
        acc_states:result2.rows,
        acc_countries:result3.rows
    });
});
   });
});
});

router.get('/acc_search',function(req,res){
    console.log("Accounts share Page rendered")

    pgdbconnect.query("select * from account_details where ad_ch_del_flg = 'N' ",function(err,rsl1){
        if(err) throw err;
        console.log("Account Details")
        pgdbconnect.query("select * from account_nominee_details where and_ch_del_flg = 'N' ",function(err,rsl2){
            if(err) throw err;
            console.log("Nominee Details")
            pgdbconnect.query("select * from account_guardian_details where agd_ch_del_flg = 'N' ",function(err,rsl3){
                if(err) throw err;
                console.log("Guardian Details")
                pgdbconnect.query("select * from account_joint_holder_details where ajg_ch_del_flg = 'N' ",function(err,rsl4){
                    if(err) throw err;
                    console.log("Joint Holder Details")

	res.render('accountsModule/account_search',{
        accdetails:rsl1.rows,
        nomdetails:rsl2.rows,
        guarddetails:rsl3.rows,
        jnthldr:rsl4.rows,
    });
});
});
});
    });
});
                

//Add Record

router.post('/account_insert',function(req,res){

    var divtype="ADD";
    console.log("pagetype of acc",divtype)

    //Accounts
    var acc_shortname = req.body.acc_shrt_nme;
    var acc_name = req.body.acc_nme;
    var acc_member = req.body.acc_mem;
    var acc_number = req.body.acc_num;
    var acc_typ = req.body.acc_typ;
    var acc_status = req.body.acc_stat;
    var acc_scheme = req.body.acc_schm;
    var acc_cat_typ = req.body.acc_cat_typ;
    var acc_cur_typ = req.body.acc_curr_typ;
    var acc_code = req.body.acc_code;
    var acc_open_date = req.body.acc_openg_date;
    var acc_open_amt = req.body.acc_opng_amt;
    var acc_cur_bal = req.body.acc_curr_bal;
    var acc_intrst_acct = req.body.acc_intrst_on_acct;
    var acc_has_chqbk = req.body.acc_has_chqbok;
    var acc_sal_acct = req.body.acc_is_sal_acct;
    var acc_count_pay = req.body.acc_count_pay;
    var acc_oprn_instrn = req.body.acc_oprn_instrn;
    var acc_lst_trnscn_date = req.body.acc_lst_trnscn_date;
    var acc_intdc_det = req.body.acc_intdc_det;
    var acc_intdc_kwn_perd = req.body.acc_intdc_kwn_perd;
    var acc_is_main = req.body.acc_is_main;
    var acc_desc = req.body.acc_desc;
    console.log("Accounts",acc_shortname, acc_name, acc_member, acc_number, acc_typ, acc_status, acc_scheme, acc_cat_typ, acc_cur_typ, acc_code, acc_open_date, acc_open_amt, acc_cur_bal, acc_intrst_acct, acc_has_chqbk, acc_sal_acct, acc_count_pay, acc_oprn_instrn, acc_lst_trnscn_date, acc_intdc_det, acc_intdc_kwn_perd, acc_is_main, acc_desc);

    //Nominee
    var nom_name = req.body.acc_nom_name;
    var nom_fatr_nme = req.body.acc_nom_fatr_nme;
    var nom_reltn = req.body.acc_nom_reltn;
    var nom_gen = req.body.acc_nom_gen;
    var nom_occptn = req.body.acc_nom_occptn;
    var nom_dob = req.body.acc_nom_dob;
    var nom_addr_typ = req.body.acc_nom_addr_typ;
    var nom_addr_lin = req.body.acc_nom_addr_lin;
    var nom_lnd_mrk = req.body.acc_nom_lnd_mrk;
    var nom_vil = req.body.acc_nom_vil;
    var nom_pncht_mdl = req.body.acc_nom_pncht_mdl;
    var nom_city = JSON.parse(req.body.acc_nom_city).city;
    console.log(nom_city);
    var nom_country = req.body.acc_nom_country;
    var nom_state = req.body.acc_nom_state;
    var nom_dist = req.body.acc_nom_dist;
    var nom_postl = req.body.acc_nom_postl;
    var nom_phn_num = req.body.acc_nom_phn_num;
    var nom_is_socty_mem = req.body.acc_nom_is_socty_mem;
    var nom_acct_num = req.body.acc_nom_acct_num;
    var nom_adhr_crd_num = req.body.acc_nom_adhr_crd_num;
    var nom_isminor = req.body.acc_nom_isminor;
console.log("Nominee",nom_name, nom_fatr_nme, nom_reltn, nom_gen, nom_occptn, nom_dob, nom_addr_typ, nom_addr_lin, nom_lnd_mrk, nom_vil, nom_pncht_mdl,nom_city, nom_country, nom_dist, nom_state, nom_country, nom_postl, nom_phn_num, nom_is_socty_mem, nom_acct_num, nom_adhr_crd_num, nom_isminor);

//Guardian
if(nom_isminor=='Yes'){
console.log("getting into IF condition")
    var gurdian_name = req.body.acc_gurdian_name;
    var gurdian_fath_name = req.body.acc_gurdian_fath_name;
    var gurdian_reltn = req.body.acc_gurdian_reltn;
    var gurdian_gender = req.body.acc_gurdian_gender;
    var gurdian_occupation = req.body.acc_gurdian_occupation;
    var gurdian_dob = req.body.acc_gurdian_dob;
    var gurdian_minr_acoper_by = req.body.acc_gurdian_minr_acoper_by;
    var gurdian_addr_typ = req.body.acc_gurdian_addr_typ;
    var gurdian_addr_line = req.body.acc_gurdian_addr_line;
    var gurdian_landmark = req.body.acc_gurdian_landmark;
    var gurdian_village = req.body.acc_gurdian_village;
    var gurdian_pncht_mdl = req.body.acc_gurdian_pncht_mdl;
    var gurdian_city = JSON.parse(req.body.acc_gurdian_city).city;
    console.log(gurdian_city);
    var gurdian_dist = req.body.acc_gurdian_dist;
    var gurdian_state = req.body.acc_gurdian_state;
    var gurdian_country = req.body.acc_gurdian_country;
    var gurdian_phn_num = req.body.acc_gurdian_phn_num;
    var gurdian_postl = req.body.acc_gurdian_postl;
    var gurdian_addr_ste = req.body.acc_gurdian_addr_ste;
    var gurdian_guar_typ = req.body.acc_gurdian_guar_typ;
    var gurdian_is_socty_mem = req.body.acc_gurdian_is_socty_mem;
    var gurdian_is_acc_holder = req.body.acc_gurdian_is_acc_holder;
console.log("Guardian",gurdian_name, gurdian_fath_name, gurdian_reltn, gurdian_gender, gurdian_occupation, gurdian_dob, gurdian_minr_acoper_by, gurdian_addr_typ, gurdian_addr_line, gurdian_landmark, gurdian_village, gurdian_pncht_mdl, gurdian_city, gurdian_dist, gurdian_state, gurdian_country, gurdian_phn_num, gurdian_postl, gurdian_addr_ste, gurdian_guar_typ, gurdian_is_socty_mem, gurdian_is_acc_holder);
}

else{
    console.log("getting into else condition")
    var gurdian_name = null;
    var gurdian_fath_name = null;
    var gurdian_reltn = null;
    var gurdian_gender = null;
    var gurdian_occupation = null;
    var gurdian_dob = null;
    var gurdian_minr_acoper_by = null;
    var gurdian_addr_typ = null;
    var gurdian_addr_line = null;
    var gurdian_landmark = null;
    var gurdian_village = null;
    var gurdian_pncht_mdl = null;
    var gurdian_city = null;
    var gurdian_dist = null;
    var gurdian_state = null;
    var gurdian_country = null;
    var gurdian_phn_num = null;
    var gurdian_postl = null;
    var gurdian_addr_ste = null;
    var gurdian_guar_typ = null;
    var gurdian_is_socty_mem = null;
    var gurdian_is_acc_holder = null;
console.log("Guardian",gurdian_name, gurdian_fath_name, gurdian_reltn, gurdian_gender, gurdian_occupation, gurdian_dob, gurdian_minr_acoper_by, gurdian_addr_typ, gurdian_addr_line, gurdian_landmark, gurdian_village, gurdian_pncht_mdl, gurdian_city, gurdian_dist, gurdian_state, gurdian_country, gurdian_phn_num, gurdian_postl, gurdian_addr_ste, gurdian_guar_typ, gurdian_is_socty_mem, gurdian_is_acc_holder);
}
//Joint Holder Details
    var jnt_hldr_has_jnt_hldr_1 = req.body.acc_jnt_hldr_has_jnt_hldr_1;
    var jnt_hldr_jnt_hldr_1 = req.body.acc_jnt_hldr_jnt_hldr_1;
    var jnt_hldr_has_jnt_hldr_2 = req.body.acc_jnt_hldr_has_jnt_hldr_2;
    var jnt_hldr_jnt_hldr_2 = req.body.acc_jnt_hldr_jnt_hldr_2;
    var jnt_hldr_has_jnt_hldr_3 = req.body.acc_jnt_hldr_has_jnt_hldr_3;
    var jnt_hldr_jnt_hldr_3 = req.body.acc_jnt_hldr_jnt_hldr_3;
    var jnt_hldr_has_jnt_hldr_4 = req.body.acc_jnt_hldr_has_jnt_hldr_4;
    var jnt_hldr_jnt_hldr_4 = req.body.acc_jnt_hldr_jnt_hldr_4;
console.log("Joint Holder Details",jnt_hldr_has_jnt_hldr_1, jnt_hldr_jnt_hldr_1, jnt_hldr_has_jnt_hldr_2, jnt_hldr_jnt_hldr_2, jnt_hldr_has_jnt_hldr_3, jnt_hldr_jnt_hldr_3, jnt_hldr_has_jnt_hldr_4, jnt_hldr_jnt_hldr_4);

//Authorization
    var aut_acc_staff = req.body.acc_staff;
    var aut_acc_approval_date = req.body.acc_approval_date;
    var aut_acc_dly_app_state = req.body.acc_dly_app_state;
console.log("Authorization",aut_acc_staff, aut_acc_approval_date, aut_acc_dly_app_state);


    var acc_id;

    pgdbconnect.query("select * from account_details where ad_ch_del_flg=$1",['N'], function(err,resl){
    if(resl.rowCount==0){
        acc_id=1;
                
    pgdbconnect.query("insert into account_details(ad_ch_acct_id, ad_ch_short_name, ad_ch_name, ad_ch_member, ad_n_acct_number, ad_ch_acct_type, ad_ch_acct_status, ad_ch_acct_scheme, ad_ch_category_type, ad_ch_current_type, ad_ch_code, ad_d_opn_date, ad_n_opn_amt, ad_n_current_bal, ad_n_int_acct, ad_ch_has_chq_book, ad_ch_is_sal_acct, ad_ch_counter_pay, ad_ch_operation_insructions, ad_d_last_tran_date, ad_ch_introducer_details, ad_ch_intro_known_period, ad_ch_is_main, ad_ch_description, ad_ch_staff_name, ad_ch_approval_state, ad_d_approval_date, ad_ch_del_flg) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)",[acc_id,acc_shortname,acc_name,acc_member,acc_number,acc_typ,acc_status, acc_scheme, acc_cat_typ, acc_cur_typ, acc_code, acc_open_date, acc_open_amt, acc_cur_bal, acc_intrst_acct, acc_has_chqbk, acc_sal_acct, acc_count_pay, acc_oprn_instrn, acc_lst_trnscn_date, acc_intdc_det, acc_intdc_kwn_perd, acc_is_main, acc_desc, aut_acc_staff, aut_acc_dly_app_state, aut_acc_approval_date, 'N'], function(err,rslt){
        if(err) throw err;
        console.log("Account Details",rslt);

    pgdbconnect.query("insert into account_nominee_details(and_ch_nominee_id, and_ch_name, and_ch_father_name, and_ch_relation, and_ch_gender, and_ch_occupation, and_d_date_of_birth, and_ch_addr_type, and_ch_addr_line, and_ch_land_mark, and_ch_panchayat_mandal, and_ch_village, and_ch_city, and_ch_country, and_ch_state, and_ch_district, and_n_postal_code, and_n_ph_number, and_ch_is_society_num, and_ch_is_minor, and_ch_acct_num, and_n_nominee_aadhar_num, and_ch_del_flg)values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)",[acc_id, nom_name, nom_fatr_nme, nom_reltn, nom_gen, nom_occptn, nom_dob, nom_addr_typ, nom_addr_lin, nom_lnd_mrk, nom_pncht_mdl, nom_vil, nom_city, nom_country, nom_state, nom_dist, nom_postl, nom_phn_num, nom_is_socty_mem, nom_isminor, nom_acct_num, nom_adhr_crd_num, 'N'],  function(err,rslt1){
        if(err) throw err;
        console.log("Nominee Details",rslt1);
    
    pgdbconnect.query("insert into account_guardian_details(agd_ch_guard_id, agd_ch_acct_name, agd_ch_father_name, agd_ch_relation, agd_ch_gender, agd_ch_occupation, agd_d_date_of_birth, agd_ch_minor_acct_operated_by, agd_ch_address_type, agd_ch_address_line, agd_ch_landmark, agd_ch_panchayat_mandal, ahd_ch_village, ahd_ch_city, agd_ch_country, agd_ch_state, agd_ch_district, agd_n_postal_code, agd_n_ph_number, agd_ch_addr_state, agd_ch_guardian_type, agd_ch_is_society_mem, agd_ch_is_acct_hldr, agd_ch_del_flg)values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)",[acc_id, gurdian_name, gurdian_fath_name, gurdian_reltn, gurdian_gender, gurdian_occupation, gurdian_dob, gurdian_minr_acoper_by, gurdian_addr_typ, gurdian_addr_line, gurdian_landmark, gurdian_pncht_mdl, gurdian_village, gurdian_city, gurdian_country, gurdian_state, gurdian_dist, gurdian_postl, gurdian_phn_num, gurdian_addr_ste, gurdian_guar_typ, gurdian_is_socty_mem, gurdian_is_acc_holder, 'N'], function(err,rslt2){
        if(err) throw err;
    console.log("Guardian Details",rslt2);

    pgdbconnect.query("insert into account_joint_holder_details(ajh_ch_acct_id, ajh_ch_join_hldr1_yes_no, ajh_ch_joint_hldr_name1, ajh_ch_join_hldr2_yes_no, ajh_ch_joint_hldr_name2, ajh_ch_join_hldr3_yes_no, ajh_ch_joint_hldr_name3, ajh_ch_join_hldr4_yes_no, ajh_ch_joint_hldr_name4, ajg_ch_del_flg)values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",[acc_id, jnt_hldr_has_jnt_hldr_1, jnt_hldr_jnt_hldr_1, jnt_hldr_has_jnt_hldr_2, jnt_hldr_jnt_hldr_2, jnt_hldr_has_jnt_hldr_3, jnt_hldr_jnt_hldr_3, jnt_hldr_has_jnt_hldr_4, jnt_hldr_jnt_hldr_4, 'N'], function(err,rslt3){
        if(err) throw err; 
        console.log("Joint Holder details",rslt3)

        pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
       //console.log("result1 is", result1);

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
   {
       if(err) throw err;
       //console.log("result2 is", result2);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
   {
       if(err) throw err;
        
                //flash messege
                req.flash('success_msg', 'Data inserted successfully');
                res.locals.message=req.flash();


                res.render('accountsModule/accounts_add',{
                    pagetype:divtype,
                    acc_cities:result1.rows,
                    acc_states:result2.rows,
                    acc_countries:result3.rows
                });
   });
});
   });
            });
        });
    });
});
}

else
{
    pgdbconnect.query("select max(ad_ch_acct_id) from account_details", function(err,res4) {
        console.log("max account details",res4)
        console.log("account check",res4.rows[0].max)

        acc_id=parseInt(res4.rows[0].max)+1;
        console.log("account", acc_id);
        
        pgdbconnect.query("insert into account_details(ad_ch_acct_id, ad_ch_short_name, ad_ch_name, ad_ch_member, ad_n_acct_number, ad_ch_acct_type, ad_ch_acct_status, ad_ch_acct_scheme, ad_ch_category_type, ad_ch_current_type, ad_ch_code, ad_d_opn_date, ad_n_opn_amt, ad_n_current_bal, ad_n_int_acct, ad_ch_has_chq_book, ad_ch_is_sal_acct, ad_ch_counter_pay, ad_ch_operation_insructions, ad_d_last_tran_date, ad_ch_introducer_details, ad_ch_intro_known_period, ad_ch_is_main, ad_ch_description, ad_ch_staff_name, ad_ch_approval_state, ad_d_approval_date, ad_ch_del_flg) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)",[acc_id,acc_shortname,acc_name,acc_member,acc_number,acc_typ,acc_status, acc_scheme, acc_cat_typ, acc_cur_typ, acc_code, acc_open_date, acc_open_amt, acc_cur_bal, acc_intrst_acct, acc_has_chqbk, acc_sal_acct, acc_count_pay, acc_oprn_instrn, acc_lst_trnscn_date, acc_intdc_det, acc_intdc_kwn_perd, acc_is_main, acc_desc, aut_acc_staff, aut_acc_dly_app_state, aut_acc_approval_date, 'N'], function(err,rslt){
            if(err) throw err;
            console.log("Account Details",rslt);
    
        pgdbconnect.query("insert into account_nominee_details(and_ch_nominee_id, and_ch_name, and_ch_father_name, and_ch_relation, and_ch_gender, and_ch_occupation, and_d_date_of_birth, and_ch_addr_type, and_ch_addr_line, and_ch_land_mark, and_ch_panchayat_mandal, and_ch_village, and_ch_city, and_ch_country, and_ch_state, and_ch_district, and_n_postal_code, and_n_ph_number, and_ch_is_society_num, and_ch_is_minor, and_ch_acct_num, and_n_nominee_aadhar_num, and_ch_del_flg)values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)",[acc_id, nom_name, nom_fatr_nme, nom_reltn, nom_gen, nom_occptn, nom_dob, nom_addr_typ, nom_addr_lin, nom_lnd_mrk, nom_pncht_mdl, nom_vil, nom_city, nom_country, nom_state, nom_dist, nom_postl, nom_phn_num, nom_is_socty_mem, nom_isminor, nom_acct_num, nom_adhr_crd_num, 'N'],  function(err,rslt1){
            if(err) throw err;
            console.log("Nominee Details",rslt1);
        
        pgdbconnect.query("insert into account_guardian_details(agd_ch_guard_id, agd_ch_acct_name, agd_ch_father_name, agd_ch_relation, agd_ch_gender, agd_ch_occupation, agd_d_date_of_birth, agd_ch_minor_acct_operated_by, agd_ch_address_type, agd_ch_address_line, agd_ch_landmark, agd_ch_panchayat_mandal, ahd_ch_village, ahd_ch_city, agd_ch_country, agd_ch_state, agd_ch_district, agd_n_postal_code, agd_n_ph_number, agd_ch_addr_state, agd_ch_guardian_type, agd_ch_is_society_mem, agd_ch_is_acct_hldr, agd_ch_del_flg)values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)",[acc_id, gurdian_name, gurdian_fath_name, gurdian_reltn, gurdian_gender, gurdian_occupation, gurdian_dob, gurdian_minr_acoper_by, gurdian_addr_typ, gurdian_addr_line, gurdian_landmark, gurdian_pncht_mdl, gurdian_village, gurdian_city, gurdian_country, gurdian_state, gurdian_dist, gurdian_postl, gurdian_phn_num, gurdian_addr_ste, gurdian_guar_typ, gurdian_is_socty_mem, gurdian_is_acc_holder, 'N'], function(err,rslt2){
            if(err) throw err;
        console.log("Guardian Details",rslt2);
    
        pgdbconnect.query("insert into account_joint_holder_details(ajh_ch_acct_id, ajh_ch_join_hldr1_yes_no, ajh_ch_joint_hldr_name1, ajh_ch_join_hldr2_yes_no, ajh_ch_joint_hldr_name2, ajh_ch_join_hldr3_yes_no, ajh_ch_joint_hldr_name3, ajh_ch_join_hldr4_yes_no, ajh_ch_joint_hldr_name4, ajg_ch_del_flg)values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",[acc_id, jnt_hldr_has_jnt_hldr_1, jnt_hldr_jnt_hldr_1, jnt_hldr_has_jnt_hldr_2, jnt_hldr_jnt_hldr_2, jnt_hldr_has_jnt_hldr_3, jnt_hldr_jnt_hldr_3, jnt_hldr_has_jnt_hldr_4, jnt_hldr_jnt_hldr_4, 'N'], function(err,rslt3){
            if(err) throw err; 
            console.log("Joint Holder details",rslt3)

        
            pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
   {
       if(err) throw err;
       //console.log("result1 is", result1);

   pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
   {
       if(err) throw err;
       //console.log("result2 is", result2);

   pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
   {
       if(err) throw err;
        
                //flash messege
                req.flash('success_msg', 'Data inserted successfully');
                res.locals.message=req.flash();


                res.render('accountsModule/accounts_add',{
                    pagetype:divtype,
                    acc_cities:result1.rows,
                    acc_states:result2.rows,
                    acc_countries:result3.rows
                });

            });
        });
    });
});
        });
    });
});
    });
}
    });
});

//EDIT
router.post('/account_edit',function(req,res){
    var divtype="EDIT";
    console.log("DIV TYPE",divtype);

    var edit_account= req.body.edit_account;
    console.log("cheque id to edit populate",edit_account)

    pgdbconnect.query("select * from account_details where ad_ch_acct_id = $1 order by ad_ch_acct_id",[edit_account],function(err,rlt)
    {
        if(err) throw err;
        console.log("Editing Account");
        ed_acc_shortname = rlt.rows[0].ad_ch_short_name;
        ed_acc_name = rlt.rows[0].ad_ch_name;
        ed_acc_member = rlt.rows[0].ad_ch_member;
        ed_acc_number = rlt.rows[0].ad_n_acct_number;
        ed_acc_typ = rlt.rows[0].ad_ch_acct_type;
        ed_acc_status = rlt.rows[0].ad_ch_acct_status;
        ed_acc_scheme = rlt.rows[0].ad_ch_acct_scheme;
        ed_acc_cat_typ = rlt.rows[0].ad_ch_category_type;
        ed_acc_cur_typ = rlt.rows[0].ad_ch_current_type;
        ed_acc_code = rlt.rows[0].ad_ch_code;
        ed_acc_open_date = rlt.rows[0].ad_d_opn_date;
        ed_acc_open_amt = rlt.rows[0].ad_n_opn_amt;
        ed_acc_cur_bal = rlt.rows[0].ad_n_current_bal;
        ed_acc_intrst_acct = rlt.rows[0].ad_n_int_acct;
        ed_acc_has_chqbk = rlt.rows[0].ad_ch_has_chq_book;
        ed_acc_sal_acct = rlt.rows[0].ad_ch_is_sal_acct;
        ed_acc_count_pay = rlt.rows[0].ad_ch_counter_pay;
        ed_acc_oprn_instrn = rlt.rows[0].ad_ch_operation_insructions;
        ed_acc_lst_trnscn_date = rlt.rows[0].ad_d_last_tran_date;
        ed_acc_intdc_det = rlt.rows[0].ad_ch_introducer_details;
        ed_acc_intdc_kwn_perd = rlt.rows[0].ad_ch_intro_known_period;
        ed_acc_is_main = rlt.rows[0].ad_ch_is_main;
        ed_acc_desc = rlt.rows[0].ad_ch_description;
        ed_aut_acc_staff = rlt.rows[0].ad_ch_staff_name;
        ed_aut_acc_dly_app_state = rlt.rows[0].ad_ch_approval_state;
         ed_aut_acc_approval_date = rlt.rows[0].ad_d_approval_date;



        pgdbconnect.query("select * from account_nominee_details where and_ch_nominee_id = $1 order by and_ch_nominee_id",[edit_account],function(err,rlt1)
{
    if(err) throw err;
    console.log("Editing Nominee");
    ed_nom_name = rlt1.rows[0].and_ch_name;
    ed_nom_fatr_nme = rlt1.rows[0].and_ch_father_name;
    ed_nom_reltn = rlt1.rows[0].and_ch_relation;
    ed_nom_gen = rlt1.rows[0].and_ch_gender;
    ed_nom_occptn = rlt1.rows[0].and_ch_occupation;
    ed_nom_dob = rlt1.rows[0].and_d_date_of_birth;
    ed_nom_addr_typ = rlt1.rows[0].and_ch_addr_type;
    ed_nom_addr_lin = rlt1.rows[0].and_ch_addr_line;
    ed_nom_lnd_mrk = rlt1.rows[0].and_ch_land_mark;
    ed_nom_vil = rlt1.rows[0].and_ch_village;
    ed_nom_pncht_mdl = rlt1.rows[0].and_ch_panchayat_mandal;
    ed_nom_city = rlt1.rows[0].and_ch_city;
    ed_nom_country = rlt1.rows[0].and_ch_country;
    ed_nom_state = rlt1.rows[0].and_ch_state;
    ed_nom_dist = rlt1.rows[0].and_ch_district;
    ed_nom_postl = rlt1.rows[0].and_n_postal_code;
    ed_nom_phn_num = rlt1.rows[0].and_n_ph_number;
    ed_nom_is_socty_mem = rlt1.rows[0].and_ch_is_society_num;
    ed_nom_acct_num = rlt1.rows[0].and_ch_acct_num;
    ed_nom_adhr_crd_num = rlt1.rows[0].and_n_nominee_aadhar_num;
    ed_nom_isminor = rlt1.rows[0].and_ch_is_minor;
    console.log("ed_nom_isminor guardian",ed_nom_isminor)
    pgdbconnect.query("select * from account_guardian_details where agd_ch_guard_id = $1 order by agd_ch_guard_id",[edit_account],function(err,rlt2)
    {

        if(err) throw err;
        console.log("Editing Guardian");
        ed_gurdian_name = rlt2.rows[0].agd_ch_acct_name;
        ed_gurdian_fath_name = rlt2.rows[0].agd_ch_father_name;
        ed_gurdian_reltn = rlt2.rows[0].agd_ch_relation;
        ed_gurdian_gender = rlt2.rows[0].agd_ch_gender;
        console.log("gender guardian",ed_gurdian_gender)
        ed_gurdian_occupation = rlt2.rows[0].agd_ch_occupation;
        ed_gurdian_dob = rlt2.rows[0].agd_d_date_of_birth;
        ed_gurdian_minr_acoper_by = rlt2.rows[0].agd_ch_minor_acct_operated_by;
        ed_gurdian_addr_typ = rlt2.rows[0].agd_ch_address_type;
        ed_gurdian_addr_line = rlt2.rows[0].agd_ch_address_line;
        ed_gurdian_landmark = rlt2.rows[0].agd_ch_landmark;
        ed_gurdian_village = rlt2.rows[0].ahd_ch_village;
        ed_gurdian_pncht_mdl = rlt2.rows[0].agd_ch_panchayat_mandal;
        ed_gurdian_city = rlt2.rows[0].ahd_ch_city;
        ed_gurdian_dist = rlt2.rows[0].agd_ch_district;
        ed_gurdian_state = rlt2.rows[0].agd_ch_state;
        ed_gurdian_country = rlt2.rows[0].agd_ch_country;
        ed_gurdian_phn_num = rlt2.rows[0].agd_n_ph_number;
        ed_gurdian_postl = rlt2.rows[0].agd_n_postal_code;
        ed_gurdian_addr_ste = rlt2.rows[0].agd_ch_addr_state;
        ed_gurdian_guar_typ = rlt2.rows[0].agd_ch_guardian_type;
        ed_gurdian_is_socty_mem = rlt2.rows[0].agd_ch_is_society_mem;
        ed_gurdian_is_acc_holder = rlt2.rows[0].agd_ch_is_acct_hldr;

        pgdbconnect.query("select * from account_joint_holder_details where ajh_ch_acct_id = $1 order by ajh_ch_acct_id",[edit_account],function(err,rlt3)
        {
            if(err) throw err;
            console.log("Editing Joint Holder");
            ed_jnt_hldr_has_jnt_hldr_1 = rlt3.rows[0].ajh_ch_join_hldr1_yes_no;
            ed_jnt_hldr_jnt_hldr_1 = rlt3.rows[0].ajh_ch_joint_hldr_name1;
            ed_jnt_hldr_has_jnt_hldr_2 = rlt3.rows[0].ajh_ch_join_hldr2_yes_no;
            ed_jnt_hldr_jnt_hldr_2 = rlt3.rows[0].ajh_ch_joint_hldr_name2;
            ed_jnt_hldr_has_jnt_hldr_3 = rlt3.rows[0].ajh_ch_join_hldr3_yes_no;
            ed_jnt_hldr_jnt_hldr_3 = rlt3.rows[0].ajh_ch_joint_hldr_name3;
            ed_jnt_hldr_has_jnt_hldr_4 = rlt3.rows[0].ajh_ch_join_hldr4_yes_no;
            ed_jnt_hldr_jnt_hldr_4 = rlt3.rows[0].ajh_ch_joint_hldr_name4;



        pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
        {
       if(err) throw err;
       //console.log("result1 is", result1);

        pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
        {
       if(err) throw err;
       //console.log("result2 is", result2);

        pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
        {
       if(err) throw err;
       //console.log("result3 is", result3);


            res.render('accountsModule/accounts_add',{
                acc_cities:result1.rows,
                acc_states:result2.rows,
                acc_countries:result3.rows,

            // Account
            edit_account:edit_account,
            ed_acc_shortname:ed_acc_shortname,
            ed_acc_name:ed_acc_name,
            ed_acc_member:ed_acc_member,
            ed_acc_number:ed_acc_number,
            ed_acc_typ:ed_acc_typ,
            ed_acc_status:ed_acc_status,
            ed_acc_scheme:ed_acc_scheme,
            ed_acc_cat_typ:ed_acc_cat_typ,
            ed_acc_cur_typ:ed_acc_cur_typ,
            ed_acc_code:ed_acc_code,
            ed_acc_open_date:ed_acc_open_date,
            ed_acc_open_amt:ed_acc_open_amt,
            ed_acc_cur_bal:ed_acc_cur_bal,
            ed_acc_intrst_acct:ed_acc_intrst_acct,
            ed_acc_has_chqbk:ed_acc_has_chqbk,
            ed_acc_sal_acct:ed_acc_sal_acct,
            ed_acc_count_pay:ed_acc_count_pay,
            ed_acc_oprn_instrn:ed_acc_oprn_instrn,
            ed_acc_lst_trnscn_date:ed_acc_lst_trnscn_date,
            ed_acc_intdc_det:ed_acc_intdc_det,
            ed_acc_intdc_kwn_perd:ed_acc_intdc_kwn_perd,
            ed_acc_is_main:ed_acc_is_main,
            ed_acc_desc:ed_acc_desc,
            ed_aut_acc_staff:ed_aut_acc_staff,
            ed_aut_acc_approval_date:ed_aut_acc_approval_date,
            ed_aut_acc_dly_app_state:ed_aut_acc_dly_app_state,

            //Nominee
            ed_nom_name:ed_nom_name,
            ed_nom_fatr_nme:ed_nom_fatr_nme,
            ed_nom_reltn:ed_nom_reltn,
            ed_nom_gen:ed_nom_gen,
            ed_nom_occptn:ed_nom_occptn,
            ed_nom_dob:ed_nom_dob,
            ed_nom_addr_typ:ed_nom_addr_typ,
            ed_nom_addr_lin:ed_nom_addr_lin,
            ed_nom_lnd_mrk:ed_nom_lnd_mrk,
            ed_nom_vil:ed_nom_vil,
            ed_nom_pncht_mdl:ed_nom_pncht_mdl,
            ed_nom_city:ed_nom_city,
            ed_nom_country:ed_nom_country,
            ed_nom_state:ed_nom_state,
            ed_nom_dist:ed_nom_dist,
            ed_nom_postl:ed_nom_postl,
            ed_nom_phn_num:ed_nom_phn_num,
            ed_nom_is_socty_mem:ed_nom_is_socty_mem,
            ed_nom_acct_num:ed_nom_acct_num,
            ed_nom_adhr_crd_num:ed_nom_adhr_crd_num,
            ed_nom_isminor:ed_nom_isminor,

            //Guardian
            ed_gurdian_name:ed_gurdian_name,
            ed_gurdian_fath_name:ed_gurdian_fath_name,
            ed_gurdian_reltn:ed_gurdian_reltn,
            ed_gurdian_gender:ed_gurdian_gender,
            ed_gurdian_occupation:ed_gurdian_occupation,
            ed_gurdian_dob:ed_gurdian_dob,
            ed_gurdian_minr_acoper_by:ed_gurdian_minr_acoper_by,
            ed_gurdian_addr_typ:ed_gurdian_addr_typ,
            ed_gurdian_addr_line:ed_gurdian_addr_line,
            ed_gurdian_landmark:ed_gurdian_landmark,
            ed_gurdian_village:ed_gurdian_village,
            ed_gurdian_pncht_mdl:ed_gurdian_pncht_mdl,
            ed_gurdian_city:ed_gurdian_city,
            ed_gurdian_dist:ed_gurdian_dist,
            ed_gurdian_state:ed_gurdian_state,
            ed_gurdian_country:ed_gurdian_country,
            ed_gurdian_phn_num:ed_gurdian_phn_num,
            ed_gurdian_postl:ed_gurdian_postl,
            ed_gurdian_addr_ste:ed_gurdian_addr_ste,
            ed_gurdian_guar_typ:ed_gurdian_guar_typ,
            ed_gurdian_is_socty_mem:ed_gurdian_is_socty_mem,
            ed_gurdian_is_acc_holder:ed_gurdian_is_acc_holder,

            //Joint Holder Account
            ed_jnt_hldr_has_jnt_hldr_1:ed_jnt_hldr_has_jnt_hldr_1,
            ed_jnt_hldr_jnt_hldr_1:ed_jnt_hldr_jnt_hldr_1,
            ed_jnt_hldr_has_jnt_hldr_2:ed_jnt_hldr_has_jnt_hldr_2,
            ed_jnt_hldr_jnt_hldr_2:ed_jnt_hldr_jnt_hldr_2,
            ed_jnt_hldr_has_jnt_hldr_3:ed_jnt_hldr_has_jnt_hldr_3,
            ed_jnt_hldr_jnt_hldr_3:ed_jnt_hldr_jnt_hldr_3,
            ed_jnt_hldr_has_jnt_hldr_4:ed_jnt_hldr_has_jnt_hldr_4,
            ed_jnt_hldr_jnt_hldr_4:ed_jnt_hldr_jnt_hldr_4,
            pagetype:divtype,
            edit_account:edit_account,
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


//UPDATE
router.post('/account_update',function(req,res){

console.log("Updating")
    var acc_edit_ed= req.body.acc_edit_ed;
    console.log("cheque id to edit on save",acc_edit_ed)

    var up_acc_shortname =  req.body.acc_shrt_nme_ed;
    console.log("short name",up_acc_shortname);
    var up_acc_name =  req.body.acc_nme_ed;
    var up_acc_member =  req.body.acc_mem_ed;
    var up_acc_number =  req.body.acc_num_ed;
    var up_acc_typ =  req.body.acc_typ_ed;
    var up_acc_status =  req.body.acc_stat_ed;
    var up_acc_scheme =  req.body.acc_schm_ed;
    var up_acc_cat_typ =  req.body.acc_cat_typ_ed;
    var up_acc_cur_typ =  req.body.acc_curr_typ_ed;
    var up_acc_code =  req.body.acc_code_ed;
    var up_acc_open_date =  req.body.acc_openg_date_ed;
    var up_acc_open_amt =  req.body.acc_opng_amt_ed;
    var up_acc_cur_bal =  req.body.acc_curr_bal_ed;
    var up_acc_intrst_acct =  req.body.acc_intrst_on_acct_ed;
    var up_acc_has_chqbk =  req.body.acc_has_chqbok_ed;
    var up_acc_sal_acct =  req.body.acc_is_sal_acct_ed;
    var up_acc_count_pay =  req.body.acc_count_pay_ed;
    var up_acc_oprn_instrn =  req.body.acc_oprn_instrn_ed;
    var up_acc_lst_trnscn_date =  req.body.acc_lst_trnscn_date_ed;
    var up_acc_intdc_det =  req.body.acc_intdc_det_ed;
    var up_acc_intdc_kwn_perd =  req.body.acc_intdc_kwn_perd_ed;
    var up_acc_is_main =  req.body.acc_is_main_ed;
    var up_acc_desc =  req.body.acc_desc_ed;
	var up_aut_acc_staff =  req.body.acc_staff_ed;
    var up_aut_acc_approval_date =  req.body.acc_approval_date_ed;
    var up_aut_acc_dly_app_state =  req.body.acc_dly_app_state_ed;

    var up_acc_id = req.body.acc_edit_ed;

    pgdbconnect.query("update account_details set ad_ch_short_name=$1, ad_ch_name=$2, ad_ch_member=$3, ad_n_acct_number=$4, ad_ch_acct_type=$5, ad_ch_acct_status=$6, ad_ch_acct_scheme=$7, ad_ch_category_type=$8, ad_ch_current_type=$9, ad_ch_code=$10, ad_d_opn_date=$11, ad_n_opn_amt=$12, ad_n_current_bal=$13, ad_n_int_acct=$14, ad_ch_has_chq_book=$15, ad_ch_is_sal_acct=$16, ad_ch_counter_pay=$17, ad_ch_operation_insructions=$18, ad_d_last_tran_date=$19, ad_ch_introducer_details=$20, ad_ch_intro_known_period=$21, ad_ch_is_main=$22, ad_ch_description=$23, ad_ch_staff_name=$24, ad_d_approval_date=$25 , ad_ch_approval_state=$26 where ad_ch_acct_id=$27",[up_acc_shortname,up_acc_name,up_acc_member,up_acc_number,up_acc_typ,up_acc_status,up_acc_scheme,up_acc_cat_typ,up_acc_cur_typ,up_acc_code,up_acc_open_date,up_acc_open_amt,up_acc_cur_bal,up_acc_intrst_acct,up_acc_has_chqbk,up_acc_sal_acct,up_acc_count_pay,up_acc_oprn_instrn,up_acc_lst_trnscn_date,up_acc_intdc_det,up_acc_intdc_kwn_perd,up_acc_is_main,up_acc_desc,up_aut_acc_staff,up_aut_acc_approval_date,up_aut_acc_dly_app_state,up_acc_id],function(err,rst)
    {
        console.log("update0",rst)
if(err) throw err;
        var up_nom_name = req.body.acc_nom_name_ed;
        var up_nom_fatr_nme = req.body.acc_nom_fatr_nme_ed;
        var up_nom_reltn = req.body.acc_nom_reltn_ed;
        var up_nom_gen = req.body.acc_nom_gen_ed;
        var up_nom_occptn = req.body.acc_nom_occptn_ed;
        var up_nom_dob = req.body.acc_nom_dob_ed;
        var up_nom_addr_typ = req.body.acc_nom_addr_typ_ed;
        var up_nom_addr_lin = req.body.acc_nom_addr_lin_ed;
        var up_nom_lnd_mrk = req.body.acc_nom_lnd_mrk_ed;
        var up_nom_vil = req.body.acc_nom_vil_ed;
        var up_nom_pncht_mdl = req.body.acc_nom_pncht_mdl_ed;
        var up_nom_city = JSON.parse(req.body.acc_nom_city_ed).city;
        console.log(up_nom_city);
        var up_nom_country = req.body.acc_nom_country_ed;
        var up_nom_state = req.body.acc_nom_state_ed;
        var up_nom_dist = req.body.acc_nom_dist_ed;
        var up_nom_postl = req.body.acc_nom_postl_ed;
        var up_nom_phn_num = req.body.acc_nom_phn_num_ed;
        var up_nom_is_socty_mem = req.body.acc_nom_is_socty_mem_ed;
        var up_nom_acct_num = req.body.acc_nom_acct_num_ed;
        var up_nom_adhr_crd_num = req.body.acc_nom_adhr_crd_num_ed;
        var up_nom_isminor = req.body.acc_nom_isminor_ed;

        pgdbconnect.query("update account_nominee_details set and_ch_name=$1, and_ch_father_name=$2, and_ch_relation=$3, and_ch_gender=$4, and_ch_occupation=$5, and_d_date_of_birth=$6, and_ch_addr_type=$7, and_ch_addr_line=$8, and_ch_land_mark=$9, and_ch_panchayat_mandal=$10, and_ch_village=$11, and_ch_city=$12, and_ch_country=$13, and_ch_state=$14, and_ch_district=$15, and_n_postal_code=$16, and_n_ph_number=$17, and_ch_is_society_num=$18, and_ch_is_minor=$19, and_ch_acct_num=$20, and_n_nominee_aadhar_num=$21 where and_ch_nominee_id = $22",[up_nom_name,up_nom_fatr_nme,up_nom_reltn,up_nom_gen,up_nom_occptn,up_nom_dob,up_nom_addr_typ,up_nom_addr_lin,up_nom_lnd_mrk,up_nom_pncht_mdl,up_nom_vil,up_nom_city,up_nom_country,up_nom_state,up_nom_dist,up_nom_postl,up_nom_phn_num,up_nom_is_socty_mem,up_nom_isminor,up_nom_acct_num,up_nom_adhr_crd_num,up_acc_id],function(err,rst1)
        {
            if(err) throw err;
            console.log("update1",rst1)

            if(up_nom_isminor=='Yes'){
            var up_gurdian_name = req.body.acc_gurdian_name_ed;
            var up_gurdian_fath_name = req.body.acc_gurdian_fath_name_ed;
            var up_gurdian_reltn = req.body.acc_gurdian_reltn_ed;
            var up_gurdian_gender = req.body.acc_gurdian_gender_ed;
            var up_gurdian_occupation = req.body.acc_gurdian_occupation_ed;
            var up_gurdian_dob = req.body.acc_gurdian_dob_ed;
            var up_gurdian_minr_acoper_by = req.body.acc_gurdian_minr_acoper_by_ed;
            var up_gurdian_addr_typ = req.body.acc_gurdian_addr_typ_ed;
            var up_gurdian_addr_line = req.body.acc_gurdian_addr_line_ed;
            var up_gurdian_landmark = req.body.acc_gurdian_landmark_ed;
            var up_gurdian_village = req.body.acc_gurdian_village_ed;
            var up_gurdian_pncht_mdl = req.body.acc_gurdian_pncht_mdl_ed;
            var up_gurdian_city = JSON.parse(req.body.acc_gurdian_city_ed).city;
            console.log(up_gurdian_city);
            var up_gurdian_dist = req.body.acc_gurdian_dist_ed;
            var up_gurdian_state = req.body.acc_gurdian_state_ed;
            var up_gurdian_country = req.body.acc_gurdian_country_ed;
            var up_gurdian_phn_num = req.body.acc_gurdian_phn_num_ed;
            var up_gurdian_postl = req.body.acc_gurdian_postl_ed;
            var up_gurdian_addr_ste = req.body.acc_gurdian_addr_ste_ed;
            var up_gurdian_guar_typ = req.body.acc_gurdian_guar_typ_ed;
            var up_gurdian_is_socty_mem = req.body.acc_gurdian_is_socty_mem_ed;
            var up_gurdian_is_acc_holder = req.body.acc_gurdian_is_acc_holder_ed;
            }

            else{
                var up_gurdian_name = null;
                var up_gurdian_fath_name = null;
                var up_gurdian_reltn = null;
                var up_gurdian_gender = null;
                var up_gurdian_occupation = null;
                var up_gurdian_dob = null;
                var up_gurdian_minr_acoper_by = null;
                var up_gurdian_addr_typ = null;
                var up_gurdian_addr_line = null;
                var up_gurdian_landmark = null;
                var up_gurdian_village = null;
                var up_gurdian_pncht_mdl = null;
                var up_gurdian_city = null;
                var up_gurdian_dist = null;
                var up_gurdian_state = null;
                var up_gurdian_country = null;
                var up_gurdian_phn_num = null;
                var up_gurdian_postl = null;
                var up_gurdian_addr_ste = null;
                var up_gurdian_guar_typ = null;
                var up_gurdian_is_socty_mem = null;
                var up_gurdian_is_acc_holder = null;

            }

        
        pgdbconnect.query("update account_guardian_details set agd_ch_acct_name=$1, agd_ch_father_name=$2, agd_ch_relation=$3, agd_ch_gender=$4, agd_ch_occupation=$5, agd_d_date_of_birth=$6, agd_ch_minor_acct_operated_by=$7, agd_ch_address_type=$8, agd_ch_address_line=$9, agd_ch_landmark=$10, agd_ch_panchayat_mandal=$11, ahd_ch_village=$12, ahd_ch_city=$13, agd_ch_country=$14, agd_ch_state=$15, agd_ch_district=$16, agd_n_postal_code=$17, agd_n_ph_number=$18, agd_ch_addr_state=$19, agd_ch_guardian_type=$20, agd_ch_is_society_mem=$21, agd_ch_is_acct_hldr=$22 where agd_ch_guard_id=$23",[up_gurdian_name,up_gurdian_fath_name,up_gurdian_reltn,up_gurdian_gender,up_gurdian_occupation,up_gurdian_dob,up_gurdian_minr_acoper_by,up_gurdian_addr_typ,up_gurdian_addr_line,up_gurdian_landmark,up_gurdian_village,up_gurdian_pncht_mdl,up_gurdian_city,up_gurdian_dist,up_gurdian_state,up_gurdian_country,up_gurdian_phn_num,up_gurdian_postl,up_gurdian_addr_ste,up_gurdian_guar_typ,up_gurdian_is_socty_mem,up_gurdian_is_acc_holder,up_acc_id],function(err,rst2)
        {
            if(err) throw err;
            console.log("update2",rst2)

            var up_jnt_hldr_has_jnt_hldr_1 = req.body.acc_jnt_hldr_has_jnt_hldr_1_ed;
            var up_jnt_hldr_jnt_hldr_1 = req.body.acc_jnt_hldr_jnt_hldr_1_ed;
            var up_jnt_hldr_has_jnt_hldr_2 = req.body.acc_jnt_hldr_has_jnt_hldr_2_ed;
            var up_jnt_hldr_jnt_hldr_2 = req.body.acc_jnt_hldr_jnt_hldr_2_ed;
            var up_jnt_hldr_has_jnt_hldr_3 = req.body.acc_jnt_hldr_has_jnt_hldr_3_ed;
            var up_jnt_hldr_jnt_hldr_3 = req.body.acc_jnt_hldr_jnt_hldr_3_ed;
            var up_jnt_hldr_has_jnt_hldr_4 = req.body.acc_jnt_hldr_has_jnt_hldr_4_ed;
            var up_jnt_hldr_jnt_hldr_4 = req.body.acc_jnt_hldr_jnt_hldr_4_ed;

            pgdbconnect.query("update account_joint_holder_details set ajh_ch_join_hldr1_yes_no=$1, ajh_ch_joint_hldr_name1=$2, ajh_ch_join_hldr2_yes_no=$3, ajh_ch_joint_hldr_name2=$4, ajh_ch_join_hldr3_yes_no=$5, ajh_ch_joint_hldr_name3=$6, ajh_ch_join_hldr4_yes_no=$7, ajh_ch_joint_hldr_name4=$8 where ajh_ch_acct_id=$9",[up_jnt_hldr_has_jnt_hldr_1,up_jnt_hldr_jnt_hldr_1,up_jnt_hldr_has_jnt_hldr_2,up_jnt_hldr_jnt_hldr_2,up_jnt_hldr_has_jnt_hldr_3,up_jnt_hldr_jnt_hldr_3,up_jnt_hldr_has_jnt_hldr_4,up_jnt_hldr_jnt_hldr_4,up_acc_id],function(err,rst3)
            {
                if(err) throw err;
                console.log("update3",rst3)
                pgdbconnect.query("select * from account_details where ad_ch_del_flg = 'N' ",function(err,rsl1){
                    if(err) throw err;
                    console.log("Account Details")
                    pgdbconnect.query("select * from account_nominee_details where and_ch_del_flg = 'N' ",function(err,rsl2){
                        if(err) throw err;
                        console.log("Nominee Details")
                        pgdbconnect.query("select * from account_guardian_details where agd_ch_del_flg = 'N' ",function(err,rsl3){
                            if(err) throw err;
                            console.log("Guardian Details")
                            pgdbconnect.query("select * from account_joint_holder_details where ajg_ch_del_flg = 'N' ",function(err,rsl4){
                                if(err) throw err;
                                console.log("Joint Holder Details")

            
            //flash messege
            req.flash('success_msg', 'Data updated successfully');
            res.locals.message=req.flash();
            
                res.render('accountsModule/account_search',{
                    accdetails:rsl1.rows,
                    nomdetails:rsl2.rows,
                    guarddetails:rsl3.rows,
                    jnthldr:rsl4.rows,
                    moment:moment
                });
            });
            });
            });
                });
            });
            })
        })
        })

    })


  //VIEW
  router.post('/account_view',function(req,res){

    var divtype="VIEW";
    console.log("DIV TYPE",divtype);

    var view_account= req.body.view_account;
    console.log("cheque id to edit",view_account)

    pgdbconnect.query("select * from account_details where ad_ch_acct_id = $1 order by ad_ch_acct_id",[view_account],function(err,rlt)
    {
        if(err) throw err;
        console.log("Editing Account");
   		vw_acc_shortname = rlt.rows[0].ad_ch_short_name;
        vw_acc_name = rlt.rows[0].ad_ch_name;
        vw_acc_member = rlt.rows[0].ad_ch_member;
        vw_acc_number = rlt.rows[0].ad_n_acct_number;
        vw_acc_typ = rlt.rows[0].ad_ch_acct_type;
        vw_acc_status = rlt.rows[0].ad_ch_acct_status;
        vw_acc_scheme = rlt.rows[0].ad_ch_acct_scheme;
        vw_acc_cat_typ = rlt.rows[0].ad_ch_category_type;
        vw_acc_cur_typ = rlt.rows[0].ad_ch_current_type;
        vw_acc_code = rlt.rows[0].ad_ch_code;
        vw_acc_open_date = rlt.rows[0].ad_d_opn_date;
        vw_acc_open_amt = rlt.rows[0].ad_n_opn_amt;
        vw_acc_cur_bal = rlt.rows[0].ad_n_current_bal;
        vw_acc_intrst_acct = rlt.rows[0].ad_n_int_acct;
        vw_acc_has_chqbk = rlt.rows[0].ad_ch_has_chq_book;
        vw_acc_sal_acct = rlt.rows[0].ad_ch_is_sal_acct;
        vw_acc_count_pay = rlt.rows[0].ad_ch_counter_pay;
        vw_acc_oprn_instrn = rlt.rows[0].ad_ch_operation_insructions;
        vw_acc_lst_trnscn_date = rlt.rows[0].ad_d_last_tran_date;
        vw_acc_intdc_det = rlt.rows[0].ad_ch_introducer_details;
        vw_acc_intdc_kwn_perd = rlt.rows[0].ad_ch_intro_known_period;
        vw_acc_is_main = rlt.rows[0].ad_ch_is_main;
        vw_acc_desc = rlt.rows[0].ad_ch_description;
        vw_aut_acc_staff = rlt.rows[0].ad_ch_staff_name;
        vw_aut_acc_dly_app_state = rlt.rows[0].ad_ch_approval_state;
         vw_aut_acc_approval_date = rlt.rows[0].ad_d_approval_date;



        pgdbconnect.query("select * from account_nominee_details where and_ch_nominee_id = $1 order by and_ch_nominee_id",[view_account],function(err,rlt1)
{
    if(err) throw err;
    console.log("Editing Nominee");
	vw_nom_name = rlt1.rows[0].and_ch_name;
    vw_nom_fatr_nme = rlt1.rows[0].and_ch_father_name;
    vw_nom_reltn = rlt1.rows[0].and_ch_relation;
    vw_nom_gen = rlt1.rows[0].and_ch_gender;
    vw_nom_occptn = rlt1.rows[0].and_ch_occupation;
    vw_nom_dob = rlt1.rows[0].and_d_date_of_birth;
    vw_nom_addr_typ = rlt1.rows[0].and_ch_addr_type;
    vw_nom_addr_lin = rlt1.rows[0].and_ch_addr_line;
    vw_nom_lnd_mrk = rlt1.rows[0].and_ch_land_mark;
    vw_nom_vil = rlt1.rows[0].and_ch_village;
    vw_nom_pncht_mdl = rlt1.rows[0].and_ch_panchayat_mandal;
    vw_nom_city = rlt1.rows[0].and_ch_city;
    vw_nom_country = rlt1.rows[0].and_ch_country;
    vw_nom_state = rlt1.rows[0].and_ch_state;
    vw_nom_dist = rlt1.rows[0].and_ch_district;
    vw_nom_postl = rlt1.rows[0].and_n_postal_code;
    vw_nom_phn_num = rlt1.rows[0].and_n_ph_number;
    vw_nom_is_socty_mem = rlt1.rows[0].and_ch_is_society_num;
    vw_nom_acct_num = rlt1.rows[0].and_ch_acct_num;
    vw_nom_adhr_crd_num = rlt1.rows[0].and_n_nominee_aadhar_num;
    vw_nom_isminor = rlt1.rows[0].and_ch_is_minor;

    pgdbconnect.query("select * from account_guardian_details where agd_ch_guard_id = $1 order by agd_ch_guard_id",[view_account],function(err,rlt2)
    {

        if(err) throw err;
        console.log("Editing Guardian");
	    vw_gurdian_name = rlt2.rows[0].agd_ch_acct_name;
        vw_gurdian_fath_name = rlt2.rows[0].agd_ch_father_name;
        vw_gurdian_reltn = rlt2.rows[0].agd_ch_relation;
        vw_gurdian_gender = rlt2.rows[0].agd_ch_gender;
        vw_gurdian_occupation = rlt2.rows[0].agd_ch_occupation;
        vw_gurdian_dob = rlt2.rows[0].agd_d_date_of_birth;
        vw_gurdian_minr_acoper_by = rlt2.rows[0].agd_ch_minor_acct_operated_by;
        vw_gurdian_addr_typ = rlt2.rows[0].agd_ch_address_type;
        vw_gurdian_addr_line = rlt2.rows[0].agd_ch_address_line;
        vw_gurdian_landmark = rlt2.rows[0].agd_ch_landmark;
        vw_gurdian_village = rlt2.rows[0].ahd_ch_village;
        vw_gurdian_pncht_mdl = rlt2.rows[0].agd_ch_panchayat_mandal;
        vw_gurdian_city = rlt2.rows[0].ahd_ch_city;
        vw_gurdian_dist = rlt2.rows[0].agd_ch_district;
        vw_gurdian_state = rlt2.rows[0].agd_ch_state;
        vw_gurdian_country = rlt2.rows[0].agd_ch_country;
        vw_gurdian_phn_num = rlt2.rows[0].agd_n_ph_number;
        vw_gurdian_postl = rlt2.rows[0].agd_n_postal_code;
        vw_gurdian_addr_ste = rlt2.rows[0].agd_ch_addr_state;
        vw_gurdian_guar_typ = rlt2.rows[0].agd_ch_guardian_type;
        vw_gurdian_is_socty_mem = rlt2.rows[0].agd_ch_is_society_mem;
        vw_gurdian_is_acc_holder = rlt2.rows[0].agd_ch_is_acct_hldr;

        pgdbconnect.query("select * from account_joint_holder_details where ajh_ch_acct_id = $1 order by ajh_ch_acct_id",[view_account],function(err,rlt3)
        {
            if(err) throw err;
            console.log("Editing Joint Holder");
	        vw_jnt_hldr_has_jnt_hldr_1 = rlt3.rows[0].ajh_ch_join_hldr1_yes_no;
            vw_jnt_hldr_jnt_hldr_1 = rlt3.rows[0].ajh_ch_joint_hldr_name1;
            vw_jnt_hldr_has_jnt_hldr_2 = rlt3.rows[0].ajh_ch_join_hldr2_yes_no;
            vw_jnt_hldr_jnt_hldr_2 = rlt3.rows[0].ajh_ch_joint_hldr_name2;
            vw_jnt_hldr_has_jnt_hldr_3 = rlt3.rows[0].ajh_ch_join_hldr3_yes_no;
            vw_jnt_hldr_jnt_hldr_3 = rlt3.rows[0].ajh_ch_joint_hldr_name3;
            vw_jnt_hldr_has_jnt_hldr_4 = rlt3.rows[0].ajh_ch_join_hldr4_yes_no;
            vw_jnt_hldr_jnt_hldr_4 = rlt3.rows[0].ajh_ch_joint_hldr_name4;



        pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
        {
       if(err) throw err;
       //console.log("result1 is", result1);

        pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2)
        {
       if(err) throw err;
       //console.log("result2 is", result2);

        pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
        {
       if(err) throw err;
       //console.log("result3 is", result3);


            res.render('accountsModule/accounts_add',{
                acc_cities:result1.rows,
                acc_states:result2.rows,
                acc_countries:result3.rows,

            // Account
            view_account:view_account,
            vw_acc_shortname:vw_acc_shortname,
            vw_acc_name:vw_acc_name,
            vw_acc_member:vw_acc_member,
            vw_acc_number:vw_acc_number,
            vw_acc_typ:vw_acc_typ,
            vw_acc_status:vw_acc_status,
            vw_acc_scheme:vw_acc_scheme,
            vw_acc_cat_typ:vw_acc_cat_typ,
            vw_acc_cur_typ:vw_acc_cur_typ,
            vw_acc_code:vw_acc_code,
            vw_acc_open_date:vw_acc_open_date,
            vw_acc_open_amt:vw_acc_open_amt,
            vw_acc_cur_bal:vw_acc_cur_bal,
            vw_acc_intrst_acct:vw_acc_intrst_acct,
            vw_acc_has_chqbk:vw_acc_has_chqbk,
            vw_acc_sal_acct:vw_acc_sal_acct,
            vw_acc_count_pay:vw_acc_count_pay,
            vw_acc_oprn_instrn:vw_acc_oprn_instrn,
            vw_acc_lst_trnscn_date:vw_acc_lst_trnscn_date,
            vw_acc_intdc_det:vw_acc_intdc_det,
            vw_acc_intdc_kwn_perd:vw_acc_intdc_kwn_perd,
            vw_acc_is_main:vw_acc_is_main,
            vw_acc_desc:vw_acc_desc,
            vw_aut_acc_staff:vw_aut_acc_staff,
            vw_aut_acc_approval_date:vw_aut_acc_approval_date,
            vw_aut_acc_dly_app_state:vw_aut_acc_dly_app_state,

            //Nominee
			vw_nom_name:vw_nom_name,
            vw_nom_fatr_nme:vw_nom_fatr_nme,
            vw_nom_reltn:vw_nom_reltn,
            vw_nom_gen:vw_nom_gen,
            vw_nom_occptn:vw_nom_occptn,
            vw_nom_dob:vw_nom_dob,
            vw_nom_addr_typ:vw_nom_addr_typ,
            vw_nom_addr_lin:vw_nom_addr_lin,
            vw_nom_lnd_mrk:vw_nom_lnd_mrk,
            vw_nom_vil:vw_nom_vil,
            vw_nom_pncht_mdl:vw_nom_pncht_mdl,
            vw_nom_city:vw_nom_city,
            vw_nom_country:vw_nom_country,
            vw_nom_state:vw_nom_state,
            vw_nom_dist:vw_nom_dist,
            vw_nom_postl:vw_nom_postl,
            vw_nom_phn_num:vw_nom_phn_num,
            vw_nom_is_socty_mem:vw_nom_is_socty_mem,
            vw_nom_acct_num:vw_nom_acct_num,
            vw_nom_adhr_crd_num:vw_nom_adhr_crd_num,
            vw_nom_isminor:vw_nom_isminor,

            //Guardian
			vw_gurdian_name:vw_gurdian_name,
            vw_gurdian_fath_name:vw_gurdian_fath_name,
            vw_gurdian_reltn:vw_gurdian_reltn,
            vw_gurdian_gender:vw_gurdian_gender,
            vw_gurdian_occupation:vw_gurdian_occupation,
            vw_gurdian_dob:vw_gurdian_dob,
            vw_gurdian_minr_acoper_by:vw_gurdian_minr_acoper_by,
            vw_gurdian_addr_typ:vw_gurdian_addr_typ,
            vw_gurdian_addr_line:vw_gurdian_addr_line,
            vw_gurdian_landmark:vw_gurdian_landmark,
            vw_gurdian_village:vw_gurdian_village,
            vw_gurdian_pncht_mdl:vw_gurdian_pncht_mdl,
            vw_gurdian_city:vw_gurdian_city,
            vw_gurdian_dist:vw_gurdian_dist,
            vw_gurdian_state:vw_gurdian_state,
            vw_gurdian_country:vw_gurdian_country,
            vw_gurdian_phn_num:vw_gurdian_phn_num,
            vw_gurdian_postl:vw_gurdian_postl,
            vw_gurdian_addr_ste:vw_gurdian_addr_ste,
            vw_gurdian_guar_typ:vw_gurdian_guar_typ,
            vw_gurdian_is_socty_mem:vw_gurdian_is_socty_mem,
            vw_gurdian_is_acc_holder:vw_gurdian_is_acc_holder,

            //Joint Holder Account
			vw_jnt_hldr_has_jnt_hldr_1:vw_jnt_hldr_has_jnt_hldr_1,
            vw_jnt_hldr_jnt_hldr_1:vw_jnt_hldr_jnt_hldr_1,
            vw_jnt_hldr_has_jnt_hldr_2:vw_jnt_hldr_has_jnt_hldr_2,
            vw_jnt_hldr_jnt_hldr_2:vw_jnt_hldr_jnt_hldr_2,
            vw_jnt_hldr_has_jnt_hldr_3:vw_jnt_hldr_has_jnt_hldr_3,
            vw_jnt_hldr_jnt_hldr_3:vw_jnt_hldr_jnt_hldr_3,
            vw_jnt_hldr_has_jnt_hldr_4:vw_jnt_hldr_has_jnt_hldr_4,
            vw_jnt_hldr_jnt_hldr_4:vw_jnt_hldr_jnt_hldr_4,
            pagetype:divtype,
            view_account:view_account,
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


// Delete
router.post('/account_delete',function(req,res){

    var delete_account= req.body.delete_account;
    console.log("Delete ID", delete_account);

    pgdbconnect.query("update account_details set ad_ch_del_flg = $1  where ad_ch_acct_id = $2",['Y',delete_account],function(err,rst)
    {

        if(err) throw err;
        //console.log("delete Details",rst.rows);

        pgdbconnect.query("update account_nominee_details set and_ch_del_flg = $1 where and_ch_nominee_id = $2",['Y',delete_account],function(err,rst1)
        {
            if(err) throw err;
            //console.log("delete Details",rst1.rows);

            pgdbconnect.query("update account_guardian_details set agd_ch_del_flg = $1  where agd_ch_guard_id = $2",['Y',delete_account],function(err,rst2)
        {
            if(err) throw err;
            //console.log("delete Details",rst2.rows);

            pgdbconnect.query("update account_joint_holder_details set ajg_ch_del_flg = $1 where ajh_ch_acct_id=$2",['Y',delete_account],function(err,rst3)
            {
                if(err) throw err;
                //console.log("delete Details",rst3.rows);

                pgdbconnect.query("select * from account_details where ad_ch_del_flg = 'N' ",function(err,rsl1){
                    if(err) throw err;
                    //console.log("Account Details")
                    pgdbconnect.query("select * from account_nominee_details where and_ch_del_flg = 'N' ",function(err,rsl2){
                        if(err) throw err;
                        //console.log("Nominee Details")
                        pgdbconnect.query("select * from account_guardian_details where agd_ch_del_flg = 'N' ",function(err,rsl3){
                            if(err) throw err;
                            //console.log("Guardian Details")
                            pgdbconnect.query("select * from account_joint_holder_details where ajg_ch_del_flg = 'N' ",function(err,rsl4){
                                if(err) throw err;
                                //console.log("Joint Holder Details")
            
        //flash messege
        req.flash('success_msg', 'Data Deleted successfully');
        res.locals.message=req.flash();

                res.render('accountsModule/account_search',{
                    accdetails:rsl1.rows,
                    nomdetails:rsl2.rows,
                    guarddetails:rsl3.rows,
                    jnthldr:rsl4.rows,
                });
            });
            });
            });
                });

        })

        })
        
    })

})
})


// Delete
router.post('/account_search',function(req,res){
console.log("Searching for particular acc record");


var acc_sch_member = req.body.acc_sch_member;
var acc_sch_account_number = req.body.acc_sch_account_number;
var acc_sch_account_status = req.body.acc_sch_account_status;
console.log("searching account record",acc_sch_member,acc_sch_account_number,acc_sch_account_status);

//All
if(acc_sch_member!='' && acc_sch_account_number!='' && acc_sch_account_status!=''){
    acc_sch_member = req.body.acc_sch_member;
    acc_sch_account_number = req.body.acc_sch_account_number;
    acc_sch_account_status = req.body.acc_sch_account_status;
}

//Account Member
else if(acc_sch_member!='' && acc_sch_account_number=='' && acc_sch_account_status=='Select'){
    acc_sch_member = req.body.acc_sch_member;
    acc_sch_account_number = null;
    acc_sch_account_status = null;
}

//Account Number
else if(acc_sch_member=='' && acc_sch_account_number!='' && acc_sch_account_status=='Select'){
    acc_sch_member = null;
    acc_sch_account_number = req.body.acc_sch_account_number;
    acc_sch_account_status = null;
}

//Account Status
else if(acc_sch_member=='' && acc_sch_account_number=='' && acc_sch_account_status!=''){
    acc_sch_member = null;
    acc_sch_account_number = null;
    acc_sch_account_status = req.body.acc_sch_account_status;
}

//Account Member and Account Number
else if(acc_sch_member!='' && acc_sch_account_number!='' && acc_sch_account_status=='Select'){
    acc_sch_member = req.body.acc_sch_member;
    acc_sch_account_number = req.body.acc_sch_account_number;
    acc_sch_account_status = null;
}

//Account Member and Account Status
else if(acc_sch_member!='' && acc_sch_account_number=='' && acc_sch_account_status!=''){
    acc_sch_member = req.body.acc_sch_member;
    acc_sch_account_number = null;
    acc_sch_account_status = req.body.acc_sch_account_status;
}

//Account Number and Account Status
else if(acc_sch_member=='' && acc_sch_account_number!='' && acc_sch_account_status!=''){
    acc_sch_member = null;
    acc_sch_account_number = req.body.acc_sch_account_number;
    acc_sch_account_status = req.body.acc_sch_account_status;
}

    pgdbconnect.query("select * from account_details where ((ad_ch_member = $1 or ad_n_acct_number = $2 or ad_ch_acct_status = $3) and ad_ch_del_flg = $4)",[acc_sch_member,acc_sch_account_number,acc_sch_account_status,'N'],function(err,rsl1){

            if(err) throw err;
            console.log("Account Details")
            pgdbconnect.query("select * from account_nominee_details where and_ch_del_flg = 'N' ",function(err,rsl2){
                if(err) throw err;
                console.log("Nominee Details")
                pgdbconnect.query("select * from account_guardian_details where agd_ch_del_flg = 'N' ",function(err,rsl3){
                    if(err) throw err;
                    console.log("Guardian Details")
                    pgdbconnect.query("select * from account_joint_holder_details where ajg_ch_del_flg = 'N' ",function(err,rsl4){
                        if(err) throw err;
                        console.log("Joint Holder Details")
    
        res.render('accountsModule/account_search',{
            accdetails:rsl1.rows,
            nomdetails:rsl2.rows,
            guarddetails:rsl3.rows,
            jnthldr:rsl4.rows,

    });
    });
    });
        });
    })

});
/*ACCOUNTS ADD DETAILS-END*/
// account transaction search
router.get('/acc_trnsc_search',function(req,res){
	res.render('accountsModule/account_transaction_search');
});

module.exports = router;