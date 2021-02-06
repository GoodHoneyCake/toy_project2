import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          placeholder="Habit"
          type="text"
          className="add-input"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
