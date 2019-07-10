/* ACCOUNTS RENEWAL DETAILS- START*/
// City AutoSelect the State

function stateoncity_account_nominee() {
   
    var selected_city = document.getElementById("acc_nom_city").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("acc_nom_state").value = obj1.state;
  }


function stateoncity_account_guardian() {
   
    var selected_city = document.getElementById("acc_gurdian_city").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("acc_gurdian_state").value = obj1.state;
  }

// City AutoSelect the State for EDIT

function stateoncity_EDITacc_nominee() {
   
    var selected_city = document.getElementById("acc_nom_city_ed").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("acc_nom_state_ed").value = obj1.state;
  }


function stateoncity_EDITacc_guardian() {
   
    var selected_city = document.getElementById("acc_gurdian_city_ed").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("acc_gurdian_state_ed").value = obj1.state;
  }


/////add clear
function clearAccountRenewalDetailsTab()
{
    document.getElementById('acc_renw_acc_typ_sear').value="";
    document.getElementById('acc_renw_acc_mem_sear').value="";
    document.getElementById('acc_renw_mem_id_sear').value="";
    document.getElementById('acc_renw_renw_date').value="";
    document.getElementById('acc_renw_renw_amount').value="";
    document.getElementById('acc_renw_instal_amount').value="";
}

//////edit clear

function cleareditAccountRenewalDetailsTab()
{
    document.getElementById('acc_renw_acc_typ_sear_ed').value="";
    document.getElementById('acc_renw_acc_mem_sear_ed').value="";
    document.getElementById('acc_renw_mem_sear_ed').value="";
    document.getElementById('acc_renw_renw_date_ed').value="";
    document.getElementById('acc_renw_renw_amoun_ed').value="";
    document.getElementById('acc_renw_instal_amount_ed').value="";

}

///////////////////////////////// ACCOUNTS RENEWAL DETAILS//////////////////////////////////////////////


// Only Numbers for required functions

function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;
   return true;
}

function AccountRenewalDetails(){

    //Account Type
       
    var acc_renw_acc_typ_sear = document.getElementById("acc_renw_acc_typ_sear").value;
    if(acc_renw_acc_typ_sear == ""){
            document.getElementById("acc_renw_acc_typ_sear").focus();
            
            swal("","Please Select Account Type","error");
                    return false;
                    }
   
    //Account Number
       
    var acc_renw_acc_mem_sear = document.getElementById("acc_renw_acc_mem_sear").value;
    
    if(acc_renw_acc_mem_sear == ""){
            document.getElementById("acc_renw_acc_mem_sear").focus();
          
            swal("","Please Enter Account Number","error");
                    return false;
                }
                 else if(acc_renw_acc_mem_sear.length<16){
                        
                                        document.getElementById("acc_renw_acc_mem_sear").focus();
                                        
                                        swal("","Please Enter valid Account Number","warning");
                                        return false;
                                    }
   
   //Member ID"
       
    var acc_renw_mem_id_sear = document.getElementById("acc_renw_mem_id_sear").value;
    if(acc_renw_mem_id_sear == ""){
            document.getElementById("acc_renw_mem_id_sear").focus();
           
            swal("","Please Select Member ID","error");
                    return false;
                    }
   
   //Renewal Date
       
    var acc_renw_renw_date = document.getElementById("acc_renw_renw_date").value;
    if(acc_renw_renw_date == ""){
            document.getElementById("acc_renw_renw_date").focus();
            
            swal("","Please Enter Renewal Date","error");
                    return false;
                    }
   
   //Renewal Amount
       
    var acc_renw_renw_amount = document.getElementById("acc_renw_renw_amount").value;
    
    var acc_renw_instal_amount = document.getElementById("acc_renw_instal_amount").value;

    if(acc_renw_renw_amount == ""){
            document.getElementById("acc_renw_renw_amount").focus();
            
            swal("","Please Enter Renewal Amount","error");
                    return false;
                    }
   
   //Installment Amount 
       //alert(parseInt(acc_renw_instal_amount))
        //alert(parseInt(acc_renw_renw_amount))
    //alert(parseInt(acc_renw_instal_amount) < parseInt(acc_renw_renw_amount))
    if(acc_renw_instal_amount == ""){
            document.getElementById("acc_renw_instal_amount").focus();
            
            swal("","Please Enter Installment Amount","error");
                    return false;
                }
                
                  else
                  {
                       if(parseInt(acc_renw_instal_amount) > parseInt(acc_renw_renw_amount)){
                        swal("","Installment Amount should be lesser than renewal amount","error");
                        return false;
                        

                    }
                  }
                    document.getElementById("acc_renewal_ad").submit();
   }
   

   //required field for search

function required_date(){
       
        var acc_renw_date_btw = document.getElementById("acc_renw_date_btw").value;
        var acc_renw_date_and = document.getElementById("acc_renw_date_and").value;

        if((acc_renw_date_btw!= "") && (acc_renw_date_and== "") || ((acc_renw_date_btw== "") && (acc_renw_date_and!= "")) ){
                swal("","Please Enter Renewal Date","error");
                return false;
                }

                else{
                        document.getElementById("renewalform").submit();
                }

}



///////account renewal edit


function AccountRenewalEditDetails(){

        //Account Type
      
           
        var acc_renw_acc_typ_sear_ed = document.getElementById("acc_renw_acc_typ_sear_ed").value;
        if(acc_renw_acc_typ_sear_ed == ""){
                document.getElementById("acc_renw_acc_typ_sear_ed").focus();
                
                swal("","Please Select Account Type","error");
                        return false;
                        }
       
        //Account Number
           
        var acc_renw_acc_mem_sear_ed = document.getElementById("acc_renw_acc_mem_sear_ed").value;
        if(acc_renw_acc_mem_sear_ed == ""){
                
                document.getElementById("acc_renw_acc_mem_sear_ed").focus();
              
                swal("","Please Enter Account Number","error");
                        return false;
                        }

                        else if(acc_renw_acc_mem_sear_ed.length < 16){
                                        document.getElementById("acc_renw_acc_mem_sear_ed").focus();
                                        
                                        swal("","Please Enter valid Account Number","warning");
                                        return false;
                                    }
                            
       //Member ID"
           
        var acc_renw_mem_sear_ed = document.getElementById("acc_renw_mem_sear_ed").value;
        if(acc_renw_mem_sear_ed == ""){
                document.getElementById("acc_renw_mem_sear_ed").focus();
               
                swal("","Please Select Member ID","error");
                        return false;
                        }
       
       //Renewal Date
           
        var acc_renw_renw_date_ed = document.getElementById("acc_renw_renw_date_ed").value;
        if(acc_renw_renw_date_ed == ""){
                document.getElementById("acc_renw_renw_date_ed").focus();
                
                swal("","Please Enter Renewal Date","error");
                        return false;
                        }
       
       //Renewal Amount
           
        var acc_renw_renw_amoun_ed = document.getElementById("acc_renw_renw_amoun_ed").value;
        if(acc_renw_renw_amoun_ed == ""){
                document.getElementById("acc_renw_renw_amoun_ed").focus();
                
                swal("","Please Enter Renewal Amount","error");
                        return false;
                        }
    
       
       //Installment Amount 
           
        var acc_renw_instal_amount_ed = document.getElementById("acc_renw_instal_amount_ed").value;
        if(acc_renw_instal_amount_ed == ""){
                document.getElementById("acc_renw_instal_amount_ed").focus();
                
                swal("","Please Enter Installment Amount","error");
                        return false;
                        }
    
                        else if(parseInt(acc_renw_instal_amount_ed) > parseInt(acc_renw_renw_amount_ed)){
                            swal("","Installment Amount should be lesser than renewal amount","error");
                            return false;
                            
    
                        }
                        document.getElementById('acc_ren_edit').submit();
       }

   
   function edit_renewal_row(oObject)
   {
    //alert(oObject)
   var id = oObject.id;
    //alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
 //alert("rb1"+rb1)
document.getElementById("radiobutton1rened"+rb1).checked=true;
   var idchecked=$("input[name='radiobutton1rened']:checked").val();
//alert(idchecked);
 
 
var renid=document.getElementById('ren_id'+idchecked).value;
 //alert("RENEWAL ID -----------------------"+renid)


document.getElementById("temprenid").value=renid;
document.getElementById("edit_ren_load_data").submit();


   }

   function  view_renewal_row(oObject)
   {
        // alert(oObject)
      var id = oObject.id;
      // alert("This object's ID attribute is set to \"" + id + "\"."); 
    var rb1=document.getElementById("vf"+id).value;
    //alert("rb1"+rb1)
    document.getElementById("radiobutton1renvw"+rb1).checked=true;
        var idchecked=$("input[name='radiobutton1renvw']:checked").val();                                
    // alert(idchecked);
      
      
    var renid=document.getElementById('radiobutton1renvw'+idchecked).value;
    //alert("view ID -----------------------"+renid)
    
    
   // alert( document.getElementById("temprenvid").value);
    document.getElementById("temprenvid").value=renid;
    document.getElementById("view_ren_load_data").submit();
    
   }

   function  delete_renewal_row(oObject)
 {
      // alert(oObject)
    var id = oObject.id;
    // alert("This object's ID attribute is set to \"" + id + "\"."); 
  var rb1=document.getElementById("df"+id).value;
  //alert("rb1"+rb1)
  document.getElementById("radiobutton1rendel"+rb1).checked=true;
      var idchecked=$("input[name='radiobutton1rendel']:checked").val();                                
   //alert(idchecked);
    
    
  var del_id=document.getElementById('radiobutton1rendel'+idchecked).value;
  //alert("del ID -----------------------"+del_id)
  
  
  
  document.getElementById("temprendelid").value=del_id;
 }
 function delete_renewal_onconfirm(){
  document.getElementById("delete_ren_data_load_form").submit();
  
 }

 function required_date(){
var acc_renw_date_btw = document.getElementById("acc_renw_date_btw").value;
var acc_renw_date_and = document.getElementById("acc_renw_date_and").value;

if((acc_renw_date_btw!= "") && (acc_renw_date_and== "") || ((acc_renw_date_btw== "") && (acc_renw_date_and!= "")) ){
swal("","Please Enter Renewal Date","error");
return false;
}

else{
document.getElementById("renewalform").submit();
}

}


/* ACCOUNTS RENEWAL DETAILS-END*/

/* ACCOUNTS Limits- START*/
function add_account_limit()
{
    document.getElementById('accounts_form').submit();
}


// acc_lmt_edit
function edit_acc_lmt(oObject)
{

    var id = oObject.id;
    // alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton1acc_lmt"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton1acc_lmt']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var acc_id=document.getElementById('acc_lmt_id'+idchecked1).value;
    // alert("acc_lmt_id -----------------------"+acc_id);
   
   document.getElementById("tempmemberid").value=acc_id;
   document.getElementById("acc_lmt_editing").submit();


}


//acc view
function view_acc_lmt(oObject)
{
    var id = oObject.id;
    // alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("vf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton2acc_lmt"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton2acc_lmt']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var acc_id=document.getElementById('acc_lmt_id2'+idchecked1).value;
    // alert("acc_lmt_id -----------------------"+acc_id);
   
   document.getElementById("tempmemberid1").value=acc_id;
   document.getElementById("acc_lmt_view").submit();
 
}



//acc delete

function delete_acc_lmt(oObject)
{
    var id = oObject.id;
    // alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton3acc_lmt"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton3acc_lmt']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var acc_id=document.getElementById('acc_lmt_id3'+idchecked1).value;
    // alert("acc_lmt_id -----------------------"+acc_id);
   
   document.getElementById("tempmemberid3").value=acc_id;
 
 
}

function delete_acclmt_detail_onconfirm(){
    document.getElementById("delete_acclmt_form").submit();
      
      }   


      function acc_lmt_clear(){
        document.getElementById("sel_acct_ed").value='';
        document.getElementById("lwr_lmt_ed").value='';
        document.getElementById("upr_lmt_ed").value='';
      }

 function add_account_limit()
 {

      var acc_type = document.getElementById("sel_acct").value;
                                    if(acc_type == ""){
                                                    document.getElementById("sel_acct").focus();
                                                    
                                                    swal("Oops!","Please Enter account Type","error");
                                                    return false;
                                                }
                                              


                                              var upper_limit = document.getElementById("upr_lmt").value;
                                              if(upper_limit == ""){
                                                              document.getElementById("upr_lmt").focus();
                                                              
                                                              swal("Oops!","Please Enter upper_limit","error");
                                                              return false;
                                                          }
                                                        
                                                          var lower_limit = document.getElementById("lwr_lmt").value;
                                                          if(lower_limit == ""){
                                                                          document.getElementById("lwr_lmt").focus();
                                                                          
                                                                          swal("Oops!","Please Enter lower_limit","error");
                                                                          return false;
                                                                      } 
                                                                      
                                                                      
                                                                      var acc_no = document.getElementById("acc_num").value;
                                                                      if(acc_no == ""){
                                                                                      document.getElementById("acc_num").focus();
                                                                                      
                                                                                      swal("Oops!","Please Enter 16 number","error");
                                                                                      return false;
                                                                                  }
                                                                              else{
                                                                                if(acc_no.length < 16){
                                                                                  document.getElementById("acc_num").focus();
                                                                                      
                                                                                  swal("Oops!","Please Enter 16 number","error");
                                                                                  return false;

                                                                                }
                                                                                
                                                                              }
                                                                              function numeric(empcd)
                                                                              {
                                                                                 var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
                                                                                   if (charCode != 48 && charCode > 31 
                                                                                    && (charCode < 48 || charCode > 57))
                                                                                      return false;
                                                                                         return true;
                                                                                 }

                                                                                  document.getElementById("accounts_form").submit();
                                                                                }


function edit_account_limit()
{


var acc_type = document.getElementById("sel_acct_ed").value;
if(acc_type == ""){
document.getElementById("sel_acct_ed").focus();
swal("Oops!","Please Enter account Type","error");
return false;
}


var upper_limit = document.getElementById("upr_lmt_ed").value;
if(upper_limit == ""){
document.getElementById("upr_lmt_ed").focus();
swal("Oops!","Please Enter upper_limit","error");
return false;
}
var lower_limit = document.getElementById("lwr_lmt_ed").value;
if(lower_limit == ""){
document.getElementById("lwr_lmt_ed").focus();
swal("Oops!","Please Enter lower_limit","error");
return false;
} 


var acc_no = document.getElementById("acc_num_ed").value;
if(acc_no.length < 16){
document.getElementById("acc_num_ed").focus();
swal("Oops!","Please Enter 16 number","error");
return false;

}
document.getElementById("edit_accounts_form").submit();
}
// function edit_account_limit()
// {
//   document.getElementById("edit_accounts_form").submit();
// }

function search_clear()
{
  document.getElementById("acc_typ").value='';

  document.getElementById("acc_num").value='';

}

function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;
   return true;
}
/* ACCOUNTS Limits- END*/


/*ACCOUNTS SEARCH PAGE*/
/*RESET SEARCH */
function reset_account()
{
   document.getElementById("mem_typ").value='';
   document.getElementById("acc_sch_account_number").value='';
   document.getElementById("acc_sch_account_status").value='';

}

/*ACCOUNTS ADD DETAILS-START*/
// Only Alphabets for required functions
function alphanumeric(memid)
{
   var charCode = (memid.which) ? memid.which : memid.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122))
      return false;
   return true;
}
function alpha(alpbts) {
   var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
   if (charCode > 31
      && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode > 47 || charCode < 58))
      return false;
   return true;
}

// Only Numbers for required functions

function numeric(empcd) {
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31
      && (charCode < 48 || charCode > 57))
      return false;
   return true;
}


// both numbres and alphabets 
function alphanumeric(memid)
{
   var charCode = (memid.which) ? memid.which : memid.keyCode;
   if ( charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122))
      return false;
   return true;
}

// Opening Amount

function openingamount(empcd) {
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31
      && (charCode < 46 || charCode > 57))
      return false;
   return true;
}

//Currency type
function currency(){
   
      var curr_code=document.getElementById('acc_curr_typ').selectedIndex;
      if(curr_code=='1'){

      document.getElementById('acc_code').selectedIndex=curr_code;
   }
}






// Radio Button Functions
// Gender
function gender_radio(gencd){

   $('input[name=acc_nom_gen_ed]').val=gencd.value;
}

// Is Minor
function isMinor(minor){
   $('input[name=acc_nom_isminor_ed]').val=minor.value;
}

//Guardian Gender
function guardian_gen(guardgen){
   $('input[name=acc_gurdian_gender_ed]').val=minor.value;
}


// Joint Holders Function

//Function 1
function jointHolders1(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_1').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_1').disabled = true;
      document.getElementById('acc_jnt_hldr_jnt_hldr_1').value="";
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_1').disabled = false;
   }
}

//Function 2
function jointHolders2(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_2').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_2').disabled = true;
      document.getElementById('acc_jnt_hldr_jnt_hldr_2').value="";
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_2').disabled = false;
   }
}

//Function 3
function jointHolders3(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_3').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_3').disabled = true;
      document.getElementById('acc_jnt_hldr_jnt_hldr_3').value="";
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_3').disabled = false;
   }
}

//Function 4
function jointHolders4(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_4').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_4').disabled = true;
      document.getElementById('acc_jnt_hldr_jnt_hldr_4').value="";
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_4').disabled = false;
   }
}



// Joint Holder Edit Function
//Function 1
function edit_jointHolders1(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_1_ed').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_1_ed').value = "";
      document.getElementById('acc_jnt_hldr_jnt_hldr_1_ed').disabled = true;
   } 
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_1_ed').disabled = false;
   }
}

//Function 2
function edit_jointHolders2(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_2_ed').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_2_ed').value = "";
      document.getElementById('acc_jnt_hldr_jnt_hldr_2_ed').disabled = true;
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_2_ed').disabled = false;
   }
}

//Function 3
function edit_jointHolders3(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_3_ed').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_3_ed').value = "";
      document.getElementById('acc_jnt_hldr_jnt_hldr_3_ed').disabled = true;
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_3_ed').disabled = false;
   }
}

//Function 4
function edit_jointHolders4(){
   if(document.getElementById('acc_jnt_hldr_has_jnt_hldr_4_ed').selectedIndex == "2"){
      document.getElementById('acc_jnt_hldr_jnt_hldr_4_ed').value = "";
      document.getElementById('acc_jnt_hldr_jnt_hldr_4_ed').disabled = true;
   }
   else{
      document.getElementById('acc_jnt_hldr_jnt_hldr_4_ed').disabled = false;
   }
}




////////////////////////////////////////

                                   // Clear Functions


// Account Tab                                   
function cleareditaccount_tab(){
   document.getElementById('acc_shrt_nme_ed').value="";
   document.getElementById('acc_nme_ed').value="";
   document.getElementById('acc_mem_ed').value="";
   document.getElementById('acc_num_ed').value="";
   document.getElementById('acc_typ_ed').value="";
   document.getElementById('acc_stat_ed').value="";
   document.getElementById('acc_schm_ed').value="";
   document.getElementById('acc_cat_typ_ed').value="";
   document.getElementById('acc_curr_typ_ed').value="";
   document.getElementById('acc_code_ed').value="";
   document.getElementById('acc_openg_date_ed').value="";
   document.getElementById('acc_opng_amt_ed').value="";
   document.getElementById('acc_curr_bal_ed').value="";
   document.getElementById('acc_intrst_on_acct_ed').value="";
   document.getElementById('acc_has_chqbok_ed').value="";
   document.getElementById('acc_is_sal_acct_ed').value="";
   document.getElementById('acc_count_pay_ed').value="";
   document.getElementById('acc_oprn_instrn_ed').value="";
   document.getElementById('acc_lst_trnscn_date_ed').value="";
   document.getElementById('acc_intdc_det_ed').value="";
   document.getElementById('acc_intdc_kwn_perd_ed').value="";
   document.getElementById('acc_is_main_ed').value="";
   document.getElementById('acc_desc_ed').value="";
}


// Nominee Tab 
function clearNomineeTab(){

   document.getElementById('acc_nom_name').value="";
   document.getElementById('acc_nom_fatr_nme').value="";
   document.getElementById('acc_nom_reltn').value="";
   document.getElementById('acc_nom_genmale').checked=false;
   document.getElementById('acc_nom_genfemale').checked=false;
   document.getElementById('acc_nom_occptn').value="";
   document.getElementById('acc_nom_dob').value="";
   document.getElementById('acc_nom_addr_typ').value="";
   document.getElementById('acc_nom_addr_lin').value="";
   document.getElementById('acc_nom_lnd_mrk').value="";
   document.getElementById('acc_nom_vil').value="";
   document.getElementById('acc_nom_pncht_mdl').value="";
   document.getElementById('acc_nom_city').value="";
   document.getElementById('acc_nom_dist').value="";
   document.getElementById('acc_nom_state').value="";
   document.getElementById('acc_nom_postl').value="";
   document.getElementById('acc_nom_phn_num').value="";
   document.getElementById('acc_nom_is_socty_mem').value="";
   document.getElementById('acc_nom_acct_num').value="";
   document.getElementById('acc_nom_adhr_crd_num').value="";
   document.getElementById('acc_nom_isminor_yes').checked=false;
   document.getElementById('acc_nom_isminor_no').checked=false;
}

// Guardian Tab 
function clearGuardianTab(){

   document.getElementById('acc_gurdian_name').value="";
   document.getElementById('acc_gurdian_fath_name').value="";
   document.getElementById('acc_gurdian_reltn').value="";
   document.getElementById('acc_gurdian_genmale').checked=false;
   document.getElementById('acc_gurdian_genfemale').checked=false;
   document.getElementById('acc_gurdian_occupation').value="";
   document.getElementById('acc_gurdian_dob').value="";
   document.getElementById('acc_gurdian_minr_acoper_by').value="";
   document.getElementById('acc_gurdian_addr_typ').value="";
   document.getElementById('acc_gurdian_addr_line').value="";
   document.getElementById('acc_gurdian_landmark').value="";
   document.getElementById('acc_gurdian_village').value="";
   document.getElementById('acc_gurdian_pncht_mdl').value="";
   document.getElementById('acc_gurdian_city').value="";
   document.getElementById('acc_gurdian_dist').value="";
   document.getElementById('acc_gurdian_state').value="";
   document.getElementById('acc_gurdian_country').value="";
   document.getElementById('acc_gurdian_phn_num').value="";
   document.getElementById('acc_gurdian_postl').value="";
   document.getElementById('acc_gurdian_addr_ste').value="";
   document.getElementById('acc_gurdian_guar_typ').value="";
   document.getElementById('acc_gurdian_is_socty_mem').value="";
   document.getElementById('acc_gurdian_is_acc_holder').value="";
}

// Joint Holder Tab 
function clearJointHolderTab(){
document.getElementById('acc_jnt_hldr_has_jnt_hldr_1').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_1').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_1').disabled=false;
document.getElementById('acc_jnt_hldr_has_jnt_hldr_2').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_2').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_2').disabled=false;
document.getElementById('acc_jnt_hldr_has_jnt_hldr_3').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_3').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_3').disabled=false;
document.getElementById('acc_jnt_hldr_has_jnt_hldr_4').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_4').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_4').disabled=false;
}

// Authorization Tab 
function clearAuthorizationTab(){
   document.getElementById('acc_staff').value="";
   document.getElementById('acc_approval_date').value="";
   document.getElementById('acc_dly_app_state').value="";
}
/////////////////////////////////////////////////

// Account Tab Edit                                  
function edit_clearAccountTab(){

   document.getElementById('acc_shrt_nme_ed').value="";
   document.getElementById('acc_nme_ed').value="";
   document.getElementById('acc_mem_ed').value="";
   document.getElementById('acc_num_ed').value="";
   document.getElementById('acc_typ_ed').value="";
   document.getElementById('acc_stat_ed').value="";
   document.getElementById('acc_schm_ed').value="";
   document.getElementById('acc_cat_typ_ed').value="";
   document.getElementById('acc_curr_typ_ed').value="";
   document.getElementById('acc_code_ed').value="";
   document.getElementById('acc_openg_date_ed').value="";
   document.getElementById('acc_opng_amt_ed').value="";
   document.getElementById('acc_curr_bal_ed').value="";
   document.getElementById('acc_intrst_on_acct_ed').value="";
   document.getElementById('acc_has_chqbok_ed').value="";
   document.getElementById('acc_is_sal_acct_ed').value="";
   document.getElementById('acc_count_pay_ed').value="";
   document.getElementById('acc_oprn_instrn_ed').value="";
   document.getElementById('acc_lst_trnscn_date_ed').value="";
   document.getElementById('acc_intdc_det_ed').value="";
   document.getElementById('acc_intdc_kwn_perd_ed').value="";
   document.getElementById('acc_is_main_ed').value="";
   document.getElementById('acc_desc_ed').value="";
}


// Nominee Tab Edit
function edit_clearNomineeTab(){

   document.getElementById('acc_nom_name_ed').value="";
   document.getElementById('acc_nom_fatr_nme_ed').value="";
   document.getElementById('acc_nom_reltn_ed').value="";
   document.getElementById('acc_nom_genmale_ed').checked=false;
   document.getElementById('acc_nom_genfemale_ed').checked=false;
   document.getElementById('acc_nom_occptn_ed').value="";
   document.getElementById('acc_nom_dob_ed').value="";
   document.getElementById('acc_nom_addr_typ_ed').value="";
   document.getElementById('acc_nom_addr_lin_ed').value="";
   document.getElementById('acc_nom_lnd_mrk_ed').value="";
   document.getElementById('acc_nom_vil_ed').value="";
   document.getElementById('acc_nom_pncht_mdl_ed').value="";
   document.getElementById('acc_nom_city_ed').value="";
   document.getElementById('acc_nom_dist_ed').value="";
   document.getElementById('acc_nom_state_ed').value="";
   document.getElementById('acc_nom_postl_ed').value="";
   document.getElementById('acc_nom_phn_num_ed').value="";
   document.getElementById('acc_nom_is_socty_mem_ed').value="";
   document.getElementById('acc_nom_acct_num_ed').value="";
   document.getElementById('acc_nom_adhr_crd_num_ed').value="";
   document.getElementById('acc_nom_isminor_yes_ed').checked=false;
   document.getElementById('acc_nom_isminor_no_ed').checked=false;
}

// Guardian Tab Edit
function edit_clearGuardianTab(){

   document.getElementById('acc_gurdian_name_ed').value="";
   document.getElementById('acc_gurdian_fath_name_ed').value="";
   document.getElementById('acc_gurdian_reltn_ed').value="";
   document.getElementById('acc_gurdian_genmale_ed').checked=false;
   document.getElementById('acc_gurdian_genfemale_ed').checked=false;
   document.getElementById('acc_gurdian_occupation_ed').value="";
   document.getElementById('acc_gurdian_dob_ed').value="";
   document.getElementById('acc_gurdian_minr_acoper_by_ed').value="";
   document.getElementById('acc_gurdian_addr_typ_ed').value="";
   document.getElementById('acc_gurdian_addr_line_ed').value="";
   document.getElementById('acc_gurdian_landmark_ed').value="";
   document.getElementById('acc_gurdian_village_ed').value="";
   document.getElementById('acc_gurdian_pncht_mdl_ed').value="";
   document.getElementById('acc_gurdian_city_ed').value="";
   document.getElementById('acc_gurdian_dist_ed').value="";
   document.getElementById('acc_gurdian_state_ed').value="";
   document.getElementById('acc_gurdian_country_ed').value="";
   document.getElementById('acc_gurdian_phn_num_ed').value="";
   document.getElementById('acc_gurdian_postl_ed').value="";
   document.getElementById('acc_gurdian_addr_ste_ed').value="";
   document.getElementById('acc_gurdian_guar_typ_ed').value="";
   document.getElementById('acc_gurdian_is_socty_mem_ed').value="";
   document.getElementById('acc_gurdian_is_acc_holder_ed').value="";
}

// Joint Holder Tab Edit
function edit_clearJointHolderTab(){
document.getElementById('acc_jnt_hldr_has_jnt_hldr_1_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_1_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_1_ed').disabled=false;
document.getElementById('acc_jnt_hldr_has_jnt_hldr_2_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_2_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_2_ed').disabled=false;
document.getElementById('acc_jnt_hldr_has_jnt_hldr_3_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_3_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_3_ed').disabled=false;
document.getElementById('acc_jnt_hldr_has_jnt_hldr_4_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_4_ed').value="";
document.getElementById('acc_jnt_hldr_jnt_hldr_4_ed').disabled=false;
}

// Authorization Tab Edit
function edit_clearAuthorizationTab(){
   document.getElementById('acc_staff_ed').value="";
   document.getElementById('acc_approval_date_ed').value="";
   document.getElementById('acc_dly_app_state_ed').value="";
}



////////////////////////////////////////////////////////////////////////

//ACCOUNT Details ADD


function accountDetails() {

   // Short Name

   var acc_shrt_nme = document.getElementById("acc_shrt_nme").value;
   if (acc_shrt_nme == "") {
      document.getElementById("acc_shrt_nme").focus();
      swal("", "Please Enter Short Name", "error");
      return false;
   }

   var acc_nme = document.getElementById("acc_nme").value;
   if (acc_nme == "") {
      document.getElementById("acc_nme").focus();
      swal("", "Please Enter Name", "error");
      return false;
   }

   var acc_mem = document.getElementById("acc_mem").value;
   if (acc_mem == "") {
      document.getElementById("acc_mem").focus();
      swal("", "Please Enter Member", "error");
      return false;
   }

   var acc_num = document.getElementById("acc_num").value;
   if (acc_num == "") {
      document.getElementById("acc_num").focus();
      swal("", "Please Enter Account Number", "error");
      return false;
   }

   var acc_typ = document.getElementById("acc_typ").value;
   if (acc_typ == "") {
      document.getElementById("acc_typ").focus();
      swal("", "Please Enter Type of Account", "error");
      return false;
   }

   var acc_stat = document.getElementById("acc_stat").value;
   if (acc_stat == "") {
      document.getElementById("acc_stat").focus();
      swal("", "Please Enter Account Status", "error");
      return false;
   }

   var acc_schm = document.getElementById("acc_schm").value;
   if (acc_schm == "") {
      document.getElementById("acc_schm").focus();
      swal("", "Please Enter Account Scheme", "error");
      return false;
   }

   var acc_cat_typ = document.getElementById("acc_cat_typ").value;
   if (acc_cat_typ == "") {
      document.getElementById("acc_cat_typ").focus();
      swal("", "Please Enter Category Type", "error");
      return false;
   }

   var acc_curr_typ = document.getElementById("acc_curr_typ").value;
   if (acc_curr_typ == "") {
      document.getElementById("acc_curr_typ").focus();
      swal("", "Please Enter Currency Type", "error");
      return false;
   }

   var acc_code = document.getElementById("acc_code").value;
   if (acc_code == "") {
      document.getElementById("acc_code").focus();
      swal("", "Please Enter Code", "error");
      return false;
   }

   var acc_openg_date = document.getElementById("acc_openg_date").value;
   if (acc_openg_date == "") {
      document.getElementById("acc_openg_date").focus();
      swal("", "Please Enter Opening Date", "error");
      return false;
   }

   var acc_opng_amt = document.getElementById("acc_opng_amt").value;
   if (acc_opng_amt == "") {
      document.getElementById("acc_opng_amt").focus();
      swal("", "Please Enter Opening Amount", "error");
      return false;
   }

   var acc_curr_bal = document.getElementById("acc_curr_bal").value;
   if (acc_curr_bal == "") {
      document.getElementById("acc_curr_bal").focus();
      swal("", "Please Enter Current Balance", "error");
      return false;
   }

   var acc_intrst_on_acct = document.getElementById("acc_intrst_on_acct").value;
   if (acc_intrst_on_acct == "") {
      document.getElementById("acc_intrst_on_acct").focus();
      swal("", "Please Enter Interest On Account", "error");
      return false;
   }

   var acc_has_chqbok = document.getElementById("acc_has_chqbok").value;
   if (acc_has_chqbok == "") {
      document.getElementById("acc_has_chqbok").focus();
      swal("", "Please Enter Checkbook field", "error");
      return false;
   }

   var acc_is_sal_acct = document.getElementById("acc_is_sal_acct").value;
   if (acc_is_sal_acct == "") {
      document.getElementById("acc_is_sal_acct").focus();
      swal("", "Please Enter Salary Aaccount", "error");
      return false;
   }

   var acc_count_pay = document.getElementById("acc_count_pay").value;
   if (acc_count_pay == "") {
      document.getElementById("acc_count_pay").focus();
      swal("", "Please Enter Member Counter Pay", "error");
      return false;
   }

   var acc_oprn_instrn = document.getElementById("acc_oprn_instrn").value;
   if (acc_oprn_instrn == "") {
      document.getElementById("acc_oprn_instrn").focus();
      swal("", "Please Enter Account Number Operation Instructions", "error");
      return false;
   }

   var acc_lst_trnscn_date = document.getElementById("acc_lst_trnscn_date").value;
   if (acc_lst_trnscn_date == "") {
      document.getElementById("acc_lst_trnscn_date").focus();
      swal("", "Please Enter Last Transaction Date", "error");
      return false;
   }

   var acc_intdc_det = document.getElementById("acc_intdc_det").value;
   if (acc_intdc_det == "") {
      document.getElementById("acc_intdc_det").focus();
      swal("", "Please Enter Introducer Details", "error");
      return false;
   }

   var acc_intdc_kwn_perd = document.getElementById("acc_intdc_kwn_perd").value;
   if (acc_intdc_kwn_perd == "") {
      document.getElementById("acc_intdc_kwn_perd").focus();
      swal("", "Please Enter Introduce Known Period", "error");
      return false;
   }

   var acc_is_main = document.getElementById("acc_is_main").value;
   if (acc_is_main == "") {
      document.getElementById("acc_is_main").focus();
      swal("", "Please Enter Is Main", "error");
      return false;
   }

   $('#tabs a[href=#accounts_nominee]').tab('show').addClass("active");
   $('#tabs a[href=#account_details]').removeClass("active");

}


//NOMINEE Details


function nomineeAccDetails() {

//    //Name

   var acc_nom_name = document.getElementById("acc_nom_name").value;
   if (acc_nom_name == "") {
      document.getElementById("acc_nom_name").focus();
      swal("", "Please Enter Name", "error");
      return false;
   }


   var acc_nom_fatr_nme = document.getElementById("acc_nom_fatr_nme").value;
   if (acc_nom_fatr_nme == "") {
      document.getElementById("acc_nom_fatr_nme").focus();
      swal("", "Please Enter Father Name", "error");
      return false;
   }

   var acc_nom_reltn = document.getElementById("acc_nom_reltn").value;
   if (acc_nom_reltn == "") {
      document.getElementById("acc_nom_reltn").focus();
      swal("", "Please Enter Relation", "error");
      return false;
   }

   var male = document.getElementById("acc_nom_genmale");
   var female = document.getElementById("acc_nom_genfemale");
   
   if (male.checked){
      console.log("male Selected");
   }else if (female.checked) {
      console.log("male Selected");
   }
   else{
       document.getElementById("acc_nom_genmale").autofocus;
       swal("","please select the Gender","error");
       return false;
   }

   var acc_nom_occptn = document.getElementById("acc_nom_occptn").value;
   if (acc_nom_occptn == "") {
      document.getElementById("acc_nom_occptn").focus();
      swal("", "Please Enter Occupation", "error");
      return false;
   }

   var acc_nom_dob = document.getElementById("acc_nom_dob").value;
   if (acc_nom_dob == "") {
      document.getElementById("acc_nom_dob").focus();
      swal("", "Please Enter Birth Date", "error");
      return false;
   }

   var acc_nom_addr_typ = document.getElementById("acc_nom_addr_typ").value;
   if (acc_nom_addr_typ == "") {
      document.getElementById("acc_nom_addr_typ").focus();
      swal("", "Please Enter Address Type", "error");
      return false;
   }

   var acc_nom_addr_lin = document.getElementById("acc_nom_addr_lin").value;
   if (acc_nom_addr_lin == "") {
      document.getElementById("acc_nom_addr_lin").focus();
      swal("", "Please Enter Address Line", "error");
      return false;
   }

   var acc_nom_lnd_mrk = document.getElementById("acc_nom_lnd_mrk").value;
   if (acc_nom_lnd_mrk == "") {
      document.getElementById("acc_nom_lnd_mrk").focus();
      swal("", "Please Enter Landmark", "error");
      return false;
   }

   var acc_nom_vil = document.getElementById("acc_nom_vil").value;
   if (acc_nom_vil == "") {
      document.getElementById("acc_nom_vil").focus();
      swal("", "Please Enter Village", "error");
      return false;
   }

   var acc_nom_pncht_mdl = document.getElementById("acc_nom_pncht_mdl").value;
   if (acc_nom_pncht_mdl == "") {
      document.getElementById("acc_nom_pncht_mdl").focus();
      swal("", "Please Enter Panchayat Mandal", "error");
      return false;
   }

   var acc_nom_city = document.getElementById("acc_nom_city").value;
   if (acc_nom_city == "") {
      document.getElementById("acc_nom_city").focus();
      swal("", "Please Enter City", "error");
      return false;
   }

   
   var acc_nom_dist = document.getElementById("acc_nom_dist").value;
   if (acc_nom_dist == "") {
      document.getElementById("acc_nom_dist").focus();
      swal("", "Please Enter Disrtict", "error");
      return false;
   }

   
   var acc_nom_state = document.getElementById("acc_nom_state").value;
   if (acc_nom_state == "") {
      document.getElementById("acc_nom_state").focus();
      swal("", "Please Enter State", "error");
      return false;
   }

   var acc_nom_postl = document.getElementById("acc_nom_postl").value;
   if (acc_nom_postl == "") {
      document.getElementById("acc_nom_postl").focus();
      swal("", "Please Enter Postal Code", "error");
      return false;
   }

   else{

      if(acc_nom_postl.length < 6){    // Validating the Postal Code, changes done by Shivu(NODE)
         document.getElementById("acc_nom_postl").focus();
         
         swal("","Please Enter Valid Postal Code","error");
            return false;
            }

      var postcode = /([1-9]{1}[0-9]{5})/;   // Validating the Postal Code, changes done by Shivu(NODE)
      if (!postcode.test(acc_nom_postl))
      {
      document.getElementById("acc_nom_postl").focus();
      
      swal("Invalid","Please Enter Valid Postal Code","warning");
      return false;
      }
   }

   var acc_nom_phn_num = document.getElementById("acc_nom_phn_num").value;
   if (acc_nom_phn_num == "") {
      document.getElementById("acc_nom_phn_num").focus();
      swal("", "Please Enter Phone Number", "error");
      return false;
   }
   else
   {

           if(acc_nom_phn_num.length < 10){
           document.getElementById("acc_nom_phn_num").focus();
           
           swal("","Please Enter valid Phone Number","error");
              return false;
              }

              var phnum1 = /([6-9]{1}[0-9]{9})/;   // Validating the phone Number, changes done by Shivu(NODE)
              if (!phnum1.test(acc_nom_phn_num))
              {
              document.getElementById("acc_nom_phn_num").focus();
              
              swal("Invalid","Please Enter Valid Phone Number","warning");
              return false;
              }

            }


   var acc_nom_is_socty_mem = document.getElementById("acc_nom_is_socty_mem").value;
   if (acc_nom_is_socty_mem == "") {
      document.getElementById("acc_nom_is_socty_mem").focus();
      swal("", "Please Enter Society Member", "error");
      return false;
   }

   var acc_nom_acct_num = document.getElementById("acc_nom_acct_num").value;
   if (acc_nom_acct_num == "") {
      document.getElementById("acc_nom_acct_num").focus();
      swal("", "Please Account Number", "error");
      return false;
   }

   var acc_nom_adhr_crd_num = document.getElementById("acc_nom_adhr_crd_num").value;
   if (acc_nom_adhr_crd_num == "") {
      document.getElementById("acc_nom_adhr_crd_num").focus();
      swal("", "Please Enter Adhaar Card Number", "error");
      return false;
   }

   else
            {
                    if (acc_nom_adhr_crd_num.length <12)
                    {
                            document.getElementById("acc_nom_adhr_crd_num").focus();
                            
                            swal("","Please Enter Valid AADHAR Number","error");
                            return false;
                     }

                     var adhaarnum = /([1-9]{1}[0-9]{11})/;   // Validating the Adhaar Number, changes done by Shivu(NODE)
                     if (!adhaarnum.test(acc_nom_adhr_crd_num))
                     {
                     document.getElementById("acc_nom_adhr_crd_num").focus();
                     
                     swal("Invalid","Please Enter Valid Adhaar Number","warning");
                     return false;
                     }
                            
            
                  
            }

   if( (document.getElementById("acc_nom_isminor_yes").checked==false) && (document.getElementById("acc_nom_isminor_no").checked==false) ){
         document.getElementById("acc_nom_isminor_yes").autofocus;
         swal("","please select Is Minor or Not","error");
         return false;
   }

   else if( (document.getElementById("acc_nom_isminor_yes").checked==true) && (document.getElementById("acc_nom_isminor_no").checked==false) ){
           //  alert("sghdjahsg")

       //$("#guardian_details *").attr("enabled", "enabled").off('click');
       $("#guardian_details *").prop("disabled", false);
      $('#tabs a[href=#guardian_details]').tab('show').addClass("active");
     
   }
   else if((document.getElementById("acc_nom_isminor_yes").checked==false) && (document.getElementById("acc_nom_isminor_no").checked==true) ){
      // document.getElementById("guardian_details").disabled=true;
      $("#guardian_details *").attr("disabled", "disabled").off('click');
      $('#tabs a[href=#joint_holder_details]').tab('show').addClass("active");
   }
 

   $('#tabs a[href=#accounts_nominee]').removeClass("active");

}


//GUARDIAN Details


function guardianAccDetails() {

   // Name

   var acc_gurdian_name = document.getElementById("acc_gurdian_name").value;
   if (acc_gurdian_name == "") {
      document.getElementById("acc_gurdian_name").focus();
      swal("", "Please Enter Name", "error");
      return false;
   }


   var acc_gurdian_fath_name = document.getElementById("acc_gurdian_fath_name").value;
   if (acc_gurdian_fath_name == "") {
      document.getElementById("acc_gurdian_fath_name").focus();
      swal("", "Please Enter Father Name", "error");
      return false;
   }

   var acc_gurdian_reltn = document.getElementById("acc_gurdian_reltn").value;
   if (acc_gurdian_reltn == "") {
      document.getElementById("acc_gurdian_reltn").focus();
      swal("", "Please Enter Relation", "error");
      return false;
   }

   var acc_gurdian_genmale = document.getElementById("acc_gurdian_genmale").value;
   if (acc_gurdian_genmale == "") {
      document.getElementById("acc_gurdian_genmale").focus();
      swal("", "Please Enter Gender", "error");
      return false;
   }

   var acc_gurdian_occupation = document.getElementById("acc_gurdian_occupation").value;
   if (acc_gurdian_occupation == "") {
      document.getElementById("acc_gurdian_occupation").focus();
      swal("", "Please Enter Occupation", "error");
      return false;
   }

   var acc_gurdian_dob = document.getElementById("acc_gurdian_dob").value;
   if (acc_gurdian_dob == "") {
      document.getElementById("acc_gurdian_dob").focus();
      swal("", "Please Enter Date Of Birth", "error");
      return false;
   }

   var acc_gurdian_minr_acoper_by = document.getElementById("acc_gurdian_minr_acoper_by").value;
   if (acc_gurdian_minr_acoper_by == "") {
      document.getElementById("acc_gurdian_minr_acoper_by").focus();
      swal("", "Please Enter Minor Account", "error");
      return false;
   }

   var acc_gurdian_addr_typ = document.getElementById("acc_gurdian_addr_typ").value;
   if (acc_gurdian_addr_typ == "") {
      document.getElementById("acc_gurdian_addr_typ").focus();
      swal("", "Please Enter Address Type", "error");
      return false;
   }

   var acc_gurdian_addr_line = document.getElementById("acc_gurdian_addr_line").value;
   if (acc_gurdian_addr_line == "") {
      document.getElementById("acc_gurdian_addr_line").focus();
      swal("", "Please Enter Address Line", "error");
      return false;
   }

   var acc_gurdian_landmark = document.getElementById("acc_gurdian_landmark").value;
   if (acc_gurdian_landmark == "") {
      document.getElementById("acc_gurdian_landmark").focus();
      swal("", "Please Enter Landmark", "error");
      return false;
   }

   
   var acc_gurdian_village = document.getElementById("acc_gurdian_village").value;
   if (acc_gurdian_village == "") {
      document.getElementById("acc_gurdian_village").focus();
      swal("", "Please Enter Village", "error");
      return false;
   }

   var acc_gurdian_pncht_mdl = document.getElementById("acc_gurdian_pncht_mdl").value;
   if (acc_gurdian_pncht_mdl == "") {
      document.getElementById("acc_gurdian_pncht_mdl").focus();
      swal("", "Please Enter Panchayat Mandal", "error");
      return false;
   }
   
   var acc_gurdian_city = document.getElementById("acc_gurdian_city").value;
   if (acc_gurdian_city == "") {
      document.getElementById("acc_gurdian_city").focus();
      swal("", "Please Enter City", "error");
      return false;
   }


   // var acc_gurdian_dist = document.getElementById("acc_gurdian_dist").value;
   // if (acc_gurdian_dist == "") {
   //    document.getElementById("acc_gurdian_dist").focus();
   //    swal("", "Please Enter District", "error");
   //    return false;
   // }
   
   var acc_gurdian_state = document.getElementById("acc_gurdian_state").value;
   if (acc_gurdian_state == "") {
      document.getElementById("acc_gurdian_state").focus();
      swal("", "Please Enter State", "error");
      return false;
   }

   var acc_gurdian_country = document.getElementById("acc_gurdian_country").value;
   if (acc_gurdian_country == "") {
      document.getElementById("acc_gurdian_country").focus();
      swal("", "Please Enter Country", "error");
      return false;
   }

   var acc_gurdian_phn_num = document.getElementById("acc_gurdian_phn_num").value;
   if (acc_gurdian_phn_num == "") {
      document.getElementById("acc_gurdian_phn_num").focus();
      swal("", "Please Enter Phone Number", "error");
      return false;
   }
   else
   {

           if(acc_gurdian_phn_num.length < 10){
           document.getElementById("acc_gurdian_phn_num").focus();
           
           swal("","Please Enter valid Phone Number","error");
              return false;
              }

              var phnum1 = /([6-9]{1}[0-9]{9})/;   // Validating the phone Number, changes done by Shivu(NODE)
              if (!phnum1.test(acc_gurdian_phn_num))
              {
              document.getElementById("acc_gurdian_phn_num").focus();
              
              swal("Invalid","Please Enter Valid Phone Number","warning");
              return false;
              }

            }
   
   var acc_gurdian_postl = document.getElementById("acc_gurdian_postl").value;
   if (acc_gurdian_postl == "") {
      document.getElementById("acc_gurdian_postl").focus();
      swal("", "Please Enter Postal Code", "error");
      return false;
   }
   else{

      if(acc_gurdian_postl.length < 6){    // Validating the Postal Code, changes done by Shivu(NODE)
         document.getElementById("acc_gurdian_postl").focus();
         
         swal("","Please Enter Valid Postal Code","error");
            return false;
            }

      var postcode = /([1-9]{1}[0-9]{5})/;   // Validating the Postal Code, changes done by Shivu(NODE)
      if (!postcode.test(acc_gurdian_postl))
      {
      document.getElementById("acc_gurdian_postl").focus();
      
      swal("Invalid","Please Enter Valid Postal Code","warning");
      return false;
      }
   }

   var acc_gurdian_addr_ste = document.getElementById("acc_gurdian_addr_ste").value;
   if (acc_gurdian_addr_ste == "") {
      document.getElementById("acc_gurdian_addr_ste").focus();
      swal("", "Please Adress State", "error");
      return false;
   }

   var acc_gurdian_guar_typ = document.getElementById("acc_gurdian_guar_typ").value;
   if (acc_gurdian_guar_typ == "") {
      document.getElementById("acc_gurdian_guar_typ").focus();
      swal("", "Please Enter Guardian ", "error");
      return false;
   }

   var acc_gurdian_is_socty_mem = document.getElementById("acc_gurdian_is_socty_mem").value;
   if (acc_gurdian_is_socty_mem == "") {
      document.getElementById("acc_gurdian_is_socty_mem").focus();
      swal("", "Please Enter Society Member ", "error");
      return false;
   }
                            

   $('#tabs a[href=#joint_holder_details]').tab('show').addClass("active");
   $('#tabs a[href=#guardian_details]').removeClass("active");

}


function jointHolderAccDetails() {

   // Name

   var acc_jnt_hldr_has_jnt_hldr_1 = document.getElementById("acc_jnt_hldr_has_jnt_hldr_1").value;
   if (acc_jnt_hldr_has_jnt_hldr_1 == "") {
      document.getElementById("acc_jnt_hldr_has_jnt_hldr_1").focus();
      swal("", "Please Enter Has Joint Holder 1", "error");
      return false;
   }
   else {
      //alert("ddfksjh")
      if(acc_jnt_hldr_has_jnt_hldr_1 == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_1").value==""){
       //  alert("xmcv")
         document.getElementById("acc_jnt_hldr_jnt_hldr_1").focus();
      swal("", "Please Enter Joint Holder 1", "error");
      return false;
      }
   }


   var acc_jnt_hldr_has_jnt_hldr_2 = document.getElementById("acc_jnt_hldr_has_jnt_hldr_2").value;
   if (acc_jnt_hldr_has_jnt_hldr_2 == "") {
      document.getElementById("acc_jnt_hldr_has_jnt_hldr_2").focus();
      swal("", "Please Enter Has Joint Holder 2", "error");
      return false;
   }

   else {
     // alert("ddfksjh")
      if(acc_jnt_hldr_has_jnt_hldr_2 == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_2").value==""){
        // alert("xmcv")
         document.getElementById("acc_jnt_hldr_jnt_hldr_2").focus();
      swal("", "Please Enter Joint Holder 2", "error");
      return false;
      }
   }

   var acc_jnt_hldr_has_jnt_hldr_3 = document.getElementById("acc_jnt_hldr_has_jnt_hldr_3").value;
   if (acc_jnt_hldr_has_jnt_hldr_3 == "") {
      document.getElementById("acc_jnt_hldr_has_jnt_hldr_3").focus();
      swal("", "Please Enter Has Joint Holder 3", "error");
      return false;
   }

   else {
      // alert("ddfksjh")
       if(acc_jnt_hldr_has_jnt_hldr_3 == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_3").value==""){
         // alert("xmcv")
          document.getElementById("acc_jnt_hldr_jnt_hldr_3").focus();
       swal("", "Please Enter Joint Holder 3", "error");
       return false;
       }
    }

   var acc_jnt_hldr_has_jnt_hldr_4 = document.getElementById("acc_jnt_hldr_has_jnt_hldr_4").value;
   if (acc_jnt_hldr_has_jnt_hldr_4 == "") {
      document.getElementById("acc_jnt_hldr_has_jnt_hldr_4").focus();
      swal("", "Please Enter Has Joint Holder 4", "error");
      return false;
   }
   
   else {
      // alert("ddfksjh")
       if(acc_jnt_hldr_has_jnt_hldr_4 == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_4").value==""){
         // alert("xmcv")
          document.getElementById("acc_jnt_hldr_jnt_hldr_4").focus();
       swal("", "Please Enter Joint Holder 4", "error");
       return false;
       }
    }

   $('#tabs a[href=#authorization]').tab('show').addClass("active");
   $('#tabs a[href=#joint_holder_details]').removeClass("active");

}

function authorizationDetails() {

   // Name

   var acc_staff = document.getElementById("acc_staff").value;
   if (acc_staff == "") {
      document.getElementById("acc_staff").focus();
      swal("", "Please Enter Staff", "error");
      return false;
   }


   var acc_approval_date = document.getElementById("acc_approval_date").value;
   if (acc_approval_date == "") {
      document.getElementById("acc_approval_date").focus();
      swal("", "Please Enter Approval Date", "error");
      return false;
   }

   var acc_dly_app_state = document.getElementById("acc_dly_app_state").value;
   if (acc_dly_app_state == "") {
      document.getElementById("acc_dly_app_state").focus();
      swal("", "Please Enter Approval State", "error");
      return false;
   }
   document.getElementById('accounts_form').submit();

}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Accounts Edit
function accountsEdit()
{
   var acc_shrt_nme_ed = document.getElementById("acc_shrt_nme_ed").value;
   if (acc_shrt_nme_ed == "") {
      document.getElementById("acc_shrt_nme_ed").focus();
      swal("", "Please Enter Short Name", "error");
      return false;
   }

   var acc_nme_ed = document.getElementById("acc_nme_ed").value;
   if (acc_nme_ed == "") {
      document.getElementById("acc_nme_ed").focus();
      swal("", "Please Enter Name", "error");
      return false;
   }

   var acc_mem_ed = document.getElementById("acc_mem_ed").value;
   if (acc_mem_ed == "") {
      document.getElementById("acc_mem_ed").focus();
      swal("", "Please Enter Member", "error");
      return false;
   }

   var acc_num_ed = document.getElementById("acc_num_ed").value;
   if (acc_num_ed == "") {
      document.getElementById("acc_num_ed").focus();
      swal("", "Please Enter Account Number", "error");
      return false;
   }
      else if(acc_num_ed.length < 16){
         document.getElementById("acc_num_ed").focus();
         
         swal("","Please Enter valid 16 Account Number","warning");
         return false;

   }

   var acc_typ_ed = document.getElementById("acc_typ_ed").value;
   if (acc_typ_ed == "") {
      document.getElementById("acc_typ_ed").focus();
      swal("", "Please Enter Type of Account", "error");
      return false;
   }

   var acc_stat_ed = document.getElementById("acc_stat_ed").value;
   if (acc_stat_ed == "") {
      document.getElementById("acc_stat_ed").focus();
      swal("", "Please Enter Account Status", "error");
      return false;
   }

   var acc_schm_ed = document.getElementById("acc_schm_ed").value;
   if (acc_schm_ed == "") {
      document.getElementById("acc_schm_ed").focus();
      swal("", "Please Enter Account Scheme", "error");
      return false;
   }

   var acc_cat_typ_ed = document.getElementById("acc_cat_typ_ed").value;
   if (acc_cat_typ_ed == "") {
      document.getElementById("acc_cat_typ_ed").focus();
      swal("", "Please Enter Category Type", "error");
      return false;
   }

   var acc_curr_typ_ed = document.getElementById("acc_curr_typ_ed").value;
   if (acc_curr_typ_ed == "") {
      document.getElementById("acc_curr_typ_ed").focus();
      swal("", "Please Enter Currency Type", "error");
      return false;
   }

   var acc_code_ed = document.getElementById("acc_code_ed").value;
   if (acc_code_ed == "") {
      document.getElementById("acc_code_ed").focus();
      swal("", "Please Enter Code", "error");
      return false;
   }

   var acc_openg_date_ed = document.getElementById("acc_openg_date_ed").value;
   if (acc_openg_date_ed == "") {
      document.getElementById("acc_openg_date_ed").focus();
      swal("", "Please Enter Opening Date", "error");
      return false;
   }

   var acc_opng_amt_ed = document.getElementById("acc_opng_amt_ed").value;
   if (acc_opng_amt_ed == "") {
      document.getElementById("acc_opng_amt_ed").focus();
      swal("", "Please Enter Opening Amount", "error");
      return false;
   }

   var acc_curr_bal_ed = document.getElementById("acc_curr_bal_ed").value;
   if (acc_curr_bal_ed == "") {
      document.getElementById("acc_curr_bal_ed").focus();
      swal("", "Please Enter Current Balance", "error");
      return false;
   }

   var acc_intrst_on_acct_ed = document.getElementById("acc_intrst_on_acct_ed").value;
   if (acc_intrst_on_acct_ed == "") {
      document.getElementById("acc_intrst_on_acct_ed").focus();
      swal("", "Please Enter Interest On Account", "error");
      return false;
   }

   var acc_has_chqbok_ed = document.getElementById("acc_has_chqbok_ed").value;
   if (acc_has_chqbok_ed == "") {
      document.getElementById("acc_has_chqbok_ed").focus();
      swal("", "Please Enter Checkbook field", "error");
      return false;
   }

   var acc_is_sal_acct_ed = document.getElementById("acc_is_sal_acct_ed").value;
   if (acc_is_sal_acct_ed == "") {
      document.getElementById("acc_is_sal_acct_ed").focus();
      swal("", "Please Enter Salary Aaccount", "error");
      return false;
   }

   var acc_count_pay_ed = document.getElementById("acc_count_pay_ed").value;
   if (acc_count_pay_ed== "") {
      document.getElementById("acc_count_pay_ed").focus();
      swal("", "Please Enter Member Counter Pay", "error");
      return false;
   }

   var acc_oprn_instrn_ed = document.getElementById("acc_oprn_instrn_ed").value;
   if (acc_oprn_instrn_ed == "") {
      document.getElementById("acc_oprn_instrn_ed").focus();
      swal("", "Please Enter Account Number Operation Instructions", "error");
      return false;
   }

   var acc_lst_trnscn_date_ed = document.getElementById("acc_lst_trnscn_date_ed").value;
   if (acc_lst_trnscn_date_ed == "") {
      document.getElementById("acc_lst_trnscn_date_ed").focus();
      swal("", "Please Enter Last Transaction Date", "error");
      return false;
   }

   var acc_intdc_det_ed = document.getElementById("acc_intdc_det_ed").value;
   if (acc_intdc_det_ed == "") {
      document.getElementById("acc_intdc_det_ed").focus();
      swal("", "Please Enter Introducer Details", "error");
      return false;
   }

   var acc_intdc_kwn_perd_ed = document.getElementById("acc_intdc_kwn_perd_ed").value;
   if (acc_intdc_kwn_perd_ed == "") {
      document.getElementById("acc_intdc_kwn_perd_ed").focus();
      swal("", "Please Enter Introduce Known Period", "error");
      return false;
   }
   else{
      var year= /([1-9]){1}([0-9]){3}([-]){1}([0-9]){4}/;
      if (!year.test(acc_intdc_kwn_perd_ed)){
      
      document.getElementById("acc_intdc_kwn_perd_ed").focus();
      swal("Oops!","Please Enter valid year","error");
      return false;
      }
   }

   var acc_is_main_ed = document.getElementById("acc_is_main_ed").value;
   if (acc_is_main_ed == "") {
      document.getElementById("acc_is_main_ed").focus();
      swal("", "Please Enter Is Main", "error");
      return false;
   }

   $('#tabs a[href=#accounts_nominee]').tab('show').addClass("active");
   $('#tabs a[href=#account_details]').removeClass("active");
}



function nomineeEdit()
{
   var acc_nom_name_ed = document.getElementById("acc_nom_name_ed").value;
   if (acc_nom_name_ed == "") {
      document.getElementById("acc_nom_name_ed").focus();
      swal("", "Please Enter Name", "error");
      return false;
   }


   var acc_nom_fatr_nme_ed = document.getElementById("acc_nom_fatr_nme_ed").value;
   if (acc_nom_fatr_nme_ed == "") {
      document.getElementById("acc_nom_fatr_nme_ed").focus();
      swal("", "Please Enter Father Name", "error");
      return false;
   }

   var acc_nom_reltn_ed = document.getElementById("acc_nom_reltn_ed").value;
   if (acc_nom_reltn_ed == "") {
      document.getElementById("acc_nom_reltn_ed").focus();
      swal("", "Please Enter Relation", "error");
      return false;
   }

   var male_ed = document.getElementById("acc_nom_genmale_ed");
   var female_ed = document.getElementById("acc_nom_genfemale_ed");
   
   if (male_ed.checked){
      console.log("male Selected");
   }else if (female_ed.checked) {
      console.log("male Selected");
   }
   else{
       document.getElementById("acc_nom_genmale_ed").autofocus;
       swal("","please select the Gender","error");
       return false;
   }

   var acc_nom_occptn_ed = document.getElementById("acc_nom_occptn_ed").value;
   if (acc_nom_occptn_ed == "") {
      document.getElementById("acc_nom_occptn_ed").focus();
      swal("", "Please Enter Occupation", "error");
      return false;
   }

   var acc_nom_dob_ed = document.getElementById("acc_nom_dob_ed").value;
   if (acc_nom_dob_ed == "") {
      document.getElementById("acc_nom_dob_ed").focus();
      swal("", "Please Enter Birth Date", "error");
      return false;
   }

   var acc_nom_addr_typ_ed = document.getElementById("acc_nom_addr_typ_ed").value;
   if (acc_nom_addr_typ_ed == "") {
      document.getElementById("acc_nom_addr_typ_ed").focus();
      swal("", "Please Enter Address Type", "error");
      return false;
   }

   var acc_nom_addr_lin_ed = document.getElementById("acc_nom_addr_lin_ed").value;
   if (acc_nom_addr_lin_ed == "") {
      document.getElementById("acc_nom_addr_lin_ed").focus();
      swal("", "Please Enter Address Line", "error");
      return false;
   }

   var acc_nom_lnd_mrk_ed = document.getElementById("acc_nom_lnd_mrk_ed").value;
   if (acc_nom_lnd_mrk_ed == "") {
      document.getElementById("acc_nom_lnd_mrk_ed").focus();
      swal("", "Please Enter Landmark", "error");
      return false;
   }

   var acc_nom_vil_ed = document.getElementById("acc_nom_vil_ed").value;
   if (acc_nom_vil_ed == "") {
      document.getElementById("acc_nom_vil_ed").focus();
      swal("", "Please Enter Village", "error");
      return false;
   }

   var acc_nom_pncht_mdl_ed = document.getElementById("acc_nom_pncht_mdl_ed").value;
   if (acc_nom_pncht_mdl_ed == "") {
      document.getElementById("acc_nom_pncht_mdl_ed").focus();
      swal("", "Please Enter Panchayat Mandal", "error");
      return false;
   }

   var acc_nom_city_ed = document.getElementById("acc_nom_city_ed").value;
   if (acc_nom_city_ed == "") {
      document.getElementById("acc_nom_city_ed").focus();
      swal("", "Please Enter City", "error");
      return false;
   }

   
   var acc_nom_dist_ed = document.getElementById("acc_nom_dist_ed").value;
   if (acc_nom_dist_ed== "") {
      document.getElementById("acc_nom_dist_ed").focus();
      swal("", "Please Enter Disrtict", "error");
      return false;
   }

   
   var acc_nom_state_ed = document.getElementById("acc_nom_state_ed").value;
   if (acc_nom_state_ed == "") {
      document.getElementById("acc_nom_state_ed").focus();
      swal("", "Please Enter State", "error");
      return false;
   }

   var acc_nom_postl_ed = document.getElementById("acc_nom_postl_ed").value;
   if (acc_nom_postl_ed == "") {
      document.getElementById("acc_nom_postl_ed").focus();
      swal("", "Please Enter Postal Code", "error");
      return false;
   }

   else{

      if(acc_nom_postl_ed.length < 6){    // Validating the Postal Code, changes done by Shivu(NODE)
         document.getElementById("acc_nom_postl_ed").focus();
         
         swal("","Please Enter Valid Postal Code","error");
            return false;
            }

      var postcode = /([1-9]{1}[0-9]{5})/;   // Validating the Postal Code, changes done by Shivu(NODE)
      if (!postcode.test(acc_nom_postl_ed))
      {
      document.getElementById("acc_nom_postl_ed").focus();
      
      swal("Invalid","Please Enter Valid Postal Code","warning");
      return false;
      }
   }

   var acc_nom_phn_num_ed = document.getElementById("acc_nom_phn_num_ed").value;
   if (acc_nom_phn_num_ed == "") {
      document.getElementById("acc_nom_phn_num_ed").focus();
      swal("", "Please Enter Phone Number", "error");
      return false;
   }
   else
   {

           if(acc_nom_phn_num_ed.length < 10){
           document.getElementById("acc_nom_phn_num_ed").focus();
           
           swal("","Please Enter valid Phone Number","error");
              return false;
              }

              var phnum1 = /([6-9]{1}[0-9]{9})/;   // Validating the phone Number, changes done by Shivu(NODE)
              if (!phnum1.test(acc_nom_phn_num_ed))
              {
              document.getElementById("acc_nom_phn_num_ed").focus();
              
              swal("Invalid","Please Enter Valid Phone Number","warning");
              return false;
              }

            }


   var acc_nom_is_socty_mem_ed = document.getElementById("acc_nom_is_socty_mem_ed").value;
   if (acc_nom_is_socty_mem_ed == "") {
      document.getElementById("acc_nom_is_socty_mem_ed").focus();
      swal("", "Please Enter Society Member", "error");
      return false;
   }

   var acc_nom_acct_num_ed = document.getElementById("acc_nom_acct_num_ed").value;
   if (acc_nom_acct_num_ed== "") {
      document.getElementById("acc_nom_acct_num_ed").focus();
      swal("", "Please Account Number", "error");
      return false;
   }

   var acc_nom_adhr_crd_num_ed = document.getElementById("acc_nom_adhr_crd_num_ed").value;
   if (acc_nom_adhr_crd_num_ed == "") {
      document.getElementById("acc_nom_adhr_crd_num_ed").focus();
      swal("", "Please Enter Adhaar Card Number", "error");
      return false;
   }

   else
            {
                    if (acc_nom_adhr_crd_num_ed.length <12)
                    {
                            document.getElementById("acc_nom_adhr_crd_num_ed").focus();
                            
                            swal("","Please Enter Valid AADHAR Number","error");
                            return false;
                     }

                     var adhaarnum = /([1-9]{1}[0-9]{11})/;   // Validating the Adhaar Number, changes done by Shivu(NODE)
                     if (!adhaarnum.test(acc_nom_adhr_crd_num_ed))
                     {
                     document.getElementById("acc_nom_adhr_crd_num_ed").focus();
                     
                     swal("Invalid","Please Enter Valid Adhaar Number","warning");
                     return false;
                     }
                            
            
                  
            }

   if( (document.getElementById("acc_nom_isminor_yes_ed").checked==false) && (document.getElementById("acc_nom_isminor_no_ed").checked==false) ){
         document.getElementById("acc_nom_isminor_yes_ed").autofocus;
         swal("","please select Is Minor or Not","error");
         return false;
   }

   else if( (document.getElementById("acc_nom_isminor_yes_ed").checked==true) && (document.getElementById("acc_nom_isminor_no_ed").checked==false) ){
           $("#guardian_details *").prop("disabled", false);
      $('#tabs a[href=#guardian_details]').tab('show').addClass("active");
   }
   else if((document.getElementById("acc_nom_isminor_yes_ed").checked==false) && (document.getElementById("acc_nom_isminor_no_ed").checked==true) ){
      // document.getElementById("guardian_details").disabled=true;
      $("#guardian_details *").attr("disabled", "disabled").off('click');



      document.getElementById('acc_gurdian_name_ed').value="";
      document.getElementById('acc_gurdian_fath_name_ed').value="";
      document.getElementById('acc_gurdian_reltn_ed').value="";
      document.getElementById('acc_gurdian_genmale_ed').checked=false;
      document.getElementById('acc_gurdian_genfemale_ed').checked=false;
      document.getElementById('acc_gurdian_occupation_ed').value="";
      document.getElementById('acc_gurdian_dob_ed').value="";
      document.getElementById('acc_gurdian_minr_acoper_by_ed').value="";
      document.getElementById('acc_gurdian_addr_typ_ed').value="";
      document.getElementById('acc_gurdian_addr_line_ed').value="";
      document.getElementById('acc_gurdian_landmark_ed').value="";
      document.getElementById('acc_gurdian_village_ed').value="";
      document.getElementById('acc_gurdian_pncht_mdl_ed').value="";
      document.getElementById('acc_gurdian_city_ed').value="";
      document.getElementById('acc_gurdian_dist_ed').value="";
      document.getElementById('acc_gurdian_state_ed').value="";
      document.getElementById('acc_gurdian_country_ed').value="";
      document.getElementById('acc_gurdian_phn_num_ed').value="";
      document.getElementById('acc_gurdian_postl_ed').value="";
      document.getElementById('acc_gurdian_addr_ste_ed').value="";
      document.getElementById('acc_gurdian_guar_typ_ed').value="";
      document.getElementById('acc_gurdian_is_socty_mem_ed').value="";
      document.getElementById('acc_gurdian_is_acc_holder_ed').value="";


      $('#tabs a[href=#joint_holder_details]').tab('show').addClass("active");
   }


   $('#tabs a[href=#accounts_nominee]').removeClass("active");

}



function guardianEdit(){

   // Name

   var acc_gurdian_name_ed = document.getElementById("acc_gurdian_name_ed").value;
   if (acc_gurdian_name_ed == "") {
      document.getElementById("acc_gurdian_name_ed").focus();
      swal("", "Please Enter Name", "error");
      return false;
   }


   var acc_gurdian_fath_name_ed = document.getElementById("acc_gurdian_fath_name_ed").value;
   if (acc_gurdian_fath_name_ed == "") {
      document.getElementById("acc_gurdian_fath_name_ed").focus();
      swal("", "Please Enter Father Name", "error");
      return false;
   }

   var acc_gurdian_reltn_ed = document.getElementById("acc_gurdian_reltn_ed").value;
   if (acc_gurdian_reltn_ed == "") {
      document.getElementById("acc_gurdian_reltn_ed").focus();
      swal("", "Please Enter Relation", "error");
      return false;
   }

   var acc_gurdian_genmale_ed = document.getElementById("acc_gurdian_genmale_ed").value;
   if (acc_gurdian_genmale_ed == "") {
      document.getElementById("acc_gurdian_genmale_ed").focus();
      swal("", "Please Enter Gender", "error");
      return false;
   }

   var acc_gurdian_occupation_ed = document.getElementById("acc_gurdian_occupation_ed").value;
   if (acc_gurdian_occupation_ed == "") {
      document.getElementById("acc_gurdian_occupation_ed").focus();
      swal("", "Please Enter Occupation", "error");
      return false;
   }

   var acc_gurdian_dob_ed = document.getElementById("acc_gurdian_dob_ed").value;
   if (acc_gurdian_dob_ed == "") {
      document.getElementById("acc_gurdian_dob_ed").focus();
      swal("", "Please Enter Date Of Birth", "error");
      return false;
   }

   var acc_gurdian_minr_acoper_by_ed = document.getElementById("acc_gurdian_minr_acoper_by_ed").value;
   if (acc_gurdian_minr_acoper_by_ed == "") {
      document.getElementById("acc_gurdian_minr_acoper_by_ed").focus();
      swal("", "Please Enter Minor Account", "error");
      return false;
   }

   var acc_gurdian_addr_typ_ed = document.getElementById("acc_gurdian_addr_typ_ed").value;
   if (acc_gurdian_addr_typ_ed == "") {
      document.getElementById("acc_gurdian_addr_typ_ed").focus();
      swal("", "Please Enter Address Type", "error");
      return false;
   }

   var acc_gurdian_addr_line_ed = document.getElementById("acc_gurdian_addr_line_ed").value;
   if (acc_gurdian_addr_line_ed == "") {
      document.getElementById("acc_gurdian_addr_line_ed").focus();
      swal("", "Please Enter Address Line", "error");
      return false;
   }

   var acc_gurdian_landmark_ed = document.getElementById("acc_gurdian_landmark_ed").value;
   if (acc_gurdian_landmark_ed == "") {
      document.getElementById("acc_gurdian_landmark_ed").focus();
      swal("", "Please Enter Landmark", "error");
      return false;
   }

   
   var acc_gurdian_village_ed = document.getElementById("acc_gurdian_village_ed").value;
   if (acc_gurdian_village_ed == "") {
      document.getElementById("acc_gurdian_village_ed").focus();
      swal("", "Please Enter Village", "error");
      return false;
   }

   var acc_gurdian_pncht_mdl_ed = document.getElementById("acc_gurdian_pncht_mdl_ed").value;
   if (acc_gurdian_pncht_mdl_ed == "") {
      document.getElementById("acc_gurdian_pncht_mdl_ed").focus();
      swal("", "Please Enter Panchayat Mandal", "error");
      return false;
   }
   
   var acc_gurdian_city_ed = document.getElementById("acc_gurdian_city_ed").value;
   if (acc_gurdian_city_ed == "") {
      document.getElementById("acc_gurdian_city").focus();
      swal("", "Please Enter City", "error");
      return false;
   }


   // var acc_gurdian_dist_ed = document.getElementById("acc_gurdian_dist_ed").value;
   // if (acc_gurdian_dist_ed == "") {
   //    document.getElementById("acc_gurdian_dist_ed").focus();
   //    swal("", "Please Enter District", "error");
   //    return false;
   // }
   
   var acc_gurdian_state_ed = document.getElementById("acc_gurdian_state_ed").value;
   if (acc_gurdian_state_ed == "") {
      document.getElementById("acc_gurdian_state").focus();
      swal("", "Please Enter State", "error");
      return false;
   }

   var acc_gurdian_country_ed = document.getElementById("acc_gurdian_country_ed").value;
   if (acc_gurdian_country_ed == "") {
      document.getElementById("acc_gurdian_country_ed").focus();
      swal("", "Please Enter Country", "error");
      return false;
   }

   var acc_gurdian_phn_num_ed = document.getElementById("acc_gurdian_phn_num_ed").value;
   if (acc_gurdian_phn_num_ed == "") {
      document.getElementById("acc_gurdian_phn_num_ed").focus();
      swal("", "Please Enter Phone Number", "error");
      return false;
   }
   else
   {

           if(acc_gurdian_phn_num_ed.length < 10){
           document.getElementById("acc_gurdian_phn_num_ed").focus();
           
           swal("","Please Enter valid Phone Number","error");
              return false;
              }

              var phnum1 = /([6-9]{1}[0-9]{9})/;   // Validating the phone Number, changes done by Shivu(NODE)
              if (!phnum1.test(acc_gurdian_phn_num_ed))
              {
              document.getElementById("acc_gurdian_phn_num_ed").focus();
              
              swal("Invalid","Please Enter Valid Phone Number","warning");
              return false;
              }

            }
   
   var acc_gurdian_postl_ed = document.getElementById("acc_gurdian_postl_ed").value;
   if (acc_gurdian_postl_ed == "") {
      document.getElementById("acc_gurdian_postl_ed").focus();
      swal("", "Please Enter Postal Code", "error");
      return false;
   }

   else{

      if(acc_gurdian_postl_ed.length < 6){    // Validating the Postal Code, changes done by Shivu(NODE)
         document.getElementById("acc_gurdian_postl_ed").focus();
         
         swal("","Please Enter Valid Postal Code","error");
            return false;
            }

      var postcode = /([1-9]{1}[0-9]{5})/;   // Validating the Postal Code, changes done by Shivu(NODE)
      if (!postcode.test(acc_nom_postl_ed))
      {
      document.getElementById("acc_gurdian_postl_ed").focus();
      
      swal("Invalid","Please Enter Valid Postal Code","warning");
      return false;
      }
   }

   var acc_gurdian_addr_ste_ed = document.getElementById("acc_gurdian_addr_ste_ed").value;
   if (acc_gurdian_addr_ste_ed == "") {
      document.getElementById("acc_gurdian_addr_ste_ed").focus();
      swal("", "Please Adress State", "error");
      return false;
   }

   var acc_gurdian_guar_typ_ed = document.getElementById("acc_gurdian_guar_typ_ed").value;
   if (acc_gurdian_guar_typ_ed == "") {
      document.getElementById("acc_gurdian_guar_typ_ed").focus();
      swal("", "Please Enter Guardian ", "error");
      return false;
   }

   var acc_gurdian_is_socty_mem_ed = document.getElementById("acc_gurdian_is_socty_mem_ed").value;
   if (acc_gurdian_is_socty_mem_ed == "") {
      document.getElementById("acc_gurdian_is_socty_mem_ed").focus();
      swal("", "Please Enter Society Member ", "error");
      return false;
   }

   $('#tabs a[href=#joint_holder_details]').tab('show').addClass("active");
   $('#tabs a[href=#guardian_details]').removeClass("active");
}

function jointholderEdit(){

// Name

var acc_jnt_hldr_has_jnt_hldr_1_ed = document.getElementById("acc_jnt_hldr_has_jnt_hldr_1_ed").value;
if (acc_jnt_hldr_has_jnt_hldr_1_ed == "") {
   document.getElementById("acc_jnt_hldr_has_jnt_hldr_1_ed").focus();
   swal("", "Please Enter Joint Holder 1", "error");
   return false;
}
else {
  // alert("ddfksjh")
   if(acc_jnt_hldr_has_jnt_hldr_1_ed == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_1_ed").value==""){
     // alert("xmcv")
      document.getElementById("acc_jnt_hldr_jnt_hldr_1_ed").focus();
   swal("", "Please Enter Joint Holder 1", "error");
   return false;
   }
}


var acc_jnt_hldr_has_jnt_hldr_2_ed = document.getElementById("acc_jnt_hldr_has_jnt_hldr_2_ed").value;
if (acc_jnt_hldr_has_jnt_hldr_2_ed == "") {
   document.getElementById("acc_jnt_hldr_has_jnt_hldr_2_ed").focus();
   swal("", "Please Enter Joint Holder 2", "error");
   return false;
}
else {
   //alert("ddfksjh")
   if(acc_jnt_hldr_has_jnt_hldr_2_ed == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_2_ed").value==""){
     // alert("xmcv")
      document.getElementById("acc_jnt_hldr_jnt_hldr_2_ed").focus();
   swal("", "Please Enter Joint Holder 2", "error");
   return false;
   }
}

var acc_jnt_hldr_has_jnt_hldr_3_ed = document.getElementById("acc_jnt_hldr_has_jnt_hldr_3_ed").value;
if (acc_jnt_hldr_has_jnt_hldr_3_ed == "") {
   document.getElementById("acc_jnt_hldr_has_jnt_hldr_3_ed").focus();
   swal("", "Please Enter Joint Holder 3", "error");
   return false;
}
else {
  // alert("ddfksjh")
   if(acc_jnt_hldr_has_jnt_hldr_3_ed == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_3_ed").value==""){
     // alert("xmcv")
      document.getElementById("acc_jnt_hldr_jnt_hldr_3_ed").focus();
   swal("", "Please Enter Joint Holder 3", "error");
   return false;
   }
}

var acc_jnt_hldr_has_jnt_hldr_4_ed = document.getElementById("acc_jnt_hldr_has_jnt_hldr_4_ed").value;
if (acc_jnt_hldr_has_jnt_hldr_4_ed == "") {
   document.getElementById("acc_jnt_hldr_has_jnt_hldr_4_ed").focus();
   swal("", "Please Enter Joint Holder 4", "error");
   return false;
}
else {
  // alert("ddfksjh")
   if(acc_jnt_hldr_has_jnt_hldr_4_ed == 'Yes' && document.getElementById("acc_jnt_hldr_jnt_hldr_4_ed").value==""){
     // alert("xmcv")
      document.getElementById("acc_jnt_hldr_jnt_hldr_4_ed").focus();
   swal("", "Please Enter Joint Holder 4", "error");
   return false;
   }
}

   $('#tabs a[href=#authorization]').tab('show').addClass("active");
   $('#tabs a[href=#joint_holder_details]').removeClass("active");
}


function authorizationEdit() {

   // Name

   var acc_staff_ed = document.getElementById("acc_staff_ed").value;
   if (acc_staff_ed == "") {
      document.getElementById("acc_staff_ed").focus();
      swal("", "Please Enter Staff", "error");
      return false;
   }


   var acc_approval_date_ed = document.getElementById("acc_approval_date_ed").value;
   if (acc_approval_date_ed == "") {
      document.getElementById("acc_approval_date").focus();
      swal("", "Please Enter Approval Date", "error");
      return false;
   }

   var acc_dly_app_state_ed = document.getElementById("acc_dly_app_state_ed").value;
   if (acc_dly_app_state_ed == "") {
      document.getElementById("acc_dly_app_state_ed").focus();
      swal("", "Please Enter Approval State", "error");
      return false;
   }
   document.getElementById('accounts_form_edit').submit();

}



// Accounts View
function accountsView()
{
   $('#tabs a[href=#accounts_nominee]').tab('show').addClass("active");
   $('#tabs a[href=#account_details]').removeClass("active");
}

function nomineeView()
{
   if(document.getElementById("acc_nom_isminor_no_vw").checked == true){
   $('#tabs a[href=#joint_holder_details]').tab('show').addClass("active");
   $('#tabs a[href=#accounts_nominee]').removeClass("active");
   }

   else if (document.getElementById("acc_nom_isminor_yes_vw").checked == true)
   {
      $('#tabs a[href=#guardian_details]').tab('show').addClass("active");
      $('#tabs a[href=#accounts_nominee]').removeClass("active");
   }
}

function guardianView(){
   $('#tabs a[href=#joint_holder_details]').tab('show').addClass("active");
   $('#tabs a[href=#guardian_details]').removeClass("active");
}

function jointholderView(){
   $('#tabs a[href=#authorization]').tab('show').addClass("active");
   $('#tabs a[href=#joint_holder_details]').removeClass("active");
}



// Accounts EDIT
function accounts_edit(accedt)
{
 //alert(accedt)
var accedtid = accedt.id;
 //alert("This object's ID attribute is set to \"" + accedtid + "\"."); 
 var aced1=document.getElementById("acc_edit"+accedtid).value;
 //alert("radio button value"+aced1)
document.getElementById("radio_accadd_edit"+aced1).checked=true;
var accidchecked=$("input[name='radio_accadd_edit']:checked").val();
 //alert(accidchecked);


var acc_type_id=document.getElementById('radio_accadd_edit'+accidchecked).value;
//alert("BANK ID -----------------------"+acc_type_id);

document.getElementById("edit_account").value=acc_type_id;
document.getElementById("account_edit").submit();
}


// Accounts VIEW
function accounts_view(accview)
{
 //alert(accview)
var accviewid = accview.id;
 //alert("This object's ID attribute is set to \"" + accviewid + "\"."); 
 var accvw1=document.getElementById("acc_view"+accviewid).value;
 //alert("radio button value" +accvw1)
document.getElementById("radio_accadd_view"+accvw1).checked=true;
var accviewidchecked=$("input[name='radio_accadd_view']:checked").val();
 //alert(accviewidchecked);


var acc_viewtype_id=document.getElementById('radio_accadd_view'+accviewidchecked).value;
//alert("Account ID -----------------------"+acc_viewtype_id);

document.getElementById("view_account").value=acc_viewtype_id;
document.getElementById("account_view").submit();
}


// Accounts DELETE
function accounts_delete(accdel)
{
 //alert(accdel)
var accdelid = accdel.id;
 //alert("This object's ID attribute is set to \"" + accdelid + "\"."); 
 var accdel1=document.getElementById("acc_delete"+accdelid).value;
 //alert("radio button value" +accdel1)
document.getElementById("radio_accadd_delete"+accdel1).checked=true;
var accdeleteidchecked=$("input[name='radio_accadd_delete']:checked").val();
 //alert(accdeleteidchecked);


var acc_delete_id=document.getElementById('radio_accadd_delete'+accdeleteidchecked).value;
//alert("Account ID -----------------------"+acc_delete_id);

document.getElementById("delete_account").value=acc_delete_id;

}

function confirm_delete_account(){
   document.getElementById("account_delete").submit();
}




/// TYPEHEAD SCRIPT for ACCOUNT SCHEME


$(document).ready(function(){
   // alert("getting in")
   var accschemearr=[];

   $.ajax({
   type:"post",
   url:"/accountsModule/accountsDetails/ajax_acc_schemes",
success:function(data,response){
// alert("details");
console.log("Success");
console.log("details",data);
var response=data;
for(var i=0;i<response.length;i++){
   accschemearr.push(response[i].ac_ch_acct_scheme);

}
console.log("result of branch code arr",accschemearr)


   // Constructing the suggestion engine

   var accschemecodes = new Bloodhound({
       datumTokenizer: Bloodhound.tokenizers.whitespace,
       queryTokenizer: Bloodhound.tokenizers.whitespace,
       local: accschemearr
   });
   

   // Initializing the typeahead
   $('.typeahead2').typeahead({
       hint: true,
       highlight: true, /* Enable substring highlighting */
       minLength: 1, /* Specify minimum characters required for showing result */   
   },
   {   
       name: 'accschemecodes',
       source: accschemecodes, 
       onselect: function(obj) { console.log(obj) } 
   });


}
}); 

});
/*ACCOUNTS ADD DETAILS-END*/

// Back Navigation of Joint holder to Nominee In Accounts Add Details 

function backJointHolder(){
   if(document.getElementById("acc_nom_isminor_no").checked == true){
      $('#tabs a[href=#accounts_nominee]').tab('show').addClass("active");
      $('#tabs a[href=#joint_holder_details]').removeClass("active");
   }
   else if(document.getElementById("acc_nom_isminor_yes").checked == true){
      $('#tabs a[href=#guardian_details]').tab('show').addClass("active");
      $('#tabs a[href=#joint_holder_details]').removeClass("active");
   }
}

function backJointHolderEdit(){
   if(document.getElementById("acc_nom_isminor_no_ed").checked == true){
      $('#tabs a[href=#accounts_nominee]').tab('show').addClass("active");
      $('#tabs a[href=#joint_holder_details]').removeClass("active");
   }
   else if(document.getElementById("acc_nom_isminor_yes_ed").checked == true){
      $('#tabs a[href=#guardian_details]').tab('show').addClass("active");
      $('#tabs a[href=#joint_holder_details]').removeClass("active");
   }
}

function backJointHolderView(){
   if(document.getElementById("acc_nom_isminor_no_vw").checked == true){
      $('#tabs a[href=#accounts_nominee]').tab('show').addClass("active");
      $('#tabs a[href=#joint_holder_details]').removeClass("active");
   }
   else if(document.getElementById("acc_nom_isminor_yes_vw").checked == true){
      $('#tabs a[href=#guardian_details]').tab('show').addClass("active");
      $('#tabs a[href=#joint_holder_details]').removeClass("active");
   }
}

