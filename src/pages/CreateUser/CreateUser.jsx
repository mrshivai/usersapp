import "./CreateUser.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreateUser = () => {

  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user ={
      fullName: fullName,
      gender: gender,
      contact: contact,
      email: email,
    };
    console.log(user);

    axios
    .post("http://localhost:5000/users/saveuser", user)
    .then((res) => 
    res.data)
    ? alert("User Created Successfully")
    : alert("Something Went Wrong")
  };
  return (
    <div>
      <form className="userForm" onSubmit={handleSubmit}>
        <h2>Create New User!</h2>
        <input
          type="text"
          placeholder="Enter Full Name"
          required={true}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Contact Number"
          required={true}
          onChange={(e) => setContact(e.target.value)}
        />
        <div>
          <input
            type="radio"
            name="gender"
            required={true}
            onClick={() => setGender("true")}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            required={true}
            onClick={() => setGender("false")}
          />{" "}
          Female{" "}
        </div>

        <input type="submit" className="submitBtn" value="Add New User!" />

        <Link to="/">Go Back</Link>
      </form>
    </div>
  );
};

export default CreateUser;
