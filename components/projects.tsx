import Image from 'next/image'
import projectcard from '../public/projectcard.svg'
import projectbanner from '../public/projectbanner.svg'
import projectmodal from '../public/projectmodal.svg'
import { useState } from 'react';
import discordlogo from '../public/discord_proj.svg'
import linkedinlogo from '../public/linkedin_proj.svg'
import twitterlogo from '../public/twitter_proj.svg'
import emaillogo from '../public/email_proj.svg'
interface Project{
    name:string;
    developer:string;
    desc:string;
    github:string;
    techstack:string[];
    socials: {
    discord:string;
    linkedin:string;
    twitter:string;
    email:string;
    }
    
}
const text='Lorem ipsum dolor sit amet consectetur. Pharetra orci tellus suspendisse vitae nunc. Pharetra facilisis ornare bibendum ultricies tincidunt interdum. Mi iaculis id quisque a. Diam in sed orci felis scelerisque. Id ultrices vitae in tellus eget sit. Eu odio neque feugiat.';

const projectData: Project[] = [
    {
        name: 'Tiled',
        developer: 'Tiled',
        desc: '1) "Next Generation Tiled Extensions\nThis project is about exploring the possibility of using QML rather than JavaScript to author Tiled extensions.\nMore information at <a href="https://github.com/mapeditor/tiled/wiki/Next-generation-Tiled-extensions">https://github.com/mapeditor/tiled/wiki/Next-generation-Tiled-extensions</a> ',
        techstack: ['Tech1', 'Tech2', 'Tech3'],
        github: 'https://github.com/GDSC-IIIT-Kalyani',
        socials: {
            discord: 'discord-invite',
            linkedin: 'linkedin-profile',
            twitter: '',
            email: ''
        }
    },
];

const asset = {
    discord: discordlogo,
    linkedin: linkedinlogo,
    twitter: twitterlogo,
    email: emaillogo
};

const ProjectCard = ({project}: {project: Project}) => {
    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (e:any) => {
    // Only close if clicking the backdrop itself, not the modal content
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

    return (
            <div className="relative w-[85%] sm:w-[30%] m-[2%] sm:m-[1%]">
                <Image className="backdrop-blur" src={projectcard} alt="project card"/>
                <div className='absolute top-[4%] left-[10%] w-[80%] align-middle font-kleemax text-scale-60 text-center text-brand text-nowrap overflow-hidden'>
                {project.name.toUpperCase()}
                </div>
                <div className='absolute top-[16%] left-[20%] w-[60%] align-middle font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden'>
                {project.developer.toUpperCase()}
                </div>
                <div className='absolute top-[27%] left-0 py-[3%] px-[4%] w-full h-[53%] flex justify-center  gap-[1%] text-grey text-center text-scale-30 overflow-hidden'>
                {project.techstack.map((tech,index)=>{
                    return(
                        <div key={index} className="text-brand font-chakra p-[1.5%] h-fit w-[24%] border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)] text-scale-30-2">{tech}</div>
                    );
                })}
                </div>
                <div className='absolute bottom-[1%] left-[0.75%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden' onClick={openModal}>
                Know More
                </div>
                <a href={project.github} className='absolute bottom-[1%] left-[51.25%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden' rel="noopener noreferrer" target="_blank">
                See project
                </a>
                {isOpen && (
                    <div className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center backdrop-blur-[calc(0.1*(1vw-3.6px)+0.5px)] modal" onClick={handleBackdropClick}>
                        <div className="relative w-[75%] h-fit">
                        <Image src={projectmodal} alt="project modal"/>
                        <div className="absolute font-kleemax text-brand top-[0%] left-[0%] w-[30%] p-[1.5%] text-left overflow-hidden text-scale-20-5 flex flex-col">{project.name.toUpperCase()}
                        <div className="flex gap-[2%] flex-wrap pt-[5%]">
                        {project.techstack.map((tech,index)=>{
                            return(
                            <div key={index} className="text-brand px-[2.5%] py-[1.5%] font-chakra h-fit w-fit my-[2%] border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)]">{tech}</div>
                            );
                        })}
                        </div>
                        </div>
                        <a href={project.github} rel="noopener noreferrer" target="_blank" className="absolute font-kleemax text-black bottom-[0%] left-[0%] w-[30%] py-[1.5%] h-[9%] text-center align-middle text-scale-15-1">VISIT PROJECT</a>
                        <div className='absolute bottom-[12%] left-[2%] w-[28%] flex gap-[5%] items-baseline'>
                        {(Object.keys(project.socials) as (keyof typeof project.socials)[]).map((key, index) => {
                            if (!project.socials[key]) return null;
                            const social = project.socials[key];
                            return (
                                <a key={index} href={social} rel="noopener noreferrer" target="_blank" className="w-[10%] min-w-[15px] aspect-square py-[2%] hover:scale-110 duration-700">
                                    <Image src={asset[key]} alt={key}/>
                                </a>
                            );
                        })}
                        </div>
                        <pre className='absolute top-0 left-[31.5%] w-[68.5%] h-full p-[3%] font-chakra text-scale-15-5 text-brand text-wrap text-justify overflow-hidden'>{project.desc}</pre>
                        </div>                        
                    </div>
                )}
            </div>
    );
};


const Projects = () => {
    var TBA = true;
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="projects">
            <div className='text-center text-brand font-kleemax text-scale-40 drop-shadow-blue'>
                PROJECTS
                <div className='-z-10 w-[25%] absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-40.5%]'>
                    <Image className="mx-auto w-full" src={projectbanner} alt="projectbanner" />
                </div>
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-brand drop-shadow-blue font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='w-full p-[10%] sm:p-[5%] flex justify-center flex-wrap'>
            {projectData.map((project, index)=>
            <ProjectCard key={index} project={project}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Projects;