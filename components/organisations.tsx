import Image from 'next/image'
import asset1 from '../public/org.svg'

interface Org{
    name:string;
    website:string;
}
const orgsData:Org[] = [
    {
        name: 'Tiled',
        website: 'https://www.mapeditor.org/'
    },
    {
        name: 'SQL Page',
        website: 'https://sql-page.com/'
    },
    {
        name: 'Mixxx',
        website: 'http://mixxx.org/'
    },
    
];

const OrgCard = ({org} : {org:Org}) => {
    return (
            <a className="relative w-[45%] sm:w-[20%] m-[2%] sm:m-[1%] hover:scale-105 duration-700" href={org.website} rel="noopener noreferrer" target="_blank" >
                <Image className="backdrop-blur" src={asset1} alt="org card"/>
                <div className='absolute bottom-[4%] left-[10%] w-[80%] align-middle font-kleemax text-scale-40-4 text-center text-orgs text-nowrap overflow-hidden'>
                {org.name.toUpperCase()}
                </div>
                <div className="absolute left-[5%] bottom-[10%] w-[90%] h-[90%] items-center flex">
                <Image src={`/orgs/${org.name}.png`} width="500" height="500"  alt={org.name}/>
                </div>
                
            </a>
    );
};


const Organisations = () => {
    var TBA = false;
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="orgs">
            <div className='text-center text-orgs font-kleemax text-scale-40 drop-shadow-gold'>
            ORGANISATIONS
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-orgs drop-shadow-gold font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='w-full p-[10%] sm:p-[5%] flex justify-center flex-wrap'>
            {orgsData.map((org, index)=>
            <OrgCard key={index} org={org}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Organisations;