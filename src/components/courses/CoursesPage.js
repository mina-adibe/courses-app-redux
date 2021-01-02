import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
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

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title} </div>
        ))}
      </form>
    );
  }
}
//Proptypes
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}
//conect this component to redux
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
