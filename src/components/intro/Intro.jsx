import React from 'react'
import './intro.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ['Scanning your bar code.','Validating your Data.']
        });


    }, []);
    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/phones.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There,</h2>
                    <h1>Scanner app is here</h1>
                    <h3>For <span ref={textRef} ></span></h3>
                </div>
                <a href="#features">
                    <img src="assets/down.png" alt="" />
                </a>

            </div>
        </div>
    )

}
