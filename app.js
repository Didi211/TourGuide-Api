import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { axios, axiosTest } from './axiosConfig.js';
import routes from './routes/routes.js';
import places from './routes/places.js'
import dotenv from 'dotenv'

const app = express();

dotenv.config()

app.use(json());
app.use(urlencoded({extended : false}));
app.use(cors());

app.use('/api/routes', routes);
app.use('/api/places', places)

const port = 3000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});