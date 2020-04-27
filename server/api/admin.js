var express = require('express');
var Admin = require('../models/admin.js');

var router = express.Router();

router.get('/', (req, res) => {
  Admin.retrieveAll((err, admin) => {
    if (err)
      return res.json(err);
    return res.json(admin);
  });
});

router.post('/', (req, res) => {
  var admin = req.body.admin;

  Admin.insert(admin, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;