import React, { useState, useEffect } from "react";
import Search from "./Search";
import CreateNote from "./CreateNote";
import NotesList from "./NotesList";

function Main() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  function addNote({ title, content }) {
    const date = new Date();
    const newNote = {
      title: title,
      content: content,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    // setNotes((prevNotes) => {
    //   return [...prevNotes, newNote];
    // });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-handy-notes-app-data")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-handy-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Search handleSearchNote={setSearchText} />
      <CreateNote onAdd={addNote} />
      <NotesList
        notes={notes.filter((note) =>
          note.content.toLowerCase().includes(searchText.toLowerCase())
        )}
        onDelete={deleteNote}
      />
    </div>
  );
}

export default Main;
