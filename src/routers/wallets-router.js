const controller = require('./controller');

const express = require('express');
const route = express.Router();

route.get('/', controller.GetWallets);
route.post('/', controller.CreateWallet);
route.get('/:walletId', controller.GetWalletById);
route.put('/:walletId', controller.UpdateWallet);
route.delete('/:walletId', controller.DeleteWallet);

module.exports = route;