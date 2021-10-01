import React, { useEffect,useRef } from "react";
import Modal from "../Modal/Modal";
import Note from "../note/Note";
import { useState } from "react";
import Focus from "../Focus";


const Notepopup = (props) => {
 const mainRef = useRef(null);
 Focus(mainRef)
  const [popupnote, setpopupnote] = useState([]);
  const [history,sethistory] = useState([]);
  const [count,setcount] = useState(0);
  useEffect(() => {
    
    setpopupnote({
      ...props.popupnote,
    });
  }, []);

  const modaltitlechangeHandler = (title) => {
    const popupcopy = { ...popupnote };
    setpopupnote({ ...popupcopy, title: title });
  };

  const modalchangeHandler = (note) => {
    const popupcopy = { ...popupnote };
    setpopupnote({ ...popupcopy, note: note });
    //const modalnote = popupnote;
    //const historycpy = [history];
    history.push(popupnote);
    sethistory(history);
    setcount(count + 1);
  };

  const checkboxhandler = (index) => {
    const popupnoteCpy = { ...popupnote };
    const listitem = popupnoteCpy.list.splice(index, 1);
    const checkedlist = popupnoteCpy.checkedlist.concat(listitem);
    setpopupnote({ ...popupnoteCpy, checkedlist: checkedlist });
  };

  const uncheckHandler = (checkindex) => {
    const popupnoteCpy = { ...popupnote };
    const checkeditem = popupnoteCpy.checkedlist.splice(checkindex, 1);
    const listadditem = popupnoteCpy.list.concat(checkeditem);
    setpopupnote({ ...popupnoteCpy, list: listadditem });
  };
  const listchanged = (list, index) => {
    const popupnotecopy = { ...popupnote };
    popupnotecopy.list[index] = list;
    setpopupnote({ ...popupnotecopy });
  };
  const uploadingimage = (imagelink) => {
    const popupnotecopy = { ...popupnote };
    popupnotecopy.images = imagelink;
    setpopupnote({ ...popupnotecopy });
  };
  const bgcolorchange = (color)=>{
    const popupnotecopy = { ...popupnote };
    popupnotecopy.color = color;
    setpopupnote({ ...popupnotecopy });
  }
  const changedrag=(changednote)=>{
    const notecopy = {...popupnote};
    notecopy.list = changednote;
    setpopupnote({...notecopy});
  }
  const undofunction =()=>{
  const index = count - 1;  
  setpopupnote(history[index]);
  setcount(count-1);
  }
  const redofunction =()=>{
    const index = count + 1;  
    setpopupnote(history[index]);
    setcount(count + 1);
    }
  return (
    <div>
      {props.status ? (
        <Modal
          clicked={() => {props.togglemodal(false, null);
           props.popupchanges(popupnote);}}
        >
          {props.noteIndex !== null && (
            <div ref={mainRef}
              style={{ backgroundColor: "white" }}
              className="d-flex flex-column bd-highlight mb-3 modalinner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {
                <div>
                  <div style={{ display: "flex" }}>
                    <Note  
                      showinput={true}
                      showdrag={true}
                      imgstyle={{width:"100%"}}
                      style={{ width: "100%",margin: "0px" }}
                      border = "none"
                      titlechanged={modaltitlechangeHandler}
                      notechanged={modalchangeHandler} 
                      listchanged={listchanged} 
                      clickcheckboxhandler={checkboxhandler} 
                      uncheckHandler={uncheckHandler}
                      popupchanges={props.popupchanges}
                      imagelink={uploadingimage}
                      colorfrompalette={bgcolorchange}
                      noteIndex={props.noteIndex}
                      deletenote={props.deletenote}
                      undooption={undofunction}
                      redooption={redofunction}
                      {...popupnote}
                      changedrag={changedrag}
                    />
                  </div>
                </div>
              }
            </div>
          )}
        </Modal>
      ) : null}
    </div>
  );
};

export default Notepopup;