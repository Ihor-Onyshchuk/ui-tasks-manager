import React, { PureComponent } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { instance } from "../api/apiConfig";

export class TasksList extends PureComponent {
  state = {
    tasks: [],
  };

  componentDidMount = () => {
    instance.get("tasks").then((res) => {
      const tasks = res.data.tasks.slice(0, 5);
      this.setState({ tasks: tasks });
      console.log(localStorage.getItem("user-token"));
    });
  };

  render() {
    return (
      <div>
        <h4>Tasks List</h4>
        {!this.state.tasks ? (
          <div>Its no tasks yet! Please press to button below to add task!</div>
        ) : (
          this.state.tasks.map((task) => (
            <ul key={task.id}>
              <li>title: {task.title}</li>
            </ul>
          ))
        )}

        <NavLink to="/create-task">Add task</NavLink>
      </div>
    );
  }
}
