import './App.css';
import Title from './components/title.js';
import Entries from './components/entries';
import Newentry from './components/newEntry.js';
import React, { useState, useEffect } from "react";

function App() {

  // const initialEntries = [
  //   {name :'Style this page', complete : false},
  //   {name :'Learn React', complete : false},
  //   {name :'Be cool', complete : true}
  // ];

  const getLocalStorage = () => {
    let entries = localStorage.getItem(LSKEY + ".entries");
    if (entries) {
      return (JSON.parse(localStorage.getItem(LSKEY + ".entries" )));
    } else {  
      return [];
    }
  }

  const LSKEY = "MyTodoApp";
  const [entries, setEntries] = useState(getLocalStorage());

  useEffect(() => {
  localStorage.setItem(LSKEY + ".entries", JSON.stringify(entries));
  }, [entries]);

  // useEffect(() => {
  //   if(localStorage.getItem(LSKEY)) {
  //     const saveEntries = JSON.parse(localStorage.getItem(LSKEY));
  //     setEntries(saveEntries);
  //   }
  // },[])

  console.log(entries);

  return (
    <div className="App">
      <Title />
      <Entries entries={entries} setEntries={setEntries} saveEntries={getLocalStorage()}/>
      <Newentry entries={entries} setEntries={setEntries}/>
    </div>
  );
}

export default App;
