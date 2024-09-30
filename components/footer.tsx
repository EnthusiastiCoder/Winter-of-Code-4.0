import Link from 'next/link';
import Image from 'next/image'
import footer from '../public/footer.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/facebook.svg'
import linkedin from '../public/linkedin.svg'
import { Input } from 'postcss';

const Footer = () => {
    return (
        <div className="flex py-[1%] px-[5%] w-full justify-between flex-[1-3-0]" style={{backgroundImage: `url(${footer.src})`,backgroundSize:"contain"}}>
            <div className="flex-col flex w-full">
                    <div className="w-[40%] text-scale-120 text-black font-kleemax border-outline">
                    WOC                    
                    </div>
                    <div className="h-[30%] flex w-[40%]">
                        <Image className="w-[25%]" src={instagram} alt="instagram" />
                        <Image className="w-[25%]" src={twitter}  alt="twitter" />
                        <Image className="w-[25%]" src={facebook} alt="facebook" />
                        <Image className="w-[25%]" src={linkedin} alt="linkedin" />
                    </div>
            </div>
            <div className="flex-col flex w-fit pt-[5%] p-[1%]">
                <div className="text-scale-60 text-white font-kleemax text-wrap ">
                    EMAIL US FOR MORE DETAILS
                </div>
                <input type="text" className="w-full font-kleemax text-scale-30 bg-black text-orgs border-0 uppercase terminal-input"></input>
            </div>
        </div>

    );
};

export default Footer;

