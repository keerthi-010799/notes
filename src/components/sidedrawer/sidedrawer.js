import React from 'react';
import './Sidedrawer.css';
import notes from "../../assets/images/icons/notes.svg";
import remainder from "../../assets/images/icons/reminder.svg";
import tag from "../../assets/images/icons/tag.svg";
import edit from "../../assets/images/icons/edit.svg";
import archive from "../../assets/images/icons/archive.svg";
import trash from "../../assets/images/icons/trash.svg";

const Sidedrawer = () => {
    return(
        <div className ="sideDrawer">
            <div className="ssideDrawerr1">
            <div className ="sideDrawerItem1" style={{backgroundColor:"#feefc3"}}>
            <img src={notes} alt=""/>
            </div>
            <div className="sideText1">Notes</div>
            </div>
            <div className="ssideDrawerr">
            <div className ="sideDrawerItem">
                <img src={remainder} alt=""/>
            </div>
            <div className="sideText">Reminders</div></div>
            <div className="ssideDrawerr">
                <div className ="sideDrawerItem">
                <img src={tag} alt=""/>
                    </div>
                    <div className="sideText">Inspiration</div></div>
            <div className="ssideDrawerr">
                <div className ="sideDrawerItem">
                <img src={tag} alt=""/>
                    </div>
                    <div className="sideText">Personal</div></div>
            <div className="ssideDrawerr">
                <div className ="sideDrawerItem">
                <img src={tag} alt=""/>
                    </div><div className="sideText">Work</div></div>
            <div className="ssideDrawerr">
                <div className ="sideDrawerItem">
                    <img src={edit} alt=""/>
                    </div><div className="sideText">Edit label</div></div>
            <div className="ssideDrawerr">
                <div className ="sideDrawerItem">
                    <img src={archive} alt=""/>
                    </div><div className="sideText">Archive</div></div>
            <div className="ssideDrawerr">
                    <div className ="sideDrawerItem">
                <img src={trash} alt=""/>
            </div><div className="sideText">Bin</div></div>
        </div>
    )
}
export default Sidedrawer;