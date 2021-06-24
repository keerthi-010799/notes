import React, { useEffect } from 'react';
import Modal from '../Modal/Modal';
import Note from '../note/Note';
import { useState } from 'react';

const Notepopup = (props) => {
  const [popupnote, setpopupnote] = useState([]);

  useEffect(() => {
    console.log('mount');
    setpopupnote({
      ...props.popupnote,
    });
  }, []);

  const modaltitlechangeHandler = ({ title }) => {
    setpopupnote({ title: title });
  };

  const modalchangeHandler = ({ note }) => {
    setpopupnote({ note: note });
  };

  const checkboxhandler = (index) => {
    const popupnoteCpy = {...popupnote};
    const listitem = popupnoteCpy.list.splice(index, 1);
    const checkedlist = popupnoteCpy.checkedlist.concat(listitem);
    setpopupnote({ ...popupnoteCpy, checkedlist: checkedlist });
  };

  const uncheckHandler = (checkindex) => {
    const popupnoteCpy = {...popupnote};
    const checkeditem = popupnoteCpy.checkedlist.splice(checkindex, 1);
    const listadditem = popupnoteCpy.list.concat(checkeditem);
    setpopupnote({ ...popupnoteCpy, list: listadditem });
  };

  const listchanged = () =>{
    
  }

  return (
    <div>
      {props.status ? (
        // TODO: put this whole thing in note popup component *created
        <Modal clicked={() => props.togglemodal(false, null)}>
          {props.noteIndex !== null && (
            <div
              style={{ backgroundColor: 'white' }}
              className='d-flex flex-column bd-highlight mb-3 modalinner'
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {
                <div>
                  <div style={{ display: 'flex' }}>
                    <Note
                      showinput={true}
                      style={{ width: '100%', margin: '0px' }} // TODO: change prop name to style *changed
                      titlechanged={modaltitlechangeHandler}
                      notechanged={modalchangeHandler} //individual note function
                      listchanged={listchanged} // list note function
                      clickcheckboxhandler={checkboxhandler} // TODO: use one function
                      uncheckHandler={uncheckHandler}
                      noteIndex={props.noteIndex}
                      {...popupnote}
                    />
                  </div>
                </div>
              }
            </div>
          )}
        </Modal>
      ) : null}
    </div>
  );
};

export default Notepopup;
