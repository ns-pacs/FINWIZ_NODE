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

/* Society Bank city-state    ADD */
     
function add_stateoncity_society_Bank() {
   
    var selected_city = document.getElementById("soc_bnk_address_city").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("soc_bnk_address_state").value = obj1.state;
  }

/////////////////////////////////////////////

/* Society Bank city-state   EDIT */

function edit_stateoncity_society_Bank() {
   
    var selected_city1 = document.getElementById("soc_bnk_address_city_ed").value;
     console.log(selected_city1)
obj1=JSON.parse(selected_city1);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("soc_bnk_address_state_ed").value = obj1.state;
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

    var phnum1 = /([6-9]{1}[0-9]{9})/;   // Validating the phone Number, changes done by Shivu(NODE)
if (!phnum1.test(soc_branch_add_phone_num1))
{
document.getElementById("soc_branch_add_phone_num1").focus();

swal("Invalid","Please Enter Valid Phone Number","warning");
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

    var phnum2 = /([6-9]{1}[0-9]{9})/;   // Validating the phone Number, changes done by Shivu(NODE)
    if (!phnum2.test(soc_branch_add_phone_num2))
    {
    document.getElementById("soc_branch_add_phone_num2").focus();
    
    swal("Invalid","Please Enter Valid Phone Number","warning");
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
   
   swal("Oops!","Please enter Branch name","error");
   return false;
   }
   
   
   // Cheque Details Account Number
   
   var scty_acc_add = document.getElementById("scty_acc_add").value;
   if(scty_acc_add == ""){
   document.getElementById("scty_acc_add").focus();
   swal("Oops!","Please enter Account number","error");
   return false;
   }
   else
   {

           if(scty_acc_add.length < 16){
           document.getElementById("scty_acc_add").focus();
           
           swal("Invalid","Please Enter valid Account Number","error");
              return false;
              }
      }
   
       
   // Cheque Details Category
   
   var scty_ctgry_add = document.getElementById("scty_ctgry_add").value;
   if(scty_ctgry_add == ""){
   document.getElementById("scty_ctgry_add").focus(); 
   swal("Oops!","Please enter Category type","error");
   return false;
   }
   
   // Cheque Details Cheque Book Number
   
   var scty_chq_bok_num_add = document.getElementById("scty_chq_bok_num_add").value;
   if(scty_chq_bok_num_add == ""){
   document.getElementById("scty_chq_bok_num_add").focus();
   swal("Oops!","Please enter Cheque book number","error");
   return false;
   }
   else
   {
   if(scty_chq_bok_num_add.length < 6){
    document.getElementById("scty_chq_bok_num_add").focus();
    
    swal("Invalid","Please Enter valid Cheque book number","error");
       return false;
       }
}

      // Cheque Details Series

      var scty_series_add = document.getElementById("scty_series_add").value;
      if(scty_series_add == ""){
      document.getElementById("scty_series_add").focus();
      
      swal("Oops!","Please enter Cheque book series","error");
      return false;
      }
      
      
      // Cheque Details Number Of Leaves Per Book
      
      var scty_no_lev_per_bk_add = document.getElementById("scty_no_lev_per_bk_add").value;
      if(scty_no_lev_per_bk_add == ""){
      document.getElementById("scty_no_lev_per_bk_add").focus();
      swal("Oops!","Please enter Number Of Cheque leaves per book","error");
      return false;
      }

      else{
        
        if (scty_no_lev_per_bk_add < '10' || scty_no_lev_per_bk_add > '100')
        {
                document.getElementById("scty_no_lev_per_bk_add").focus();
                
                swal("Invalid","Please Enter Valid Cheque leaves","warning");
                return false;
                 }
                }
      
          
      // Cheque Details Starting Number
      
      var scty_star_num_add = document.getElementById("scty_star_num_add").value;
      if(scty_star_num_add == ""){
      document.getElementById("scty_star_num_add").focus(); 
      swal("Oops!","Please enter Cheque starting number","error");
      return false;
      }
      
      // Cheque Details End Number
      
      var scty_end_num_add = document.getElementById("scty_end_num_add").value;
      if(scty_end_num_add == ""){
      document.getElementById("scty_end_num_add").focus();
      swal("Oops!","Please enter Cheque end number","error");
      return false;
      }
   
      // Cheque Details Cheque Book Status
      
      var scty_chq_book_status_add = document.getElementById("scty_chq_book_status_add").value;
      if(scty_chq_book_status_add == ""){
      document.getElementById("scty_chq_book_status_add").focus();
      swal("Oops!","Please select Cheque book status","error");
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




/*--------------------INSURANCE START ------------------------------------------------------------------*/



function alpha(alpbts)
{
   var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
   if (charCode > 31 
         && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122)  && (charCode > 47 || charCode < 58) )
      return false;
   return true;
}


// Only AlphaNumeric for required functions

function alphanumeric(memid)
{
   var charCode = (memid.which) ? memid.which : memid.keyCode;
   if ( charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122))
      return false;
   return true;
}


// Only Numbers for required functions

function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;
   return true;
}
/*To accept . in amount values*/
function amount(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 46 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;
   return true;
}


////validations for Insurance ADD SCreen //////////////////

function insuranceValidation()
{

  var insur_prov_name = document.getElementById("insur_prov_name").value;
    if(insur_prov_name == ""){
    document.getElementById("insur_prov_name").focus();

    swal("Oops!","Please Enter Insurance Provider Name!","error");
    return false;
    }

    var insur_lst_prm_paid = document.getElementById("insur_lst_prm_paid").value;
    if(insur_lst_prm_paid == ""){
    document.getElementById("insur_lst_prm_paid").focus();

    swal("Oops!","Please Enter Insurance First premium paid date!","error");
    return false;
    }

    var insur_policy_date = document.getElementById("insur_policy_date").value;
    if(insur_policy_date == ""){
    document.getElementById("insur_policy_date").focus();

    swal("Oops!","Please Enter Insurance policy date!","error");
    return false;
    }

    var insur_policy_num = document.getElementById("insur_policy_num").value;
    if(insur_policy_num == ""){
    document.getElementById("insur_policy_num").focus();

    swal("Oops!","Please Enter Insurance policy Number!","error");
    return false;
    }

    var insur_coverage = document.getElementById("insur_coverage").value;
    if(insur_coverage == ""){
    document.getElementById("insur_coverage").focus();

    swal("Oops!","Please Enter Insurance Coverage!","error");
    return false;
    }
    var insur_risk = document.getElementById("insur_risk").value;
    if(insur_risk == ""){
    document.getElementById("insur_risk").focus();

    swal("Oops!","Please Enter Insurance Risk!","error");
    return false;
    }
    var insur_policy_amount = document.getElementById("insur_policy_amount").value;
    if(insur_policy_amount == ""){
    document.getElementById("insur_policy_amount").focus();

    swal("Oops!","Please Enter Insurance policy Amount!","error");
    return false;
    }
    var insur_premium_date = document.getElementById("insur_premium_date").value;
    if(insur_premium_date == ""){
    document.getElementById("insur_premium_date").focus();

    swal("Oops!","Please Enter Insurance Premium date!","error");
    return false;
    }
    var insur_premium_amt = document.getElementById("insur_premium_amt").value;
    if(insur_premium_amt == ""){
    document.getElementById("insur_premium_amt").focus();

    swal("Oops!","Please Enter Insurance Premium Amount!","error");
    return false;
    }
    var insur_premium_due_date = document.getElementById("insur_premium_due_date").value;
    if(insur_premium_due_date == ""){
    document.getElementById("insur_premium_due_date").focus();

    swal("Oops!","Please Enter Insurance Premium Due date!","error");
    return false;
    }
    var insur_policy_due_date = document.getElementById("insur_policy_due_date").value;
    if(insur_policy_due_date == ""){
    document.getElementById("insur_policy_due_date").focus();

    swal("Oops!","Please Enter Insurance Policy Due date!","error");
    return false;
    }

    $('#tabs a[href=#insur_nominee_details]').tab('show').addClass("active");
    $('#tabs a[href=#insurance_details]').removeClass("active");
  
   

}


function insuranceNomineeValidation()
{
//tab 1 insurance
 insuranceValidation()
//tab 2 nominee

  var insur_nom_name = document.getElementById("insur_nom_name").value;
    if(insur_nom_name == ""){
    document.getElementById("insur_nom_name").focus();

    swal("Oops!","Please Enter Insurance Nominee Name!","error");
    return false;
    }

    var insur_nom_fatr_nme = document.getElementById("insur_nom_fatr_nme").value;
    if(insur_nom_fatr_nme == ""){
    document.getElementById("insur_nom_fatr_nme").focus();

    swal("Oops!","Please Enter Insurance Nominee Father Name!","error");
    return false;
    }

    var insur_nom_reltn = document.getElementById("insur_nom_reltn").value;
    if(insur_nom_reltn == ""){
    document.getElementById("insur_nom_reltn").focus();

    swal("Oops!","Please Enter Nominee Relation !","error");
    return false;
    }

   //  var insur_nom_gen = document.getElementsByName("insur_nom_gen").value;
   //  if(insur_nom_gen == ""){
   //  document.getElementsByName("insur_nom_gen").focus();

   //  swal("Oops!","Please Enter Nominee Gender!","error");
   //  return false;
   //  }

    var male_ed = document.getElementById("insur_nom_genmale");
    var female_ed = document.getElementById("insur_nom_genfemale");
    
    if (male_ed.checked){
       console.log("male Selected");
    }else if (female_ed.checked) {
       console.log("male Selected");
    }
    else{
        document.getElementById("insur_nom_genmale").autofocus;
        swal("","please select the Gender","error");
        return false;
    }

    var insur_nom_occptn = document.getElementById("insur_nom_occptn").value;
    if(insur_nom_occptn == ""){
    document.getElementById("insur_nom_occptn").focus();

    swal("Oops!","Please Enter NBominee Occupation!","error");
    return false;
    }
    var insur_nom_dob = document.getElementById("insur_nom_dob").value;
    if(insur_nom_dob == ""){
    document.getElementById("insur_nom_dob").focus();

    swal("Oops!","Please Enter  Nominee DOB!","error");
    return false;
    }
    var insur_nom_addr = document.getElementById("insur_nom_addr").value;
    if(insur_nom_addr == ""){
    document.getElementById("insur_nom_addr").focus();

    swal("Oops!","Please Enter Nominee Address!","error");
    return false;
    }
    var insur_nom_lndmark = document.getElementById("insur_nom_lndmark").value;
    if(insur_nom_lndmark == ""){
    document.getElementById("insur_nom_lndmark").focus();

    swal("Oops!","Please Enter Landmark!","error");
    return false;
    }
    var insur_nom_village = document.getElementById("insur_nom_village").value;
    if(insur_nom_village == ""){
    document.getElementById("insur_nom_village").focus();

    swal("Oops!","Please Enter Village Name!","error");
    return false;
    }
    var insur_nom_pncht_mdl = document.getElementById("insur_nom_pncht_mdl").value;
    if(insur_nom_pncht_mdl == ""){
    document.getElementById("insur_nom_pncht_mdl").focus();

    swal("Oops!","Please Enter Nominee panchayat mandal!","error");
    return false;
    }
    var insur_nom_city = document.getElementById("insur_nom_city").value;
    if(insur_nom_city == ""){
    document.getElementById("insur_nom_city").focus();

    swal("Oops!","Please Enter City!","error");
    return false;
    }
    var insur_nom_district = document.getElementById("insur_nom_district").value;
    if(insur_nom_district == ""){
    document.getElementById("insur_nom_district").focus();

    swal("Oops!","Please Enter District!","error");
    return false;
    }
    var insur_nom_country = document.getElementById("insur_nom_country").value;
    if(insur_nom_country == ""){
    document.getElementById("insur_nom_country").focus();

    swal("Oops!","Please Select Country!","error");
    return false;
    }
    var insur_nom_ste = document.getElementById("insur_nom_ste").value;
    if(insur_nom_ste == ""){
    document.getElementById("insur_nom_ste").focus();

    swal("Oops!","Please Select State!","error");
    return false;
    }
    var insur_nom_postal_cd = document.getElementById("insur_nom_postal_cd").value;
    if(insur_nom_postal_cd == ""){
    document.getElementById("insur_nom_postal_cd").focus();

    swal("Oops!","Please Enter Postal Code!","error");
    return false;
    }
  
    var insur_nom_phn_num = document.getElementById("insur_nom_phn_num").value;
    if(insur_nom_phn_num == ""){
    document.getElementById("insur_nom_phn_num").focus();

    swal("Oops!","Please Enter Nominee Phone Number!","error");
    return false;
    }
   
    
    var yes_ed = document.getElementById("insu_nom_isminor_yes");
    var no_ed = document.getElementById("acc_nom_isminor_no");
    
    if (yes_ed.checked){
       console.log("Yes Selected");
                //   alert("sghdjahsg")

     $("#insur_guardian_details *").prop("disabled", false);
    $('#tabs a[href=#insur_guardian_details]').tab('show').addClass("active");

    }
    else if (no_ed.checked) {
       console.log("No Selected");
        //    alert("sghdjahsg")
     document.getElementById("guardian_details").disabled=true;
    $("#insur_guardian_details *").attr("disabled", "disabled").off('click');
    $('#tabs a[href=#insur_guardian_details]').tab('show').addClass("active");

    }
    else{
        document.getElementById("insu_nom_isminor_yes").autofocus;
        swal("","please select Minor  YES/NO","error");
        return false;
    }

//    if( (document.getElementById("insu_nom_isminor_yes").checked == "") && (document.getElementById("insu_nom_isminor_no").checked == "") ){
//     alert("sghdjahsg")
//       document.getElementById("insu_nom_isminor_yes").autofocus;
//       swal("","please select Is Minor or Not","error");
//       return false;
// }

// else if( (document.getElementById("insu_nom_isminor_yes").checked==true) && (document.getElementById("insu_nom_isminor_no").checked==false) ){
//           alert("sghdjahsg")

//     //$("#guardian_details *").attr("enabled", "enabled").off('click');
//     $("#insur_guardian_details *").prop("disabled", false);
//    $('#tabs a[href=#insur_guardian_details]').tab('show').addClass("active");
  
// }
// else if((document.getElementById("insu_nom_isminor_yes").checked==false) && (document.getElementById("insu_nom_isminor_no").checked==true) ){
   
//    alert("sghdjahsg")
//    // document.getElementById("guardian_details").disabled=true;
//    $("#insur_guardian_details *").attr("disabled", "disabled").off('click');
//    $('#tabs a[href=#insur_guardian_details]').tab('show').addClass("active");
// }

    $('#tabs a[href=#insur_guardian_details]').tab('show').addClass("active");
    $('#tabs a[href=#insur_nominee_details]').removeClass("active");
    
    
}


function insuranceGuardianValidation()
{
 
   insuranceNomineeValidation()
 
 
   var insur_gurdian_name = document.getElementById("insur_gurdian_name").value;
    if(insur_gurdian_name == ""){
    document.getElementById("insur_gurdian_name").focus();

    swal("Oops!","Please Enter Guardian Name!","error");
    return false;
    }

    var insur_gurdian_fath_name = document.getElementById("insur_gurdian_fath_name").value;
    if(insur_gurdian_fath_name == ""){
    document.getElementById("insur_gurdian_fath_name").focus();

    swal("Oops!","Please Enter Guardian Father Name!","error");
    return false;
    }

    var insur_gurdian_reltn = document.getElementById("insur_gurdian_reltn").value;
    if(insur_nom_reltn == ""){
    document.getElementById("insur_nom_reltn").focus();

    swal("Oops!","Please Enter Guardian Relation !","error");
    return false;
    }

    var male_ed2 = document.getElementById("insur_gurdian_genmale");
    var female_ed1 = document.getElementById("insur_gurdian_genfemale");
    
    if (male_ed2.checked){
       console.log("male Selected");
    }else if (female_ed1.checked) {
       console.log("male Selected");
    }
    else{
        document.getElementById("insur_gurdian_genmale").autofocus;
        swal("","please select the Gender","error");
        return false;
    }

    var insur_gurdian_occupation = document.getElementById("insur_gurdian_occupation").value;
    if(insur_gurdian_occupation == ""){
    document.getElementById("insur_gurdian_occupation").focus();

    swal("Oops!","Please Enter Guardian occupation!","error");
    return false;
    }
    var insur_gurdian_dob = document.getElementById("insur_gurdian_dob").value;
    if(insur_gurdian_dob == ""){
    document.getElementById("insur_gurdian_dob").focus();

    swal("Oops!","Please Enter  Guardian DOB!","error");
    return false;
    }
    var insur_gurdian_minr_acoper_by = document.getElementById("insur_gurdian_minr_acoper_by").value;
    if(insur_gurdian_minr_acoper_by == ""){
    document.getElementById("insur_gurdian_minr_acoper_by").focus();

    swal("Oops!","Please Enter Guardian Minor!","error");
    return false;
    }
    var insur_gurdian_addr_typ = document.getElementById("insur_gurdian_addr_typ").value;
    if(insur_gurdian_addr_typ == ""){
    document.getElementById("insur_gurdian_addr_typ").focus();

    swal("Oops!","Please Enter Address Type!","error");
    return false;
    }
    var insur_gurdian_addr_line = document.getElementById("insur_gurdian_addr_line").value;
    if(insur_gurdian_addr_line == ""){
    document.getElementById("insur_gurdian_addr_line").focus();

    swal("Oops!","Please Enter Address Line!","error");
    return false;
    }
    var insur_gurdian_landmark = document.getElementById("insur_gurdian_landmark").value;
    if(insur_gurdian_landmark == ""){
    document.getElementById("insur_gurdian_landmark").focus();

    swal("Oops!","Please Enter Guardian Landmark!","error");
    return false;
    }
    var insur_gurdian_village = document.getElementById("insur_gurdian_village").value;
    if(insur_gurdian_village == ""){
    document.getElementById("insur_gurdian_village").focus();

    swal("Oops!","Please Enter Village!","error");
    return false;
    }
    var insur_gurdian_pncht_mdl = document.getElementById("insur_gurdian_pncht_mdl").value;
    if(insur_gurdian_pncht_mdl == ""){
    document.getElementById("insur_gurdian_pncht_mdl").focus();

    swal("Oops!","Please Enter Panchayat Mandal!","error");
    return false;
    }
    var insur_gurdian_city = document.getElementById("insur_gurdian_city").value;
    if(insur_gurdian_city == ""){
    document.getElementById("insur_gurdian_city").focus();

    swal("Oops!","Please Select Guardian City!","error");
    return false;
    }
    var insur_gurdian_district = document.getElementById("insur_gurdian_district").value;
    if(insur_gurdian_district == ""){
    document.getElementById("insur_gurdian_district").focus();

    swal("Oops!","Please Enter District!","error");
    return false;
    }
  
    var insur_gurdian_ste = document.getElementById("insur_gurdian_ste").value;
    if(insur_gurdian_ste == ""){
    document.getElementById("insur_gurdian_ste").focus();

    swal("Oops!","Please Enter State!","error");
    return false;
    }
    var insur_gurdian_country = document.getElementById("insur_gurdian_country").value;
    if(insur_gurdian_country == ""){
    document.getElementById("insur_gurdian_country").focus();

    swal("Oops!","Please Enter Guardian Country!","error");
    return false;
    }
    var   insur_gurdian_phn_num = document.getElementById("insur_gurdian_phn_num").value;
    if(  insur_gurdian_phn_num == ""){
    document.getElementById("insur_gurdian_phn_num").focus();

    swal("Oops!","Please Enter Guardian Phone Number!","error");
    return false;
    }
    var insur_gurdian_postl = document.getElementById("insur_gurdian_postl").value;
    if(insur_gurdian_postl == ""){
    document.getElementById("insur_gurdian_postl").focus();

    swal("Oops!","Please Enter Guardian Postal Code!","error");
    return false;
    }
    

    var   insur_gurdian_guar_typ = document.getElementById("insur_gurdian_guar_typ").value;
    if(  insur_gurdian_guar_typ == ""){
    document.getElementById("insur_gurdian_guar_typ").focus();

    swal("Oops!","Please Enter Guardian Type!","error");
    return false;
    }
    var insur_gurdian_is_socty_mem = document.getElementById("insur_gurdian_is_socty_mem").value;
    if(insur_gurdian_is_socty_mem == ""){
    document.getElementById("insur_gurdian_is_socty_mem").focus();

    swal("Oops!","Please Enter Guardian IS Society Member Or Not!","error");
    return false;
    }
    var   insur_gurdian_is_acc_holder = document.getElementById("insur_gurdian_is_acc_holder").value;
    if(  insur_gurdian_is_acc_holder == ""){
    document.getElementById("insur_gurdian_is_acc_holder").focus();

    swal("Oops!","Please Enter Guardian is Account Holder!","error");
    return false;
    }

    document.getElementById('insurance_form').submit();
}








////validations  for update and edit//////////////////

function insuranceValidationEdit()
{

  var insur_prov_name_ed = document.getElementById("insur_prov_name_ed").value;
    if(insur_prov_name_ed == ""){
    document.getElementById("insur_prov_name_ed").focus();

    swal("Oops!","Please Enter Insurance Provider Name!","error");
    return false;
    }

    var insur_prov_name_ed = document.getElementById("insur_prov_name_ed").value;
    if(insur_prov_name_ed == ""){
    document.getElementById("insur_prov_name_ed").focus();

    swal("Oops!","Please Enter Insurance First premium paid date!","error");
    return false;
    }

    var insur_policy_date_ed = document.getElementById("insur_policy_date_ed").value;
    if(insur_policy_date_ed == ""){
    document.getElementById("insur_policy_date_ed").focus();

    swal("Oops!","Please Enter Insurance policy date!","error");
    return false;
    }

    var insur_policy_date_ed = document.getElementById("insur_policy_date_ed").value;
    if(insur_policy_date_ed == ""){
    document.getElementById("insur_policy_date_ed").focus();

    swal("Oops!","Please Enter Insurance policy Number!","error");
    return false;
    }

    var insur_coverage_ed = document.getElementById("insur_coverage_ed").value;
    if(insur_coverage_ed == ""){
    document.getElementById("insur_coverage_ed").focus();

    swal("Oops!","Please Enter Insurance Coverage!","error");
    return false;
    }
    var insur_risk_ed = document.getElementById("insur_risk_ed").value;
    if(insur_risk_ed == ""){
    document.getElementById("insur_risk_ed").focus();

    swal("Oops!","Please Enter Insurance Risk!","error");
    return false;
    }
    var insur_policy_amount_ed = document.getElementById("insur_policy_amount_ed").value;
    if(insur_policy_amount_ed == ""){
    document.getElementById("insur_policy_amount_ed").focus();

    swal("Oops!","Please Enter Insurance policy Amount!","error");
    return false;
    }
    var insur_premium_date_ed = document.getElementById("insur_premium_date_ed").value;
    if(insur_premium_date_ed == ""){
    document.getElementById("insur_premium_date_ed").focus();

    swal("Oops!","Please Enter Insurance Premium date!","error");
    return false;
    }
    var insur_premium_amt_ed = document.getElementById("insur_premium_amt_ed").value;
    if(insur_premium_amt_ed == ""){
    document.getElementById("insur_premium_amt_ed").focus();

    swal("Oops!","Please Enter Insurance Premium Amount!","error");
    return false;
    }
    var insur_premium_due_date_ed = document.getElementById("insur_premium_due_date_ed").value;
    if(insur_premium_due_date_ed == ""){
    document.getElementById("insur_premium_due_date_ed").focus();

    swal("Oops!","Please Enter Insurance Premium Due date!","error");
    return false;
    }
    var insur_policy_due_date_ed = document.getElementById("insur_policy_due_date_ed").value;
    if(insur_policy_due_date_ed == ""){
    document.getElementById("insur_policy_due_date_ed").focus();

    swal("Oops!","Please Enter Insurance Policy Due date!","error");
    return false;
    }

    var insur_remarks_ed = document.getElementById("insur_remarks_ed").value;
    if(insur_remarks_ed == ""){
    document.getElementById("insur_remarks_ed").focus();

    swal("Oops!","Please Enter Remarks","error");
    return false;
    }

    $('#tabs a[href=#insur_nominee_details_ed]').tab('show').addClass("active");
    $('#tabs a[href=#insurance_details_ed]').removeClass("active");
  
   

}

function insuranceNomineeValidationEdit()
{
//tab 1 insurance
 insuranceValidationEdit()
//tab 2 nominee

  var insur_nom_name_ed = document.getElementById("insur_nom_name_ed").value;
    if(insur_nom_name_ed == ""){
    document.getElementById("insur_nom_name_ed").focus();

    swal("Oops!","Please Enter Insurance Nominee Name!","error");
    return false;
    }

    var insur_nom_fatr_nme_ed = document.getElementById("insur_nom_fatr_nme_ed").value;
    if(insur_nom_fatr_nme_ed == ""){
    document.getElementById("insur_nom_fatr_nme_ed").focus();

    swal("Oops!","Please Enter Insurance Nominee Father Name!","error");
    return false;
    }

    var insur_nom_reltn_ed = document.getElementById("insur_nom_reltn_ed").value;
    if(insur_nom_reltn_ed == ""){
    document.getElementById("insur_nom_reltn_ed").focus();

    swal("Oops!","Please Enter Nominee Relation !","error");
    return false;
    }

    var male_ed_nm = document.getElementById("insur_nom_genmale_ed");
    var female_ed_nm = document.getElementById("insur_nom_genfemale_ed");

    if (male_ed_nm.checked){
       console.log("male Selected");
    }else if (female_ed_nm.checked) {
       console.log("female Selected");
    }
    else{
        document.getElementById("insur_nom_genmale_ed").autofocus;
        swal("","please select the Gender","error");
        return false;
    }


    var insur_nom_occptn_ed = document.getElementById("insur_nom_occptn_ed").value;
    if(insur_nom_occptn_ed == ""){
    document.getElementById("insur_nom_occptn_ed").focus();

    swal("Oops!","Please Enter NBominee Occupation!","error");
    return false;
    }
    var insur_nom_dob_ed = document.getElementById("insur_nom_dob_ed").value;
    if(insur_nom_dob_ed == ""){
    document.getElementById("insur_nom_dob_ed").focus();

    swal("Oops!","Please Enter  Nominee DOB!","error");
    return false;
    }
    var insur_nom_addr_ed = document.getElementById("insur_nom_addr_ed").value;
    if(insur_nom_addr_ed == ""){
    document.getElementById("insur_nom_addr_ed").focus();

    swal("Oops!","Please Enter Nominee Address!","error");
    return false;
    }
    var insur_nom_lndmark_ed = document.getElementById("insur_nom_lndmark_ed").value;
    if(insur_nom_lndmark_ed == ""){
    document.getElementById("insur_nom_lndmark_ed").focus();

    swal("Oops!","Please Enter Landmark!","error");
    return false;
    }
    var insur_nom_village_ed = document.getElementById("insur_nom_village_ed").value;
    if(insur_nom_village_ed == ""){
    document.getElementById("insur_nom_village_ed").focus();

    swal("Oops!","Please Enter Village Name!","error");
    return false;
    }
    var insur_nom_pncht_mdl_ed = document.getElementById("insur_nom_pncht_mdl_ed").value;
    if(insur_nom_pncht_mdl_ed == ""){
    document.getElementById("insur_nom_pncht_mdl_ed").focus();

    swal("Oops!","Please Enter Nominee panchayat mandal!","error");
    return false;
    }
    var insur_nom_district_ed = document.getElementById("insur_nom_district_ed").value;
    if(insur_nom_district_ed == ""){
    document.getElementById("insur_nom_district_ed").focus();

    swal("Oops!","Please Enter Nominee panchayat mandal!","error");
    return false;
    }
    var insur_nom_city_ed = document.getElementById("insur_nom_city_ed").value;
    if(insur_nom_city_ed == ""){
    document.getElementById("insur_nom_city_ed").focus();

    swal("Oops!","Please Enter City!","error");
    return false;
    }
    var insur_nom_country_ed = document.getElementById("insur_nom_country_ed").value;
    if(insur_nom_country_ed == ""){
    document.getElementById("insur_nom_country_ed").focus();

    swal("Oops!","Please Select Country!","error");
    return false;
    }
    var insur_nom_ste_ed = document.getElementById("insur_nom_ste_ed").value;
    if(insur_nom_ste_ed == ""){
    document.getElementById("insur_nom_ste_ed").focus();

    swal("Oops!","Please Select State!","error");
    return false;
    }
    var insur_nom_postal_cd_ed = document.getElementById("insur_nom_postal_cd_ed").value;
    if(insur_nom_postal_cd_ed == ""){
    document.getElementById("insur_nom_postal_cd_ed").focus();

    swal("Oops!","Please Enter Postal Code!","error");
    return false;
    }
  
    var insur_nom_phn_num_ed = document.getElementById("insur_nom_phn_num_ed").value;
    if(insur_nom_phn_num_ed == ""){
    document.getElementById("insur_nom_phn_num_ed").focus();

    swal("Oops!","Please Enter Nominee Phone Number!","error");
    return false;
    }
   
   //  var   acc_nom_isminor_ed = document.getElementsByName("acc_nom_isminor_ed").value;
   //  if(  acc_nom_isminor_ed == ""){
   //  document.getElementsByName("acc_nom_isminor_ed").focus();

   //  swal("Oops!","Please Select whether Minor or not!","error");
   //  return false;
   //  }


   var yes_ed = document.getElementById("insu_nom_isminor_yes_ed");
   var no_ed = document.getElementById("acc_nom_isminor_no_ed");
   
   if (yes_ed.checked){
      console.log("Yes Selected");
                //  alert("sghdjahsg")

                 $("#insu_nom_isminor_yes_ed").click(function() {
                    $("#insur_gurdian_name_ed").attr("disabled", true);
                    $("#insur_gurdian_reltn_ed").hide();//To hide the dropdown
                });


    $("#insur_guardian_details_ed *").prop("disabled", false);
   $('#tabs a[href=#insur_guardian_details_ed]').tab('show').addClass("active");
   $('#tabs a[href=#_ed]').removeClass("active");
   }
   else if (no_ed.checked) {
      console.log("No Selected");
        //   alert("sghdjahsg")



    document.getElementById("guardian_details").disabled=true;
   $("#insur_guardian_details_ed *").attr("disabled", "disabled").off('click');
   $('#tabs a[href=#insur_guardian_details_ed]').tab('show').addClass("active");

   }
   else{
       document.getElementById("insu_nom_isminor_yes_ed").autofocus;
       swal("","please select Minor  YES/NO","error");
       return false;
   }

   


    $('#tabs a[href=#insur_guardian_details]').tab('show').addClass("active");
    $('#tabs a[href=#insur_nominee_details]').removeClass("active");
    
}   


function insuranceGuardianValidationEdit()
{
 
   insuranceNomineeValidationEdit()
 
 
   var insur_gurdian_name_ed = document.getElementById("insur_gurdian_name_ed").value;
    if(insur_gurdian_name_ed == ""){
    document.getElementById("insur_gurdian_name_ed").focus();

    swal("Oops!","Please Enter Guardian Name!","error");
    return false;
    }

    var insur_gurdian_fath_name_ed = document.getElementById("insur_gurdian_fath_name_ed").value;
    if(insur_gurdian_fath_name_ed == ""){
    document.getElementById("insur_gurdian_fath_name_ed").focus();

    swal("Oops!","Please Enter Guardian Father Name!","error");
    return false;
    }

    var insur_gurdian_reltn_ed = document.getElementById("insur_gurdian_reltn_ed").value;
    if(insur_gurdian_reltn_ed == ""){
    document.getElementById("insur_gurdian_reltn_ed").focus();

    swal("Oops!","Please Enter Guardian Relation !","error");
    return false;
    }

    var insur_gurdian_gender_ed = document.getElementsByName("insur_gurdian_gender_ed").value;
    if(insur_gurdian_gender_ed == ""){
    document.getElementsByName("insur_gurdian_gender_ed").focus();

    swal("Oops!","Please Enter Guardian Gender!","error");
    return false;
    }

    var insur_gurdian_occupation_ed = document.getElementById("insur_gurdian_occupation_ed").value;
    if(insur_gurdian_occupation_ed == ""){
    document.getElementById("insur_gurdian_occupation_ed").focus();

    swal("Oops!","Please Enter Guardian occupation!","error");
    return false;
    }
    var insur_gurdian_dob_ed = document.getElementById("insur_gurdian_dob_ed").value;
    if(insur_gurdian_dob_ed == ""){
    document.getElementById("insur_gurdian_dob_ed").focus();

    swal("Oops!","Please Enter  Guardian DOB!","error");
    return false;
    }
    var insur_gurdian_minr_acoper_by_ed = document.getElementById("insur_gurdian_minr_acoper_by_ed").value;
    if(insur_gurdian_minr_acoper_by_ed == ""){
    document.getElementById("insur_gurdian_minr_acoper_by_ed").focus();

    swal("Oops!","Please Enter Guardian Minor!","error");
    return false;
    }
    var insur_gurdian_addr_typ_ed = document.getElementById("insur_gurdian_addr_typ_ed").value;
    if(insur_gurdian_addr_typ_ed == ""){
    document.getElementById("insur_gurdian_addr_typ_ed").focus();

    swal("Oops!","Please Enter Address Type!","error");
    return false;
    }
    var insur_gurdian_addr_line_ed = document.getElementById("insur_gurdian_addr_line_ed").value;
    if(insur_gurdian_addr_line_ed == ""){
    document.getElementById("insur_gurdian_addr_line_ed").focus();

    swal("Oops!","Please Enter Address Line!","error");
    return false;
    }
    var insur_gurdian_landmark_ed = document.getElementById("insur_gurdian_landmark_ed").value;
    if(insur_gurdian_landmark_ed == ""){
    document.getElementById("insur_gurdian_landmark_ed").focus();

    swal("Oops!","Please Enter Guardian Landmark!","error");
    return false;
    }
    var insur_gurdian_village_ed = document.getElementById("insur_gurdian_village_ed").value;
    if(insur_gurdian_village_ed == ""){
    document.getElementById("insur_gurdian_village_ed").focus();

    swal("Oops!","Please Enter Village!","error");
    return false;
    }
    var insur_gurdian_pncht_mdl_ed = document.getElementById("insur_gurdian_pncht_mdl_ed").value;
    if(insur_gurdian_pncht_mdl_ed == ""){
    document.getElementById("insur_gurdian_pncht_mdl_ed").focus();

    swal("Oops!","Please Enter Panchayat Mandal!","error");
    return false;
    }
    var insur_gurdian_city_ed = document.getElementById("insur_gurdian_city_ed").value;
    if(insur_gurdian_city_ed == ""){
    document.getElementById("insur_gurdian_city_ed").focus();

    swal("Oops!","Please Select Guardian City!","error");
    return false;
    }
    var insur_gurdian_district_ed = document.getElementById("insur_gurdian_district_ed").value;
    if(insur_gurdian_district_ed == ""){
    document.getElementById("insur_gurdian_district_ed").focus();

    swal("Oops!","Please Enter District!","error");
    return false;
    }
  
    var insur_gurdian_ste_ed = document.getElementById("insur_gurdian_ste_ed").value;
    if(insur_gurdian_ste_ed == ""){
    document.getElementById("insur_gurdian_ste_ed").focus();

    swal("Oops!","Please Enter State!","error");
    return false;
    }
    var insur_gurdian_country_ed = document.getElementById("insur_gurdian_country_ed").value;
    if(insur_gurdian_country_ed == ""){
    document.getElementById("insur_gurdian_country_ed").focus();

    swal("Oops!","Please Enter Guardian Country!","error");
    return false;
    }
    var   insur_gurdian_phn_num_ed = document.getElementById("insur_gurdian_phn_num_ed").value;
    if(  insur_gurdian_phn_num_ed == ""){
    document.getElementById("insur_gurdian_phn_num_ed").focus();

    swal("Oops!","Please Enter Guardian Phone Number!","error");
    return false;
    }
    var insur_gurdian_postl_ed = document.getElementById("insur_gurdian_postl_ed").value;
    if(insur_gurdian_postl_ed == ""){
    document.getElementById("insur_gurdian_postl_ed").focus();

    swal("Oops!","Please Enter Guardian Postal Code!","error");
    return false;
    }
    

    var   insur_gurdian_guar_typ_ed = document.getElementById("insur_gurdian_guar_typ_ed").value;
    if(  insur_gurdian_guar_typ_ed == ""){
    document.getElementById("insur_gurdian_guar_typ_ed").focus();

    swal("Oops!","Please Enter Guardian Type!","error");
    return false;
    }
    var insur_gurdian_is_socty_mem_ed = document.getElementById("insur_gurdian_is_socty_mem_ed").value;
    if(insur_gurdian_is_socty_mem_ed == ""){
    document.getElementById("insur_gurdian_is_socty_mem_ed").focus();

    swal("Oops!","Please Enter Guardian IS Society Member Or Not!","error");
    return false;
    }
    var   insur_gurdian_is_acc_holder_ed = document.getElementById("insur_gurdian_is_acc_holder_ed").value;
    if(  insur_gurdian_is_acc_holder_ed == ""){
    document.getElementById("insur_gurdian_is_acc_holder_ed").focus();

    swal("Oops!","Please Enter Guardian is Account Holder!","error");
    return false;
    }

    document.getElementById('insurance_edit_submit').submit();
}

/////////////////////////////////////


///clear insurance tab
function clear_insurance()
{
    document.getElementById('insur_prov_name').value="";
    document.getElementById('insur_lst_prm_paid').value="";
    document.getElementById('insur_policy_date').value="";
    document.getElementById('insur_policy_num').value="";
    document.getElementById('insur_coverage').value="";
    document.getElementById('insur_risk').value="";
    document.getElementById('insur_policy_amount').value="";
    document.getElementById('insur_premium_date').value="";
    document.getElementById('insur_premium_amt').value="";
    document.getElementById('insur_premium_due_date').value="";
    document.getElementById('insur_policy_due_date').value="";
    document.getElementById('remarks_insurance').value="";
   
}
//clear insurance Nominee tab
function clear_insurance_nominee()
         
{
    document.getElementById('insur_nom_name').value="";
    document.getElementById('insur_nom_fatr_nme').value="";
    document.getElementById('insur_nom_reltn').value="";
    document.getElementById('insur_nom_genmale').checked= false;
    document.getElementById('insur_nom_genfemale').checked= false;
    document.getElementById('insur_nom_occptn').value="";
    document.getElementById('insur_nom_dob').value="";
    document.getElementById('insur_nom_addr').value="";
    document.getElementById('insur_nom_lndmark').value="";
    document.getElementById('insur_nom_village').value="";
    document.getElementById('insur_nom_pncht_mdl').value="";  
    document.getElementById('insur_nom_city').value="";
    document.getElementById('insur_nom_distict').value="";
    document.getElementById('insur_nom_ste').value="";
    document.getElementById('insur_nom_country').value="";
    document.getElementById('insur_nom_postal_cd').value="";
    document.getElementById('insur_nom_phn_num').value="";
    document.getElementById('acc_nom_isminor_yes').checked= false;
    document.getElementById('acc_nom_isminor_no').checked= false;  
}

//clear insurance Guardian tab
function clear_insurance_guardian()
{
   document.getElementById('insur_gurdian_name').value="";
   document.getElementById('insur_gurdian_fath_name').value="";
   document.getElementById('insur_gurdian_reltn').value="";
   document.getElementById('insur_gurdian_genmale').checked=false;
   document.getElementById('insur_gurdian_genfemale').checked=false;
   document.getElementById('insur_gurdian_occupation').value="";
   document.getElementById('insur_gurdian_dob').value="";
   document.getElementById('insur_gurdian_minr_acoper_by').value="";
   document.getElementById('insur_gurdian_addr_typ').value="";
   document.getElementById('insur_gurdian_addr_line').value="";
   document.getElementById('insur_gurdian_landmark').value="";  
   document.getElementById('insur_gurdian_village').value="";
   document.getElementById('insur_gurdian_pncht_mdl').value="";
   document.getElementById('insur_gurdian_city').value="";
   document.getElementById('insur_gurdian_district').value="";
   document.getElementById('insur_gurdian_ste').value="";
   document.getElementById('insur_gurdian_country').value="";
   document.getElementById('insur_gurdian_phn_num').value="";
   document.getElementById('insur_gurdian_postl').value="";  
 
   document.getElementById('insur_gurdian_guar_typ').value="";
   document.getElementById('insur_gurdian_is_socty_mem').value="";
   document.getElementById('insur_gurdian_is_acc_holder').value="";  
}



///clear insurance edit tab
function clear_insuranceEdit()
{
    document.getElementById('insur_prov_name_ed').value="";
    document.getElementById('insur_lst_prm_paid_ed').value="";
    document.getElementById('insur_policy_date_ed').value="";
    document.getElementById('insur_policy_num_ed').value="";
    document.getElementById('insur_coverage_ed').value="";
    document.getElementById('insur_risk_ed').value="";
    document.getElementById('insur_policy_amount_ed').value="";
    document.getElementById('insur_premium_date_ed').value="";
    document.getElementById('insur_premium_amt_ed').value="";
    document.getElementById('insur_premium_due_date_ed').value="";
    document.getElementById('insur_policy_due_date_ed').value="";
    document.getElementById('remarks_insurance_ed').value="";
   
}
//clear insurance edit Nominee tab
function clear_insurance_nomineeEdit()
         
{
    document.getElementById('insur_nom_name_ed').value="";
    document.getElementById('insur_nom_fatr_nme_ed').value="";
    document.getElementById('insur_nom_reltn_ed').value="";
    document.getElementById('insur_nom_genmale_ed').checked= false;
    document.getElementById('insur_nom_genfemale_ed').checked= false;
    document.getElementById('insur_nom_occptn_ed').value="";
    document.getElementById('insur_nom_dob_ed').value="";
    document.getElementById('insur_nom_addr_ed').value="";
    document.getElementById('insur_nom_lndmark_ed').value="";
    document.getElementById('insur_nom_village_ed').value="";
    document.getElementById('insur_nom_pncht_mdl_ed').value="";  
    document.getElementById('insur_nom_city_ed').value="";
    document.getElementById('insur_nom_district_ed').value="";
    document.getElementById('insur_nom_ste_ed').value="";
    document.getElementById('insur_nom_country_ed').value="";
    document.getElementById('insur_nom_postal_cd_ed').value="";
    document.getElementById('insur_nom_phn_num_ed').value="";
    document.getElementById('acc_nom_isminor_yes').checked= false;
    document.getElementById('acc_nom_isminor_no').checked= false;  
}

//clear insurance edit Guardian tab
function clear_insurance_guardianEdit()
{
   document.getElementById('insur_gurdian_name_ed').value="";
   document.getElementById('insur_gurdian_fath_name_ed').value="";
   document.getElementById('insur_gurdian_reltn_ed').value="";
   document.getElementById('insur_gurdian_genmale_ed').checked=false;
   document.getElementById('insur_gurdian_genfemale_ed').checked=false;
   document.getElementById('insur_gurdian_occupation_ed').value="";
   document.getElementById('insur_gurdian_dob_ed').value="";
   document.getElementById('insur_gurdian_minr_acoper_by_ed').value="";
   document.getElementById('insur_gurdian_addr_typ_ed').value="";
   document.getElementById('insur_gurdian_addr_line_ed').value="";
   document.getElementById('insur_gurdian_landmark_ed').value="";  
   document.getElementById('insur_gurdian_village_ed').value="";
   document.getElementById('insur_gurdian_pncht_mdl_ed').value="";
   document.getElementById('insur_gurdian_city_ed').value="";
   document.getElementById('insur_gurdian_district_ed').value="";
   document.getElementById('insur_gurdian_ste_ed').value="";
   document.getElementById('insur_gurdian_country_ed').value="";
   document.getElementById('insur_gurdian_phn_num_ed').value="";
   document.getElementById('insur_gurdian_postl_ed').value="";  
 
   document.getElementById('insur_gurdian_guar_typ_ed').value="";
   document.getElementById('insur_gurdian_is_socty_mem_ed').value="";
   document.getElementById('insur_gurdian_is_acc_holder_ed').value="";  
}




///Selecting state on City for Nominee
function stateoncity_insurance_nominee() {
   
   var selected_city = document.getElementById("insur_nom_city").value;
    console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("insur_nom_ste").value = obj1.state;
 }
 ///Selecting state on City for guardian
 function stateoncity_insurance_guardian() {
   
   var selected_city = document.getElementById("insur_gurdian_city").value;
    console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("insur_gurdian_ste").value = obj1.state;
 }

 function stateoncity_insurance_nominee() {
   
   var selected_city = document.getElementById("insur_nom_city").value;
    console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("insur_nom_ste").value = obj1.state;
 }
 ///Selecting state on City for guardian
 function stateoncity_insurance_guardian() {
   
   var selected_city = document.getElementById("insur_gurdian_city").value;
    console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("insur_gurdian_ste").value = obj1.state;
 }



 function stateoncity_insurance_nominee_edit() {
   
   var selected_city = document.getElementById("insur_nom_city_ed").value;
    console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("insur_nom_ste_ed").value = obj1.state;
 }
 ///Selecting state on City for guardian
 function stateoncity_insurance_guardian_edit() {
   
   var selected_city = document.getElementById("insur_gurdian_city_ed").value;
    console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("insur_gurdian_ste_ed").value = obj1.state;
 }




 function edit_row_insurance(oObject)
 {
//  alert(oObject)
 var id = oObject.id;
//  alert("This object's ID attribute is set to \"" + id + "\"."); 
  // alert(id.substring(0, str.indexOf("ed")));
  var rb1=document.getElementById("rf"+id).value;
//   alert("radio button value"+rb1)
 document.getElementById("radiobutton1rfed"+rb1).checked=true;
 var idchecked=$("input[name='radiobutton1rfed']:checked").val();
//   alert(idchecked);
 
 
 var member_id=document.getElementById('radiobutton1rfed'+idchecked).value;
//  alert("BANK ID -----------------------"+member_id);
 
 document.getElementById("tempinsuranceid").value=member_id;
document.getElementById("insurance_edit_window").submit();
 }



 function view_row_insurance(oObject)
 {
    // alert(oObject)
    var id = oObject.id;
     //alert("This object's ID attribute is set to \"" + id + "\"."); 
     // alert(id.substring(0, str.indexOf("ed")));
     var rb1=document.getElementById("vf"+id).value;
    //  alert("radio button value"+rb1)
    document.getElementById("radiobutton1rfvw"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfvw']:checked").val();
    //  alert(idchecked);
    
    
    var member_id=document.getElementById('radiobutton1rfvw'+idchecked).value;
    // alert("BANK ID -----------------------"+member_id);
    
    document.getElementById("tempinsuranceid1").value=member_id;
    // alert(document.getElementById("tempinsuranceid1").value)
    document.getElementById("insurance_view_window").submit();
    }

////view screen

function viewtabcontinue()
{
   $('#tabs a[href=#insur_nominee_details_vw]').tab('show').addClass("active");
   $('#tabs a[href=#insurance_details_vw]').removeClass("active");
}

function viewtabcontinueguardian()
{
   $('#tabs a[href=#insur_guardian_details_vw]').tab('show').addClass("active");
   $('#tabs a[href=#insur_nominee_details_vw]').removeClass("active");
}




    function delete_row_insurance(oObject)
    {
       // alert(oObject)
       var id = oObject.id;
        //alert("This object's ID attribute is set to \"" + id + "\"."); 
       //  alert(id.substring(0, str.indexOf("ed")));
        var rb1=document.getElementById("del"+id).value;
       // alert("radio button value"+rb1)
       document.getElementById("radiobutton1rfdel"+rb1).checked=true;
       var idchecked=$("input[name='radiobutton1rfdel']:checked").val();
        //alert(idchecked);
       
       
       var member_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
       //alert("BANK ID -----------------------"+member_id);
       
       document.getElementById("tempinsurdelete").value=member_id;
      // document.getElementById("acc_master_delete_window").submit();
   }
   

    function delete_insurance_onconfirm(){

      document.getElementById("insurance_delete_window").submit();
  }


  function isMinor(minor){
   $('input[name=acc_nom_isminor_ed]').val=minor.value;
}

//////////////////////////////

function relation_gender(relation){
    if(relation.value == "Father" || relation.value == "Son" || relation.value == "Brother" || relation.value == "Husband"){
     alert("when Father");
     document.getElementById("insur_nom_genfemale").disabled = true;
     document.getElementById("insur_nom_genmale").checked = true;
}
else if(relation.value == "Mother" || relation.value == "Daughter" || relation.value == "Sister" || relation.value == "Wife"){

    document.getElementById("insur_nom_genmale").disabled = true;

    document.getElementById("insur_nom_genfemale").checked = true;
}
}

/////////////////////////////

function relguardian_gender(reltn){
    if(reltn.value == "Father" || reltn.value == "Son" || reltn.value == "Brother" || reltn.value == "Husband"){
     alert("when Father");
     document.getElementById("insur_gurdian_genfemale").disabled = true;
     document.getElementById("insur_gurdian_genmale").checked = true;
}
else if(reltn.value == "Mother" || reltn.value == "Daughter" || reltn.value == "Sister" || reltn.value == "Wife"){

    document.getElementById("insur_gurdian_genmale").disabled = true;

    document.getElementById("insur_gurdian_genfemale").checked = true;
}
}

/////////////////////////////

function relation_gender_edit(rel){
    if(rel.value == "Father" || rel.value == "Son" || rel.value == "Brother" || rel.value == "Husband"){
     alert("when Father");
     document.getElementById("insur_nom_genfemale_ed").disabled = true;
     document.getElementById("insur_nom_genmale_ed").checked = true;
}
else if(rel.value == "Mother" || rel.value == "Daughter" || rel.value == "Sister" || rel.value == "Wife"){

    document.getElementById("insur_nom_genmale_ed").disabled = true;

    document.getElementById("insur_nom_genfemale_ed").checked = true;
}
}

/////////////////////////////

function relguardian_gender_edit(relatn){
    if(relatn.value == "Father" || relatn.value == "Son" || relatn.value == "Brother" || relatn.value == "Husband"){
     alert("when Father");
     document.getElementById("insur_gurdian_genfemale_ed").disabled = true;
     document.getElementById("insur_gurdian_genmale_ed").checked = true;
}
else if(relatn.value == "Mother" || relatn.value == "Daughter" || relatn.value == "Sister" || relatn.value == "Wife"){

    document.getElementById("insur_gurdian_genmale_ed").disabled = true;

    document.getElementById("insur_gurdian_genfemale_ed").checked = true;

}
}

/* ------------------------------------------------------------------------ Insurance DEtails END ---------------------------------------------------------------------------- */


function hideShowedit()
{
    // alert("gdj")
    if(document.getElementById("insu_nom_isminor_yes_ed").checked == true){
        // alert("vdnv")
        document.getElementById("cont_insur_nom_det_ed").style.display="block";
        document.getElementById("insur_nom_up_ed").style.display="none";
    }
    else if(document.getElementById("acc_nom_isminor_no_ed").checked == true){
        // alert("kjkk")
        document.getElementById("cont_insur_nom_det_ed").style.display="none";
        document.getElementById("insur_nom_up_ed").style.display="block";
    }
}

function hideShowadd()
{
    // alert("gdj")
    if(document.getElementById("insu_nom_isminor_yes").checked == true){
        // alert("vdnv")
        document.getElementById("cont_insur_nom_det").style.display="block";
        document.getElementById("insur_nom_up").style.display="none";
    }
    else if(document.getElementById("acc_nom_isminor_no").checked == true){
        // alert("kjkk")
        document.getElementById("cont_insur_nom_det").style.display="none";
        document.getElementById("insur_nom_up").style.display="block";

    }
}

function submitwithoutguardiandetailsAdd(){
    document.getElementById('insurance_form').submit();
}
function submitwithoutguardiandetailsEdit(){
    document.getElementById('insurance_edit_submit').submit();
}



/// Autopopulated the Bankcode and Branch code, changes done by Shivu(NODE)


function selectBankCode() {
    var branchcode = document.getElementById("society_branch_ser_bnkcd").selectedIndex;
    document.getElementById("society_branch_ser_brcode").selectedIndex = branchcode;
  }


  function selectBranchCode() {
    var bankcode = document.getElementById("society_branch_ser_brcode").selectedIndex;
    document.getElementById("society_branch_ser_bnkcd").selectedIndex = bankcode;
  }
  
  //// Shows the error message without enter the values to either of the fields, Changes done by Shivu(Node) ///

  function societyBranchValidate() {
    var bankCode = document.forms["sctyBranch"]["society_branch_ser_bnkcd"].value;
    var branchCode = document.forms["sctyBranch"]["society_branch_ser_brcode"].value;
    var branchName = document.forms["sctyBranch"]["society_branch_ser_brnme"].value;
    var branch_neft = document.forms["sctyBranch"]["society_branch_ser_ifsc_neft"].value;
    var branch_rtgs = document.forms["sctyBranch"]["society_branch_ser_ifsc_rtgs"].value;
    if (bankCode == "Select" && branchCode == "Select" && branchName =="" && branch_neft =="Select" && branch_rtgs == "Select") {
      swal("Oops","Please enter either of the field","error");
      return false;
    }
  }


  //search screen page both  date must be selected
  function searchselectdateboth(){
    var premium_date = document.getElementById("premium_date").value;
    var premium_date1 = document.getElementById("premium_date1").value;
    var pro_name = document.getElementById("pro_name").value;
    var acc_num = document.getElementById("acc_num").value;
   if( pro_name=="" && acc_num=="" &&  premium_date =="" && premium_date1 =="" ){
   swal("Oops!","Please enter either of the fields","error");
   return false;
   }

   else{

    if( premium_date !="" && premium_date1 =="")
   {
    document.getElementById("premium_date1").focus();
   swal("Oops!","Please select both fields of premium due dates","error");
    return false;
    }
}
    document.getElementById("insurancesearch").submit();

  }