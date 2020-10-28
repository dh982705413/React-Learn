import React, { Component } from "react";
import "../styles/addInput.scss";
export default class AddTodo extends Component {
  handelChange = (e) => {
    const { valueChange } = this.props;
    valueChange(e);
  };
  handleClick = () => {
    const { addTodo } = this.props;
    addTodo();
  };
  render() {
    const { val } = this.props;
    return (
      <div className="input-container">
        <input value={val} onChange={this.handelChange} />
        <button onClick={this.handleClick}>增加</button>
      </div>
    );
  }
}
