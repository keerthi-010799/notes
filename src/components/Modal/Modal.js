import React from "react";
import ReactDOM from"react-dom";
import "./Modal.css";


const Modal =(props)=>{
    return ReactDOM.createPortal(
    <div className="modal" onClick={props.clicked}>
        {props.children}
    </div>,document.getElementById("root"));
            
}
export default Modal;