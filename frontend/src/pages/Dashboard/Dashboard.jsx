import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h2 id="appHeading">User Management App</h2>

      <Link id="addBtn" to="/CreateUser" >Add User!</Link>
      <Table />
    </div>
  );
};

export default Dashboard;
