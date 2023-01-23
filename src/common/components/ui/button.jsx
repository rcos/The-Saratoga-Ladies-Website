import * as React from "react"
import styles from './ui.module.css'

const Button = (props) => {
    return (
        <div className={styles['saratoga-button-wrapper'] }>
            <button>{ props.children }</button>
        </div>
    )

}

export default Button
