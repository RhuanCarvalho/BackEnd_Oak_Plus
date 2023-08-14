import express from 'express';
import cors from 'cors';
import { router } from './routes';


const app = express();

app.use(cors());
app.use(express.json({limit:'500mb'}));
app.use(router);

app.listen(8080, () => console.log("Server is running..."));