'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectData = [
  {
    id: 1,
    title: 'Room Pension',
    description: 'Project 1',
    image: '/images/projects/Buttercup.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Desain Aplikasi Alumni SMPN 1 Bandung',
    description: 'Membuat design UI/UX untuk aplikasi pensiun SMKN 1 Bandung',
    image: '/images/projects/SMP1.png',
    tag: ['All', 'Design'],
    gitUrl: 'https://www.figma.com/proto/GRdvRENYYtJnO9h8pQ50CV/SMPN-1-BANDUNG-Mockup?node-id=14-479&p=f&t=Ft6VBMyJPLMRdyvb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
    previewUrl: 'https://www.figma.com/proto/GRdvRENYYtJnO9h8pQ50CV/SMPN-1-BANDUNG-Mockup?node-id=14-479&p=f&t=Ft6VBMyJPLMRdyvb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
  },
  {
    id: 3,
    title: 'Design web Dashboard BUMN',
    description: 'Membuat design UI/UX untuk Dashboard KPI BUMN',
    image: '/images/projects/Blossom.png',
    tag: ['All', 'Design'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Design Web TerraTNI',
    description: 'Membuat design UI/UX untuk web data teritorial TNI',
    image: '/images/projects/terraTNI.png',
    tag: ['All', 'Design'],
    gitUrl: 'https://www.figma.com/design/PEUShtYFxtvgewPtgE9Dkk/Data-Teritorial?node-id=1-2&t=FlsxfVnQeGNKEAvY-1',
    previewUrl: 'https://www.figma.com/proto/PEUShtYFxtvgewPtgE9Dkk/Data-Teritorial?node-id=1-2&p=f&t=20nB90moYTZKl9Hy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
  },
  {
    id: 5,
    title: 'Design Web MEDIC4',
    description: 'Tugas PKK web UKS digital',
    image: '/images/projects/medic4.png',
    tag: ['All', 'Design'],
    gitUrl: 'https://www.figma.com/design/I98tiVuRRmbk0P2ZTk4jfx/MEDIC4?node-id=0-1&t=P9hb8Zb7s3Zxw4GS-1',
    previewUrl: 'https://www.figma.com/proto/I98tiVuRRmbk0P2ZTk4jfx/MEDIC4?node-id=8-3&p=f&t=P9hb8Zb7s3Zxw4GS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A3',
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => 
    tag === 'All' || project.tag.includes(tag)
  );

  return (
    <>
      <h2 id='projects' className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
        <ProjectTag onClick={handleTagChange} name='App' isSelected={tag === 'App'} />
        <ProjectTag onClick={handleTagChange} name='Design' isSelected={tag === 'Design'} />
      </div>

      {/* Grid Responsive dengan Maksimal 3 Kolom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg p-4">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-white mt-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-2 flex justify-between">
              <a 
                href={project.gitUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a 
                href={project.previewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
