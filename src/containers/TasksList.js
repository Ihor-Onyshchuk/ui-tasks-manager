import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { instance } from "../api/apiConfig";
import "./TasksList.scss";
import { dateFormatter } from "../utils/date/formatter";
import Preloader from "../components/preloader/Preloader";
import SortIcon from "../components/common/icons/SortIcon";
import { TdRow, ThRow } from "../components/common/table/TRow";

const tHead = [
  { name: "Title", value: "title" },
  { name: "Date", value: "dueBy" },
  { name: "Priority", value: "priority" },
];

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

  handleFilterChange = (sortName) => {
    const {
      activeFilter: { value, name },
    } = this.state;
    const filter =
      sortName === name ? (value === "desc" ? "asc" : "desc") : "desc";
    instance.get(`tasks?sort=${sortName}%20${filter}`).then((res) => {
      const tasks = res.data.tasks.map((task) => ({
        ...task,
        dueBy: dateFormatter(task.dueBy * 1000, "dd mmmm, yyyy"),
      }));
      this.setState({
        tasks: tasks,
        isLoading: false,
        activeFilter: { name: sortName, value: filter },
      });
    });
  };

  renderRow = (task) => {
    const { title, dueBy, priority, id } = task;
    const { match } = this.props;
    return (
      <TdRow key={id}>
        <NavLink to={`${match.path}/${id}`}>{title}</NavLink>
        {dueBy}
        {priority}
        <>
          <NavLink to={`${match.path}/${id}/edit`}>
            <i className="fas fa-pencil-alt mr-3" />
          </NavLink>
          <i
            onClick={() => this.handleDelete(id)}
            className="far fa-trash-alt"
          />
        </>
      </TdRow>
    );
  };

  getDirection = (sortName) => {
    const {
      activeFilter: { name, value },
    } = this.state;

    return name === sortName ? value : null;
  };

  render() {
    const { isLoading, tasks } = this.state;

    if (isLoading) return <Preloader />;

    return (
      <div>
        <h4 className="text-monospace">Tasks List</h4>
        {!tasks.length ? (
          <div>Its no tasks yet! Please press to button below to add task!</div>
        ) : (
          <table className="table">
            <thead>
              <ThRow>
                {tHead.map(({ name, value }) => (
                  <div
                    onClick={() => this.handleFilterChange(value)}
                    className="cursor-pointer"
                  >
                    {<SortIcon direction={this.getDirection(value)} />}
                    {name}
                  </div>
                ))}
                <div>Action</div>
              </ThRow>
            </thead>
            <tbody>{tasks.map(this.renderRow)}</tbody>
          </table>
        )}
        <NavLink to="/create-task">Add Task</NavLink>
      </div>
    );
  }
}
