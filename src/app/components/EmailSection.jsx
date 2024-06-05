"use client"
import React, { useState } from 'react'
import GithubIcon from '../../../public/github.png'
import LeetcodeIcon from '../../../public/leetcode.png'
import LinkedinIcon from '../../../public/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                const resData = await response.json();
                console.log(resData);
                setEmailSubmitted(true);
                console.log('Message sent.');
            } else {
                console.log('Received non-JSON response from server');
            }
        } catch (error) {
            console.error('Failed to send email:', error);
        }

    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 mp-24 gap-4 relative'>
        {/* <div className='bg-gradient-to-br from-[#d4a373] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div> */}
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let&#39;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I am actively seeking new opportunities and am open to discussing potential collaborations. Should you have any inquiries or simply wish to connect, please feel free to reach out. I am committed to responding promptly.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/aadarsharma" target='_blank'>
                    <Image src={GithubIcon} alt="Aniket Github Icon" width={24} height={24}/>
                </Link>
                <Link href="https://leetcode.com/u/adarsharma56763/" target='_blank'>
                    <Image src={LeetcodeIcon} alt="Aniket Leetcode Icon" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/aadarsh-sharma/" target='_blank'>
                    <Image src={LinkedinIcon} alt="Aniket LinkedIn Icon" width={24} height={24}/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label 
                        htmlFor='email' 
                        type="email" 
                        className='text-white block mb-2 text-sm font-medium'>
                            Your email
                    </label>
                    <input 
                        name='email'
                        type='email' 
                        id='email' 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='abc@company.com'/>
                </div>
                <div className='mb-6'>
                    <label 
                        htmlFor='subject'
                        className='text-white block mb-2 text-sm font-medium'>
                            Subject
                    </label>
                    <input 
                        name='subject'
                        type='text' 
                        id='subject' 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Regarding job...'/>
                </div>
                <div className='mb-6'>
                    <label 
                        htmlFor='message' 
                        className='text-white block mb-2 text-sm font-medium'>
                            Message
                    </label>
                    <input 
                        name='message'
                        type='text' 
                        id='message' 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."/>
                </div>
                <button
                    type='submit'
                    className='bg-[#d4a373] hover:bg-[#8f6841] text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-600 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection
