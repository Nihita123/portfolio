import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiDocker,
  SiGraphql,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiRedux,
  SiFirebase,
  SiFigma,
  SiWebpack,
  SiJest,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = {
    row1: [
      { name: "React", logo: <SiReact />, color: "from-blue-400 to-blue-600" },
      {
        name: "Node.js",
        logo: <SiNodedotjs />,
        color: "from-green-400 to-green-600",
      },
      {
        name: "JavaScript",
        logo: <SiJavascript />,
        color: "from-yellow-300 to-yellow-500",
      },
      {
        name: "TypeScript",
        logo: <SiTypescript />,
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "Python",
        logo: <SiPython />,
        color: "from-blue-400 to-yellow-500",
      },
      {
        name: "MongoDB",
        logo: <SiMongodb />,
        color: "from-green-500 to-green-700",
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql />,
        color: "from-blue-600 to-indigo-600",
      },
      {
        name: "Express",
        logo: <SiExpress />,
        color: "from-gray-600 to-gray-800",
      },
    ],
    row2: [
      {
        name: "HTML5",
        logo: <SiHtml5 />,
        color: "from-orange-400 to-orange-600",
      },
      { name: "CSS3", logo: <SiCss3 />, color: "from-blue-400 to-blue-600" },
      {
        name: "Tailwind",
        logo: <SiTailwindcss />,
        color: "from-cyan-400 to-cyan-600",
      },
      //   { name: "SASS", logo: <SiSass />, color: "from-pink-400 to-pink-600" },
      { name: "Git", logo: <SiGit />, color: "from-orange-500 to-red-500" },
      {
        name: "Docker",
        logo: <SiDocker />,
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "Figma",
        logo: <SiFigma />,
        color: "from-purple-400 to-pink-500",
      },

      //   {
      //     name: "GraphQL",
      //     logo: <SiGraphql />,
      //     color: "from-pink-500 to-purple-600",
      //   },
    ],
    row3: [
      //   {
      //     name: "Next.js",
      //     logo: <SiNextdotjs />,
      //     color: "from-gray-700 to-black",
      //   },
      //   {
      //     name: "Vue.js",
      //     logo: <SiVuedotjs />,
      //     color: "from-green-400 to-green-600",
      //   },
      //   {
      //     name: "Angular",
      //     logo: <SiAngular />,
      //     color: "from-red-500 to-red-700",
      //   },
      //   {
      //     name: "Redux",
      //     logo: <SiRedux />,
      //     color: "from-purple-500 to-purple-700",
      //   },
      //   {
      //     name: "Firebase",
      //     logo: <SiFirebase />,
      //     color: "from-yellow-500 to-orange-600",
      //   },
      //   {
      //     name: "Webpack",
      //     logo: <SiWebpack />,
      //     color: "from-blue-500 to-blue-700",
      //   },
      //   { name: "Jest", logo: <SiJest />, color: "from-red-500 to-red-700" },
    ],
  };

  // Reuse your same ScrollingRow and SkillCard logic...

  // (You can keep your existing JSX and styles, just replace logos with the above)

  const SkillCard = ({ skill }) => (
    <div className="flex-shrink-0 mx-4 group">
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[140px] text-center">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform text-white text-xl font-bold`}
        >
          {skill.logo}
        </div>
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
          {skill.name}
        </h3>
      </div>
    </div>
  );

  const ScrollingRow = ({ skills, direction, speed }) => {
    // Duplicate the skills array for seamless looping
    const duplicatedSkills = [...skills, ...skills];

    return (
      <div className="overflow-hidden py-4">
        <div
          className={`flex ${
            direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"
          } hover:pause-animation`}
          style={{ animationDuration: `${speed}s` }}
        >
          {duplicatedSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Technical Skills
        </h2>
        <div className="space-y-8">
          {/* Row 1 - Scroll Left */}
          <ScrollingRow skills={skills.row1} direction="left" speed={25} />

          {/* Row 2 - Scroll Right */}
          <ScrollingRow skills={skills.row2} direction="right" speed={30} />

          {/* Row 3 - Scroll Left */}
          {/* <ScrollingRow skills={skills.row3} direction="left" speed={28} /> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
