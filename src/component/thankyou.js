import React from 'react'
import { useLocation } from 'react-router-dom';

export const Thankyou = () => {
    const { state } = useLocation(); // Get the form data passed via state
    const formData = state?.formData;
  
    if (!formData) {
      return <div>No data available!</div>;
    }
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Thank You!</h2>
          <p className="text-center text-gray-700">We appreciate you contacting us. Here are the details:</p>
  
          <div className="bg-gray-100 p-4 rounded-lg mt-4 space-y-2">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Preferred Date:</strong> {formData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> {formData.preferredTime}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>
  
          <p className="text-center text-gray-600 mt-4">We will get back to you soon!</p>
        </div>
      </div>
    );
}
