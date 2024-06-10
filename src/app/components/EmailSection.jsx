import React from 'react'
import GithubIcon from '../../../public/images/projects/github_icon.svg'
import LinkedinIcon from '../../../public/images/projects/linkedin_icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
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
        <div>
            <form className='flex flex-col gap-4'>
                <label htmlFor='email' className='text-white'>Your email</label>
                <input className='text-black'
                    type='email' 
                    id='email' 
                    required 
                    placeholder='example@gmail.com'/>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
