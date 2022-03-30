import "./topbar.css"
import { Notes, CloudDownload,BarChart } from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbar" >
    <div className="wrapper">
  
            <a href="#intro" className="logo" >Concircle scanner app.</a>
            <div  className="itemContainer">
              <a href="#features" >

                <Notes className="icon" />
                <span>Features</span>
              </a>
            </div>
            <div className="itemContainer">
            <a href="#code" >

            <BarChart className="icon" />
                <span>Generate Barcode</span>
</a>
              
            </div>

            
            <div className="itemContainer">
            <a href="#download" >

            <CloudDownload className="icon" />
                <span>Download</span>
</a>
              
            </div>


     
    </div>
</div>
  )
}
