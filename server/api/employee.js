var router = require('express').Router();
var crud = require('../models/crud.js');



router.get('/getByAdminId/:id' , (req, res) => {
    let condition = `admin_id IN ('${req.params.id}')`
    crud.retrieve("Employee", condition, (err, result) => {
      if (err)
      return res.json(err);
    return res.json(result);
    });
});


router.post('/add', (req, res) => {
    let column = " name, lastname, admin_id, start_date, last_advance_date, statu_id, point_list sicil_no"
      let value = `${employee.name}, ${employee.lastname}, ${employee.admin_id}, ${employee.start_date}, 
                ${employee.last_advance_date}, ${employee.statu_id}, ${employee.point_list}, ${employee.sicil_no}`
      
  crud.insert(column, value, "Employee", (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

router.delete('/delete/:id', (req, res) => {
  var id = req.params.id;
    crud.delete(id, "Employee", (err, result) => {
        if (err)
          return res.json(err);
        return res.json(result);
    });
});

router.post('/update', (req, res) => {
    var employee = req.body.employee;
    let set = `name = ${employee.name}, lastname = ${employee.lastlastname}, admin_id = ${employee.admin_id}, s
                tart_date = ${employee.start_date}, last_advance_date = ${employee.last_advance_date}, statu_id = ${employee.statu_id}, 
                point_list = ${employee.point_list}, sicil_no =${employee.sicil_no}`
    crud.update(employee.id, "Employee", set, (err, result) => {
      if (err)
        return res.json(err);
      return res.json(result);
    });
});


module.exports = router;