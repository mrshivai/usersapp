import "./TableRow.css"
import { Link } from "react-router-dom";

const TableRow = ({srNo, fullName, email, gender, contact}) => {
  return (
      <tr className="tableRow">
        <td>{srNo}</td>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{contact}</td>
        <td>{gender ? "Male" : "Female"}</td>
        <td>
        <Link id="editUser" to="/EditUser" >Edit User</Link>
        </td>
        <td>
          <button className="tableBtn deleteBtn" onClick={()=>alert(fullName + "Is Deleted")}>Delete</button>
        </td>
      </tr>
  );
};

export default TableRow;
