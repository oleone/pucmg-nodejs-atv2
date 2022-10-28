require('dotenv').config()
const express = require('express')
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/app', express.static(path.join(__dirname, '/public')));

app.get('/wallets', (req, res) => { });

app.post('/wallets', (req, res) => { });

app.get('/wallets/:walletId', (req, res) => { });

app.put('/wallets/:walletId', (req, res) => { });

app.delete('/wallets/:walletId', (req, res) => { });

let port = process.env.PORT || 3000;
app.listen(port);