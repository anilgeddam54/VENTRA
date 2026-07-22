"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#030712] pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 AI Powered Digital Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Build The
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              Future With AI
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            VENTRA helps startups, creators and businesses build
            AI-powered applications, websites and automation
            solutions with modern technology.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-blue-500/10">
              Explore Services
            </button>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >

          <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="flex h-72 w-72 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-500/20">

              <div className="text-center">
                <div className="text-7xl">🤖</div>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  AI Platform
                </h2>

                <p className="mt-2 text-gray-400">
                  Smart • Fast • Secure
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}