import React from "react";
import Listednotes from "../Listednotes/Listednotes";
import { useState } from "react";

const Noteswithcheckbox = (props) => {
  const [input, setinput] = useState("");
  const changeinput = (e) => {
    setinput(e.target.value);
  };
  const inputHandling = (e) => {
    if (e.key === "Enter") {
      props.list.push(e.target.value);
      setinput("");
    }
  };
  return (
    <div>
      {props.list.map((listitem, listindex) => {
        return (
          <Listednotes
            oncheck={() => props.clickcheckboxhandler(listindex)}
            style={{ marginLeft: "20px" }}
            list={listitem}
            listchanged={(value) => props.listchanged(value, listindex)}
          />
        );
      })}
      <input
        className={"inputlist"}
        style={{ display: props.showinput === true ? "block" : "none" }}
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
                  onClick={() => props.uncheckHandler(checkindex)}
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
                    textDecorationLine:"line-through"
                  }}
                  value={check}
                  readOnly
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default Noteswithcheckbox;
