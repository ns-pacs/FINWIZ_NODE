function desc(alpbts)
{
   var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
   if (charCode > 32 
         && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122)  && (charCode > 47 || charCode < 58) )
      return false;
   return true;
}
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

//Only for Amount
function amount(amtcd)
{
   var charCode = (amtcd.which) ? amtcd.which : amtcd.keyCode;
   if (charCode != 46 && charCode > 31
     && (charCode < 48 || charCode > 57))
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

/* Society- BANK -START*/

//// To set Bank Name in Society Bank Tab in Search page

function setSocietyBankName1() {
    var bankcd1 = document.getElementById("society_bnk_ser_bnkcode").selectedIndex;
    document.getElementById("society_bnk_ser_bnknme").selectedIndex = bankcd1;
  }


//// To set Bank Code in Society Bank Tab in Search page


  function setSocietyBankCode1() {
    var banknme1 = document.getElementById("society_bnk_ser_bnknme").selectedIndex;
    document.getElementById("society_bnk_ser_bnkcode").selectedIndex = banknme1;
  }

/////////////////////////////////////////////////////////////

//// To set Bank Name in Society Bank Tab in Add

function setSocietyBankName() {
    var bankcd = document.getElementById("soc_add_bnk_code").selectedIndex;
    document.getElementById("soc_add_bnk_name").selectedIndex = bankcd;
  }


//// To set Bank Code in Society Bank Tab in Add

  function setSocietyBankCode() {
    var banknme = document.getElementById("soc_add_bnk_name").selectedIndex;
    document.getElementById("soc_add_bnk_code").selectedIndex = banknme;
  }

//////////////////////////////////////////////////////////

function clearSocietyBankTab()
{
    document.getElementById('soc_add_bnk_code').value="";
    document.getElementById('soc_add_bnk_name').value="";
}

/////////////////////////////////////////////////////////

function bankDetails(){

    var bank_cd1 = document.getElementById("soc_add_bnk_code").value;
    // alert(bank_cd1)
                                        if(bank_cd1==""){
                                            // alert("fgdfds")
                                                        document.getElementById("soc_add_bnk_code").focus();
                                                        
                                                        swal("Oops!","Please Enter Bank Code","error");
                                                        return false;
                                                    }
    
                                                    
    
    // Bank Name
    
    var bnk_name = document.getElementById("soc_add_bnk_name").value;
                                        if(bnk_name == ""){
                                            document.getElementById("soc_add_bnk_name").focus();
                                            
                                            swal("Oops!","Please Enter Bank Name","error");
                                            return false;
                                        }

$('#tabs a[href=#soc_bank_address_details]').tab('show').addClass("active");
$('#tabs a[href=#soc_bank_details]').removeClass("active");
}

/////////////////////////////////////////////////////////

function societyBankAddress(){

    // Address Line

    var soc_bnk_address_address_line = document.getElementById("soc_bnk_address_address_line").value;
    if(soc_bnk_address_address_line == ""){
        document.getElementById("soc_bnk_address_address_line").focus();
        
        swal("Oops!","Please Enter Address line","error");
        return false;
    }

     // Land Mark
    
     var soc_bnk_address_lndmark = document.getElementById("soc_bnk_address_lndmark").value;
     if(soc_bnk_address_lndmark == ""){
         document.getElementById("soc_bnk_address_lndmark").focus();
         
         swal("Oops!","Please Enter Land Mark","error");
         return false;
     }

    // Village
    
    var soc_bnk_address_village = document.getElementById("soc_bnk_address_village").value;
                                        if(soc_bnk_address_village == ""){
                                                        document.getElementById("soc_bnk_address_village").focus();
                                                        
                                                        swal("Oops!","Please Enter Village","error");
                                                        return false;
                                                            } 
    
    // Panchayat
    
    var soc_bnk_address_pncht_mdl = document.getElementById("soc_bnk_address_pncht_mdl").value;
                                        if(soc_bnk_address_pncht_mdl == ""){
                                                        document.getElementById("soc_bnk_address_pncht_mdl").focus();
                                                        
                                                        swal("Oops!","Please Enter Panchayat","error");
                                                        return false;
                                                            }
    
    // City
    
    var soc_bnk_address_city = document.getElementById("soc_bnk_address_city").value;
                                        if(soc_bnk_address_city == ""){
                                                        document.getElementById("soc_bnk_address_city").focus();
                                                        
                                                        swal("Oops!","Please Enter City","error");
                                                        return false;
                                                            }
    
    // State
    
    var state1 = document.getElementById("soc_bnk_address_state").value;
                                        if(state1 == ""){
                                                        document.getElementById("soc_bnk_address_state").focus();
                                                        
                                                        swal("Oops!","Please Enter State","error");
                                                        return false;
                                                            }       
    
    // Country
    
    // var soc_bnk_address_country = document.getElementById("soc_bnk_address_country").value;
    //                                     if(soc_bnk_address_country == ""){
    //                                                     document.getElementById("soc_bnk_address_country").focus();
                                                        
    //                                                     swal("Oops!","Please Enter country","error");
    //                                                     return false;
    //                                                         }
     //pincode

        
    var pin_code = document.getElementById("soc_bnk_address_postal_code").value;
                                        if(pin_code == ""){
                                                          document.getElementById("soc_bnk_address_postal_code").focus();
                                                          
                                                          swal("Oops!","Please Enter pincode","error");
                                                          return false;
                                                        }
                                        else
                                                {
                                           
                                                        if(pin_code.length < 6){
                                                        document.getElementById("soc_bnk_address_postal_code").focus();
                                                        
                                                        swal("Invalid","Please Enter valid Pin Code","warning");
                                                        return false;
                                                            }
                                                 }

                                                 
    // Phone no 1
    
    var soc_bnk_address_phnum1 = document.getElementById("soc_bnk_address_phnum1").value;
    if(soc_bnk_address_phnum1 == ""){
            document.getElementById("soc_bnk_address_phnum1").focus();
            
            swal("Oops!","Please Enter Phone Number","error");
                    return false;
                    }
                    else
             {

                     if(soc_bnk_address_phnum1.length < 10){
                     document.getElementById("soc_bnk_address_phnum1").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number","warning");
                        return false;
                        }
                }
    
    // Phone no 2
    
    var soc_bnk_address_phnum2 = document.getElementById("soc_bnk_address_phnum2").value;
    if(soc_bnk_address_phnum2 == ""){
            document.getElementById("soc_bnk_address_phnum2").focus();
            
            swal("Oops!","Please Enter Phone Number","error");
                    return false;
                    }
                    else
             {

                     if(soc_bnk_address_phnum2.length < 10){
                     document.getElementById("soc_bnk_address_phnum2").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number","warning");
                        return false;
                        }
                }
    
                    
    // email
    
    var soc_bnk_address_emial = document.getElementById("soc_bnk_address_emial").value;
    if(soc_bnk_address_emial!="")
        {
    var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (!mail_id.test(soc_bnk_address_emial))
                    {
                            document.getElementById("soc_bnk_address_emial").focus();
                            
                            swal("Oops!","Please Enter a Valid E-mail ID","warning");
                            return false;
                     }
        }
                     
    // URL
    
    var url = document.getElementById("soc_bnk_address_url").value;
    if(url!="")
        {
        var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                    if (!re.test(url)) 
                    { 
                        document.getElementById("soc_bnk_address_url").focus();
                        
                        swal("Oops!","Please Enter a Valid URL","warning");
                        return false;
                 }
    }

    //Lattitude

    var soc_bnk_address_latitude = document.getElementById("soc_bnk_address_latitude").value;
    if(soc_bnk_address_latitude == ""){
        document.getElementById("soc_bnk_address_latitude").focus();
        
        swal("Oops!","Please Enter Latitude","error");
        return false;
    }
    
    //Longitude

    var soc_bnk_address_Longitude = document.getElementById("soc_bnk_address_Longitude").value;
    if(soc_bnk_address_Longitude == ""){
        document.getElementById("soc_bnk_address_Longitude").focus();
        
        swal("Oops!","Please Enter Longitude","error");
        return false;
    }
    document.getElementById('societyBankDetailsform').submit();
}

////////////////////////////////////////////////////////

function clearSocietyBankAddressTab()
{
    document.getElementById('soc_bnk_address_address_line').value="";
    document.getElementById('soc_bnk_address_lndmark').value="";
    document.getElementById('soc_bnk_address_village').value="";
    document.getElementById('soc_bnk_address_pncht_mdl').value="";
    document.getElementById('soc_bnk_address_city').value="";
    document.getElementById('soc_bnk_address_district').value="";
    document.getElementById('soc_bnk_address_state').value="";
    document.getElementById('soc_bnk_address_country').value="";
    document.getElementById('soc_bnk_address_postal_code').value="";
    document.getElementById('soc_bnk_address_phnum1').value="";
    document.getElementById('soc_bnk_address_phnum2').value="";
    document.getElementById('soc_bnk_address_emial').value="";
    document.getElementById('soc_bnk_address_url').value="";
    document.getElementById('soc_bnk_address_latitude').value="";
    document.getElementById('soc_bnk_address_Longitude').value="";
    document.getElementById('soc_bnk_address_key_con_per1').value="";
    document.getElementById('soc_bnk_name1').value="";
    document.getElementById('soc_bnk_address_key_con_per2').value="";
    document.getElementById('soc_bnk_name2').value="";

}
///////////////////////////////////////

//// To set Bank Name in Society Bank Tab in Search page

function setSocietyBankName_ed() {
    var bankcd2 = document.getElementById("soc_add_bnk_code_ed").selectedIndex;
    document.getElementById("soc_add_bnk_name_ed").selectedIndex = bankcd2;
  }


//// To set Bank Code in Society Bank Tab in Search page


  function setSocietyBankCode_ed() {
    var banknme2 = document.getElementById("soc_add_bnk_name_ed").selectedIndex;
    document.getElementById("soc_add_bnk_code_ed").selectedIndex = banknme2;
  }

/////////////////////////////////////////////////////////////

function clearSocietyBankTab_ed()
{
    document.getElementById('soc_add_bnk_code_ed').value="";
    document.getElementById('soc_add_bnk_name_ed').value="";
}

/////////////////////////////////////////////////////////////

function clearSocietyBankAddressTab_ed()
{
    document.getElementById('soc_bnk_address_address_line_ed').value="";
    document.getElementById('soc_bnk_address_lndmark_ed').value="";
    document.getElementById('soc_bnk_address_village_ed').value="";
    document.getElementById('soc_bnk_address_pncht_mdl_ed').value="";
    document.getElementById('soc_bnk_address_city_ed').value="";
    document.getElementById('soc_bnk_address_district_ed').value="";
    document.getElementById('soc_bnk_address_state_ed').value="";
    document.getElementById('soc_bnk_address_country_ed').value="";
    document.getElementById('soc_bnk_address_postal_code_ed').value="";
    document.getElementById('soc_bnk_address_phonenumber1_ed').value="";
    document.getElementById('soc_bnk_address_phonenumber2_ed').value="";
    document.getElementById('soc_bnk_address_emial_ed').value="";
    document.getElementById('soc_bnk_address_url_ed').value="";
    document.getElementById('soc_bnk_address_latitude_ed').value="";
    document.getElementById('soc_bnk_address_Longitude_ed').value="";
    document.getElementById('soc_bnk_address_key_con_per1_ed').value="";
    document.getElementById('soc_bnk_name1_ed').value="";
    document.getElementById('soc_bnk_address_key_con_per2_ed').value="";
    document.getElementById('soc_bnk_name2_ed').value="";

}
////////////////////////////////////////////////////////////

//////edit row data//////////
function societybnk_edit_row(oObject)
{
 //alert(oObject)
var id = oObject.id;
   // alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
 //alert("rb1"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);

var socbankid=document.getElementById('radiobutton1rfed'+idchecked).value;
 //alert("BANK ID -----------------------"+socbankid)

document.getElementById("tempsocbnkid").value=socbankid;
document.getElementById("socbnk_edit_data_load_form").submit();


}


/////////////////////////////////////////////////////////////////

function societybnk_view_row(oObject)
{
 //alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
 var rb1=document.getElementById("vf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;

var idchecked1=$("input[name='radiobutton1rfvw']:checked").val();
 //alert("idchecked"+idchecked1);


var sbnkid=document.getElementById('radiobutton1rfvw'+idchecked1).value;
//alert("cheque ID -----------------------"+sbnkid);

document.getElementById("tempsocbnkviewid").value=sbnkid;
document.getElementById("socbnk_view_data_load_form").submit();
}


/////////////////////////////////////////////////////////////////

function societybnk_delete_row(oObject)
{
 //alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
  
 var rb1=document.getElementById("df"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfdl"+rb1).checked=true;

var idchecked2=$("input[name='radiobutton1rfdl']:checked").val();
// alert("idchecked"+idchecked2);


var socbkid=document.getElementById('radiobutton1rfdl'+idchecked2).value;
//alert("society bank ID -----------------------"+socbkid);

document.getElementById("tempsocbankdelid").value=socbkid;

}

function socbnk_delete_onconfirm()
{
document.getElementById("socbnk_delete_data_load_form").submit();
}


///////////////////////////////////////////////////////////////

function bankDetails_ed(){

    var bank_cd2 = document.getElementById("soc_add_bnk_code_ed").value;
    // alert(bank_cd2)
                                        if(bank_cd2==""){
                                            // alert("fgdfds")
                                                        document.getElementById("soc_add_bnk_code_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter Bank Code","error");
                                                        return false;
                                                    }
    
                                                    
    
    // Bank Name
    
    var bnk_name1 = document.getElementById("soc_add_bnk_name_ed").value;
                                        if(bnk_name1 == ""){
                                            document.getElementById("soc_add_bnk_name_ed").focus();
                                            
                                            swal("Oops!","Please Enter Bank Name","error");
                                            return false;
                                        }

$('#tabs a[href=#soc_bank_address_details_ed]').tab('show').addClass("active");
$('#tabs a[href=#soc_bank_details_ed]').removeClass("active");

}

/////////////////////////////////////////////////////////////////

function societyBankAddress_ed(){

    // Address Line

    var soc_bnk_address_address_line_ed = document.getElementById("soc_bnk_address_address_line_ed").value;
    if(soc_bnk_address_address_line_ed == ""){
        document.getElementById("soc_bnk_address_address_line_ed").focus();
        
        swal("Oops!","Please Enter Address line","error");
        return false;
    }

     // Land Mark
    
     var soc_bnk_address_lndmark_ed = document.getElementById("soc_bnk_address_lndmark_ed").value;
     if(soc_bnk_address_lndmark_ed == ""){
         document.getElementById("soc_bnk_address_lndmark_ed").focus();
         
         swal("Oops!","Please Enter Land Mark","error");
         return false;
     }

    // Village
    
    var soc_bnk_address_village_ed = document.getElementById("soc_bnk_address_village_ed").value;
                                        if(soc_bnk_address_village_ed == ""){
                                                        document.getElementById("soc_bnk_address_village_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter Village","error");
                                                        return false;
                                                            } 
    
    // Panchayat
    
    var soc_bnk_address_pncht_mdl_ed = document.getElementById("soc_bnk_address_pncht_mdl_ed").value;
                                        if(soc_bnk_address_pncht_mdl_ed == ""){
                                                        document.getElementById("soc_bnk_address_pncht_mdl_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter Panchayat","error");
                                                        return false;
                                                            }
    
    // City
    
    var soc_bnk_address_city_ed = document.getElementById("soc_bnk_address_city_ed").value;
                                        if(soc_bnk_address_city_ed == ""){
                                                        document.getElementById("soc_bnk_address_city_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter City","error");
                                                        return false;
                                                            }
    
    // State
    
    var state2 = document.getElementById("soc_bnk_address_state_ed").value;
                                        if(state2 == ""){
                                                        document.getElementById("soc_bnk_address_state_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter State","error");
                                                        return false;
                                                            }       
    
    // Country
    
    // var soc_bnk_address_country_ed = document.getElementById("soc_bnk_address_country_ed").value;
    //                                     if(soc_bnk_address_country_ed == ""){
    //                                                     document.getElementById("soc_bnk_address_country_ed").focus();
                                                        
    //                                                     swal("Oops!","Please Enter country","error");
    //                                                     return false;
    //                                                         }
     //pincode

        
    var pin_code1 = document.getElementById("soc_bnk_address_postal_code_ed").value;
                                        if(pin_code1 == ""){
                                                          document.getElementById("soc_bnk_address_postal_code_ed").focus();
                                                          
                                                          swal("Oops!","Please Enter pincode","error");
                                                          return false;
                                                        }
                                        else
                                                {
                                           
                                                        if(pin_code1.length < 6){
                                                        document.getElementById("soc_bnk_address_postal_code_ed").focus();
                                                        
                                                        swal("Invalid","Please Enter valid Pin Code","warning");
                                                        return false;
                                                            }
                                                 }

                                                 
    // Phone no 1
    
    var soc_bnk_address_phonenumber1_ed = document.getElementById("soc_bnk_address_phonenumber1_ed").value;
    if(soc_bnk_address_phonenumber1_ed == ""){
            document.getElementById("soc_bnk_address_phonenumber1_ed").focus();
            
            swal("Oops!","Please Enter Phone Number","error");
                    return false;
                    }
                    else
             {

                     if(soc_bnk_address_phonenumber1_ed.length < 10){
                     document.getElementById("soc_bnk_address_phonenumber1_ed").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number","warning");
                        return false;
                        }
                }
    
    // Phone no 2
    
    var soc_bnk_address_phonenumber2_ed = document.getElementById("soc_bnk_address_phonenumber2_ed").value;
    if(soc_bnk_address_phonenumber2_ed == ""){
            document.getElementById("soc_bnk_address_phonenumber2_ed").focus();
            
            swal("Oops!","Please Enter Phone Number","error");
                    return false;
                    }
                    else
             {

                     if(soc_bnk_address_phonenumber2_ed.length < 10){
                     document.getElementById("soc_bnk_address_phonenumber2_ed").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number","warning");
                        return false;
                        }
                }
    
                    
    // email
    
    var soc_bnk_address_emial_ed = document.getElementById("soc_bnk_address_emial_ed").value;
    if(soc_bnk_address_emial_ed!="")
        {
    var mail_id1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (!mail_id1.test(soc_bnk_address_emial_ed))
                    {
                            document.getElementById("soc_bnk_address_emial_ed").focus();
                            
                            swal("Oops!","Please Enter a Valid E-mail ID","warning");
                            return false;
                     }
        }
                     
    // URL
    
    var url1 = document.getElementById("soc_bnk_address_url_ed").value;
    if(url1!="")
        {
        var re_1= /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                    if (!re_1.test(url1)) 
                    { 
                        document.getElementById("soc_bnk_address_url_ed").focus();
                        
                        swal("Oops!","Please Enter a Valid URL","warning");
                        return false;
                 }
    }

    //Lattitude

    var soc_bnk_address_latitude_ed = document.getElementById("soc_bnk_address_latitude_ed").value;
    if(soc_bnk_address_latitude_ed == ""){
        document.getElementById("soc_bnk_address_latitude_ed").focus();
        
        swal("Oops!","Please Enter Latitude","error");
        return false;
    }
    
    //Longitude

    var soc_bnk_address_Longitude_ed = document.getElementById("soc_bnk_address_Longitude_ed").value;
    if(soc_bnk_address_Longitude_ed == ""){
        document.getElementById("soc_bnk_address_Longitude_ed").focus();
        
        swal("Oops!","Please Enter Longitude","error");
        return false;
    }
    document.getElementById('societyBankDetailsform_ed').submit();
}

////////////////////////////////////////////////////////////////////////

function bankDetails_view()
{
$('#tabs a[href=#soc_branch_add_details_vw]').tab('show').addClass("active");
$('#tabs a[href=#soc_bank_details_vw]').removeClass("active");
}

////////////////////////////////////////////////////////////////////////

function resetform_socbankdetails(){
    document.getElementById('society_bnk_ser_bnknme').value='';
    document.getElementById('society_bnk_ser_bnkcode').value='';   
}
///////////////////////////////////////////////////////////////////////

/* Society- BANK -END*/
/////////////////////////////////HOLIDAY DETAILS START////////////////////////////////////////////////////////

// Society Branch-START//
/////////////////////////////////////////////////////////////////////////////////////////
function resetform_scty_br_details(){
        document.getElementById('society_branch_ser_bnkcd').value='';
        document.getElementById('society_branch_ser_brcode').value='';
         document.getElementById('society_branch_ser_brnme').value='';
         document.getElementById('society_branch_ser_ifsc_neft').value='';
         document.getElementById('society_branch_ser_ifsc_rtgs').value='';
        
    }
//// To set Bank Name in society branch Tab

function sctyBankName() {
        var bankcd = document.getElementById("society_branch_bnkcode").selectedIndex;
        document.getElementById("society_branch_brcode").selectedIndex = bankcd;
      }
    
    ////////////////////////////////////////////////////////////////////////////////////////
    
    //// To set Bank Code in society branch Tab
    
    function sctyBankCode() {
        var banknme = document.getElementById("society_branch_brcode").selectedIndex;
        document.getElementById("society_branch_bnkcode").selectedIndex = banknme;
      }
    

     


//society branch Details Clear function

function clear_scty_br_Tab1()
{ 
    
    document.getElementById('society_branch_bnkcode').value="";
    document.getElementById('society_branch_brcode').value="";
    document.getElementById('society_branch_brname').value="";
    document.getElementById('society_branch_brtype').value="";
    document.getElementById('society_branch_ifsc_neft').value="";
    document.getElementById('society_branch_ifsc_rtgs').value="";
    document.getElementById('society_branch_micr_cd').value="";

}

function clear_scty_br_Tab2(){
    document.getElementById('soc_branch_add_addline').value="";
    document.getElementById('soc_branch_add_lndmark').value="";
    document.getElementById('soc_branch_add_village').value="";
    document.getElementById('soc_branch_add_pch_mndal').value="";
    document.getElementById('soc_branch_add_city').value="";
    document.getElementById('soc_branch_add_distict').value="";
    document.getElementById('soc_branch_add_state').value="";
    document.getElementById('soc_branch_add_country').value="";
    document.getElementById('soc_branch_add_postalcd').value="";
    document.getElementById('soc_branch_add_phone_num1').value="";
    document.getElementById('soc_branch_add_phone_num2').value="";
    document.getElementById('soc_branch_add_email1').value="";
    document.getElementById('soc_branch_add_url').value="";
    document.getElementById('soc_branch_add_latitude').value="";
    document.getElementById('soc_branch_add_longitude').value="";
    document.getElementById('soc_br_address_key_con_per1').value="";
    document.getElementById('soc_br_name1').value="";
    document.getElementById('soc_br_address_key_con_per2').value="";
    document.getElementById('soc_br_name2').value="";
   
}

//clear for edit society branch 

function scty_br_Tab1_edit_clearform()
{
    document.getElementById('society_branch_bnkcode_ed').value=''
    document.getElementById('society_branch_brcode_ed').value=''
    document.getElementById('society_branch_brname_ed').value=''
    document.getElementById('society_branch_brtype_ed').value=''
    document.getElementById('society_branch_ifsc_neft_ed').value=''
    document.getElementById('society_branch_ifsc_rtgs_ed').value=''
    document.getElementById('society_branch_micr_cd_ed').value=''

}

function scty_br_Tab2_edit_clearform()
{
    document.getElementById('soc_branch_add_addline_ed').value=''
    document.getElementById('soc_branch_add_lndmark_ed').value=''
    document.getElementById('soc_branch_add_village_ed').value=''
    document.getElementById('soc_branch_add_pch_mndal_ed').value=''
    document.getElementById('soc_branch_add_city_ed').value=''
    document.getElementById('soc_branch_add_distict_ed').value=''
    document.getElementById('soc_branch_add_state_ed').value=''
    document.getElementById('soc_branch_add_country_ed').value=''
    document.getElementById('soc_branch_add_postalcd_ed').value=''
    document.getElementById('soc_branch_add_phone_num1_ed').value=''
    document.getElementById('soc_branch_add_phone_num2_ed').value=''
    document.getElementById('soc_branch_add_email1_ed').value=''
    document.getElementById('soc_branch_add_url_ed').value=''
    document.getElementById('soc_branch_add_latitude_ed').value=''
    document.getElementById('soc_branch_add_longitude_ed').value=''
    document.getElementById('soc_br_address_key_con_per1_ed').value="";
    document.getElementById('soc_br_name1_ed').value="";
    document.getElementById('soc_br_address_key_con_per2_ed').value="";
    document.getElementById('soc_br_name2_ed').value="";

}

function societybranchDetailsaddtab1(){
 

    //tab-1

    //bank code
       
    var society_branch_bnkcode = document.getElementById("society_branch_bnkcode").value;
    if(society_branch_bnkcode == ""){
            document.getElementById("society_branch_bnkcode").focus();
            
            swal("Oops!","Please Select Bank Code","error");
                    return false;
                    }
   
    //Branch code
       
    var society_branch_brcode = document.getElementById("society_branch_brcode").value;
    if(society_branch_brcode == ""){
            document.getElementById("society_branch_brcode").focus();
          
            swal("Oops!","Please Enter Branch code","error");
                    return false;
                    }
   
   //Branch name
       
    var society_branch_brname = document.getElementById("society_branch_brname").value;
    if(society_branch_brname == ""){
            document.getElementById("society_branch_brname").focus();
           
            swal("Oops!","Please Enter Branch Name","error");
                    return false;
                    }
   
   //Branch Type
       
    var society_branch_brtype = document.getElementById("society_branch_brtype").value;
    if(society_branch_brtype == ""){
            document.getElementById("society_branch_brtype").focus();
            
            swal("Oops!","Please Enter Branch Type","error");
                    return false;
                    }

                    // IFSC Code NEFT


var society_branch_ifsc_neft = document.getElementById("society_branch_ifsc_neft").value;
if(society_branch_ifsc_neft == ""){
document.getElementById("society_branch_ifsc_neft").focus();

swal("Oops!","Please Enter IFSC CODE NEFT","error");
return false;
}

else{

if (society_branch_ifsc_neft.length <11)
{
document.getElementById("society_branch_ifsc_neft").focus();

swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}

var ifsccd = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifsccd.test(society_branch_ifsc_neft))
{
document.getElementById("society_branch_ifsc_neft").focus();

swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}


}
   

                    // IFSC Code RTGS


var society_branch_ifsc_rtgs = document.getElementById("society_branch_ifsc_rtgs").value;
if(society_branch_ifsc_rtgs == ""){
document.getElementById("society_branch_ifsc_rtgs").focus();

swal("Oops!","Please Enter IFSC CODE RTGS","error");
return false;
}

else{

if (society_branch_ifsc_rtgs.length <11)
{
document.getElementById("society_branch_ifsc_rtgs").focus();

swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}

var ifscrtgs = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifscrtgs.test(society_branch_ifsc_rtgs))
{
document.getElementById("society_branch_ifsc_rtgs").focus();

swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}


}
   
                    
// MICR Code

var society_branch_micr_cd = document.getElementById("society_branch_micr_cd").value;
if(society_branch_micr_cd == ""){
document.getElementById("society_branch_micr_cd").focus();

swal("Oops!","Please Enter MICR Code","error");
return false;
}
else
{

if(society_branch_micr_cd.length < 9){
document.getElementById("society_branch_micr_cd").focus();

swal("Invalid","Please Enter valid MICR Code","warning");
return false;
}

}
$('#tabs a[href=#soc_branch_address_details]').tab('show').addClass("active");
$('#tabs a[href=#soc_branch_details]').removeClass("active");
}

function societybranchDetailsaddtab2(){

        societybranchDetailsaddtab1();
//tab-2

   //Addressline 
       
    var soc_branch_add_addline = document.getElementById("soc_branch_add_addline").value;
    if(soc_branch_add_addline == ""){
            document.getElementById("soc_branch_add_addline").focus();
            
            swal("Oops!","Please Enter Addressline ","error");
                    return false;
                    }
   
   //Landmark
       
    var soc_branch_add_lndmark = document.getElementById("soc_branch_add_lndmark").value;
    if(soc_branch_add_lndmark == ""){
            document.getElementById("soc_branch_add_lndmark").focus();
            
            swal("Oops!","Please Enter Landmark ","error");
                    return false;
                    }
   
   //village 
       
    var soc_branch_add_village = document.getElementById("soc_branch_add_village").value;
    if(soc_branch_add_village == ""){
            document.getElementById("soc_branch_add_village").focus();
            
            swal("Oops!","Please Enter village ","error");
                    return false;
                    }

   
    
                    
    //City
       
    var soc_branch_add_city = document.getElementById("soc_branch_add_city").value;
    if(soc_branch_add_city == ""){
            document.getElementById("soc_branch_add_city").focus();
            
            swal("Oops!","Please Enter city ","error");
                    return false;
                    }

    //Distict
       
    var soc_branch_add_distict = document.getElementById("soc_branch_add_distict").value;
    if(soc_branch_add_distict == ""){
            document.getElementById("soc_branch_add_distict").focus();
            
            swal("Oops!","Please Enter Distict","error");
                    return false;
                    }
    
    //State
       
    var soc_branch_add_state = document.getElementById("soc_branch_add_state").value;
    if(soc_branch_add_state == ""){
            document.getElementById("soc_branch_add_state").focus();
            
            swal("Oops!","Please Enter State ","error");
                    return false;
                    }

    //Country
       
    var soc_branch_add_country = document.getElementById("soc_branch_add_country").value;
    if(soc_branch_add_country == ""){
            document.getElementById("soc_branch_add_country").focus();
            
            swal("Oops!","Please Enter Country ","error");
                    return false;
                    }

    //Postal Code 
       
    var soc_branch_add_postalcd = document.getElementById("soc_branch_add_postalcd").value;
    if(soc_branch_add_postalcd == ""){
        document.getElementById("soc_branch_add_postalcd").focus();
        
        swal("Oops!","Please Enter Postal Code ","error");
        return false;
    }
    else
        {

if(soc_branch_add_postalcd.length < 6){
        document.getElementById("soc_branch_add_postalcd").focus();
        
        swal("Invalid","Please Enter valid Postal Code","warning");
        return false;
    }
}

  
                        // Phone number 1
    
    var soc_branch_add_phone_num1 = document.getElementById("soc_branch_add_phone_num1").value;
    if(soc_branch_add_phone_num1 == ""){
        document.getElementById("soc_branch_add_phone_num1").focus();
        
        swal("Oops!","Please Enter Phone number 1","error");
        return false;
    }
    else
        {

if(soc_branch_add_phone_num1.length < 10){
        document.getElementById("soc_branch_add_phone_num1").focus();
        
        swal("Invalid","Please Enter valid Phone Number 1","warning");
        return false;
    }
}

 

   // Phone number 2
    
    var soc_branch_add_phone_num2 = document.getElementById("soc_branch_add_phone_num2").value;
    if(soc_branch_add_phone_num2 == ""){
        document.getElementById("soc_branch_add_phone_num2").focus();
        
        swal("Oops!","Please Enter Phone number 2","error");
        return false;
    }
    else
        {

if(soc_branch_add_phone_num2.length < 10){
        document.getElementById("soc_branch_add_phone_num2").focus();
        
        swal("Invalid","Please Enter valid Phone Number 2","warning");
        return false;
    }
}



     // E-Mail ID

                    // E-Mail ID

var soc_branch_add_email1 = document.getElementById("soc_branch_add_email1").value;
if(soc_branch_add_email1 == ""){
        document.getElementById("soc_branch_add_email1").focus();
        
        swal("Oops!","Please Enter E-mail ID","error");
        return false;
    }
    else{
if(soc_branch_add_email1 != ""){
var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (mail_id.test(soc_branch_add_email1)==false)
{

 document.getElementById("soc_branch_add_email1").focus();
 
 swal("Oops!","Please Enter a Valid E-mail ID","warning");
 return false;
}
}
    }

   // URL
    
    var soc_branch_add_url = document.getElementById("soc_branch_add_url").value;
    if(soc_branch_add_url == ""){
        document.getElementById("soc_branch_add_url").focus();
        
        swal("Oops!","Please Enter URL","error");
        return false;
    }
    else{
    if(soc_branch_add_url!="")
        {
        var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                    if (!re.test(soc_branch_add_url)) 
                    { 
                        document.getElementById("soc_branch_add_url").focus();
                        
                        swal("Oops!","Please Enter a Valid URL","warning");
                        return false;
                 }
    }
}
       

     //latitude

     var soc_branch_add_latitude = document.getElementById("soc_branch_add_latitude").value;
     if(soc_branch_add_latitude == ""){
             document.getElementById("soc_branch_add_latitude").focus();
             
             swal("Oops!","Please Enter Latitude ","error");
                     return false;
                     }

    //longitude

    var soc_branch_add_longitude = document.getElementById("soc_branch_add_longitude").value;
    if(soc_branch_add_longitude == ""){
            document.getElementById("soc_branch_add_longitude").focus();
            
            swal("Oops!","Please Enter Longitude ","error");
                    return false;
                    }

                    document.getElementById('society_branch_add').submit();
   }

   

   //////edit society branch ////

   function societybranchDetailsedittab1(){

    //tab-1

    //bank code
       
    var society_branch_bnkcode_ed = document.getElementById("society_branch_bnkcode_ed").value;
    if(society_branch_bnkcode_ed == ""){
            document.getElementById("society_branch_bnkcode_ed").focus();
            
            swal("Oops!","Please Select Bank Code","error");
                    return false;
                    }
   
    //Branch code
       
    var society_branch_brcode_ed = document.getElementById("society_branch_brcode_ed").value;
    if(society_branch_brcode_ed == ""){
            document.getElementById("society_branch_brcode_ed").focus();
          
            swal("Oops!","Please Enter Branch code","error");
                    return false;
                    }
   
   //Branch name
       
    var society_branch_brname_ed = document.getElementById("society_branch_brname_ed").value;
    if(society_branch_brname_ed == ""){
            document.getElementById("society_branch_brname_ed").focus();
           
            swal("Oops!","Please Enter Branch Name","error");
                    return false;
                    }
   
   //Branch Type
       
    var society_branch_brtype_ed = document.getElementById("society_branch_brtype_ed").value;
    if(society_branch_brtype_ed == ""){
            document.getElementById("society_branch_brtype_ed").focus();
            
            swal("Oops!","Please Enter Branch Type","error");
                    return false;
                    }


                     // IFSC Code NEFT


var society_branch_ifsc_neft_ed = document.getElementById("society_branch_ifsc_neft_ed").value;
if(society_branch_ifsc_neft_ed == ""){
document.getElementById("society_branch_ifsc_neft_ed").focus();

swal("Oops!","Please Enter IFSC CODE NEFT","error");
return false;
}

else{

if (society_branch_ifsc_neft_ed.length <11)
{
document.getElementById("society_branch_ifsc_neft_ed").focus();

swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}

var ifsccd = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifsccd.test(society_branch_ifsc_neft_ed))
{
document.getElementById("society_branch_ifsc_neft_ed").focus();

swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}


}
   

               // IFSC Code RTGS


var society_branch_ifsc_rtgs_ed = document.getElementById("society_branch_ifsc_rtgs_ed").value;
if(society_branch_ifsc_rtgs_ed == ""){
document.getElementById("society_branch_ifsc_rtgs_ed").focus();

swal("Oops!","Please Enter IFSC CODE RTGS","error");
return false;
}

else{

if (society_branch_ifsc_rtgs_ed.length <11)
{
document.getElementById("society_branch_ifsc_rtgs_ed").focus();

swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}

var ifscrtgs = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifscrtgs.test(society_branch_ifsc_rtgs_ed))
{
document.getElementById("society_branch_ifsc_rtgs_ed").focus();

swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}


}
           
   
  
                // MICR Code

var society_branch_micr_cd_ed = document.getElementById("society_branch_micr_cd_ed").value;
if(society_branch_micr_cd_ed == ""){
document.getElementById("society_branch_micr_cd_ed").focus();

swal("Oops!","Please Enter MICR Code","error");
return false;
}
else
{

if(society_branch_micr_cd_ed.length < 9){
document.getElementById("society_branch_micr_cd_ed").focus();

swal("Invalid","Please Enter valid MICR Code","warning");
return false;
}
}
$('#tabs a[href=#soc_branch_address_details_ed]').tab('show').addClass("active");
$('#tabs a[href=#soc_branch_details_ed]').removeClass("active");
}


   function societybranchDetailsedittab2(){
//tab-2
societybranchDetailsedittab1();
   //Addressline 
       
    var soc_branch_add_addline_ed = document.getElementById("soc_branch_add_addline_ed").value;
    if(soc_branch_add_addline_ed == ""){
            document.getElementById("soc_branch_add_addline_ed").focus();
            
            swal("Oops!","Please Enter Addressline ","error");
                    return false;
                    }
   
   //Landmark
       
    var soc_branch_add_lndmark_ed = document.getElementById("soc_branch_add_lndmark_ed").value;
    if(soc_branch_add_lndmark_ed == ""){
            document.getElementById("soc_branch_add_lndmark_ed").focus();
            
            swal("Oops!","Please Enter Landmark ","error");
                    return false;
                    }
   
   //village 
       
    var soc_branch_add_village_ed = document.getElementById("soc_branch_add_village_ed").value;
    if(soc_branch_add_village_ed == ""){
            document.getElementById("soc_branch_add_village_ed").focus();
            
            swal("Oops!","Please Enter village ","error");
                    return false;
                    }

                    
    //City
       
    var soc_branch_add_city_ed = document.getElementById("soc_branch_add_city_ed").value;
    if(soc_branch_add_city_ed == ""){
            document.getElementById("soc_branch_add_city_ed").focus();
            
            swal("Oops!","Please Enter city ","error");
                    return false;
                    }

    //Distict
       
    var soc_branch_add_distict_ed = document.getElementById("soc_branch_add_distict_ed").value;
    if(soc_branch_add_distict_ed == ""){
            document.getElementById("soc_branch_add_distict_ed").focus();
            
            swal("Oops!","Please Enter Distict","error");
                    return false;
                    }
    
    //State
       
    var soc_branch_add_state_ed = document.getElementById("soc_branch_add_state_ed").value;
    if(soc_branch_add_state_ed == ""){
            document.getElementById("soc_branch_add_state_ed").focus();
            
            swal("Oops!","Please Enter State ","error");
                    return false;
                    }

    //Country
       
    var soc_branch_add_country_ed = document.getElementById("soc_branch_add_country_ed").value;
    if(soc_branch_add_country_ed == ""){
            document.getElementById("soc_branch_add_country_ed").focus();
            
            swal("Oops!","Please Enter Country ","error");
                    return false;
                    }

    //Postal Code 
       
  
                    var soc_branch_add_postalcd_ed = document.getElementById("soc_branch_add_postalcd_ed").value;
                    if(soc_branch_add_postalcd_ed == ""){
                        document.getElementById("soc_branch_add_postalcd_ed").focus();
                        
                        swal("Oops!","Please Enter Postal Code ","error");
                        return false;
                    }
                    else
                        {
                
                if(soc_branch_add_postalcd_ed.length < 6){
                        document.getElementById("soc_branch_add_postalcd_ed").focus();
                        
                        swal("Invalid","Please Enter valid Postal Code","warning");
                        return false;
                    }
                }

    //phone_num1
       
  
                        
    var soc_branch_add_phone_num1_ed = document.getElementById("soc_branch_add_phone_num1_ed").value;
    if(soc_branch_add_phone_num1_ed == ""){
        document.getElementById("soc_branch_add_phone_num1_ed").focus();
        
        swal("Oops!","Please Enter Phone number 1","error");
        return false;
    }
    else
        {

if(soc_branch_add_phone_num1_ed.length < 10){
        document.getElementById("soc_branch_add_phone_num1_ed").focus();
        
        swal("Invalid","Please Enter valid Phone Number 1","warning");
        return false;
    }
}

    //phone_num2              
    
                    var soc_branch_add_phone_num2_ed = document.getElementById("soc_branch_add_phone_num2_ed").value;
                    if(soc_branch_add_phone_num2_ed == ""){
                        document.getElementById("soc_branch_add_phone_num2_ed").focus();
                        
                        swal("Oops!","Please Enter Phone number 2","error");
                        return false;
                    }
                    else
                        {
                
                if(soc_branch_add_phone_num2_ed.length < 10){
                        document.getElementById("soc_branch_add_phone_num2_ed").focus();
                        
                        swal("Invalid","Please Enter valid Phone Number 2","warning");
                        return false;
                    }
                }

    //email


                    
var soc_branch_add_email1_ed = document.getElementById("soc_branch_add_email1_ed").value;
if(soc_branch_add_email1_ed == ""){
        document.getElementById("soc_branch_add_email1_ed").focus();
        
        swal("Oops!","Please Enter E-mail ID","error");
        return false;
    }
    else{
if(soc_branch_add_email1_ed != ""){
var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (mail_id.test(soc_branch_add_email1_ed)==false)
{

 document.getElementById("soc_branch_add_email1_ed").focus();
 
 swal("Oops!","Please Enter a Valid E-mail ID","warning");
 return false;
}
}
    }

   

                        // URL
    
    var soc_branch_add_url_ed = document.getElementById("soc_branch_add_url_ed").value;
    if(soc_branch_add_url_ed == ""){
        document.getElementById("soc_branch_add_url_ed").focus();
        
        swal("Oops!","Please Enter URL","error");
        return false;
    }
    else{
    if(soc_branch_add_url_ed!="")
        {
        var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                    if (!re.test(soc_branch_add_url_ed)) 
                    { 
                        document.getElementById("soc_branch_add_url_ed").focus();
                        
                        swal("Oops!","Please Enter a Valid URL","warning");
                        return false;
                 }
    }
}

     //latitude

     var soc_branch_add_latitude_ed = document.getElementById("soc_branch_add_latitude_ed").value;
     if(soc_branch_add_latitude_ed == ""){
             document.getElementById("soc_branch_add_latitude_ed").focus();
             
             swal("Oops!","Please Enter Latitude ","error");
                     return false;
                     }

    //longitude

    var soc_branch_add_longitude_ed = document.getElementById("soc_branch_add_longitude_ed").value;
    if(soc_branch_add_longitude_ed == ""){
            document.getElementById("soc_branch_add_longitude_ed").focus();
            
            swal("Oops!","Please Enter Longitude ","error");
                    return false;
                    }


                    document.getElementById('society_branch_edit').submit();
                    
   }

   function edit_branch_row(oObject)
   {
   //alert(oObject)
   var id = oObject.id;
   // alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
   var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);
 
 
var bankid=document.getElementById('radiobutton1rfed'+idchecked).value;
 //alert("BRANCH ID -----------------------"+bankid)


document.getElementById("tempsctybrid").value=bankid;
document.getElementById("edit_scty_br_load_form").submit();


   }

         function view_branch_row(oObject)
         {
          //alert(oObject)
         var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
     var rb1=document.getElementById("vf"+id).value;
   // alert("rb1"+rb1)
     document.getElementById("radiobutton1rfvw"+rb1).checked=true;
         var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
     //alert(idchecked);

       
     var br_id=document.getElementById('radiobutton1rfvw'+idchecked).value;
      //alert("BRANCH ID -----------------------"+br_id)
     
     
     
     document.getElementById("tempsctybrid1").value=br_id;
     document.getElementById("view_scty_br_load_form").submit();
     
     
         }
     
     
         function  delete_branch_row(oObject)
         {
               //alert(oObject)
            var id = oObject.id;
          //  alert("This object's ID attribute is set to \"" + id + "\"."); 
          var rb1=document.getElementById("df"+id).value;
        // alert("rb1"+rb1)
          document.getElementById("radiobutton1rfdel"+rb1).checked=true;
              var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
          // alert(idchecked);
            
            
          var del_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
//alert("BRANCH ID -----------------------"+del_id)
          
          
          
          document.getElementById("tempsctybrid2").value=del_id;
     
         }
     //////////////////delete bank row onclick of confirm button///////////////
     function delete_scty_br_onconfirm()
     {
         document.getElementById("del_scty_br_form").submit();
     
     }

     function add_stateoncity_societyBranch() {
   
        var selected_city = document.getElementById("soc_branch_add_city").value;
         console.log(selected_city)
    obj1=JSON.parse(selected_city);
    console.log("res",obj1.state);
    console.log("ghsa",obj1.city);
    document.getElementById("soc_branch_add_state").value = obj1.state;
      }


      function edit_stateoncity_societyBranch() {
   
        var selected_city = document.getElementById("soc_branch_add_city_ed").value;
         console.log(selected_city)
    obj1=JSON.parse(selected_city);
    console.log("res",obj1.state);
    console.log("ghsa",obj1.city);
    document.getElementById("soc_branch_add_state_ed").value = obj1.state;
      }

// Society Branch-END//
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
 
 /* ------------------------------------------------------------------------ DEPARTMENT START ------------------------------------------------------------------------------- */


// Clear Functions for Department

function clearDepartmentDetails(){
document.getElementById('dept_code_add').value="";
document.getElementById('dept_name_add').value="";
document.getElementById('desc_add').value="";
document.getElementById('sec_name_add').value="";
}


// Clear Functions for Department in Edit

function edit_ClrDepartmentDetails(){
   document.getElementById('dept_code_ed').value="";
   document.getElementById('dept_name_ed').value="";
   document.getElementById('desc_ed').value="";
   document.getElementById('sec_name_ed').value="";
   }

function srch_ClrDepartment(){
   document.getElementById('dept_code').value="";
   document.getElementById('dept_name').value="";
   document.getElementById('sec_name').value="";
      }   


//  Functions for Department

function departmentDetails(){

    //Department Code
    
    var dept_code_add = document.getElementById("dept_code_add").value;
    if(dept_code_add == ""){
    document.getElementById("dept_code_add").focus();
    
    swal("Oops!","Please Enter Department Code","error");
    return false;
    }
    
    
    // Department Name
    
    var dept_name_add = document.getElementById("dept_name_add").value;
    if(dept_name_add == ""){
    document.getElementById("dept_name_add").focus();
    swal("Oops!","Please Enter Department Name","error");
    return false;
    }
    
        
    // Department description
    
    var desc_add = document.getElementById("desc_add").value;
    if(desc_add == ""){
    document.getElementById("desc_add").focus(); 
    swal("Oops!","Please Write Description","error");
    return false;
    }
    
    // Department Section
    
    var sec_name_add = document.getElementById("sec_name_add").value;
    if(sec_name_add == ""){
    document.getElementById("sec_name_add").focus();
    swal("Oops!","Please Enter Section Name","error");
    return false;
    }

    document.getElementById('scty_dept_ad').submit();
}


// EDIT Functions for Department

function edit_departmentDetails(){

   //Department Code
   
   var dept_code_ed = document.getElementById("dept_code_ed").value;
   if(dept_code_ed == ""){
   document.getElementById("dept_code_ed").focus();
   
   swal("Oops!","Please Enter Department Code","error");
   return false;
   }
   
   
   // Department Name
   
   var dept_name_ed = document.getElementById("dept_name_ed").value;
   if(dept_name_ed == ""){
   document.getElementById("dept_name_ed").focus();
   swal("Oops!","Please Enter Department Name","error");
   return false;
   }
   
       
   // Department description
   
   var desc_ed = document.getElementById("desc_ed").value;
   if(desc_ed == ""){
   document.getElementById("desc_ed").focus(); 
   swal("Oops!","Please Write Description","error");
   return false;
   }
   
   // Department Section
   
   var sec_name_ed = document.getElementById("sec_name_ed").value;
   if(sec_name_ed == ""){
   document.getElementById("sec_name_ed").focus();
   swal("Oops!","Please Enter Section Name","error");
   return false;
   }

   document.getElementById('scty_dept_ed').submit();
}

// Department Edit

function dept_edit(edt)
{
var edtid = edt.id;
 var ed1=document.getElementById("soc_dept_ed"+edtid).value;
document.getElementById("radio_society_edit"+ed1).checked=true;
var edtidchecked=$("input[name='radio_society_edit']:checked").val();
var dept_id=document.getElementById('radio_society_edit'+edtidchecked).value;
document.getElementById("edit_sctydep_id").value=dept_id;
document.getElementById("soc_dept_edit").submit();
}


// Department View

function dept_view(vew)
{
var vewid = vew.id;
 var vw1=document.getElementById("soc_dept_vw"+vewid).value;
document.getElementById("radio_society_view"+vw1).checked=true;
var vewidchecked=$("input[name='radio_society_view']:checked").val();
var dept_id_vw=document.getElementById('radio_society_view'+vewidchecked).value;
document.getElementById("view_sctydep_id").value=dept_id_vw;
document.getElementById("soc_dept_view").submit();
}

// Department Delete

function dept_delete(dlt)
{
var dltid = dlt.id;
 var dlt1=document.getElementById("soc_dept_dl"+dltid).value;
document.getElementById("radio_society_delete"+dlt1).checked=true;
var dltidchecked=$("input[name='radio_society_delete']:checked").val();
var dept_id_del=document.getElementById('radio_society_delete'+dltidchecked).value;
document.getElementById("del_sctydep_id").value=dept_id_del;
}

function confirm_dept_del(){
   document.getElementById("soc_dept_del").submit();
}

/* ------------------------------------------------------------------------ DEPARTMENT END --------------------------------------------------------------------------------- */




/* ------------------------------------------------------------------------ CHEQUE DETAILS START ---------------------------------------------------------------------------- */


// Function for Cheque Details

function chequeDetails(){

   // Cheque Details Branch

   var scty_brch_add = document.getElementById("scty_brch_add").value;
   if(scty_brch_add == ""){
   document.getElementById("scty_brch_add").focus();
   
   swal("Oops!","Please Enter Department Code","error");
   return false;
   }
   
   
   // Cheque Details Account Number
   
   var scty_acc_add = document.getElementById("scty_acc_add").value;
   if(scty_acc_add == ""){
   document.getElementById("scty_acc_add").focus();
   swal("Oops!","Please Enter Department Name","error");
   return false;
   }
   
       
   // Cheque Details Category
   
   var scty_ctgry_add = document.getElementById("scty_ctgry_add").value;
   if(scty_ctgry_add == ""){
   document.getElementById("scty_ctgry_add").focus(); 
   swal("Oops!","Please Write Description","error");
   return false;
   }
   
   // Cheque Details Cheque Book Number
   
   var scty_chq_bok_num_add = document.getElementById("scty_chq_bok_num_add").value;
   if(scty_chq_bok_num_add == ""){
   document.getElementById("scty_chq_bok_num_add").focus();
   swal("Oops!","Please Enter Section Name","error");
   return false;
   }

      // Cheque Details Series

      var scty_series_add = document.getElementById("scty_series_add").value;
      if(scty_series_add == ""){
      document.getElementById("scty_series_add").focus();
      
      swal("Oops!","Please Enter Department Code","error");
      return false;
      }
      
      
      // Cheque Details Number Of Leaves Per Book
      
      var scty_no_lev_per_bk_add = document.getElementById("scty_no_lev_per_bk_add").value;
      if(scty_no_lev_per_bk_add == ""){
      document.getElementById("scty_no_lev_per_bk_add").focus();
      swal("Oops!","Please Enter Department Name","error");
      return false;
      }
      
          
      // Cheque Details Starting Number
      
      var scty_star_num_add = document.getElementById("scty_star_num_add").value;
      if(scty_star_num_add == ""){
      document.getElementById("scty_star_num_add").focus(); 
      swal("Oops!","Please Write Description","error");
      return false;
      }
      
      // Cheque Details End Number
      
      var scty_end_num_add = document.getElementById("scty_end_num_add").value;
      if(scty_end_num_add == ""){
      document.getElementById("scty_end_num_add").focus();
      swal("Oops!","Please Enter Section Name","error");
      return false;
      }
   
      // Cheque Details Cheque Book Status
      
      var scty_chq_book_status_add = document.getElementById("scty_chq_book_status_add").value;
      if(scty_chq_book_status_add == ""){
      document.getElementById("scty_chq_book_status_add").focus();
      swal("Oops!","Please Enter Section Name","error");
      return false;
      }

   document.getElementById("scty_chq_ad").submit();
}

//Clear Function for Cheque Details

function clearChequeDetails(){
   document.getElementById('scty_brch_add').value="";
   document.getElementById('scty_acc_add').value="";
   document.getElementById('scty_ctgry_add').value="";
   document.getElementById('scty_chq_bok_num_add').value="";
   document.getElementById('scty_series_add').value="";
   document.getElementById('scty_no_lev_per_bk_add').value="";
   document.getElementById('scty_star_num_add').value="";
   document.getElementById('scty_end_num_add').value="";
   document.getElementById('scty_chq_book_status_add').value="";
   }


// Function for Cheque Details in EDIT

function editChequeDetails(){

   // Cheque Details Branch

   var scty_brch_add_ed = document.getElementById("scty_brch_add_ed").value;
   if(scty_brch_add_ed == ""){
   document.getElementById("scty_brch_add_ed").focus();
   
   swal("Oops!","Please Enter Department Code","error");
   return false;
   }
   
   
   // Cheque Details Account Number
   
   var scty_acc_add_ed = document.getElementById("scty_acc_add_ed").value;
   if(scty_acc_add_ed == ""){
   document.getElementById("scty_acc_add_ed").focus();
   swal("Oops!","Please Enter Department Name","error");
   return false;
   }
   
       
   // Cheque Details Category
   
   var scty_ctgry_add_ed = document.getElementById("scty_ctgry_add_ed").value;
   if(scty_ctgry_add_ed == ""){
   document.getElementById("scty_ctgry_add_ed").focus(); 
   swal("Oops!","Please Write Description","error");
   return false;
   }
   
   // Cheque Details Cheque Book Number
   
   var scty_chq_bok_num_add_ed = document.getElementById("scty_chq_bok_num_add_ed").value;
   if(scty_chq_bok_num_add_ed == ""){
   document.getElementById("scty_chq_bok_num_add_ed").focus();
   swal("Oops!","Please Enter Section Name","error");
   return false;
   }

      // Cheque Details Series

      var scty_series_add_ed = document.getElementById("scty_series_add_ed").value;
      if(scty_series_add_ed == ""){
      document.getElementById("scty_series_add_ed").focus();
      
      swal("Oops!","Please Enter Department Code","error");
      return false;
      }
      
      
      // Cheque Details Number Of Leaves Per Book
      
      var scty_no_lev_per_bk_add_ed = document.getElementById("scty_no_lev_per_bk_add_ed").value;
      if(scty_no_lev_per_bk_add_ed == ""){
      document.getElementById("scty_no_lev_per_bk_add_ed").focus();
      swal("Oops!","Please Enter Department Name","error");
      return false;
      }
      
          
      // Cheque Details Starting Number
      
      var scty_star_num_add_ed = document.getElementById("scty_star_num_add_ed").value;
      if(scty_star_num_add_ed == ""){
      document.getElementById("scty_star_num_add_ed").focus(); 
      swal("Oops!","Please Write Description","error");
      return false;
      }
      
      // Cheque Details End Number
      
      var scty_end_num_add_ed = document.getElementById("scty_end_num_add_ed").value;
      if(scty_end_num_add_ed == ""){
      document.getElementById("scty_end_num_add_ed").focus();
      swal("Oops!","Please Enter Section Name","error");
      return false;
      }
   
      // Cheque Details Cheque Book Status
      
      var scty_chq_book_status_add_ed = document.getElementById("scty_chq_book_status_add_ed").value;
      if(scty_chq_book_status_add_ed == ""){
      document.getElementById("scty_chq_book_status_add_ed").focus();
      swal("Oops!","Please Enter Section Name","error");
      return false;
      }

   document.getElementById("scty_chq_ed").submit();
}

//Clear Function for Cheque Details in EDIT

function editClearChequeDetails(){
   document.getElementById('scty_brch_add_ed').value="";
   document.getElementById('scty_acc_add_ed').value="";
   document.getElementById('scty_ctgry_add_ed').value="";
   document.getElementById('scty_chq_bok_num_add_ed').value="";
   document.getElementById('scty_series_add_ed').value="";
   document.getElementById('scty_no_lev_per_bk_add_ed').value="";
   document.getElementById('scty_star_num_add_ed').value="";
   document.getElementById('scty_end_num_add_ed').value="";
   document.getElementById('scty_chq_book_status_add_ed').value="";
   }




// Cheque Details Edit

function chq_edit(edt)
{
var edtid = edt.id;
 var ed1=document.getElementById("chq_dtls_ed"+edtid).value;
document.getElementById("radio_cheque_edit"+ed1).checked=true;
var edtidchecked=$("input[name='radio_cheque_edit']:checked").val();
var chq_id=document.getElementById('radio_cheque_edit'+edtidchecked).value;
document.getElementById("tempchequeid").value=chq_id;
document.getElementById("edit_data_load_form").submit();
}


// Cheque Details View

function chq_view(vew)
{
var vewid = vew.id;
 var vw1=document.getElementById("chq_dtls_vw"+vewid).value;
document.getElementById("radio_cheque_view"+vw1).checked=true;
var vewidchecked=$("input[name='radio_cheque_view']:checked").val();
var chq_id_vw=document.getElementById('radio_cheque_view'+vewidchecked).value;
document.getElementById("tempviewchequeid").value=chq_id_vw;
document.getElementById("view_data_load_form").submit();
}

// Cheque Details Delete

function chq_delete(dlt)
{
var dltid = dlt.id;
 var dlt1=document.getElementById("chq_dtls_del"+dltid).value;
document.getElementById("radio_cheque_delete"+dlt1).checked=true;
var dltidchecked=$("input[name='radio_cheque_delete']:checked").val();
var dept_id_del=document.getElementById('radio_cheque_delete'+dltidchecked).value;
document.getElementById("tempchequedeleteid").value=dept_id_del;
}

function confirm_chq_del(){
   document.getElementById("chq_dtls_del").submit();
}

//Clear function for Cheque Details Search Page
function clearSearchChq(){
document.getElementById('scty_brch_name').value="";
document.getElementById('scty_acc_num').value="";
document.getElementById('scty_ctgry').value="";
document.getElementById('scty_chq_bk_num').value="";
document.getElementById('scty_no_lev_per_bk').value="";
document.getElementById('scty_chq_bk_stat').value="";
}

/* ------------------------------------------------------------------------ CHEQUE DETAILS END ---------------------------------------------------------------------------- */