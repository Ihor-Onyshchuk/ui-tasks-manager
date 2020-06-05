import React, { PureComponent } from "react";
import { instance } from "../../api/apiConfig";
import { dateFormatter } from "../../utils/date/formatter";
import Calendar from "../calendar/Calendar";
import Flatpicker from "../calendar/Flatpicker";
import { format } from "date-fns";

const defaultState = {
  title: "",
  dueBy: undefined,
  priority: "High",
};

const dateToTimestamp = (date) => {
  return Math.floor(new Date(date).getTime() / 1000);
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
          ...response,
          dueBy: response.dueBy * 1000,
        });
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { title, dueBy, priority } = this.state;
    dueBy = dateToTimestamp(dueBy);

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

  handleDateChange = (dueBy) => {
    this.setState({ dueBy: new Date(dueBy).getTime() });
  };

  render() {
    const { dueBy } = this.state;
    return (
      <div className="container shadow-lg pt-5 pb-5 ">
        <div className="row ">
          <div className="col col-md-6 d-flex">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-12 text-left mb-3">
                  <label className="font-weight-bold">Title:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder="Text"
                  />
                </div>
                <div className="form-group col-md-6 text-left mb-3">
                  <label className="font-weight-bold">Priority:</label>
                  <select
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                    name="priority"
                  >
                    <option value="High">High</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="form-group text-left mt-3 col-12">
                  <button className="btn btn-primary" type="submit">
                    Add task
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" col ml-5 p-1 text-left">
            {/* <Calendar /> */}
            <Flatpicker
              options={{ inline: true }}
              date={dueBy}
              onChange={this.handleDateChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
