import React, { PureComponent } from "react";
import { instance } from "../../api/apiConfig";
import { dateFormatter } from "../../utils/date";

const defaultState = {
  title: "",
  dueBy: "",
  priority: "High",
};

export default class AddTask extends PureComponent {
  constructor(props) {
    super(props);
    this.taskId = this.props.match.params.taskId || null;
    this.isEditMode = !!this.taskId || false;
    this.state = {
      ...defaultState,
    };
  }

  componentDidMount() {
    if (this.isEditMode) {
      instance.get(`tasks/${this.taskId}`).then((res) => {
        const response = res.data.task;
        this.setState({
          title: response.title,
          dueBy: dateFormatter(response.dueBy * 1000, "yyyy-mm-dd"),
          priority: response.priority,
        });
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { title, dueBy, priority } = this.state;
    dueBy = new Date(dueBy).getTime() / 1000;

    const method = this.isEditMode ? "put" : "post";
    const endpoint = this.isEditMode ? `tasks/${this.taskId}` : "tasks";

    instance[method](endpoint, {
      title,
      dueBy,
      priority,
    }).then(() => this.setState({ ...defaultState }));
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Due by:</label>
        <input
          type="date"
          name="dueBy"
          value={this.state.dueBy}
          onChange={this.handleInputChange}
        />
        <br />
        <label>
          Priority:
          <select
            value={this.state.priority}
            onChange={this.handleInputChange}
            name="priority"
          >
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Add task" />
      </form>
    );
  }
}
