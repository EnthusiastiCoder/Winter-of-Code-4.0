import React from 'react';

const ParallelAnimatedTextBorderTrace = () => {
  const text = Array.from("WINTEROFCODE");
  const x = [0, 90, 180, 270, 360,450,0, 85, 195, 280, 365, 450];
  return (
    <div className="flex items-center mt-[5%] justify-center w-full bg-black sm:p-0">
      <svg className="w-[80%]" viewBox="0 0 570 170">
            {text.map((letter,index)=>
            <text
              key={index}
              x={x[index]+20}
              y={index > 5? 160 : 70}
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
    animation: trace 10s linear 1;
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