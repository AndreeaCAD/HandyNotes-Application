import React, { useState } from "react";

function CreateNote(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });

  const characterLimit = 200;

  function handleChange(event) {
    const { name, value } = event.target;

    if (characterLimit - event.target.value.length >= 0) {
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      });
    }
  }

  function submitNote(event) {
    if (note.content.trim().length > 0 && note.title.trim().length > 0) {
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: "",
      date: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-note">
      <div className="note-content">
        {isExpanded && (
          <input
            name="title"
            placeholder="Write your title here"
            value={note.title}
            onChange={handleChange}
            className="text-create-note"
          />
        )}
        <textarea
          name="content"
          placeholder="Write your content here..."
          rows={isExpanded ? 6 : 1}
          cols={isExpanded ? 22 : 1}
          value={note.content}
          onChange={handleChange}
          onClick={expand}
          className="text-create-note"
        />
      </div>
      {isExpanded && (
        <div className="note-footer">
          <small> {characterLimit - note.content.length} Remaining</small>
          <button className="btn" onClick={submitNote}>
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateNote;
