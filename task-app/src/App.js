// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };
  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            type="text"
            id="taskInput"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
          <Overview tasks={tasks} />
        </form>
      </div>
    );
  }
}

export default App;
