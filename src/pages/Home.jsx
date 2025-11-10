import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // <-- only import Link now
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      id: "1",
      title: "Home Repairs",
      description: "Expert repairs for plumbing, electrical, and carpentry issues.",
      icon: "🛠️",
    },
    {
      id: "2",
      title: "Auto Services",
      description: "Reliable mechanics to keep your vehicle in top shape.",
      icon: "🚗",
    },
    {
      id: "3",
      title: "Tech Support",
      description: "Professional assistance with computers, phones, and more.",
      icon: "💻",
    },
  ];

  const handleLearnMore = () => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-baby min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          data-aos="fade-up"
        >
          Fast, Reliable Fixes with <span className="text-fixrblue">FIXR</span>
        </h1>
        <p
          className="text-lg md:text-xl text-white mb-6 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Connecting you with trusted professionals for every repair, service, or setup.
        </p>
        <div data-aos="fade-up" data-aos-delay="400" className="flex gap-4">
          {/* Updated Get Started button to Link */}
          <Link
            to="/register"
            className="bg-fixrblue hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get Started
          </Link>
          <button
            onClick={handleLearnMore}
            className="border border-white text-white hover:bg-white hover:text-fixrblue px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-fixrblue mb-12" data-aos="fade-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => window.location.href = `/services/${service.id}`}
              className="bg-fixrblue text-white p-8 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-baby text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { step: "1️⃣", title: "Select Service", text: "Pick the service you need from our trusted list." },
            { step: "2️⃣", title: "Book Instantly", text: "Choose your date and time — we’ll handle the rest." },
            { step: "3️⃣", title: "Get It Fixed", text: "Your professional arrives and gets the job done fast!" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">{item.step}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-90">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold text-fixrblue mb-12" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Thabo M.", text: "FIXR helped me get my plumbing fixed the same day — super professional!" },
            { name: "Lerato S.", text: "Quick and easy booking process. The electrician arrived right on time!" },
            { name: "Jason P.", text: "Love the service quality and the reliability of FIXR professionals." },
          ].map((review, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-fixrblue text-white p-8 rounded-xl shadow-lg"
            >
              <p className="italic mb-4">“{review.text}”</p>
              <h4 className="font-bold text-lg">- {review.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
