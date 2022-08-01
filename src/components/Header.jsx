import React from 'react'
import "../../public/Header.css"

export default function Header() {
  return (
    <header id='welcome-section'>
        <div className="forest " />
        <div className="silhouette" />
        <div className="moon " />

        <div className="container">
            <h1>
            <span className="line ">I do</span>
            <span className="line ">System analysis</span>
            <span className="line">
                <span className="color">&</span> code.
            </span>
            </h1>
            <div className="buttons">
                <a href="#projects">my portfolio</a>
                <a href="#contact" className="cta">
                    ¡Empecemos! </a>
            </div>
        </div>
    </header>
  )
}
