import React, { useContext, useState } from 'react';
import './Sidedrawer.css';
import notes from "../../assets/images/icons/notes.svg";
import remainder from "../../assets/images/icons/reminder.svg";
import tag from "../../assets/images/icons/tag.svg";
import edit from "../../assets/images/icons/edit.svg";
import archive from "../../assets/images/icons/archive.svg";
import trash from "../../assets/images/icons/trash.svg";
import Context from '../../context/context';

const Sidedrawer = () => {
  const context = useContext(Context)
  const [noteColor,setNote] = useState("#00bcd4");
  const [binColor,setBin] = useState();
  const binHandler = ()=>{
    setBin("#00bcd4");
    setNote(" ");
    context.deletednotes = true;
  }  
  const notesHandler =()=>{
    context.deletednotes = false;
    setBin(" ");
    setNote("#00bcd4");
  }
  return (
      <div className="sideDrawer" style={context.mainmenu ? {width:"200px"} : null} >
        <div className={context.deletednotes ? "ssideDrawerr":"ssideDrawerr1"}>
          <div
            className={context.deletednotes ? "sideDrawerItem":"sideDrawerItem1"}
          style={{backgroundColor:noteColor}}>
            <img src={notes} alt="" />
          </div>
          <div className="sideText1" style={context.mainmenu ? {display:'flex'}:null} onClick={notesHandler}>Notes</div>
        </div>
        {/* <div className="ssideDrawerr">
          <div className="sideDrawerItem">
            <img src={remainder} alt="" />
          </div>
          <div className="sideText">Reminders</div>
        </div>
        <div className="ssideDrawerr">
          <div className="sideDrawerItem">
            <img src={tag} alt="" />
          </div>
          <div className="sideText">Inspiration</div>
        </div>
        <div className="ssideDrawerr">
          <div className="sideDrawerItem">
            <img src={tag} alt="" />
          </div>
          <div className="sideText">Personal</div>
        </div>
        <div className="ssideDrawerr">
          <div className="sideDrawerItem">
            <img src={tag} alt="" />
          </div>
          <div className="sideText">Work</div>
        </div>
        <div className="ssideDrawerr">
          <div className="sideDrawerItem">
            <img src={edit} alt="" />
          </div> 
          <div className="sideText">Edit label</div>
    </div>
        <div className="ssideDrawerr">
          <div className="sideDrawerItem">
            <img src={archive} alt="" />
          </div>
          <div className="sideText">Archive</div>
        </div>
        */}
        <div className={!context.deletednotes ? "ssideDrawerr":"ssideDrawerr1"}>
          <div className={!context.deletednotes ? "sideDrawerItem" : "sideDrawerItem1"} style={{backgroundColor:binColor}}>
            <img src={trash} alt="" />
          </div>
          <div className="sideText" style={context.mainmenu ? {display:'flex'}:null} onClick={binHandler}>Bin</div>
        </div>
      </div>
    );
}
export default Sidedrawer;