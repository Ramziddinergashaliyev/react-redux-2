import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/userSlice";
import { like } from "../../context/followSlice";

function Users({ data }) {
  let dispatch = useDispatch();
  return (
    <div className="users__wrapper">
      {data?.map((el) => (
        <div key={el.id} className="users__card">
          <img src={el.gender === "male" ? male : female} alt="" />
          <h2>{el.username}</h2>
          <p>{el.name}</p>
          <p>{el.profession}</p>
          <p>{el.age}</p>
          <div className="users__btn">
            <button onClick={() => dispatch(removeFromUsers(el))}>
              Remove
            </button>
            <button onClick={() => dispatch(like(el))}>Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
