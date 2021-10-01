import './App.css';
import Header from "./components/header/header";
import Notes from "./Notes";
import Context from './context/context';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Context.Provider value={{searchWord:null,deletednotes:false,listview:false}}>
      <Header/>
      <Notes/>
      </Context.Provider>
      </header>
    </div>
  );
}

export default App;