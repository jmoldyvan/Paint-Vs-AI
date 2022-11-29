import React from "react"
import { Link } from "react-router-dom";


export default function CenterInfo(props) {
    // console.log(props.deepAIimageState);
    // console.log(props.metArtImageState);
    // console.log(props.bothImageStateArray);
    // console.log(props.shuffleBothImageStateArray);


    {if(!props.deepAIimageState)
    return (
        <div>
            <div className="imageContainer">
                <div></div>
            </div>
            <div className="lowerContainer">
                <div></div>
            </div>
        </div>
    )}
    {if(props.deepAIimageState)
    return (
        <div>
        <div className="imageContainer">
            <div><h1>AI IMAGE RECIEVED</h1></div>
        </div>
        <div className="lowerContainer">
            <div></div>
        </div>
    </div>
    )}
}