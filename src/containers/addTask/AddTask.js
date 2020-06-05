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
      <div className="container shadow-lg pt-5 pb-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={this.handleSubmit}>
              <div class="form-row">
                <div class="form-group col-12 text-left mb-3">
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
                <div class="form-group col-md-6 text-left mb-3">
                  <label className="font-weight-bold">Due by:</label>
                  <input
                    className="form-control"
                    type="date"
                    name="dueBy"
                    value={this.state.dueBy}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-group col-md-6 text-left mb-3">
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
                <div class="form-group text-left mt-3 col-12">
                  <button className="btn btn-primary" type="submit">
                    Add task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
