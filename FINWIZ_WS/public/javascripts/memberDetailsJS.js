//////////////////////////////////////// PATTERN MATCHING TABS //////////////////////////////
// AutSelect the State by Selecting the City

function stateoncity_memdet_present() {
   
    var selected_city = document.getElementById("city").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("state").value = obj1.state;
  }


  function stateoncity_memdet_permanent() {
   
    var selected_city = document.getElementById("citie").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("stat").value = obj1.state;
  }

    function stateoncity_memdet_nominee() {
   
    var selected_city = document.getElementById("distcity").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("stat1").value = obj1.state;
  }

   function stateoncity_hsedet() {
   
    var selected_city = document.getElementById("mem_city").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
document.getElementById("house_state").value = obj1.state;
  }

// AutSelect the State by Selecting the City

function stateoncity_memdet_present_edit() {
   
    var selected_city = document.getElementById("city_ed").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("state_ed").value = obj1.state;
  }


  function stateoncity_memdet_permanent_edit() {
   
    var selected_city = document.getElementById("citie_ed").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("stat_ed").value = obj1.state;
  }

    function stateoncity_memdet_nominee_edit() {
   
    var selected_city = document.getElementById("distcity_ed").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
console.log("res",obj1.state);
console.log("ghsa",obj1.city);
document.getElementById("stat1_ed").value = obj1.state;
  }

function stateoncity_hsedet_edit() {
   
    var selected_city = document.getElementById("city_ed").value;
     console.log(selected_city)
obj1=JSON.parse(selected_city);
document.getElementById("hsestate_ed").value = obj1.state;
  }



// Only Alphabets for required functions

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






////////////////////////////////////////// PATTERN MATCHING TABS //////////////////////////////////


// Autofilling Gender by Selecting Title Function In Personal Tab(ADD)

function title_gender(gndr){
    if(gndr.value == "Ms"){
       // alert("when ms")

       document.getElementById("radio-1").disabled = true;

        document.getElementById("mar_status").value='Single';
        document.getElementById("mar_status").disabled=true;

        document.getElementById("radio-2").checked = true;
        $("input[name='sgender']").attr('disabled', true); 
    document.getElementById("genmale").checked = false;
    document.getElementById("genfemale").checked = false;
    document.getElementById("spouse").disabled = true;

    }
    else if(gndr.value == "Mr" || gndr.value == "Shri"){

        document.getElementById("radio-2").disabled = true;

        document.getElementById("radio-1").checked = true;
        document.getElementById("mar_status").selectedIndex = 0;
        document.getElementById("mar_status").disabled=false;
         document.getElementById("genmale").checked = false;
         document.getElementById("genfemale").checked = true;
         document.getElementById("genmale").disabled = true;

    }
    else if(gndr.value == "Mrs" || gndr.value == "Smt"){

        document.getElementById("radio-1").disabled = true;
       // alert("when mrs or smt")
        document.getElementById("mar_status").selectedIndex = 0;
        document.getElementById("mar_status").disabled=false;
    document.getElementById("radio-2").checked = true;
    document.getElementById("genmale").checked = true;
    document.getElementById("genfemale").checked = false;
    document.getElementById("genfemale").disabled = true;
    }
   
}

// MARRITAL STATUS - ADD

function married_status(sender) {
    var title_info=document.getElementById("title").value;
console.log("singles status for women",(sender.value == "Single" || sender.value == "Divorced" || title_info=='Ms'))
console.log("married status for women",(sender.value == "Married" || sender.value == "Widowed" || title_info=='Smt'))

  //  alert(title_info)
    if((sender.value == "Single" || sender.value == "Divorced" || title_info=='Ms')) {
        
            document.getElementById("genmale").checked = false;
    document.getElementById("genfemale").checked = false;
    document.getElementById("spouse").checked = false;
    $("input[name='sgender']").attr('disabled', true); 
    document.getElementById("spouse").disabled = true;
}  
else if((sender.value == "Married" || sender.value == "Widowed") && ((title_info=='Smt' || title_info=='Mrs'))) {
  //  alert("married women")
        document.getElementById("genmale").checked = true;
        document.getElementById("genmale").disabled = false;
        document.getElementById("genfemale").checked = false;
        document.getElementById("genfemale").disabled = true;
    //$("input[name='sgender']").attr('disabled', false);
    document.getElementById("spouse").disabled = false;
}   
else if((sender.value == "Married" && (title_info=='Mr' || title_info=='Shri'))) {
   // alert("married men")
    document.getElementById("genmale").checked = false;
    document.getElementById("genmale").disabled = true;
    document.getElementById("genfemale").checked = true;
document.getElementById("genfemale").disabled = false;
//$("input[name='sgender']").attr('disabled', false);
document.getElementById("spouse").disabled = false;

}  

}

// Autofilling Gender by Selecting Title Function In Personal Tab(EDIT)
         
function title_gender_ed(gndr){
    if(gndr.value == "Ms"){
      // alert("when ms")

       document.getElementById("radio-1_ed").disabled = true;

        document.getElementById("mar_status_ed").value='Single';
        document.getElementById("mar_status_ed").disabled=true;

        document.getElementById("radio-2_ed").checked = true;
        $("input[name='sgender_ed']").attr('disabled', true); 
    document.getElementById("genmale_ed").checked = false;
    document.getElementById("genfemale_ed").checked = false;
    document.getElementById("spouse_ed").disabled = true;

    }
    else if(gndr.value == "Mr" || gndr.value == "Shri"){

        document.getElementById("radio-2_ed").disabled = true;

        document.getElementById("radio-1_ed").checked = true;
        document.getElementById("mar_status_ed").selectedIndex = 0;
        document.getElementById("mar_status_ed").disabled=false;
         document.getElementById("genmale_ed").checked = false;
         document.getElementById("genfemale_ed").checked = true;
         document.getElementById("genmale_ed").disabled = true;

    }
    else if(gndr.value == "Mrs" || gndr.value == "Smt"){

        document.getElementById("radio-1_ed").disabled = true;
      //  alert("when mrs or smt")
        document.getElementById("mar_status_ed").selectedIndex = 0;
        document.getElementById("mar_status_ed").disabled=false;
    document.getElementById("radio-2_ed").checked = true;
    document.getElementById("genmale_ed").checked = true;
    document.getElementById("genfemale_ed").checked = false;
    document.getElementById("genfemale_ed").disabled = true;
    }
   
}

// MARRITAL STATUS - EDIT

function married_status_edit(sender) {
    var title_info=document.getElementById("title_ed").value;
console.log("singles status for women",(sender.value == "Single" || sender.value == "Divorced" || title_info=='Ms'))
console.log("married status for women",(sender.value == "Married" || sender.value == "Widowed" || title_info=='Smt'))

   // alert(title_info)
    if((sender.value == "Single" || sender.value == "Divorced" || title_info=='Ms')) {
        
            document.getElementById("genmale_ed").checked = false;
    document.getElementById("genfemale_ed").checked = false;
    document.getElementById("spouse_ed").checked = false;
    $("input[name='sgender_ed']").attr('disabled', true); 
    document.getElementById("spouse_ed").disabled = true;
}  
else if((sender.value == "Married" || sender.value == "Widowed") && ((title_info=='Smt' || title_info=='Mrs'))) {
   // alert("married women")
        document.getElementById("genmale_ed").checked = true;
        document.getElementById("genmale_ed").disabled = false;
        document.getElementById("genfemale_ed").checked = false;
        document.getElementById("genfemale_ed").disabled = true;
    //$("input[name='sgender_ed']").attr('disabled', false);
    document.getElementById("spouse_ed").disabled = false;
}   
else if((sender.value == "Married" && (title_info=='Mr' || title_info=='Shri'))) {
   // alert("married men")
    document.getElementById("genmale_ed").checked = false;
    document.getElementById("genmale_ed").disabled = true;
    document.getElementById("genfemale_ed").checked = true;
document.getElementById("genfemale_ed").disabled = false;
//$("input[name='sgender_ed']").attr('disabled', false);
document.getElementById("spouse_ed").disabled = false;

}  

}

// Autofilling Gender by Selecting Title Function In Noinee Tab(ADD)

function nominee_gender(nomgen){
    if(nomgen.value == "Mr" || nomgen.value == "Shri"){
        document.getElementById("genmale_nominee").checked = true;
        document.getElementById("genfemale_nominee").disabled = true;
    }
    else{
        document.getElementById("genfemale_nominee").checked = true;
        document.getElementById("genmale_nominee").disabled = true;
    }
    }
 
// Autofilling Gender by Selecting Title Function In Noinee Tab(EDIT)

function nominee_gender_ed(nomgen_ed){
    if(nomgen_ed.value == "Mr" || nomgen_ed.value == "Shri"){
            document.getElementById("genmale_nominee_ed").checked = true;
            document.getElementById("genfemale_nominee_ed").disabled = true;
    }
    else{
            document.getElementById("genfemale_nominee_ed").checked = true;
            document.getElementById("genmale_nominee_ed").disabled = true;
    }
    }


// // Autofilling Gender by Selecting Title Function In Personal Tab(ADD)
// function title_gender(gndr){
//     if(gndr.value == "Mr" || gndr.value == "Shri"){
//     document.getElementById("radio-1").checked = true;
//     document.getElementById("genmale").checked = false;
//     document.getElementById("genfemale").checked = true;
//     document.getElementById("genmale").disabled = true;
//     }
//     else{
//     document.getElementById("radio-2").checked = true;
//     document.getElementById("genmale").checked = true;
//     document.getElementById("genfemale").checked = false;
//     document.getElementById("genfemale").disabled = true;
//     }
// }

// // Autofilling Gender by Selecting Title Function In Personal Tab(EDIT)

// function title_gender_ed(gndr){
//     if(gndr.value == "Mr" || gndr.value == "Shri"){
//     document.getElementById("radio-1_ed").checked = true;
//     document.getElementById("genmale_ed").checked = false;
//     document.getElementById("genfemale_ed").checked = true;
//     document.getElementById("genmale_ed").disabled = true;
//     }
//     else{
//     document.getElementById("radio-2_ed").checked = true;
//     document.getElementById("genmale_ed").checked = true;
//     document.getElementById("genfemale_ed").checked = false;
//     document.getElementById("genfemale_ed").disabled = true;
//     }
// }
  
// ///////////////////////////////////////////////////////

// // Autofilling Gender by Selecting Title Function In Noinee Tab(ADD)

// function nominee_gender(nomgen){
//     if(nomgen.value == "Mr" || nomgen.value == "Shri"){
//         document.getElementById("genmale_nominee").checked = true;
//     }
//     else{
//         document.getElementById("genfemale_nominee").checked = true;
//     }
//     }
 
// // Autofilling Gender by Selecting Title Function In Noinee Tab(EDIT)

// function nominee_gender_ed(nomgen_ed){
//     if(nomgen_ed.value == "Mr" || nomgen_ed.value == "Shri"){
//             document.getElementById("genmale_nominee_ed").checked = true;
//     }
//     else{
//             document.getElementById("genfemale_nominee_ed").checked = true;
//     }
//     }

// // Maritial Status in Personal Details

// function married_status(sender) {
// var title_info=document.getElementById("title").value;
// if (sender.value == "Single" || sender.value == "Divorced") {

// document.getElementById("genmale").checked = false;
// document.getElementById("genfemale").checked = false;
// document.getElementById("spouse").checked = false;
// $("input[name='sgender']").attr('disabled', true); 
// document.getElementById("spouse").disabled = true;
// }

// else if((sender.value == "Married" || sender.value == "Widowed") && (title_info=='Mr' || title_info=='Shri')) {
// document.getElementById("genmale").checked = false;
// document.getElementById("genfemale").checked = true;
// $("input[name='sgender']").attr('disabled', false); 
// document.getElementById("spouse").disabled = false;
// document.getElementById("genmale").disabled = true;
// }

// }

           
// // MARRITAL STATUS - EDIT

// function married_status_edit(sender) {
//    var title_info=document.getElementById("title_ed").value;
//    if (sender.value == "Single" || sender.value == "Divorced") {
//    document.getElementById("genmale_ed").checked = false;
//    document.getElementById("genfemale_ed").checked = false;
//    document.getElementById("spouse_ed").checked = false;
//    $("input[name='sgender_ed']").attr('disabled', true); 
//    document.getElementById("spouse_ed").disabled = true;
//    }
   
//    else if((sender.value == "Married" || sender.value == "Widowed") && (title_info=='Mr' || title_info=='Shri')) {
//    document.getElementById("genmale_ed").checked = false;
//    document.getElementById("genfemale_ed").checked = true;
//    $("input[name='sgender_ed']").attr('disabled', false); 
//    document.getElementById("spouse_ed").disabled = false;
//    document.getElementById("genmale_ed").disabled = true;
//    }
// }

// // Minority Status in Personal Details
    
//     function minority_status() {
//            var selvalue=document.getElementById("minority").value;
//            var sel_imie = $('select[name="minority1"]');
//                 if(selvalue=='yes'){
//                                         // document.getElementById("religion").value=document.getElementById("minority1").selectedIndex.value;
//                                         document.getElementById("religion").disabled=true;
//                                         sel_imie.prop('disabled', false);
//                              }

//                 else if(selvalue=='no'){
//                                             sel_imie.prop('disabled', true); 
//                                             document.getElementById("religion").disabled=false;     
//                                         }
                
//             }

// Loan Status Loan Details

// function loan_status(obj) {

//         var input1 = document.getElementById("loan_amt");
//         var input2 = document.getElementById("amt_used");
//         if(document.getElementById('e_monthyes').checked==true){
//         input1.disabled = obj.value == "no";
//         input2.disabled = obj.value == "no";
//     }
//     else if(document.getElementById('e_monthno').checked==true) {
//         input1.disabled = obj.value == "yes";
//         input2.disabled = obj.value == "yes";
//     }

//     }


// EDIT Religion Auto Select(ADD)

function personalReligion(){
    var minor=document.getElementById("minority").value;
    var rel = document.getElementById('religion');
    if(minor == "Yes"){

                                        var minority1 = document.getElementById('minority1');
                                        var religion = minority1.options[minority1.selectedIndex].value;
                                       
                                          rel.value = religion;
                                          document.getElementById("minority1").disabled=false;
                                        }
                                        else if(minor == "No"){
                                            document.getElementById('religion').value="";   
                                            document.getElementById("minority1").selectedIndex="0";
                                            document.getElementById("minority1").disabled=true;


                                        }
                                        }

/////////////////////////////////////////////////////////

// EDIT Religion Auto Select(EDIT)

function edit_personalReligion(){
    var minor_ed=document.getElementById("minority_ed").value;
    var rel_ed = document.getElementById('religion_ed');
    if(minor_ed == "yes"){

                                        var minority1_ed = document.getElementById('minority1_ed');
                                        var religion_ed = minority1_ed.options[minority1_ed.selectedIndex].value;
                                       
                                        rel_ed.value = religion_ed;
                                        document.getElementById("minority1_ed").disabled=false;
                                        }
                                        else if(minor_ed == "no"){
                                            document.getElementById('religion_ed').value="";   
                                            document.getElementById("minority1_ed").selectedIndex="0";
                                            document.getElementById("minority1_ed").disabled=true;
                                        }
                                        }



////////////////////////////////////////////////////////

//Address Check Box
   function checkPresentDetails() {
        if(myCheck.checked == true) {
            
                document.getElementById('address_line').value=document.getElementById('add_line').value;
                document.getElementById('vilg').value=document.getElementById('village').value;
                document.getElementById('panc').value=document.getElementById('panchayat').value;
                document.getElementById('citie').value=document.getElementById('city').value;
                document.getElementById('stat').value=document.getElementById('state').value;
                document.getElementById('ctry').value=document.getElementById('country').value;
                document.getElementById('picd').value=document.getElementById('pincode').value;
                document.getElementById('mnth').value=document.getElementById('rsm').value;
                document.getElementById('year').value=document.getElementById('rsy').value;
               
         }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
 

// member counterpay radio button update

function counterpay_ed_change(rdval){
    // alert(rdval)
   //  alert(rdval.value)
     $('input[name=cntr_pay_ed]').val=rdval.value;
    // document.getElementsByName("is_dccb_ed").value=rdval.value;
 
 }
  
 function gender_ed_change(rdval){
     // alert(rdval)
    //  alert(rdval.value)
      $('input[name=selectedop_ed]').val=rdval.value;
     // document.getElementsByName("is_dccb_ed").value=rdval.value;
  
  }
 
  function spouse_gender_ed_change(rdval){
     // alert(rdval)
    //  alert(rdval.value)
      $('input[name=sgender_ed]').val=rdval.value;
     // document.getElementsByName("is_dccb_ed").value=rdval.value;
  
  }
 
 
 function nominee_gender_ed_change(rdval){
     // alert(rdval)
    //  alert(rdval.value)
      $('input[name=gen_nom_ed]').val=rdval.value;
     // document.getElementsByName("is_dccb_ed").value=rdval.value;
  
  }

 ///////////////////////////////////////////////////////////////////////////// 

//Member Details Clear function

function clearMemberTab()
{ 
    document.getElementById('mem_typ').value="";
    document.getElementById('mem_id').value="";
    document.getElementById('emp_code').value="";
    document.getElementById('doj').value="";
    document.getElementById('dob').value="";
    document.getElementById('dor').value="";
    document.getElementById('adm_no').value="";
    document.getElementById('dept').value="";
    document.getElementById('ent_fee').value="";
    document.getElementById('crncytyp').value="";
    document.getElementById('shr_bal').value="";
    document.getElementById('cntr_pay').checked=false;
    document.getElementById('cntr_pay1').checked=false;
    document.getElementById('thrift_dept').value="";
    document.getElementById('dras').value="";
    document.getElementById('bnk_acc_no').value="";
    document.getElementById('opn_bal').value="";
    document.getElementById('cls_bal').value="";
    document.getElementById('remarks').value="";
   
}

//Personal Details Clear function

function clearPersonalTab()
{ 
    document.getElementById('title').value="";
    document.getElementById('fname').value="";
    document.getElementById('mname').value="";
    document.getElementById('lname').value="";
    document.getElementById('father_name').value="";
    document.getElementById('mar_status').value="";
    $('input[name=selectedop]').attr('checked',false);
    $('input[name=sgender]').attr('checked',false);
    document.getElementById('pob').value="";
    document.getElementById('spouse').value="";
    document.getElementById('religion').value="";
    document.getElementById('caste').value="";
    document.getElementById('occupation').value="";
    document.getElementById('cust_category').value="";
    document.getElementById('cust_type').value="";
    document.getElementById('buss_segment').value="";
    document.getElementById('mem_comm').value="";
    document.getElementById('guardian').value="";
    document.getElementById('ph_no').value="";
    document.getElementById('email_id').value="";
    document.getElementById('adhar_no').value="";
    document.getElementById('ration_no').value="";
    document.getElementById('voter_id').value="";
    document.getElementById('pan_id').value="";
    document.getElementById('under_poverty').value="";
    document.getElementById('fam_members').value="";
    document.getElementById('dept_no').value="";
    document.getElementById('minority').value="";
    document.getElementById('minority1').value="";
    document.getElementById('land_owner').value="";
    document.getElementById('resd_status').value="";
    document.getElementById('shg_no').value="";
    document.getElementById('kcc').value="";
    document.getElementById('s_mem').value="";
    document.getElementById('s_staf').value="";
    document.getElementById('acc_holder').value="";
    document.getElementById('high_edu').value="";
    document.getElementById('uploadDoc_photograph').value="";
        document.getElementById('uploadDoc_signature').value="";


}
//Present address Clear function

function clearPresentAddTab(){

    document.getElementById('add_type').value="";
    document.getElementById('add_line').value="";
    document.getElementById('village').value="";
    document.getElementById('panchayat').value="";
    document.getElementById('city').value="";
    document.getElementById('state').value="";
    document.getElementById('country').value="";
    document.getElementById('pincode').value="";
    document.getElementById('rsm').value="";
    document.getElementById('rsy').value="";
    document.getElementById('bck_search').value="";
   
}

//Permanent address Clear function

function clearPermanentAddTab(){

    document.getElementById('myCheck').checked=false;   
    document.getElementById('address_type').value="";
    document.getElementById('address_line').value="";
    document.getElementById('vilg').value="";
    document.getElementById('panc').value="";
    document.getElementById('citie').value="";
    document.getElementById('stat').value="";
    document.getElementById('ctry').value="";
    document.getElementById('picd').value="";
    document.getElementById('mnth').value="";
    document.getElementById('year').value="";

}

//Loan Clear function

function clearLoanTab(){

    document.getElementById('e_monthyes').checked=false;
    document.getElementById('e_monthno').checked=false;
    document.getElementById('loan_amt').value="";
    document.getElementById('amt_used').value="";

}

//Nominee Clear function

function clearNomineeTab(){

    document.getElementById('nominee_type').value="";
    document.getElementById('fst_name').value="";
    document.getElementById('mid_name').value="";
    document.getElementById('lst_name').value="";
    document.getElementById('fath_name').value="";
    document.getElementById('rel').value="";
    document.getElementById('genmale_nominee').checked=false;
    document.getElementById('genfemale_nominee').checked=false;
    document.getElementById('occup').value="";
    document.getElementById('date_ob').value="";
    document.getElementById('ac_num').value="";
    document.getElementById('addr_type').value="";
    document.getElementById('addr_line').value="";
    document.getElementById('vilge').value="";
    document.getElementById('panch').value="";
    document.getElementById('distcity').value="";
    document.getElementById('stat1').value="";
    document.getElementById('countr').value="";
    document.getElementById('pin_cd').value="";
    document.getElementById('phone_no').value="";   
    document.getElementById('email').value="";
    document.getElementById('adh_no').value="";
    document.getElementById('ism').value="";
  
}


//Member Details Edit Clear function

function edit_clearMemberTab()
{ 
    document.getElementById('mem_typ_ed').value="";
    document.getElementById('mem_id_ed').value="";
    document.getElementById('emp_code_ed').value="";
    document.getElementById('doj_ed').value="";
    document.getElementById('dob_id_ed').value="";
    document.getElementById('dor_ed').value="";
    document.getElementById('adm_no_ed').value="";
    document.getElementById('dept_ed').value="";
    document.getElementById('ent_fee_ed').value="";
    document.getElementById('crncytyp_ed').value="";
    document.getElementById('shr_bal_ed').value="";
    $('input[name=cntr_pay_ed]').attr('checked',false);
    document.getElementById('thrift_dept_ed').value="";
    document.getElementById('dras_ed').value="";
    document.getElementById('bnk_acc_no_ed').value="";
    document.getElementById('opn_bal_ed').value="";
    document.getElementById('cls_bal_ed').value="";
    document.getElementById('remarks_ed').value="";
   
}

//Personal Details Clear function

function edit_clearPersonalTab()
{ 
    document.getElementById('title_ed').value="";
    document.getElementById('fname_ed').value="";
    document.getElementById('mname_ed').value="";
    document.getElementById('lname_ed').value="";
    document.getElementById('father_name_ed').value="";
    document.getElementById('mar_status_ed').value="";
    $('input[name=selectedop_ed]').attr('checked',false);
    $('input[name=sgender_ed]').attr('checked',false);
    document.getElementById('pob_ed').value="";
    document.getElementById('spouse_ed').value="";
    document.getElementById('religion_ed').value="";
    document.getElementById('caste_ed').value="";
    document.getElementById('occupation_ed').value="";
    document.getElementById('cust_category_ed').value="";
    document.getElementById('cust_type_ed').value="";
    document.getElementById('buss_segment_ed').value="";
    document.getElementById('mem_comm_ed').value="";
    document.getElementById('guardian_ed').value="";
    document.getElementById('ph_no_ed').value="";
    document.getElementById('email_id_ed').value="";
    document.getElementById('adhar_no_ed').value="";
    document.getElementById('ration_no_ed').value="";
    document.getElementById('voter_id_ed').value="";
    document.getElementById('pan_id_ed').value="";
    document.getElementById('under_poverty_ed').value="";
    document.getElementById('fam_members_ed').value="";
    document.getElementById('dept_no_ed').value="";
    document.getElementById('minority_ed').value="";
    document.getElementById('minority1_ed').value="";
    document.getElementById('land_owner_ed').value="";
    document.getElementById('resd_status_ed').value="";
    document.getElementById('shg_no_ed').value="";
    document.getElementById('kcc_ed').value="";
    document.getElementById('s_mem_ed').value="";
    document.getElementById('s_staf_ed').value="";
    document.getElementById('acc_holder_ed').value="";
    document.getElementById('high_edu_ed').value="";

}
//Present address Clear function

function  edit_clearPresentAddTab(){

    document.getElementById('add_type_ed').value="";
    document.getElementById('add_line_ed').value="";
    document.getElementById('village_ed').value="";
    document.getElementById('panchayat_ed').value="";
    document.getElementById('city_ed').value="";
    document.getElementById('state_ed').value="";
    document.getElementById('country_ed').value="";
    document.getElementById('pincode_ed').value="";
    document.getElementById('rsm_ed').value="";
    document.getElementById('rsy_ed').value="";
   
}

//Permanent address Clear function

function edit_clearPermanentAddTab(){

    $('input[name=myCheck_ed]').attr('checked',false);  
    document.getElementById('address_type_ed').value="";
    document.getElementById('address_line_ed').value="";
    document.getElementById('vilg_ed').value="";
    document.getElementById('panc_ed').value="";
    document.getElementById('citie_ed').value="";
    document.getElementById('stat_ed').value="";
    document.getElementById('ctry_ed').value="";
    document.getElementById('picd_ed').value="";
    document.getElementById('mnth_ed').value="";
    document.getElementById('year_ed').value="";

}

//Loan Clear function

function edit_clearLoanTab(){

    $('input[name=e_month_ed]').attr('checked',false);  
    document.getElementById('loan_amt_ed').value="";
    document.getElementById('amt_used_ed').value="";

}

//Nominee Clear function

function edit_clearNomineeTab(){

    document.getElementById('nominee_type_ed').value="";
    document.getElementById('fst_name_ed').value="";
    document.getElementById('mid_name_ed').value="";
    document.getElementById('lst_name_ed').value="";
    document.getElementById('fath_name_ed').value="";
    document.getElementById('rel_ed').value="";
    document.getElementById('genmale_nominee_ed').checked=false;
    document.getElementById('genfemale_nominee_ed').checked=false;
    document.getElementById('occup_ed').value="";
    document.getElementById('date_ob_ed').value="";
    document.getElementById('ac_num_ed').value="";
    document.getElementById('addr_type_ed').value="";
    document.getElementById('addr_line_ed').value="";
    document.getElementById('vilge_ed').value="";
    document.getElementById('panch_ed').value="";
    document.getElementById('distcity_ed').value="";
    document.getElementById('stat1_ed').value="";
    document.getElementById('countr_ed').value="";
    document.getElementById('pin_cd_ed').value="";
    document.getElementById('phone_no_ed').value="";   
    document.getElementById('email_ed').value="";
    document.getElementById('adh_no_ed').value="";
    document.getElementById('ism_ed').value="";
  
}


/////////////////////////////////////////////////////////////////////////////////////////////////////



                                // MEMBER DETAILS

function memberDetails(){

var memid=document.getElementById('mem_id').value;
console.log("memid to check",memid)
$.ajax({ // to check whether the member id already exists or not
   type:"post",
   data:{memid:memid},
       
   url:"/memberDetailsModule/memberDetails/check_memberid_existence",
success:function(response,data){  
    console.log("response from ajax call",response)
         
var mem_typ = document.getElementById("mem_typ").value;
                                    if(mem_typ == ""){
                                                    document.getElementById("mem_typ").focus();
                                                    
                                                    swal("Oops!","Please Enter Member Type in Member Details","error");
                                                    return false;
                                                }
var mem_id = document.getElementById("mem_id").value;
                                    if(mem_id == ""){
                                        document.getElementById("mem_id").focus();
                                        
                                        swal("Oops!","Please Enter Member ID in Member Details","error");
                                        return false;
                                    }
         if(response>0){
              document.getElementById("mem_id").focus();
               swal("Oops!","Member Id is already taken.Please use other Id","error");
               return false;
         }


// Employee Code

var emp_code = document.getElementById("emp_code").value;
                                    if(emp_code == ""){
                                        document.getElementById("emp_code").focus();
                                        
                                        swal("Oops!","Please Enter Employee Code in Member Details","error");
                                        return false;
                                    }
                                    
   //Date of Joining
   
   var doj = document.getElementById("doj").value;
                                    if(doj == ""){
                                        document.getElementById("doj").focus();
                                        
                                        swal("Oops!","Please Enter Date Of joining in Member Details","error");
                                        return false;
                                    }
   

// Date Of Birth

var dob = document.getElementById("dob").value;
                                    if(dob == ""){
                                        document.getElementById("dob").focus();
                                        
                                        swal("Oops!","Please Date Of Birth in Member Details","error");
                                        return false;
                                    }

// Addmission Number

var adm_no = document.getElementById("adm_no").value;
                                    if(adm_no == ""){
                                        document.getElementById("adm_no").focus();
                                        
                                        swal("Oops!","Please Enter Addmission Number in Member Details","error");
                                        return false;
                                    }
                                

// Department

var dept = document.getElementById("dept").value;
                                    if(dept == ""){
                                        document.getElementById("dept").focus();
                                        
                                        swal("Oops!","Please Enter Department in Member Details","error");
                                        return false;
                                    }

// Entrance Fee

var ent_fee = document.getElementById("ent_fee").value;
                                    if(ent_fee == ""){
                                        document.getElementById("ent_fee").focus();
                                        
                                        swal("Oops!","Please Enter Entrance Fee in Member Details","error");
                                        return false;
                                    }

// Currency Type

var crncytyp = document.getElementById("crncytyp").value;
if(crncytyp == ""){
    document.getElementById("crncytyp").focus();
    
    swal("Oops!","Please Enter Currency Type in Member Details","error");
    return false;
}


// Opening Share Balance

var shr_bal = document.getElementById("shr_bal").value;
                                    if(shr_bal == ""){
                                        document.getElementById("shr_bal").focus();
                                        
                                        swal("Oops!","Please Enter Opening Share Baalance in Member Details","error");
                                        return false;
                                    }



// Thrift deposit

var thrift_dept = document.getElementById("thrift_dept").value;
                                    if(thrift_dept == ""){
                                        document.getElementById("thrift_dept").focus();
                                        
                                        swal("Oops!","Please Enter Deposit in Member Details","error");
                                        return false;
                                    }

// DRAS

var dras = document.getElementById("dras").value;
                                    if(dras == ""){
                                        document.getElementById("dras").focus();
                                        
                                        swal("Oops!","Please Enter DRAS in Member Details","error");
                                        return false;
                                    }
                                    


// Bank Account Number

var bnk_acc_no = document.getElementById("bnk_acc_no").value;
                                    if(bnk_acc_no == ""){
                                        document.getElementById("bnk_acc_no").focus();
                                        
                                        swal("Oops!","Please Enter Account Number in Member Details","error");
                                        return false;
                                    }
                                   


// Opening Balance

var opn_bal = document.getElementById("opn_bal").value;
                                    if(opn_bal == ""){
                                        document.getElementById("opn_bal").focus();
                                        
                                        swal("Oops!","Please Enter Opening Balance in Member Details","error");
                                        return false;
                                    }
                                    
                                    
                                    
// Close Balance

var cls_bal = document.getElementById("cls_bal").value;
                                    if(cls_bal == ""){
                                        document.getElementById("cls_bal").focus();
                                        
                                        swal("Oops!","Please Enter Close Balance in Member Details","error");
                                        return false;
                                    }

                                      $('#tabs a[href=#personal_details]').tab('show').addClass("active");
                                            $('#tabs a[href=#member_details]').removeClass("active");
}
})

                                            
   }


////////////////////////////////////////////////////////////////////////////////////////////////////

                                    // PERSONAL DETAILS


// function spouseFemale()
// {
//     var gendf=document.getElementById("radio-2").value;
// if(gendf.checked==true)
//     {
//     document.getElementById("male1").checked=true;
// }
// }


function personalDetails(){

// Title

var title = document.getElementById("title").value;
                                    if(title == ""){
                                                    document.getElementById("title").focus();
                                                    
                                                    swal("Oops!","Please Enter Title in personal details","error");
                                                    return false;
                                                }



// First Name
    
    var fname = document.getElementById("fname").value;
                                        if(fname == ""){
                                            document.getElementById("fname").focus();
                                            
                                            swal("Oops!","Please Enter First name in personal details","error");
                                            return false;
                                        }
                                       
    
    
// Middle Name 
    
     var mname = document.getElementById("mname").value;
    if(mname!="")
    {
           
                                    var m_name = /[A-Za-z]/;
                                                if(!m_name.test(mname))
                                                {
                                                    document.getElementById("mname").focus();
                                                    
                                                    swal("Oops!","Invalid, Please Enter valid Middle name in personal details","warning");
                                                    return false;
                                                }
                                            }
                                    
    
     
    
// Last Name
    
    var  lname= document.getElementById("lname").value;
    if(lname == ""){
                    document.getElementById("lname").focus();
                    
                    swal("Oops!","Please Enter Last name in personal details","error");
                    return false;
                                        }
    
    
    
    
// Father Name
    
    var  father_name= document.getElementById("father_name").value;
    if(father_name == ""){
                    document.getElementById("father_name").focus();
                    
                    swal("Oops!","Please Enter Father name in personal details","error");
                    return false;
                    }
    
    
// Marital Status

var mar_status = document.getElementById("mar_status").value;
if(mar_status == ""){
                document.getElementById("mar_status").focus();
                
                swal("Oops!","Please Enter Marital Status in personal details","error");
                return false;
            }

//Gender

var male = document.getElementById("radio-1");
var female = document.getElementById("radio-2");

if (male.checked){
    console.log("male selected");
}else if (female.checked) {
    console.log("female selected");
}
else{
    document.getElementById("male").autofocus;
    swal("Oops!","please select the Gender in personal details");
    return false;
}


    
//  Place of Birth
    
    var  pob= document.getElementById("pob").value;
    if(pob == ""){
                    document.getElementById("pob").focus();
                    
                    swal("Oops!","Please Enter Place of Birth in personal details","error");
                    return false;
                     }
    
//Occupation
                     var  occupation= document.getElementById("occupation").value;
                     if(occupation == ""){
                                     document.getElementById("occupation").focus();
                                     
                                     swal("Oops!","Please Enter Occupation in personal details","error");
                                     return false;
                                     }
    
//Customer category
    
     var cust_category = document.getElementById("cust_category").value;
     if(cust_category == ""){
         document.getElementById("cust_category").focus();
         
         swal("Oops!","Please Enter Customer category in personal details","error");
         return false;
     }
     
     
//Member community
    
    var mem_comm = document.getElementById("mem_comm").value;
    if(mem_comm!="")
    {
            
                                    var mem_com = /[A-Za-z]/;
                                                if(!mem_com.test(mem_comm))
                                                {
                                                    document.getElementById("mem_comm").focus();
                                                    
                                                    swal("Oops!","Invalid, Please Enter valid Member Community in personal details","error");
                                                    return false;
                                                }
                                            }
                                    
    
    
    
//Guardian
    
    var guardian = document.getElementById("guardian").value;
    if(guardian!="")
    {
            
                                    var guardian_name = /[A-Za-z]/;
                                                if(!guardian_name.test(guardian))
                                                {
                                                    document.getElementById("guardian").focus();
                                                    
                                                    swal("Oops!","Invalid, Please Enter valid Guardian name in personal details","error");
                                                    return false;
                                                }
                                            }
    
    
// Phone Number
    
    var ph_no = document.getElementById("ph_no").value;
    if(ph_no == ""){
            document.getElementById("ph_no").focus();
            
            swal("Oops!","Please Enter Phone Number in personal details","error");
                    return false;
             }
             else
             {

                     if(ph_no.length < 10){
                     document.getElementById("ph_no").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number in personal details","warning");
                        return false;
                        }
                }


// E-Mail ID
    
    var email_id = document.getElementById("email_id").value;
    if(email_id!="")
    {
    var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (mail_id.test(email_id)==false)
                    {
            
                            document.getElementById("email_id").focus();
                            
                            swal("Oops!","Please Enter a Valid E-mail ID in personal details","warning");
                            return false;
                     }
                    }
    
// AADHAR Number
            var adhar_no = document.getElementById("adhar_no").value;
            if(adhar_no == ""){
                            document.getElementById("adhar_no").focus();
                            
                            swal("Oops!","Please Enter AADHAR Number in personal details","error");
                            return false;
                     }
    
            else
            {
                    if (adhar_no.length <12)
                    {
                            document.getElementById("adhar_no").focus();
                            
                            swal("Invalid","Please Enter Valid AADHAR Number in personal details","warning");
                            return false;
                     }
                            
            
                  
            }
            
// Voter ID
    
            var voter_id = document.getElementById("voter_id").value;
            if(voter_id == ""){
                    document.getElementById("voter_id").focus();
                    
                    swal("Oops!","Please Enter Voter ID in personal details","error");
                    return false;
                     }
                    
            else{
    
            if (voter_id.length <10)
            {
                    document.getElementById("voter_id").focus();
                    
                    swal("Invalid","Please Enter Valid Voter ID in personal details","warning");
                    return false;
                     }
             
            var voterid = /([a-zA-Z]{3}[0-9]{7})/;
            if (!voterid.test(voter_id))
            {
                    document.getElementById("voter_id").focus();
                    
                    swal("Invalid","Please Enter Valid Voter ID in personal details","warning");
                    return false;
                     }
    
                   
    }
            
// PAN Number
            
            var pan_id = document.getElementById("pan_id").value;
                                        if(pan_id == "")
                                        {
                                                        document.getElementById("pan_id").focus();
                                                        
                                                        swal("Oops!","Please Enter PAN Number in personal details","error");
                                                        return false;
                     }
                                        else
                                        {
            
                                                if (pan_id.length <10)
                                                {
                                                        document.getElementById("pan_id").focus();
                                                        
                                                         swal("Invalid","Please Enter Valid PAN Number in personal details","warning");
                                                        return false;
                                                }
            
                                                var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                                                if(!regpan.test(pan_id))
                                                {
                                                        document.getElementById("pan_id").focus();
                                                        
                                                        swal("Invalid!","Please Enter PAN Number in personal details","warning");
                                                        return false;
                                                }
    
    
                                        }
                                           
//Land Owned By
    
    var land_owner = document.getElementById("land_owner").value;
    if(land_owner!="")
    {
            
                                    var land_own = /[A-Za-z]/;
                                                if(!land_own.test(land_owner))
                                                {
                                                    document.getElementById("land_owner").focus();
                                                    
                                                    swal("Invalid","Please Enter valid Land owner name in personal details","warning");
                                                    return false;
                                                }
     }
    
    
  
      var signatureupld = document.getElementById("uploadDoc_signature").value;
    if(signatureupld=="")
    {
         document.getElementById("uploadDoc_signature").focus();
                                                        
                                                        swal("Oops!","Please Upload Signature Document in personal details","error");
                                                        return false;
    }
       var photoupload = document.getElementById("uploadDoc_photograph").value;
    if(photoupload=="")
    {
         document.getElementById("uploadDoc_photograph").focus();
                                                        
                                                        swal("Oops!","Please Upload Photograph in personal details","error");
                                                        return false;
    }

    
           
    
                                            $('#tabs a[href=#present_address]').tab('show').addClass("active");
                                            $('#tabs a[href=#personal_details]').removeClass("active");
                                    }
    
///////////////////////////////////////////////////////////////////////////////////////////////


                                                //PRESENT ADDRESS


function presentAddDetails(){

    // Address Type
    
    var add_type = document.getElementById("add_type").value;
                                        if(add_type == ""){
                                                        document.getElementById("add_type").focus();
                                                        
                                                        swal("Oops!","Please Enter Address Type in present address","error");
                                                        return false;
                                                            }

    
    // Address line
    
    var add_line = document.getElementById("add_line").value;
                                        if(add_line == ""){
                                                        document.getElementById("add_line").focus();
                                                        
                                                        swal("Oops!","Please Enter Address Line in present address","error");
                                                        return false;
                                                            }
    
    
    // Village
    
    var village = document.getElementById("village").value;
                                        if(village == ""){
                                                        document.getElementById("village").focus();
                                                        
                                                        swal("Oops!","Please Enter Village in present address","error");
                                                        return false;
                                                            } 
    
    // Panchayat
    
    var panchayat = document.getElementById("panchayat").value;
                                        if(panchayat == ""){
                                                        document.getElementById("panchayat").focus();
                                                        
                                                        swal("Oops!","Please Enter Panchayat in present address","error");
                                                        return false;
                                                            }
    
    // City
    
    var city = document.getElementById("city").value;
                                        if(city == ""){
                                                        document.getElementById("city").focus();
                                                        
                                                        swal("Oops!","Please Enter City in present address","error");
                                                        return false;
                                                            }
    
    // State
    
    var state1 = document.getElementById("state").value;
                                        if(state1 == ""){
                                                        document.getElementById("state").focus();
                                                        
                                                        swal("Oops!","Please Enter State in present address","error");
                                                        return false;
                                                            }       
    
    // Country
    
    // var country = document.getElementById("country").value;
    //                                     if(country == ""){
    //                                                     document.getElementById("country").focus();
                                                        
    //                                                     swal("Oops!","Please Enter country","error");
    //                                                     return false;
    //                                                         }
     //pincode

        
    var pin_code = document.getElementById("pincode").value;
                                        if(pin_code == ""){
                                                          document.getElementById("pincode").focus();
                                                          
                                                          swal("Oops!","Please Enter pincode in present address","error");
                                                          return false;
                                                        }
                                        else
                                                {
                                           
                                                        if(pin_code.length < 6){
                                                        document.getElementById("pincode").focus();
                                                        
                                                        swal("Invalid","Please Enter valid Pin Code in present address","warning");
                                                        return false;
                                                            }
                                                 }

    //Month                                                       
    var mont = document.getElementById("rsm").value;
                                       if(mont == ""){
                                                     document.getElementById("rsm").focus();
                                                     
                                                     swal("Oops!","Please Enter month in present address","error");
                                                     return false;
                                                   }

    //Year
var yea = document.getElementById("rsy").value;
                                        if(yea == ""){
                                                     document.getElementById("rsy").focus();
                                                    
                                                    swal("Oops!","Please Enter year in present address","error");
                                                    return false;
                                                }
                                  

                                                $('#tabs a[href=#permanent_address]').tab('show').addClass("active");
                                                $('#tabs a[href=#present_address]').removeClass("active");

                                        }

////////////////////////////////////////////////////////////////
        
                                //PERMANENT ADDRESS


function permanentAddDetails(){

    // // Address Type
    
    // var address_type = document.getElementById("address_type").value;
    //                                     if(address_type == ""){
    //                                                     document.getElementById("address_type").focus();
    //                                                     
    //                                                     swal("Oops!","Please Enter Address Type","error");
    //                                                     return false;
    //                                                         }
    
    
    // Address line
    
    var address_line = document.getElementById("address_line").value;
                                        if(address_line == ""){
                                                        document.getElementById("address_line").focus();
                                                        
                                                        swal("Oops!","Please Enter Address Line in permanent address","error");
                                                        return false;
                                                            }
    
    
    // Village
    
    var vilg = document.getElementById("vilg").value;
                                        if(vilg == ""){
                                                        document.getElementById("vilg").focus();
                                                        
                                                        swal("Oops!","Please Enter Village in permanent address","error");
                                                        return false;
                                                            } 
    
    // Panchayat
    
    var panc = document.getElementById("panc").value;
                                        if(panc == ""){
                                                        document.getElementById("panc").focus();
                                                        
                                                        swal("Oops!","Please Enter Panchayat in permanent address","error");
                                                        return false;
                                                            }
    
    // City
    
    var citie = document.getElementById("citie").value;
                                        if(citie == ""){
                                                        document.getElementById("citie").focus();
                                                        
                                                        swal("Oops!","Please Enter City in permanent address","error");
                                                        return false;
                                                            }
    
    // State
    
    var stat = document.getElementById("stat").value;
                                        if(stat == ""){
                                                        document.getElementById("stat").focus();
                                                        
                                                        swal("Oops!","Please Enter State in permanent address","error");
                                                        return false;
                                                            }
    
    // Country
    
    // var ctry = document.getElementById("ctry").value;
    //                                     if(ctry == ""){
    //                                                     document.getElementById("ctry").focus();
                                                        
    //                                                     swal("Oops!","Please Enter Country","error");
    //                                                     return false;
    //                                                         }
//pincode
    var pincode = document.getElementById("picd").value;
                                            if(pincode == ""){
                                                            document.getElementById("picd").focus();
                                                            
                                                            swal("Oops!","Please Enter pincode in permanent address","error");
                                                            return false;
                                                            }
                                            else
                                                            {
                                               
                                                            if(pincode.length < 6){
                                                            document.getElementById("picd").focus();
                                                            
                                                            swal("Invalid","Please Enter valid Pin Code in permanent address","warning");
                                                             return false;
                                                                }
                                                               }

     //Month                                                       
      var mnth = document.getElementById("mnth").value;
                           if(mnth == ""){
                               document.getElementById("mnth").focus();
                                                
                                      swal("Oops!","Please Enter month in permanent address","error");
                                 return false;
                           }

  //Year
         var year = document.getElementById("year").value;
                           if(year == ""){
                               document.getElementById("year").focus();
                                                
                                      swal("Oops!","Please Enter year in permanent address","error");
                                 return false;



                                                                                }
                $('#tabs a[href=#loans]').tab('show').addClass("active");
          $('#tabs a[href=#permanent_address]').removeClass("active");

                                    }
/////////////////////////////////////////////////////////////////////

                                    //LOAN

function loanDetails(){

        //  Loan Eligibility
        //alert("sdfghjk")
        var e_monthy = document.getElementById("e_monthyes").checked;
       // alert(e_monthy)
        var e_monthn = document.getElementById("e_monthno").checked;
        //alert(e_monthn);
        var loanamnt=document.getElementById("loan_amt").value;
        if(e_monthy || e_monthn==true ){
            if(e_monthy==true && loanamnt==''){

                  document.getElementById("loan_amt").focus();
                                                             
                   swal("Oops!","Please Enter Loan Amount in Loan Details","error");
                  return false;
              }
            
        }
        else{
            document.getElementById("e_monthyes").focus();
                                                             
                   swal("Oops!","Please select loan options in Loan Details","error");
                  return false;
        }
        
                                                            
                                                        $('#tabs a[href=#nominee]').tab('show').addClass("active");
                                                        $('#tabs a[href=#loans]').removeClass("active");                                            
                        }


////////////////////////////////////////////////////////////////////

                                    // NOMINEE 


 function nomineedetails(){
memberDetails();
presentAddDetails();
permanentAddDetails();
loanDetails();
    // Title

var nominee_type = document.getElementById("nominee_type").value;
                                  if(nominee_type == ""){
                                                document.getElementById("nominee_type").focus();
                                                
                                                swal("Oops!","Please Enter Title","error");
                                                return false;
                                            }    




    // First Name 
    
    var fst_name = document.getElementById("fst_name").value;
                                        if(fst_name == ""){
                                                        document.getElementById("fst_name").focus();
                                                        
                                                        swal("Oops!","Please Enter First Name","error");
                                                                return false;
                                                                    }
    
    // Middle Name 
    
    var mid_name = document.getElementById("mid_name").value;
    if(mid_name!="")
    {
           
                                    var m_name = /[A-Za-z]/;
                                                if(!m_name.test(mid_name))
                                                {
                                                    document.getElementById("mid_name").focus();
                                                    
                                                    swal("Invalid","Please Enter valid Middle name","error");
                                                    return false;
                                                }
                                            }
                                    
    // Last Name
    
    var  lst_name= document.getElementById("lst_name").value;
    if(lst_name == ""){
                    document.getElementById("lst_name").focus();
                    
                    swal("Oops!","Please Enter Last Name","error");
                    return false;
                    }
    
    
    
    // Father Name
    
    var  fath_name= document.getElementById("fath_name").value;
    if(fath_name == ""){
                    document.getElementById("fath_name").focus();
                    
                    swal("Oops!","Please Enter Father Name","error");
                    return false;
                    }
    
    
    // Relation
    
    var  rel= document.getElementById("relation").value;
    if(relation == ""){
                    document.getElementById("relation").focus();
                    
                    swal("Oops!","Please Enter Relation type","error");
                    return false;
                    }
    
    
    // Gender
    
    var  genfemale= document.getElementById("genmale_nominee").checked;
    // alert("rd check"+genfemale)
    var genmale=document.getElementById("genfemale_nominee").checked;
    // alert("rd check"+genmale)
    // alert((genfemale && genmale)==false)
    if((genfemale || genmale)==false){
   
                    document.getElementById("genmale_nominee").focus();
                    
                    swal("Oops!","Please Enter Gender","error");
                    return false;
                    }
    
    // Occupation
    
    var  occup= document.getElementById("occup").value;
    if(occup == ""){
                    document.getElementById("occup").focus();
                    
                    swal("Oops!","Please Enter Occupation","error");
                    return false;
                    }
    
    
    
    
    
                    
    // Date Of Birth
    
    var date_ob1 = document.getElementById("date_ob").value;
    if(date_ob1 == ""){
            document.getElementById("date_ob").focus();
            
            swal("Oops!","Please Enter Date Of Birth","error");
                    return false;
                    }
    
    //account number
    
    var ac_num = document.getElementById("ac_num").value;
    if(ac_num == ""){
            document.getElementById("ac_num").focus();
            
            swal("Oops!","Please enter account number","error");
                    return false;
                    }
    
    // address type
    
    var addr_type = document.getElementById("addr_type").value;
    if(addr_type == ""){
            document.getElementById("addr_type").focus();
            
            swal("Oops!","Please Enter address type","error");
                    return false;
                    }
    
    // address type
    
    var addr_line = document.getElementById("addr_line").value;
    if(addr_line == ""){
            document.getElementById("addr_line").focus();
            
            swal("Oops!","Please Enter address line","error");
                    return false;
                    }
    
    // village
    
    var vilge = document.getElementById("vilge").value;
    if(vilge == ""){
            document.getElementById("vilge").focus();
            
            swal("Oops!","Please Enter village","error");
                    return false;
                    }
    
    // panchayat
    
    var panch = document.getElementById("panch").value;
    if(panch == ""){
            document.getElementById("panch").focus();
            
            swal("Oops!","Please Enter panchayat","error");
                    return false;
                    }
    
    // dist/city
    
    var distcity = document.getElementById("distcity").value;
    if(distcity == ""){
            document.getElementById("distcity").focus();
            
            swal("Oops!","Please Enter district/city","error");
                    return false;
                    }
    
    // state
    
    var stat1 = document.getElementById("stat1").value;
    if(stat1 == ""){
            document.getElementById("stat1").focus();
            
            swal("Oops!","Please select state","error");
                    return false;
                    }
    
    // country
    
    // var countr = document.getElementById("countr").value;
    // if(countr == ""){
    //         document.getElementById("countr").focus();
            
    //         swal("Oops!","Please select country","error");
    //                 return false;
    //                 }
    
    // pincode
    
    var pin_cd = document.getElementById("pin_cd").value;
    if(pin_cd == ""){
            document.getElementById("pin_cd").focus();
            
            swal("Oops!","Please Enter pincode","error");
                    return false;
                    }
        else
                    {
       
                            if(pin_cd.length < 6){
                            document.getElementById("pin_cd").focus();
                            
                            swal("Invalid","Please Enter valid Pin Code","warning");
                               return false;
                               }
                       }
    
    // Phone no
    
    var phone_no = document.getElementById("phone_no").value;
    if(phone_no == ""){
            document.getElementById("phone_no").focus();
            
            swal("Oops!","Please Enter Phone Number","error");
                    return false;
                    }
                    else
             {

                     if(phone_no.length < 10){
                     document.getElementById("phone_no").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number","warning");
                        return false;
                        }
                }
    
    
                    
    // email
    
       var email = document.getElementById("email").value;
       if(email !=""){
      var mail_id = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (mail_id.test(email)==false)
                    {
            
                            document.getElementById("email").focus();
                            
                            swal("Oops!","Please Enter a Valid E-mail ID","error");
                            return false;
                     }
                    }
    
    // AADHAR Number
    var adh_no = document.getElementById("adh_no").value;
    if(adh_no == ""){
                    document.getElementById("adh_no").focus();
                    
                    swal("Oops!","Please Enter AADHAR Number","error");
                    return false;
             }
    
    else
    {
            if (adh_no.length < 12)
            {
                    document.getElementById("adh_no").focus();
                    
                    swal("Invalid","Please Enter Valid AADHAR Number","warning");
                    return false;
             }
                    
    
            //var adhar_no = document.getElementById("adhar_no").value;
            var validsen = /[0-9]{12}/;
            if (validsen.test(adh_no)==false)
            {
                    document.getElementById("adh_no").focus();
                    
                    swal("Invalid","Please Enter Valid AADHAR Number","warning");
                    return false;
             }
    }
     
    
          
    // Is Society Member
    
    var ism = document.getElementById("ism").value;
    if(ism == ""){
            document.getElementById("ism").focus();
            
            swal("Oops!","Please Enter Is Society Member","error");
                    return false;
                    }          
    
                        document.getElementById('memberform').submit();
}


/////////////////////////////////// EDIT function for validation//////////////////////////


function editMembers(){

    // Member Type Code
    
    var mem_typ_ed = document.getElementById("mem_typ_ed").value;
                                        if(mem_typ_ed == ""){
                                                        document.getElementById("mem_typ_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter Member Type","error");
                                                        return false;
                                                    }
    
    
    // Member ID
    
    var mem_id_ed = document.getElementById("mem_id_ed").value;
                                        if(mem_id_ed == ""){
                                            document.getElementById("mem_id_ed").focus();
                                            
                                            swal("Oops!","Please Enter Member ID","error");
                                            return false;
                                        }
    
    
    // Employee Code
    
    var emp_code_ed = document.getElementById("emp_code_ed").value;
                                        if(emp_code_ed == ""){
                                            document.getElementById("emp_code_ed").focus();
                                            
                                            swal("Oops!","Please Enter Employee Code","error");
                                            return false;
                                        }
                                        
       //Date of Joining
       
       var doj_ed = document.getElementById("doj_ed").value;
                                        if(doj_ed == ""){
                                            document.getElementById("doj_ed").focus();
                                            
                                            swal("Oops!","Please Enter Date Of joining","error");
                                            return false;
                                        }
       
    
    // Date Of Birth
    
    var dob_id_ed = document.getElementById("dob_id_ed").value;
                                        if(dob_id_ed == ""){
                                            document.getElementById("dob_id_ed").focus();
                                            
                                            swal("Oops!","Please Date Of Birth","error");
                                            return false;
                                        }
    
    // Addmission Number
    
    var adm_no_ed = document.getElementById("adm_no_ed").value;
                                        if(adm_no_ed == ""){
                                            document.getElementById("adm_no_ed").focus();
                                            
                                            swal("Oops!","Please Enter Addmission Number","error");
                                            return false;
                                        }
                                    
    
    // Department
    
    var dept_ed = document.getElementById("dept_ed").value;
                                        if(dept_ed == ""){
                                            document.getElementById("dept_ed").focus();
                                            
                                            swal("Oops!","Please Enter Department","error");
                                            return false;
                                        }
    
    // Entrance Fee
    
    var ent_fee_ed = document.getElementById("ent_fee_ed").value;
                                        if(ent_fee_ed == ""){
                                            document.getElementById("ent_fee_ed").focus();
                                            
                                            swal("Oops!","Please Enter Entrance Fee","error");
                                            return false;
                                        }
    
    // Currency Type
    
    var crncytyp_ed = document.getElementById("crncytyp_ed").value;
    if(crncytyp_ed == ""){
        document.getElementById("crncytyp_ed").focus();
        
        swal("Oops!","Please Enter Currency Type","error");
        return false;
    }
    
    
    // Opening Share Balance
    
    var shr_bal_ed = document.getElementById("shr_bal_ed").value;
                                        if(shr_bal_ed == ""){
                                            document.getElementById("shr_bal_ed").focus();
                                            
                                            swal("Oops!","Please Enter Opening Share Baalance","error");
                                            return false;
                                        }
    
    
    
    // Thrift deposit
    
    var thrift_dept_ed = document.getElementById("thrift_dept_ed").value;
                                        if(thrift_dept_ed == ""){
                                            document.getElementById("thrift_dept_ed").focus();
                                            
                                            swal("Oops!","Please Enter Deposit","error");
                                            return false;
                                        }
    
    // DRAS
    
    var dras_ed = document.getElementById("dras_ed").value;
                                        if(dras_ed == ""){
                                            document.getElementById("dras_ed").focus();
                                            
                                            swal("Oops!","Please Enter DRAS","error");
                                            return false;
                                        }
                                        
    
    
    // Bank Account Number
    
    var bnk_acc_no_ed = document.getElementById("bnk_acc_no_ed").value;
                                        if(bnk_acc_no_ed == ""){
                                            document.getElementById("bnk_acc_no_ed").focus();
                                            
                                            swal("Oops!","Please Enter Account Number","error");
                                            return false;
                                        }
                                       
    
    
    // Opening Balance
    
    var opn_bal_ed = document.getElementById("opn_bal_ed").value;
                                        if(opn_bal_ed == ""){
                                            document.getElementById("opn_bal_ed").focus();
                                            
                                            swal("Oops!","Please Enter Opening Balance","error");
                                            return false;
                                        }
                                        
                                        
                                        
    // Close Balance
    
    var cls_bal_ed = document.getElementById("cls_bal_ed").value;
                                        if(cls_bal_ed == ""){
                                            document.getElementById("cls_bal_ed").focus();
                                            
                                            swal("Oops!","Please Enter Close Balance","error");
                                            return false;
                                        }
                                        
    
                                                $('#tabs a[href=#personal_details]').tab('show').addClass("active");
                                                $('#tabs a[href=#member_details]').removeClass("active");
                                        }
    


///////////////////////////////////////////////////////////////////////////


function editPersonaldetails(){

    // Title
    
    var title_ed = document.getElementById("title_ed").value;
                                        if(title_ed == ""){
                                                        document.getElementById("title_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter Title","error");
                                                        return false;
                                                    }
    
    
    
    // First Name
        
        var fname_ed = document.getElementById("fname_ed").value;
                                            if(fname_ed == ""){
                                                document.getElementById("fname_ed").focus();
                                                
                                                swal("Oops!","Please Enter First name","error");
                                                return false;
                                            }
                                           
        
        
    // Middle Name 
        
         var mname_ed = document.getElementById("mname_ed").value;
        if(mname_ed!="")
        {
               
                                        var mname_ed = /[A-Za-z]/;
                                                    if(!mname_ed.test(mname_ed))
                                                    {
                                                        document.getElementById("mname_ed").focus();
                                                        
                                                        swal("Oops!","Invalid, Please Enter valid Middle name","warning");
                                                        return false;
                                                    }
                                                }
                                        
    // Last Name
        
        var  lname_ed= document.getElementById("lname_ed").value;
        if(lname_ed == ""){
                        document.getElementById("lname_ed").focus();
                        
                        swal("Oops!","Please Enter Last name","error");
                        return false;
                                            }
        
         
    // Father Name
        
        var  father_name_ed= document.getElementById("father_name_ed").value;
        if(father_name_ed == ""){
                        document.getElementById("father_name_ed").focus();
                        
                        swal("Oops!","Please Enter Father name","error");
                        return false;
                        }
        
        
    // Marital Status
    
    var mar_status_ed = document.getElementById("mar_status_ed").value;
    if(mar_status_ed == ""){
                    document.getElementById("mar_status_ed").focus();
                    
                    swal("Oops!","Please Enter Marital Status","error");
                    return false;
                }
    
    //Gender
    
    var male = document.getElementById("radio-1_ed");
    var female = document.getElementById("radio-2_ed");
    
    if (male.checked){
        console.log("male selected");
    }else if (female.checked) {
        console.log("female selected");
    }
    else{
        document.getElementById("male").autofocus;
        swal("Oops!","please select the Gender");
        return false;
    }
    
    
        
    //  Place of Birth
        
        var  pob_ed= document.getElementById("pob_ed").value;
        if(pob_ed == ""){
                        document.getElementById("pob_ed").focus();
                        
                        swal("Oops!","Please Enter Place of Birth","error");
                        return false;
                         }
        
    //Occupation
                         var  occupation_ed= document.getElementById("occupation_ed").value;
                         if(occupation_ed == ""){
                                         document.getElementById("occupation_ed").focus();
                                         
                                         swal("Oops!","Please Enter Occupation","error");
                                         return false;
                                         }
        
    //Customer category
        
         var cust_category_ed = document.getElementById("cust_category_ed").value;
         if(cust_category_ed == ""){
             document.getElementById("cust_category_ed").focus();
             
             swal("Oops!","Please Enter Customer category","error");
             return false;
         }
         
         
    //Member community
        
        var mem_comm_ed = document.getElementById("mem_comm_ed").value;
        if(mem_comm_ed!="")
        {
                
                                        var mem_com_ed = /[A-Za-z]/;
                                                    if(!mem_com_ed.test(mem_comm_ed))
                                                    {
                                                        document.getElementById("mem_comm_ed").focus();
                                                        
                                                        swal("Oops!","Invalid, Please Enter valid Member Community","error");
                                                        return false;
                                                    }
                                                }
                                        
        
        
        
    //Guardian
        
        var guardian_ed = document.getElementById("guardian_ed").value;
        if(guardian_ed!="")
        {
                
                                        var guardian_name_ed = /[A-Za-z]/;
                                                    if(!guardian_name_ed.test(guardian_ed))
                                                    {
                                                        document.getElementById("guardian_ed").focus();
                                                        
                                                        swal("Oops!","Invalid, Please Enter valid Guardian name","error");
                                                        return false;
                                                    }
                                                }
        
        
    // Phone Number
        
        var ph_no_ed = document.getElementById("ph_no_ed").value;
        if(ph_no_ed == ""){
                document.getElementById("ph_no_ed").focus();
                
                swal("Oops!","Please Enter Phone Number","error");
                        return false;
                 }
                 else
                 {
    
                         if(ph_no_ed.length < 10){
                         document.getElementById("ph_no_ed").focus();
                         
                         swal("Invalid","Please Enter valid Phone Number","warning");
                            return false;
                            }
                    }
    
    
    // E-Mail ID
        
        var email_id_ed = document.getElementById("email_id_ed").value;
        if(email_id_ed!="")
        {
        var mail_id_ed = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        if (mail_id_ed.test(email_id_ed)==false)
                        {
                
                                document.getElementById("email_id_ed").focus();
                                
                                swal("Oops!","Please Enter a Valid E-mail ID","warning");
                                return false;
                         }
                        }
        
    // AADHAR Number
                var adhar_no_ed = document.getElementById("adhar_no_ed").value;
                if(adhar_no_ed == ""){
                                document.getElementById("adhar_no_ed").focus();
                                
                                swal("Oops!","Please Enter AADHAR Number","error");
                                return false;
                         }
        
                else
                {
                        if (adhar_no_ed.length <12)
                        {
                                document.getElementById("adhar_no_ed").focus();
                                
                                swal("Invalid","Please Enter Valid AADHAR Number","warning");
                                return false;
                         }
                                
                
                      
                }
                
    // Voter ID
        
                var voter_id_ed = document.getElementById("voter_id_ed").value;
                if(voter_id_ed == ""){
                        document.getElementById("voter_id_ed").focus();
                        
                        swal("Oops!","Please Enter Voter ID","error");
                        return false;
                         }
                        
                else{
        
                if (voter_id_ed.length <10)
                {
                        document.getElementById("voter_id_ed").focus();
                        
                        swal("Invalid","Please Enter Valid Voter ID","warning");
                        return false;
                         }
                 
                var voterid_ed = /([a-zA-Z]{3}[0-9]{7})/;
                if (!voterid_ed.test(voter_id_ed))
                {
                        document.getElementById("voter_id_ed").focus();
                        
                        swal("Invalid","Please Enter Valid Voter ID","warning");
                        return false;
                         }
        
                       
        }
                
    // PAN Number
                
                var pan_id_ed = document.getElementById("pan_id_ed").value;
                                            if(pan_id_ed == "")
                                            {
                                                            document.getElementById("pan_id_ed").focus();
                                                            
                                                            swal("Oops!","Please Enter PAN Number","error");
                                                            return false;
                         }
                                            else
                                            {
                
                                                    if (pan_id_ed.length <10)
                                                    {
                                                            document.getElementById("pan_id_ed").focus();
                                                            
                                                             swal("Invalid","Please Enter PAN Number","warning");
                                                            return false;
                                                    }
                
                                                    var regpan_ed = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                                                    if(!regpan_ed.test(pan_id_ed))
                                                    {
                                                            document.getElementById("pan_id_ed").focus();
                                                            
                                                            swal("Invalid!","Please Enter PAN Number","warning");
                                                            return false;
                                                    }
        
        
                                            }
                                               
    //Land Owned By
        
        var land_owner_ed = document.getElementById("land_owner_ed").value;
        if(land_owner_ed!="")
        {
                
                                        var land_own_ed = /[A-Za-z]/;
                                                    if(!land_own_ed.test(land_owner_ed))
                                                    {
                                                        document.getElementById("land_owner_ed").focus();
                                                        
                                                        swal("Invalid","Please Enter valid Land owner name","warning");
                                                        return false;
                                                    }
         }
        
        
         
        
                                                $('#tabs a[href=#present_address]').tab('show').addClass("active");
                                                $('#tabs a[href=#personal_details]').removeClass("active");
                                        }
        


// function editPersonaldetails(){
//     $('#tabs a[href=#present_address]').tab('show').addClass("active");
//     $('#tabs a[href=#personal_details]').removeClass("active");
// }

///////////////////////////////////////////////////////////////////////////////////

                                               //PRESENT ADDRESS


                                                function editPresentAddress(){

                                                    // Address Type
                                                    
                                                    var add_type_ed = document.getElementById("add_type_ed").value;
                                                                                        if(add_type_ed == ""){
                                                                                                        document.getElementById("add_type_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Address Type","error");
                                                                                                        return false;
                                                                                                            }
                                                
                                                    
                                                    // Address line
                                                    
                                                    var add_line_ed = document.getElementById("add_line_ed").value;
                                                                                        if(add_line_ed == ""){
                                                                                                        document.getElementById("add_line_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Address Line","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    
                                                    // Village
                                                    
                                                    var village_ed = document.getElementById("village_ed").value;
                                                                                        if(village_ed == ""){
                                                                                                        document.getElementById("village_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Village","error");
                                                                                                        return false;
                                                                                                            } 
                                                    
                                                    // Panchayat
                                                    
                                                    var panchayat_ed = document.getElementById("panchayat_ed").value;
                                                                                        if(panchayat_ed == ""){
                                                                                                        document.getElementById("panchayat_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Panchayat","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    // City
                                                    
                                                    var city_ed = document.getElementById("city_ed").value;
                                                                                        if(city_ed == ""){
                                                                                                        document.getElementById("city_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter City","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    // State
                                                    
                                                    var state1_ed = document.getElementById("state_ed").value;
                                                                                        if(state1_ed == ""){
                                                                                                        document.getElementById("state_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter State","error");
                                                                                                        return false;
                                                                                                            }       
                                                    
                                                    // Country
                                                    
                                                    var country_ed = document.getElementById("country_ed").value;
                                                                                        if(country_ed == ""){
                                                                                                        document.getElementById("country_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter country","error");
                                                                                                        return false;
                                                                                                            }
                                                     //pincode
                                                
                                                        
                                                    var pincode_ed = document.getElementById("pincode_ed").value;
                                                                                        if(pincode_ed == ""){
                                                                                                          document.getElementById("pincode_ed").focus();
                                                                                                          
                                                                                                          swal("Oops!","Please Enter pincode","error");
                                                                                                          return false;
                                                                                                        }
                                                                                        else
                                                                                                {
                                                                                           
                                                                                                        if(pincode_ed.length < 6){
                                                                                                        document.getElementById("pincode_ed").focus();
                                                                                                        
                                                                                                        swal("Invalid","Please Enter valid Pin Code","warning");
                                                                                                        return false;
                                                                                                            }
                                                                                                 }
                                                
                                                    //Month                                                       
                                                    var mont_ed = document.getElementById("rsm_ed").value;
                                                                                       if(mont_ed == ""){
                                                                                                     document.getElementById("rsm_ed").focus();
                                                                                                     
                                                                                                     swal("Oops!","Please Enter month","error");
                                                                                                     return false;
                                                                                                   }
                                                
                                                    //Year
                                                var yea_ed = document.getElementById("rsy_ed").value;
                                                                                        if(yea_ed == ""){
                                                                                                     document.getElementById("rsy_ed").focus();
                                                                                                    
                                                                                                    swal("Oops!","Please Enter year","error");
                                                                                                    return false;
                                                                                                }
                                                                                  
                                                
                                                                                                $('#tabs a[href=#permanent_address]').tab('show').addClass("active");
                                                                                                $('#tabs a[href=#present_address]').removeClass("active");
                                                
                                                                                        }
                                                
                                                ////////////////////////////////////////////////////////////////
                                                        
                                                                                //PERMANENT ADDRESS
                                                
                                                
                                                function editPermanentAddress(){
                                                
                                                    // // Address Type
                                                    
                                                    // var address_type = document.getElementById("address_type").value;
                                                    //                                     if(address_type == ""){
                                                    //                                                     document.getElementById("address_type").focus();
                                                    //                                                     
                                                    //                                                     swal("Oops!","Please Enter Address Type","error");
                                                    //                                                     return false;
                                                    //                                                         }
                                                    
                                                    
                                                    // Address line
                                                    
                                                    var address_line_ed = document.getElementById("address_line_ed").value;
                                                                                        if(address_line_ed == ""){
                                                                                                        document.getElementById("address_line_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Address Line","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    
                                                    // Village
                                                    
                                                    var vilg_ed = document.getElementById("vilg_ed").value;
                                                                                        if(vilg_ed == ""){
                                                                                                        document.getElementById("vilg_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Village","error");
                                                                                                        return false;
                                                                                                            } 
                                                    
                                                    // Panchayat
                                                    
                                                    var panc_ed = document.getElementById("panc_ed").value;
                                                                                        if(panc_ed == ""){
                                                                                                        document.getElementById("panc_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Panchayat","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    // City
                                                    
                                                    var citie_ed = document.getElementById("citie_ed").value;
                                                                                        if(citie_ed == ""){
                                                                                                        document.getElementById("citie_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter City","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    // State
                                                    
                                                    var stat_ed = document.getElementById("stat_ed").value;
                                                                                        if(stat_ed == ""){
                                                                                                        document.getElementById("stat_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter State","error");
                                                                                                        return false;
                                                                                                            }
                                                    
                                                    // Country
                                                    
                                                    var ctry_ed = document.getElementById("ctry_ed").value;
                                                                                        if(ctry_ed == ""){
                                                                                                        document.getElementById("ctry_ed").focus();
                                                                                                        
                                                                                                        swal("Oops!","Please Enter Country","error");
                                                                                                        return false;
                                                                                                            }
                                                //pincode
                                                    var pincode_ed = document.getElementById("picd_ed").value;
                                                                                            if(pincode_ed == ""){
                                                                                                            document.getElementById("picd_ed").focus();
                                                                                                            
                                                                                                            swal("Oops!","Please Enter pincode","error");
                                                                                                            return false;
                                                                                                            }
                                                                                            else
                                                                                                            {
                                                                                               
                                                                                                            if(pincode_ed.length < 6){
                                                                                                            document.getElementById("picd_ed").focus();
                                                                                                            
                                                                                                            swal("Invalid","Please Enter valid Pin Code","warning");
                                                                                                             return false;
                                                                                                                }
                                                                                                               }
                                                
                                                     //Month                                                       
                                                      var mnth_ed = document.getElementById("mnth_ed").value;
                                                                           if(mnth_ed == ""){
                                                                               document.getElementById("mnth_ed").focus();
                                                                                                
                                                                                      swal("Oops!","Please Enter month","error");
                                                                                 return false;
                                                                           }
                                                
                                                  //Year
                                                         var year_ed = document.getElementById("year_ed").value;
                                                                           if(year_ed == ""){
                                                                               document.getElementById("year_ed").focus();
                                                                                                
                                                                                      swal("Oops!","Please Enter year","error");
                                                                                 return false;
                                                
                                                
                                                
                                                                                                                                }
                                                                $('#tabs a[href=#loans]').tab('show').addClass("active");
                                                          $('#tabs a[href=#permanent_address]').removeClass("active");
                                                
                                                                                    }
                                                /////////////////////////////////////////////////////////////////////
                                                
                                                                                    //LOAN
                                                
                                                function editLoans(){
                                                
                                                        //  Loan Eligibility
                                                        //alert("sdfghjk")
                                                        var e_monthy_ed = document.getElementById("e_monthyes_ed").checked;
                                                       // alert(e_monthy)
                                                        var e_monthn_ed = document.getElementById("e_monthno_ed").checked;
                                                        //alert(e_monthn);
                                                        var loanamnt=document.getElementById("loan_amt_ed").value;
                                                        if(e_monthy_ed || e_monthn_ed==true ){
                                                            if(e_monthy_ed==true && loanamnt==''){
                                                
                                                                  document.getElementById("loan_amt_ed").focus();
                                                                                                             
                                                                   swal("Oops!","Please Enter Loan Amount","error");
                                                                  return false;
                                                              }
                                                            
                                                        }
                                                        else{
                                                            document.getElementById("e_monthyes_ed").focus();
                                                                                                             
                                                                   swal("Oops!","Please select loan options","error");
                                                                  return false;
                                                        }
                                                        
                                                                                                            
                                                                                                        $('#tabs a[href=#nominee]').tab('show').addClass("active");
                                                                                                        $('#tabs a[href=#loans]').removeClass("active");                                            
                                                                        }
                                                

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function edit_nomineedetails(){


    // Title

var nominee_type_ed = document.getElementById("nominee_type_ed").value;
                                  if(nominee_type_ed == ""){
                                                document.getElementById("nominee_type_ed").focus();
                                                
                                                swal("Oops!","Please Enter Title","error");
                                                return false;
                                            }    




    // First Name 
    
    var fst_name_ed = document.getElementById("fst_name_ed").value;
                                        if(fst_name_ed == ""){
                                                        document.getElementById("fst_name_ed").focus();
                                                        
                                                        swal("Oops!","Please Enter First Name","error");
                                                                return false;
                                                                    }
    
    // Middle Name 
    
    var mid_name_ed = document.getElementById("mid_name_ed").value;
    if(mid_name_ed!="")
    {
           
                                    var m_name_1 = /[A-Za-z]/;
                                                if(!m_name_1.test(mid_name_ed))
                                                {
                                                    document.getElementById("mid_name_ed").focus();
                                                    
                                                    swal("Invalid","Please Enter valid Middle name","error");
                                                    return false;
                                                }
                                            }
                                    
    // Last Name
    
    var  lst_name_ed= document.getElementById("lst_name_ed").value;
    if(lst_name_ed == ""){
                    document.getElementById("lst_name_ed").focus();
                    
                    swal("Oops!","Please Enter Last Name","error");
                    return false;
                    }
    
    
    
    // Father Name
    
    var  fath_name_ed= document.getElementById("fath_name_ed").value;
    if(fath_name_ed == ""){
                    document.getElementById("fath_name_ed").focus();
                    
                    swal("Oops!","Please Enter Father Name","error");
                    return false;
                    }
    
    
    // Relation
    
    var  rel_ed= document.getElementById("rel_ed").value;
    if(rel_ed == ""){
                    document.getElementById("rel_ed").focus();
                    
                    swal("Oops!","Please Enter Relation type","error");
                    return false;
                    }
    
    
    // Gender
    
    var  genfemale_1= document.getElementById("genmale_nominee_ed").checked;
    // alert("rd check"+genfemale)
    var genmale_2=document.getElementById("genfemale_nominee_ed").checked;
    // alert("rd check"+genmale)
    // alert((genfemale && genmale)==false)
    if((genfemale_1 || genmale_2)==false){
   
                    document.getElementById("genmale_nominee_ed").focus();
                    
                    swal("Oops!","Please Enter Gender","error");
                    return false;
                    }
    
    // Occupation
    
    var  occup_ed= document.getElementById("occup_ed").value;
    if(occup_ed == ""){
                    document.getElementById("occup_ed").focus();
                    
                    swal("Oops!","Please Enter Occupation","error");
                    return false;
                    }
                
    // Date Of Birth
    
    var date_ob2 = document.getElementById("date_ob_ed").value;
    if(date_ob2 == ""){
            document.getElementById("date_ob_ed").focus();
            
            swal("Oops!","Please Enter Date Of Birth","error");
                    return false;
                    }
    
    //account number
    
    var ac_num_ed = document.getElementById("ac_num_ed").value;
    if(ac_num_ed == ""){
            document.getElementById("ac_num_ed").focus();
            
            swal("Oops!","Please enter account number","error");
                    return false;
                    }
    
    // address type
    
    var addr_type_ed = document.getElementById("addr_type_ed").value;
    if(addr_type_ed == ""){
            document.getElementById("addr_type_ed").focus();
            
            swal("Oops!","Please Enter address type","error");
                    return false;
                    }
    
    // address type
    
    var addr_line_ed = document.getElementById("addr_line_ed").value;
    if(addr_line_ed == ""){
            document.getElementById("addr_line_ed").focus();
            
            swal("Oops!","Please Enter address line","error");
                    return false;
                    }
    
    // village
    
    var vilge_ed = document.getElementById("vilge_ed").value;
    if(vilge_ed == ""){
            document.getElementById("vilge_ed").focus();
            
            swal("Oops!","Please Enter village","error");
                    return false;
                    }
    
    // panchayat
    
    var panch_ed = document.getElementById("panch_ed").value;
    if(panch_ed == ""){
            document.getElementById("panch_ed").focus();
            
            swal("Oops!","Please Enter panchayat","error");
                    return false;
                    }
    
    // dist/city
    
    var distcity_ed = document.getElementById("distcity_ed").value;
    if(distcity_ed == ""){
            document.getElementById("distcity_ed").focus();
            
            swal("Oops!","Please Enter district/city","error");
                    return false;
                    }
    
    // state
    
    var stat1_ed = document.getElementById("stat1_ed").value;
    if(stat1_ed == ""){
            document.getElementById("stat1_ed").focus();
            
            swal("Oops!","Please select state","error");
                    return false;
                    }
    
    // country
    
    var countr_ed = document.getElementById("countr_ed").value;
    if(countr_ed == ""){
            document.getElementById("countr_ed").focus();
            
            swal("Oops!","Please select country","error");
                    return false;
                    }
    
    // pincode
    
    var pin_cd_ed = document.getElementById("pin_cd_ed").value;
    if(pin_cd_ed == ""){
            document.getElementById("pin_cd_ed").focus();
            
            swal("Oops!","Please Enter pincode","error");
                    return false;
                    }
        else
                    {
       
                            if(pin_cd_ed.length < 6){
                            document.getElementById("pin_cd_ed").focus();
                            
                            swal("Invalid","Please Enter valid Pin Code","warning");
                               return false;
                               }
                       }
    
    // Phone no
    
    var phone_no_ed = document.getElementById("phone_no_ed").value;
    if(phone_no_ed == ""){
            document.getElementById("phone_no_ed").focus();
            
            swal("Oops!","Please Enter Phone Number","error");
                    return false;
                    }
                    else
             {

                     if(phone_no_ed.length < 10){
                     document.getElementById("phone_no_ed").focus();
                     
                     swal("Invalid","Please Enter valid Phone Number","warning");
                        return false;
                        }
                }
    
    
                    
    // email
    
       var email_ed = document.getElementById("email_ed").value;
       if(email_ed !=""){
      var mail_id_1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (mail_id_1.test(email_ed)==false)
                    {
            
                            document.getElementById("email_ed").focus();
                            
                            swal("Oops!","Please Enter a Valid E-mail ID","error");
                            return false;
                     }
                    }
    
    // AADHAR Number
    var adh_no_ed = document.getElementById("adh_no_ed").value;
    if(adh_no_ed == ""){
                    document.getElementById("adh_no_ed").focus();
                    
                    swal("Oops!","Please Enter AADHAR Number","error");
                    return false;
             }
    
    else
    {
            if (adh_no_ed.length < 12)
            {
                    document.getElementById("adh_no_ed").focus();
                    
                    swal("Invalid","Please Enter Valid AADHAR Number","warning");
                    return false;
             }
                    
    
            //var adhar_no = document.getElementById("adhar_no").value;
            var validsen_1 = /[0-9]{12}/;
            if (validsen_1.test(adh_no)==false)
            {
                    document.getElementById("adh_no_ed").focus();
                    
                    swal("Invalid","Please Enter Valid AADHAR Number","warning");
                    return false;
             }
    }
     
    
          
    // Is Society Member
    
    var ism_ed = document.getElementById("ism_ed").value;
    if(ism_ed == ""){
            document.getElementById("ism_ed").focus();
            
            swal("Oops!","Please Enter Is Society Member","error");
                    return false;
                    }          
    
                        document.getElementById('memberform_ed').submit();
}
////////////////////////////////////////////////

function viewMembers(){
    $('#tabs a[href=#personal_details]').tab('show').addClass("active");
    $('#tabs a[href=#member_details]').removeClass("active");
}

function viewPersonaldetails(){
    $('#tabs a[href=#present_address]').tab('show').addClass("active");
    $('#tabs a[href=#personal_details]').removeClass("active");
}

function viewPermanentAddress(){
$('#tabs a[href=#permanent_address]').tab('show').addClass("active");
$('#tabs a[href=#present_address]').removeClass("active");
}

function viewPresentAddress(){
$('#tabs a[href=#loans]').tab('show').addClass("active");
$('#tabs a[href=#permanent_address]').removeClass("active");
}

function viewLoans(){
$('#tabs a[href=#nominee]').tab('show').addClass("active");
$('#tabs a[href=#loans]').removeClass("active");                                            
}


/////////////////////////////////////////////////

function member_edit_row(oObject)
{
//alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
 var rb1=document.getElementById("rf"+id).value;
//alert("radio button value"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();
// alert(idchecked);

var memb_id=document.getElementById('radiobutton1rfed'+idchecked).value;
//alert("cheque ID -----------------------"+memb_id);

document.getElementById("tempmemberid").value=memb_id;
document.getElementById("edit_mem_data_load_form").submit();
}

/////////////////////////////////////////////

function member_view_row(oObject)
{
//alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 

 var rb1=document.getElementById("vf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;

var idchecked2=$("input[name='radiobutton1rfvw']:checked").val();
 //alert("idchecked"+idchecked2);


var memb_view_id=document.getElementById('vfvw'+idchecked2).value;
//alert("MEMBER ID -----------------------"+memb_view_id);

document.getElementById("tempviewmemberid").value=memb_view_id;
document.getElementById("view_mem_data_load_form").submit();
}

///////////////////////////////////////////

function member_delete_row(oObject)
{
// alert(oObject)
var id = oObject.id;
// alert("This object's ID attribute is set to \"" + id + "\"."); 

 var rb1=document.getElementById("df"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfdl"+rb1).checked=true;

var idchecked5=$("input[name='radiobutton1rfdl']:checked").val();
// alert("idchecked"+idchecked5);

var memb_del_id=document.getElementById('dfdl'+idchecked5).value;
//alert("member ID -----------------------"+memb_del_id);

document.getElementById("tempmemberdeleteid").value=memb_del_id;
}

//////////////////////////////////////

function delete_member_onconfirm()
{
document.getElementById("delete_member_data_load_form").submit();
}
/////////////////////////////////////

function reset_memsearch()
{
    document.getElementById("mem_sch_member_id").value='';
    document.getElementById("mem_sch_department").value='';
}



/////////////////////////////////Member Details End////////////////////////////////////////

//title shifting
function setDefault(check) {
    document.getElementById("radio-" + check.value).checked = true;
    
}
/*farm machinery-start*/
function memberFarmMachineryValidation(){

 //select member
    
 var selt_mem = document.getElementById("mem_sel").value;
 if(selt_mem == ""){
         document.getElementById("mem_sel").focus();
         
         swal("Oops!","Please Select Member","error");
                 return false;
                 }


    
 var vehiclename = document.getElementById("vehiclename").value;
 if(vehiclename == ""){
         document.getElementById("vehiclename").focus();
       
         swal("Oops!","Please Enter Vehicle Number","error");
                 return false;
                 }


    
 var vehicle_reg_num = document.getElementById("vehicle_reg_num").value;
 if(vehicle_reg_num == ""){
         document.getElementById("vehicle_reg_num").focus();
        
         swal("Oops!","Please Enter Vehicle Register Number","error");
                 return false;
                 }


    
 var yearofpurchase = document.getElementById("yearofpurchase").value;
 if(yearofpurchase == ""){
         document.getElementById("yearofpurchase").focus();
         
         swal("Oops!","Please Enter Year of Purchase","error");
                 return false;
                 }


 var vehicledescription = document.getElementById("vehicledescription").value;
 if(vehicledescription == ""){
         document.getElementById("vehicledescription").focus();
         
         swal("Oops!","Please Enter Vehicle Description","error");
                 return false;
                 }


    
 var purchase_value = document.getElementById("purchase_value").value;
 if(purchase_value == ""){
         document.getElementById("purchase_value").focus();
         
         swal("Oops!","Please enter Purchase Value ","error");
                 return false;
                 }


 var market_value = document.getElementById("market_value").value;
 if(market_value == ""){
         document.getElementById("market_value").focus();
         
         swal("Oops!","Please Enter Market Value ","error");
                 return false;
                 }


                 document.getElementById('farmmach_add_form').submit();
}
function edit_farm_machinery(oObject)
{

var id = oObject.id;
// alert("This object's ID attribute is set to \"" + id + "\"."); 

 var rb1=document.getElementById("rf"+id).value;

document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();

var farm_ma_id=document.getElementById('farmmachinery2'+idchecked).value;
//alert("machinery ID -----------------------"+farm_ma_id);

document.getElementById("farmmachinery_ed_id").value=farm_ma_id;

document.getElementById("edit_data_load_form").submit();
}


function form_mechinary_clearform()
{
    document.getElementById('memberid_ed').value='';
    document.getElementById('vehiclename_ed').value='';

    document.getElementById('vehicle_reg_num_ed').value='';

    document.getElementById('yearofpurchase_ed').value='';

    document.getElementById('vehicledescription_ed').value='';

    document.getElementById('purchase_value_ed').value='';
    document.getElementById('market_value_ed').value='';

}

function view_farm_machinery(oObject)
{
    
var id = oObject.id;

var rb1=document.getElementById("vf"+id).value;
document.getElementById("radiobutton1rfvw"+rb1).checked=true;

var idchecked1=$("input[name='radiobutton1rfvw']:checked").val();


var farm_ma_id=document.getElementById('farmmachinery2'+idchecked1).value;

document.getElementById("farmmachinery_vw_id").value=farm_ma_id;
document.getElementById("viewdata_load_form").submit();
}

function delete_farm_machinery(oObject)
{
var id = oObject.id;
// alert("This object's ID attribute is set to \"" + id + "\"."); 
 var rb1=document.getElementById("vf"+id).value;
document.getElementById("radiobutton1dl"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1dl']:checked").val();
 //alert(idchecked);
var farm_ma_id=document.getElementById('farmmachinery3'+idchecked).value;

document.getElementById("farmmachinery_dl_id").value=farm_ma_id;

}
function delete_farm_machinery_onconfirm(){
document.getElementById("delete_load_form").submit();

}


function resetform_farmmachinery(){
    document.getElementById('mem_sel').value='';
    document.getElementById('vehiclename1').value='';
}
/*farm machinery-end*/


/*MEMBER DIVIDEND -START*/
function years(empcd)
{
var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
if (charCode != 45 && charCode > 31 
&& (charCode < 48 || charCode > 57))
return false;
return true;
}
   function formValidations_memberdividend()
  {


    var Select_member = document.getElementById("div_sel").value;

    if(Select_member == "")

   {
        document.getElementById("div_sel").focus();
        swal("Oops!","Please Select Member","error");
       return false;

  }
    // var Financial_Year = document.getElementById("opn_shr_bal").value;
    // if(Financial_Year == "")

    // {
    //      document.getElementById("opn_shr_bal").focus();
    //      swal("Oops!","Please Enter the year","error");
    //      return false;



    // }

    var Financial_Year = document.getElementById("opn_shr_bal").value;
if(Financial_Year == ""){
document.getElementById("opn_shr_bal").focus();
swal("Oops!","Please Enter the year","error");
return false;
}

else{
var year= /([0-9]){4}([-]){1}([0-9]){4}/;
if (!year.test(Financial_Year)){

document.getElementById("opn_shr_bal").focus();
swal("Oops!","Please Enter valid year","error");
return false;
}


}



    var Number_Of_Shares = document.getElementById("ent_fee1").value;

    if(Number_Of_Shares == "")

   {
        document.getElementById("ent_fee1").focus();
        swal("Oops!","Please Enter the Number Of Shares","error");
       return false;

  }


  var Number_Of_Shares_Included = document.getElementById("no_f_shr_inc").value;

    if(Number_Of_Shares_Included== "")

   {
        document.getElementById("no_f_shr_inc").focus();
        swal("Oops!","Please Enter the Number Of Shares Include","error");
       return false;


   }




   var Share_Fee = document.getElementById("ent_fee2").value;

  if(Share_Fee == "")

  {
      document.getElementById("ent_fee2").focus();
      swal("Oops!","Please Enter the Share Fee","error");
     return false;


  }


  var Share_Capital = document.getElementById("opn_shr_bal1").value;

  if(Share_Capital == "")

  {
      document.getElementById("opn_shr_bal1").focus();
      swal("Oops!","Please Enter the Share Capital","error");
     return false;


  }


  var Dividend_Amount = document.getElementById("ent_fee3").value;

  if(Dividend_Amount == "")

  {
      document.getElementById("ent_fee3").focus();
      swal("Oops!","Please Enter the Dividend Amount","error");
     return false;


  }



  var Dividend_Arrears = document.getElementById("opn_shr_bal2").value;

  if(Dividend_Arrears == "")

  {
      document.getElementById("opn_shr_bal2").focus();
      swal("Oops!","Please Enter the Dividend Arrears","error");
     return false;


  }



  var Dividend_Payable = document.getElementById("ent_fee4").value;

  if(Dividend_Payable == "")

  {
      document.getElementById("ent_fee4").focus();
      swal("Oops!","Please Enter the Dividend Payable","error");
     return false;

  }


  var Other_Income = document.getElementById("opn_shr_bal3").value;

  if(Other_Income == "")

  {
      document.getElementById("opn_shr_bal3").focus();
      swal("Oops!","Please Enter the Other Income","error");
     return false;


  }




  var Total_Diviodend_Payable = document.getElementById("ent_fee5").value;

  if(Total_Diviodend_Payable == "")

  {
      document.getElementById("ent_fee5").focus();
      swal("Oops!","Please Enter the Total Dividend Payable","error");
     return false;


  }


  var Final_Amount = document.getElementById("opn_shr_bal4").value;

  if(Final_Amount == "")

  {
      document.getElementById("opn_shr_bal4").focus();
      swal("Oops!","Please Enter the Final Amount","error");
     return false;
  }
   document.getElementById("divv").submit();



  }

function edit_row_memdiv(oObject)
{
// alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("rf"+id).value;
//  alert("radio button value"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);


var member_id=document.getElementById('memberid1'+idchecked).value;
//alert("BANK ID -----------------------"+member_id);

document.getElementById("tempmemberid").value=member_id;

document.getElementById("edit_data_load_form").submit();
}

function mem_div_clearform()
{
    document.getElementById('memberid_ed').value='';
    document.getElementById('opn_shr_bal_ed11').value='';

    document.getElementById('ent_fee_ed').value='';
    document.getElementById('opn_shr_bal_ed').value='';

    document.getElementById('ent_fee_ed1').value='';

    document.getElementById('opn_shr_bal_ed1').value='';

    document.getElementById('ent_fee_ed2').value='';

    document.getElementById('opn_shr_bal_ed2').value='';

    document.getElementById('ent_fee_ed3').value='';
    document.getElementById('opn_shr_bal_ed3').value='';
    document.getElementById('ent_fee_ed4').value='';

    document.getElementById('opn_shr_bal_ed4').value='';




}
function view_row_memdiv(oObject)
{
    // alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 

var rb1=document.getElementById("vf"+id).value;
 //alert("vb"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;

var idchecked1=$("input[name='radiobutton1rfvw']:checked").val();
 //alert("idchecked"+idchecked1);


var member_id=document.getElementById('memberid2'+idchecked1).value;
 //alert("BANK ID -----------------------"+member_id);

document.getElementById("tempmemberid1").value=member_id;
document.getElementById("viewdata_load_form").submit();
}

function delete_row_memdiv(oObject)
{
// alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("vf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1dl"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1dl']:checked").val();
 //alert(idchecked);


var member_id=document.getElementById('memberid3'+idchecked).value;
//alert("BANK ID -----------------------"+member_id);

document.getElementById("tempmemberid2").value=member_id;
// document.getElementById("delete_load_form").submit();
}

function delete_mem_divedend_onconfirm(){
    // document.getElementById("delete_share_form").submit();

    document.getElementById("delete_memdiv_form").submit();

      
      }     


/*MEMBER DIVIDEND -END*/


/*KCC DETAILS -START*/
function edit_row(oObject)
{
// alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("rf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);


var member_id=document.getElementById('memberid1'+idchecked).value;
//alert("MEMBER ID -----------------------"+member_id);

document.getElementById("tempmemberid_edit_kcc").value=member_id;
document.getElementById("kcc_edit_data_load_form").submit();
}


function view_row(oObject)
{
    // alert(oObject)
var id = oObject.id;
 //alert("This object's ID attribute is set to kkkkkkk \"" + id + "\"."); 

var rb1=document.getElementById("vf"+id).value;
 //alert("vb"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;

var idchecked1=$("input[name='radiobutton1rfvw']:checked").val();
 //alert("idchecked"+idchecked1);


var member_id=document.getElementById('memberid2'+idchecked1).value;
 //alert("BANK ID -----------------------"+member_id);

document.getElementById("tempmemberid_view_kcc").value=member_id;
document.getElementById("edit_viewdata_load_form1").submit();
}


function delete_row(oObject)
{
// alert(oObject)
var id = oObject.id;
// alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("vf"+id).value;
// alert("radio button value"+rb1)
document.getElementById("radiobutton1rfdl"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfdl']:checked").val();
 //alert(idchecked);


var member_id=document.getElementById('memberid3'+idchecked).value;
//alert("MEMBER ID -----------------------"+member_id);

document.getElementById("kcc_dl_id").value=member_id;
//document.getElementById("kcc_delete_load_form").submit();
}
function confirm_delete_kccrec(){
    document.getElementById("kcc_delete_load_form").submit();
    
    }
function resetform_memdiv(){
   
   document.getElementById("opn_shr_bal1").value='';
   document.getElementById("opn_shr_bal").value='';
}
///////validations kcc/////

function KccValidation(){
var select_mem = document.getElementById("div_sel_kcc").value;
                                    if(select_mem == ""){
                                                    document.getElementById("div_sel_kcc").focus();
                                                    
                                                    swal("Oops!","Please Select Member Type","error");
                                                    return false;
                                                }

  var member_name = document.getElementById("mem_name").value;
                                                if(member_name == ""){
                                                 document.getElementById("mem_name").focus();
                                                 
                                                 swal("Oops!","Please Select Member Name","error");
                                                  return false;
                                                            }

   var iss_date = document.getElementById("kcc_from_date").value;
                                                     if(iss_date == ""){
                                                         document.getElementById("kcc_from_date").focus();
                                                        
                                                          swal("Oops!","Please Select Issued Date From","error");
                                                            return false;
                                                                        }
                                                            
var   todate= document.getElementById("kcc_to_date").value;
                                           if(todate== ""){
                                                         document.getElementById("kcc_to_date").focus();
                                                          
                                                              swal("Oops!","Please Select Issued Date To","error");
                                                                     return false;
                                                                  }

  var card_number = document.getElementById("card_num").value;
                                    if(card_number == ""){
                                                               document.getElementById("card_num").focus();
                                                               
                                                                swal("Oops!","Please Select Card Number","error");
                                                                return false;
                                                             }
                                                            

                                                             document.getElementById("kccadd").submit();
                                                            }



//////////////////////////////////////////////


function kcc_edit_validation(){
    var select_mem = document.getElementById("memid_kcc_ed").value;
                                        if(select_mem == ""){
                                                        document.getElementById("memid_kcc_ed").focus();
                                                        
                                                        swal("Oops!","Please Select Member Type","error");
                                                        return false;
                                                    }
    
      var member_name = document.getElementById("mem_name2").value;
                                                    if(member_name == ""){
                                                     document.getElementById("mem_name2").focus();
                                                     
                                                     swal("Oops!","Please Select Member Name","error");
                                                      return false;
                                                                }
    
       var iss_date = document.getElementById("kcc_from_date_ed").value;
                                                         if(iss_date == ""){
                                                             document.getElementById("kcc_from_date_ed").focus();
                                                            
                                                              swal("Oops!","Please Select Issued Date From","error");
                                                                return false;
                                                                            }
                                                                
    var   todate= document.getElementById("kcc_to_date_ed").value;
                                               if(todate== ""){
                                                             document.getElementById("kcc_to_date_ed").focus();
                                                              
                                                                  swal("Oops!","Please Select Issued Date To","error");
                                                                         return false;
                                                                      }
    
      var card_number = document.getElementById("card_num2").value;
                                        if(card_number == ""){
                                                                   document.getElementById("card_num2").focus();
                                                                   
                                                                    swal("Oops!","Please Select Card Number","error");
                                                                    return false;
                                                                 }
                                                                
    
                                                                 document.getElementById("kcc_edit").submit();
                                                                }






function resetform_kcc()
			{
        document.getElementById("mem_name1").value="";
        document.getElementById("card_num1").value="";
				// document.getElementById("kcc_form").reset();
			}


            
function clearKccEdit()
{ 
    document.getElementById('memid_kcc_ed').value="";
    document.getElementById('mem_name2').value="";
    document.getElementById('kcc_from_date_ed').value="";
    document.getElementById('kcc_to_date_ed').value="";
    document.getElementById('card_num2').value="";
   
}
/*KCC DETAILS -END*/


/* Member SHARE DETAILS- START*/

function mem_share_clearform(){

document.getElementById('divmemid_ed').value='';
document.getElementById('shr_date_ed').value='';

document.getElementById('do_brd_mtg_ed').value='';

document.getElementById('opn_shr_bal_ed').value='';

document.getElementById('meeting_details_ed').value='';

document.getElementById('opn_shr_bal1_ed2').value='';

document.getElementById('ent_fee2_ed3').value='';

document.getElementById('opn_shr_bal2_ed3').value='';

document.getElementById('ent_fee3_ed').value='';

document.getElementById('opn_shr_bal3_ed').value='';

document.getElementById('ent_fee4_ed').value='';

document.getElementById('opn_shr_bal4_ed').value='';

document.getElementById('ent_fee5_ed').value='';

document.getElementById('opn_shr_bal5_ed').value='';

document.getElementById('ent_fee6_ed').value='';
document.getElementById('opn_shr_bal6_ed').value='';

document.getElementById('ent_fee7_ed').value='';

document.getElementById('exampleFormControlTextarea3').value='';
document.getElementById('ent_fee1_ed2').value='';



}

function edit_sharerow(oObject)
{
    // alert("share edit")
    var id = oObject.id;
    // alert("This object's ID attribute is set to share \"" + id + "\"."); 
   
   var rb1=document.getElementById("rf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton1sharev"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton1sharev']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var member_share_id=document.getElementById('memberidshare1'+idchecked1).value;
    // alert("BANK ID -----------------------"+member_share_id);
   
   document.getElementById("tempshareid").value=member_share_id;
   document.getElementById("edit_share_data_load_form").submit();
   }


   function view_sharerow(oObject)
{
    // alert("share view")
    var id = oObject.id;
    // alert("This object's ID attribute is set to share \"" + id + "\"."); 
   
   var rb1=document.getElementById("vf"+id).value;
    // alert("vb"+rb1)
   document.getElementById("radiobutton2sharev"+rb1).checked=true;
   
   var idchecked1=$("input[name='radiobutton2sharev']:checked").val();
    // alert("idchecked"+idchecked1);
   
   
   var member_share_id=document.getElementById('memberidshare2'+idchecked1).value;
    // alert("BANK ID -----------------------"+member_share_id);
   
   document.getElementById("tempshareid1").value=member_share_id;
   document.getElementById("view_sharedata_load_form").submit();
   }


   function delete_sharerow(oObject)
   {
    //    alert("share view")
       var id = oObject.id;
    //    alert("This object's ID attribute is set to share \"" + id + "\"."); 
      
      var rb1=document.getElementById("vf"+id).value;
    //    alert("vb"+rb1)
      document.getElementById("radiobutton3sharev"+rb1).checked=true;
      
      var idchecked1=$("input[name='radiobutton3sharev']:checked").val();
    //    alert("idchecked"+idchecked1);
      
      
      var member_share_id=document.getElementById('memberidshare2'+idchecked1).value;
    //    alert("BANK ID -----------------------"+member_share_id);
      
      document.getElementById("tempshareid2").value=member_share_id;
     // document.getElementById("delete_share_form").submit();
    }
    
    function delete_share_detail_onconfirm(){
      document.getElementById("delete_share_form").submit();
    }
    
                                                              
function resetform_mem_share()
			{
        document.getElementById("opn_shr_bal").value="";
        document.getElementById("opn_shr_balshare").value="";
        document.getElementById("shr_sch_frm_date").value="";
        document.getElementById("shr_sch_to_date").value="";
				// document.getElementById("kcc_form").reset();
			}
/* Member SHARE DETAILS- END*/


/* MEMBER HOUSE DETAILS- START*/

/////////////////////////////////MEMBER_HOUSE_DETAILS//////////////////////////////////////////////
function house_edit_clearform()
{

    document.getElementById('mem_ed').value=''
    document.getElementById('house_num_ed').value=''
    document.getElementById('add_line1_ed').value=''
    document.getElementById('village_ed').value=''
    document.getElementById('city_ed').value=''
    document.getElementById('hsestate_ed').value=''
    document.getElementById('pincode_ed').value=''
    document.getElementById('desc_ed').value=''
    document.getElementById('area_ed').value=''
    document.getElementById('market_value_ed').value=''

}

function memberHouseDetails(){

 //select member
    
 var selt_mem = document.getElementById("selt_mem").value;
 if(selt_mem == ""){
         document.getElementById("selt_mem").focus();
         
         swal("Oops!","Please Select Member","error");
                 return false;
                 }

 //house number
    
 var house_num = document.getElementById("house_num").value;
 if(house_num == ""){
         document.getElementById("house_num").focus();
       
         swal("Oops!","Please Enter House Number","error");
                 return false;
                 }

//Address Line 1
    
 var add_line = document.getElementById("add_line").value;
 if(add_line == ""){
         document.getElementById("add_line").focus();
        
         swal("Oops!","Please Enter Address Line 1","error");
                 return false;
                 }

//Village/Town
    
 var vill_town = document.getElementById("vill_town").value;
 if(vill_town == ""){
         document.getElementById("vill_town").focus();
         
         swal("Oops!","Please Enter Village/Town","error");
                 return false;
                 }

//City
    
 var mem_city = document.getElementById("mem_city").value;
 if(mem_city == ""){
         document.getElementById("mem_city").focus();
         
         swal("Oops!","Please Select City","error");
                 return false;
                 }

//State 
    
 var house_state = document.getElementById("house_state").value;
 if(house_state == ""){
         document.getElementById("house_state").focus();
         
         swal("Oops!","Please Select State ","error");
                 return false;
                 }

//Pincode 
    
 var pincode = document.getElementById("pincode").value;
 if(pincode == ""){
         document.getElementById("pincode").focus();
         
         swal("Oops!","Please Enter Pincode ","error");
                 return false;
                 }

//Description 
    
 var description = document.getElementById("description").value;
 if(description == ""){
         document.getElementById("description").focus();
         
         swal("Oops!","Please Enter Description ","error");
                 return false;
                 }

//Builtup Area Sqft 
    
 var area_sqft = document.getElementById("area_sqft").value;
 if(area_sqft == ""){
         document.getElementById("area_sqft").focus();
         
         swal("Oops!","Please Enter Builtup Area Sqft ","error");
                 return false;
                 }

//Market Value 
    
 var market_value = document.getElementById("market_value").value;
 if(market_value == ""){
         document.getElementById("market_value").focus();
         
         swal("Oops!","Please Enter Market Value ","error");
                 return false;
                 }
                 document.getElementById('memberhouse').submit();
}


//edit_house_details///////////////////////////////////////////////////////////
function edit_house_row(oObject)
{
 //alert(oObject);
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("rf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfed"+rb1).checked=true;
var idchecked=$("input[name='radiobutton1rfed']:checked").val();
 //alert(idchecked);


var house_id=document.getElementById('radiobutton1rfed'+idchecked).value;
//alert("HOUSE_ID -----------------------"+house_id);

document.getElementById("temphouseid").value=house_id;
document.getElementById("edit_house_load_form").submit();
}


//view_house_details///////////////////////////////////////////////////////////
function view_house_row(oObject)
{
 //alert(oObject);
var id = oObject.id;
 //alert("This object's ID attribute is set to \"" + id + "\"."); 
//  alert(id.substring(0, str.indexOf("ed")));
 var rb1=document.getElementById("vf"+id).value;
 //alert("radio button value"+rb1)
document.getElementById("radiobutton1rfvw"+rb1).checked=true;
var idchecked1=$("input[name='radiobutton1rfvw']:checked").val();
 //alert(idchecked1);


var house_id=document.getElementById('radiobutton1rfvw'+idchecked1).value;
//alert("HOUSE_ID -----------------------"+house_id);

document.getElementById("temphouseid1").value=house_id;
document.getElementById("view_house_load_form").submit();
}

function  delete_house_row(oObject)
 {
    
    var id = oObject.id;
    // alert("This object's ID attribute is set to \"" + id + "\"."); 
  var rb1=document.getElementById("df"+id).value;
  //alert("rb1"+rb1)
  document.getElementById("radiobutton1rfdel"+rb1).checked=true;
      var idchecked2=$("input[name='radiobutton1rfdel']:checked").val();                                
   //alert(idchecked2);
    
    
  var del_id=document.getElementById('radiobutton1rfdel'+idchecked2).value;
   //alert("HOUSE ID -----------------------"+del_id)
  
  document.getElementById("temphouseid2").value=del_id;
  
  
 }

function delete_house_onconfirm(){
   
    document.getElementById("del_house_load_form").submit();
}

function resetform_housedetails(){
    document.getElementById('search_sel_mem').value='';
}


/* MEMBER HOUSE DETAILS- END*/
