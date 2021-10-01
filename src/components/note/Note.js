import React, { useRef, useState } from "react";
import Individualnote from "../Individualnote/Individualnote";
import Tooltip from "react-tooltip";
import person from "../../assets/images/icons/person.svg";
import palette from "../../assets/images/icons/palette.svg";
import image from "../../assets/images/icons/image.svg";
import archive from "../../assets/images/icons/archive.svg";
import others from "../../assets/images/icons/others.svg";
import pin from "../../assets/images/icons/pin.svg";
import tick from "../../assets/images/icons/tick.svg";
import Noteswithcheckbox from "../Noteswithcheckbox/Noteswithcheckbox";
import undo from "../../assets/images/icons/undo.svg";
import redo from "../../assets/images/icons/redo.svg";
import Colorpalette from "../Colorpalette/Colorpalette";
import Moreoptions from "../Moreoptions";


const Note = ({
  togglemodal,
  clickcheckboxhandler,
  uncheckHandler,
  modaltitlechangeHandler,
  ...props
}) => {
  const [menu,setmenu] = useState(false);
  const [bgcolor,setbgcolor] = useState();
  const [showpalette,setpalette] = useState(false);
  const imageupload = useRef();
  const titleChangeHandler = (event) => {
    event.preventDefault();
    props.titlechanged(event.target.value);
  };
  const addingimage=()=>{
    imageupload.current.click();
  }
  const previewFile=(event)=> {
    const imgurl = URL.createObjectURL(event.target.files[0]);
    props.imagelink(imgurl,props.noteIndex);
  }
  const openmenu = ()=>{
    setmenu(!menu);
  }
  const closemenu = ()=>{
    setmenu(!menu);
  }
  const showcolorpalette = ()=>{
    setpalette(true);
  }
  const changebgcolor=(color)=>{
    setbgcolor(color);
    props.colorfrompalette(color,props.noteIndex)
    setpalette(false);
  }
  return (
    <div className="dummy" style={props.style}>
      <input
        type="file"
        ref={imageupload}
        style={{ display: "none"}}
        onChange={(event) => previewFile(event)}
      /><div className="notetickicon" style={{marginTop:props.image ? "0px":"10px"}}>
      <img src={tick} alt=" " />
    </div>
      <img className="imgupload" style={props.imgstyle} src={props.images} alt="" />
      <div className="d-flex flex-column bd-highlight note" style={{backgroundColor:`${props.color}`,borderTop:`${props.border}`}}>
        <div onClick={togglemodal}>
          <div style={{ display: "flex" }}>
            <input
              style={{backgroundColor:`${props.color}`}}
              autoFocus
              autoComplete="off"
              value={props.title}
              className="noteitemtitle"
              placeholder="title"
              onChange={titleChangeHandler}
            />
            <div>
              <div className="noteiconpinimage">
                <img src={pin} alt=" " />
              </div>
            </div>
          </div>

          {props.type === "list" ? (
            <div>
              <Noteswithcheckbox
                innerstyle={`${props.color}`}
                showinput={props.showinput}
                clickcheckboxhandler={clickcheckboxhandler}
                uncheckHandler={uncheckHandler}
                list={props.list}
                listchanged={props.listchanged}
                checkedlist={props.checkedlist}
                showdrag={props.showdrag}
                changedrag={props.changedrag}
              />
            </div>
          ) : (
            <Individualnote style={{backgroundColor:`${props.color}`}} note={props.note} notechanged={props.notechanged} />
          )}
        </div>
        <div className="notetitle" style={{ display: "flex" }}>
          <div className="notebellicon">
            <img
              src="https://cdn2.iconfinder.com/data/icons/ui-essential-10/24/add_reminder-512.png"
              height="25px"
              width="25px"
              alt=""
              data-tip
              data-for="remainder"
            />
            <Tooltip id="remainder" place="bottom">
              Remainder
            </Tooltip>
          </div>
          <div className="noteicon">
            <img src={person} alt="" data-tip data-for="person" />
            <Tooltip id="person" place="bottom">
              Collabarator
            </Tooltip>
          </div>
          <div>      
            <div className="noteicon">
            <img src={palette} onClick={showcolorpalette} alt="" data-tip data-for="palette" />
            <Tooltip id="palette" place="bottom">
              Change color
            </Tooltip>
          </div>
          {showpalette ?
          <Colorpalette changecolor={changebgcolor}/>:null}
          </div>

          <div className="noteicon">
            <img
              src={image}
              alt=""
              data-tip
              data-for="image"
              onClick={addingimage}
            />
            <Tooltip id="image" place="bottom">
              Add image
            </Tooltip>
          </div>
          <div className="noteicon">
            <img src={archive} alt="" data-tip data-for="archive" />
            <Tooltip id="archive" place="bottom">
              Archive
            </Tooltip>
          </div>
          <div className="noteicon" onClick={openmenu}>
            <img src={others}  alt="" data-tip data-for="other" />
            <Tooltip id="other" place="bottom">
              More
            </Tooltip>
            { menu ? <Moreoptions copynote={()=>props.copynote(props.noteIndex)} closemenu={closemenu} deletenote={()=>props.deletenote(props.noteIndex)}/> 
             :null}
          </div>
          <div className="noteicon">
                <img src={undo} onClick={props.undooption} alt="" data-tip data-for="undo" />
                <Tooltip id="undo" place="bottom">
                  Undo
                </Tooltip>
              </div>
              <div className="noteicon">
                <img src={redo} onClick={props.redooption} alt="" data-tip data-for="redo" />
                <Tooltip id="redo" place="bottom">
                  Redo
                </Tooltip>
              </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
