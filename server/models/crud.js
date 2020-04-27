const db = require('../database');

class CRUD {
    static  retrieveAll (column, table, callback) {
        db.query(`SELECT ${column} from "KdsSchema"."${table}"`, (err, res) => {
          if (err.error)
            return callback(err.error); 
          callback(res);
        });
    }

    static  retrieve (column, table, condition, callback) {
        db.query(`SELECT ${column} from "KdsSchema"."${table}" WHERE ${condition}`, (err, res) => {
          if (err.error)
            return callback(err);
          callback(res);
        });
    }
    
    static insert (column, value, table, callback) {
      db.query(`INSERT INTO "KdsSchema"."${table}" (${column}) VALUES (${value})`, (err, res) => {
        if (err.error)
            return callback(err);
        callback(res);
      });
    }

    static delete (id, table, callback) {
        db.query(`DELETE FROM ${table} WHERE ${id}=${table}.id`, (err, res) => {
          if (err.error)
              return callback(err);
          callback(res);
        });
      }

      static update (id, table, set, callback) {
        db.query(`UPDATE ${table} SET ${set} WHERE ${id}=${table}.id`, (err, res) => {
          if (err.error)
              return callback(err);
          callback(res);
        });
      }

}

module.exports = CRUD;