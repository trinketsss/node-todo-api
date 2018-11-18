var mongoose = require('mongoose');
//user model
var User = mongoose.model('User',{
  username:{
    type:String,
    trim:true,
    minlength:1,
    required:true
  }
});
module.exports = {User}
