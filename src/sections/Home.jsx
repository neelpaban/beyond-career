import React from 'react';

const Home = () => {
  // ✅ Replace this with any high-quality image URL from Unsplash or similar
  const imageUrl = 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=1600&q=80';

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="z-10 text-center bg-black/40 p-6 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          <span className="text-amber-400">All About</span> Your Dreams
        </h1>
        <p className="text-lg text-slate-100 mb-6 drop-shadow">
          Redefining how students approach their careers.
        </p>
        <a href="https://www.linkedin.com/company/beyondgradess"><button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
          Join Us
        </button></a> 
      </div>
    </section>
  );
};

export default Home;
