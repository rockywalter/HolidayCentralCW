const router = require('express').Router();
let Flight = require('../models/flight.model');

router.route('/').get((req, res) => {
    Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

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

  const newFlight = new Flight({
     departure_destination,
     arrival_destination,
     departure_date,
     arrival_date,
     cabin_class ,
     airline ,
     price,
     duration ,
     window_seat_count ,
     midddle_seat_count,
  });

  newFlight.save()
  .then(() => res.json('Flight added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Flight.findByIdAndDelete(req.params.id)
    .then(() => res.json('Flight deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Flight.findById(req.params.id)
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