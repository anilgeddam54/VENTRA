export default function Services() {
  const services = [
    {
      title: "AI Development",
      description:
        "Custom AI chatbots, automation tools, and intelligent business solutions.",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications using Next.js and React.",
    },
    {
      title: "Mobile Apps",
      description:
        "Fast and user-friendly Android and iOS applications for startups and businesses.",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, clean, and modern user interface designs with great user experience.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Deploy and scale your applications securely using modern cloud technologies.",
    },
    {
      title: "Tech Consulting",
      description:
        "Helping businesses choose the right technologies to grow faster.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Our <span className="text-blue-500">Services</span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          We help startups and businesses build powerful digital products.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-8 border border-gray-800 hover:border-blue-500 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-blue-400 hover:text-blue-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}