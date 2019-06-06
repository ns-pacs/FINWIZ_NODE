

/* Society- KCC Target- START*/
function kcc_target()
{
    document.getElementById('crdlmt').submit();
}


function edit_kcc_target(oObject)
{

    var id = oObject.id;
    // alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
     //alert("vb"+rb1)
   document.getElementById("radiobutton1kcc_target"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton1kcc_target']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var kcc_id=document.getElementById('kcc_target_id'+idchecked1).value;
     //alert("acc_lmt_id -----------------------"+kcc_id);
   
   document.getElementById("kcctargettempid1").value=kcc_id;
   document.getElementById("kcc_target_edit").submit();


}

function view_kcc_target(oObject)
{

  
    var id = oObject.id;
     //alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("vf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton2kcc_target"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton2kcc_target']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var kcc_id=document.getElementById('kcc_target_id1'+idchecked1).value;
    // alert("acc_lmt_id -----------------------"+kcc_id);
   
   document.getElementById("kcctargettempid2").value=kcc_id;
   document.getElementById("kcc_target_view").submit();
 



}


function delete_kcc_target(oObject)
{
    var id = oObject.id;
    // alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
    //alert("vb"+rb1)
   document.getElementById("radiobutton3kcc_target"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton3kcc_target']:checked").val();
  // alert("idchecked"+idchecked1);
   
   
   var kcc_id=document.getElementById('kcc_target_id2'+idchecked1).value;
    // alert("acc_lmt_id -----------------------"+kcc_id);
   
   document.getElementById("tempkccid3").value=kcc_id;
 
 
}

function delete_acclmt_detail_onconfirm(){
    document.getElementById("delete_kcc_target_form").submit();
      
      }   

//search

function kcc_target_search(){

  document.getElementById("fin_year").value='';
        document.getElementById("cust_category").value='';
}

//kcc target edit clear form

function kcc_target_submit_form()
{




              var Financial_Year = document.getElementById("fin_year_ed").value;
              if(Financial_Year == ""){
              document.getElementById("fin_year_ed").focus();
              swal("Oops!","Please Enter the year","error");
              return false;
              }
              
              else{
              var year= /([1-2]){1}([0-9]){3}([-]){1}([1-2]){1}([0-9]){3}/;
              if (!year.test(Financial_Year)){
              
              document.getElementById("fin_year_ed").focus();
              swal("Oops!","Please Enter valid year","error");
              return false;
              }
            } 

              var mem_cat = document.getElementById("cust_category_ed").value;
              if(mem_cat == ""){
                              document.getElementById("cust_category_ed").focus();
                              
                              swal("Oops!","Please Enter member category","error");
                              return false;
                          }


                          var target_qty = document.getElementById("trgt_qty_ed").value;
              if(target_qty == ""){
                              document.getElementById("trgt_qty_ed").focus();
                              
                              swal("Oops!","Please Enter target quantity","error");
                              return false;
                          }
            
                          document.getElementById("kcc_target_editform").submit();

}





function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
     if (charCode != 48 && charCode > 31 
      && (charCode < 48 || charCode > 57))
        return false;
           return true;
   }




function years(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
     if (charCode != 45 && charCode > 31 
      && (charCode < 48 || charCode > 57))
        return false;
           return true;
   }


function kcc_target()
{


              var Financial_Year = document.getElementById("fin_year").value;
              if(Financial_Year == ""){
              document.getElementById("fin_year").focus();
              swal("Oops!","Please Enter the year","error");
              return false;
              }
              
              else{
              var year= /([1-2]){1}([0-9]){3}([-]){1}([1-2]){1}([0-9]){3}/;
              if (!year.test(Financial_Year)){
              
              document.getElementById("fin_year").focus();
              swal("Oops!","Please Enter valid year","error");
              return false;

          
              }
            } 
            


              var mem_cat = document.getElementById("cust_category").value;
              if(mem_cat == ""){
                              document.getElementById("cust_category").focus();
                              
                              swal("Oops!","Please Enter member category","error");
                              return false;
                          }


                          var target_qty = document.getElementById("trgt_qty").value;
              if(target_qty == ""){
                              document.getElementById("trgt_qty").focus();
                              
                              swal("Oops!","Please Enter target quantity","error");
                              return false;
                          }
            
                          document.getElementById("crdlmt").submit();

}

function kcc_taget_edit_clear()
{
  document.getElementById("fin_year_ed").value='';
  document.getElementById("cust_category_ed").value='';
  document.getElementById("trgt_qty_ed").value='';
}


/* Society- KCC Target- END*/



/* Society- KCC Credit Limits- START*/
///edit kcc credit limit
function edit_kcc_credit_lmt(oObject)
{

    var id = oObject.id;
    //  alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
    //  alert("vb"+rb1)
   document.getElementById("radiobutton1kcc_credit_lmt"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton1kcc_credit_lmt']:checked").val();
    //  alert("idchecked"+idchecked1);
   
   
   var kcc_id=document.getElementById('kcc_credit_id'+idchecked1).value;
    //  alert("acc_lmt_id -----------------------"+kcc_id);
   
   document.getElementById("kcccreditid1").value=kcc_id;
   document.getElementById("kcc_credit_lmt_edit").submit();


}




function view_kcc_credit_lmt(oObject)
{

  
    var id = oObject.id;
     //alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("vf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton2kcc_credit_lmt"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton2kcc_credit_lmt']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var kcc_id=document.getElementById('kcc_credit_id1'+idchecked1).value;
    // alert("acc_lmt_id -----------------------"+kcc_id);
   
   document.getElementById("kcccreditid2").value=kcc_id;
   document.getElementById("kcc_credit_lmt_view").submit();
 
}


//delete credit

function delete_credit_lmt(oObject)
{
    var id = oObject.id;
     //alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
   // alert("vb"+rb1)
   document.getElementById("radiobutton3kcc_credit_lmt"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton3kcc_credit_lmt']:checked").val();
   //alert("idchecked"+idchecked1);
   
   
   var kcc_id=document.getElementById('kcc_credit_id2'+idchecked1).value;
     //alert("acc_lmt_id -----------------------"+kcc_id);
   
   document.getElementById("tempkccid3").value=kcc_id;
 
 
}

function delete_kcc_credit_detail_onconfirm(){
  document.getElementById("delete_credit_lmt").submit();
    
    }   

   function kcc_search_credit_reset()
   {
    document.getElementById("kc_crd_lmt").value='';
    document.getElementById("cust_category").value='';

    document.getElementById("kcc_crd_dt").value='';



   }


   function kcc_credit_lmt_edit_clear(){
    document.getElementById("kc_crd_lmt").value='';

    document.getElementById("cust_category").value='';
    document.getElementById("kcc_crd_dt").value='';

    document.getElementById("sacn_crd_lmt").value='';


   }



   //kcc credit validation
function credit_limit_validation()
{


              var loan_type = document.getElementById("kc_crd_lmt").value;
              if(loan_type == ""){
              document.getElementById("kc_crd_lmt").focus();
              swal("Oops!","Please Enter the loantype","error");
              return false;
              }


              var member_category = document.getElementById("cust_category").value;
              if(member_category == ""){
              document.getElementById("cust_category").focus();
              swal("Oops!","Please Enter the member category","error");
              return false;
              }


              var sanction_date = document.getElementById("kcc_crd_dt").value;
              if(sanction_date == ""){
              document.getElementById("kcc_crd_dt").focus();
              swal("Oops!","Please Enter the sanction date","error");
              return false;
              }

              var credit_lmt = document.getElementById("sacn_crd_lmt").value;
              if(credit_lmt == ""){
              document.getElementById("sacn_crd_lmt").focus();
              swal("Oops!","Please Enter the credit limit amount","error");
              return false;
              }
              document.getElementById("crdlmt").submit();
            }


  //credit limit validation

  function edit_credit_lmt_val()
{


              var loan_type = document.getElementById("kc_crd_lmt").value;
              if(loan_type == ""){
              document.getElementById("kc_crd_lmt").focus();
              swal("Oops!","Please Enter the loantype","error");
              return false;
              }


              var member_category = document.getElementById("cust_category").value;
              if(member_category == ""){
              document.getElementById("cust_category").focus();
              swal("Oops!","Please Enter the member category","error");
              return false;
              }


              var sanction_date = document.getElementById("kcc_crd_dt").value;
              if(sanction_date == ""){
              document.getElementById("kcc_crd_dt").focus();
              swal("Oops!","Please Enter the sanction date","error");
              return false;
              }

              var credit_lmt = document.getElementById("sacn_crd_lmt").value;
              if(credit_lmt == ""){
              document.getElementById("sacn_crd_lmt").focus();
              swal("Oops!","Please Enter the credit limit amount","error");
              return false;
              }
              document.getElementById("credit_lmt_edit").submit();
            }
 /* Society- KCC Credit Limits- END*/