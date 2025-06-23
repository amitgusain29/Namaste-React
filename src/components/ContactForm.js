import emailjs from 'emailjs-com';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'email') {
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('Sending...');

    const emailData = {
      ...formData,
      to_email: 'amit2982002@gmail.com',
      reply_to: formData.email,
      sender_email: formData.email
    };

    emailjs.send(
      'service_k2nmb4j',
      'template_v0hy49h',
      emailData,
      'ZgZut3knAMVk4iuIg'
    ).then(() => {
      setStatus('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setEmailError('');
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus(`Failed to send email: ${error.text || error.message}`);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="max-w-[500px] mx-auto my-8 p-8 bg-white rounded-lg shadow-lg border border-orange-200">
      <form onSubmit={sendEmail} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            required 
            className="p-3 border-2 border-orange-200 rounded-md text-base focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            required 
            className={`p-3 border-2 rounded-md text-base focus:outline-none focus:ring-2 transition-colors ${
              emailError 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                : 'border-orange-200 focus:border-orange-500 focus:ring-orange-200'
            }`}
          />
          {emailError && (
            <span className="text-red-500 text-sm mt-1">{emailError}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            required 
            className="p-3 border-2 border-orange-200 rounded-md text-base min-h-[150px] resize-y focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading || !!emailError}
          className={`px-6 py-3 rounded-md text-base font-semibold text-white transition-colors ${
            isLoading || emailError
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
          <p className={`text-center mt-4 p-3 rounded-md text-sm ${
            status.includes('successfully')
              ? 'bg-green-100 text-green-800 border border-green-200'
              : status.includes('Failed')
              ? 'bg-red-100 text-red-800 border border-red-200'
              : 'bg-orange-50 text-orange-800 border border-orange-200'
          }`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;