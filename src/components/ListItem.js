import React, { Component } from "react";
import "../styles/listitem.scss";

export default class ListItem extends Component {
  handleClick = () => {
    const { index, onDelete } = this.props;
    onDelete(index);
  };
  handleChange = () => {
    const { changeState, index } = this.props;
    changeState(index);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="list-item">
        <input
          type="checkbox"
          checked={item.state === 1}
          onChange={this.handleChange}
        />
        <span className="title">{item.title}</span>
        <button
          className={`btn ${item.state === 1 ? "ok-btn" : "delete-btn"}`}
          onClick={this.handleClick}
        >
          {item.state === 1 ? "√" : "x"}
        </button>
      </div>
    );
  }
}
