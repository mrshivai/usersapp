import "./EditUser.css";
import {Link} from "react-router-dom";

const EditUser = () => {
  return (
    <div>
      <form className="userForm">
        <h2>Edit User Details User!</h2>
        <input type="text" placeholder="Enter Full Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="number" placeholder="Enter Contact Number" />
        <div>
          <input type="radio" name="gender" /> Male
          <input type="radio" name="gender" /> Female{" "}
        </div>
        <input type="submit" className="submitBtn" value="Update" />{" "}
        <Link to="/">Go Back</Link>
      </form>
    </div>
  );
};

export default EditUser;
