
import styles from './header.module.css'
import React, { useState } from "react"
import { CgMenu } from 'react-icons/cg';

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
                            return   ( <div key={item.title} className={styles.item} onClick={() => {alert("Functionality coming soon :)")}}>{item.title}</div> )
                        })} 
                    </div>  : <></> 
                }
            </div>
    )
}

function SandwichDropDown(props){
    let _Arrow = (HeaderData[props.index].length > 0 ? <>&#9660;</> : <></>)
    const [isShown, setIsShown] = useState(false);

    return (<div className={styles.sw_dropbtn} 
                onClick={() => {alert("Functionality coming soon :)")}} 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    { props.hero } { _Arrow }
            { isShown && HeaderData[props.index].length > 0 ? 
                <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                   { HeaderData[props.index].map((item) => {
                            return   ( <div key={item.title} className={styles.item} onClick={() => {alert("Functionality coming soon :)")}}>{item.title}</div> )
                    })}  
                </div> : <></>
            }
            </div>
    )
}

function HeaderContent(props){

    return (
        <React.Fragment>
            <div className={styles.header_wrapper}>
                <MappedDropDown mrgnTop="0.5vw" hero="Our Mission" dropPad="35px" index="0"/>
                <MappedDropDown mrgnTop="2.5vw" hero="What We Do" dropPad="45px" index="1"/>

                <div className={styles.logo_wrapper}>
                    <Image src={LOGO} alt="Saratoga Ladies Logo" />
                </div>

                <MappedDropDown mrgnTop="2.5vw" hero="Learn More" dropPad="45px" index="2"/>
                <MappedDropDown mrgnTop="0.5vw" hero="Contact Us" dropPad="35px" index="3"/>
                


                <div className={styles.sandwich_wrapper}>
                    <CgMenu size={'7.5vw'}/>
                </div>

                <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
            </div>

            <div className={styles.sandwich_dropdown}>
                <SandwichDropDown hero="Our Mission" index="0"/>
                <SandwichDropDown hero="What We Do" index="1"/>
                <SandwichDropDown hero="Learn More" index="2"/>
                <SandwichDropDown hero="Contact Us" index="3"/>
            </div>
        </React.Fragment>
    )
}

export default function Header(props) { return ( <header><HeaderContent/></header>)}