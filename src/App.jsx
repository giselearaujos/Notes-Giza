import React, { Component } from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import "./assets/index.css";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="container">
        <Form createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
