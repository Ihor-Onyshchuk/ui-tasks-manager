import React, { PureComponent } from "react";
import { instance } from "../../api/apiConfig";

export default class AddTask extends PureComponent {
  state = {
    title: "",
    dueBy: "",
    priority: "High",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { title, dueBy, priority } = this.state;
    dueBy = new Date(dueBy).getTime() / 1000;
    instance
      .post("tasks", {
        title,
        dueBy,
        priority,
      })
      .then(
        this.setState({
          title: "",
          dueBy: "",
        })
      );
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

/* <form onSubmit={this.handleSubmit}>
<label>
  Pick your favorite flavor:
  <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select>
</label>
<input type="submit" value="Submit" />
</form> */
