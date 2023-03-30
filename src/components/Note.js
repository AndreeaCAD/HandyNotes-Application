import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <div className="note-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="note-footer">
        <small>{props.date}</small>
        <MdDelete className="btn-del" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Note;
