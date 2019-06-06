function alpha(alpbts)
{
   var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
   if (charCode > 32 
         && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122)  && (charCode > 47 || charCode < 58) )
      return false;
   return true;
}
// Only AlphaNumeric for required functions
function alphanumeric(memid)
{
   var charCode = (memid.which) ? memid.which : memid.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122))
      return false;
   return true;
}


function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
     if (charCode != 48 && charCode > 31 
      && (charCode < 48 || charCode > 57))
        return false;
           return true;
   }

/////////////////////////////////HOLIDAY DETAILS START////////////////////////////////////////////////////////

//date validation in serach page//
function required_holiday_date(){
     //  console.log("coming inside")
   var holi_from_date = document.getElementById("holi_from_date").value;
   var holi_to_date = document.getElementById("holi_to_date").value;
   var comp_from_date = document.getElementById("comp_from_date").value;
   var comp_to_date = document.getElementById("comp_to_date").value;
//alert((holi_from_date!= "") && (holi_to_date== "") || ((holi_from_date== "") && (holi_to_date!= "")))
//alert((comp_from_date!="") && (comp_to_date=="") || ((comp_from_date=="") && (comp_to_date!="")))

   if((holi_from_date!= "") && (holi_to_date== "") || ((holi_from_date== "") && (holi_to_date!= ""))){
       
      // console.log("holiday date pair missing")
           swal("","Please Enter Holiday Date","error");
           return false;
   }

          
   
   if((comp_from_date!= "") && (comp_to_date== "") || ((comp_from_date== "") && (comp_to_date!= ""))){
           swal("","Please Enter Compensation Date","error");
           return false;
           }

     document.getElementById('holiday_search').submit(); 

}





//function to edit holiday list////

function edit_holiday_row(oObject)
    {
    // alert(oObject)
    var id = oObject.id;
    //alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);
  
  
var l_id=document.getElementById('radiobutton1rfed'+idchecked).value;
 //alert("LIST ID -----------------------"+l_id)


document.getElementById("templistid").value=l_id;
document.getElementById("holiday_editing").submit();


    }

    /////function to view holiday list//
    function view_holiday_row(oObject)
    {
     //alert(oObject)
    var id = oObject.id;
  //alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("vf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
 //alert(idchecked);
  
  
var l_id=document.getElementById('radiobutton1rfvw'+idchecked).value;
 //alert("LIST ID -----------------------"+l_id)



document.getElementById("templistidvw").value=l_id;
document.getElementById("holiday_view").submit();


    }

////function to delete holiday record///
    function  delete_holiday_row(oObject)
    {
         // alert(oObject)
       var id = oObject.id;
       //alert("This object's ID attribute is set to \"" + id + "\"."); 
     var rb1=document.getElementById("df"+id).value;
    // alert("rb1"+rb1)
     document.getElementById("radiobutton1rfdel"+rb1).checked=true;
         var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
    // alert(idchecked);
       
       
     var del_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
     //alert("HOLIDAY ID -----------------------"+del_id)
     
     
     
     document.getElementById("tempholidaydelid1").value=del_id;

    }
//////////////////delete holiday row onclick of confirm button///////////////
function delete_holiday_row_onconfirm()
{
    document.getElementById("holiday_delete").submit();

}
 
//function to clear all fields in search screen///
function resetform_holidaydetails(){
    document.getElementById('holi_from_date').value='';
    document.getElementById('holi_to_date').value='';
     document.getElementById('comp_from_date').value='';
     document.getElementById('comp_to_date').value='';
    
}

///function to clear all fields in add page///
function holiday_add_clear()
{
    document.getElementById('holi_from_date_add').value="";
    document.getElementById('holi_to_date_add').value="";
    document.getElementById('comp_from_date_add').value="";
    document.getElementById('comp_to_date_add').value="";
    document.getElementById('Iscomp_holi').value="";
    document.getElementById('purp').value="";
    document.getElementById('holi_add').value="";
}




///function to clear all fields in edit page//
function holiday_edit_clear()
{
    document.getElementById('holi_from_date_ed').value="";
    document.getElementById('holi_to_date_ed').value="";
    document.getElementById('comp_from_date_ed').value="";
    document.getElementById('comp_to_date_ed').value="";
    document.getElementById('Iscomp_holi_ed').value="";
    document.getElementById('purp_ed').value="";
    document.getElementById('holi_vw').value="";
}

///function to validate fields in add page//
function listDetails(){

       
        // var holi_from_date = document.getElementById("holi_from_date_add").value;
        // var holi_to_date = document.getElementById("holi_to_date_add").value;

        // if((holi_from_date!= "") && (holi_to_date== "") || ((holi_from_date== "") && (holi_to_date!= "")) ){
        //         swal("","Please Enter Holiday Date","error");
        //         return false;
        //         }



    
    var holi_from_date = document.getElementById("holi_from_date_add").value;
    
                                        if(holi_from_date==""){
                                       
                                                        document.getElementById("holi_from_date_add").focus();
                                                        
                                                        swal("Oops!","Please Enter Holiday FromDate","error");
                                                        return false;
                                                    }
    
                                                    
    
    
    var holi_to_date = document.getElementById("holi_to_date_add").value;
                                        if(holi_to_date == ""){
                                            document.getElementById("holi_to_date_add").focus();
                                            
                                            swal("Oops!","Please Enter Holiday ToDate","error");
                                            return false;
                                        }


        // var comp_from_date = document.getElementById("comp_from_date_add").value;
        // var comp_to_date = document.getElementById("comp_to_date_add").value;

        // if((comp_from_date!= "") && (comp_to_date== "") || ((comp_from_date== "") && (comp_to_date!= "")) ){
        //         swal("","Please Enter Holiday Date","error");
        //         return false;
        //         }

                

    var comp_from_date = document.getElementById("comp_from_date_add").value;
                                        if(comp_from_date == ""){
                                            document.getElementById("comp_from_date_add").focus();
                                            
                                            swal("Oops!","Please Enter Compensation FromDate","error");
                                            return false;
                                        }

                                        
   var comp_to_date = document.getElementById("comp_to_date_add").value;
                                        if(comp_to_date == ""){
                                            document.getElementById("comp_to_date_add").focus();
                                            
                                            swal("Oops!","Please Enter Compensation ToDate","error");
                                            return false;
                                        }


    var Iscomp = document.getElementById("Iscomp_holi").value;
                                        if(Iscomp == ""){
                                            document.getElementById("Iscomp_holi").focus();
                                            
                                            swal("Oops!","Please Select Is Compensation Holiday","error");
                                            return false;
                                        }


    var purppose = document.getElementById("purp").value;
                                        if(purppose == ""){
                                            document.getElementById("purp").focus();
                                            
                                            swal("Oops!","Please Enter Purpose","error");
                                            return false;
                                        }

    var holi_type = document.getElementById("holi_add").value;
                                        if(holi_type == ""){
                                            document.getElementById("holi_add").focus();
                                            
                                            swal("Oops!","Please Select Holiday Type","error");
                                            return false;
                                        }

document.getElementById('holiday_list').submit();
}

function listEditDetails(){
////function to validate fields in edit screen///
                                        var holi_from_date_ed = document.getElementById("holi_from_date_ed").value;
                                        
                                                                            if(holi_from_date_ed==""){
                                                                       
                                                                                            document.getElementById("holi_from_date_ed").focus();
                                                                                            
                                                                                            swal("Oops!","Please Enter Holiday FromDate","error");
                                                                                            return false;
                                                                                        }
                                        
                                                                                        
                                        
                                    
                                        
                                        var holi_to_date_ed = document.getElementById("holi_to_date_ed").value;
                                                                            if(holi_to_date_ed == ""){
                                                                                document.getElementById("holi_to_date_ed").focus();
                                                                                
                                                                                swal("Oops!","Please Enter Holiday ToDate","error");
                                                                                return false;
                                                                            }
                                    
                                    
                                        var comp_from_date_ed = document.getElementById("comp_from_date_ed").value;
                                                                            if(comp_from_date_ed == ""){
                                                                                document.getElementById("comp_from_date_ed").focus();
                                                                                
                                                                                swal("Oops!","Please Enter Compensation FromDate","error");
                                                                                return false;
                                                                            }
                                    
                                                                            
                                       var comp_to_date_ed = document.getElementById("comp_to_date_ed").value;
                                                                            if(comp_to_date_ed == ""){
                                                                                document.getElementById("comp_to_date_ed").focus();
                                                                                
                                                                                swal("Oops!","Please Enter Compensation ToDate","error");
                                                                                return false;
                                                                            }
                                    
                                    
                                        var Iscomp_holi_ed = document.getElementById("Iscomp_holi_ed").value;
                                                                            if(Iscomp_holi_ed == ""){
                                                                                document.getElementById("Iscomp_holi_ed").focus();
                                                                                
                                                                                swal("Oops!","Please Select Is Compensation Holiday","error");
                                                                                return false;
                                                                            }
                                    
                                    
                                        var purp_ed = document.getElementById("purp_ed").value;
                                                                            if(purp_ed == ""){
                                                                                document.getElementById("purp_ed").focus();
                                                                                
                                                                                swal("Oops!","Please Enter Purpose","error");
                                                                                return false;
                                                                            }
                                    
                                        var holi_vw = document.getElementById("holi_vw").value;
                                                                            if(holi_vw == ""){
                                                                                document.getElementById("holi_vw").focus();
                                                                                
                                                                                swal("Oops!","Please Select Holiday Type","error");
                                                                                return false;
                                                                            }
document.getElementById('holiday_list_ed').submit();

                                    }
                                        
  //////////////HOLIDAY DETAILS END//////////////


////////////////////ACCOUNT TYPE DETAILS START/////////////////////////////////

//function to edit row in account type//
function edit_account_row(oObject)
    {
     //alert(oObject)
    var id = oObject.id;
   // alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);
  
  
var acc_id=document.getElementById('radiobutton1rfed'+idchecked).value;
// alert("ACC ID -----------------------"+acc_id)


document.getElementById("tempaccided").value=acc_id;
document.getElementById("edit_data_load_form").submit();


    }

  //function to view row in account type//
    function view_account_row(oObject)
    {
     //alert(oObject)
    var id = oObject.id;
  //alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("vf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
// alert(idchecked);
  
  
var acc_id=document.getElementById('radiobutton1rfvw'+idchecked).value;
 //alert("ACC ID -----------------------"+acc_id)



document.getElementById("tempaccidvw").value=acc_id;
document.getElementById("view_data_load_form").submit();


    }

//function to delete row in account type//
    function  delete_account_row(oObject)
    {
        //  alert(oObject)
       var id = oObject.id;
       // alert("This object's ID attribute is set to \"" + id + "\"."); 
     var rb1=document.getElementById("df"+id).value;
     //alert("rb1"+rb1)
     document.getElementById("radiobutton1rfdel"+rb1).checked=true;
         var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
     //alert(idchecked);
       
       
     var accdel_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
  //   alert("ACC ID -----------------------"+accdel_id)
     
     
     
     document.getElementById("tempacciddel").value=accdel_id;

    }
//////////////////delete account type row onclick of confirm button///////////////
function delete_acc_row_onconfirm()
{
    document.getElementById("account_type").submit();

}


//function to clear all fields in add page//
function account_add_clear()
{
    document.getElementById('scty_acc_typ').value="";
    document.getElementById('scty_acc_typ_shrt_nme_add').value="";
    document.getElementById('scty_acc_typ_desc_add').value="";
    
}


///function to clear all fields in edit page//
function account_edit_clear()
{
    document.getElementById('scty_acc_typ_ed').value="";
    document.getElementById('scty_acc_typ_shrt_nme_ed').value="";
    document.getElementById('scty_acc_typ_desc_ed').value="";
    
}

//function to clear all fields in search//
function resetform_accdetails(){
    document.getElementById('scty_acc_typ_srch').value='';
    document.getElementById('scty_acc_typ_shrt_nme_srch').value='';
     document.getElementById('scty_acc_typ_desc_srch').value='';
}


//function to validate all fields in add page//

function accountDetails(){

    
    var scty_acc_typ_v = document.getElementById("scty_acc_typ").value;
    
                                        if(scty_acc_typ_v==""){
                                       
                                                        document.getElementById("scty_acc_typ").focus();
                                                        
                                                        swal("Oops!","Please Select Account Type","error");
                                                        return false;
                                                    }
    
                                                    
    
    
    var scty_acc_typ_shrt_nme_add_v = document.getElementById("scty_acc_typ_shrt_nme_add").value;
                                        if(scty_acc_typ_shrt_nme_add_v == ""){
                                            document.getElementById("scty_acc_typ_shrt_nme_add").focus();
                                            
                                            swal("Oops!","Please Enter Short Name","error");
                                            return false;
                                        }


    var scty_acc_typ_desc_add_v = document.getElementById("scty_acc_typ_desc_add").value;
                                        if(scty_acc_typ_desc_add_v == ""){
                                            document.getElementById("scty_acc_typ_desc_add").focus();
                                            
                                            swal("Oops!","Please Enter Description","error");
                                            return false;
                                        }
                                        document.getElementById('account_add_type').submit();
}

//function to validate all fields in edit page//
function accountEditDetails(){

    
    var scty_acc_typ_ed_v = document.getElementById("scty_acc_typ_ed").value;
    
                                        if(scty_acc_typ_ed_v==""){
                                       
                                                        document.getElementById("scty_acc_typ_ed").focus();
                                                        
                                                        swal("Oops!","Please Select Account Type","error");
                                                        return false;
                                                    }
    
                                                    
    
    
    var scty_acc_typ_shrt_nme_ed_v = document.getElementById("scty_acc_typ_shrt_nme_ed").value;
                                        if(scty_acc_typ_shrt_nme_ed_v == ""){
                                            document.getElementById("scty_acc_typ_shrt_nme_ed").focus();
                                            
                                            swal("Oops!","Please Enter Short Name","error");
                                            return false;
                                        }


    var scty_acc_typ_desc_ed_v = document.getElementById("scty_acc_typ_desc_ed").value;
                                        if(scty_acc_typ_desc_ed_v == ""){
                                            document.getElementById("scty_acc_typ_desc_ed").focus();
                                            
                                            swal("Oops!","Please Enter Description","error");
                                            return false;
                                        }
                                        document.getElementById('account_edit_type').submit();
}


////////////////////ACCOUNT SCHEME DETAILS START/////////////////////////////////

//function to edit row in account scheme//
function edit_scheme_row(oObject)
    {
    // alert(oObject)
    var id = oObject.id;
   // alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);
  
  
var sch_id=document.getElementById('radiobutton1rfed'+idchecked).value;
//alert("SCHEME ID -----------------------"+sch_id)


document.getElementById("tempschided").value=sch_id;
document.getElementById("edit_data_load_form").submit();


    }

  //function to view row in account scheme//
    function view_scheme_row(oObject)
    {
     //alert(oObject)
   var id = oObject.id;
  //alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("vf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
 //alert(idchecked);
  
  
var sch_id=document.getElementById('radiobutton1rfvw'+idchecked).value;
 //alert("SCHEME ID -----------------------"+sch_id)



document.getElementById("tempschidvw").value=sch_id;
document.getElementById("view_data_load_form").submit();


    }

//function to delete row in account scheme//
    function  delete_scheme_row(oObject)
    {
       //  alert(oObject)
       var id = oObject.id;
      //  alert("This object's ID attribute is set to \"" + id + "\"."); 
     var rb1=document.getElementById("df"+id).value;
    // alert("rb1"+rb1)
     document.getElementById("radiobutton1rfdel"+rb1).checked=true;
         var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
  //   alert(idchecked);
       
       
     var schdel_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
   //alert("SCHEME ID -----------------------"+schdel_id)
     
     
     
     document.getElementById("tempschiddel").value=schdel_id;

    }
//////////////////delete account scheme row onclick of confirm button///////////////
function delete_scheme_row_onconfirm()
{
    document.getElementById("account_scheme").submit();

}


//function to clear all fields in add page//
function scheme_add_clear()
{
    document.getElementById('scty_acc_schm_code_add').value="";
    document.getElementById('scty_acc_schm_schm_add').value="";
    
}


///function to clear all fields in edit page//
function scheme_edit_clear()
{
    document.getElementById('scty_acc_schm_code_ed').value="";
    document.getElementById('scty_acc_schm_schm_ed').value="";
    
}

//function to clear all fields in search//
function resetSchemeSearch(){
    document.getElementById('scty_acc_schm_code').value='';
    document.getElementById('scty_acc_schm_schm').value='';
}


//function to validate all fields in add page//

function schemeDetails(){

    
    var scty_acc_schm_code_add_v = document.getElementById("scty_acc_schm_code_add").value;
    
                                        if(scty_acc_schm_code_add_v==""){
                                       
                                                        document.getElementById("scty_acc_schm_code_add").focus();
                                                        
                                                        swal("Oops!","Please Enter Code","error");
                                                        return false;
                                                    }
    
                                                    

    var scty_acc_schm_schm_add_v = document.getElementById("scty_acc_schm_schm_add").value;
                                        if(scty_acc_schm_schm_add_v == ""){
                                            document.getElementById("scty_acc_schm_schm_add").focus();
                                            
                                            swal("Oops!","Please Enter Scheme","error");
                                            return false;
                                        }
                                        document.getElementById('account_add_scheme').submit();
}

//function to validate all fields in edit page//
function schemeEditDetails(){

    
    var scty_acc_schm_code_ed_v = document.getElementById("scty_acc_schm_code_ed").value;
    
                                        if(scty_acc_schm_code_ed_v==""){
                                       
                                                        document.getElementById("scty_acc_schm_code_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter Code","error");
                                                        return false;
                                                    }
    

    var scty_acc_schm_schm_ed_v = document.getElementById("scty_acc_schm_schm_ed").value;
                                        if(scty_acc_schm_schm_ed_v == ""){
                                            document.getElementById("scty_acc_schm_schm_ed").focus();
                                            
                                            swal("Oops!","Please Enter Sheme","error");
                                            return false;
                                        }
                                        document.getElementById('account_edit_scheme').submit();
}



function years(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
     if (charCode != 45 && charCode > 31 
      && (charCode < 48 || charCode > 57))
        return false;
           return true;
   }
/* Society Kcc Target- START*/

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
   
   
   
   
   
//    function numeric(empcd)
//    {
//       var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
//         if (charCode != 48 && charCode > 31 
//          && (charCode < 48 || charCode > 57))
//            return false;
//               return true;
//       }
   
   
   
   
//    function years(empcd)
//    {
//       var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
//         if (charCode != 45 && charCode > 31 
//          && (charCode < 48 || charCode > 57))
//            return false;
//               return true;
//       }
   
   
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