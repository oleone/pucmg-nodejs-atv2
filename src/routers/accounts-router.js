import { Router } from 'express';
import { AccountController } from '../controllers/accounts-controller.js';
import { AccountService } from '../services/accounts-service.js';
import { AccountRepository } from '../repositories/account-repository.js';

export class AccountRouter {
    constructor() {
        const route = Router();

        const accountRepository = new AccountRepository();
        const accountService = new AccountService(accountRepository);

        /** @type import("../controllers/account-repository").AccountRepository */
        const controller = new AccountController(accountService);

        route.get('/', controller.getAllAccounts);
        route.post('/', controller.createAccount);
        route.get('/:id', controller.getAccountById);
        // route.put('/:id', controller.updateAccount);
        // route.delete('/:id', controller.deleteAccount);

        return route;
    }
}