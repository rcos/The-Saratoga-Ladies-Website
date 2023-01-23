
import styles from './header.module.css'
import React, { useState } from "react"

import Image from 'next/image'
import LOGO from "@/images/Saratoga_Ladies_Logo.png";

import { HeaderData } from "@/__Constants"


function MappedDropDown(props){
    let _Arrow = (HeaderData[props.index].length > 0 ? <>&#9660;</> : <></>)
    const [isShown, setIsShown] = useState(false);
    
    return (<div className={styles.dropdown} style={{marginTop: props.mrgnTop}} onClick={() => {alert("Functionality coming soon :)")}}>
                <div className={styles.dropdown_btn} 
                     onMouseEnter={() => setIsShown(true)} 
                     onMouseLeave={() => setIsShown(false)}>
                    { props.hero } { _Arrow }<span/>
                </div>
                { isShown && HeaderData[props.index].length > 0 ? 
                    <div className={styles.dropdown_content} style={{paddingTop: props.dropPad }} 
                         onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                        { HeaderData[props.index].map((item) => {
                            return   ( <div className={styles.item} onClick={() => {alert("Functionality coming soon :)")}}>{item.title}</div> )
                        })} 
                    </div>  : <></> 
                }
            </div>
    )
}

function HeaderContent(props){

    return (
            <div className={styles.header_wrapper}>
                <MappedDropDown mrgnTop="0.5vw" hero="Our Mission" dropPad="35px" index="0"/>
                <MappedDropDown mrgnTop="2.5vw" hero="What We Do" dropPad="45px" index="1"/>

                <div className={styles.logo_wrapper}>
                    <Image src={LOGO} alt="Saratoga Ladies Logo" />
                </div>

                <MappedDropDown mrgnTop="2.5vw" hero="Learn More" dropPad="45px" index="2"/>
                <MappedDropDown mrgnTop="0.5vw" hero="Contact Us" dropPad="35px" index="3"/>

                <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
            </div>
    )
}

export default function Header(props) { return ( <header><HeaderContent/></header>)}