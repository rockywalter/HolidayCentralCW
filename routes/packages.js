const router = require('express').Router();
let Package = require('../models/package.model');

router.route('/').get((req, res) => {
    Package.find()
    .then(packages => res.json(packages))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {


  const package_name = req.body.package_name;
  const destination = req.body.destination;
  const accomadation = req.body.accomadation;
  const numberOfDays = Number(req.body.numberOfDays);
  const numberOfTravelers = Number(req.body.numberOfTravelers);
  const price = Number(req.body.price);
  const packageRating = Number(req.body.packageRating);
  const specialty = req.body.specialty;
  



  const newPackage = new Package({
    package_name,
    destination,
    accomadation,
    numberOfDays,
    numberOfTravelers,
    price,
    packageRating,
    specialty
     
  });

  newPackage.save()
  .then(() => res.json('Package added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Package.findById(req.params.id)
    .then(Package => res.json(Package))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Package.findByIdAndDelete(req.params.id)
    .then(() => res.json('Package deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
    let PackageId = req.params.id;
    const {package_name,destination,accomadation,numberOfDays,numberOfTravelers,price,packageRating,specialty} = req.body;
    const updatePackage = {
        package_name,
        destination,
        accomadation,
        numberOfDays,
        numberOfTravelers,
        price,
        packageRating,
        specialty
    }
   const update = Package.findByIdAndUpdate(PackageId,updatePackage)
   .then(() => {
    res.status(200).send({status: "Package updated"})
   }).catch((err) =>{
    console.log(err)
   })
});



module.exports = router;