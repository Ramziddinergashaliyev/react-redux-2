import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromUsers } from "../../context/userSlice";
import { like } from "../../context/followSlice";

function Users({ data }) {
  let dispatch = useDispatch();
  let follow = useSelector((state) => state.follow.value);

  const unFollow = (foll) => {
    return follow.some((follow) => follow.id === foll);
  };

  return (
    <div className="users__wrapper">
      {data?.map((el) => (
        <div key={el.id} className="users__card">
          <img src={el.gender === "male" ? male : female} alt="" />
          <h2>username: {el.username}</h2>
          <p>name: {el.name}</p>
          <p>profession: {el.profession}</p>
          <p>age: {el.age}</p>
          <div className="users__btn">
            <button onClick={() => dispatch(removeFromUsers(el))}>
              Remove
            </button>
            <button onClick={() => dispatch(like(el))}>
              {unFollow(el.id) ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
