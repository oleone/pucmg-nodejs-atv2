module.exports = {
    GetWallets: async () => {
        return {
            data: [
                {
                    id: 's5fs6fs3df1sdf5sd5fsd3f3s1'
                }
            ],
        }
    },
    GetWalletById: async (id) => {
        return {
            id
        }
    }
}