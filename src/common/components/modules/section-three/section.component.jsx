import * as React from "react"
import styles from './section.module.css'
import Script from 'next/script'
import Image from 'next/image'


import MultiHeader from "../../ui/multi-header.jsx"
import Button from "../../ui/button.jsx"
import { DoubleCircle } from "../../ui/doubleCircle/doubleCircle"

import { SectionThreeHeader, SectionThreeSubHeader, SectionThreeParagraph1, SectionThreeParagraph2, SectionThreeParagraph3, AddressLines } from '@/text/homepage'

const SectionThree = (props) => {
    return (
        <div id={styles.ContentContainer}>
            <div id={styles.SectionTwoThirdContainer}>
                <div id={styles.SectionWrapper}>
                    <div id={styles.SectionPreHeaderText}>
                        {SectionThreeHeader}
                    </div>
                    <h2> {SectionThreeSubHeader} </h2>
                    <p style={{ marginBottom: '10px'}} > {SectionThreeParagraph1} </p>
                    {AddressLines.map((text, index) => {
                       return <p key={`address-line-${index}`} style={{textAlign: 'center', margin: '0', padding: '0'}}> {text} </p>
                    })}
                    
                    <p> {SectionThreeParagraph3} </p>
                </div>
            </div>
            <div id={styles.SectionOneThirdContainer} style={{marginLeft: '20px', display: 'flex', justifyContent: 'center'}}>
                <DoubleCircle circle1-size={"m"} circle2-size={"l"}/>
            </div>
        </div>
    
    )
}

    {/*<ContentContainer>
            <FirstSection>
                <SectionWrapper>
                    <SectionPreHeaderText>
                        {SectionThreeHeader}
                    </SectionPreHeaderText>
                    <h2> {SectionThreeSubHeader} </h2> 
                    <p>{SectionThreeParagraph1}</p>
                    <p>{SectionThreeParagraph2}</p>
                    <ButtonSection>
                        <LearnButton>See the Saratoga Ladies</LearnButton>
                    </ButtonSection>
                </SectionWrapper>   
            </FirstSection>
            <SecondSection>
                <DoubleCircle circle1-size={"m"} circle2-size={"l"}/>
            </SecondSection>
        </ContentContainer>*/}
 
export default SectionThree;