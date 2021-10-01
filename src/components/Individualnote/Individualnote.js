import React from "react";
import TextareaAutoresize from "react-autosize-textarea";

const Individualnote = (props) => {
  const noteChangeHandler = (event) => {
    event.preventDefault();
    props.notechanged(event.target.value);
  };
  return (
    <TextareaAutoresize 
      style={props.style}
      className="textnotes"
      value={props.note}
      name={"note"}
      onChange={noteChangeHandler}
    />
  );
};

export default Individualnote;
