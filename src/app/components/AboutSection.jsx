"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [{
    title: "Skills",
    id: "skills",
    content: (
        <ul className='list-disc pl-4'>
            <li>C++, TypeScript, JavaScript, Kotlin, Python</li>
            <li>GitHub, Git, Postman, Docker, Android SDK, Firebase</li>
            <li>PostgreSQL, MySQL, MongoDB</li>
            <li>Next.js, Node.js, Express.js, React.js</li>
            <li>Docker, Kubernetes, TailwindCSS, Prisma, WebSockets, Zod, Auth.js</li>
        </ul>
    )
},
{
    title: "Education",
    id: "education",
    content: (
        <ul className='list-disc pl-4'>
            <li>Pune University, Pune | 2021 - 2025</li>
            <li className='list-none'>Bachelor&#39;s degree, Artificial Intelligence and Data Science</li>
        </ul>
    )
},
{
    title: "Certification",
    id: "certifications",
    content: (
        <ul className='list-disc pl-4'>
            <li>Android Development with Kotlin</li>
            <li>Supreme Batch DSA Bootcamp</li>
        </ul>
    )
}]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/AboutSection.jpg" width={500} height={500} alt='Computer desk' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I&#39;m Aadarsh Sharma, a passionate computer science enthusiast pursuing my Bachelors&#39;s at Pune University. Specializing in AI, Data Science and Software Engineering I also bring hands-on experience in software development and project leadership. As a Software Engineer enhancing web app interfaces, my goal is to apply my technical skills and academic insights to solve real-world problems efficiently. Through my projects, like the ConnectSport social platform and various AI-driven models, I continually strive to push the boundaries of technology and innovation.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    >
                        {" "}
                        Skils{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}
                    >
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
