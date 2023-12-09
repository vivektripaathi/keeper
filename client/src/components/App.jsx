import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Login from "./Login";
import Register from "./Register";
const App = () => {
  const [displayNotes, setDisplayNotes] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [notes, setNotes] = useState([]);
  const addNote = note => setNotes(prevNotes => [...prevNotes, note])
  const deleteNote = id => setNotes(prevNotes => prevNotes.filter((noteItem, index)=> index !== id ))
  const handleLogin = value => {
    setRegister(!value);
    setLogin(false);
  }
  const handleRegister = value =>{
    setLogin(!value);
    setRegister(value);
  }
  const handledisplay = value => {
    setRegister(false);
    setLogin(true);
    setDisplayNotes(value);
  }
  return (
    <div>
      <Header isLogin={displayNotes}/>
      {isRegister && <Register onLogin={handleLogin} onRegister={handleRegister} displayNote={handledisplay}/>}
      { !isLogin && !isRegister && <Login onLogin={handleLogin} onRegister={handleRegister} displayNote={handledisplay}/> }
      { displayNotes && <CreateArea onAdd={addNote}/>}
      {notes.map((note, index)=> <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} /> )}
      <Footer />
    </div>
  );
}

export default App;
