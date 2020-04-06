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
        <h4>Tasks List</h4>
        <button onClick={this.onGettingTasks}>get Tasks</button>
      </div>
    );
  }
}
