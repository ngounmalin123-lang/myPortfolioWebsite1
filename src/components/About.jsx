import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 w-20 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* Bio & Skills */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hi, I'm Ngoun Malin</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building
              modern web applications. I love turning complex problems into simple, beautiful,
              and intuitive designs. When I'm not coding, you'll find me exploring new
              technologies or writing technical articles.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-indigo-600 font-bold text-xl">5+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-indigo-600 font-bold text-xl">50+</p>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-indigo-600 font-bold text-xl">30+</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-indigo-600 font-bold text-xl">10+</p>
                <p className="text-gray-500 text-sm">Tech Stacks</p>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              {["React", "Vue", "Node.js", "Python", "Tailwind CSS", "TypeScript", "MongoDB", "GraphQL"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

