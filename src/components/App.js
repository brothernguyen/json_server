import React from "react";
import axios from "axios";
import "../App.css";
import action from "../actions";
import EmployeeList from "./EmployeeList";

class App extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/employees")
      .then(resp => {
        console.log("==>response!!!", resp.data[0].account);
        // resp.data.forEach(e => {
        //     console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        // });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <EmployeeList />
      </div>
    );
  }
}

export default App;
