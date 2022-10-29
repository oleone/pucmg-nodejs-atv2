const service = require('./service');

module.exports = {
    GetAccounts: async (req, res) => {
        try {
            let wallets = await service.GetAllWallets();
            res.send(wallets).status(200);
        } catch (error) {
            res.send({ errorCode: 500, message: 'Internal server error' }).status(500);
        }
    },
    GetAccountById: async (req, res) => {
        const id = req.params['walletId'];
        let wallet = await service.GetWalletById(id);
        res.send(wallet).status(200);
    },
    CreateAccount: (req, res) => {
        res.send(true).status(200);
    },
    UpdateAccount: (req, res) => {
        res.send(true).status(200);
    },
    DeleteAccount: (req, res) => {
        res.send(true).status(200);
    }
}