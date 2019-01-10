const express = require('express');
const mongoose = require('mongoose');
const CloudInstance = require('../models/CloudProvider')
const router = express.Router();
// const CloudInstance = mongoose.model('CloudInstance');

router.get('/', (req, res) => {
  res.render('form', {
    title: 'Cloud Service Provider Registration form',
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const registration = new CloudInstance(req.body);
  registration.save()
    .then(() => {
      res.send('Thank you for registering your use of cloud!');
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

router.get('/cloudInstances', (req, res) => {
  CloudInstance.find()
    .then((cloudInstances) => {
      res.render('index', {
        title: 'Listing Cloud Instances',
        cloudInstances,
      });
    })
    .catch(() => {
      res.send('Sorry! Something went wrong.');
    });
});

module.exports = router;
