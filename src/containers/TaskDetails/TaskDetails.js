import React, { PureComponent } from "react";
import { instance } from "../../api/apiConfig";
import { dateFormatter } from "../../utils/date/formatter";
import Preloader from "../../components/preloader/Preloader";
import { NavLink } from "react-router-dom";

const getTaskById = (id) => instance.get(`tasks/${id}`);

export default class TaskDetails extends PureComponent {
  state = {
    task: {},
    isLoading: true,
  };

  componentDidMount() {
    getTaskById(this.props.match.params.taskId).then((res) => {
      const task = res.data.task;
      console.log(task.dueBy * 1000);
      this.setState({
        task: {
          ...task,
          dueBy: dateFormatter(task.dueBy * 1000, "dd mmmm, yyyy"),
        },
        isLoading: false,
      });
    });
  }

  render() {
    const {
      task: { title, dueBy, priority, id },
      isLoading,
    } = this.state;
    return (
      <div>
        {isLoading ? (
          <Preloader />
        ) : (
          <div>
            <div>Title: {title}</div>
            <div>Time: {dueBy}</div>
            <div>Priority: {priority}</div>
            <NavLink to={`${this.props.match.params.taskId}/edit`}>
              Edit
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}
