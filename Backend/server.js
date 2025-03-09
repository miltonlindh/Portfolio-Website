const express = require('express');
const cors = require('cors'); // Import cors
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Fix CORS issue
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'] // Allow headers
}));

// ✅ Handle preflight requests
app.options('*', cors());

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'miltonlindh22@gmail.com',
            pass: 'rsgi kwon cvrs udqi'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'miltonlindh22@gmail.com',
        subject: `Message from: ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('error'); // Send error response
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
