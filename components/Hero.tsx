

import React from 'react';
import MagicButton from './ui/MagicButton'; 
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';
import { TypewriterEffect } from './ui/TypeWriterEffect';
import { FlipWords } from './ui/FlipWords';
import { Cover } from './ui/Cover';

const Hero = () => {
  return (
    <div className='pb-20 pt-36 scale-75 transform origin-top'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div
        className='h-screen w-full dark:bg-black-100 bg-white  
              dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0'
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md-max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Welcome to my portfolio website
          </h2>

          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl text-2xl'
            words="I&apos;m Dhruvin Mehta"
            duration={0.75}
          />

          <div className='text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            <FlipWords
              words={[
                <TypewriterEffect key="ds" words={[{ text: "R&D", className: "" }, { text: "Engineer", className: "" }]} />,
                <TypewriterEffect key="ds" words={[{ text: "Full", className: "" }, { text: "Stack", className: "" }, { text: "Developer", className: "" }]} />,
                <TypewriterEffect key="ds" words={[{ text: "Tech", className: "" }, { text: "Lover", className: "" }]} />,
                <TypewriterEffect key="ds" words={[{ text: "Cyclist", className: "" }]} />,
                <TypewriterEffect key="ds" words={[{ text: "Youtuber", className: "" }]} />,
              ]}
            />
          </div>

          <a href="#Projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>

        </div>
      </div>

    </div>
  );
}

export default Hero;
