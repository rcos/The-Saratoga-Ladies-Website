import styles from './footer.module.css'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaGithub , FaDownload} from 'react-icons/fa'
import {FooterSectionOneHeader, FooterSectionOneParagraph, FooterSectionTwoHeader, FooterSectionTwoParagraph, FooterSectionTwoButton, 
    FooterSectionThreeHeader, FooterSectionFourItem1, FooterSectionFourItem2, FooterSectionFourItem3
  } from '@/text/homepage'
  import Button from '../button.jsx'

import toast, { Toaster } from 'react-hot-toast';



export default function Footer(props) { 

  const notify = () => toast('This social media is coming soon!');

    return ( 
        <footer>
            <div className={styles['footer-top-section']}>
                {/* FIRST SECTION OF FOOTER -------------------------------------- */}
                <div className={styles['first-column'] + ' ' + styles['footer-content-section'] }>
                    <h4>{ FooterSectionOneHeader }</h4>
                    <p>{ FooterSectionOneParagraph }</p>
                    <div className={styles['footer-section-icon-wrapper']}>
                        <div className={styles['footer-icon']} onClick={() => {notify()}} ><FaLinkedinIn size={'1.25em'} color={'#fff'}/></div>
                        <div className={styles['footer-icon']} onClick={() => {notify()}} ><FaFacebookF  size={'1.25em'} color={'#fff'}/></div>
                        <div className={styles['footer-icon']} onClick={() => {notify()}} ><FaInstagram  size={'1.25em'} color={'#fff'}/></div>
                        <div className={styles['footer-icon']} onClick={() => {notify()}} ><FaYoutube  size={'1.25em'} color={'#fff'}/></div>
                    </div>
                </div>
                <div className={styles['second-column'] + ' ' + styles['footer-content-section'] }> 
                    <h4>{FooterSectionTwoHeader}</h4>
                    <p>{FooterSectionTwoParagraph}</p>

                    <div className={styles['footer-section-button-wrapper']}>
                      <div className={styles['button-div-download']}>
                        <Button icon={FaDownload} type={"download"} shape={'circle'}/>
                      </div>
                      <div className={styles['button-div-email']}>
                        <Button type={"email"} text={"Email us"} shape={'retangle'}/>
                      </div>
                    </div>
                </div> 
            </div>
            <div className={styles['footer-bot-section'] }>
                <div className={styles['footer-bot-content'] + ' footer-flow'}>
                    <div className="saratoga-flex">&#x1F4E7; &nbsp; {FooterSectionFourItem1} &nbsp;</div> | 
                    <div className="saratoga-flex">&nbsp; &#128222; {FooterSectionFourItem2} &nbsp;</div> | 
                    <div className="saratoga-flex">&nbsp; {FooterSectionFourItem3} </div>
                </div>
                <div className={styles['footer-bot-content']}>
                    An <div style={{    color: '#da291c !important', 'text-shadow': 'var(--saratoga-red) 0px 1px 2px' }}><a target="_blank" rel="noopener noreferrer" href="https://rcos.up.railway.app/"> &nbsp;RCOS&nbsp; </a></div> Project
                </div>
            </div>
        </footer>
        )
}


/*

  <FooterWrapper>
      <FooterTop>

          <FirstColumn>
           
            <FooterSectionTitle>{FooterSectionOneHeader}</FooterSectionTitle>
            <p>  
             {FooterSectionOneParagraph}
            </p>
            <FooterSectionIconWrapper>
                      <FooterIcon><FaLinkedinIn size={'1.25em'} color={'#fff'}/></FooterIcon>
                      <FooterIcon><FaFacebookF  size={'1.25em'} color={'#fff'}/></FooterIcon>
                      <FooterIcon><FaInstagram  size={'1.25em'} color={'#fff'}/></FooterIcon>
                      <FooterIcon><FaYoutube  size={'1.25em'} color={'#fff'}/></FooterIcon> 
            </FooterSectionIconWrapper>
      
          </FirstColumn>  
  

 
            <SecondColumn>
        
              <FooterSectionTitle>{FooterSectionTwoHeader}</FooterSectionTitle>
              <p>
                {FooterSectionTwoParagraph}
              </p>
              <button>{FooterSectionTwoButton}</button> 
     
            </SecondColumn>  

     
 
          <ThirdColumn>
           
            <FooterSectionTitle>{FooterSectionThreeHeader}</FooterSectionTitle>
            <FooterSectionList>
              { FooterData.map((item) => {
                  return <li><a to={item.path}> {item.title}</a></li>
              })}
            </FooterSectionList>
            
          </ThirdColumn>  

      </FooterTop>
      <FooterBottom>
        <FooterBottomContent className="footer-flow">
          <div className="saratoga-flex">&#x1F4E7; &nbsp; {FooterSectionFourItem1} &nbsp;</div> | 
          <div className="saratoga-flex">&nbsp; &#128222; {FooterSectionFourItem2} &nbsp;</div> | 
          <div className="saratoga-flex">&nbsp; {FooterSectionFourItem3} </div>
        </FooterBottomContent>
        <FooterBottomContent>
            An <div style={{    color: '#da291c !important', 'text-shadow': 'var(--saratoga-red) 0px 1px 2px' }}><a target="_blank" rel="noopener noreferrer" href="https://rcos.up.railway.app/"> &nbsp;RCOS&nbsp; </a></div> Project
        </FooterBottomContent>
      </FooterBottom>
    </FooterWrapper>

*/