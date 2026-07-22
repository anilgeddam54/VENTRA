"use client";

import { motion } from "framer-motion";
import {
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CpuChipIcon,
    title: "AI Solutions",
    description:
      "Build intelligent AI applications powered by the latest technologies.",
  },
  {
    icon: GlobeAltIcon,
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites for businesses.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Platform",
    description:
      "Security-first architecture with scalable cloud infrastructure.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#030712] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Powerful tools and modern technologies to help you build
            the next generation of digital products.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-blue-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <button className="mt-8 text-blue-400 transition hover:text-white">
                  Learn More →
                </button>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}