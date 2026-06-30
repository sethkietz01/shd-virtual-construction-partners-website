import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const currentTime = new Date().toLocaleString();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <input type="hidden" name="time" value={currentTime} />

      <label>Phone Number</label>
      <input type="tel" name="phone" />

      <label>Message</label>
      <textarea name="message" required />

      <button type="submit">Send Message</button>
    </form>
    
  );
};