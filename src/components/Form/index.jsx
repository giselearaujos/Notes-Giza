import React from "react";
import "./style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.tile = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form" onSubmit={this._handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form_input"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="form_input form_txt_area"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="form_input form_btn">Criar Nota</button>
      </form>
    );
  }
}

export default Form;
