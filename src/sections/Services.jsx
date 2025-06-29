import React from 'react';

const Services = () => (
  <section id="services" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
    <h2
      className="text-4xl font-bold text-center text-amber-400 mb-16 drop-shadow"
      data-aos="fade-down"
    >
      Our Services
    </h2>

    {/* Career Guidance */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div
        data-aos="fade-right"
        className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-xl"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Career Guidance</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          We provide personalized career guidance to help students understand their strengths, explore career paths,
          and make informed decisions. Through expert sessions and strategic planning, we equip students with the tools
          to achieve their goals.
        </p>
      </div>
      <div data-aos="fade-left" className="rounded-lg overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
          alt="Career guidance"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>

    {/* Internships */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right" className="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1571573750055-39cfc5545c23?q=80&w=1974&auto=format&fit=crop"
          alt="Internships"
          className="w-full h-64 object-cover"
        />
      </div>
      <div
        data-aos="fade-left"
        className="order-1 md:order-2 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-xl"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Internship Opportunities</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          Access a wide range of curated internship opportunities tailored to your field of interest. We connect
          students with startups, corporations, and NGOs to gain real-world experience and build impactful portfolios.
        </p>
      </div>
    </div>

    {/* Mentorship */}
    <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
      <div
        data-aos="fade-right"
        className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-xl"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Mentorship Programs</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          Our structured mentorship programs pair students with industry professionals who provide guidance, support,
          and real-life insights. Whether it's resume building, interviews, or career advice — we've got your back.
        </p>
      </div>
      <div data-aos="fade-left" className="rounded-lg overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
          alt="Mentorship"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>

    {/* Community Engagement */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div data-aos="fade-right" className="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
          alt="Community"
          className="w-full h-64 object-cover"
        />
      </div>
      <div
        data-aos="fade-left"
        className="order-1 md:order-2 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-xl"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Community Engagement</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          Join a vibrant community of like-minded students and mentors. We host events, workshops, and forums that
          foster connection, learning, and mutual growth — all in a supportive, inclusive space.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
