import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const Skills = () => {
  // Define your items arrays with the required properties for each set
  const itemsSet1 = [
    { quote: 'C Lang', image: './c-1.svg'},
    { quote: 'C++', image: './c.svg' },
    { quote: 'Python', image: './python-5.svg'},
    { quote: 'Java', image: './java-icon.svg' },
    { quote: 'MySQL', image: './MySQL.svg' },
  ];

  const itemsSet2 = [
    { quote: 'HTML', image: './html-1.svg'},
    { quote: 'CSS', image: './css-3.svg' },
    { quote: 'Tailwind', image: './tailwindcss-icon.svg' },
    { quote: 'React', image: './react-2.svg'},
    { quote: 'TypeScript', image: './typescript.svg'},
    { quote: 'Next.js', image: './nextjs-icon.svg' },
    { quote: 'Node.js', image: './nodejs.svg' },
  ];

  const itemsSet3 = [
    { quote: 'OpenCV', image: './opencv.svg' },
    { quote: 'NumPy', image: './numpy-1.svg' },
    { quote: 'Pandas', image: './pandas.svg' },
    { quote: 'Azure AI', image: './azure-2.svg' },
    { quote: 'DSA', image: './DSA.png' },
    { quote: 'ML', image: './ML.png' },
    { quote: 'DL Basics', image: './DL.png' },
    
    // Add more items if needed
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-[40px] scale-75 transform origin-top'>
      <h1 className='py-5 px-10 text-center text-[30px] sm:text-[60px] md:text-[70px] font-bold'>
        Skills
      </h1>

      <div className="flex flex-col justify-center items-center w-[85vw]">
      <h1 className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold text-lg tracking-wide">PROGRAMMING LANGUAGES</h1>
        <InfiniteMovingCards 
          items={itemsSet1} 
          direction="left" 
          speed="normal" 
          pauseOnHover={true} 
          className="text-center font-semibold" 
        />
      </div>

      <div className="flex flex-col justify-center items-center w-[85vw]">
      <h1 className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold text-lg tracking-wide">WEB TECHNOLOGIES</h1>
        <InfiniteMovingCards 
          items={itemsSet2} 
          direction="right" 
          speed="normal" 
          pauseOnHover={true} 
          className="text-center font-semibold tracking-widest" 
        />
      </div>

      <div className="flex flex-col justify-center items-center w-[85vw]">
      <h1 className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold text-lg tracking-wide">LIBRARIES & OTHER SKILLS</h1>
        <InfiniteMovingCards 
          items={itemsSet3} 
          direction="left" 
          speed="normal" 
          pauseOnHover={true} 
          className="text-center font-semibold"
        />
      </div>
    </div>
  );
};

export default Skills;
