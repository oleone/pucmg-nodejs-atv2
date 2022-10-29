const controller = require('./controller');

const express = require('express');
const route = express.Router();

route.get('/', controller.GetAccounts);
route.post('/', controller.CreateAccount);
route.get('/:accountId', controller.GetAccountById);
route.put('/:accountId', controller.UpdateAccount);
route.delete('/:accountId', controller.DeleteAccount);

module.exports = route;