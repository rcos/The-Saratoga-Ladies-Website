import Link from 'next/link';
import styles from './header.module.css'
import React, { useState } from "react"
import { CgMenu } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai'

import Image from 'next/image'
import Link from 'next/link';
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

function ClickableDropdown(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
        { /* Button position:absolute "placed within" header */ }
        { isShown ? 
            <div className={styles.sandwich_icon_wrapper} onClick={() => setIsShown(false)}>
                <AiOutlineClose size={'7.5vw'}/>
            </div> 
            : <div className={styles.sandwich_icon_wrapper} onClick={() => setIsShown(true)}>
                    <CgMenu size={'7.5vw'}/>
                </div> }
            

        { /* Mapped Dropdown Elements, not scalable :'( */ }
            { isShown ? 
            <div className={styles.sandwich_dropdown_wrapper}>
                <div className={styles.sandwich_dropdown}>
                    <SandwichDropDown hero="Our Mission" index={ props.indexA }/>
                    <SandwichDropDown hero="What We Do" index={ props.indexB }/>
                    <SandwichDropDown hero="Learn More" index={ props.indexC }/>
                    <SandwichDropDown hero="Contact Us" index= { props.indexD }/>
                </div>
            </div>
            : <></>}
        </>
    )
}

function SandwichDropDown(props){
    let _Arrow = (HeaderData[props.index].length > 0 ? <>&#9660;</> : <></>)
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.sw_dropbtn} onClick={() => {alert("Functionality coming soon :)")}}
        onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)} >
            { /* Outer button hero */}
            { props.hero } { _Arrow }

            { /* Flexbox that appears under outer button with mapped elements
                 taken from HeaderData.
                 Appears only on hover of outer button. */}
            { isShown && HeaderData[props.index].length > 0 ?
                <div className={styles.sw_item_container}>
                    { HeaderData[props.index].map((item) => {
                                return   ( <div key={item.title} className={styles.sw_item} onClick={() => {alert("Functionality coming soon :)")}}>{item.title}</div> )
                    })} 
                </div>
                    : <></>}

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
                    <Link href="/">
                        <Image src={LOGO} alt="Saratoga Ladies Logo" />
                    </Link>
                </div>
                
                <MappedDropDown mrgnTop="2.5vw" hero="Learn More" dropPad="45px" index="2"/>
                <MappedDropDown mrgnTop="0.5vw" hero="Contact Us" dropPad="35px" index="3"/>

                <svg viewBox="0 0 40 2" fill="#fff"><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
            </div>

            <ClickableDropdown indexA="0" indexB="1" indexC="2" indexD="3"/>
        </React.Fragment>
    )
}

export default function Header(props) { return ( <header><HeaderContent/></header>)}