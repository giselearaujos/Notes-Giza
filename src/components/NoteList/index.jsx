import React from "react";
import CardNote from "../CardNote";
import "./style.css";

class NoteList extends React.Component {
  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index} className="note-list_item">
              <CardNote title={note.title} text={note.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
