import React, {useRef, useState, useEffect} from "react"


import { GiStarsStack } from 'react-icons/gi'

//import { HeaderRibbonText } from '../../../assets/text/HomeText'

import Image from 'next/image'
import IMG0 from '@/images/Hero_First_New.jpg'
import IMG1 from '@/images/ArticlePlaceholder.jpg'
import IMG2 from '@/images/Saratoga_Ladies_Logo.png'

const ImagesArray =
  [
    {image: IMG0}, 
    {image: IMG1},
    {image: IMG2},
    {image: IMG1},
    {image: IMG0},
  ];

const HeroSection = () => {
  const [currIndex,setCurrIndex] = useState(0);
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((currIndex + 1) % ImagesArray.length); 
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currIndex]);
  
  const handleLeftArrowClick = () => {
    if (currIndex === 0) {
      setCurrIndex(ImagesArray.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currIndex === ImagesArray.length - 1){
      setCurrIndex(0)
    }
    else{
      setCurrIndex(currIndex + 1)
    }
    setCurrIndex((currIndex + 1) % ImagesArray.length); 
  };
  
  const buttonsRef = useRef([]);

  useEffect(() => {
    const buttons = buttonsRef.current;
    const buttonCount = buttons.length; 
    const buttonRadius = 70;

    buttons.forEach((button, i) => {
      const center = buttonCount / 2;
      const distanceFromCenter = Math.abs(i - center);
      const angle = ((i - center + .555) * (Math.PI - 1.8)) / (buttonCount + 1);
      const x = buttonRadius * Math.sin(angle) * (.7 + 0.1 * distanceFromCenter);
      const y = buttonRadius * Math.cos(angle) * -1;
      button.style.transform = `translate(${x}px, ${y + 63}px)`;
    })
  })
  
  /*
  const buttons = document.querySelectorAll('.hero-buttons-active, .hero-buttons-inactive');
  const buttonCount = buttons.length;
  const buttonRadius = 75; 
  
  buttons.forEach((button,i) => {
    const angle = ((i - 2) * (Math.PI - 1)) / (buttonCount + 1);
    const x = buttonRadius * Math.sin(angle);
    const y = buttonRadius * Math.cos(angle) * -1;
    button.style.transform = `translate(${x}px, ${y + 60}px)`
  });
  */

  return (
    <React.Fragment>
      <div className="banner-wrapper flex flow-col center filler-height-500 bg-blue">
        {ImagesArray.map((image,index) => (
            <Image 
              key={index}
              src={image.image}
              className={index === currIndex ? "active" : "inactive"}
              width={"500vw"}
              height={"600"}/>
        ))}


        <div className="buttons-wrapper">
        <button className="left-arrow-button"
                onClick={handleLeftArrowClick}></button>
          {ImagesArray.map((image,index) => (
            <button
              key={index}
              ref={(el) => (buttonsRef.current[index] = el)} 
              className={index === currIndex ? "hero-buttons-active" : "hero-buttons-inactive"}
              onClick={() => setCurrIndex(index)}

            />
          ))}
          <button className="right-arrow-button"
                  onClick={handleRightArrowClick}></button>
      
        </div>


        <div className="ribbon-wrapper">
          <div className="ribbon">
            <svg viewBox="0 0 40 2"><path d="M0 0 Q 20 2.75, 40 0" /></svg>
            <div className="ribbon-content">
              <GiStarsStack  fontSize="2.0em" />
              <div className="ribbon-text" id='ribbonText' >
                {/*HeaderRibbonText*/}
              </div>
              <GiStarsStack  fontSize="2.0em" height="10"/>
            </div>
            <svg viewBox="0 0 40 2"><path d="M0 0 Q 20 2.75, 40 0" /></svg>
          </div>
        </div>

        <svg viewBox="0 0 40 2" fill="#fff" style={{width: '100%'}}><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
        <div className="banner-filler"/>    
      </div> 
    </React.Fragment>
  )
}


export default HeroSection