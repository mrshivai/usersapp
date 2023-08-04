import "./TableRow.css";
import { Link } from "react-router-dom";
import axios from "axios";

const TableRow = ({ srNo, fullName, email, gender, contact, userId }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/users/deleteUser/${userId}`)
      .then(() => location.reload())
      .catch((err) => alert(err));
  };

  return (
    <tr tabindex="0"className="tableRow">
      <td>{srNo}</td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{gender ? "Male" : "Female"}</td>
      <td className="buttons">
        <Link to={`/editUser/${userId}`} id="editUser">
          <span class="material-symbols-outlined">edit</span>
        </Link>
        <span class="material-symbols-outlined"  id="deleteBtn" onClick={handleDelete}>
          delete</span>
      </td>
    </tr>
  );
};

export default TableRow;
