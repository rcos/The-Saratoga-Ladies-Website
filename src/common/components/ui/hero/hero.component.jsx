import React, {useState, useEffect} from "react"

import { GiStarsStack } from 'react-icons/gi'

//import { HeaderRibbonText } from '../../../assets/text/HomeText'

import Image from 'next/image'
import IMG0 from '@/images/Hero_First_New.jpg'
import IMG1 from '@/images/ArticlePlaceholder.jpg'

const ImagesArray =
  [
    {image: IMG1}, 
    {image: IMG0},
  ];

const HeroSection = () => {
  const [currIndex,setCurrIndex] = useState(0);

  /*
  const incrementIndex = () => {
    if (currIndex + 1 <= ImagesArray.length -1){
      setCurrIndex(currIndex + 1)
    }
    else setCurrIndex(0);
  }

  const decrementIndex = () => {
    if (currIndex - 1 >= 0){
      setCurrIndex(currIndex -1)
    }
    else setCurrIndex(ImagesArray.length - 1)
  }
  */
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((currIndex + 1) % ImagesArray.length); 
    }, 7500);

    return () => clearInterval(intervalId);
  }, [currIndex]);
  
  const currBackground = ImagesArray[setCurrIndex];

  return (
    <React.Fragment>
      <div className="banner-wrapper fleex flow-col center filler-height-500 bg-blue">
        <Image src={ImagesArray[currIndex].image}></Image>
        <div className="ribbon-wrapper">
          <div className="ribbon">
            <svg viewBox="0 0 40 2"><path d="M0 0 Q 20 2.75, 40 0" /></svg>
            <div className="ribbon-content">
              <GiStarsStack  fontSize="2.0em" />
              <div className="ribbon-text" id='ribbonText' >
                {/*HeaderRibbonText*/}
              </div>
              <GiStarsStack  fontSize="2.0em" />
            </div>
            <svg viewBox="0 0 40 2"><path d="M0 0 Q 20 2.75, 40 0" /></svg>
          </div>
        </div>
        <svg viewBox="0 0 40 2" fill="#fff" style={{width: 'fit-content'}}><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
        <div className="banner-filler"/>    
      </div> 
       
    </React.Fragment>
  )
}


export default HeroSection