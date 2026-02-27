"use client";

import React, { useState } from "react";
import { Briefcase, Code2 } from "lucide-react";
import Image from "next/image";

const WorkExperience = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
          Work <span className="text-[#ecc28a]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card 1 */}
          <div
            onClick={() => toggleCard(1)}
            className="cursor-pointer group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-[#ecc28a]/50 hover:shadow-[0_0_30px_rgba(236,194,138,0.2)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <Code2 className="text-[#ecc28a]" size={28} />
              <h3 className="text-xl font-semibold">
                Software Developer Intern
              </h3>
            </div>

            <p className="text-white/60 mb-2">
              Hayakawa Electronics (Phils.) Corp. • AUG-OCT 2024
            </p>

            {openCards.includes(1) && (
              <div className="mt-4 text-white/70 leading-7 transition-all duration-500">
                {/* Image Container */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/intern2.jpg"
                    alt="Internship Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Developed a Python-based facial recognition security system
                    using PyCharm.
                  </li>
                  <li>
                    Built a web-based project monitoring system with progress
                    tracking and task scheduling.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to analyze
                    requirements and debug features.
                  </li>
                  <li>
                    Assisted in enhancement of internal systems in a production
                    environment.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div
            onClick={() => toggleCard(0)}
            className="cursor-pointer group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-[#ecc28a]/50 hover:shadow-[0_0_30px_rgba(236,194,138,0.2)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-[#ecc28a]" size={28} />
              <h3 className="text-xl font-semibold">Software QA Intern</h3>
            </div>

            <p className="text-white/60 mb-2">
              Achieve Without Borders, Inc. • 2023
            </p>

            {openCards.includes(0) && (
              <div className="mt-4 text-white/70 leading-7 transition-all duration-500">
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/intern1.jpg"
                    alt="Internship Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Worked as part of the QA team for an HRIS system built on
                    Odoo.
                  </li>
                  <li>
                    Performed manual and Cypress-based automated testing on
                    system features and workflows.
                  </li>
                  <li>
                    Developed and executed detailed test cases based on
                    functional requirements.
                  </li>
                  <li>
                    Documented bugs, test results, and improvement
                    recommendations.
                  </li>
                  <li>
                    Collaborated closely with developers to verify fixes and
                    enhance overall product quality.
                  </li>
                  <li>Participated in Agile ceremonies and task tracking.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
