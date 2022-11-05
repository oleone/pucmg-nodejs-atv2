import { Account } from '../models/account.js';

export class AccountService {

    /** @type { import("../respositories/account-repository").AccountRepository } */
    repository;

    constructor(_repository) {
        this.repository = _repository;
    }

    getAllAccounts = async () => {
        return await this.repository.getAll();
    }

    getAccountById = async (id) => {
        return await this.repository.getById(id);
    }

    createAccount = async (data) => {
        try {
            const account = new Account({
                fullName: data.fullName,
                email: data.email,
                password: data.password
            })

            return await this.repository.create(account);
        } catch (err) {
            throw err;
        }
    }
}