import React, { Component } from 'react';
import TextareaAutoresize from 'react-autosize-textarea';

class Listednotes extends Component {
  
  listChangeHandler = (event) => {
    event.preventDefault();
    this.props.notechanged(event.target.value); // TODO:list item text   *changed
  };

  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <img // TODO: use svg icons
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg=='
            alt=''
            style={{ position: 'absolute', marginTop: '17px', marginLeft: '17px' }}
            height='16'
            width='16'
            onClick={this.props.oncheck} // TODO: change this function name  *changed
          />
          <TextareaAutoresize
            style={{ marginLeft: '20px' }}
            className='textnotes'
            value={this.props.list}
            name={'list'}
            onChange={this.listChangeHandler}
          />{' '}
        </div>
      </div>
    );
  }
}
export default Listednotes;
