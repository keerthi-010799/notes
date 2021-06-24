import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import Note from "../note/Note";
import { useState } from "react";

const Notepopup = (props)=>{
   const [popupnote,setpopupnote]=useState([]);

   useEffect(()=>{
     console.log("mount");  
     setpopupnote({
         ...props.popupnote
     })
   },[])

   const modalchangeHandler = ({title,note}) => {
    setpopupnote({title:title,note:note});
  };

  const checkboxhandler=(index,checkindex)=>{
      const listitem = popupnote.list.splice(index,1);
      const checkedlist = popupnote.checkedlist.concat(listitem);
      setpopupnote({...popupnote,checkedlist:checkedlist});
  // }
  // const uncheckedHandler = (index)=>{
     const checkeditem = popupnote.checkedlist.splice(checkindex,1);
    const listadditem = popupnote.list.concat(checkeditem);
    setpopupnote({...popupnote,list:listadditem})
  }
//   const modalnoteChangeHandler = (note) => {
//     setpopupnote({note:note});
//   }; 
   return(
        <div>
            {props.status ? (
              // TODO: put this whole thing in note popup component *created
              <Modal clicked={()=>props.togglemodal(false,null)}>
                {props.noteIndex !== null && (
                  <div
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
                            //checkedlist={props.notes[props.noteIndex].checked} //TODO: change checked to checkedList *changed
                            showinput = {true}
                            style={{width:"100%",margin:"0px"}} // TODO: change prop name to style *changed
                            //titlechanged={modaltitlechangeHandler}
                            notechanged={modalchangeHandler}
                            //listchanged={this.listmodelhandler}
                            clickcheckboxhandler={checkboxhandler} // TODO: use one function 
                            //uncheckHandler = {uncheckedHandler}
                            noteIndex={props.noteIndex}
                            {...popupnote}
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