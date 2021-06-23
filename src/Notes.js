import React, { Component, createRef } from "react";
import "./Notes.css";
import TextareaAutoresize from "react-autosize-textarea";
import Sidedrawer from "./components/sidedrawer/sidedrawer";
import person from "./assets/images/icons/person.svg";
import palette from "./assets/images/icons/palette.svg";
import image from "./assets/images/icons/image.svg";
import others from "./assets/images/icons/others.svg";
import archive from "./assets/images/icons/archive.svg";
import check from "./assets/images/icons/check.svg";
import brush from "./assets/images/icons/brush.svg";
import pin from "./assets/images/icons/pin.svg";
import Modal from ".//components/Modal/Modal";
import Tooltip from "react-tooltip";
import Note from "./components/note/Note";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.addingRef = React.createRef();
  }
  state = {
    modal: {
      status: false,
      noteIndex: null,
    },
    notes:[],
    currentNote: {
      type: "normal",
      title: "",
      note: "",
      listed: "",
      list: [],
    checked:[],
  },
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.ChangeHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.ChangeHandler);
  }
  checklistHandler = () => {
    this.setState({
      currentNote: { ...this.state.currentNote, type: "list" },
    });
  };
  ChangeHandler = (event) => {
    if (this.addingRef && !this.addingRef.current.contains(event.target)) {
      if (
        this.state.currentNote.note ||
        this.state.currentNote.list.length !== 0
      ) {
        const notes = [...this.state.notes];
        notes.push({ ...this.state.currentNote });
        this.setState({
          notes,
          currentNote: {
            type: "normal",
            title: "",
            note: "",
            list: [],
            checked:[]
          },
        });
      }
    }
  };
  handleInput = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };
  toggleModal = (status, noteIndex) => {
    this.setState({ modal: { status, noteIndex } });
  };
  modalnoteChangeHandler = ({note}) => {
    const notes = [...this.state.notes];
    notes[this.state.modal.noteIndex] = {note};
    this.setState({ notes });
  };
  modaltitlechangeHandler = (title)=>
  {
      const notes = [...this.state.notes];
      notes[this.state.modal.noteIndex].title = title ;
      this.setState({ notes });
  }
  handlelistInput = (e) => {
    let listnote = [...this.currentNote.list];
    listnote = e.target.value;
    this.setState({
      currentNote: {
        ...this.state.currentNote.list,
        list: listnote,
      },
    });
  };
  enterHandler = (e) => {
    if (e.key === "Enter") {
      const list = [...this.state.currentNote.list];
      list.push(this.state.currentNote.listed);
      this.setState({ currentNote: { list, type: "list", listed: "",checked:[]} });
    }
  };
  checkedhandler=(index,noteIndex)=>{
    const notes = [...this.state.notes];
    const curentNote = notes[noteIndex];
    const curentList = curentNote.list;
    const ticked = curentList.splice(index,1);
    curentNote.checked.push(ticked[0]);
    notes[noteIndex] = curentNote;
    this.setState({notes});
  }
  uncheckedHandler=(index,noteIndex)=>{
    const notes = [...this.state.notes];
    const currentNote = notes[noteIndex];
    const checkedlist = currentNote.checked;
    const checkednote = checkedlist.splice(index,1);
    currentNote.list.push(checkednote);
    notes[noteIndex] = currentNote;
    this.setState({notes});
  }
  listmodelhandler=(list,index)=>{
    const notes = [...this.state.notes];
    const currentnote = notes[this.state.modal.noteIndex];
    let currentlist = currentnote.list[index];
    currentlist = list;
    currentnote.list[index] = currentlist;     
    notes[this.state.modal.noteIndex] = currentnote;
    this.setState({ notes });
  }
  render() {
    const { currentNote } = this.state;
    const listednote = this.state.currentNote.list.map((listnote, index) => {
      return (
        <div style={{ position: "relative" }}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg=="
            alt=""
            style={{
              position: "absolute",
              marginTop: "17px",
              marginLeft: "17px",
            }}
            height="16"
            width="16"
          />
          <TextareaAutoresize
            style={{ marginLeft: "20px" }}
            className="textnotes"
            value={listnote}
          />
        </div>
      );
    });

    const notes = this.state.notes.map((note, noteIndex) => {
      return (
        <Note
        checkedlist = {note.checked}  // TODO: change this to checked list 
        clickcheckboxhandler={this.checkedhandler}
        uncheckHandler = {this.uncheckedHandler} 
        showinput={{display:"none"}} // TODO: send boolean 
        togglemodal={() => this.toggleModal(true, noteIndex)} 
        noteIndex={noteIndex}
        {...note} />
      );
    });

    return (
      <div className="overAllContainer">
        <div>
          <Sidedrawer />
        </div>
        <div className="notecontainer">
          <div className="addnote row align-item-center" ref={this.addingRef}>
            <div className="notetitle">
              <input
                autoComplete="off"
                className="noteinput"
                placeholder="Title"
                value={currentNote.title}
                name={"title"}
                onChange={this.handleInput}
              />
              <div style={{ marginLeft: "240px" }} className="noteicon">
                <img src={pin} alt="" />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                paddingTop: "2px",
                paddingBottom: "2px",
                paddingLeft: "10px",
              }}
            >
              {this.state.currentNote.type !== "list" ? (
                <TextareaAutoresize
                  className="addingtext"
                  placeholder="Take a note..."
                  value={currentNote.note}
                  name={"note"}
                  onChange={this.handleInput}
                />
              ) : (
                <div>
                  {listednote}
                  <input
                    autoComplete="off"
                    className="addinglisttext"
                    placeholder="+  List item"
                    value={currentNote.listed}
                    name={"listed"}
                    onKeyPress={this.enterHandler}
                    onChange={this.handleInput}
                  />
                </div>
              )}
              <div
                className="texticon"
                style={{ marginLeft: "340px" }}
                onClick={this.checklistHandler}
              >
                <img src={check} alt="" data-tip data-for="tick" />
                <Tooltip id="tick" place="bottom">
                  New List
                </Tooltip>
              </div>
              <div className="texticon" style={{ marginLeft: "380px" }}>
                <img src={brush} alt="" data-tip data-for="brush" />
                <Tooltip id="brush" place="bottom">
                  Insert drawing
                </Tooltip>
              </div>
              <div className="texticon" style={{ marginLeft: "420px" }}>
                <img src={image} alt="" data-tip data-for="image" />
                <Tooltip id="image" place="bottom">
                  Insert image
                </Tooltip>
              </div>
            </div>
            <div className="iconlist">
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
              <div className="noteicon">
                <img src={palette} alt="" data-tip data-for="palette" />
                <Tooltip id="palette" place="bottom">
                  Change color
                </Tooltip>
              </div>
              <div className="noteicon">
                <img src={image} alt="" data-tip data-for="image" />
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
              <div className="noteicon">
                <img src={others} alt="" data-tip data-for="other" />
                <Tooltip id="other" place="bottom">
                  More
                </Tooltip>
              </div>
              <div className="closing">Close</div>
            </div>
          </div>
          <div className="container">
            <div className="d-flex flex-wrap">{notes}</div>

            {this.state.modal.status ? (
              <Modal clicked={() => {
                console.log("log");
              }}>
                {this.state.modal.noteIndex !== null && (
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
                            checkedlist={this.state.notes[this.state.modal.noteIndex].checked} //TODO: change checked to checkedList
                            showinput={{display:"block"}}
                            modalsize={{width:"100%",margin:"0px"}} // TODO: change prop name to style
                            titlechanged={this.modaltitlechangeHandler}
                            notechanged={this.modalnoteChangeHandler}
                            listchanged={this.listmodelhandler}
                            clickcheckboxhandler={this.checkedhandler} // TODO: use one function 
                            uncheckHandler = {this.uncheckedHandler}
                            noteIndex={this.state.modal.noteIndex}
                            {...this.state.notes[this.state.modal.noteIndex]}
                          />
                        </div>
                      </div>
                    }
                  </div>
                )}
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default Notes;
