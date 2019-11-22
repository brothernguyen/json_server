import React from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions";

class EmployeeList extends React.Component {
  render() {
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

export default connect(null, { fetchEmployees })(EmployeeList);
