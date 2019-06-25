// Only Alphabets for required functions

function alpha(alpbts)
{
   var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
   if (charCode != 48 && charCode > 31
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


// Only Numbers for required functions

function numeric(empcd)
{
   var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
   if (charCode != 48 && charCode > 31 
     && (charCode < 48 || charCode > 57))
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
    
    var bank_cd = document.getElementById("bank_cd").value;
                                        if(bank_cd == ""){
                                                        document.getElementById("bank_cd").focus();
                                                        demo.initChartist();
                                                        swal("Oops!","Please Enter Bank Code","error");
                                                        return false;
                                                    }
    
                                                    
    
    // Bank Name
    
    var bnk_name = document.getElementById("bnk_name").value;
                                        if(bnk_name == ""){
                                            document.getElementById("bnk_name").focus();
                                            demo.initChartist();
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
                    swal("Oops!","please select the Gender","error");
                    return false;
                    }


    
    // Address line
    
    var add_line1 = document.getElementById("add_line1").value;
                                        if(add_line1 == ""){
                                            document.getElementById("add_line1").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Address line","error");
                                            return false;
                                        }
                                        
    
    // District
    
    var district = document.getElementById("district").value;
                                        if(district == ""){
                                            document.getElementById("district").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter District","error");
                                            return false;
                                        }
    
    // Bank State
    
    var bnkstate = document.getElementById("bnkstate").value;
                                        if(bnkstate == ""){
                                            document.getElementById("bnkstate").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Bank State","error");
                                            return false;
                                        }
                                    
    
    // Pincode
    
    var pincode = document.getElementById("pincode").value;
                                        if(pincode == ""){
                                            document.getElementById("pincode").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Pincode","error");
                                            return false;
                                        }
                                        else
                                        {
                                   
                                                if(pincode.length < 6){
                                                document.getElementById("pincode").focus();
                                                demo.initChartist();
                                                swal("Invalid","Please Enter valid Pin Code","warning");
                                                return false;
                                                    }
                                         }
    
    // Land Mark
    
    var land_mark = document.getElementById("land_mark").value;
                                        if(land_mark == ""){
                                            document.getElementById("land_mark").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Land Mark","error");
                                            return false;
                                        }
    
    // Phone number
    
    var ph_num1 = document.getElementById("ph_num1").value;
                                        if(ph_num1 == ""){
                                            document.getElementById("ph_num1").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Phone number","error");
                                            return false;
                                        }
                                        else
                                            {

                                    if(ph_num1.length < 10){
                                            document.getElementById("ph_num1").focus();
                                            demo.initChartist();
                                            swal("Invalid","Please Enter valid Phone Number","warning");
                                            return false;
                                        }
                                }

    
    
    // Alternate Phone number
    
    var ph_num2 = document.getElementById("ph_num2").value;
                                        if(ph_num2 == ""){
                                            document.getElementById("ph_num2").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Alternate Phone number","error");
                                            return false;
                                        }
                                        else
                                            {

                                    if(ph_num2.length < 10){
                                            document.getElementById("ph_num2").focus();
                                            demo.initChartist();
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
                            demo.initChartist();
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
                        demo.initChartist();
                        swal("Oops!","Please Enter a Valid URL","warning");
                        return false;
                 }
    }
                                        
    
    // Contact Person
    
    var con_per1 = document.getElementById("con_per1").value;
                                        if(con_per1 == ""){
                                            document.getElementById("con_per1").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Contact Person","error");
                                            return false;
                                        }
                                       
    
    
    // Alternate Contact Person
    
    var con_per2 = document.getElementById("con_per2").value;
                                        if(con_per2 == ""){
                                            document.getElementById("con_per2").focus();
                                            demo.initChartist();
                                            swal("Oops!","Please Enter Alternate Contact Person","error");
                                            return false;
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
demo.initChartist();
swal("Oops!","Please Enter Bank Code","error");
return false;
}


// Bank Name

var record_bnk_name = document.getElementById("record_bnk_name").value;
if(record_bnk_name == ""){
document.getElementById("record_bnk_name").focus();
demo.initChartist();
swal("Oops!","Please Enter Bank Name","error");
return false;
}


// Branch Code

var record_branch_code = document.getElementById("record_branch_code").value;
if(record_branch_code == ""){
document.getElementById("record_branch_code").focus();
demo.initChartist();
swal("Oops!","Please Enter Branch Code","error");
return false;
}



//Branch Name

var record_branch_name = document.getElementById("record_branch_name").value;
if(record_branch_name == ""){
document.getElementById("record_branch_name").focus();
demo.initChartist();
swal("Oops!","Please Enter Branch Name","error");
return false;
}



// IFSC Code NEFT


var ifsc_cd = document.getElementById("ifsc_cd").value;
if(ifsc_cd == ""){
document.getElementById("ifsc_cd").focus();
demo.initChartist();
swal("Oops!","Please Enter IFSC CODE NEFT","error");
return false;
}

else{

if (ifsc_cd.length <11)
{
document.getElementById("ifsc_cd").focus();
demo.initChartist();
swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}

var ifsccd = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifsccd.test(ifsc_cd))
{
document.getElementById("ifsc_cd").focus();
demo.initChartist();
swal("Invalid","Please Enter Valid IFSC CODE NEFT","warning");
return false;
}


}

// IFSC Code RTGS


var ifsc_rtgs = document.getElementById("ifsc_rtgs").value;
if(ifsc_rtgs == ""){
document.getElementById("ifsc_rtgs").focus();
demo.initChartist();
swal("Oops!","Please Enter IFSC CODE RTGS","error");
return false;
}

else{

if (ifsc_rtgs.length <11)
{
document.getElementById("ifsc_rtgs").focus();
demo.initChartist();
swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}

var ifscrtgs = /([A-Za-z]{4}[0]{1}[0-9]{6})/;
if (!ifscrtgs.test(ifsc_rtgs))
{
document.getElementById("ifsc_rtgs").focus();
demo.initChartist();
swal("Invalid","Please Enter Valid IFSC CODE RTGS","warning");
return false;
}


}


// MICR Code

var micr_code = document.getElementById("micr_code").value;
if(micr_code == ""){
document.getElementById("micr_code").focus();
demo.initChartist();
swal("Oops!","Please Enter MICR Code","error");
return false;
}
else
{

if(micr_code.length < 9){
document.getElementById("micr_code").focus();
demo.initChartist();
swal("Invalid","Please Enter valid MICR Code","warning");
return false;
}
}

// Address Line


var add_line1 = document.getElementById("add_line1").value;
if(add_line1 == ""){
document.getElementById("add_line1").focus();
demo.initChartist();
swal("Oops!","Please Enter Address Line","error");
return false;
}


//District

var district = document.getElementById("district").value;
if(district == ""){
document.getElementById("district").focus();
demo.initChartist();
swal("Oops!","Please Enter district","error");
return false;
}

// State

var state = document.getElementById("state").value;
if(state == ""){
document.getElementById("state").focus();
demo.initChartist();
swal("Oops!","Please Enter State","error");
return false;
}    


//pincode

var pincode = document.getElementById("pincode").value;
if(pincode == ""){
document.getElementById("pincode").focus();
demo.initChartist();
swal("Oops!","Please Enter pincode","error");
return false;
}
else
{

if(pincode.length < 6){
document.getElementById("pincode").focus();
demo.initChartist();
swal("Invalid","Please Enter valid Pin Code","warning");
return false;
}
}    

// Landmark

var land_mark = document.getElementById("land_mark").value;
if(land_mark = ""){
document.getElementById("land_mark").focus();
demo.initChartist();
swal("Oops!","Please Enter landmark","error");
return false;
}



// Phone Number 1

var ph_num1 = document.getElementById("ph_num1").value;
if(ph_num1 == ""){
document.getElementById("ph_num1").focus();
demo.initChartist();
swal("Oops!","Please Enter Phone Number","error");
return false;
}
else
{

if(ph_num1.length < 10){
document.getElementById("ph_num1").focus();
demo.initChartist();
swal("Invalid","Please Enter valid Phone Number","warning");
return false;
                 }
}


// Phone Number 2

var ph_num2 = document.getElementById("ph_num2").value;
if(ph_num2 == ""){
document.getElementById("ph_num2").focus();
demo.initChartist();
swal("Oops!","Please Enter Phone Number","error");
return false;
}
else
{

if(ph_num2.length < 10){
document.getElementById("ph_num2").focus();
demo.initChartist();
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
 demo.initChartist();
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
 demo.initChartist();
 swal("Oops!","Please Enter a Valid URL","warning");
 return false;
}
}


//Contact Person 1

var con_per1 = document.getElementById("con_per1").value;
if(con_per1 == ""){
document.getElementById("con_per1").focus();
demo.initChartist();
swal("Oops!","Please Enter Contact person","error");
return false;
}
else
{

if(ph_num2.length < 10){
document.getElementById("con_per1").focus();
demo.initChartist();
swal("Invalid","Please Enter valid  Contact person","warning");
return false;
                 }
}

//Contact Person 2

var con_per2 = document.getElementById("con_per2").value;
if(con_per2 == ""){
document.getElementById("con_per2").focus();
demo.initChartist();
swal("Oops!","Please Enter Contact Person","error");
return false;
}
else
{

if(con_per2.length < 10){
document.getElementById("con_per2").focus();
demo.initChartist();
swal("Invalid","Please Enter valid  Second Contact Person","warning");
return false;
                 }
}


document.getElementById('bankform').submit();
}                                              