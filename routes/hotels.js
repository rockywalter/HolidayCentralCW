const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.route('/').get((req, res) => {
    Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {


  const hotel_name = req.body.hotel_name;
  const destination = req.body.destination;
  const checkInDate = Date.parse(req.body.checkInDate);
  const checkOutDate = Date.parse(req.body.checkOutDate);
  const price = Number(req.body.price);
  const starRating = Number(req.body.starRating);
  const roomType = req.body.roomType;
  const boardBasis = req.body.boardBasis;



  const newHotel = new Hotel({
     hotel_name,
     destination,
     checkInDate,
     checkOutDate,
     price,
     starRating,
     roomType,
     boardBasis
     
  });

  newHotel.save()
  .then(() => res.json('Hotel added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Hotel.findById(req.params.id)
    .then(Hotel => res.json(Hotel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hotel deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
    let hotelId = req.params.id;
    const {hotel_name,destination,checkInDate,checkOutDate,price,starRating,roomType,boardBasis} = req.body;
    const updateStudent = {
        hotel_name,
        destination,
        checkInDate,
        checkOutDate,
        price,
        starRating,
        roomType,
        boardBasis
    }
   const update = Hotel.findByIdAndUpdate(hotelId,updateStudent)
   .then(() => {
    res.status(200).send({status: "hotel updated"})
   }).catch((err) =>{
    console.log(err)
   })
});



module.exports = router;