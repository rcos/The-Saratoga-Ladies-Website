import * as React from "react"
import styles from './section.module.css'
import Script from 'next/script'
import Image from 'next/image'


import MultiHeader from "../../ui/multi-header.jsx"
import Button from "../../ui/button.jsx"

import { SectionThreeHeader, SectionThreeSubHeader, SectionThreeParagraph1, SectionThreeParagraph2 } from '@/text/homepage'

const SectionThree = (props) => {
    return (
        <div className={styles['section-content-container']}>
            <div className={styles['section-first-container'] + ' saratoga-half-container'}>
                <MultiHeader subText={SectionThreeSubHeader} >{ SectionThreeHeader }</MultiHeader> 
                <p>{SectionThreeParagraph1}</p>
                <p>{SectionThreeParagraph2}</p>
                <Button>{'Learn More'}</Button>
            </div>
            <div className={styles['section-second-container']  + ' saratoga-half-container'}>

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