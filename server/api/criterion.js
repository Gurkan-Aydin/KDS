var router = require('express').Router();
var crud = require('../models/crud.js');



router.get('/getAll', (req, res) => {
 return crud.retrieveAll(username, "Admin")
});


router.post('/add', (req, res) => {
    let column = "name, comment"
    let value = `${criterion.name}, ${criterion.comment}`

  crud.insert(column, value, "Criterion", (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.delete('/delete/:id', (req, res) => {
  var id = req.params.id;
    crud.delete(id, "Criterion", (err, result) => {
        if (err)
          return res.json(err);
        return res.json(result);
    });
});

router.post('/update', (req, res) => {
    var criterion = req.body.criterion;
    let set = `name = ${criterion.name}, comment = ${criterion.comment}`
    crud.update(criterion.id, "Criterion", set, (err, result) => {
      if (err)
        return res.json(err);
      return res.json(result);
    });
});


module.exports = router;