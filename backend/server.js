import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const createTransporter = () => {
  // For development, you can use Gmail or any SMTP service
  // You'll need to set these environment variables
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'bharathwaj2912005@gmail.com',
      pass: process.env.EMAIL_PASS || 'your_app_password_here' // Use App Password for Gmail
    }
  });
};

// Serve static files from certificates directory
const certificatesPath = 'D:\\bharath_resume\\certificates';

// API endpoint to get list of certificates
app.get('/api/certificates', async (req, res) => {
  try {
    const files = await fs.readdir(certificatesPath);
    const certificates = files
      .filter(file => file.toLowerCase().endsWith('.pdf'))
      .map(file => {
        const stats = fs.statSync(path.join(certificatesPath, file));
        return {
          id: file.replace(/[^a-zA-Z0-9]/g, '_'),
          name: file.replace('.pdf', ''),
          filename: file,
          size: stats.size,
          lastModified: stats.mtime,
          url: `/api/certificates/${encodeURIComponent(file)}`
        };
      })
      .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

    res.json({
      success: true,
      certificates,
      count: certificates.length
    });
  } catch (error) {
    console.error('Error reading certificates directory:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to read certificates directory',
      message: error.message
    });
  }
});

// API endpoint to serve individual certificate files
app.get('/api/certificates/:filename', (req, res) => {
  try {
    const filename = decodeURIComponent(req.params.filename);
    const filePath = path.join(certificatesPath, filename);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        error: 'Certificate not found'
      });
    }

    // Set appropriate headers for PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${filename}"`);
    
    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error serving certificate:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to serve certificate',
      message: error.message
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'bharathwaj2912005@gmail.com',
      to: 'bharathwaj2912005@gmail.com', // Your email where you want to receive messages
      replyTo: email,
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Message from Portfolio Contact Form
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 14px; color: #666;">
            <p><strong>Note:</strong> This message was sent from your portfolio website contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
        New Message from Portfolio Contact Form
        
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio website contact form.
        You can reply directly to this email to respond to ${name}.
      `
    };

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);

    // Log the contact form submission
    console.log(`Contact form submission from ${name} (${email})`);

    res.json({
      success: true,
      message: 'Message sent successfully!',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
  console.log(`📁 Serving certificates from: ${certificatesPath}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📜 Certificates API: http://localhost:${PORT}/api/certificates`);
});
