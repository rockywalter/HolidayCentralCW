const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.route('/').get((req, res) => {
    Hotel.find()
    .then(hotels => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
/*
  const departure_destination = req.body.departure_destination;
  const arrival_destination = req.body.arrival_destination;
  const departure_date = Date.parse(req.body.departure_date);
  const arrival_date = Date.parse(req.body.arrival_date);
  const cabin_class = req.body.cabin_class;
  const airline = req.body.airline;
  const price = Number(req.body.price);
  const duration = req.body.duration;
  const window_seat_count = Number(req.body.window_seat_count);
  const midddle_seat_count = Number(req.body.midddle_seat_count);
  */
  
  /*
  hotel_name:{type: String,required:true},
  destination: {type: String, required:true},
  checkInDate:{type:Date,required:true},
  checkOutDate:{type:Date,required:true},
  price:{type:Number,required:true}
  
  */

  const hotel_name = req.body.hotel_name;
  const destination = req.body.destination;
  const checkInDate = Date.parse(req.body.checkInDate);
  const checkOutDate = Date.parse(req.body.checkOutDate);
  const price = Number(req.body.price);



  const newHotel = new Hotel({
     hotel_name,
     destination,
     checkInDate,
     checkOutDate,
     price
  });

  newHotel.save()
  .then(() => res.json('Hotel added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Hotel.findById(req.params.id)
    .then(Hotel => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hotel deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Hotel.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Flight updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;