import Link from 'next/link';
import Image from 'next/image'
import asset1 from '../public/arrow.svg'
import asset2 from '../public/aboutus.svg'

const description = "Winter of Code is a 30-day open-source journey brought to you by GDG on campus IIIT Kalyani (formerly known as GDSC IIIT Kalyani) , in collaboration with Google Developer Groups on Campus. Modeled after Google Summer of Code (GSoC), this program offers an exciting opportunity for developers to dive into the world of open source, contribute to impactful projects, and collaborate with like-minded peers. Whether you're a seasoned coder or just starting out, Winter of Code 4.0 is your chance to enhance your skills, make meaningful contributions, and become part of the global open-source community."
const AboutUs = () => {
    return (
        <section className='w-full p-4 pt-[10%]'>
        <div className="bg-[#868686] bg-opacity-10 m-auto max-w-[90%] pb-[10%] mb-[10%] relative">
            <div className="w-full flex">
                <div className='text-[#00FF84] bg-black w-fit rounded-br-xl border-[#868686] border-opacity-10 pr-4 text-scale-40 font-kleemax text-nowrap'>
                    ABOUT US
                </div>
                <div className='w-full bg-black'>
                    <div className='h-full bg-[#868686] bg-opacity-10 rounded-tl-xl border-black'></div>
                </div>
                <div className='max-w-[5%]'>
                    <Image src={asset1} alt="woc"/>
                </div>
            </div>
            <div className="w-full relative flex p-[5%] text-scale-20 text-grey">
                {description}
            </div>
            <div className='z-10 w-full -bottom-[25%] mx-auto absolute'>
                <Image className="max-w-1/2 m-auto backdrop-blur" src={asset2} alt="woc" />
            </div>
        </div>
        <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] mt-[20%]"/>
        </section>
    );
};

export default AboutUs;