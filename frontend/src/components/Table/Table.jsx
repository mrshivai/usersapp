import { useEffect, useState } from "react";
import TableRow from "./TableRow/TableRow";
import "./Table.css";
import axios from "axios";

const Table = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getAllUsers")
      .then((res) => setUserData(res.data));
  }, []);

  return (
    <table border={1} id="usersTable">
      <thead>
        <tr id="tableHeaders">
          <th>Sr No.</th>
          <th>Full Name</th>
          <th>Email Address</th>
          <th>Contact</th>
          <th>Gender</th>
          <th>Action 1</th>
        </tr>
      </thead>
      <tbody>
        {userData.length > 0 ? (
        userData.map((user, index) => {
          return(
          <TableRow
            key={user._id}
            userId= {user._id}
            srNo={index + 1}
            fullName={user.fullName}
            gender={user.gender}
            email={user.email}
            contact={user.contact}
          />
        );
        })
        ): (
          <h4>no data found</h4>

        )}
      </tbody>
    </table>
  );
};

export default Table;
