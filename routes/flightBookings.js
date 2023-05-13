const router = require('express').Router();
let FlightBookings = require('../models/flightBookings.model');

router.route('/').get((req, res) => {
    FlightBookings.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const passenger_name = req.body.passenger_name;
  const passenger_nic = req.body.passenger_nic;
  const flight_number = req.body.flight_number;
    const departure_destination = req.body.departure_destination;
    const arrival_destination = req.body.arrival_destination;
    const departure_date = req.body.departure_date;
    const arrival_date = req.body.arrival_date;
    const cabin_class = req.body.cabin_class;
    const airline = req.body.airline;
    const price = Number(req.body.price);
    const duration = req.body.duration;
    const window_seat_count = Number(req.body.window_seat_count);
    const seat_type = req.body.seat_type;
  
    const newFlightBooking = new FlightBookings({
    passenger_name,  
    passenger_nic,  
    flight_number,
    departure_destination,
    arrival_destination,
    departure_date,
    arrival_date,
    cabin_class,
    airline,
    price,
    duration,
    seat_type,
    });
  
    newFlightBooking.save()
    .then(() => res.json('Booking added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  



module.exports = router;