import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  // You'll need to replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_portfolio', // Replace with your service ID
  TEMPLATE_ID: 'template_contact', // Replace with your template ID
  PUBLIC_KEY: 'your_public_key_here', // Replace with your public key
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Bharath Waj M',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error
    };
  }
};

// Alternative: Send email via backend API
export const sendEmailViaBackend = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: 'Message sent successfully!',
        data: result
      };
    } else {
      return {
        success: false,
        message: result.error || 'Failed to send message',
        error: result
      };
    }
  } catch (error) {
    console.error('Backend Email Error:', error);
    return {
      success: false,
      message: 'Unable to connect to server. Please try again later.',
      error
    };
  }
};
