import './App.css';
import Title from './components/title.js';
import Entries from './components/entries';
import Newentry from './components/newEntry.js';
import React, { useState, useEffect } from "react";

function App() {

  const initialEntries = [];

  // const getLocalStorage = () => {
  //   let entries = localStorage.getItem(LSKEY + ".entries");
  //   if (entries) {
  //     return (JSON.parse(localStorage.getItem(LSKEY + ".entries" )));
  //   } else {  
  //     return [];
  //   }
  // }

  const LSKEY = "MyTodoApp";
  const [entries, setEntries] = useState(initialEntries);

  useEffect(() => {
    if(entries.length > 1) {
  localStorage.setItem(LSKEY + ".entries", JSON.stringify(entries));
    }
  }, [entries]);

  useEffect(() => {
    const saveEntries = JSON.parse(localStorage.getItem(LSKEY 
      + ".entries"));
    if(saveEntries) {
      setEntries(saveEntries);
    }
  },[])

  console.log(entries);

  return (
    <div className="App">
      <Title />
      <Entries entries={entries} setEntries={setEntries}/>
      <Newentry entries={entries} setEntries={setEntries}/>
    </div>
  );
}

export default App;
