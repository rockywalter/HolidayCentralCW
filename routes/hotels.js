const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.route('/').get((req, res) => {
    Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/searchhotels').get((req, res) => {
    const { destination, checkingDate, checkoutDate,starRating } = req.query;

  
   

    const filter = {};

    if (destination) {
      filter.destination = destination;
    }
    if (checkingDate) {
      filter.checkInDate = checkingDate;
    }
    if (starRating) {
      filter.starRating = starRating;
    }
    if (checkoutDate) {
      filter.checkOutDate = checkoutDate;
    }
  
  
    async function fetchHotels() {
        try {
          const hotels = await Hotel.find(filter).exec();
          res.json(hotels);
        } catch (error) {
          console.error('Error fetching hotels:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    
      fetchHotels();


});

router.route('/add').post((req, res) => {

  const hotel_id = req.body.hotel_id;
  const hotel_name = req.body.hotel_name;
  const destination = req.body.destination;
  const checkInDate = req.body.checkInDate;
  const checkOutDate = req.body.checkOutDate;
  const price = Number(req.body.price);
  const starRating = Number(req.body.starRating);
  const roomType = req.body.roomType;
  const boardBasis = req.body.boardBasis;
  const facility = req.body.facility;



  const newHotel = new Hotel({
     hotel_id,
     hotel_name,
     destination,
     checkInDate,
     checkOutDate,
     price,
     starRating,
     roomType,
     boardBasis,
     facility
     
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
    const updateHotel = {
        hotel_name,
        destination,
        checkInDate,
        checkOutDate,
        price,
        starRating,
        roomType,
        boardBasis,
        facility
    }
   const update = Hotel.findByIdAndUpdate(hotelId,updateHotel)
   .then(() => {
    res.status(200).send({status: "hotel updated"})
   }).catch((err) =>{
    console.log(err)
   })
});



module.exports = router;