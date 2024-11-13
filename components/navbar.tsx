import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import navline from '../public/navline.svg'
import bars from '../public/bars.svg'
import React from 'react';
const navigation = [
    { name: "Sponsors", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Timeline", href: "#", current: false },
    { name: "Orgs", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
  ];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="z-40 sticky flex-col flex w-full top-0 gap-[1%]">
            <div className="flex w-full justify-center h-full pt-[calc(0.5%+8px)] gap-[5%] bg-black pb-[8px]">
                <div className="flex w-[70%]"></div>
                <Link href="/" className="text-scale-30-5 w-[14%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-40%] flex justify-center text-brand font-kleemax">
                    WOC
                </Link>
                <div className="flex-col flex sm:flex-row w-full items-end sm:items-center justify-end mr-[2%] gap-[1%]">
                    <Image className="sm:hidden aspect-square w-[calc(5%+8px)] bg-brand m-[2%]" src={bars} alt="bars" onClick={toggleMenu}/>
                    {navigation.map((item) => (
                    <Link href={item.href} className={`font-chakra font-bold text-brand text-scale-20-5 sm:max-w-[20%] sm:px-[0.5%] hover:drop-shadow-blue hover:scale-110 duration-700 sm:block ${isOpen? "block" : "hidden" } ${item.current? "text-white":""}`} key={item.name}>
                        {item.name.toUpperCase()}
                    </Link>
                    ))}
                </div>
            </div>
            <Image className="flex sm:0 mt-[-1px]" src={navline} alt="navline"/>
        </nav>

    );
};

export default Navbar;

