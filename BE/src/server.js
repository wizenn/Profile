const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // <-- Quan trọng: tải biến môi trường

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route gửi email
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,   // <-- lấy từ .env
            pass: process.env.EMAIL_PASS    // <-- lấy từ .env
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL || 'minhqui.socialmedia@gmail.com',
        subject: subject || "New Contact Message",
        html: `
            <h3>Thông tin liên hệ</h3>
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nội dung:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error); // Ghi rõ toàn bộ lỗi
        res.status(500).json({ message: 'Failed to send email', error: error.toString() });
    }

});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
