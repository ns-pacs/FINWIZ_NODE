// Only Alphabets for required functions

// function alpha(alpbts)
// {
//    var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
//    if (charCode != 48 && charCode > 31
//          && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122)  && (charCode > 47 || charCode < 58) )
//       return false;
//    return true;
// }

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
// Only for Amount


// Only Numbers for required functions

function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57))
      return false;
   return true;
}

function desc(alpbts)
{
   var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
   if (charCode > 32 
         && (charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122)  && (charCode > 47 || charCode < 58) )
      return false;
   return true;
}


/////////////////////////////////////////////////////////////////////////////////////////

//// To set Bank Name in Associate Bank Tab

function setBankName() {
    var bankcd = document.getElementById("bank_cd").selectedIndex;
    document.getElementById("bnk_name").selectedIndex = bankcd;
  }

////////////////////////////////////////////////////////////////////////////////////////

//// To set Bank Code in Associate Bank Tab

function setBankCode() {
    var banknme = document.getElementById("bnk_name").selectedIndex;
    document.getElementById("bank_cd").selectedIndex = banknme;
  }


//// To set Bank Name in Associate Bank Tab in EDIT

function setBankEditName() {
    var bankcd = document.getElementById("bank_cd_ed").selectedIndex;
    document.getElementById("bnk_name_ed").selectedIndex = bankcd;
  }

//// To set Bank Code in Associate Bank Tab in Edit

function setBankEditCode() {
    var banknme = document.getElementById("bnk_name_ed").selectedIndex;
    document.getElementById("bank_cd_ed").selectedIndex = banknme;
  }
////////////////////////////////////////////////////////////////////////////////////////

//// To set Bank Name and Branch Code  in Associate Branch Tab

function bankCode(){
    var bnkcode = document.getElementById("record_bnk_cd").selectedIndex;
    document.getElementById("record_bnk_name").selectedIndex = bnkcode;
    document.getElementById("record_branch_code").selectedIndex = bnkcode;
}

/////////////////////////////////////////////////////////////////////////////////////////

//// To set Bank Code and Branch Code in Associate Branch Tab

function bankName(){
    var bnkName = document.getElementById("record_bnk_name").selectedIndex;
    document.getElementById("record_bnk_cd").selectedIndex = bnkName;
    document.getElementById("record_branch_code").selectedIndex = bnkName;
}

/////////////////////////////////////////////////////////////////////////////////////////

//// To set Bank Code and Bank Name in Associate Branch Tab

function branchCode(){
    var brnchcode = document.getElementById("record_branch_code").selectedIndex;
    document.getElementById("record_bnk_cd").selectedIndex = brnchcode;
    document.getElementById("record_bnk_name").selectedIndex = brnchcode;
}
//// To set Bank Name and Branch Code  in Associate Branch Tab in EDIT

function bankEditCode(){
    var bnkcode = document.getElementById("bank_cd_ed").selectedIndex;
    document.getElementById("bnk_name_ed").selectedIndex = bnkcode;
    document.getElementById("branch_cd_ed").selectedIndex = bnkcode;
}

/// To set Bank Code and Branch Code in Associate Branch Tab in EDIT

function bankEditName(){
    var bnkName = document.getElementById("bnk_name_ed").selectedIndex;
    document.getElementById("bank_cd_ed").selectedIndex = bnkName;
    document.getElementById("branch_cd_ed").selectedIndex = bnkName;
}

//// To set Bank Code and Bank Name in Associate Branch Tab in EDIT

function branchEditCode(){
    var brnchcode = document.getElementById("branch_cd_ed").selectedIndex;
    document.getElementById("bank_cd_ed").selectedIndex = brnchcode;
    document.getElementById("bnk_name_ed").selectedIndex = brnchcode;
}

/////////////////////////////////////////////////////////////////////////////////////////

// Clear Function

function clearAssociativeBankTab()
{
    document.getElementById('bank_cd').value="";
    document.getElementById('bnk_name').value="";
    $('input[name=is_dccb]').attr('checked',false);
    document.getElementById('add_line1').value="";
    document.getElementById('district').value="";
    document.getElementById('bnkstate').value="";
    document.getElementById('pincode').value="";
    document.getElementById('land_mark').value="";
    document.getElementById('ph_num1').value="";
    document.getElementById('ph_num2').value="";
    document.getElementById('email').value="";
    document.getElementById('url').value="";  
    document.getElementById('con_per1').value="";
    document.getElementById('con_per2').value="";
}

///////////////////////////////////////////////////////////////////////////////////




function bankDetails(){

    // Bank Code
    // alert(document.getElementById("bank_cd").value)
    var bank_cd1 = document.getElementById("bank_cd").value;
    // alert(bank_cd1)
                                        if(bank_cd1==""){
                                            // alert("fgdfds")
                                                        document.getElementById("bank_cd").focus();
                                                        
                                                        swal("Oops!","Please Enter Bank Code","error");
                                                        return false;
                                                    }
    
                                                    
    
    // Bank Name
    
    var bnk_name = document.getElementById("bnk_name").value;
                                        if(bnk_name == ""){
                                            document.getElementById("bnk_name").focus();
                                            
                                            swal("Oops!","Please Enter Bank Name","error");
                                            return false;
                                        }

// Is DCCB
    
var dccbyes = document.getElementById("dccbyes");
var dccbno = document.getElementById("dccbno");

                if (dccbyes.checked){
                                    console.log(" Yes");
                                    }
                else if (dccbno.checked)
                                    {
                                    console.log("No");
                                    }
                else{
                    document.getElementById("dccbyes").autofocus;
                    swal("Oops!","please select the Is_DCCB","error");
                    return false;
                    }


    
    // Address line
    
    var add_line1 = document.getElementById("add_line1").value;
                                        if(add_line1 == ""){
                                            document.getElementById("add_line1").focus();
                                            
                                            swal("Oops!","Please Enter Address line","error");
                                            return false;
                                        }
                                        
    
    // District
    
    var district = document.getElementById("district").value;
                                        if(district == ""){
                                            document.getElementById("district").focus();
                                            
                                            swal("Oops!","Please Enter District","error");
                                            return false;
                                        }
    
    // Bank State
    
    var bnkstate = document.getElementById("bnkstate").value;
                                        if(bnkstate == ""){
                                            document.getElementById("bnkstate").focus();
                                            
                                            swal("Oops!","Please Enter Bank State","error");
                                            return false;
                                        }
                                    
    
    // Pincode
    
    var pincode = document.getElementById("pincode").value;
                                        if(pincode == ""){
                                            document.getElementById("pincode").focus();
                                            
                                            swal("Oops!","Please Enter Pincode","error");
                                            return false;
                                        }
                                        else
                                        {
                                   
                                                if(pincode.length < 6){
                                                document.getElementById("pincode").focus();
                                                
                                                swal("Invalid","Please Enter valid Pin Code","warning");
                                                return false;
                                                    }
                                         }
    
    // Land Mark
    
    var land_mark = document.getElementById("land_mark").value;
                                        if(land_mark == ""){
                                            document.getElementById("land_mark").focus();
                                            
                                            swal("Oops!","Please Enter Land Mark","error");
                                            return false;
                                        }
    
    // Phone number
    
    var ph_num1 = document.getElementById("ph_num1").value;
                                        if(ph_num1 == ""){
                                            document.getElementById("ph_num1").focus();
                                            
                                            swal("Oops!","Please Enter Phone number","error");
                                            return false;
                                        }
                                        else
                                            {

                                    if(ph_num1.length < 10){
                                            document.getElementById("ph_num1").focus();
                                            
                                            swal("Invalid","Please Enter valid Phone Number","warning");
                                            return false;
                                        }
                                }

    
    
    // Alternate Phone number
    
    var ph_num2 = document.getElementById("ph_num2").value;
                                        if(ph_num2 == ""){
                                            document.getElementById("ph_num2").focus();
                                            
                                            swal("Oops!","Please Enter Alternate Phone number","error");
                                            return false;
                                        }
                                        else
                                            {

                                    if(ph_num2.length < 10){
                                            document.getElementById("ph_num2").focus();
                                            
                                            swal("Invalid","Please Enter valid Phone Number","warning");
                                            return false;
                                        }
                                }
    
    // Email
    
    var email = document.getElementById("email").value;
    if(email!="")
        {
    var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (!mail_id.test(email))
                    {
                            document.getElementById("email").focus();
                            
                            swal("Oops!","Please Enter a Valid E-mail ID","warning");
                            return false;
                     }
        }


    
    
    // URL
    
    var url = document.getElementById("url").value;
    if(url!="")
        {
        var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                    if (!re.test(url)) 
                    { 
                        document.getElementById("url").focus();
                        
                        swal("Oops!","Please Enter a Valid URL","warning");
                        return false;
                 }
    }
                                        
    
    // Contact Person
    
    var con_per1 = document.getElementById("con_per1").value;
                                        if(con_per1 == ""){
                                            document.getElementById("con_per1").focus();
                                            
                                            swal("Oops!","Please Enter Contact Person","error");
                                            return false;
                                        }
                                        else
                                        {

                                            if(con_per1.length < 10){
                                            document.getElementById("con_per1").focus();
                                            
                                            swal("Invalid","Please Enter valid Contact Person 1","warning");
                                                return false;
                                                }
                                        }
    
    
    // Alternate Contact Person
    
    var con_per2 = document.getElementById("con_per2").value;
                                        if(con_per2 == ""){
                                            document.getElementById("con_per2").focus();
                                            
                                            swal("Oops!","Please Enter Alternate Contact Person","error");
                                            return false;
                                        }
                                          else
                                        {

                                            if(con_per2.length < 10){
                                            document.getElementById("con_per2").focus();
                                            
                                            swal("Invalid","Please Enter valid Contact Person 2","warning");
                                                return false;
                                                }
                                        }


                                        document.getElementById('bankdetailsform').submit();
                                    }


////////////////////////////////////////////////////////////////////////////////

// Associate branch details

function clearBranchTab()

{ 
 document.getElementById('record_bnk_cd').value="";
 document.getElementById('record_bnk_name').value="";
 document.getElementById('record_branch_code').value="";
 document.getElementById('record_branch_name').value="";
 document.getElementById('ifsc_cd').value="";
 document.getElementById('ifsc_rtgs').value="";
 document.getElementById('micr_code').value="";
 document.getElementById('add_line1').value="";
 document.getElementById('district').value="";
 document.getElementById('state').value="";
 document.getElementById('pincode').value="";
 document.getElementById('land_mark').value="";
 document.getElementById('ph_num1').value="";
 document.getElementById('ph_num2').value="";
 document.getElementById('email').value="";
 document.getElementById('url').value="";
 document.getElementById('con_per1').value="";
 document.getElementById('con_per2').value="";

}

//  Functions for Associate Branch Details


function branchdetails(){

//Bank Code

var record_bnk_cd = document.getElementById("record_bnk_cd").value;
if(record_bnk_cd == ""){
document.getElementById("record_bnk_cd").focus();

swal("Oops!","Please Enter Bank Code","error");
return false;
}


// Bank Name

var record_bnk_name = document.getElementById("record_bnk_name").value;
if(record_bnk_name == ""){
document.getElementById("record_bnk_name").focus();

swal("Oops!","Please Enter Bank Name","error");
return false;
}


// Branch Code

var record_branch_code = document.getElementById("record_branch_code").value;
if(record_branch_code == ""){
document.getElementById("record_branch_code").focus();

swal("Oops!","Please Enter Branch Code","error");
return false;
}



//Branch Name

var record_branch_name = document.getElementById("record_branch_name").value;
if(record_branch_name == ""){
document.getElementById("record_branch_name").focus();

swal("Oops!","Please Enter Branch Name","error");
return false;
}



// IFSC Code NEFT


var ifsc_cd = document.getElementById("ifsc_cd").value;
if(ifsc_cd == ""){
document.getElementById("ifsc_cd").focus();

swal("Oops!","Please Enter IFSC CODE NEFT","error");
return false;
}

else{

if (ifsc_cd.length <11)
{
document.getElementById("ifsc_cd").focus();

swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}

var ifsccd = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifsccd.test(ifsc_cd))
{
document.getElementById("ifsc_cd").focus();

swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}


}

// IFSC Code RTGS


var ifsc_rtgs = document.getElementById("ifsc_rtgs").value;
if(ifsc_rtgs == ""){
document.getElementById("ifsc_rtgs").focus();

swal("Oops!","Please Enter IFSC CODE RTGS","error");
return false;
}

else{

if (ifsc_rtgs.length <11)
{
document.getElementById("ifsc_rtgs").focus();

swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}

var ifscrtgs = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifscrtgs.test(ifsc_rtgs))
{
document.getElementById("ifsc_rtgs").focus();

swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}


}


// MICR Code

var micr_code = document.getElementById("micr_code").value;
if(micr_code == ""){
document.getElementById("micr_code").focus();

swal("Oops!","Please Enter MICR Code","error");
return false;
}
else
{

if(micr_code.length < 9){
document.getElementById("micr_code").focus();

swal("Invalid","Please Enter valid MICR Code","warning");
return false;
}
}

// Address Line


var add_line1 = document.getElementById("add_line1").value;
if(add_line1 == ""){
document.getElementById("add_line1").focus();

swal("Oops!","Please Enter Address Line","error");
return false;
}


//District

var district = document.getElementById("district").value;
if(district == ""){
document.getElementById("district").focus();

swal("Oops!","Please Enter district","error");
return false;
}

// State

var state = document.getElementById("state").value;
if(state == ""){
document.getElementById("state").focus();

swal("Oops!","Please Enter State","error");
return false;
}    


//pincode

var pincode = document.getElementById("pincode").value;
if(pincode == ""){
document.getElementById("pincode").focus();

swal("Oops!","Please Enter pincode","error");
return false;
}
else
{

if(pincode.length < 6){
document.getElementById("pincode").focus();

swal("Invalid","Please Enter valid Pin Code","warning");
return false;
}
}    

// Landmark

var land_mark = document.getElementById("land_mark").value;
if(land_mark = ""){
document.getElementById("land_mark").focus();

swal("Oops!","Please Enter landmark","error");
return false;
}



// Phone Number 1

var ph_num1 = document.getElementById("ph_num1").value;
if(ph_num1 == ""){
document.getElementById("ph_num1").focus();

swal("Oops!","Please Enter Phone Number","error");
return false;
}
else
{

if(ph_num1.length < 10){
document.getElementById("ph_num1").focus();

swal("Invalid","Please Enter valid Phone Number","warning");
return false;
                 }
}


// Phone Number 2

var ph_num2 = document.getElementById("ph_num2").value;
if(ph_num2 == ""){
document.getElementById("ph_num2").focus();

swal("Oops!","Please Enter Phone Number","error");
return false;
}
else
{

if(ph_num2.length < 10){
document.getElementById("ph_num2").focus();

swal("Invalid","Please Enter valid  Second Phone Number","warning");
return false;
                 }
}


// E-Mail ID

var email = document.getElementById("email").value;
if(email != ""){
var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (mail_id.test(email)==false)
{

 document.getElementById("email").focus();
 
 swal("Oops!","Please Enter a Valid E-mail ID","warning");
 return false;
}
}


// URL

var url = document.getElementById("url").value;
if(url!="")
{
var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
if (!re.test(url)) 
{ 
 document.getElementById("url").focus();
 
 swal("Oops!","Please Enter a Valid URL","warning");
 return false;
}
}


//Contact Person 1

var con_per1 = document.getElementById("con_per1").value;
if(con_per1 == ""){
document.getElementById("con_per1").focus();

swal("Oops!","Please Enter Contact person 1","error");
return false;
}
else
{

if(con_per1.length < 10){
document.getElementById("con_per1").focus();

swal("Invalid","Please Enter valid  Contact person 1","warning");
return false;
                 }
}

//Contact Person 2

var con_per2 = document.getElementById("con_per2").value;
if(con_per2 == ""){
document.getElementById("con_per2").focus();

swal("Oops!","Please Enter Contact Person 2","error");
return false;
}
else
{

if(con_per2.length < 10){
document.getElementById("con_per2").focus();

swal("Invalid","Please Enter valid  Second Contact Person 2","warning");
return false;
                 }
}


document.getElementById('bankform').submit();
}   

  /*Account BANK  Details- START*/                                           
//////edit row data//////////
 function edit_bank_row(oObject)
    {
    // alert(oObject)
    var id = oObject.id;
//    alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("rf"+id).value;
// alert("rb1"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfed']:checked").val();
// alert(idchecked);
  
  
var bankid=document.getElementById('bank_id'+idchecked).value;
// alert("BANK ID -----------------------"+bankid)


document.getElementById("tempbankid").value=bankid;
document.getElementById("edit_data_load_form").submit();


    }

    function view_bank_row(oObject)
    {
    // alert(oObject)
    var id = oObject.id;
  // alert("This object's ID attribute is set to \"" + id + "\"."); 
var rb1=document.getElementById("vf"+id).value;
//alert("rb1"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
 //alert(idchecked);
  
  
var bankid=document.getElementById('radiobutton1rfvw'+idchecked).value;
// alert("BANK ID -----------------------"+bankid)



document.getElementById("tempbankvid").value=bankid;
document.getElementById("view_data_load_form").submit();


    }


    function  delete_bank_row(oObject)
    {
         // alert(oObject)
       var id = oObject.id;
       // alert("This object's ID attribute is set to \"" + id + "\"."); 
     var rb1=document.getElementById("df"+id).value;
    // alert("rb1"+rb1)
     document.getElementById("radiobutton1rfdel"+rb1).checked=true;
         var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
     // alert(idchecked);
       
       
     var del_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
     // alert("BANK ID -----------------------"+del_id)
     
     
     
     document.getElementById("tempbankdelid1").value=del_id;

    }
//////////////////delete bank row onclick of confirm button///////////////
function delete_bank_row_onconfirm()
{
    document.getElementById("delete_bank_data_load_form").submit();

}
    
function resetform_bankdetails(){
    document.getElementById('Is_dccb').value='';
    document.getElementById('bank_name').value='';
     document.getElementById('search_bank_code').value='';
    
}

function bank_edit_clear()
{
    document.getElementById('bank_cd_ed').value="";
    document.getElementById('bnk_name_ed').value="";
    document.getElementById('add_line1_ed').value="";
    document.getElementById('district_ed').value="";
    document.getElementById('bnkstate_ed').value="";
    document.getElementById('pincode_ed').value="";
    document.getElementById('land_mark_ed').value="";
    document.getElementById('ph_num1_ed').value="";
    document.getElementById('ph_num2_ed').value="";
    $('input[name=is_dccb_ed]').attr('checked',false);
    document.getElementById('email_ed').value="";
    document.getElementById('url_ed').value="";
    document.getElementById('con_per1_ed').value="";
    document.getElementById('con_per2_ed').value="";
}
  /*Account BANK Details- END*/

  
  /*Account Branch Details- START*/
function clearBranchEdit()

{ 
 document.getElementById('bank_cd_ed').value="";
 document.getElementById('bnk_name_ed').value="";
 document.getElementById('branch_cd_ed').value="";
 document.getElementById('branch_name_ed').value="";
 document.getElementById('ifsc_cd_ed').value="";
 document.getElementById('ifsc_rtgs_ed').value="";
 document.getElementById('micr_code_ed').value="";
 document.getElementById('add_line1_ed').value="";
 document.getElementById('district_ed').value="";
 document.getElementById('state_ed').value="";
 document.getElementById('pincode_ed').value="";
 document.getElementById('land_mark_ed').value="";
 document.getElementById('ph_num1_ed').value="";
 document.getElementById('ph_num2_ed').value="";
 document.getElementById('email_ed').value="";
 document.getElementById('br_url').value="";
 document.getElementById('con_per1_ed').value="";
 document.getElementById('con_per2_ed').value="";

}

  function resetBranchform()
{
    document.getElementById('search_brbank_code').value="";
    document.getElementById('search_brbank_name').value="";
    document.getElementById('search_branch_code').value="";
    document.getElementById('search_branch_name').value="";
    document.getElementById('search_ifsc_cd').value="";
    document.getElementById('search_ifsc_rtgs').value="";
    document.getElementById('search_micr_cd').value="";

  
}

   function  edit_branch_row(oObject)
   {
    var id = oObject.id;
     // alert("This object's ID attribute is set to \"" + id + "\"."); 
    var rb1=document.getElementById("rf"+id).value;
    //alert("rb1"+rb1)
    document.getElementById("radiobutton1bred"+rb1).checked=true;
        var idchecked=$("input[name='radiobutton1bred']:checked").val();
    //alert(idchecked);
      
      
    var branchid=document.getElementById('radiobutton1bred'+idchecked).value;
  // alert("BANK ID -----------------------"+branchid)
    
    
    document.getElementById("tempbranchid").value=branchid;
    document.getElementById("edit_br_data_load_form").submit();
    
   }


 function  view_branch_row(oObject)
 {
      // alert(oObject)
    var id = oObject.id;
    // alert("This object's ID attribute is set to \"" + id + "\"."); 
  var rb1=document.getElementById("vf"+id).value;
  //alert("rb1"+rb1)
  document.getElementById("radiobutton1rfvw"+rb1).checked=true;
      var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
   //alert(idchecked);
    
    
  var branchid=document.getElementById('radiobutton1rfvw'+idchecked).value;
  // alert("BANK ID -----------------------"+branchid)
  
  
  
  document.getElementById("tempbankbrid").value=branchid;
  document.getElementById("view_br_data_load_form").submit();
  
 }

 function  delete_branch_row(oObject)
 {
      // alert(oObject)
    var id = oObject.id;
     //alert("This object's ID attribute is set to \"" + id + "\"."); 
  var rb1=document.getElementById("df"+id).value;
  //alert("rb1"+rb1)
  document.getElementById("radiobutton1rfdel"+rb1).checked=true;
      var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
   //alert(idchecked);
    
    
  var del_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
  // alert("BANK ID -----------------------"+del_id)
  
  
  
  document.getElementById("tempbankdelid").value=del_id;
 // document.getElementById("delete_br_data_load_form").submit();
  
 }

 function delete_branch_details_onconfirm(){

    document.getElementById("delete_br_data_load_form").submit();
  
 }

  /*Account Branch Details- END*/

  /*Account Master Details- START*/
function mastertaccvalidation ()
{
    var bancode = document.getElementById("master_code").value;
    if(bancode == ""){
    document.getElementById("master_code").focus();

    swal("Oops!","Please Enter Bank Code!","error");
    return false;
    }

    var baname = document.getElementById("master_name").value;
    if(baname == ""){
    document.getElementById("master_name").focus();

    swal("Oops!","Please Enter Bank Name!","error");
    return false;
    }

    var brcode = document.getElementById("master_brcode").value;
    if(brcode == ""){
    document.getElementById("master_brcode").focus();

    swal("Oops!","Please Enter Branch Code!","error");
    return false;
    }
    var brname = document.getElementById("master_br_name").value;
    if(brcode == ""){
    document.getElementById("master_br_name").focus();

    swal("Oops!","Please Enter Branch Name!","error");
    return false;
    }
    var accno = document.getElementById("accmaster_no").value;
    if(accno == ""){
    document.getElementById("accmaster_no").focus();

    swal("Oops!","Please Enter Account no.!","error");
    return false;
    }
    var masteracctype = document.getElementById("masteracc_type").value;
    if(masteracctype == ""){
    document.getElementById("masteracc_type").focus();

    swal("Oops!","Please Enter Master account type!","error");
    return false;
    }

    var masteraccstatus = document.getElementById("masteracc_status").value;
    if(masteraccstatus == ""){
    document.getElementById("masteracc_status").focus();

    swal("Oops!","Please Enter Master account staus!","error");
    return false;
    }
    var masteraccdescription = document.getElementById("master_description").value;
    if(masteraccdescription == ""){
    document.getElementById("master_description").focus();

    swal("Oops!","Please Enter  Description!","error");
    return false;
    }
document.getElementById('acc_master_submit').submit();
}
 function edit_row_masteracc(oObject)
 {
 // alert(oObject)
 var id = oObject.id;
 // alert("This object's ID attribute is set to \"" + id + "\"."); 
 //  alert(id.substring(0, str.indexOf("ed")));
  var rb1=document.getElementById("rf"+id).value;
  //alert("radio button value"+rb1)
 document.getElementById("radiobutton1rfed"+rb1).checked=true;
 var idchecked=$("input[name='radiobutton1rfed']:checked").val();
  //alert(idchecked);
 
 
 var member_id=document.getElementById('radiobutton1rfed'+idchecked).value;
 //alert("BANK ID -----------------------"+member_id);
 
 document.getElementById("tempmasterid").value=member_id;
 document.getElementById("acc_master_edit_window").submit();
 }
/////////////////////////////////////////////////////////////////////////////////////////
// To set Bank Name in Associate Bank account master Tab

function autoSetBankName() {
    var bankmastercd = document.getElementById("master_code").selectedIndex;
    document.getElementById("master_name").selectedIndex = bankmastercd;
  }
//// To set Bank code in Associate Bank account master Tab

function autoSetBankCode() {
    var bankmastername = document.getElementById("master_name").selectedIndex;
    document.getElementById("master_code").selectedIndex = bankmastername;
  }
  
//   function autoSetBranchCode(){
//     var bnkcode = document.getElementById("master_brcode").selectedIndex;
//     document.getElementById("master_code").selectedIndex = bnkcode;
//     document.getElementById("master_name").selectedIndex = bnkcode;
// }



 function view_row_masteracc(oObject)
 {
    // alert(oObject)
    var id = oObject.id;
     //alert("This object's ID attribute is set to \"" + id + "\"."); 
    //  alert(id.substring(0, str.indexOf("ed")));
     var rb1=document.getElementById("vf"+id).value;
     //alert("radio button value"+rb1)
    document.getElementById("radiobutton1rfvw"+rb1).checked=true;
    var idchecked=$("input[name='radiobutton1rfvw']:checked").val();
     //alert(idchecked);
    
    
    var member_id=document.getElementById('radiobutton1rfvw'+idchecked).value;
    //alert("BANK ID -----------------------"+member_id);
    
    document.getElementById("tempmasterid1").value=member_id;
    document.getElementById("acc_master_view_window").submit();
    }


    

    function delete_row_masteracc(oObject)
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
    
    document.getElementById("tempmasterdelete").value=member_id;
   // document.getElementById("acc_master_delete_window").submit();
}

function delete_actmaster_onconfirm(){

    document.getElementById("acc_master_delete_window").submit();
}
function master_edit_clear()
{
    document.getElementById('master_code_ed').value="";
    document.getElementById('master_name_ed').value="";
    document.getElementById('master_brcode_ed').value="";
    document.getElementById('master_br_name_ed').value="";
    document.getElementById('accmaster_no_ed').value="";
    document.getElementById('ass_bankacc_code_ed').value="";
    document.getElementById('masteracc_type_ed').value="";
    document.getElementById('masteracc_status_ed').value="";
    document.getElementById('master_description_ed').value="";
   
}
  /*Account Master Details- END*/

  /*Associated Bank Account Type- START*/

    function acc_type_edit_clear()
{
    document.getElementById('ass_bnk_type_code_ed').value="";
    document.getElementById('bnk_acc_type_ed').value="";
    document.getElementById('ban_acc_typ_desc_ed').value="";
    
   
}

     function associated_bank_acctype()
     {
        var ass_bnk_type_code_ad = document.getElementById("ass_bnk_type_code_ad").value;
        if(ass_bnk_type_code_ad == ""){
        document.getElementById("ass_bnk_type_code_ad").focus();
        swal("Oops!","Please Enter Account Code","error");
        return false;
        }
    
        // Account Status

        var bnk_acc_type_ad = document.getElementById("bnk_acc_type_ad").value;
        if(bnk_acc_type_ad == ""){
        document.getElementById("bnk_acc_type_ad").focus();
        swal("Oops!","Please Enter Bank Account Type","error");
        return false;
        }
        document.getElementById('bnkacctype').submit();
    
     }


     // Associated Bank Account Edit

     function associated_bank_edit(edt)
 {
  //alert(edt)
 var edtid = edt.id;
  //alert("This object's ID attribute is set to \"" + edtid + "\"."); 
  var ed1=document.getElementById("asso_bnk_acc"+edtid).value;
  //alert("radio button value"+ed1)
 document.getElementById("radio_acctyp_edit"+ed1).checked=true;
 var edtidchecked=$("input[name='radio_acctyp_edit']:checked").val();
  //alert(edtidchecked);
 
 
 var acc_type_id=document.getElementById('radio_acctyp_edit'+edtidchecked).value;
 //alert("BANK ID -----------------------"+acc_type_id);
 
 document.getElementById("edit_acc_typ").value=acc_type_id;
 document.getElementById("acctype_edit").submit();
 }


 // Associated Bank Account View

 function associated_bank_view(vew)
 {
  //alert(vew)
 var vewid = vew.id;
  //alert("This object's ID attribute is set to \"" + edtid + "\"."); 
  var vw1=document.getElementById("asso_acc_typ"+vewid).value;
  //alert("radio button value"+vw1)
 document.getElementById("radio_acctyp_view"+vw1).checked=true;
 var vewidchecked=$("input[name='radio_acctyp_view']:checked").val();
  //alert(vewidchecked);
 
 
 var acc_type=document.getElementById('radio_acctyp_view'+vewidchecked).value;
 //alert("BANK ID -----------------------"+acc_type);
 
 document.getElementById("view_acc_typ").value=acc_type;
 document.getElementById("acctype_view").submit();
 }

 // Associated Bank Account Delete

 function associated_bank_delete(dlt)
 {
  //alert(dlt)
 var dltid = dlt.id;
  //alert("This object's ID attribute is set to \"" + edtid + "\"."); 
  var dlt1=document.getElementById("asso_acc_desc"+dltid).value;
  //alert("radio button value"+vw1)
 document.getElementById("radio_acctyp_delete"+dlt1).checked=true;
 var dltidchecked=$("input[name='radio_acctyp_delete']:checked").val();
  //alert(dltidchecked);
 
 
 var acc_type_dlt=document.getElementById('radio_acctyp_delete'+dltidchecked).value;
 //alert("BANK ID -----------------------"+acc_type_dlt);
 
 document.getElementById("delete_acc_typ").value=acc_type_dlt;
 //document.getElementById("acctype_delete").submit();
}

function confirm_associate_bank_typ(){
    document.getElementById("acctype_delete").submit();
}

function clearAssociatedBankAccTyp()
{
document.getElementById('assobnk_acc_cd').value="";
document.getElementById('assobnk_acc_typ').value="";

}
  /*Associated Bank Account Type- END*/



 /*Associated Cheque BOOK Details- START*/
    function chequebooks(){

    var chqbookbrmaster = document.getElementById("ass_chqbok_brmaster").value;
    if(chqbookbrmaster == ""){
    document.getElementById("ass_chqbok_brmaster").focus();
    
    swal("Oops!","Please Enter Associated Branch Master","error");
    return false;
    }
    
    
    // associate Bank Number
    
    var assbanknum = document.getElementById("ass_bnk_num").value;
    if(assbanknum == ""){
    document.getElementById("ass_bnk_num").focus();
    
    swal("Oops!","Please Enter associate Bank Number","error");
    return false;
    }
    
    
    // category_master Code
    
    var category_master = document.getElementById("category_master").value;
    if(category_master == ""){
    document.getElementById("category_master").focus();
    
    swal("Oops!","Please Enter Category Master","error");
    return false;
    }
    
    
    
    //chequebook number
    
    var chequebooknumber = document.getElementById("chq_bok_num").value;
    if(chequebooknumber == ""){
    document.getElementById("chq_bok_num").focus();
    
    swal("Oops!","Please Enter Chequebook Number","error");
    return false;
    }
    
    
    
    // series
    
    
    var series = document.getElementById("series").value;
    if(series == ""){
    document.getElementById("series").focus();
    
    swal("Oops!","Please Enter Chequebook Series","error");
    return false;
    }
    
    //no of cheque leaves
    var chequeleaves = document.getElementById("num_chq_leaves").value;
    if(chequeleaves == ""){
    document.getElementById("num_chq_leaves").focus();
    swal("Oops!","Please Enter Number of Cheque Leaves","error");
    return false;
    }
    else {
        alert(chequeleaves)
    if(chequeleaves < '10' || chequeleaves > '100'){
            alert(chequeleaves)
            document.getElementById("num_chq_leaves").focus();
            swal("Invalid!","Please Enter Cheque Leaves above 10 and 100","error");
            return false;
    }
}
   
    // start number
    var startnumber = document.getElementById("start_num").value;
    if(startnumber == ""){
    document.getElementById("start_num").focus();
    
    swal("Oops!","Please Enter Starting number of Cheque Leaves","error");
    return false;
    }

    //end number
    var endnumber = document.getElementById("end_num").value;
    if(endnumber == ""){
    document.getElementById("end_num").focus();
    
    swal("Oops!","Please Enter End Number of Cheque Leaves","error");
    return false;
    }

    //cheque book status
    var chqstatus = document.getElementById("chq_book_status").value;
    if(chqstatus == ""){
    document.getElementById("chq_book_status").focus();
    
    swal("Oops!","Please select Cheque book Status","error");
    return false;
    }
    
document.getElementById('chequebook_details').submit();
 }
      
 

 
function cheque_edit_row(oObject)
{
// alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("rf"+id).value;
// alert("radio button value"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);


var cheque_id=document.getElementById('radiobutton1rfed'+idchecked).value;
//alert("cheque ID -----------------------"+cheque_id);

document.getElementById("tempchequeid").value=cheque_id;
document.getElementById("edit_data_load_form").submit();
}


/////////////////////////////////////////////////////////////////


function cheque_view_row(oObject)
{
// alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("vf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;

var idchecked1=$("input[name='radiobutton1rfvw']:checked").val();
 //alert("idchecked"+idchecked1);


var cheq_id=document.getElementById('vfvw'+idchecked1).value;
//alert("cheque ID -----------------------"+cheq_id);

document.getElementById("tempviewchequeid").value=cheq_id;
document.getElementById("view_data_load_form").submit();
}


/////////////////////////////////////////////////////////////////


function cheque_delete_row(oObject)
{
// alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("df"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfdl"+rb1).checked=true;

var idchecked2=$("input[name='radiobutton1rfdl']:checked").val();
 //alert("idchecked"+idchecked2);


var cheq_del_id=document.getElementById('dfdl'+idchecked2).value;
//alert("cheque ID -----------------------"+cheq_del_id);

document.getElementById("tempchequedeleteid").value=cheq_del_id;
//document.getElementById("delete_data_load_form").submit();
}

function delete_cheque_onconfirm()
{
document.getElementById("delete_data_load_form").submit();
}


function cheque_resetform()
{ 
 document.getElementById('chq_bnk_mstr').value="";
 document.getElementById('chq_bnk_acc_num').value="";
 document.getElementById('chq_bnk_ctgry_mstr').value="";
 document.getElementById('chq_bk_num').value="";
}

function cheque_add_clear()
{
    document.getElementById('ass_chqbok_brmaster').value="";
    document.getElementById('ass_bnk_num').value="";
    document.getElementById('category_master').value="";
    document.getElementById('chq_bok_num').value="";
    document.getElementById('series').value="";
    document.getElementById('num_chq_leaves').value="";
    document.getElementById('start_num').value="";
    document.getElementById('end_num').value="";
    document.getElementById('chq_book_status').value="";
}

function cheque_edit_clear()
{
    document.getElementById('ass_chqbok_brmaster_ed').value="";
    document.getElementById('ass_bnk_num_ed').value="";
    document.getElementById('category_master_ed').value="";
    document.getElementById('chq_bok_num_ed').value="";
    document.getElementById('series_ed').value="";
    document.getElementById('num_chq_leaves_ed').value="";
    document.getElementById('start_num_ed').value="";
    document.getElementById('end_num_ed').value="";
    document.getElementById('chq_book_status_ed').value="";
}


 /*Associated Cheque BOOK Details- END*/

 /*Associated Deposit Master Details- Start*/



 function resetDepositform()
 {
    document.getElementById('gl_cd').value="";
    document.getElementById('ac_deposit_num').value="";
    document.getElementById('bnk_dep_num').value="";
 }




 function  edit_deposit_row(oObject)
   {
    var id = oObject.id;
     // alert("This object's ID attribute is set to \"" + id + "\"."); 
    var rb1=document.getElementById("brf"+id).value;
//alert("rb1"+rb1)
    document.getElementById("radiobutton1bred"+rb1).checked=true;
        var idchecked=$("input[name='radiobutton1bred']:checked").val();
    //alert(idchecked);
      
      
    var depositid=document.getElementById('radiobutton1bred'+idchecked).value;
   // alert("BANK ID -----------------------"+depositid)
    
    
    document.getElementById("tempdepositeid").value=depositid;
    document.getElementById("edit_deposit_data_load_form").submit();
    
   }



   function  view_deposit_row(oObject)
   {
        // alert(oObject)
      var id = oObject.id;
      // alert("This object's ID attribute is set to \"" + id + "\"."); 
    var rb1=document.getElementById("vf"+id).value;
    //alert("rb1"+rb1)
    document.getElementById("radiobutton1rfvw"+rb1).checked=true;
        var idchecked=$("input[name='radiobutton1rfvw']:checked").val();                                
     //alert(idchecked);
      
      
    var depid=document.getElementById('radiobutton1rfvw'+idchecked).value;
     //alert("BANK ID -----------------------"+depid)
    
    
    
    document.getElementById("tempdepvid").value=depid;
    document.getElementById("view_dep_data_load_form").submit();
    
   }


   function  delete_deposit_row(oObject)
   {
        // alert(oObject)
      var id = oObject.id;
      // alert("This object's ID attribute is set to \"" + id + "\"."); 
    var rb1=document.getElementById("df"+id).value;
    //alert("rb1"+rb1)
    document.getElementById("radiobutton1rfdel"+rb1).checked=true;
        var idchecked=$("input[name='radiobutton1rfdel']:checked").val();                                
    // alert(idchecked);
      
      
    var del_id=document.getElementById('radiobutton1rfdel'+idchecked).value;
     //alert("BANK ID -----------------------"+del_id)
    
    
    
    document.getElementById("tempdepdelid").value=del_id;
    //document.getElementById("delete_depdel_data_load_form").submit();
    
   }
   function delete_bankdeposit_onconfirm()
   {
   document.getElementById("delete_depdel_data_load_form").submit();
   }

    function associated_deposit_master()
   {

  // Associated Bank Deposit Master

      var Short_name = document.getElementById("Short_name").value;
      if(Short_name == ""){
      document.getElementById("Short_name").focus();
      swal("Oops!","Please Enter Short Name","error");
      return false;
      }
  
      // Return Date

      var master_deposit_name = document.getElementById("master_deposit_name").value;
      if(master_deposit_name == ""){
      document.getElementById("master_deposit_name").focus();
      swal("Oops!","Please Enter Name","error");
      return false;
      }

      // Recived Amount

      var deposit_gl_name = document.getElementById("deposit_gl_name").value;
      if(deposit_gl_name == ""){
      document.getElementById("deposit_gl_name").focus();
      swal("Oops!","Please Enter GL Code","error");
      return false;
      }
  
      // TDS Amount

      var deposit_accnum = document.getElementById("deposit_accnum").value;
      if(deposit_accnum == ""){
      document.getElementById("deposit_accnum").focus();
      swal("Oops!","Please Enter Account Number","error");
      return false;
      }

      // Total Amount

      var add_bnkdep_typ = document.getElementById("add_bnkdep_typ").value;
      if(add_bnkdep_typ == ""){
      document.getElementById("add_bnkdep_typ").focus();
      swal("Oops!","Please Enter Bank Deposit Type","error");
      return false;
      }

      var add_bnk_depnum = document.getElementById("add_bnk_depnum").value;
      if(add_bnk_depnum == ""){
      document.getElementById("add_bnk_depnum").focus();
      swal("Oops!","Please Enter Bank Deposit Number ","error");
      return false;
      }

      var deposit_opening_bal = document.getElementById("deposit_opening_bal").value;
      if(deposit_opening_bal == ""){
      document.getElementById("deposit_opening_bal").focus();
      swal("Oops!","Please Enter Opening Balance","error");
      return false;
      }

      var deposit_closing_bal = document.getElementById("deposit_closing_bal").value;
      if(deposit_closing_bal == ""){
      document.getElementById("deposit_closing_bal").focus();
      swal("Oops!","Please Enter Closing Balance","error");
      return false;
      }

      var deposit_opening_date = document.getElementById("deposit_opening_date").value;
      if(deposit_opening_date == ""){
      document.getElementById("deposit_opening_date").focus();
      swal("Oops!","Please Enter Opening Date","error");
      return false;
      }

      var deposit_favor = document.getElementById("deposit_favor").value;
      if(deposit_favor == ""){
      document.getElementById("deposit_favor").focus();
      swal("Oops!","Please Enter Favouring","error");
      return false;
      }
      var deposit_interest_rate = document.getElementById("deposit_interest_rate").value;
      if(deposit_interest_rate == ""){
      document.getElementById("deposit_interest_rate").focus();
      swal("Oops!","Please Enter Interest Rate","error");
      return false;
      }
      var deposit_maturity_date = document.getElementById("deposit_maturity_date").value;
      if(deposit_maturity_date == ""){
      document.getElementById("deposit_maturity_date").focus();
      swal("Oops!","Please Enter Maturity Date","error");
      return false;
      }


      var deposit_interest_date = document.getElementById("deposit_interest_date").value;
      if(deposit_interest_date == ""){
      document.getElementById("deposit_interest_date").focus();
      swal("Oops!","Please Enter Interest Date","error");
      return false;
      }

      var account_dep_type = document.getElementById("account_dep_type").value;
      if(account_dep_type == ""){
      document.getElementById("account_dep_type").focus();
      swal("Oops!","Please Enter Account Type","error");
      return false;
      }

      var account_dep_master = document.getElementById("account_dep_master").value;
      if(account_dep_master == ""){
      document.getElementById("account_dep_master").focus();
      swal("Oops!","Please Enter Associate Branch Master","error");
      return false;
      }

      document.getElementById('depositdetailsform').submit();
  
   }

   function deposit_master_edit_clear()
{
    document.getElementById('Short_name_ed').value="";
    document.getElementById('master_deposit_name_ed').value="";
    document.getElementById('deposit_gl_name_ed').value="";
    document.getElementById('deposit_accnum_ed').value="";
    document.getElementById('add_bnkdep_typ_ed').value="";
    document.getElementById('add_bnk_depnum_ed').value="";
    document.getElementById('deposit_opening_bal_ed').value="";
    document.getElementById('deposit_closing_bal_ed').value="";
    document.getElementById('deposit_opening_date_ed').value="";
    document.getElementById('deposit_favor_ed').value="";
    document.getElementById('deposit_interest_rate_ed').value="";
    document.getElementById('deposit_maturity_date_ed').value="";
    document.getElementById('deposit_interest_date_ed').value="";
    document.getElementById('acc_type_ed').value="";
    document.getElementById('acc_br_master_ed').value="";
    document.getElementById('exampleFormControlTextarea2').value="";

}
    /*Associated Deposit Master Details- End*/


/* Associated Bank Deposit Returns- START*/


     function associated_bank_deposit()
     {
        

    // Associated Bank Deposit Master

        var asso_depo_mstr_ad = document.getElementById("asso_depo_mstr_ad").value;
        if(asso_depo_mstr_ad == ""){
        document.getElementById("asso_depo_mstr_ad").focus();
        swal("Oops!","Please Enter Bank Deposit Master","error");
        return false;
        }
    
        // Return Date

        var asso_depo_date_ad = document.getElementById("asso_depo_date_ad").value;
        if(asso_depo_date_ad == ""){
        document.getElementById("asso_depo_date_ad").focus();
        swal("Oops!","Please Enter Return Date","error");
        return false;
        }

        // TDS Amount

          var asso_depo_tdsamt_ad = document.getElementById("asso_depo_tdsamt_ad").value;
          if(asso_depo_tdsamt_ad == ""){
          document.getElementById("asso_depo_tdsamt_ad").focus();
          swal("Oops!","Please Enter TDS Amount","error");
          return false;
          }
          else{
              var tds_amt = /([0-9]){0,8}([.]){0,1}([0-9]){0,2}/;
              if (!tds_amt.test(asso_depo_tdsamt_ad))
              {
              document.getElementById("asso_depo_tdsamt_ad").focus();
              
              swal("Invalid","Please Enter Valid Amount","error");
              return false;
              }
          }

        // Recived Amount

        var asso_depo_amt_ad = document.getElementById("asso_depo_amt_ad").value;
        if(asso_depo_amt_ad == ""){
        document.getElementById("asso_depo_amt_ad").focus();
        swal("Oops!","Please Enter Recived Amount","error");
        return false;
        }
        else{
            var rcv_amt = /([0-9]){0,8}([.]){0,1}([0-9]){0,2}/;
            if (!rcv_amt.test(asso_depo_amt_ad))
            {
            document.getElementById("asso_depo_amt_ad").focus();
            
            swal("Invalid","Please Enter Valid Amount","error");
            return false;
            }
        }
    
      

        // Total Amount

        var asso_depo_totalamt_ad = document.getElementById("asso_depo_totalamt_ad").value;
        if(asso_depo_totalamt_ad == ""){
        document.getElementById("asso_depo_totalamt_ad").focus();
        swal("Oops!","Please Enter Total Amount","error");
        return false;
        }
        else{
            var ttl_amt = /([0-9]){0,8}([.]){0,1}([0-9]){0,2}/;
            if (!ttl_amt.test(asso_depo_totalamt_ad))
            {
            document.getElementById("asso_depo_totalamt_ad").focus();
            
            swal("Invalid","Please Enter Valid Amount","error");
            return false;
            }
        }

        document.getElementById('bnk_deposit_return_ad').submit();
    
     }

////////////////////////////////////////////////////////////////////////////


     // Associated Bank Account Type Clear Function

     function clearAssociatedBankDeposit()
{
    document.getElementById('ser_ass_bnk_depmas').value="";
    document.getElementById('return_date').value="";
    document.getElementById('return_date1').value="";
    document.getElementById('return_amount').value="";
    document.getElementById('ser_and1').value="";
    document.getElementById('return_tds_amount').value="";
    document.getElementById('tds_and').value="";

} 




/////////////////////////////////////////////////////////////////////////////

      // Associated Bank Deposit Returns Edit
      function associated_dep_edit(dpedt)
      {
       //alert(dpedt)
      var dpedtid = dpedt.id;
       //alert("This object's ID attribute is set to \"" + edtid + "\"."); 
       var dped1=document.getElementById("asso_rtrn_ed"+dpedtid).value;
      // alert("radio button value"+dped1)
      document.getElementById("radio_deposit_edit"+dped1).checked=true;
      var dpedtidchecked=$("input[name='radio_deposit_edit']:checked").val();
       //alert(dpedtidchecked);
      
      
      var dep_type_id=document.getElementById('radio_deposit_edit'+dpedtidchecked).value;
      //alert("BANK ID -----------------------"+dep_type_id);
      
      document.getElementById("edit_rtrn_typ").value=dep_type_id;
      document.getElementById("deposit_edit").submit();
      }

      // Associated Bank Account View

 function associated_dep_view(dpvew)
 {
  //alert(dpvew)
 var dpvewid = dpvew.id;
  //alert("This object's ID attribute is set to \"" + edtid + "\"."); 
  var dpvw1=document.getElementById("asso_rtrn_vw"+dpvewid).value;
 // alert("radio button value"+dpvw1)
 document.getElementById("radio_deposit_view"+dpvw1).checked=true;
 var dpvewidchecked=$("input[name='radio_deposit_view']:checked").val();
 // alert(dpvewidchecked);
 
 
 var dep_vw_id=document.getElementById('radio_deposit_view'+dpvewidchecked).value;
 //alert("BANK ID -----------------------"+dep_vw_id);
 
 document.getElementById("view_rtrn_typ").value=dep_vw_id;
 document.getElementById("deposit_view").submit();
 }


 // Associated Bank Account Delete

 function associated_dep_del(dpdel)
 {
  //alert(dpdel)
 var dpdelid = dpdel.id;
  //alert("This object's ID attribute is set to \"" + edtid + "\"."); 
  var dpdel1=document.getElementById("asso_rtrn_dl"+dpdelid).value;
  //alert("radio button value"+dpdel1)
 document.getElementById("radio_deposit_delete"+dpdel1).checked=true;
 var dpdelidchecked=$("input[name='radio_deposit_delete']:checked").val();
  //alert(dpdelidchecked);
 
 
 var dep_dl_id=document.getElementById('radio_deposit_delete'+dpdelidchecked).value;
// alert("BANK ID -----------------------"+dep_dl_id);
 
 document.getElementById("delete_rtrn_typ").value=dep_dl_id;
 //document.getElementById("deposit_delete").submit();
}

function onconfirm_asso_dep_rtrns(){
    document.getElementById("deposit_delete").submit();
    }
function returns_edit_clear()
{
    document.getElementById('asso_depo_mstr_ed').value="";
    document.getElementById('deposit_opening_date').value="";
    document.getElementById('asso_depo_tdsamt_ed').value="";
    document.getElementById('asso_depo_totalamt_ed').value="";
    document.getElementById('asso_depo_amt_ed').value="";
 
}
/* Associated Bank Deposit Returns- END*/

function isdccb_ed_change(rdval){
    // alert(rdval)
    // alert(rdval.value)
    $('input[name=is_dccb_ed]').val=rdval.value;
   // document.getElementsByName("is_dccb_ed").value=rdval.value;

}