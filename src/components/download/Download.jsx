import React from 'react'
import './download.css'
import { Apple, Android } from "@material-ui/icons"
export default function Download() {
  return (
    <div className="download" id="download">
    <h1>Download</h1>
    <div className="container">
      <div className="card">

        <div className="center">
         
            <a href="https://github.com/aymenouer/concircle-scanner-mobile-app" >
            <Android style={{color:'green'}} />
            <p>Android</p>
</a>
       
    
            
            <a href="https://github.com/aymenouer/concircle-scanner-mobile-app" >
            <Apple style={{color:'grey'}}  />
            <p>Apple</p>
</a>
           
        
        
          
       
       
    
        </div>
      </div>
    </div>
  </div>
   
  )
}
