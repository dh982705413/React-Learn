import React, { Component, Fragment } from "react";

export default class Home extends Component {
  state = {
    inputValue: "",
    list: ["精油推背", "头部按摩"],
  };

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addService = () => {
    const { list, inputValue } = this.state;
    list.unshift(inputValue);
    this.setState({ list });
  };
shouldComponentUpdate
  onDelete = (index) => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
  };

  render() {
    const { list, inputValue } = this.state;
    return (
      <Fragment>
        <div>
          <input value={inputValue} onChange={this.inputChange} />
          <button onClick={this.addService}>添加服务</button>
        </div>
        <ul>
          <ListView list={list} onDelete={this.onDelete} />
        </ul>
      </Fragment>
    );
  }
}

class ListView extends Component {
  state = {};
  render() {
    const { list, onDelete } = this.props;
    return list.map((item, index) => (
      <ListItem item={item} index={index} key={index} onDelete={onDelete} />
    ));
  }
}

class ListItem extends Component {
  state = {};

  handleClick = () => {
    const { onDelete, index } = this.props;
    onDelete(index);
  };
  1;
  render() {
    const { item } = this.props;
    return <li onClick={this.handleClick}>{item}</li>;
  }
}
