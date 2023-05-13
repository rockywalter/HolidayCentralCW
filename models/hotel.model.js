const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
 
  hotel_id :{type: String,required:true},
  hotel_name:{type: String,required:true},
  destination: {type: String, required:true},
  checkInDate:{type:String,required:true},
  checkOutDate:{type:String,required:true},
  price:{type:Number,required:true},
  starRating:{type:Number},
  roomType:{type:String,required:true},
  boardBasis:{type:String,required:true},
  facility:{type:String,required:true}

}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;