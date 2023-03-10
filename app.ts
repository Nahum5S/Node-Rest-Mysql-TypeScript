import dotenv from 'dotenv';
import Server from './models/server';

//Configuarar dotenv
dotenv.config();

const server =  new Server();


server.listen();
