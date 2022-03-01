import "reflect-metadata";
require('dotenv').config()

import { API_PORT } from './src/config/env';
import Express from 'express';
import './src/shared/container';

const app = Express();


app.listen(API_PORT, () => {
    console.log("SERVER IS RUNNING");
})
