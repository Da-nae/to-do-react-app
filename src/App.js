import './App.css';
import Title from './components/title.js';
import Entries from './components/entries';
import Newentry from './components/newEntry.js';
import Submit from './components/submitButton.js'

function App() {
  return (
    <div className="App">
      <Title />
      <Entries />
      <div className='newEntryStyle'>
        <Newentry />
        <Submit />
      </div>
    </div>
  );
}

export default App;
