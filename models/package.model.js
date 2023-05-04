const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
 
  package_name:{type: String,required:true},
  destination: {type: String, required:true},
  accomadation: {type: String, required:true},
  numberOfDays:{type:Number,required:true},
  numberOfTravelers:{type:Number,required:true},
  price:{type:Number,required:true},
  packageRating:{type:Number},
  specialty:{type:String,required:true}

}, {
  timestamps: true,
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;