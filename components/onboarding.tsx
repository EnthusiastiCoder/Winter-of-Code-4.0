import Link from 'next/link';
import Image from 'next/image'
import asset1 from '../public/register.svg'
import BorderText from '@/components/bordertext';
const Register = () => {
    return (
        <section className="bg-black w-full">
            <BorderText/>
            <Image src={asset1} alt="register" className="w-[37%] ml-[13%]"/>
            <div className="flex justify-center items-center w-full"> 
                <hr className="max-w-full h-[0.25vw] flex-grow bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-20 bg-black drop-shadow-blue px-[1%] border-[0.25vw] text-brand">
                    <div className='absolute top-right-arrow right-[0.25vw] top-[0.3vw]'></div>
                    <Link href="/" className="text-nowrap pt-[2.25%] font-kleemax ">
                            REGISTER HERE
                    </Link>
                </div>
                <hr className="max-w-full h-[0.25vw] flex-grow bg-gradient-to-r from-brand"/>
            </div>
            <hr className="flex w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] mt-[10%]"/>
        </section>
        
    );
};

export default Register;

