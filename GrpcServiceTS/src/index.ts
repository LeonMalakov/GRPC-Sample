// import express from 'express'
// const app = express();
// const port = 5000;
// app.get('/', (request, respone) => {
//     respone.send('Hello world!');
// });
// app.listen(port, () => console.log(`Running on port ${port}`));


//import { Service } from './service';
import { Client } from './client';

// const service = new Service();
// service.run();

const client = new Client();
client.run();