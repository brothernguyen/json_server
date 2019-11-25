import React from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions";

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  render() {
    console.log("==>List:", this.props.employeeList);
    return (
      <div className="ui three column divided grid">
        <div className="row">
          <div className="column">
            <p></p>
          </div>
          <div className="column">
            <p></p>
          </div>
          <div className="column">
            <p></p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p></p>
          </div>
          <div className="column">
            <p></p>
          </div>
          <div className="column">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { employeeList: state.fetchAllEmployeesReducer };
};

export default connect(mapStateToProps, { fetchEmployees: fetchEmployees })(
  EmployeeList
);
