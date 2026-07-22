export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Contact <span className="text-blue-500">VENTRA</span>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          We'd love to hear from you. Let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold text-blue-500">
                📧 Email
              </h3>
              <p className="text-gray-400 mt-2">
                ventra@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-500">
                📍 Location
              </h3>
              <p className="text-gray-400 mt-2">
                Visakhapatnam, Andhra Pradesh, India
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-500">
                💼 Business
              </h3>
              <p className="text-gray-400 mt-2">
                AI Development • Web Development • Mobile Apps
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}