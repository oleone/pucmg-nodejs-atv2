require('dotenv').config()
const express = require('express')
const cors = require('cors');

const path = require('path');
const app = express();

const accountsRoute = require('./accounts/router');
const walletsRoute = require('./wallets/router');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/accounts', accountsRoute);
app.use('/wallets', walletsRoute);

app.listen(PORT);