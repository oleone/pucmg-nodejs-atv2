const service = require('./service');

module.exports = {
    GetWallets: async (req, res) => {
        try {
            let wallets = await service.GetWallets();
            res.send(wallets).status(200);
        } catch (error) {
            res.send({ errorCode: 500, message: 'Internal server error' }).status(500);
        }
    },
    GetWalletById: async (req, res) => {
        const id = req.params['walletId'];
        let wallet = await service.GetWalletById(id);
        res.send(wallet).status(200);
    },
    CreateWallet: (req, res) => {
        res.send(true).status(200);
    },
    UpdateWallet: (req, res) => {
        res.send(true).status(200);
    },
    DeleteWallet: (req, res) => {
        res.send(true).status(200);
    }
}