import * as uuid from 'uuid';

export class Account {
    id;
    fullName;
    wallets;
    createdAt;
    updatedAt;
    deletedAt;

    constructor(data = {}) {
        Object.assign(this, data);
        this.id = uuid.v4();
    }
}