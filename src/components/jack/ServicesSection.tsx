"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./JackComponents";

const SERVICES = [
  {
    id: "01",
    name: "Distributed Systems",
    description: "Architecting scalable backend ecosystems using event-driven patterns, Kafka, and Redis for global-scale performance and reliability."
  },
  {
    id: "02",
    name: "Infrastructure Engineering",
    description: "Designing automated pipelines for repository intelligence and secure code execution using Docker, BullMQ, and cloud-native patterns."
  },
  {
    id: "03",
    name: "Real-time Architectures",
    description: "Implementing low-latency synchronization protocols using WebSockets and CRDTs for collaborative engineering tools and social platforms."
  },
  {
    id: "04",
    name: "Product Engineering",
    description: "Bridging the gap between complex infrastructure and premium user experience with cinematic frontend craftsmanship and systems thinking."
  },
  {
    id: "05",
    name: "Security & Modernization",
    description: "Transforming legacy institutional platforms into modern, secure environments using Zero-Trust RLS models and progressive migration."
  }
];

export const ServicesSection = () => {
  return (
    <section id="stack" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Expertise
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1} y={30}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-20 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] group hover:bg-black/5 transition-colors duration-300">
                <div className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] opacity-20 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
