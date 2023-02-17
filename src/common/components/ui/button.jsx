import * as React from "react"
import styles from './ui.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {

    let buttonStyles = {
        borderRadius:   props.shape === "circle" ? "50%" : "10px",
        height:         props.shape === "circle" ? '50px' : "inherit" ||
                        props.shape === "rectangle" ? "50px" : "inherit",
        aspectRatio:    props.shape === "circle" ? '1/1' : "inherit",
        maxWidth:       props.shape === "circle" ? "50px" : "inherit",
        minWidth:       props.shape === "circle" ? "50px": "inherit",
        width:          props.shape === "rectangle" ? "100%" : "inherit",
        fontSize:       props.shape === "circle" ? "1px" : "inherit",
        boxShadow:     props.shape === "circle" ? 
                        "inset 0  -0.6em 2em -0.5em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)" : 
                        "inherit",
    }

    switch(props.type) {
        case "email":
            return (
                <div className={styles['saratoga-button-wrapper'] }>
                   <button style={buttonStyles}>
                        <a className={styles['link-style-rectangle']} href="mailto: ouremail@example.com"></a>
                        { props.text ? props.text : <></> }
                   </button>
                </div>
           )
        
        case "download":
            return (
                <div className={styles['saratoga-button-wrapper'] }>
                    <button style={buttonStyles}>
                        <a className={styles['link-style-circle']} href="https://cdn.discordapp.com/attachments/1067781290830594118/1067786175944859658/TSL_APPLICATION_26_Oct_22.pdf"></a>
                        { props.icon ? <props.icon size={"1.5rem"} /> : <></> }
                    </button>
                </div>
            )

        default:
            return (
                <div className={styles['saratoga-button-wrapper'] }>
                    <button className={styles['saratoga-button-wrapper']}>
                        { props.text ? props.text : <></> }
                        { props.icon ? <props.icon size={"1.7rem"} /> : <></> } 
                    </button>
               </div>
            )
      }
    
}

Button.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.any,
    shape: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    link: PropTypes.string,
}


export default Button

