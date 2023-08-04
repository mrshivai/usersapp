import React, { useState, useEffect } from "react";
import "./EditUser.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {

  const Navigator= useNavigate();

  const[user, setUser]= useState({});

  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getuser/${userId}`)
      .then((res) => {
        setUser(res.data[0]);
      });
  }, []);

  const handleForm=(e) => {
    e.preventDefault();

    const userData ={
      fullName: user.fullName,
      gender: user.gender,
      contact: user.contact,
      email: user.email,
    };

    axios
    .patch(`http://localhost:5000/users/updateUser/${userId}`, userData)
    .then(() => 
    { 
      // alert("User edited Successfully");
    Navigator("/");
    })
    .catch((err) => alert(err));

  };

  return (
    <div>
      <form className="userForm" onSubmit= {handleForm}>
        <h2>Edit</h2>
        <input
          type="text"
          placeholder="Enter Full Name"
          defaultValue={user.fullName}
          onChange={(e) => setUser({ ...user, fullName:e.target.value})}
        />

        <input 
          type="email" 
          placeholder="Enter Your Email"
          defaultValue={user.email} 
          onChange={(e) => setUser({ ...user, email:e.target.value})}
        />

        <input
          type="number"
          placeholder="Enter Contact Number"
          defaultValue={user.contact}
          onChange={(e) => setUser({ ...user, contact:e.target.value})}
        />

        <div>
          <input type="radio" 
          name="gender" 
          defaultChecked={user.gender}
          onChange={(e) => setUser({ ...user, gender:e.target.checked})}
          /> Male
          <input type="radio"
           name="gender" 
           defaultChecked={!user.gender}
           onChange={(e) => setUser({ ...user, gender:e.target.checked})}
            /> Female
        </div>
        <input type="submit" className="submitBtn" value="Update" />{" "}
        <Link to="/">Go Back</Link>
      </form>
    </div>
  );
};

export default EditUser;
