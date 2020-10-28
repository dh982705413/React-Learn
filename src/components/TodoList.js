import React, { Component } from "react";
import ListItem from "./ListItem";
import "../styles/todoList.scss";

export default class TodoList extends Component {
  render() {
    const { list, onDelete, changeState } = this.props;
    return (
      <div className="list-container">
        {list.map((item, index) => (
          <ListItem
            key={index + item}
            item={item}
            index={index}
            onDelete={onDelete}
            changeState={changeState}
          />
        ))}
      </div>
    );
  }
}
