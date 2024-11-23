import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import OpenAI from "openai";
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
import * as botHandler from './controllers/botController.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });
const port = process.env.PORT
const uri = process.env.MONGODB_URI
const botToken = process.env.GROUP_BOT_TOKEN
const openAiApi = process.env.OPENAI_API

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

export const openai = new OpenAI({
    apiKey: openAiApi // Make sure to set this in your environment variables
  });
const bot = new TelegramBot(botToken, { 
    polling: {
      interval: 1,
      autoStart: true,
      params: {
        timeout: 10
      }
    }
});


bot.on('new_chat_members', async (msg) => {
    botHandler.newAddsHandler(msg, bot);
})
bot.on('message', botHandler.NewMessagesHandler)

mongoose
.connect(uri).then(() => console.log("Connected to database"))
.catch(error => console.error("Error connecting to database:", error));




app.use('/api/v2', router);
app.listen(port, () => console.log(`Server is running on port ${port}`));


export default bot
