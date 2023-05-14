import { Router } from 'express';
import { WalletController } from '../controllers/wallets-controller.js';
import { WalletService } from '../services/wallets-service.js';
import { WalletRepository } from '../repositories/wallet-repository.js';
// import { AccountRepository } from '../repositories/account-repository.js';

export class WalletRouter {
    constructor() {
        const route = Router();

        const walletRepository = new WalletRepository();
        const walletService = new WalletService(walletRepository);

        /** @type import("../controllers/wallet-controller").WalletController */
        const controller = new WalletController(walletService);

        route.get('/', controller.getAll);
        route.post('/accounts/:accountId/wallets', controller.create);
        // route.get('/:id', controller.getById);
        route.put('/:id', controller.update);
        // route.delete('/:id', controller.delete);

        return route;
    }
}