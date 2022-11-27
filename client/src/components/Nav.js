import React from "react"
import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <nav className="NavBar">
            <h1>Guess The Real Painting</h1>
            <button>LOGIN</button>
            <button>REGISTER</button>
        </nav>
    )
}