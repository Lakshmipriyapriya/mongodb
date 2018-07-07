var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var Task=new Schema({
	 FirstName:  { 
	type: String,
	index: true
  },
  LastName:  { 
	type: String,
	index: true
  },
  Emailaddress:  { 
	type: String,
	index: true,
	required: true
  },
  Password:  { 
	type: String,
	index: true
  }
});
module.exports= mongoose.model('Task',Task);