import React from 'react'
import GithubIcon from '../../../public/images/projects/github_icon.svg'
import LinkedinIcon from '../../../public/images/projects/linkedin_icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at-center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-0 transform -translate-x-1/2 -translate-y-1/2'></div>
        <div className='relative z-10'>
            <h5 className='text-xl font-bold text-white my-2'>
                Lets connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                Im currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, Ill try my best
                to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/gaghannn">
                    <Image src={GithubIcon} alt='Github Icon' width={32} height={32} />
                </Link>
                <Link href="https://linkedin.com">
                    <Image src={LinkedinIcon} alt='Linkedin Icon' width={32} height={32} />
                </Link>
            </div>
        </div>
        <div className='relative z-10'>
            <form className='flex flex-col'>
                <div className='mb-6'>
                <label 
                    htmlFor='email' 
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Your email
                </label>
                <input 
                    type='email' 
                    id='email' 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg text-sm block w-full p-2.5'
                    placeholder='example@gmail.com'
                />
                </div>
                <div className='mb-6'>
                <label 
                    htmlFor='subject' 
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Subject
                </label>
                <input 
                    type='text' 
                    id='subject' 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg text-sm block w-full p-2.5'
                    placeholder='Just saying hi!'
                />
                </div>
                <div className='mb-6'>
                <label 
                    htmlFor="message"
                    className='text-white block text-sm mb-2 font-medium'
                >
                    Message
                </label>
                <textarea 
                    name="message" 
                    id="message"
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg text-sm block w-full p-2.5'
                    placeholder='Lets talk about...'
                />
                </div>
                <button
                    type='submit'
                    className='bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg w-full'
                >
                    Send Message
                </button> 
            </form>
        </div>
    </section>
  )
}

export default EmailSection
