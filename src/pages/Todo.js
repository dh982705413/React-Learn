import React, { Component } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import "../styles/todo.scss";
export default class Todo extends Component {
  state = {
    list: [],
    val: "",
  };
  componentWillMount() {
    this.init();
  }

  componentDidUpdate() {
    const { list } = this.state;
    window.localStorage.setItem("list", JSON.stringify(list));
  }

  init() {
    const data = JSON.parse(window.localStorage.getItem("list"));
    if (data.length) {
      this.setState({ list: data });
    } else {
      const list = [
        { title: "吃饭", state: 0 },
        { title: "睡觉", state: 0 },
        { title: "打豆豆", state: 0 },
        { title: "敲代码", state: 0 },
      ];
      window.localStorage.setItem("list", JSON.stringify(list));
      this.setState({ list });
    }
  }

  onDelete = (index) => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
  };
  valueChange = (e) => {
    this.setState({ val: e.target.value });
  };
  addTodo = () => {
    const { list, val } = this.state;
    if (val.match(/^[ ]*$/)) {
      alert("内容不能为空或全空格");
      return;
    }
    list.push({ title: val, state: 0 });
    this.setState({ list });
  };
  changeState = (index) => {
    const { list } = this.state;
    list[index].state = list[index].state === 1 ? 0 : 1;
    this.setState({ list });
  };
  render() {
    const { list, val } = this.state;
    return (
      <div className="todo-container">
        <header className="header-title">Todo List</header>
        <TodoList
          list={list}
          onDelete={this.onDelete}
          changeState={this.changeState}
        />
        <AddTodo
          val={val}
          addTodo={this.addTodo}
          valueChange={this.valueChange}
        />
      </div>
    );
  }
}
