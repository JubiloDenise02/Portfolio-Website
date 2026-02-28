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
            className="cursor-pointer group relative overflow-hidden rounded-2xl p-8 border border-white/10 bg-linear-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] transition-all duration-500 hover:border-[#ecc28a]/60 hover:shadow-[0_0_40px_rgba(236,194,138,0.35)] hover:-translate-y-1"
          >
            {/* Internal Glow Layer */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-[#ecc28a]/0 to-[#ecc28a]/0 group-hover:from-[#ecc28a]/5 group-hover:to-[#ecc28a]/10 transition-all duration-500"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="text-[#ecc28a]" size={28} />
                <h3 className="text-xl font-semibold">
                  Software Developer Intern
                </h3>
              </div>

              <p className="text-white/60 mb-2">
                Hayakawa Electronics (Phils.) Corp. • Aug-Oct 2024
              </p>

              {openCards.includes(1) && (
                <div className="mt-6 text-white/70 leading-7 transition-all duration-500">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/intern2.jpg"
                      alt="Internship 2"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed a Python-based facial recognition security
                      system.
                    </li>
                    <li>
                      Built a web-based project monitoring system with task
                      tracking.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to analyze
                      requirements.
                    </li>
                    <li>
                      Enhanced internal production systems with debugging and
                      updates.
                    </li>
                  </ul>
                  {/* Learn More Button */}
                  <div className="mt-8 flex justify-center">
                    <a href="/pdfs/dev-intern.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-8 py-2.5 rounded-full border border-[#ecc28a]/60 text-[#ecc28a] font-medium transition-a duration-300 hover:bg-[#ecc28a] hover:text-black hover:shadow-[0_0_20px_rgba(236,194,138,0.6)]">
                      Learn More →</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => toggleCard(0)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl p-8 border border-white/10 bg-linear-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] transition-all duration-500 hover:border-[#ecc28a]/60 hover:shadow-[0_0_40px_rgba(236,194,138,0.35)] hover:-translate-y-1 "
          >
            {/* Internal Glow Layer */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-[#ecc28a]/0 to-[#ecc28a]/0 group-hover:from-[#ecc28a]/5 group-hover:to-[#ecc28a]/10 transition-all duration-500"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="text-[#ecc28a]" size={28} />
                <h3 className="text-xl font-semibold">Software QA Intern</h3>
              </div>

              <p className="text-white/60 mb-2">
                Achieve Without Borders, Inc. • Aug-Oct 2023
              </p>

              {openCards.includes(0) && (
                <div className="mt-6 text-white/70 leading-7 transition-all duration-500">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/intern1.jpg"
                      alt="Internship 1"
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
                      Performed manual and Cypress-based automated testing.
                    </li>
                    <li>Developed and executed detailed test cases.</li>
                    <li>Documented bugs and improvement recommendations.</li>
                    <li>Verified fixes with developers in Agile sprints.</li>
                  </ul>
                  {/* Learn More Button */}
                  <div className="mt-8 flex justify-center">
                    <a href="/pdfs/qa-intern.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-8 py-2.5 rounded-full border border-[#ecc28a]/60 text-[#ecc28a] font-medium transition-all duration-300 hover:bg-[#ecc28a] hover:text-black hover:shadow-[0_0_20px_rgba(236,194,138,0.6)]">
                      Learn More →</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
