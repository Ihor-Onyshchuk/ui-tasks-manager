import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { instance } from "../api/apiConfig";
import "./TasksList.scss";
import { dateFormatter } from "../utils/date";
import Preloader from "../components/preloader/Preloader";

export class TasksList extends PureComponent {
  state = {
    tasks: [],
    isLoading: true,
    activeFilter: {
      name: "dueBy",
      value: "desc",
    },
  };

  componentDidMount() {
    instance.get("tasks?sort=dueBy%20desc").then((res) => {
      const tasks = res.data.tasks.map((task) => ({
        ...task,
        dueBy: dateFormatter(task.dueBy * 1000, "dd mmmm, yyyy"),
      }));
      this.setState({ tasks: tasks, isLoading: false });
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

  handleFilterChange = (name, value) => {
    instance.get(`tasks?sort=${name}%20${value}`).then((res) => {
      const tasks = res.data.tasks.map((task) => ({
        ...task,
        dueBy: dateFormatter(task.dueBy * 1000, "dd mmmm, yyyy"),
      }));
      this.setState({
        tasks: tasks,
        isLoading: false,
        activeFilter: { name: name, value: value },
      });
    });
  };

  render() {
    if (this.state.isLoading) return <Preloader />;
    const { value, name } = this.state.activeFilter;

    const filterMapping = {
      title: { name: "title", value: "asc" },
      dueBy: { name: "dueBy", value: "asc" },
      priority: { name: "priority", value: "asc" },
    };

    const renderRow = (task) => {
      const { title, dueBy, priority, id } = task;
      return (
        <tr key={id}>
          <td>
            <NavLink to={`${this.props.match.path}/${id}`}>{title}</NavLink>
          </td>
          <td>{dueBy}</td>
          <td>{priority}</td>
          <td>
            <NavLink to={`${this.props.match.path}/${id}/update`}>
              <i className="fas fa-pencil-alt mr-3"></i>
            </NavLink>
            <i
              onClick={() => this.handleDelete(id)}
              className="far fa-trash-alt"
            ></i>
          </td>
        </tr>
      );
    };

    return (
      <div>
        <h4 className="text-monospace">Tasks List</h4>
        {!this.state.tasks.length ? (
          <div>Its no tasks yet! Please press to button below to add task!</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>
                  <i
                    className={`fas fa-chevron-${
                      value === "desc" && name === "title" ? "down" : "up"
                    }`}
                    onClick={() =>
                      this.handleFilterChange(
                        "title",
                        value === "desc" ? "asc" : "desc"
                      )
                    }
                  ></i>
                  Title
                </th>
                <th>
                  <i
                    className={`fas fa-chevron-${
                      value === "desc" && name === "dueBy" ? "down" : "up"
                    }`}
                    onClick={() =>
                      this.handleFilterChange(
                        "dueBy",
                        value === "desc" ? "asc" : "desc"
                      )
                    }
                  ></i>
                  Date
                </th>
                <th>
                  <i
                    className={`fas fa-chevron-${
                      value === "desc" && name === "priority" ? "down" : "up"
                    }`}
                    onClick={() =>
                      this.handleFilterChange(
                        "priority",
                        value === "desc" ? "asc" : "desc"
                      )
                    }
                  ></i>
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>{this.state.tasks.map(renderRow)}</tbody>
          </table>
        )}
        <NavLink to="/create-task">Add Task</NavLink>
      </div>
    );
  }
}
