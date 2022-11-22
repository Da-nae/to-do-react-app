import './App.css';
import Title from './components/title.js';
import Entries from './components/entries';
import Newentry from './components/newEntry.js';
import React, { useState } from "react";

function App() {
  const initialEntries = [
    {name :'Style this page', complete : false},
    {name :'Learn React', complete : false},
    {name :'Be cool', complete : true}
  ];

  const [entries, setEntries] = useState(initialEntries);

  return (
    <div className="App">
      <Title />
      <Entries entries={entries} setEntries={setEntries}/>
      <Newentry entries={entries} setEntries={setEntries}/>
    </div>
  );
}

export default App;
