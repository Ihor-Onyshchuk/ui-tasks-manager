import React, { PureComponent } from "react";
import axios from "axios";

export class TasksList extends PureComponent {
  state = {
    posts: []
  };

  onGettingTasks = () => {
    axios.get("https://testapi.doitserver.in.ua/api/tasks").then(res => {
      const posts = res.posts;
      this.setState({ posts });
    });
  };

  render() {
    return (
      <div>
        <h4 className="text-monospace">Tasks List</h4>
        <button
          className="alert-link text-capitalize dropdown-toggle rounded-lg p-1 mt-4"
          onClick={this.onGettingTasks}
        >
          get Tasks
        </button>
      </div>
    );
  }
}
