const db = require('../database');
var crud = require('./crud.js');

class Admin {


  
  static  retrieveAll (callback) {
    crud.retrieveAll("*", "Admin", (admin) => {
      callback(admin);
    });
  }
    
    static insert (admin, callback) {
      let column = " name, lastname, password, email"
      let value = `${admin.name}, ${admin.lastname}, ${admin.password}, ${admin.email}`
      crud.insert(column, value, "Admin", (admin) => {
        callback(admin);
      });
    }

    static  delete (id, callback) {
      crud.delete(id, "Admin", (admin) => {
        callback(admin);
      });
    }

    static update (admin, callback) {
      let set = `name = ${admin.name}, lastname = ${admin.lastname}, email = ${admin.email}, password = ${admin.password}`
      crud.update(admin.id, "Admin", set, (admin) => {
        callback(admin);
      });
    }
    

}

module.exports = Admin;