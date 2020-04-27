const db = require('../database');
var crud = require('./crud.js');

class Employee {


  
  static  retrieveAll (callback) {
    crud.retrieveAll("*", "Employee", (employee) => {
      callback(employee);
    });
  }
    
    static insert (employee, callback) {
      let column = " name, lastname, admin_id, start_date, last_advance_date, statu_id, point_list sicil_no"
      let value = `${employee.name}, ${employee.lastname}, ${employee.admin_id}, ${employee.start_date}, 
                ${employee.last_advance_date}, ${employee.statu_id}, ${employee.point_list}, ${employee.sicil_no}`
      crud.insert(column, value, "Employee", (employee) => {
        callback(employee);
      });
    }

    static  delete (id, callback) {
      crud.delete(id, "Employee", (employee) => {
        callback(employee);
      });
    }

    static update (employee, callback) {
        let set = `name = ${employee.name}, lastname = ${employee.lastlastname}, admin_id = ${employee.admin_id}, s
                tart_date = ${employee.start_date}, last_advance_date = ${employee.last_advance_date}, statu_id = ${employee.statu_id}, 
                point_list = ${employee.point_list}, sicil_no =${employee.sicil_no}`
        crud.update(employee.id, "Employee", set, (employee) => {
        callback(employee);
      });
    }
    

}

module.exports = Employee;