import React from 'react';

const About = () => (
  <section id="about" className="py-20 px-6 bg-slate-50 text-slate-800" style={{ backgroundColor: '#EEEEEE' }}>
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-16" data-aos="fade-down">
      About Us
    </h2>

    {/* Mission & Vision */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right">
        <h3 className="text-2xl font-semibold mb-4">Our Mission & Vision</h3>
        <p className="text-lg leading-relaxed">
          Founded in 2023, <strong>Beyond Career</strong> is more than just a platform — we are a movement
          dedicated to fostering conscious and inclusive workplaces where everyone thrives. 
          We envision a world where every student has access to transformative guidance and career growth.
        </p>
      </div>
      <div data-aos="fade-left" className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?fit=crop&w=800&q=80" alt="Mission visual" className="w-full h-64 object-cover" />
      </div>
    </div>

    {/* Founding Story */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-left" className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?fit=crop&w=800&q=80" alt="Founding team" className="w-full h-64 object-cover" />
      </div>
      <div data-aos="fade-right" className="order-1 md:order-2">
        <h3 className="text-2xl font-semibold mb-4">Our Founding Story</h3>
        <p className="text-lg leading-relaxed">
          Beyond Career was founded by a team of dynamic and passionate students from <strong>IIT Kharagpur</strong>,
          united by a vision to redefine how students navigate their careers. We provide a one-stop solution — 
          unlocking opportunities, enabling connections with industry leaders, and supporting students every step 
          of the way.
        </p>
      </div>
    </div>

    {/* Core Values */}
    <div className="max-w-4xl mx-auto" data-aos="fade-up">
      <h3 className="text-2xl font-semibold text-center mb-6">Our Core Values</h3>
      <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-3 text-lg">
        <li><strong>Student-Centric:</strong> Every decision we make puts the student first — their growth, dreams, and dignity.</li>
        <li><strong>Opportunity for All:</strong> We create an inclusive space where every student has equal access to success.</li>
        <li><strong>Authentic Mentorship:</strong> Our mentors lead with empathy, experience, and passion to uplift others.</li>
        <li><strong>Community-Powered:</strong> We thrive through collaboration, curiosity, and collective learning.</li>
        <li><strong>Future-Driven:</strong> We prepare students not just for jobs, but for meaningful careers in an evolving world.</li>
      </ul>
    </div>
  </section>
);

export default About;
