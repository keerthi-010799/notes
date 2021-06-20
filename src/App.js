import './App.css';
import Header from "./components/header/header";
import Notes from "./Notes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Notes/>
      </header>
    </div>
  );
}

export default App;