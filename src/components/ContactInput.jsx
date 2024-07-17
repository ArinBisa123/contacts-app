import React from "react";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onNameChangeHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
  onTagChangeHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }
  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangeHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}
ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
