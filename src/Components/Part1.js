'use client';

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import Logo2 from '../Asset/MainLogo2.png'; 
import '../CSS/Part1.css';

const Part1 = () => {
  const [text] = useTypewriter({
    words: ['Learn', 'Build', 'Innovate'],
    loop: true, 
    typeSpeed: 100,
    deleteSpeed: 90,
  });

  return (
    <div className="Part1MainContainer">
      <div className="Part1-Left-Container">
        <div className="Part1-Image-Container">
          <Image src={Logo2} alt="Main Logo" className="Main-Logo" />
        </div>
      </div>
      <div className="Part1-Right-Container">
        <div className='ClubTitleText-Part1'>
          <p>ALCOMS @ Algoma University</p>
        </div>
        <div className='MotionText-Part1'>
          <p>
            <span>{text}</span>
            <Cursor cursorStyle="|" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part1;
