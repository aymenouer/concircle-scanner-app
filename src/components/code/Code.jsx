import React, { useState } from 'react'
import  Barcode  from 'react-barcode';
import './code.css'
export default function Code() {
    const [text,setText] = useState("Hello");

    return (
        <div className="code" id="code" >
            <div className="left">
            <Barcode value={text} />
               
            </div>
            <div className="right">
                <h2>Generate Bar code.</h2>
                <form  >
                    <textarea    onChange={(e) => setText(e.target.value)}  placeholder="your Text" />
                  
                   
                 
                </form>
            </div>
        </div>
    )
}
