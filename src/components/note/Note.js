import React from "react";
import Individualnote from "../Individualnote/Individualnote";
//import Listednotes from "../Listednotes/Listednotes";
import Tooltip from "react-tooltip";
import person from "../../assets/images/icons/person.svg";
import palette from "../../assets/images/icons/palette.svg";
import image from "../../assets/images/icons/image.svg";
import archive from "../../assets/images/icons/archive.svg";
import others from "../../assets/images/icons/others.svg";
import pin from "../../assets/images/icons/pin.svg";
import tick from "../../assets/images/icons/tick.svg";
import Noteswithcheckbox from "../Noteswithcheckbox/Noteswithcheckbox";

const Note = ({togglemodal,...props}) => {
  // const [input, setinput] = useState("");
   const titleChangeHandler = (event) => {
     event.preventDefault();
     const title = event.target.value;
     props.notechanged({title:title,note:props.note,list:props.list});
   };
  // const changeinput = (e) => {
  //   setinput(e.target.value);
  // };
  // const inputHandling = (e) => {
  //   if (e.key === "Enter") {
  //     props.list.push(e.target.value);
  //     setinput("");
  //   }
  // };
  // const listchanged=(listText,index)=>{
  //   props.listchanged(listText,index);
  // }
  return (
    <div className="dummy" style={props.style} onClick={togglemodal}>
      <div className="notetickicon">
        <img src={tick} alt=" " />
      </div>
      <div className="d-flex flex-column bd-highlight note">
        <div style={{ display: "flex" }}>
          <input
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
            list={props.list} 
            checkedlist={props.checkedlist}
            clickcheckboxhandler={()=>props.clickcheckboxhandler(props.clickcheckboxhandler,props.uncheckHandler)}
            //clickcheckboxhandler={props.uncheckHandler}
            //notechanged={props.notechanged}
            />
            {/* {props.list.map((listt, index) => { // TODO: rebuild the Listednotes component *changed
              return (
                <Listednotes
                  oncheck={() =>
                    props.clickcheckboxhandler(index, props.noteIndex)
                  }
                  style={{ marginLeft: "20px" }}
                  list={listt}
                  listchanged={(value)=>listchanged(value,index)}
                />
              );
            })}
            <input
              style={props.showinput}
              className="inputlist"
              value={input}
              onChange={changeinput}
              onKeyPress={inputHandling}
              autoComplete="off"
              placeholder="+ list item"
            />
            {props.checkedlist && props.checkedlist.length !== 0 ? (
              <div>
                <hr />
                <div>Completed item</div>
                {props.checkedlist.map((check, checkindex) => {
                  return (
                    <div style={{ position: "relative" }}>
                      <img
                        onClick={() =>
                          props.uncheckHandler(checkindex, props.noteIndex)
                        }
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg=="
                        alt=""
                        style={{
                          position: "absolute",
                          marginTop: "17px",
                          marginLeft: "17px",
                        }}
                        style={{
                          position: "absolute",
                          marginLeft: "17px",
                          marginTop: "5px",
                        }}
                        height="16"
                        width="16"
                      />
                      <input
                        style={{
                          border: "none",
                          outline: "none",
                          paddingLeft: "38px",
                        }}
                        value={check}
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div> */}
          </div>
        ) : (
          <Individualnote note={props.note} notechanged={props.notechanged} />
        )}
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
        </div>
      </div>
    </div>
  );
};
export default Note;
