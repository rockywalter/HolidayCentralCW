const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
 
  hotel_name:{type: String,required:true},
  destination: {type: String, required:true},
  checkInDate:{type:Date,required:true},
  checkOutDate:{type:Date,required:true},
  price:{type:Number,required:true},
  starRating:{type:Number},
  roomType:{type:String,required:true},
  boardBasis:{type:String,required:true}

}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;