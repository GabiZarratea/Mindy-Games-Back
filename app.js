import 'dotenv/config.js';
import './config/db.js';
import express from 'express';
import path from 'path';
import logger from 'morgan'; 
import {__dirname} from './utils.js';
import indexRouter from './routes/index.js';
import cors from 'cors';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

let app = express(); 

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

app.use(cors());
app.use(logger('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/api', indexRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

export default app; 