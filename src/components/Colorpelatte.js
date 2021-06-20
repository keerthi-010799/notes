changecolorHandler=(color)=>{
    switch(color){
      case "red":
        this.setState({colors:"red"});
        break;
        case "blue":
          this.setState({colors:"blue"});
        break;
        case "green":
          this.setState({colors:"green"});
        break;
        case "grey":
          this.setState({colors:"grey"});
        break;
        case "purple":
          this.setState({colors:"purple"});
        break;
        case "teal":
          this.setState({colors:"teal"});
        break;
        case "orange":
          this.setState({colors:"orange"});
        break;
        case "yellow":
          this.setState({colors:"yellow"});
        break;
        case "pink":
          this.setState({colors:"pink"});
        break;
        default:
    }
  }

  {this.state.palette ? <div className = "palette" onClick={this.closePalette}>
                  <div style={{backgroundColor:"red"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("red")}></div>
                  <div style={{backgroundColor:"blue"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("blue")}></div>
                <div style={{backgroundColor:"green"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("green")}></div>
                <div style={{backgroundColor:"purple"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("purple")}></div>
                <div style={{backgroundColor:"teal"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("teal")}></div>
                <div style={{backgroundColor:"pink"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("pink")}></div>
                <div style={{backgroundColor:"yellow"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("yellow")}></div>
                <div style={{backgroundColor:"orange"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("orange")}></div>
                <div style={{backgroundColor:"grey"}} className="palettecolor"
                onClick={()=>this.changecolorHandler("grey")}></div>
                </div>:null}