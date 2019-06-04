var express = require('express');
var router = express.Router();
var passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
var pgdbconnect=require('../../routes/database/pgdbconnect');
var pgdbconnecthrm=require('../../routes/database/pgdbconnect_hrm');
var User = require('../../userLoginMap/userLoginMap');

router.get('/dashboard',function(req,res){
    console.log("URL First Hit")
	res.render('dashboards/dashboard');
    //  res.render('memberModule/memberAddDetails');
});



module.exports = router;