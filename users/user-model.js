const db = require("../data/db-config.js");

module.exports = {
  all,
  findById,
  add,
  update,
  remove,
};

function all() {
  return db("users");
}

function findById(id) {
  return db("users").where("id", id).first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      return findById(ids[0]);
    });
}

/*
db('users') => a promise that resolves to a user
findById  => a promise that resolves to a user
add  => a promise that resolves to a user
post
*/

function update(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where({ id }).del();
}
