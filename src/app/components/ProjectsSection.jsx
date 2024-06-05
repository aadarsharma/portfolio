import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "Transafer",
        description: "Transafer is a feature-rich digital wallet application that revolutionizes the way users manage their finances.",
        image: "/images/projects/project-1.png",
        gitUrl: "https://github.com/aadarsharma/Transafer",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Chess",
        description: "Chess application built using web sockets for real-time gameplay. Players can connect to the application and play chess against each other, with moves being updated in real time.",
        image: "/images/projects/project-2.png",
        gitUrl: "https://github.com/aadarsharma/chess",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Twitter Clone",
        description: "Displays a timeline of tweets from the users the current user is following.",
        image: "/images/projects/project-3.png",
        gitUrl: "https://github.com/aadarsharma/Twitter-Clone",
        previewUrl: "/"
    }
]

const ProjectsSection = ({ imgUrl, title, description }) => {
  return (
    <section>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectData.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}</div>
    </section>
  )
}

export default ProjectsSection