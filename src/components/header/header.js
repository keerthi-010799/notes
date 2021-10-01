import React, { useContext, useState } from "react";
import "./header.css";
import menu from "../../assets/images/icons/menu.svg";
import noteicon from "../../assets/images/google-keep-icon.png";
import search from "../../assets/images/icons/search.svg";
import xicon from "../../assets/images/icons/xicon.svg";
import refresh from "../../assets/images/icons/refresh.svg";
import listview from "../../assets/images/icons/listview.svg";
import gridview from "../../assets/images/icons/gridview.svg";
import cogs from "../../assets/images/icons/cogs.svg";
import main from "../../assets/images/icons/mainmenu.svg";
import profile from "../../assets/images/icons/profile.jpg";
import Tooltip from "react-tooltip";
import Context from "../../context/context";

const Header = () => {
  const [searchtext,setText] = useState();
  const [show,setShow] = useState(false);
  const [view,setview] = useState(true);
  const context = useContext(Context);
  const changeHandler=(event)=>{
    const word = event.target.value;
    setText(word);
    context.searchWord = word;
    console.log(context.searchWord);
    setShow(true);
  } 
   const listviewHandler = ()=>{
     setview(!view);
     context.listview = view;
   }
   const refreshHandler = ()=>{
    window.location.reload();
   }
   const clearSearch = ()=>{
     setText("");
     context.searchWord = null;
     setShow(false);
   }
  return (
    <div class="d-flex justify-content-between  align-items-center noteheader">
            <div class="d-flex p-2"> <div className="menu">
          <img src={menu} alt="" data-tip data-for="menu"/>
          <Tooltip id="menu" place="bottom">Main menu</Tooltip>
        </div>
        <div className="keepicon">
          <img src={noteicon} alt="" height="36px" width="35px" />
        </div>
        <span className = "name">
          Notes
        </span>
        </div>
      <div className="search">
        <div className="searchicon">
          <img src={search} alt="" data-tip data-for="search"
                />
                <Tooltip id="search" place="bottom">Search</Tooltip>
        </div>
        <input
          className="searcharea d-flex p-2 h-100 w-100 "
          placeholder="Search"
          value = {searchtext}
          cols="60"
          rows="1"
          onChange={changeHandler}
        />
        <div className="closeicon" style={show ? {visibility:"visible"}:{visibility:"hidden"}}>
          <img src={xicon} alt="" data-tip data-for="clear" onClick={clearSearch}/>
                <Tooltip id="clear" place="bottom">Clear search</Tooltip>
        </div>
      </div>
      <div
        className="d-flex p-2"
        style={{ marginLeft: "15px", display: "flex" }}
      >
        <div className="spann" onClick={refreshHandler}>
          <img src={refresh} alt="" data-tip data-for="refresh"
                />
                <Tooltip id="refresh" place="bottom">Refresh</Tooltip>
        </div>
        <div className="spann" onClick={listviewHandler}>
          <img src={!view ? gridview : listview} alt="" data-tip data-for="listview"
                />
                {view ? <Tooltip id="listview" place="bottom">List view</Tooltip>
                : <Tooltip id="listview" place="bottom">grid view</Tooltip>}
        </div>
        <div className="spann">
          <img src={cogs} alt="" data-tip data-for="settings"
                />
                <Tooltip id="settings" place="bottom">Settings</Tooltip>
        </div>
        <div className="spann1">
          <img src={main} alt="" data-tip data-for="main"
                />
                <Tooltip id="main" place="bottom">Google apps</Tooltip>
        </div>
        <div className="span">
          <img
            className="image"
            src={profile}
            alt=""
            height="30px"
            width="30px"
            data-tip data-for="profile"
            />
            <Tooltip id="profile" place="bottom">Google Accounts</Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Header;
