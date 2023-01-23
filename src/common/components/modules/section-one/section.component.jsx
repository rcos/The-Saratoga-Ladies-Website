import styles from './section.module.css'
import * as React from "react"
//import {} from './SectionElements' 
import LinedHeader from "../../ui/lined-header.jsx"

//import {ContentContainer, TextSection, Text, ButtonSection, LearnButton, ContentWrapper, FirstSection, SecondSection, Box } from './SectionElements'

import {SectionOneHeader, SectionOneParagraph1, SectionOneParagraph2, /* SectionButton*/ MissionStatement} from '@/text/homepage'

const SectionOne = () => {
    return (
        <div className={styles['section-container']}>
            <LinedHeader>{ SectionOneHeader }</LinedHeader>
            <div className={styles['section-content-container']}>
                <div className={styles['section-first-container'] + ' saratoga-half-container'}>
                    <div className={styles['section-text-wrapper']}>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>We</span>
                            { SectionOneParagraph1 } 
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>We</span>
                            { SectionOneParagraph2 }
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Mission</span>
                            { MissionStatement }
                        </p>
                    </div>
                </div>
                <div className={styles['section-second-container'] + ' saratoga-half-container ' + styles['section-box-container']}>
                        <div className={styles['section-box']} style={{ background: 'var(--white-gradient)' }}>
                            <h3>Year of Establishment</h3>
                            <span>2022</span>
                        </div>
                        <div className={styles['section-box']} style={{ background: 'var(--white-gradient)' }}>
                            <h3>How can you help?</h3>
                            <button>Learn More</button>
                        </div>
                        <div className={styles['section-box']} style={{ background: 'var(--white-gradient)' }}>
                            <h3>Interested in Joining?</h3>
                            <button>Learn More</button>
                        </div>
                        <div className={styles['section-box']} style={{ background: 'var(--white-gradient)' }}>
                            <h3>Number of Volunteers</h3>
                            <span>25</span>
                        </div>
                </div>
            </div>
        </div>
        
    )
}

export default SectionOne;



