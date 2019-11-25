import React from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions";

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  render() {
    const { employeeList = [] } = this.props;
    console.log("==>List:", employeeList);
    return (
      // <div className="ui two column divided grid">
      <div className="ui link cards">
        {employeeList.map(emp => (
          <div key={emp.id} className="ui card">
            <div className="image">
              <img src={emp.account.image} alt="" />
            </div>
            <div className="content">
              <div className="header">{emp.first_name}</div>
              <div className="meta">
                <span className="date">{emp.title}</span>
              </div>
              <div className="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        ))}
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
