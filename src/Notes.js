import React, { Component, createRef } from "react";
import "./Notes.css";
import Sidedrawer from "./components/sidedrawer/sidedrawer";
import Note from "./components/note/Note";
import Notepopup from "./components/Notepopup/Notepopup";
import Addnote from "./components/Addnote/Addnote";
import {
  getdata,
  putdata,
  postdata,
  deletedata,
  binData,
  getBindata
} from "./components/services/Axioscalls";
import Context from "./context/context";

class Notes extends Component {
  static contextType = Context;
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
      images: "",
      color: "",
    },
    history: {
      history: [],
      count: 0,
    },
    word:null,
    deleted:[]
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.ChangeHandler);
    getdata()
      .then((res) => {
        console.log(res.data);
        let datafromdb = Object.keys(res.data).map((id) => {
          return { id, ...res.data[id] };
        });
        console.log(datafromdb);
        this.setState({ notes: datafromdb });
      })
      .catch((er) => {
        console.log(er);
      });
      const context = this.context;
      this.setState({word:context.searchWord})  
      getBindata().then(res=>{console.log(res.data);
        let Bindata = Object.keys(res.data).map((id) => {
          return { id, ...res.data[id] };
        });
        console.log(this.state.deleted);
        this.setState({ deleted: Bindata });
      });
  }

   componentDidUpdate() {
     if(this.state.notes.length !== 0){
    getdata()
    .then((res) => {
      console.log(res.data);
      let datafromdb = Object.keys(res.data).map((id) => {
        return { id, ...res.data[id] };
      });
      console.log(datafromdb);
      this.setState({ notes: datafromdb });
    })
    .catch((er) => {
      console.log(er);
    });
    console.log(this.context.searchWord);
  }
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
        postdata(this.state.currentNote);
        this.setState({
          notes,
          currentNote: {
            type: "normal",
            title: "",
            note: "",
            list: [],
            checkedlist: [],
            images: "",
            color:"",
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
    const count = this.state.history.count;
    const history = this.state.history.history;
    history.push(this.state.currentNote);
    this.setState({
      history: { history, count: count + 1 },
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
        currentNote: { list, type: "list", listed: "", checkedlist: [],note:""},
      });
    }
  };
  popupchanges = (popupnote) => {
    const notes = [...this.state.notes];
    notes[this.state.modal.noteIndex] = popupnote;
    putdata(this.state.notes[this.state.modal.noteIndex].id, popupnote).then(
      (res) => {
        console.log(res.data);
        notes[this.state.modal.noteIndex] = res.data;
        this.setState({ notes });
      }
    );
  };
  addcolor=(color)=>{ 
    this.setState({currentNote:{...this.state.currentNote.color,color:color}});
  }
  uploadingimage = (imgurl, noteIndex) => {
    const notes = [...this.state.notes];
    notes[noteIndex].images = imgurl;
    this.setState({ ...this.state.notes, notes });
  };
  bgcolorchange = (color, noteIndex) => {
    const notes = [...this.state.notes];
    notes[noteIndex].color = color;
    this.setState({ ...this.state.notes, notes });
  };
  addingimage = (imgurl) => {
    this.setState({
      currentNote: { ...this.state.currentNote.images, images: imgurl },
    });
  };
  deletenote = (index) => {
    binData(this.state.notes[index]).then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    deletedata(this.state.notes[index].id).then(res=>{console.log(res.data)});
    console.log(this.state);
  };
  undofunction = () => {
    const index = this.state.history.count - 1;
    this.setState({ currentNote: this.state.history.history[index] });
    this.setState({
      history: { ...this.state.history, count: this.state.history.count - 1 },
    });
  };
  redofunction = () => {
    const index = this.state.history.count + 1;
    this.setState({ currentNote: this.state.history.history[index] });
    this.setState({
      history: { ...this.state.history, count: this.state.history.count + 1 },
    });
  };
  copynote = (index) => {
    const notes = [...this.state.notes];
    const data = notes[index];
    postdata(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
 };
  render() {
    let notes;
    if(this.context.deletednotes === false){    
     notes = this.state.notes.filter((note)=>{
      if(this.context.searchWord ===""||this.context.searchWord === null){
        return note
      }else if(note.title.includes(this.context.searchWord)||note.note.includes(this.context.searchWord)){
        return note
    }
    }).map((note, noteIndex) => {
      return (
        <Note
          showinput={false}
          togglemodal={() => this.toggleModal(true, noteIndex)}
          imagelink={this.uploadingimage}
          colorfrompalette={this.bgcolorchange}
          noteIndex={noteIndex}
          imgstyle={{width: "260px"}}
          copynote={this.copynote}
          deletenote={() => this.deletenote(noteIndex)}
          {...note}
        />
       );
    })
  }else if(this.context.deletednotes === true){
    notes = this.state.deleted.map((note, noteIndex) => {
      return (
        <Note
          showinput={false}
          togglemodal={() => this.toggleModal(true, noteIndex)}
          imagelink={this.uploadingimage}
          colorfrompalette={this.bgcolorchange}
          noteIndex={noteIndex}
          imgstyle={{width: "260px"}}
          copynote={this.copynote}
          deletenote={() => this.deletenote(noteIndex)}
          {...note}
        />
       );
    })
  }
    return (
      <div className="overAllContainer">
        <div>
          <Sidedrawer />
        </div>
        <div className="notecontainer">
          <div>
            <Addnote
              addingRef={this.addingRef}
              {...this.state.currentNote}
              handleInput={this.handleInput}
              enterHandler={this.enterHandler}
              checklistHandler={this.checklistHandler}
              imagelink={this.addingimage}
              undooption={this.undofunction}
              redooption={this.redofunction}
              addcolor={this.addcolor}
            />
          </div>
          <div className="container">
            <div className="notesel" style={this.context.listview ? {marginLeft:"200px",width:"650px",columnWidth:"800px"}:null}>{notes}</div>
            {this.state.modal.status && (
              <Notepopup
                {...this.state.modal}
                togglemodal={this.toggleModal}
                popupnote={this.state.notes[this.state.modal.noteIndex]}
                popupchanges={this.popupchanges}
                deletenote={this.deletenote}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Notes;
