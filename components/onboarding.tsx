import Link from 'next/link';
import Image from 'next/image'
import asset1 from '../public/register.svg'
import BorderText from '@/components/bordertext';
const Register = () => {
    return (
        <section className="bg-black w-full">
            <BorderText/>
            <Image src={asset1} alt="register" className="w-[37%] ml-[13%]"/>
            <div className="flex justify-center items-center w-full gap-[1vw]"> 
                <hr className="max-w-full h-[0.25vw] flex-grow bg-gradient-to-l from-brand"/>
                <div className="z-10 flex jw-[40%] justify-center text-scale-20 bg-black">
                    <Link href="/" className="text-nowrap px-[4%] pt-[2.25%] font-kleemax text-brand border-[0.25vw]  drop-shadow-blue">
                            REGISTER HERE
                    </Link>
                </div>
                <hr className="max-w-full h-[0.25vw] flex-grow bg-gradient-to-r from-brand"/>
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] mt-[10%]"/>
        </section>
        
    );
};

export default Register;

