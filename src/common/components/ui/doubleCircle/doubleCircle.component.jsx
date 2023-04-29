import styles from './doubleCircle.module.css'
import Image from "next/image"
import React, { useState } from "react"

//import outerCircleImage from "@/images/IMG8.JPG"
//import innerCircleImage from "@/images/IMG15.JPG"

// Double Circles Component
function DoubleCircles(props) {

    // set the size of the circles used
    // supports "s" "m" and "l" for small medium and large circles respectively
    const [circleOuterSize, setCircleOuterSize] = useState("l");
    const [circleInnerSize, setCircleInnerSize] = useState("m");

    return ( <>
        {/*<div id={styles.ContentContainer}>
            <div id={styles.CirclesContainer}>
                <div id={styles.circleL} className="overflow-hidden">
                    <Image src={outerCircleImage} className="circle-image" alt="outer circle"/>

                    <div id={styles.InnerCircleContainer}>
                        <div id={styles.circleM} className="overflow-hidden">
                            <Image src={innerCircleImage} className="circle-image" alt="inner circle" style={{height: "100%", top: "5px"}} />
                        </div>
                    </div>
                </div>
            </div>
</div>}*/}
</>
    );
}
export default DoubleCircles