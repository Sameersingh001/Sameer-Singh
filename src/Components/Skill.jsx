import React from "react";
import {
  Atom,
  Database,
  GitBranch,
  Code,
  Server,
  Layers,
  Zap,
  Code2Icon,
  Bot,
} from "lucide-react";

const skillData = [
  { name: "AI", level: 90, icon: <Bot className="w-6 h-6" />, color: "from-teal-400 to-blue-500" },
  { name: "JavaScript", level: 95, icon: <Code2Icon className="w-6 h-6" />, color: "from-teal-400 to-blue-500" },
  { name: "React", level: 90, icon: <Atom className="w-6 h-6" />, color: "from-teal-400 to-blue-500" },
  { name: "Node.js", level: 85, icon: <Server className="w-6 h-6" />, color: "from-green-400 to-teal-600" },
  { name: "Tailwind CSS", level: 88, icon: <Layers className="w-6 h-6" />, color: "from-cyan-400 to-indigo-500" },
  { name: "MongoDB", level: 80, icon: <Database className="w-6 h-6" />, color: "from-emerald-400 to-green-700" },
  { name: "Express", level: 75, icon: <Code className="w-6 h-6" />, color: "from-gray-400 to-gray-600" },
  { name: "Git", level: 85, icon: <GitBranch className="w-6 h-6" />, color: "from-orange-400 to-red-500" },
  { name: "REST APIs", level: 82, icon: <Zap className="w-6 h-6" />, color: "from-yellow-400 to-orange-400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-white to-teal-50
      dark:from-[#0f1f44] dark:to-[#1f2f5f]"
    >
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-teal-800 dark:text-teal-300">
          Skills & Expertise
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Modern full-stack toolkit I use to build scalable and performant
          applications with real-world experience.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {skillData.map((skill) => (
            <div
              key={skill.name}
              className="
                relative group
                bg-white dark:bg-[#1f2f5f]
                rounded-2xl
                border border-teal-100 dark:border-[#23335d]
                shadow-lg hover:shadow-xl
                transition-all duration-300
                hover:scale-[1.02]
                p-5
                flex flex-col
                min-h-[180px] sm:min-h-[200px]
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full bg-gradient-to-br ${skill.color} text-white shadow-md`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Proficiency
                    </p>
                  </div>
                </div>

                <span className="text-sm font-bold text-teal-600 dark:text-teal-300">
                  {skill.level}%
                </span>
              </div>

              {/* Bottom */}
              <div className="mt-auto">
                <div className="w-full bg-gray-200 dark:bg-[#223657] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-green-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  {skill.level >= 85
                    ? "Advanced"
                    : skill.level >= 70
                    ? "Intermediate"
                    : "Working Knowledge"}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 dark:group-hover:bg-white/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
