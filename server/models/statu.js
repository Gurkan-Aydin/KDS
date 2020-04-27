const db = require('../database');
var crud = require('./crud.js');

class Statu {


  
  static  retrieveAll (callback) {
    crud.retrieveAll("*", "Statu", (statu) => {
      callback(statu);
    });
  }
    
    static insert (statu, callback) {
      let column = " name, comment, criterion_id_list, criterion_weight_list"
      let value = `${statu.name}, ${statu.comment}, ${statu.criterion_id_list}, 
                ${statu.criterion_weight_list}`
      crud.insert(column, value, "Statu", (statu) => {
        callback(statu);
      });
    }

    static  delete (id, callback) {
      crud.delete(id, "Statu", (statu) => {
        callback(statu);
      });
    }

    static update (statu, callback) {
      let set = `name = ${statu.name}, comment = ${statu.comment}, 
            criterion_id_list = ${statu.criterion_id_list},
            criterion_weight_list = ${statu.criterion_weight_list}`
      crud.update(statu.id, "Statu", set, (statu) => {
        callback(statu);
      });
    }
    

}

module.exports = Statu;