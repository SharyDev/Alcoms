'use client'
import React, { useState } from "react";
import Logo from "../Asset/Logo.png";
import Image from 'next/image';
import { AiOutlineAlignLeft } from "react-icons/ai";
import "../CSS/NavBarCSS.css";

const Header = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    const toggleSlider = () => {
       
        setIsSliderOpen(!isSliderOpen);
    };
    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return(
        <>
            <div>
                <div className="Header">
                    <div className="Logo-Header-Container">
                        <Image src={Logo} className="headerLogo" alt="Logo"></Image>
                        <div className="CLUB-NAME-HEADER">
                            <p>ALCOMS</p>
                        </div>
                    </div>
                    <div className="menuLink">
                    <a  href="#" onClick={() => handleSmoothScroll('Part1')} className="homeMenu">
                        <p>HOME</p>
                    </a>
                    <a href="#"  onClick={() => handleSmoothScroll('Part2Main')} className="aboutMenu">
                        <p>ABOUT</p>
                    </a>
                    <a href="#" onClick={() => handleSmoothScroll('Part3Main')} className="experienceMenu">
                        <p>SERVICES</p>
                    </a>
                    <a href="#" onClick={() => handleSmoothScroll('ProjectContainerMain')} className="projectMenu">
                        <p>HACKATHON</p>
                    </a>
                    <a href="#" className="projectMenu">
                        <p>PARTNERS</p>
                    </a>
                     
                    </div>
                    
                    <div className={`${isSliderOpen ? 'DownArrowClose' : 'DownArrow'}`} onClick={toggleSlider}><AiOutlineAlignLeft /></div>              
                    
                </div>
                <div className={`${isSliderOpen ? 'SliderOpened' : 'SliderClosed'}`} >
                <div className={`${isSliderOpen ? 'menuLink2' : 'SliderClosed'}`}>
                    <a className="closeMenu2" onClick={toggleSlider}>
                        <p>Close</p>
                    </a>
                    <a href="#"  onClick={() => handleSmoothScroll('Part1')} className="homeMenu2">
                        <p>HOME</p>
                    </a>
                    <a href="#" onClick={() => handleSmoothScroll('Part2Main')} className="aboutMenu2">
                        <p>ABOUT</p>
                    </a>
                    <a href="#" onClick={() => handleSmoothScroll('Part3Main')} className="experienceMenu2">
                        <p>EXPERIENCE</p>
                    </a>
                    <a href="#" onClick={() => handleSmoothScroll('ProjectContainerMain')} className="projectMenu2">
                        <p>PROJECTS</p>
                    </a>
                    <a href="#" className="achivementsMenu2">
                        <p>ACHIEVEMENTS</p>
                    </a>
                    <a href="#" className="articlesMenu2">
                        <p>ARTICLES</p>
                    </a>  
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;