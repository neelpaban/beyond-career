import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 bg-slate-50 text-slate-800">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-16" data-aos="fade-down">
      Success Stories & Testimonials
    </h2>

    {/* Testimonial 1 */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right">
        <h3 className="text-2xl font-semibold mb-4">Aarav — Secured Dream Internship</h3>
        <p className="text-lg leading-relaxed">
          “Beyond Career’s mentorship helped me land a full-stack internship at a funded startup! I gained clarity,
          skills, and real confidence through their sessions. Couldn’t have asked for a better guide.”
        </p>
      </div>
      <div data-aos="fade-left" className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww"
          alt="Student success"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right" className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1617009762269-c062aaf6b3a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
          alt="Mentorship success"
          className="w-full h-64 object-cover"
        />
      </div>
      <div data-aos="fade-left" className="order-1 md:order-2">
        <h3 className="text-2xl font-semibold mb-4">Neha — Found Her Career Direction</h3>
        <p className="text-lg leading-relaxed">
          “The one-on-one career counseling opened up paths I never thought about. I switched my major and now feel
          aligned with my future. This platform changed my perspective completely.”
        </p>
      </div>
    </div>

    {/* Stats Section */}
    <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-10 text-center" data-aos="fade-up">
      <div className="bg-white shadow-md rounded-xl py-10 px-4">
        <h4 className="text-3xl font-bold text-amber-500 mb-2">500+</h4>
        <p className="text-lg font-medium">Students Mentored</p>
      </div>
      <div className="bg-white shadow-md rounded-xl py-10 px-4">
        <h4 className="text-3xl font-bold text-amber-500 mb-2">150+</h4>
        <p className="text-lg font-medium">Internships Secured</p>
      </div>
      <div className="bg-white shadow-md rounded-xl py-10 px-4">
        <h4 className="text-3xl font-bold text-amber-500 mb-2">40+</h4>
        <p className="text-lg font-medium">Partnered Companies</p>
      </div>
    </div>
  </section>
);

export default Testimonials;
