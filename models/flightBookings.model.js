const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FlightBookingsSchema = new Schema({
    passenger_name: { type: String, required: true },  
    passenger_nic: { type: String, required: true },  
  flight_number: { type: String, required: true },
  departure_destination: { type: String, required: true },
  arrival_destination: { type: String, required: true },
  departure_date: { type: Date, required: true },
  arrival_date: { type: Date, required: true },
  cabin_class: { type: String, required: true },
  airline: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  seat_type: { type: String, required: true },
  
}, {
  timestamps: true,
});

const FlightBookings = mongoose.model('FlightBookings', FlightBookingsSchema);

module.exports = FlightBookings;