import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online store with React, Node.js, and MongoDB.",
      image: "https://img.magnific.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style project management tool with drag-and-drop.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtthunEw4fwUA-7DIMUf6JbFiqKGPockuDQ&s",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather updates with interactive charts.",
      image: "https://s3-alpha.figma.com/hub/file/4090659507/a7a13be5-2145-4d43-8b02-9493915629bd-cover.png",
      tags: ["React", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Markdown-based blogging platform with authentication.",
      image: "https://storage.ghost.io/c/08/a3/08a3cb77-16f2-4623-b90a-2936db90af0a/content/images/wordpress/2022/01/New-Project-61.png",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-2 w-20 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Click to see live demos or view the source code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium transition"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
