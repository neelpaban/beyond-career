import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-white text-slate-800">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12" data-aos="fade-down">
      Get In Touch
    </h2>
    <form
      action="https://formspree.io/f/xqabnkwp" // Replace with your own
      method="POST"
      className="max-w-xl mx-auto space-y-6"
      data-aos="fade-up"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
