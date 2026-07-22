export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-blue-500 font-semibold mb-2">
            ABOUT VENTRA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Build The Future
            <span className="text-blue-500"> With AI.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            VENTRA is a technology startup focused on building
            AI-powered products, websites, SaaS platforms, and
            modern digital solutions. Our goal is to help
            businesses and creators launch faster with powerful,
            scalable technology.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">20+</h3>
            <p className="text-gray-400 mt-2">
              Projects Planned
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">100%</h3>
            <p className="text-gray-400 mt-2">
              Innovation
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">24/7</h3>
            <p className="text-gray-400 mt-2">
              Support
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">AI</h3>
            <p className="text-gray-400 mt-2">
              First Approach
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}