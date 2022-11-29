import React from "react"
import { Link } from "react-router-dom";


export default function CenterInfo(props) {
    console.log(props.deepAIimageState);
    console.log(props.metArtImageState);
    console.log(props.bothImageStateArray);
    console.log(props.shuffleBothImageStateArray);



      //  add random function for the centerinfo to randomly sort the divs
    return (
        <div>
            <div className="imageContainer">
                <div></div>
            </div>
            <div className="lowerContainer">
                <div></div>
            </div>
        </div>
    )
}