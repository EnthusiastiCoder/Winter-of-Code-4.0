import Image from 'next/image'
import Link from 'next/link'
import asset1 from '../public/team.svg'
import asset2 from '../public/teamLink.svg'
import asset3 from '../public/teamName.svg'
import JumbleText from '@/components/jumble'
interface Teammate{
    name:string;
    bio:string;
}

const teamData:Teammate[] = [
    {
        name:'Oindrila',
        bio: 'https://www.linkedin.com/in/oindriladas02/',
    },
    {
        name: 'Arpan',
        bio: 'https://www.linkedin.com/in/arpan-mandal-74a0672a2/',
    },
    {
        name: 'Arup',
        bio: 'https://www.linkedin.com/in/arup-matabber/',
    },
    {
        name:'Ritam B',
        bio: 'https://www.linkedin.com/in/ritam-biswas-197138286/',
    },
    {
        name:'Ayush',
        bio: 'https://www.linkedin.com/in/ayush-prasad-b42992322/',
    },
    {
        name:'Arya',
        bio: 'https://www.linkedin.com/in/arya-raj-83908a253/',
    },
    {
        name:'Samridhi',
        bio: 'https://www.linkedin.com/in/samridhi-mukhopadhyay-36295228a/',
    },
    {
        name:'Himanshu',
        bio: 'https://www.linkedin.com/in/himanshu-patel-61a2712b6/',
    },
    {
        name:'Sagnik',
        bio: 'https://www.linkedin.com/in/sagnik0012/',
    },
    {
        name:'Soaham',
        bio: 'https://www.linkedin.com/in/soaham-sur-54a83528b/',
    },
    {
        name:'Sanu',
        bio: 'https://www.linkedin.com/in/sanu-mukherjee1001/',
    },
    {
        name:'Ritam D',
        bio: 'https://www.linkedin.com/in/ritamde25/',
    },
    {
        name:'Divyansh',
        bio: 'https://www.linkedin.com/in/divyansh-kanaujia-989792288/',
    },
    {
        name:'Krishna',
        bio: 'https://www.linkedin.com/in/krishna-singh-554939288/',
    },
    {
        name:'Karan',
        bio: 'https://www.linkedin.com/in/karan-kumar-12b227239/',
    },
    {
        name:'Lokesh',
        bio: 'https://www.linkedin.com/in/lokesh-meena-029244288/',
    },
];

const TeamCard = ({name,bio} : Teammate) => {
    var fname=name.split(" ")[0].toUpperCase();
    return (
            <div className="relative w-[35%] sm:w-[20%] my-[1.5%] overflow-hidden hover:scale-105 duration-700">
                <Image src={asset1} alt="teammate card"/>
                <Image className="absolute left-[5%] w-[90%] bottom-[5%] aspect-square" width="500" height="500" src={`/team/${name}.jpg`} alt="teammate image"/>
                <Image className="z-10 absolute left-[10%] w-[80%] bottom-[0%]" src={asset3} alt="teammate name"/>
                <div className='z-10 absolute bottom-[calc(2%-3px)] left-[10%] w-[80%] align-middle font-kleemax text-scale-60-3 text-center text-black text-nowrap overflow-hidden'>
                {fname.toUpperCase()}
                </div>
                <Link href={bio} rel="noopener noreferrer" target="_blank" className='absolute top-[2.5%] right-[3.5%] w-[6%] hover:scale-110 duration-700'>
                    <Image src={asset2} alt="teammate link"/>
                </Link>
            </div>
    );
};


const Team = () => {
    var TBA = false;
    return (
        <section className='w-full h-full mx-auto pt-[5%] bg-black' id="team">
            <div className='text-center text-team font-kleemax text-scale-40 drop-shadow-sky'>
            <JumbleText text="OUR TEAM" id="teamjumble"/>
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-team drop-shadow-sky font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='pt-[5%] w-full gap-[calc(3%+4px)] flex justify-center flex-wrap'>
            {teamData.map((teamMate, index)=>
            <TeamCard key={index} name={teamMate.name} bio={teamMate.bio}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Team;