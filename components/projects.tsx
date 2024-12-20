import Image from 'next/image'
import projectcard from '../public/projectcard.svg'
import projectbanner from '../public/projectbanner.svg'
import projectmodal from '../public/projectmodal.svg'
import { useState } from 'react';
import discordlogo from '../public/discord_proj.svg'
import linkedinlogo from '../public/linkedin_proj.svg'
import twitterlogo from '../public/twitter_proj.svg'
import emaillogo from '../public/email_proj.svg'

interface Socials{
    discord:string;
    linkedin:string;
    twitter:string;
    email:string;
};
interface Mentor{
    name:string;
    socials:Socials;
}
interface Project{
    name:string;
    developer:string;
    desc:string;
    github:string;
    techstack:string[];
    socials:Socials;
    mentors:Mentor[];    
}

const projectData: Project[] = [
  {
    name: "SQLPage",
    developer: "SQLPage",
    desc: "SQLPage allows developers to build dynamic web applications using only SQL queries. It currently supports MySQL, SQLite, PostgreSQL, and Microsoft SQL Server. The project is seeking contributions to expand its functionality and usability.\nOfficial website: https://sql.datapage.app\nQuick start guide: https://learnsqlpage.com/sqlpage_quickstart.html\nYouTube tutorial videos: https://www.youtube.com/@SQLPage/playlists\n\nFocus Areas for Contribution:\n1.ODBC Connector:\nImplement an ODBC connector to allow SQLPage to connect seamlessly with any database system, broadening its compatibility beyond the currently supported databases(currently supports MySQL, SQLite, PostgreSQL, and Microsoft SQL Server).\n2.New Components:\nDevelop additional components, such as an interactive calendar (like Google Calendar), to expand SQLPage's capabilities and make it more versatile for real-world applications.\n3.OIDC Integration:\nAdd OpenID Connect (OIDC) support to enable Single Sign-On (SSO) authentication directly within SQLPage, enhancing security and user management.\n4.New Additions:\nPropose and implement new features or improvements that can further enrich SQLPage’s functionality and user experience.",
    techstack: [
    "Rust",
    "Handlebars",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Dockerfile",
    ],
    github: "https://github.com/sqlpage/sqlpage",
    mentors: [
    {
      name: "Ophir Lojkine",
      socials: {
        linkedin: "",
        discord: "",
        email: "contact@ophir.dev",
        twitter: "",
      },
    },
    {
      name: "Alexis Rouge Carrassat",
      socials: {
        linkedin: "",
        discord: "",
        email: "alexis.rcarrassat@gmail.com",
        twitter: "",
      },
    },
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  
  
  
  
  {
        name: "Tiled",
        developer: "MapEditor",
        desc: "1) Next Generation Tiled Extensions\nThis project is about exploring the possibility of using QML rather than JavaScript to author Tiled extensions.\nMore information at https://github.com/mapeditor/tiled/wiki/Next-generation-Tiled-extensions\n\n2) glTF Export for Maps\nThis project is about implement a glTF export feature for maps, allowing them to be quickly imported for use in other frameworks without that framework needing to implement support for all of Tiled's features.\nMore information at https://github.com/mapeditor/tiled/wiki/GSoC-2022#gltf-export-for-maps\n\n3) Smaller proposal idea could also be found among Tiled's open issues.",
        techstack: ["C++", "QML", "Java", "C", "Python", "XSLT"],
        github: "https://github.com/mapeditor/tiled",
        mentors: [{
            name: "Bjorn Lindeijer",
            socials: {          	 
        linkedin: '',
                discord: '',
                email: "mailto:bjorn@lindeijer.nl",
                twitter: "https://twitter.com/TiledApp"
            }
        }
  ],
        socials: {
            linkedin: "",
            discord: "",
            email: "",
            twitter: "",
        }
    },
  
  
  
  {
        name: "DebugSwift",
        developer: "DebugSwift",
        desc: "DebugSwift is a comprehensive toolkit designed to simplify and enhance the debugging process for Swift-based applications. Whether you're troubleshooting issues or optimizing performance, DebugSwift offers powerful features to make your debugging experience faster and more efficient.\n\n1) Main Thread Checker\nHelp create and improve a checker to detect any actions occurring off the main thread.\nMore information at https://github.com/DebugSwift/DebugSwift/issues/67\n\n2) Deep Link Opening\nContribute to the functionality that allows apps to open deep links smoothly.\nMore information at https://github.com/DebugSwift/DebugSwift/issues/28\n\n3) Improve Resources\nWork on optimizing resource management features for more efficient debugging.\nMore information at https://github.com/DebugSwift/DebugSwift/issues/88\n\nRequirements:\nXcode version: 14+\nmacOS version: Recommended for compatibility with Xcode 14 and the latest Swift features.\nDependencies: Any necessary dependencies will be mentioned within the respective project issue on GitHub.",
     techstack: ["Swift", "Ruby"],
     github: "https://github.com/DebugSwift/DebugSwift",
     mentors: [{
        name: "Matheus Gois",
        socials: {
          linkedin: "http://linkedin.com/in/maatheusgois/",
          discord: "",
          email: "matheusgoislimasilva@gmail.com",
          twitter: ""
            }
        },
    {
      name: "Murilo Teixeira",
      socials: {
        linkedin: "https://www.linkedin.com/in/murilot/",
        discord: "",
        email: "muriloo.teixeira@gmail.com",
        twitter: "",
      },
    },],
      socials: {
        linkedin: "",
        discord: "",
        email: "",
        twitter: "",
        }
    },
  
  
  
  
  {
        name: "TensorZero",
        developer: "TensorZero",
        desc: "TensorZero is a platform designed to optimize large language model (LLM) applications by creating a feedback loop that turns production data into smarter, faster, and cheaper models.\n\nProposal Ideas:\n1) Recipes: Create new optimization recipes. Simple ones include adapting fine-tuning recipes to other providers. More complex ones include RLHF/RLAIF, APE, and more.\n\n2) Examples & Demos: Apply TensorZero to new datasets, use cases (e.g. RAG), etc. Use it to demonstrate better performance than out-of-the-box models.\n\n3) Integrations: Add support for additional inference providers like Deepseek, xAI, and others to expand TensorZero’s capabilities.",
     techstack: ["Python", "Rust", "Machine Learning"],
     github: "https://github.com/tensorzero/tensorzero/",
     mentors: [{
        name: "Gabriel Bianconi",
        socials: {
            linkedin: "",
            discord: "",
            email: "gabriel@tensorzero.com",
            twitter: "",
            }
        },
     {
      name: "Viraj Mehta",
      socials: {
        linkedin: "",
        discord: "",
        email: "viraj@tensorzero.com",
        twitter: "",
      },
    },],
      socials: {
        linkedin: "",
        discord: "",
        email: "",
        twitter: "",
        }
    },
  
  
  {
    name: "ClassroomIO",
    developer: "ClassroomIO",
    desc: "ClassroomIO is an open-source platform focused on improving educational workflows and classroom management. The project provides tools to simplify tasks for students, teachers, and administrators, offering features like assignment tracking, collaboration tools, and streamlined communication.\n\nProposal Ideas:\n1) Standard Code Formatting: Improve code quality and maintain consistency across the project.\nMore information at https://github.com/classroomio/classroomio/issues/516\n\n2) Self-host with Docker: Enable self-hosting with Docker for easier deployment.\nMore information at https://github.com/classroomio/classroomio/issues/508\n\n3) Self-paced Course: Implement features to create and manage self-paced courses.\nMore information at https://github.com/classroomio/classroomio/issues/513\n\n4) Export All Students: Add functionality to export student data for administrative tasks.\nMore information at https://github.com/classroomio/classroomio/issues/502\n\n5) Background Jobs: Improve background job handling for better performance.\nMore information at https://github.com/classroomio/classroomio/issues/494\n\n6) Improve Email Sending: Enhance email functionality for better reliability and performance.\nMore information at https://github.com/classroomio/classroomio/issues/519\n\n7) Email Tests: Implement proper testing for email functionality.\nMore information at https://github.com/classroomio/classroomio/issues/520\n\n8) Experiments:\n   - Youtube to Course: Convert YouTube content into course material.\n   More information at https://github.com/classroomio/classroomio/issues/486\n   \n   - Documentation and Blog Posts to Course: Create courses from documentation and blogs.\n   More information at https://github.com/classroomio/classroomio/issues/521\n\n9) Minor Improvements:\n   - Additional UI and functionality fixes.\n   https://github.com/classroomio/classroomio/issues/488\n   https://github.com/classroomio/classroomio/issues/478\n   https://github.com/classroomio/classroomio/issues/489",
    techstack: [
    "PLpgSQL",
    "Svelte",
    "HTML",
    "JavaScript",
    "TypeScript",
    "MDX",
    ],
    github: "https://github.com/classroomio/classroomio",
    mentors: [
    {
      name: "Rotomi Best",
      socials: {
        linkedin: "https://www.linkedin.com/in/best-r-7487b283/",
        discord: "rotimibest",
        email: "best@classroomio.com",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  
  {
    name: "Brisa",
    developer: "Brisa",
    desc: "Brisa is an experimental web framework inspired by others, taking the best of each one.\n\nProposal Ideas:\n1) Expand Documentation and Playground: Make the framework more accessible by improving documentation and creating an interactive playground.\n\n2) Develop Adapters: Extend cloud provider support by creating adapters for various platforms.\n\n3) UI Component Library: Build a UI component library (inspired by shadcn) entirely with Brisa, showcasing its capabilities.\n\n4) TypeScript Type Definitions: Improve TypeScript type definitions to enhance the developer experience.\n\n5) Bug Fixes: Contribute by fixing bugs labeled as \"good first issue\" to onboard new contributors.",
    techstack: [
    "TypeScript",
    "CSS",
    ],
    github: "https://github.com/brisa-build/brisa",
    mentors: [
    {
      name: "Aral Roca Gomez",
      socials: {
        linkedin: "",
        discord: "",
        email: "contact@aralroca.com",
        twitter: "",
      },
    },
    {
      name: "Albert Sabaté",
      socials: {
        linkedin: "",
        discord: "",
        email: "albert@zenettechnology.com",
        twitter: "",
      },
    },
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  {
    name: "DashPress",
    developer: "DashPress",
    desc: "Dashpress is an admin app generator to help you transform your database schema into a sleek, customizable and performant admin dashboards quickly and efficiently.\n\nProposal Ideas:\n1.Resend Integration\n2.WhatsApp Integration\n\nMore Information about contrubuting at:\nhttps://github.com/dashpresshq/dashpress/blob/master/docs/CONTRIBUTING.md",
    techstack: [
    "TypeScript"
    ],
    github: "https://github.com/dashpresshq/dashpress",
    mentors: [
    {
      name: "Ayobami Akingbade",
      socials: {
        linkedin: "",
        discord: "",
        email: "akingbadefred@gmail.com",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  {
    name: "Laudspeaker",
    developer: "Laudspeaker",
    desc: "Proposal Ideas (ranked in priority):\n\n1) Add SMTP support to Laudspeaker\n-- Laudspeaker offers email sending capabilities via API like sendgrid and mailgun, we should allow users to configure using their own SMTP server as well\n\n2) Add whatsapp support to Laudspeaker\n-- Laudspeaker aims to offer messaging across any messaging platform, we should offer the ability to add, and send via a users whatsapp business account\n\n3) Add React Native library to Laudspeaker\n-- Laudspeaker has mobile sdks for android, and ios, we should add one for react native as well, as well as docs and a sample app showing how to set this up\n\n4) Add New UpsertBatch API endpoint\n-- Laudspeaker currently has an upsert endpoint, which allows developers to update or insert a single user at a time, we should also support an upsertbatch endpoint which allows a user to add or edit an arbitrarily large number of users at once\n\n5) Add Deep linking functionality to ios and android sdks\n\n6) Add Install attribution functionality to ios and android sdks\n\n7) Test, and improve deletion API\n-- Laudspeaker has a delete function, but we need to test it works in all scenarios and update if there are errors\n\n8) Add deployment instructions for community, and easy deploy to render quickstart\n-- laudspeaker wants to make it easier for the community to use the product, and part of that is making it easier to deploy\n\n9) Add Live Activities support to Laudspeaker's ios sdk\n-- Apple recently released live Activities",
    techstack: [	"TypeScript","CSC","Javascript","Shell","Dockerfile","Java","Swift","MDX"
    ],
    github: "https://github.com/laudspeaker/laudspeaker",
    mentors: [
    {
      name: "Mahamad C.",
      socials: {
        linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
        discord: "",
        email: "",
        twitter: "",
      },
    },
    {
      name: "Abheek Basu",
      socials: {
        linkedin: "https://www.linkedin.com/in/abheek-basu-4a72a398/",
        discord: "",
        email: "",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  
  
  {
    name: "Laudspeaker Swift SDK",
    developer: "Laudspeaker",
    desc: "Proposal Ideas (ranked in priority):\n\n1) Add SMTP support to Laudspeaker\n-- Laudspeaker offers email sending capabilities via API like sendgrid and mailgun, we should allow users to configure using their own SMTP server as well\n\n2) Add whatsapp support to Laudspeaker\n-- Laudspeaker aims to offer messaging across any messaging platform, we should offer the ability to add, and send via a users whatsapp business account\n\n3) Add React Native library to Laudspeaker\n-- Laudspeaker has mobile sdks for android, and ios, we should add one for react native as well, as well as docs and a sample app showing how to set this up\n\n4) Add New UpsertBatch API endpoint\n-- Laudspeaker currently has an upsert endpoint, which allows developers to update or insert a single user at a time, we should also support an upsertbatch endpoint which allows a user to add or edit an arbitrarily large number of users at once\n\n5) Add Deep linking functionality to ios and android sdks\n\n6) Add Install attribution functionality to ios and android sdks\n\n7) Test, and improve deletion API\n-- Laudspeaker has a delete function, but we need to test it works in all scenarios and update if there are errors\n\n8) Add deployment instructions for community, and easy deploy to render quickstart\n-- laudspeaker wants to make it easier for the community to use the product, and part of that is making it easier to deploy\n\n9) Add Live Activities support to Laudspeaker's ios sdk\n-- Apple recently released live Activities",
    techstack: [ "Swift"
    ],
    github: "https://github.com/laudspeaker/laudspeaker-swift-sdk",
    mentors: [
    {
      name: "Mahamad C.",
      socials: {
        linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
        discord: "",
        email: "",
        twitter: "",
      },
    },
    {
      name: "Abheek Basu",
      socials: {
        linkedin: "https://www.linkedin.com/in/abheek-basu-4a72a398/",
        discord: "",
        email: "",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  
  {
    name: "Laudspeaker Android SDK",
    developer: "Laudspeaker",
    desc: "Proposal Ideas (ranked in priority):\n\n1) Add SMTP support to Laudspeaker\n-- Laudspeaker offers email sending capabilities via API like sendgrid and mailgun, we should allow users to configure using their own SMTP server as well\n\n2) Add whatsapp support to Laudspeaker\n-- Laudspeaker aims to offer messaging across any messaging platform, we should offer the ability to add, and send via a users whatsapp business account\n\n3) Add React Native library to Laudspeaker\n-- Laudspeaker has mobile sdks for android, and ios, we should add one for react native as well, as well as docs and a sample app showing how to set this up\n\n4) Add New UpsertBatch API endpoint\n-- Laudspeaker currently has an upsert endpoint, which allows developers to update or insert a single user at a time, we should also support an upsertbatch endpoint which allows a user to add or edit an arbitrarily large number of users at once\n\n5) Add Deep linking functionality to ios and android sdks\n\n6) Add Install attribution functionality to ios and android sdks\n\n7) Test, and improve deletion API\n-- Laudspeaker has a delete function, but we need to test it works in all scenarios and update if there are errors\n\n8) Add deployment instructions for community, and easy deploy to render quickstart\n-- laudspeaker wants to make it easier for the community to use the product, and part of that is making it easier to deploy\n\n9) Add Live Activities support to Laudspeaker's ios sdk\n-- Apple recently released live Activities",
    techstack: [   "Java"
    ],
    github: "https://github.com/laudspeaker/laudspeaker-android-sdk",
    mentors: [
    {
      name: "Mahamad C.",
      socials: {
        linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
        discord: "",
        email: "",
        twitter: "",
      },
    },
    {
      name: "Abheek Basu",
      socials: {
        linkedin: "https://www.linkedin.com/in/abheek-basu-4a72a398/",
        discord: "",
        email: "",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  }, 
  
  {
    name: "Pumpbin",
    developer: "Pumpbin",
    desc: "The iced has released version 0.13.1, but this project is still using version 0.13.0-dev. The participants should update the project to version 0.13.1 of Iced, test the changes, and resolve any potential issues caused by the version upgrade.\n   - Check if the remaining dependencies can be upgraded, and update them.\n   - This project has English documentation, but unfortunately, it is mostly AI-translated with minimal manual verification. One would require to gain a thorough understanding of PumpBin and subsequently improve the English documentation, it would be a significant contribution and quite a challenging task.\n\nImportant points:\n1.Proficiency in the Rust programming language is required.\n2.After modifying the code, a comprehensive test is required.\n3.Initiate a discussion before making significant changes.",
    techstack: [
    "Rust","Shell"
    ],
    github: "https://github.com/pumpbin/pumpbin",
    mentors: [
    {
      name: "Xingquan Liu",
      socials: {
        linkedin: "",
        discord: "",
        email: "b1nhack@proton.me",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  
  {
    name: "rust-shellcode",
    developer: "b1nhack",
    desc: " The project uses the windows-sys crate (from the windows-rs repository by Microsoft). Participants should update it to the latest version to take advantage of recent improvements, bug fixes, and updates provided by the maintainers.\n   - If new techniques for executing shellcode on the Windows platform have emerged recently but are not included in the rust-shellcode repository, participants are encouraged to identify and add them.\n\nImportant points:\n1.Proficiency in the Rust programming language is required.\n2.After modifying the code, a comprehensive test is required.\n3.Initiate a discussion before making significant changes.",
    techstack: [
    "Rust","Shell"
    ],
    github: "https://github.com/b1nhack/rust-shellcode",
    mentors: [
    {
      name: "Xingquan Liu",
      socials: {
        linkedin: "",
        discord: "",
        email: "b1nhack@proton.me",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },
  
  {
    name: "Open World Holidays",
    developer: "Vacanza",
    desc: "Proposal ideas:\n\nv1 Version: Focus on breaking changes for improved structure, standardization, and feature expansion.\n\n- Design and implement custom exceptions system\n- Work on entities standardization according to ISO-3166 standard\n- Improve l10n approach to have messages grouped by locale\n- Migrate documentation to mkdocs\n- Implement iCal data export support\n\nMore details at: https://github.com/vacanza/holidays/issues/1649",
    techstack: [
    "TypeScript"
    ],
    github: "https://github.com/vacanza/holidays/",
    mentors: [
    {
      name: "Arkadii Yakovets",
      socials: {
        linkedin: "https://www.linkedin.com/in/arkid15r/",
        discord: "arkid15r",
        email: "arkadii.yakovets@gmail.com",
        twitter: "",
      },
    },{
      name: "Kateryna Golovanova",
      socials: {
        linkedin: "https://www.linkedin.com/in/kate-golovanova",
        discord: "",
        email: "kasya8888@gmail.com",
        twitter: "",
      },
    }
  
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
  },  
  {
    name: "BriefBox",
    developer: "Charles David Mupende",
    desc: "Briefbox is a tool designed for archiving emails from multiple IMAP and POP3 accounts. It provides a user-friendly web interface to manage email accounts, search archived emails, and view email details along with attachments.\n\nProposal Ideas:\n1. Search Optimization: Develop methods to quickly locate relevant emails at scale.\n2. Email Import/Export: Create features for importing and exporting emails easily.\n3. OAuth Integration: Implement OAuth to link Briefbox with other email providers for easier access.",
    techstack: [	"Python","Javascript"
    ],
    github: "https://github.com/bandundu/email-archiver",
    mentors: [
    {
      name: "Charles David Mupende",
      socials: {
        linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
        discord: "charlesmcgray",
        email: "charlesdavid@mupende.com",
        twitter: "",
      },
    }
    ],
    socials: {
    linkedin: "",
    discord: "",
    email: "",
    twitter: "",
    },
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
                <div className='absolute top-[4%] left-[10%] w-[80%] align-middle font-chakra text-scale-60 text-center text-brand text-nowrap overflow-hidden'>
                {project.name.toUpperCase()}
                </div>
                <div className='absolute top-[16%] left-[20%] w-[60%] align-middle font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden'>
                {project.developer.toUpperCase()}
                </div>
                <div className='absolute top-[27%] left-0 py-[3%] px-[4%] w-full h-[53%] flex justify-center flex-wrap gap-x-[3%] text-grey text-center items-start text-scale-30 overflow-x-hidden overflow-y-auto scrollbar'>
                {project.techstack.map((tech,index)=>{
                    return(
                        <div key={index} className="text-brand font-chakra p-[2.5%] h-fit w-fit border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)] text-scale-30-2">{tech}</div>
                    );
                })}
                </div>
                <div className='absolute bottom-[0.75%] left-[0.75%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700' onClick={openModal}>
                Know More
                </div>
                <a href={project.github} className='absolute bottom-[0.75%] left-[51.25%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700' rel="noopener noreferrer" target="_blank">
                See project
                </a>
                {isOpen && (
                    <div className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center backdrop-blur-[calc(0.1*(1vw-3.6px)+0.5px)] modal" onClick={handleBackdropClick}>
                    <div className="relative w-[75%]">
                        <Image src={projectmodal}  alt="project modal"/>
                        <div className="absolute font-kleemax text-brand top-[0%] left-[0%] w-[30.2%] h-[89%] p-[1.5%] text-center overflow-x-hidden overflow-y-auto scrollbar text-scale-20-4 flex flex-col justify-between gap-[2%]" style={{clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 5%)"}}>
                            {project.name.toUpperCase()}
                            <div className="flex gap-x-[5%] gap-y-0  flex-wrap pt-[5%] justify-center">
                            {project.techstack.map((tech,index)=>{
                                return(
                                <div key={index} className="text-brand px-[2.5%] py-[1.5%] font-chakra h-fit w-fit my-[2%] border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)]">{tech}</div>
                                );
                            })}
                            </div>
                            <div className='w-full flex-col flex items-baseline mt-[5%]'>
                            {project.mentors.map((mentor, index) => (
                                <div key={index} className="flex-col flex items-baseline w-full my-[2%]">
                                    <div className=' text-brand font-chakra text-scale-100-3 w-full'>{mentor.name}</div>
                                    <div key={index} className="flex items-baseline w-full justify-center gap-[5%]">
                                    {(Object.keys(mentor.socials) as (keyof Socials)[]).map((key) => {
                                        if (!mentor.socials[key]) return null;
                                        const social = mentor.socials[key];
                                        return (
                                            <a key={key} href={social} rel="noopener noreferrer" target="_blank" className="w-[15%] min-w-[15px] aspect-square py-[2%] hover:scale-110 duration-700">
                                                <Image src={asset[key]} alt={key}/>
                                            </a>
                                        );
                                    })}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <a href={project.github} rel="noopener noreferrer" target="_blank" className="absolute font-kleemax text-black bottom-[0%] left-[0%] w-[30%] py-[1.5%] h-[9%] text-center align-middle text-scale-15-1 hover:scale-105 duration-700">VISIT PROJECT</a>
                        <pre className='absolute top-0 left-[31.5%] w-[65.5%] h-[88%] m-[3%] pr-[3%] font-chakra text-scale-15-5 text-brand text-wrap break-words overflow-y-auto shadow scrollbar'>{project.desc}</pre>                       
                    </div>
                    </div>
                )}
            </div>
    );
};


const Projects = () => {
    var TBA = false;
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