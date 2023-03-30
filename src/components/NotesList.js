import React from "react";
import Note from "./Note";

function NotesList(props) {
  return (
    <div>
      <div className="notes-list">
        {props.notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              date={noteItem.date}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesList;
