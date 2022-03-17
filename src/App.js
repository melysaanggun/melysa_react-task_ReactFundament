import './App.css';
import List from './components/List';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <List/>
      </div>
    </div>
  );
}

export default App;
