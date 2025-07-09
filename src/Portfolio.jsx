import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // optional icon
// import profileImage from "../assets/profile.png";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Lightbulb,
  Star,
} from "lucide-react";
import Marquee from "./Marquee";
import SkillsSection from "./Skills";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "Client Event Management Platform",
      description:
        "Role-based MERN stack web app enabling event organizers to create, monitor, and manage events. Features secure OAuth 2.0 login, JWT-based auth, real-time guest approval, and interactive UI with shadcn/ui.",
      tech: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "NexTask – Task Manager Web App",
      description:
        "Personal productivity platform with robust task CRUD, priority tagging, deadline tracking, and JWT-based auth. Optimized UI reduces navigation time and improves task completion with real-time progress tracking.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Forknight – Gamified GitHub Contributions",
      description:
        "Open-source platform that gamifies GitHub activity. Tracks commits, PRs, and issues in real-time, visualizing user progress with a leaderboard. Built with MERN stack and GitHub OAuth integration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "GitHub OAuth"],
      link: "#",
      github: "#",
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Full-stack development with modern frameworks and technologies. From concept to deployment.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces that engage and delight users.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Solutions",
      description:
        "Innovative approaches to complex problems with cutting-edge technology and design.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-purple-200 to-purple-300 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md hover:border-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transform rotate-45">
                <Star className="w-4 h-4 text-white transform -rotate-45" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              {["PROJECTS", "SERVICES", "RECOMMENDATIONS"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-900 font-medium px-4 py-2 border border-transparent hover:border-black transition-all duration-200 rounded-full"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent text-black px-6 py-2 rounded-full border border-black transition-all duration-200 hover:bg-black hover:text-white "
              >
                WORK WITH ME
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* ✅ Keep your animated background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{
              left: "10%",
              top: "20%",
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse" />
        </div>

        {/* ✅ Foreground content */}
        <div className="text-center z-10 px-4">
          {/* Marquee Banner */}
          <Marquee />

          {/* Headline */}
          <p className="text-3xl md:text-4xl font-semibold text-black max-w-3xl mx-auto leading-snug mt-4 mb-12">
            Building web solutions with code, creativity,{" "}
            <br className="hidden sm:block" />
            and impact.
          </p>

          {/* Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="mx-auto bg-black text-purple-100 px-8 py-4 border border-transparent rounded-full text-lg font-medium transition-all duration-200 hover:bg-transparent hover:text-black hover:border-black"
          >
            WORK WITH ME
          </button>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={() => scrollToSection("projects")}
          >
            <ChevronDown className="w-6 h-6 text-black" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      {/* Services Section */}
      {/* Services Section */}
      {/* <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            <div className="md:row-span-2 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl p-10 text-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/40">
              <div className="mb-8">
                <Code className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform text-gray-800" />
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Crafting Scalable Web Solutions
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  I’m working on full-stack web development using the MERN
                  stack. With a strong focus on performance, maintainability,
                  and design, I turn ideas into high-quality, production-ready
                  digital products. I’m currently exploring real-time systems,
                  backend architecture, and building an interest in DevOps to
                  enhance deployment and infrastructure efficiency.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-gray-700">
                    Frontend: React, Next.js, TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-gray-700">
                    Backend: Node.js, Express, MongoDB
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-gray-700">
                    Tools: Git, Docker, AWS, Vercel
                  </span>
                </div>
              </div>
            </div>

            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:bg-white/40 transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Creating intuitive and engaging user interfaces with tools like
                Figma. I focus on user-centered design principles to deliver
                exceptional digital experiences.
              </p>
            </div>

            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:bg-white/40 transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Problem Solving
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I thrive on turning complex challenges into elegant solutions.
                Whether it's optimizing performance or implementing new
                features, I love finding innovative approaches.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to collaborate
            on new projects and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-105">
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
            <button className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-105">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </button>
            <button className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-105">
              <Github className="w-5 h-5" />
              View GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center transform rotate-45">
              <Star className="w-3 h-3 text-white transform -rotate-45" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              NIHITA KOLUKULA
            </span>
          </div>
          <p className="text-gray-600">
            © 2025 NIHITA KOLUKULA. Building web solutions with code,
            creativity, and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
