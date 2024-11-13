import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here if needed

    setSubmitted(true);

    // Here you can add code to send the form data to a server or email

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto w-full max-w-[800px] bg-white rounded-lg border-1 border-green-500 shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      {submitted && (
        <p className="text-center text-green-500 font-semibold mb-6">
          Thank you for contacting us! We’ll get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#0AA70A] text-white font-semibold rounded-lg hover:bg-[#3b9c48] focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
