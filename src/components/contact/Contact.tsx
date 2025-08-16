"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 max-w-2xl text-center mb-12">
        Have questions or want to work with us? Fill out the form below or reach
        us directly via email or phone.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Whether you have a question about
              features, trials, pricing, or anything else, our team is ready to
              answer all your questions.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-gray-700">
                📍 <span className="font-medium">Address:</span> opposite Rail
                Vihar, Maitri Vihar, Rail Vihar, Chandrasekharpur, Bhubaneswar,
                Odisha 751023
              </p>
              <p className="text-gray-700">
                📞 <span className="font-medium">Phone:</span> +91 12345 67890
              </p>
              <p className="text-gray-700">
                ✉️ <span className="font-medium">Email:</span>{" "}
                info@iiwmasi.com
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.6574930970305!2d85.8111449!3d20.314439399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909b25b8cde9b%3A0x7858e8e7958827e3!2sIndian%20Institute%20Of%20Water%20Management!5e0!3m2!1sen!2sin!4v1755321036709!5m2!1sen!2sin"
              width={"100%"}
              height="250"
              style={{ border: 1 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Send us a Message
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={10}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
