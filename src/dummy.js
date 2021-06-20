listingNotes = () => {
    this.setState({ listing: true });
  };
  <div>
          {
           !this.state.listing ? 
          <Individualnote
            listingitems={this.state.listing}
            clicked={() => this.toggleModal(true, noteIndex)}
            {...note}
          />:<Listednotes  listingitems={this.state.listing}
          clicked={() => this.toggleModal(true, noteIndex)}
          {...note}
          listednotes={this.state.notes}/>
        }
        </div>

props.tickboxes ?
<div>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg=="
width="16px" height="16px"/> 
<TextareaAutoresize onClick={props.clicked}
style={props.textstyle}
className = "textnotes"
value={props.note}
name={"note"}
onChange={noteChangeHandler}
/>
</div>
:



{/*<div className={"squaredTwo " + i}>
                    <input
                      type="checkbox"
                      className={"check"}
                      id={"squaredTwo"}
                    />
                    <label for={"squaredTwo " + i}></label>
      </div>*/}