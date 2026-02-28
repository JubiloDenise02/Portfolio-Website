"use client";

import { useEffect, useState } from "react";
import { Code2, Database, Bug, Brain, ClipboardList, Workflow } from "lucide-react";

const Skills = () => {
  const [mode, setMode] = useState<"dev" | "qa" | "soft">("dev");
  const [animate, setAnimate] = useState(false);
  const [openCards, setOpenCards] = useState<string[]>([]);

  useEffect(() => {
    setAnimate(false);
    setOpenCards([]);
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, [mode]);

  const developerSkills = [
    {
      title: "Programming & Frameworks",
      icon: <Code2 className="text-[#ecc28a]" size={28} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 75 },
        { name: "Kotlin", level: 85 },
        { name: "PHP", level: 70 },
        { name: "C#", level: 50 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 65 },
        { name: "Next.js", level: 65 },
      ],
    },
    {
      title: "Databases & Platforms",
      icon: <Database className="text-[#ecc28a]" size={24} />,
      skills: [
        { name: "Firebase", level: 88 },
        { name: "Supabase", level: 70 },
        { name: "XAMPP", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Version Control & Collab",
      icon: <Workflow className="text-[#ecc28a]" size={31} />,
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
      ],
    },
  ];

  const qaSkills = [
    {
      title: "Testing & QA",
      icon: <Bug className="text-[#ecc28a]" size={24} />,
      skills: [
        { name: "Manual Testing", level: 90 },
        { name: "Automated Testing", level: 85 },
        { name: "Test Case Design", level: 88 },
        { name: "Cypress", level: 85 },
        { name: "Agile / Scrum", level: 85 },
      ],
    },
    {
      title: "Bug Tracking & Documentation",
      icon: <ClipboardList className="text-[#ecc28a]" size={24} />,
      skills: [
        { name: "Test Reports", level: 80 },
        { name: "Defect Documentation", level: 85 },
        { name: "Recommendations", level: 85 },
      ],
    },
  ];

  const softSkills = [
    {
      title: "Professional Strengths",
      icon: <Brain className="text-[#ecc28a]" size={24} />,
      skills: [
        { name: "Problem-Solving", level: 95 },
        { name: "Critical Thinking", level: 90 },
        { name: "Adaptability", level: 92 },
        { name: "Time Management", level: 88 },
        { name: "Team Collaboration", level: 90 },
      ],
    },
  ];

  const activeSkills =
    mode === "dev" ? developerSkills : mode === "qa" ? qaSkills : softSkills;

  const toggleCard = (id: string) => {
    setOpenCards((prev) =>
      prev.includes(id)
        ? prev.filter((card) => card !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
          Tech and Soft <span className="text-[#ecc28a]">Skills</span>
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1">
            {["dev", "qa", "soft"].map((type) => (
              <button
                key={type}
                onClick={() => setMode(type as any)}
                className={`cursor-pointer px-6 py-2 rounded-full transition-all duration-300 ${
                  mode === type
                    ? "bg-[#ecc28a] text-black"
                    : "text-white/70"
                }`}
              >
                {type === "dev" && "Developer"}
                {type === "qa" && "QA / Testing"}
                {type === "soft" && "Soft Skills"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-12 justify-items-center items-start
            ${
              activeSkills.length === 1
                ? "grid-cols-1"
                : activeSkills.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
        >
          {activeSkills.map((category, index) => {
            const cardId = `${mode}-${index}`;
            const isOpen = openCards.includes(cardId);

            return (
              <div
                key={cardId}
                onClick={() => toggleCard(cardId)}
                className="group relative cursor-pointer w-full max-w-md rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] transition-all duration-300 hover:border-[#ecc28a]/60 hover:shadow-[0_0_40px_rgba(236,194,138,0.35)] hover:-translate-y-1"
              >
                {/* Glow Layer */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-transparent to-transparent group-hover:from-[#ecc28a]/5 group-hover:to-[#ecc28a]/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    {category.icon}
                      {category.title}
                  </div>

                  {isOpen && (
                    <div className="mt-6 space-y-6 text-white/70">
                      {category.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-2 text-white/80">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>

                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#ecc28a] transition-all duration-1000 ease-out"
                              style={{
                                width: animate
                                  ? `${skill.level}%`
                                  : "0%",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;