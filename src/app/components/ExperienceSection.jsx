import React from 'react'

const experiences = [
  {
    title: "Software Engineer Intern",
    institution: "Bluestock Fintech",
    dateRange: "Jan 2024 - Mar 2024",
    location: "Pune, MH, India",
    details: [
      "Contributed to the full software development lifecycle of 1 major web applications, from conception to deployment, using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Designed and implemented user-friendly interfaces with React, improving user engagement by 25% as measured by session time and interaction rates.",
      "Engaged in company-sponsored training programs to advance knowledge in advanced web development frameworks and best practices.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className='text-white'>
      <div className='items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 flex flex-col md:flex-row'>
        <div className='md:w-1/3 text-center justify-center p-5'>
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
        </div>
        <div className="md:w-2/3 space-y-5 sm:p-5 md:space-y-10 px-10 py-5">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-[#fefae0] pl-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-md">{exp.institution}</p>
              <p className="text-sm italic">{exp.dateRange} · {exp.location}</p>
              <ul className="list-disc pl-5 mt-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
