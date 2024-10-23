import Image from 'next/image'
import register from '../public/register.svg'
import wocg from '../public/wocg.svg'
import React from 'react'
import Link from 'next/link'
import JumbleText from '@/components/jumble'

const ParallelAnimatedTextBorderTrace = () => {
  const text = Array.from("WINTEROFCODE");
  const x = [0, 90, 180, 270, 360,450,0, 85, 195, 280, 365, 450];
  return (
    <div className="flex flex-col items-left w-full">
      <div className="hidden sm:block w-full h-fit relative">
      <div className="hidden sm:flex absolute w-full font-kleemax text-scale-315 text-[#D9D9D910] justify-center overflow-hidden top-[65%] translate-y-[-50%] left-0">WOC</div>
      <svg className="z-20 w-fit max-h-full max-w-[75%] mx-auto " viewBox="0 0 570 190">
            {text.map((letter,index)=>
            <text
              key={index}
              x={x[index]+20}
              y={index > 5? 170 : 80}
              className="text-trace font-kleemax"
              stroke="#609CFF"
              fill="#151D2F"
              strokeWidth="0.5%"
            >
              {letter}
            </text>
            )}
      </svg>
      </div>
      <Image src={register} alt="register" className="hidden sm:block ml-[15.4%] w-[35.6%] 2xl:hidden"/>
      <Image src={wocg} alt="wocart" className="sm:hidden"/>
      <div className="hidden sm:flex justify-center items-center w-full 2xl:pt-[2.5%]"> 
                <hr className="w-full max-w-[625px] h-[0.25vw] bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-30-5 bg-black drop-shadow-blue px-[1.5%] border-[0.25vw] text-brand hover:scale-110 duration-700">
                    <div className='absolute top-right-arrow right-[0.375vw] top-[0.3vw] sm:top-[0.45vw]'></div>
                    <Link href="https://winterofcode.devfolio.co/" rel="noopener noreferrer" target="_blank" className="text-nowrap pt-[1.5%] font-kleemax">
                            <JumbleText text="REGISTER HERE" id="registerhere"/>
                    </Link>
                </div>
                <hr className="w-full h-[0.25vw] bg-gradient-to-r from-brand"/>
            </div>
    </div>
  );
};

const styles = `

  @keyframes trace {
    0% {
      stroke-dashoffset: 0%;
    }
    100% {
      stroke-dashoffset: 155%;
    }
  }

  .text-trace {
    
    font-size: 70px;
    stroke-dasharray: 150%,5%;
    stroke-linejoin: round;
    animation: trace 8s linear 1;
  }

  /* Add a glow effect */
  .text-trace {
    filter: drop-shadow(0 0 0.5vw rgba(96, 156, 255, 1));
  }
`;

const BorderText = () => {
  return (
    <>
      <style>{styles}</style>
      <ParallelAnimatedTextBorderTrace />
    </>
  );
};

export default BorderText;