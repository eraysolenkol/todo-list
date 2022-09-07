import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import indexRoute from './routes/index';
import todoRoute from './routes/todo';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use('/',indexRoute);
app.use('/todo',todoRoute);

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
});