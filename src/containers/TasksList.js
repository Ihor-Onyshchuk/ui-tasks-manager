import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { instance } from "../api/apiConfig";
import "./TasksList.scss";
import { dateFormatter } from "../utils/date";

export class TasksList extends PureComponent {
  state = {
    tasks: [],
  };

  componentDidMount() {
    instance.get("tasks").then((res) => {
      const tasks = res.data.tasks.map((task) => ({
        ...task,
        dueBy: dateFormater(task.dueBy),
      }));
      console.log(tasks);
      this.setState({ tasks: tasks });
    });
  }

  handleDelete = (taskId) => {
    instance.delete(`tasks/${taskId}`).then((res) => {
      if (res)
        this.setState({
          tasks: this.state.tasks.filter((task) => task.id !== taskId),
        });
    });
  };

  render() {
    return (
      <div>
        <h4>Tasks List</h4>
        {!this.state.tasks.length ? (
          <div>Its no tasks yet! Please press to button below to add task!</div>
        ) : (
          this.state.tasks.map((task) => (
            <ul key={task.id} className="tasks">
              <li className="task">
                <span>
                  <strong>title: </strong>
                  {task.title}
                </span>
                <span>
                  <strong>date:</strong> {task.dueBy}
                </span>{" "}
                <span>
                  <strong>priority:</strong> {task.priority}
                </span>
                <button onClick={() => this.handleDelete(task.id)}>
                  Delete task
                </button>
              </li>
            </ul>
          ))
        )}

        <NavLink to="/create-task">Add task</NavLink>
      </div>
    );
  }
}
