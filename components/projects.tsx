import Image from 'next/image'
import asset1 from '../public/org.svg'

interface Project{
    title:string;
    desc:string;
}
const text='Lorem ipsum dolor sit amet consectetur. Pharetra orci tellus suspendisse vitae nunc. Pharetra facilisis ornare bibendum ultricies tincidunt interdum. Mi iaculis id quisque a. Diam in sed orci felis scelerisque. Id ultrices vitae in tellus eget sit. Eu odio neque feugiat.';

const projectData:Project[] = [
    {
        title: 'Community 01',
        desc: text
    },
    {
        title: 'Community 02',
        desc: text
    },
    {
        title: 'Community 03',
        desc: text
    },
    {
        title: 'Community 04',
        desc: text
    },
    {
        title: 'Community 05',
        desc: text
    },
    
];

const ProjectCard = ({title,desc} : Project) => {
    return (
            <div className="relative w-[45%] sm:w-[30%] m-[2%] sm:m-[1%]">
                <Image className="backdrop-blur" src={asset1} alt="org card"/>
                <div className='absolute top-[4%] left-[10%] w-[80%] align-middle font-kleemax text-scale-60 text-center text-timeline text-nowrap overflow-hidden'>
                {title.toUpperCase()}
                </div>
                <div className='absolute top-[25%] left-0 py-[3%] px-[4%] w-[100%] h-[62%] text-left text-grey text-scale-40 overflow-hidden'>
                {desc}
                </div>
            </div>
    );
};


const Projects = () => {
    var TBA = true;
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="projects">
            <div className='text-center text-faq font-kleemax text-scale-40 drop-shadow-green'>
            PROJECTS
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-faq drop-shadow-green font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='w-full p-[10%] sm:p-[5%] flex justify-center flex-wrap'>
            {projectData.map((project, index)=>
            <ProjectCard key={index} title={project.title} desc={project.desc}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Projects;