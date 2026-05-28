import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
      color: "bg-blue-50 border-blue-200",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
      color: "bg-green-50 border-green-200",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git/GitHub", "AWS", "CI/CD", "Linux", "Figma"],
      color: "bg-purple-50 border-purple-200",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Agile/Scrum", "Communication", "Time Management"],
      color: "bg-amber-50 border-amber-200",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Skills & Expertise</h2>
          <div className="mt-2 w-20 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use daily to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl border-2 ${category.color} transition-transform hover:scale-105 duration-300`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-700"
                  >
                    <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Skill Bars (optional) */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Proficiency</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Frontend</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Backend</span>
                <span className="text-gray-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">DevOps</span>
                <span className="text-gray-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
