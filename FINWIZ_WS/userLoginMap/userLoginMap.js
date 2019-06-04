var bcrypt = require('bcryptjs');
var pgdbconnect=require('../routes/database/pgdbconnect_hrm');


module.exports.getUserByUsername = function(username,callback){
    console.log("getUserByUsername LOGIN222",username)
    
    var query=pgdbconnect.query("SELECT u.ud_n_emp_id,u.ud_ch_password,u.ud_ch_email_id,u.ud_ch_role_id, u.ud_ch_role_name, u.ud_ch_del_flg, u.ud_ch_entity_cre_flg, u.ud_ch_login_allowed FROM user_details u WHERE u.ud_n_emp_id = $1",[username],function(err,result){
      
        if(err) throw err;
        console.log('getUserByUsername LOGIN222',result.rows);
        callback(null,result);
    });
}
module.exports.getUserById = function(id,callback)
{
    
        pgdbconnect.query("SELECT u.ud_n_emp_id,u.ud_ch_password,u.ud_ch_role_id, u.ud_ch_role_name, u.ud_ch_del_flg, u.ud_ch_entity_cre_flg, u.ud_ch_login_allowed FROM user_details u WHERE u.ud_n_emp_id=$1",[id],function(err,result){
       //u.client_ip,u.session_id
        if(err) throw err;;   
        callback(err,result);
});
}

module.exports.comparePassword = function(candidatePassword,hash,callback ){
    console.log("comparing password while login",candidatePassword)
        console.log("comparing password while login hashed",hash)
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
         console.log("comparing password while login",candidatePassword)
         console.log("comparing password while login hashed",hash)
         console.log("pwd checking3")
         console.log("isMatch",isMatch)
 
    if(err) throw err;
       callback(null,isMatch);
   
});
}
