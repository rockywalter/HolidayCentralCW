const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
 /* departure_destination: { type: String, required: true },
  arrival_destination: { type: String, required: true },
  departure_date: { type: Date, required: true },
  arrival_date: { type: Date, required: true },
  cabin_class: { type: String, required: true },
  airline: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  window_seat_count: { type: Number, required: true },
  midddle_seat_count: { type: Number, required: true },*/
  hotel_name:{type: String,required:true},
  destination: {type: String, required:true},
  checkInDate:{type:Date,required:true},
  checkOutDate:{type:Date,required:true},
  price:{type:Number,required:true}

}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;