const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'consisto185@gmail.com',
        pass: 'jvlbasxewzcsrfzl',
      },
    });

    const mailOptions = {
      from: 'siaka15doumbia@gmail.com',
      to: 'consisto185@gmail.com',
      subject: req.body.subject,
      text: req.body.message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
