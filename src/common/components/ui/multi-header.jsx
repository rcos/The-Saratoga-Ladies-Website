import * as React from "react"
import styles from './ui.module.css'

const MultiHeader = (props) => {
    return (
        <div className={styles['multi-header-wrapper'] } >
            <h5> { props.subText } </h5>
            <h2> { props.children } </h2> 
        </div> 
    )

}

export default MultiHeader