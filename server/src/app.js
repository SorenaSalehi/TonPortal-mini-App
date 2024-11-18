import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });
const port = process.env.PORT
const uri = process.env.MONGODB_URI

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose
.connect(uri).then(() => console.log("Connected to database"))
.catch(error => console.error("Error connecting to database:", error));


app.use('/v2/api/', router);
app.listen(port, () => console.log(`Server is running on port ${port}`));
