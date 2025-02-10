"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozftsvo",
        "template_kklyk8w",
        form.current,
        "J3C_U_TwQhB1fJyfn"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setFeedback({
            message: "Message sent successfully!",
            type: "success",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          setFeedback({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="max-w-7xl bg-white mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12">
      <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
        <h2 className="text-2xl font-bold text-gray-900">GET IN TOUCH</h2>
        <p className="mt-2 text-gray-700">123</p>
        <p className="mt-1 text-gray-700">📞 +91 9099999999</p>
        <p className="mt-1 text-gray-700">📧 weddings@framework.com</p>
        <div className="flex justify-center lg:justify-start gap-4 mt-4">
          <a href="/" className="text-blue-600 hover:text-blue-800 text-2xl">
            <FaFacebookF />
          </a>
          <a href="/" className="text-pink-500 hover:text-pink-700 text-2xl">
            <FaInstagram />
          </a>
          <a href="/" className="text-green-500 hover:text-green-700 text-2xl">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          SEND US A MESSAGE
        </h2>
        <p className="text-gray-700 text-center mt-2">
          You can leave your queries here or just say Hello!
        </p>
        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your message (optional)"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            SUBMIT
          </button>
        </form>
        {feedback.message && (
          <div
            className={`mt-4 text-center p-3 rounded-lg ${
              feedback.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {feedback.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
