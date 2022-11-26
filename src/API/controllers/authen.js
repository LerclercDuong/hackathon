const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = require('../models/users');


class authentication {
       register(req, res, next) {
          const info = req.body;
          bcrypt.hash(info.password, saltRounds).then(function(hash) {
        const user = new users({username: info.username, password:hash})
        user.save()
        res.status(200).json({message :' Register successfully'})
        });
       }
      
       signIn(req, res) {
           const info = req.body
           const username = info.username
           users.find({username})
           .then(function(users) {
            if(users){
                bcrypt.compare(req.body.password, users.password, function(err, result) {
                  if(result){
                    res.status(200).json({message : 'SignIn successfully'})
                  } else {
                    res.json({message : 'SignIn not successfully'})
                  } 
        });
            }else {
                    res.json({message : 'SignIn not successfully'})
                  }
           })
           
       }
       
}


module.exports = new authentication;