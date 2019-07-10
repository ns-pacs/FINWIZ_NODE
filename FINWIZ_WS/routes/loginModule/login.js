var express = require('express');
var router = express.Router();
var passport = require('passport'),LocalStrategy = require('passport-local').Strategy;
var pgdbconnect=require('../../routes/database/pgdbconnect');
var pgdbconnecthrm=require('../../routes/database/pgdbconnect_hrm');
var User = require('../../userLoginMap/userLoginMap');





passport.use(new LocalStrategy(
function(username, password, done) 
{
  console.log("local strategy 1")


  User.getUserByUsername(username,function(err,user)
  {
    if(err) throw err     
    console.log("after 222",user) 
    if(user.rows == "")
     {
      console.log("user doesnt existssss")
      return done(null,false,{message:'Wrong User Id! Please Check'});
     }
    
   User.comparePassword(password,user.rows[0].ud_ch_password,function(err,isMatch)
   {
    console.log("compared pwds",password,user.rows[0].ud_ch_password) 
      if(err)throw err;
       console.log("after 333",isMatch) 
      if(isMatch){
        return done(null,user);
      } 
      else if(!isMatch){
         return done(null,false,{message:'Wrong Passcode! Please Try Again' });

      }

       
    });
          });
      }));



passport.serializeUser(function(user, done) {
  console.log("serializeUser");
  done(null, user.rows[0].ud_ch_emp_id);
});

passport.deserializeUser(function(user_id,done) 
{
   console.log("deserializeUser");
  User.getUserById(user_id, function(err, user) {
    done(err,user);
  });
  //console.log('checked1');
 });


router.post('/logincheck', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    console.log("within Login check");
      var empid=req.user.rows['0'].ud_ch_emp_id;
      var empname=req.user.rows['0'].ud_ch_emp_name;
      var password=req.user.rows['0'].ud_ch_password;
      var emailid=req.user.rows['0'].ud_ch_email_id;
      var roleid=req.user.rows['0'].ud_ch_role_id;
      var rolename=req.user.rows['0'].ud_ch_role_name
      console.log("Employee details on logincheck",empid,empname,password,emailid,roleid,rolename);



module.exports.empname="";
module.exports.empid="";
module.exports.emailid="";
module.exports.roleid="";
module.exports.rolename="";

   pgdbconnecthrm.query("SELECT ud_ch_login_allowed,ud_ch_emp_id,ud_ch_emp_name,ud_ch_password,ud_ch_email_id,ud_ch_role_id,ud_ch_role_name from user_details where ud_ch_emp_id = $1 and ud_ch_login_allowed=$2  and(ud_ch_del_flg=$3)",
                      [empid,'Y','N'],function(err,result){
       if(err) throw err;

         if(result.rows['0']!=null) 
      {    
           console.log("allow rendering");
    pgdbconnect.query("select * from common_code_tbl where code_id='CTY'",function(err,result1)
    {
        if(err) throw err;
        console.log("result1 is", result1);


    /*states*/

    // var state = req.body.state;                 
    // console.log(state);
    pgdbconnect.query("select * from common_code_tbl where code_id='STA'",function(err,result2) 
    {
        if(err) throw err;
        console.log("result2 is", result2);

    


    /*country*/

    // var country = req.body.country;                 
    // console.log(country);

    pgdbconnect.query("select * from common_code_tbl where code_id='CTRY'",function(err,result3)
    {
        if(err) throw err;
        console.log("result3 is", result3);

    res.render('dashboards/dashboard',{
        cities:result1.rows,
        states:result2.rows,
        countries:result3.rows
    });
    });
});

    });
  }
          else
  {
        req.flash('error_msg', 'Wrong Credentials ');
    res.locals.message=req.flash();
             // req.flash('error_msg','Credentials Locked');
              res.redirect('/');
        }
     });
  });

// router.post('/logincheck',function(req,res){
//   console.log("within Login check");
//          var userid=req.body.userid;
//          var password=req.body.pwd;
//          console.log("Entered User Id/ password -LOGIN",userid,password);

// })


module.exports=router;