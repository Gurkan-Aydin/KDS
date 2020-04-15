const db = require('../database');

class Admin {
    static retrieveAll (callback) {
        db.query('SELECT name from Admin', (err, res) => {
          if (err.error)
            return callback(err);
          callback(res);
        });
      }
    
      static insert (admin, callback) {
        db.query('INSERT INTO Admin (name) VALUES ($1)', [admin], (err, res) => {
          if (err.error)
            return callback(err);
          callback(res);
        });
      }

}