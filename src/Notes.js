import React, { Component, createRef } from "react";
import "./Notes.css";
import Sidedrawer from "./components/sidedrawer/sidedrawer";
import Note from "./components/note/Note";
import Notepopup from "./components/Notepopup/Notepopup";
import Addnote from "./components/Addnote/Addnote";

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
    notes: [],
    currentNote: {
      type: "normal",
      title: "",
      note: "",
      listed: "",
      list: [],
      checkedlist: [],
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
            checkedlist: [],
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
      this.setState({
        currentNote: { list, type: "list", listed: "", checkedlist: [] },
      });
    }
  };
  popupchanges = (popupnote) => {
    const notes = [...this.state.notes];
    this.setState({ notes });
    notes[this.state.modal.noteIndex] = popupnote;
  };
  render() {
    const { currentNote } = this.state;
    const notes = this.state.notes.map((note, noteIndex) => {
      return (
        <Note
          // TODO: change this to checked list  *changed
          showinput={false}
          // TODO: send boolean *changed
          togglemodal={() => this.toggleModal(true, noteIndex)}
          noteIndex={noteIndex}
          {...note}
        />
      );
    });

    return (
      <div className="overAllContainer">
        <div>
          <Sidedrawer />
        </div>
        <div className="notecontainer">
          <div className="addnote row align-item-center" ref={this.addingRef}>
            <Addnote
              {...this.state.currentNote}
              handleInput={this.handleInput}
              enterHandler={this.enterHandler}
              checklistHandler={this.checklistHandler}
            />
          </div>
          <div className="container">
            <div className="d-flex flex-wrap">{notes}</div>
            {this.state.modal.status && (
              <Notepopup
                {...this.state.modal}
                togglemodal={this.toggleModal}
                popupnote={this.state.notes[this.state.modal.noteIndex]}
                popupchanges={this.popupchanges}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Notes;
