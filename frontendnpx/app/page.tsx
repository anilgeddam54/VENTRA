export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-bold">VENTRA</h1>

        <div className="space-x-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-7xl font-extrabold">
          Build Smarter.
        </h1>

        <h2 className="text-7xl font-extrabold text-blue-500">
          Build with VENTRA.
        </h2>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          A modern technology startup building AI-powered applications,
          websites and digital products for the future.
        </p>

        <button className="mt-10 px-8 py-4 bg-blue-600 rounded-xl text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
      {/* Features Section */}
<section className="bg-gray-950 py-20 px-8">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose VENTRA?
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition">
      <div className="text-5xl mb-4">🤖</div>
      <h3 className="text-2xl font-semibold mb-3">AI Powered</h3>
      <p className="text-gray-400">
        Smart AI solutions that help you work faster and make better decisions.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition">
      <div className="text-5xl mb-4">⚡</div>
      <h3 className="text-2xl font-semibold mb-3">Fast Performance</h3>
      <p className="text-gray-400">
        Optimized for speed, reliability and smooth user experience.
      </p>
    </div>

    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition">
      <div className="text-5xl mb-4">🔒</div>
      <h3 className="text-2xl font-semibold mb-3">Secure Platform</h3>
      <p className="text-gray-400">
        Built with modern security practices to protect your data.
      </p>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-black py-8 text-center text-gray-500 border-t border-gray-800">
  © 2026 VENTRA. All rights reserved.
</footer>
    </main>
  );
}