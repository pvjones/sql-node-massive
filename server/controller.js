const db = require('./massive');

console.log(Object.keys(db));

db.create_product([], function(err, result) {
  if (err) console.log(err);
  console.log('Initialized product table')
});

exports.addItem = (req, res, next) => {
  console.log('add item fired')
  db.add_product([
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageurl
    ], function(err, result) {
    if (err) {
      console.error(err);
      return res.send(err);
    } else {
      return res.send(result);
    }
  })
};

exports.updateItem = (req, res, next) => {
  db.update_product([
      req.params.id,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageurl
    ], function(err, result) {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

exports.getOne = (req, res, next) => {
  db.read_product([req.params.id], function(err, result) {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      res.send(result);
    }
  })
};

exports.getAll = (req, res, next) => {
  db.read_products([], function(err, result) {
    if (err) {
      console.error(err);
      return res.send(err);
    } else {
      return res.send(result)
    }
  })
};

exports.deleteItem = (req, res, next) => {
  db.delete_product([req.params.id], function(err, result) {
    if (err) {
      console.error(err);
      return res.send(err);
    } else {
      return res.send(`Item ${req.params.id} has been deleted`);
    }
  })
};



