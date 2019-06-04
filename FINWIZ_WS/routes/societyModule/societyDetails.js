var express = require('express');
var router = express.Router();

//Holiday List Add screen
router.get('/scty_holiday_lst_add',function(req,res){
    res.render('societyModule/scty_Holiday_Lst_Add');
 });

 //Holiday List Search screen
 router.get('/scty_holiday_lst_search',function(req,res){
    res.render('societyModule/scty_Holiday_Lst_Search');
 });

 //Department Add screen
 router.get('/scty_dept_add',function(req,res){
    res.render('societyModule/scty_Department_Add');
 });

 //Department Search screen
 router.get('/scty_dept_search',function(req,res){
    res.render('societyModule/scty_Department_Search');
 });

 //Bank Add screen
 router.get('/scty_bank_add',function(req,res){
    res.render('societyModule/scty_Bank_Add');
 });

 //Bank Search screen
 router.get('/scty_bank_search',function(req,res){
    res.render('societyModule/scty_Bank_Search');
 });

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

 //Account Scheme  Add screen
 router.get('/scty_acc_schm_add',function(req,res){
    res.render('societyModule/scty_Account_Scheme_Add');
 });

 //Account Scheme  Search screen
 router.get('/scty_acc_schm_search',function(req,res){
    res.render('societyModule/scty_Account_Scheme_Search');
 });

 //Account Type  Add screen
 router.get('/scty_acc_typ_add',function(req,res){
    res.render('societyModule/scty_Account_Type_Add');
 });

 //Account Type Search screen
 router.get('/scty_acc_typ_search',function(req,res){
    res.render('societyModule/scty_Account_Type_Search');
 });

 //Insurance Add screen
 router.get('/scty_insurance_add',function(req,res){
    res.render('societyModule/scty_Insurance_Add');
 });

 //Insurance Search screen
 router.get('/scty_insurance_search',function(req,res){
    res.render('societyModule/scty_Insurance_Search');
 });

 //KCC Target Add screen
 router.get('/scty_kcc_trgt_add',function(req,res){
    res.render('societyModule/scty_KCC_Target_Add',{
        pagetype:'ADD'
    });
 });

 //KCC Target Search screen
 router.get('/scty_kcc_trgt_search',function(req,res){
    res.render('societyModule/scty_KCC_Target_Search');
 });

 //KCC Credit Limit Add screen
 router.get('/scty_kcc_cr_lim_add',function(req,res){
    res.render('societyModule/scty_KCC_Credit_Limit_Add',{
       pagetype:'ADD'
 });
 });

 //KCC Credit Limit Search screen
 router.get('/scty_kcc_cr_lim_search',function(req,res){
    res.render('societyModule/scty_KCC_Credit_Limit_Search');
 });

 module.exports=router;