import * as React from "react"
import styles from './ui.module.css'

const LinedHeader = (props) => {
    return (
        <div className={styles.lined_header_wrapper + 'flex vertical_center'}>
            <div className={styles.lined_header_line}>
                <div className={styles.lined_header_text} >
                    { props.children }
                </div>
            </div>
        </div>
    )

}

export default LinedHeader