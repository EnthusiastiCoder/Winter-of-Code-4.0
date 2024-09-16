import Image from 'next/image'
import asset1 from '../public/faqcard1.svg'
import asset2 from '../public/faqbutton.svg'
import asset3 from '../public/faqcard2.svg'
import asset4 from '../public/faquestion.svg'
import React, { useState } from 'react';

const faqData = [
    {
      question: 'What is WoC?',
      answer:
        'Winter of Code (WoC) is an exciting month-long open-source program. It’s similar to Google Summer of Code (GSoC), but with a few fun twists of our own!',
    },
  {
    question: 'Is WOC online?',
    answer: 'WOC will be conducted in complete online mode, so you can participate from anywhere without any worry.',
  },
    {
      question: 'Who can participate?',
      answer:
        'Absolutely anyone! Whether you’re a student (grad, undergrad, or even in high school), a professional, or anyone else we might’ve missed, WoC is open to all.',
    },
    {
      question: 'What are Organisations?',
      answer:
        'Organisations are open-source communities that build incredible software for everyone to use. They’ll be accepting your project proposals and mentoring you throughout the program.',
    },
    {
      question: 'What is a proposal? How do I send one?',
      answer:
        'A proposal is where you tell the organisation what you plan to work on during WoC. Some organisations even let you propose projects outside their listed ideas! Once you’re selected, we’ll guide you through submitting your proposal. Plus, we’ll be hosting a special session on how to write a great proposal.',
    },
    {
      question: 'How do I get selected?',
      answer:
        'Submit a stellar application! 😊 \n\nHere’s how the process works: \n\n(i) We’ll have an initial screening to filter out non-serious or spammy applications. \n\n(ii) Next, participants who pass the first round will submit proposals via Devfolio, where organisations will make their selections. \n\n(iii) Finally, a mentor evaluation. If you pass, you’re in for some awesome swags!',
    },
    {
      question: 'What are the prizes? How do I claim them?',
      answer:
        'Everyone who passes the mentor evaluation will get prizes from our sponsors! Plus, some organisations might even have their own rewards for top contributors.',
    },
    {
      question: 'Is WoC for beginners?',
      answer: 'Yes, WoC is for EVERYONE – beginners, pros, and everyone in between!',
    },
  ];

interface FAQ{
    index:number;
    question:string;
    answer:string;
    isOpen: boolean;
    toggleOpen: () => void;
}


const FAQCard: React.FC<FAQ> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
            <div className='relative w-fit max-w-[80%] sm:max-w-[40%] mx-auto my-1 sm:my-5'>
                <Image className="m-auto absolute top-0" src={asset3} alt="faqcard2" style={{visibility: isOpen? 'hidden' : 'visible'}}/>
                <Image className="m-auto absolute-top-0" src={asset1} alt="faqcard" style={{visibility: !isOpen? 'hidden' : 'visible'}}/>
                <div className='absolute top-[7%] right-[2%] w-[7%] h-[28%]'>
                    <Image  src={asset2} alt="faqbutton" id="faqbutton" fill onClick={toggleOpen} style={{transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',transition: 'transform 0.3s ease' }} />
                </div>
                <div className='absolute top-0 left-[3%] p-[2%] w-[85%] h-[40%] text-left text-[#00FF84] text-scale-40 overflow-hidden' >
                {question}
                </div>
                <div className='absolute top-[35%] left-[3%] px-[2%] w-[85%] h-[50%] text-left text-[#CBCBCB] text-scale-20 overflow-hidden' style={{visibility: ! isOpen? 'hidden' : 'visible'}}>
                {answer}
                </div>
            </div>
    );
};

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index:number) => {
    setOpenItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

    return (
            <section className='w-full mx-auto mt-[10%]'>
                <div className='text-center text-[#00FF84] font-kleemax text-scale-40 drop-shadow-green relative'>
                    FAQ
                    <div className='w-[20%] absolute left-[40%] -top-[25%]'>
                        <Image className="mx-auto w-full" src={asset4} alt="faquestion" />
                    </div>
                </div>
                <div className='w-full mx-auto my-[3%] flex flex-wrap justify-center'>
                {faqData.map((faq, index) => (
                    <FAQCard key={index} index={index} question={faq.question} answer={faq.answer} isOpen={!openItems[index]} toggleOpen={() => toggleItem(index)} />
                ))}
                </div>
                <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] mt-[10%]"/>
            </section>
    );
};

export default FAQPage;
