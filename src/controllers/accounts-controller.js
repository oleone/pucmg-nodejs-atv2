export class AccountController {

    /** @type import("../services/accounts-service").AccountService */
    service;

    constructor(_service) {
        this.service = _service;
    }


    getAllAccounts = async (req, res) => {
        let account = await this.service.getAllAccounts();

        res.send(account).status(200);
    }

    createAccount = async (req, res) => {
        let payload = req.body;

        if (!payload.fullName || !payload.email || !payload.password) {
            return res.status(400).json({
                message: 'Payload is incorrect',
                status: 400,
            })
        }

        let walletCreated = await this.service.createAccount(payload);

        res.send(walletCreated).status(200);
    }

    getAccountById = async (req, res) => {
        const id = req.param.id;

        if (!id) {
            res.status(403);
        }

        const account = await this.service.getAccountById(id);
        res.send(account).status(200);
    }
}