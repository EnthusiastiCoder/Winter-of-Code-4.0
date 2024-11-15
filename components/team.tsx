import Image from 'next/image'
import Link from 'next/link'
import asset1 from '../public/team.svg'
import asset2 from '../public/teamLink.svg'
import Arpan from '../public/team/Arpan.jpg'
interface Teammate{
    name:string;
    bio:string;
    image:any;
}

const teamData:Teammate[] = [
    {
        name: 'Arpan',
        bio: 'https://gdgiiitk.bio.link',
        image: Arpan
    },
    {
        name: 'Arpan',
        bio: 'https://gdgiiitk.bio.link',
        image: Arpan
    },
    
];

const TeamCard = ({name,bio,image} : Teammate) => {
    return (
            <div className="relative w-[35%] sm:w-[20%] overflow-hidden">
                <Image src={asset1} alt="teammate card"/>
                <Image className="absolute left-[5%] w-[90%] bottom-[4px]" src={image} alt="teammate image"/>
                <div className='absolute bottom-[-3px] left-[10%] w-[80%] align-middle font-kleemax text-scale-100-3 text-center text-black text-nowrap overflow-hidden'>
                {name.toUpperCase()}
                </div>
                <Link href={bio} rel="noopener noreferrer" target="_blank" className='absolute top-[2.5%] right-[2.5%] w-[8%]'>
                    <Image src={asset2} alt="teammate link"/>
                </Link>
            </div>
    );
};


const Team = () => {
    var TBA = false;
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="orgs">
            <div className='text-center text-orgs font-kleemax text-scale-40 drop-shadow-gold'>
            TEAM
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-orgs drop-shadow-gold font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='pt-[5%] w-full gap-[calc(3%+4px)] flex justify-center flex-wrap'>
            {teamData.map((teamMate, index)=>
            <TeamCard key={index} name={teamMate.name} bio={teamMate.bio} image={teamMate.image}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Team;