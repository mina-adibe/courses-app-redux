import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
    console.log(this.state.course.title);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hellooooooooooo", this.state.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses </h2>
        <h3>add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        <h2>{this.state.course.title}</h2>
      </form>
    );
  }
}

export default CoursesPage;
