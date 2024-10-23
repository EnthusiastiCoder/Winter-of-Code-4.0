import Link from 'next/link';
import Image from 'next/image'
import footer from '../public/footer.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import discord from '../public/discordlogo.svg'
import linkedin from '../public/linkedin.svg'
import mailbox from '../public/mailbox.svg'
import submit from '../public/submit.svg'

const resources = [
    {title:"Organisation Brochure", link:"https://drive.google.com/file/d/1n3CBIyKuriTmm3xk4Z4aJkUefQc4Rr5y/view?usp=sharing"},
    {title:"Sponsorship Brochure", link:"https://drive.google.com/file/d/1lzozKgXBw1Czn2MCxXGHrig61oM6Hlc_/view?usp=sharing"},


]

const Footer = () => {
    const handleClick = () => {
        var url = "https://mail.google.com/mail/?view=cm&fs=1&to=dsc.iiitkalyani@gmail.com&su=";
        var terminal = document.getElementById("terminal-input") as HTMLInputElement;
        window.open(url+terminal.value.toUpperCase(), '_blank');
    }
    return (
        <div className="flex pb-[1%] px-[5%] w-full justify-between" style={{backgroundImage: `url(${footer.src})`,backgroundSize:"cover"}}>
            <div className="flex-col flex w-[25%] justify-between m-[1%]">
                    <div className="w-full text-scale-305 text-black font-kleemax border-outline">
                    WOC                    
                    </div>
                    <div className="flex gap-[4%] items-center justify-start">
                        <Link href="https://www.instagram.com/gdsciiitkalyani/" target="_blank" rel="noopener noreferrer" className="w-[22%]">
                            <Image className="bg-gradient-radial from-white via-white via-60% to-transparent to-60% hover:scale-110 duration-700" src={instagram} alt="instagram" />
                        </Link>
                        <Link href="https://x.com/gdsciiitkalyani" target="_blank" rel="noopener noreferrer" className="w-[22%]">
                            <Image className="bg-gradient-radial from-white via-white via-60% to-transparent to-60%" src={twitter} alt="twitter" />
                        </Link>
                        <Link href="https://discord.gg/ePBMbdKdKG" target="_blank" rel="noopener noreferrer" className="w-[22%]">
                            <Image className="p-[7.5%]" src={discord} alt="discord" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/gdsc-iiit-kalyani/" target="_blank" rel="noopener noreferrer" className="w-[19%] relative">
                            <Image className="bg-gradient-radial from-white via-white via-65% to-transparent to-65%" src={linkedin} alt="linkedin" />
                        </Link>
                    </div>
            </div>
            <div className="flex-col flex w-[50%] m-[1%] justify-end items-center text-center">
                <div className="text-scale-40 text-white font-chakra w-[90%] m-[1%]">
                    RESOURCES
                </div>
                {resources.map((resource, index) => {
                    return (
                        <Link href={resource.link} target="_blank" rel="noopener noreferrer" key={index} className="text-scale-30 text-white font-chakra w-[90%] m-[1%]">
                            {resource.title}
                        </Link>
                    );
                })}
                <div className="text-scale-40 text-white font-chakra text-wrap w-[90%] m-[1%]">
                    © GDG IIIT KALYANI 2024
                </div>
            </div>
            <div className="flex-col flex w-[25%] mt-[8%]">
                <div className="text-scale-60 text-white font-kleemax text-wrap w-[90%] m-[1%]">
                    EMAIL US FOR MORE DETAILS
                </div>
                <div className="flex w-full justify-between">
                    <div className="relative w-[80%]">
                        <Image className="w-full" src={mailbox} alt="mailbox" />
                        <input type="text" id="terminal-input" className="absolute bottom-[7%] w-full h-full font-kleemax text-scale-160 text-wrap overflow-scroll pt-[6%] px-[8%] uppercase terminal-input placeholder-orgs" placeholder="____"></input>
                    </div>
                    <Image className="w-[16%] cursor-pointer" src={submit} alt="submit" onClick={handleClick}/>
                </div>
            </div>
        </div>

    );
};

export default Footer;

