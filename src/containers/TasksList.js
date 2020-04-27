import React, { PureComponent } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { instance } from "../api/apiConfig";
import "./TasksList.scss";
import { dateFormatter } from "../utils/date/formatter";
import Preloader from "../components/preloader/Preloader";
import SortIcon from "../components/common/icons/SortIcon";
import { TdRow, ThRow } from "../components/common/table/TRow";
import { format } from "date-fns";
import { connect } from "react-redux";
import SignIn from "./auth/authFormContainer/signIn";

const tHead = [
  { name: "Title", value: "title" },
  { name: "Date", value: "dueBy" },
  { name: "Priority", value: "priority" },
];

 class TasksList extends PureComponent {
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
      const tasks = res.data.tasks.map((task) => {
        return {
          ...task,
          dueBy: format(new Date(task.dueBy * 1000), "dd MMMM, yyyy"),
        };
      });
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
  };79

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
    const { match} = this.props;
    return (
      <TdRow key={id} >
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
    
    if (!this.props.isAuth) return <Redirect to="/sign-in"/>;
    if (isLoading) return <Preloader />;

    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3 ">
          <h4 className="text-monospace m-0">My tasks</h4>
          <NavLink className="btn btn-primary" to="/create-task" >Add Task</NavLink>
        </div>
        {!tasks.length ? (
          <div>Its no tasks yet! Please press to button above to add task!</div>
        ) : (
          <table className="table table-borderless  shadow p-3 mb-5 bg-white rounded">
            <thead className="border-bottom border-secondary">
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
       
      </div>
    );
  }
}

const mapStateToProps = ({isAuth}) => ({
  isAuth
})

export default connect(mapStateToProps)(TasksList)
