var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    console.log("URL First Hit")
	res.render('login1');
    //  res.render('memberModule/memberAddDetails');
});



module.exports = router;