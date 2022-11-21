import './App.css';
import Title from './components/title.js';
import Entries from './components/entries';
import Newentry from './components/newEntry.js';

function App() {
  return (
    <div className="App">
      <Title />
      <Entries />
      <Newentry />
    </div>
  );
}

export default App;
