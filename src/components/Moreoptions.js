import React from "react";
import  "../components/Moreoption.css";

const Moreoptions =(props)=>{
    return(
<div  className = "innermenu" >
              <p  className="innermenuitem" onClick={props.deletenote}>Delete note</p>
              <p onClick={props.closemenu} className="innermenuitem">Add lable</p>
              <p onClick={props.copynote} className="innermenuitem">Make a copy</p>
              <p  className="innermenuitem">show Tickboxes</p>
            </div>
            )
}
export default Moreoptions;