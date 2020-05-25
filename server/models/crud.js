const db = require('../database');

class CRUD {
    static  retrieveAll (column, table, callback) {
        db.query(`SELECT ${column} from "KdsSchema"."${table}"`, (err, res) => {
          if (err.error)
            return callback(err.error); 
          callback(res);
        });
    }
    static getByUsername (username, table, callback) {
      db.query(`SELECT * FROM "KdsSchema"."${table}" WHERE username IN ('${username}')`, (err, res) => {
        if (err.error)
            return callback(err);
        callback(res);
      });
    }

    static  retrieve (table, condition, callback) {
        db.query(`SELECT * from "KdsSchema"."${table}" WHERE ${condition}`, (err, res) => {
          if (err.error)
            return callback(err);
          callback(res);
        });
    }
    
    static insert (column, value, table, callback) {
      db.query(`INSERT INTO "KdsSchema"."${table}" (${column}) VALUES (${value})`, (err, res) => {
        console.log(`INSERT INTO "KdsSchema"."${table}" (${column}) VALUES (${value})`)
        if (err.error)
            return callback(err);
        callback(true);
      });
    }

    static delete (id, table, callback) {
        db.query(`DELETE FROM "KdsSchema"."${table}" WHERE ${id}=${table}.id`, (err, res) => {
          if (err.error)
              return callback(err);
          callback(res);
        });
      }

      static update (username, table, set, callback) {
        db.query(`UPDATE "KdsSchema"."${table}" SET ${set} WHERE username='${username}'`, (err, res) => {
          if (err.error)
              return callback(err);
          callback(res);
        });
      }

}

module.exports = CRUD;