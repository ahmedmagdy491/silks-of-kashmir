const express = require('express');
require('dotenv/config');
const colors = require('colors');
const connectDB = require('./config/database');
const app = express();
const port = process.env.PORT || 4000;
const { readdirSync } = require('fs');
const cors = require('cors');

connectDB();
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

// routes middleware
readdirSync('./routes').map((route) =>
	app.use('/api', require('./routes/' + route))
);

app.listen(port, () =>
	console.log(`server running ${port}`.yellow.underline.bold)
);
