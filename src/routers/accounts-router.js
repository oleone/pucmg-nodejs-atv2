import { Router } from 'express';
import { AccountController } from '../controllers/accounts-controller.js';

export class AccountRouter {
    constructor() {
        const route = Router();
        const controller = new AccountController();

        route.get('/', controller.GetAccounts);
        // route.post('/', controller.CreateAccount);
        // route.get('/:accountId', controller.GetAccountById);
        // route.put('/:accountId', controller.UpdateAccount);
        // route.delete('/:accountId', controller.DeleteAccount);

        return route;
    }
}