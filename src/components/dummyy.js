    const tickedlist = this.state.listedNotes.map((listedNote,listedIndex)=>{
      return (<div style={{position:"relative"}}>
      <div className="listtextbox" onClick={()=>this.checkedHandler(listedIndex)}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg=="
         alt="" 
         height="16" 
         width="16" />
      </div>
      <TextareaAutoresize
      style={{marginLeft:"20px"}}
       onClick={()=>this.toggleModal(true,listedIndex)}
       className="textnotes"
       value={listedNote.note}
       name={"note"}
       onChange={this.noteChangeHandler}
     /></div>)
    }








     {/*</div><div className="addnote row align-item-center" ref={this.addingRef}>
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
              <Note />

              {/*this.state.currentNote.type !== "list" ? (
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
              </div>*/












              /* const listednote = this.state.currentNote.list.map((listnote, index) => {
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
            key={index}
            style={{ marginLeft: "20px" }}
            className="textnotes"
            value={listnote}
          />
        </div>
      );
    });*/