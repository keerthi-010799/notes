import React from "react";
import TextareaAutoresize from "react-autosize-textarea";

const Individualnote = (props) => {
  const noteChangeHandler = (event) => {
    event.preventDefault();
    const note = event.target.value;
    props.notechanged({title:props.title,note:note,list:props.list});
  };
 return (        
        <TextareaAutoresize
        //onClick={props.togglingmodal}
        className="textnotes"
        value={props.note}
        name={"note"}
        onChange={noteChangeHandler}
        />  
  );
};

export default Individualnote;
