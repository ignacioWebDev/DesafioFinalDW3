import React, { useState } from 'react';
import '../App.css'; // Ensure you have a CSS file for styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you can send formData to your backend
            console.log('Form data submitted:', formData);
            setSuccessMessage('Message sent successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setSuccessMessage('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact</h1>
                <section className="contact-info">
                    <h2>Contact Information</h2>
                    <p>We would love to hear from you. You can contact us through any of the following methods:</p>
                    <ul>
                        <li><strong>Address:</strong> 123 Fake Street, City, Country</li>
                        <li><strong>Phone:</strong> +123 456 7890</li>
                        <li><strong>Email:</strong> contact@example.com</li>
                        <li><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</li>
                    </ul>
                </section>

                <section className="contact-form">
                    <h2>Send Us a Message</h2>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <form onSubmit={handleSubmit} className="contact-form2">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </div>

            <section className="social-media">
                <h2>Follow Us on Social Media</h2>
                <p>Stay up to date with our latest news and updates by following our social media channels:</p>
                <ul className="social-links">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Contact;
