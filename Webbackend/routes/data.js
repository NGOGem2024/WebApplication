const router = require('express').Router();
let Data = require('../models/data.model');

router.route('/').get((req, res) => {
  Data.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const value = Number(req.body.value);

  const newData = new Data({
    name,
    value,
  });

  newData.save()
    .then(() => res.json('Data added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;