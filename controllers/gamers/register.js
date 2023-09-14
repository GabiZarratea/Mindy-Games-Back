import Gamer from '../../models/Gamer.js'
import nodemailer from 'nodemailer';
import { google } from 'googleapis'

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "http://localhost:5173"
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "mingamangamh@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
    },
});

export default async (req, res, next) => {
    try {
        const newGamer = await Gamer.create({ ...req.body });

        const mailOptions = {
            from: 'mindygames@mh.com',
            to: newGamer.email,
            subject: 'Tournament Registration',
            html: `
                <html>
                    <head>
                        <title>Tournament Registration</title>
                    </head>
                    <body>
                        <h2>Hello ${newGamer.firstName}!</h2>
                        <p>You have registered to play the ${newGamer.chooseGame} tournament on ${newGamer.chooseDate}.
                        We wish you the best of luck, we will be in contact with you so you don't forget!</p>
                        <img src="https://scontent.feze12-1.fna.fbcdn.net/v/t39.30808-6/378142334_2011172242548482_2924222698260744225_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=urERiFMWqGMAX-ZBoKQ&_nc_ht=scontent.feze12-1.fna&oh=00_AfAAxiJk5D_7fVj7iwPp1wDNamLDl6GQTa2dPzapDlAIGw&oe=650981C3" height="400" alt="Mindy Games Banner">
                        <h3>The Mindy Games Team</h3>
                    </body>
                </html>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail send:', info.response);

        return res.status(201).json({ response: newGamer, success: true, message: 'Gamer created successfully' });
    } catch (error) {
        next(error);
}}
