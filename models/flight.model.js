const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  departure_destination: { type: String, required: true },
  arrival_destination: { type: String, required: true },
  departure_date: { type: Date, required: true },
  arrival_date: { type: Date, required: true },
  cabin_class: { type: String, required: true },
  airline: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  window_seat_count: { type: Number, required: true },
  midddle_seat_count: { type: Number, required: true },

}, {
  timestamps: true,
});

const Flight = mongoose.model('Filght', flightSchema);

module.exports = Flight;