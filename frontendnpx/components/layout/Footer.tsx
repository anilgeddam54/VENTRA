export default function Footer() {
  return (
    <footer  id="footer"
     className="bg-black border-t border-gray-800 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-500">VENTRA</h2>
          <p className="mt-2 text-sm">
            © 2026 VENTRA. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}