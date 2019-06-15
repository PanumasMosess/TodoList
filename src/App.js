import React, { Component } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  // submit Item
  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  //clear List'
  clearList = () => {
    this.setState({
      items: []
    });
  };

  //delete item
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  //edit item
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectItem = this.state.items.find(item => item.id === id);
    console.log(selectItem);

    this.setState({
      items: filteredItems,
      item: selectItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">TodoInput</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
