import Link from 'next/link';
import Image from 'next/image'
import asset1 from '../public/background1.svg'
const Register = () => {
    return (
        <section className="bg-black w-full">
            <Image src={asset1} alt="woc"/>
            <div className="flex justify-center items-center w-full"> 
                <hr className="max-w-full flex-grow bg-gradient-to-l from-brand"/>
                <div className="z-10 flex justify-center grow-0 bg-black">
                    <Link href="/" className="text-nowrap text-xs sm:text-base md:text-2xl lg:text-3xl p-1 sm:p-2 md:p-3 lg:p-4 font-kleemax text-brand border sm:border-2 md:border-3 lg:border-4 drop-shadow-gold">
                            REGISTER HERE
                    </Link>
                </div>
                <hr className="max-w-full flex-grow bg-gradient-to-r from-brand"/>
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] mt-[10%]"/>
        </section>
        
    );
};

export default Register;

