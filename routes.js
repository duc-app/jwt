'use strict';
module.exports = function(app) {
  let usersCtrl = require('./controllers/UsersController');
  // todoList Routes
  app.route('/users')
    .get(usersCtrl.get)
    .post(usersCtrl.store);

  app.route('/users/:userId')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);

    app.route('/login')
    .post(usersCtrl.login);
};