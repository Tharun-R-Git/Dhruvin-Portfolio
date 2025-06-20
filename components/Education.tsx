'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Cover } from './ui/Cover';
import CountUp from 'react-countup';
const Education = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='my-[100px] px-4 sm:px-10 flex flex-col justify-center items-center gap-20 scale-75 transform origin-top'>
      <h1 className='text-center text-[40px] sm:text-[60px] md:text-[80px] font-bold'>
        <Cover>EDUCATION</Cover>
      </h1>
      
      <div className="lg:w-[100%] flex flex-col md:flex-row gap-10 border-[3px] border-red-500 p-[15px] rounded-2xl bg-[rgb(4,7,29)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgb(4,7,45)] hover:shadow-[0_0_10px_2px_rgb(255,0,0)]">
        <div className='w-full md:w-[20%] mb-4 md:mb-0 flex justify-center items-center'>
          <img src="./vit-logo.png" className="max-w-full max-h-full object-contain m-[10px]" />
        </div>
        <div className='w-full md:w-[80%] flex flex-col justify-center p-4'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold m-2">
            <span className='hidden sm:inline bg-orange-600 py-[6px] px-[16px] rounded-2xl'>VELLORE INSTITUTE OF TECHNOLOGY, VELLORE</span>
            <span className='inline sm:hidden'>VELLORE INSTITUTE OF TECHNOLOGY, VELLORE</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-pink-600 py-[6px] px-[16px] rounded-2xl'>B.Tech Computer Science Engineering</span>
            <span className='inline sm:hidden'>B.Tech Computer Science Engineering</span>
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-green-600 py-[6px] px-[16px] rounded-2xl'>
              CGPA - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={9.02} 
                  duration={5} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>9.02</span>
              )}
            </span>
            <span className='inline sm:hidden'>
              CGPA - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={9.02} 
                  duration={4.5} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>9.02</span>
              )}
            </span>
          </h2>
        </div>
      </div>

      <div className="lg:w-[100%] flex flex-col md:flex-row gap-10 border-[3px] border-red-500 p-[15px] rounded-2xl bg-[rgb(4,7,29)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgb(4,7,45)] hover:shadow-[0_0_10px_2px_rgb(255,0,0)]">
        <div className='w-full md:w-[80%] flex flex-col justify-center p-4'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold m-2">
            <span className='hidden sm:inline bg-orange-600 py-[6px] px-[16px] rounded-2xl'>D.G. Ruparel College of Arts, Science and Commerce</span>
            <span className='inline sm:hidden'>D.G. Ruparel College of Arts, Science and Commerce</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-pink-600 py-[6px] px-[16px] rounded-2xl'>Class XI - XII</span>
            <span className='inline sm:hidden'>Class XI - XII</span>
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-green-600 py-[6px] px-[16px] rounded-2xl'>
              Class XII - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={81.0} 
                  duration={4.3} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>81.0</span>
              )}
            </span>
            <span className='inline sm:hidden'>
              Class XII - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={81.0} 
                  duration={4.3} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>81.0</span>
              )}
            </span>
          </h2>
          
        </div>
        <div className='w-full md:w-[20%] mb-4 md:mb-0 flex justify-center items-center'>
          <img src="/logodgr.png" className="h-[210px] max-h-full object-contain m-[10px]" />
        </div>
      </div>
      <div className="lg:w-[100%] flex flex-col md:flex-row gap-10 border-[3px] border-red-500 p-[15px] rounded-2xl bg-[rgb(4,7,29)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgb(4,7,45)] hover:shadow-[0_0_10px_2px_rgb(255,0,0)]">
        <div className='w-full md:w-[80%] flex flex-col justify-center p-4'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold m-2">
            <span className='hidden sm:inline bg-orange-600 py-[6px] px-[16px] rounded-2xl'>St. Francis D&apos;assisi High School and Junior College</span>
            <span className='inline sm:hidden'>St. Francis D&apos;assisi High School and Junior College</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-pink-600 py-[6px] px-[16px] rounded-2xl'>Class I-X</span>
            <span className='inline sm:hidden'>Class I-X</span>
          </h2>
         
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-green-600 py-[6px] px-[16px] rounded-2xl'>
              Class X - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={96.2} 
                  duration={3} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>96.2</span>
              )}
            </span>
            <span className='inline sm:hidden'>
              Class X - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={96.2} 
                  duration={3} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>96.2</span>
              )}
            </span>
          </h2>
        </div>
        <div className='w-full md:w-[20%] mb-4 md:mb-0 flex justify-center items-center'>
          <img src="/logosfdhs.jpg" className="h-[210px] max-h-full object-contain m-[10px]" />
        </div>
      </div>
    </div>
  );
}

export default Education;
