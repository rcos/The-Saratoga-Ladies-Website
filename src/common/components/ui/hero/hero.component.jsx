import * as React from "react"
//import CircleType from 'circletype';

import * as  RI from "react-icons/ri";
import { GiStarsStack } from 'react-icons/gi'

//import { HeaderRibbonText } from '../../../assets/text/HomeText'

import Image from 'next/image'
import IMG0 from '@/images/Hero_First_New.jpg'


//import ReactCurvedText from "react-curved-text";

const ImagesArray = [ { image: IMG0, } ]

class HeroSection extends React.Component {
    constructor() {
      super();
      this.state = {
        //width: window.innerWidth/200,
        currIndex: 0,
        BannerSlides:  ImagesArray,
      }
      
    }

    componentDidMount(){
      //console.log("Hello World")
      //const circleType = new CircleType(document.getElementById('ribbonText'));
      //circleType.radius(3250);
    }

    componentDidUpdate(){
      //this.setState({width: window.innerWidth/200})
      //console.log()
    }

    incrementIndex = () => {
      if(this.state.currIndex + 1 <= this.state.BannerSlides.length - 1){
        this.setState({ currIndex: this.state.currIndex + 1 })
      } else {  this.setState({ currIndex: 0 }) }
    }

    decrementIndex = () => {
      console.log(this.state)
      if(this.state.currIndex - 1 >= 0){
        this.setState({ currIndex: this.state.currIndex - 1 })
      } else {  this.setState({ currIndex: this.state.BannerSlides.length - 1 }) }
    }

    render() {
      return (
        <React.Fragment>
          <div className="banner-wrapper flex flow-col center filler-height-500 bg-blue">
            <Image src={this.state.BannerSlides[this.state.currIndex].image} />
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
}


export default HeroSection