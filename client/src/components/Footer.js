import React from "react"
import LinkIcon from "../images/LinkIcon.png"
import TwitIcon from "../images/TwitIcon.png"
import GitIcon from "../images/GitIcon.png"

export default function Footer() {
    return (
        <foot className="footerBar">
            <a href="https://www.linkedin.com/in/jordan-moldovan/"><img src={LinkIcon} className="foot--icon" /></a>
            <a href="https://twitter.com/JordanMoldovan"><img src={TwitIcon} className="foot--icon" /></a>
            <a href="https://github.com/jmoldyvan"><img src={GitIcon} className="foot--icon-right" /></a>
        </foot>
    )
}