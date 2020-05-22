var router = require('express').Router();
var crud = require('../models/crud.js');



router.get('/getByUsername/:username', (req, res) => {
  var username = req.params.username;
  
  crud.getByUsername(username, "Admin", (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});


router.post('/add', (req, res) => {
  var admin = req.body.admin;
  let column = " name, lastname, password, email"
  let value = `${admin.name}, ${admin.lastname}, ${admin.password}, ${admin.email}`

  crud.insert(column, value, "Admin", (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.delete('/delete/:id', (req, res) => {
  var id = req.params.id;
    crud.delete(id, "Admin", (err, result) => {
        if (err)
          return res.json(err);
        return res.json(result);
    });
});

router.post('/update', (req, res) => {
    var admin = req.body.admin;
    let set = `name = ${admin.name}, lastname = ${admin.lastname}, email = ${admin.email}, password = ${admin.password}`
    crud.update(admin.id, "Admin", set, (err, result) => {
      if (err)
        return res.json(err);
      return res.json(result);
    });
});


module.exports = router;