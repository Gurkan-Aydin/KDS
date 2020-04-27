const db = require('../database');
var crud = require('./crud.js');

class Criterion {


  
  static  retrieveAll (callback) {
    crud.retrieveAll("*", "Criterion", (criterion) => {
      callback(criterion);
    });
  }
    
    static insert (criterion, callback) {
      let column = "name, comment"
      let value = `${criterion.name}, ${criterion.comment}`
      crud.insert(column, value, "Criterion", (criterion) => {
        callback(criterion);
      });
    }

    static  delete (id, callback) {
      crud.delete(id, "Criterion", (criterion) => {
        callback(criterion);
      });
    }

    static update (criterion, callback) {
      let set = `name = ${criterion.name}, comment = ${criterion.comment}`
      crud.update(criterion.id, "Criterion", set, (criterion) => {
        callback(criterion);
      });
    }
    

}

module.exports = Criterion;