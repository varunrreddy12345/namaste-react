// const Contact = () => {
//   return (
//     <div>
//       <h1> Contact Us</h1>
//       <h2>This is the Contact Us page</h2>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>

        <p className="text-center text-gray-500 mb-6">
          We'd love to hear from you
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;