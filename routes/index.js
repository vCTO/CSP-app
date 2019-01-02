const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CloudProvider = mongoose.model('CloudProvider');


router.get('/', (req, res) => {
  res.render('form', { title: 'Cloud Service Provider Registration form' });
})

router.post('/',  (req, res) => {
    console.log(req.body);
    const registration = new CloudProvider(req.body);
    registration.save()
    .then(() => {res.send('Thank you for your registration!'); })
//    .catch(() => {res.send('Sorry! Something went wrong.'); })
})

router.get('/registrations', (req, res) => {
    CloudProvider.find()
    .then((registrations) => {
        res.render('index', { title: 'Listing registrations', registrations });
    })
//  .catch(() = > {res.send('Sorry! Something went wrong.'); })
})

module.exports = router;

