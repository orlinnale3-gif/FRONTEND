import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define service data
  const services = [
    {
      id: "1",
      title: "Home Repairs",
      icon: "🛠️",
      description:
        "From leaky taps to full-scale renovations, our certified home repair experts deliver professional, affordable solutions right at your doorstep. Book with confidence and get your home back in shape today.",
    },
    {
      id: "2",
      title: "Auto Services",
      icon: "🚗",
      description:
        "Whether it’s engine diagnostics, tyre replacement, or routine maintenance — FIXR connects you with trusted mechanics who deliver quality service quickly and reliably.",
    },
    {
      id: "3",
      title: "Tech Support",
      icon: "💻",
      description:
        "Need help with your laptop, phone, or network setup? Our tech experts handle everything from repairs to installations, ensuring your devices run smoothly and securely.",
    },
  ];

  // Find the selected service
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-fixrblue text-2xl font-semibold">
        Service not found 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6 py-20">
      <div
        className="max-w-3xl bg-baby text-white p-10 rounded-2xl shadow-lg"
        data-aos="fade-up"
      >
        <div className="text-6xl mb-4">{service.icon}</div>
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg opacity-90 mb-8 leading-relaxed">
          {service.description}
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-fixrblue hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
        >
          Book Now
        </button>
      </div>

      <div
        className="max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {[
          {
            step: "✔️",
            title: "Trusted Experts",
            text: "Each service provider is verified and reviewed for top-quality performance.",
          },
          {
            step: "⚡",
            title: "Fast Response",
            text: "Instant booking with same-day or next-day availability in your area.",
          },
          {
            step: "💰",
            title: "Affordable Rates",
            text: "Transparent pricing and no hidden costs — pay only for what you need.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white text-fixrblue p-6 rounded-xl shadow-md border border-gray-100 hover:scale-105 transition"
          >
            <div className="text-4xl mb-3">{item.step}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="opacity-80 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
