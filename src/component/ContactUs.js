import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Navigate to the thank you page and pass form data as state
    navigate('/thank-you', { state: { formData } });

    // Clear the form data after submission (if you don't need it anymore)
    setFormData({ name: '', email: '', message: '', preferredDate: '', preferredTime: '' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 my-[20px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {submitted && (
          <p className="text-center text-green-600 font-semibold mb-6">
            Thank you for contacting us! We’ll get back to you soon.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="preferredDate">
              Preferred Booking Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="preferredTime">
              Preferred Booking Time
            </label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
