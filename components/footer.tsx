import Link from 'next/link';
import Image from 'next/image'
import footer from '../public/footer.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/facebook.svg'
import linkedin from '../public/linkedin.svg'
import mailbox from '../public/mailbox.svg'
import submit from '../public/submit.svg'
import { useState } from 'react';

const Footer = () => {
    const handleClick = () => {
        var url = "https://mail.google.com/mail/?view=cm&fs=1&to=dsc.iiitkalyani@gmail.com&SU=";
        var terminal = document.getElementById("terminal-input") as HTMLInputElement;
        url=url+terminal.value;
        window.open(url, '_blank');
    }
    return (
        <div className="flex pb-[1%] px-[5%] w-full justify-between" style={{backgroundImage: `url(${footer.src})`,backgroundSize:"cover"}}>
            <div className="flex-col flex w-[25%] justify-between m-[1%]">
                    <div className="w-full text-scale-305 text-black font-kleemax border-outline">
                    WOC                    
                    </div>
                    <div className="flex gap-[4%]">
                        <Image className="w-[22%]" src={instagram} alt="instagram" />
                        <Image className="w-[22%]" src={twitter}  alt="twitter" />
                        <Image className="w-[22%]" src={facebook} alt="facebook" />
                        <Image className="w-[22%]" src={linkedin} alt="linkedin" />
                    </div>
            </div>
            <div className="flex-col flex w-[50%] m-[1%] justify-end text-center">
                <div className="text-scale-50 text-white font-chakra text-wrap w-[90%] m-[1%]">
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
                    <Image className="w-[16%]" src={submit} alt="submit" onClick={handleClick}/>
                </div>
            </div>
        </div>

    );
};

export default Footer;

