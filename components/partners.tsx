import Image from 'next/image'
import asset1 from '../public/partner.svg'

const Partners = () => {
    return (
        <section className='w-full h-full mx-auto mt-[10%]'>
            <div className='text-center text-partner font-kleemax text-scale-40 drop-shadow-red'>
            COMMUNITY PARTNERS
            </div>
            <div className='w-full p-[10%] sm:p-[5%] sm:flex'>
            <Image className="mx-auto w-[60%] sm:w-[25%] my-[5%]" src={asset1} alt="partner" />
            <Image className="mx-auto w-[60%] sm:w-[40%] my-[5%]" src={asset1} alt="partner" />
            <Image className="mx-auto w-[60%] sm:w-[25%] my-[5%]" src={asset1} alt="partner" />
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50]"/>
        </section>
);

}

export default Partners;
