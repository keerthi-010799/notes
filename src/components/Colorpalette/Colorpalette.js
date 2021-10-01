import React from "react";
import "../Colorpalette/Colorpalette.css"; 

const Colorpalette = (props) =>{
const colors = ["#fff","#f28b82","#fbbc04","#fff475","#ccff90","#a7ffeb","#cbf0f8","#aecbfa","#e8eaed","#d7aefb","#fdcfe8","#e6c9a8"];
return(
    <div className="colorcontainer" style={props.style}>
        {colors.map(color=>{return(
                <p className="colors" style={{backgroundColor:`${color}`}}
                onClick={()=>props.changecolor(color)}></p>
        )})}
    </div>
);
} 
export default Colorpalette;