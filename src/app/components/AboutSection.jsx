'use client';
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>PHP</li>
        <li>SQL</li>
        <li>Vue.js</li>
        <li>Figma</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Vocational High School 4 Bandung</li>
      </ul>
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className='list-disc pl-2'>
        <li>Using Vue to make e-commerce web</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTrasnsition] = useTransition();

  const handleTabChance = (id) => {
    startTrasnsition(() => {
      setTab(id);
    })
  }

  return (
    <section id='about' className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/Photo.jpg'
          width={500}
          height={500}
          alt='Photo'
          className='rounded-full'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          I am a software engineering student with skills in web development and UI/UX design. 
          I always strive to give my best in every project, with a high sense of responsibility and a strong work ethic. 
          My ability to develop websites and design intuitive user interfaces allows me to create effective and user-friendly solutions. 
          I quickly adapt to new technologies and trends and am always eager to learn and improve my skills. 
          The combination of technical understanding and creative design makes me well-prepared to face various challenges in the field of web development and user interface design.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton 
              selectTab={() => handleTabChance('skills')} 
              active={tab === 'skills'}
              > 
                {''}
                Skills {''}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChance('education')} 
              active={tab === 'education'}
              > 
                {''}
                Education {''}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChance('experience')} 
              active={tab === 'experience'}
              > 
                {''}
                Experience {''}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection