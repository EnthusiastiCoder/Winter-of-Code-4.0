import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import discord from '../public/discord.svg'
import BorderText from '@/components/bordertext'
import JumbleText from '@/components/jumble'
const Register = () => {
    var TBA = true;
    
    return (
        <section className="bg-black w-full relative h-[90vh] flex flex-col justify-evenly" id="onboarding">
            <div className="w-full flex justify-end overflow-x-clip h-[20%] sm:h-[15vh] relative overflow-y-visible">
                <Link href="https://gdgiiitk.bio.link/" 
                rel="noopener noreferrer" target="_blank" className="absolute w-[80%] sm:w-[50vh] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-110 duration-700" >
                    <Image src={logo} alt="register" className="w-full"/>
                </Link>
                <Link href="https://discord.gg/ePBMbdKdKG" rel="noopener noreferrer" target="_blank" className="z-20 w-[15vmax] h-fit mr-[-10vmax] hover:mr-0 duration-700" >
                    <Image src={discord} alt="discord" />
                </Link>
            </div>
            <BorderText/>
            <div className="flex justify-center items-center w-full sm:hidden"> 
                <hr className="w-full h-[0.25vw] bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-30-5 bg-black drop-shadow-blue px-[1.5%] border-[0.25vw] text-brand hover:scale-110 duration-700">
                    <div className='absolute top-right-arrow right-[0.375vw] top-[0.3vw] sm:top-[0.45vw]'></div>
                    {TBA ? 
                    <div className="text-nowrap pt-[1.5%] font-kleemax">
                        <JumbleText text="COMING SOON" id="registerhere"/>
                    </div>:
                    <Link href="https://winterofcode.devfolio.co/" rel="noopener noreferrer" target="_blank" className="text-nowrap pt-[1.5%] font-kleemax">
                            <JumbleText text="REGISTER HERE" id="registerhere"/>
                    </Link>}
                </div>
                <hr className="w-full h-[0.25vw] bg-gradient-to-r from-brand"/>
            </div>
            <hr className="absolute bottom-0 flex w-full bg-gradient-to-r from-black via-[#CCCCCC50]"/>
        </section>
        
    );
};

export default Register;

