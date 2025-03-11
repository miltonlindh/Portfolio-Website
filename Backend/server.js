const express = require('express');
const cors = require('cors'); 
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for requests from the specified origin
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type'] // Allowed headers
}));

// Enable pre-flight requests for all routes
app.options('*', cors());

// Parse JSON bodies
app.use(express.json());

// Handle POST requests to the root endpoint
app.post('/', (req, res) => {
    console.log(req.body); // Log the request body for debugging

    // Create a transporter object using nodemailer with Gmail configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'miltonlindh22@gmail.com',
            pass: 'rsgi kwon cvrs udqi'
        }
    });

    // Define email options
    const mailOptions = {
        from: req.body.email,
        to: 'miltonlindh22@gmail.com',
        subject: `Message from: ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    };

    // Send email using the transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error); // Log the error for debugging
            res.status(500).send('error'); // Send error response
        } else {
            console.log('Email sent: ' + info.response); // Log the response info
            res.send('success'); // Send success response
        }
    });
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
