var router = require('express').Router();
var crud = require('../models/crud.js');



router.get('/getByUsername/:username', (req, res) => {
  var username = req.params.username;
  crud.getByUsername(username, "Statu", (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});


router.post('/add', (req, res) => {
  var statu = req.body.statu;
  let column = " name, comment, criterion_id_list, criterion_weight_list"
  let value = `${statu.name}, ${statu.comment}, ${statu.criterion_id_list}, 
                ${statu.criterion_weight_list}`

  crud.insert(column, value, "Statu", (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.delete('/delete/:id', (req, res) => {
  var id = req.params.id;
    crud.delete(id, "Statu", (err, result) => {
        if (err)
          return res.json(err);
        return res.json(result);
    });
});

router.post('/update', (req, res) => {
    var statu = req.body.statu;
    let set = `name = ${statu.name}, comment = ${statu.comment}, 
    criterion_id_list = ${statu.criterion_id_list},
    criterion_weight_list = ${statu.criterion_weight_list}`
    
    crud.update(statu.id, "Statu", set, (err, result) => {
      if (err)
        return res.json(err);
      return res.json(result);
    });
});


module.exports = router;