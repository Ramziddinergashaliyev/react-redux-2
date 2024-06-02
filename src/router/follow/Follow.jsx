import React from "react";
import "./follow.css";
import { useSelector } from "react-redux";
import Users from "../../components/users/Users";
import Empty from "../../components/empty/Empty";

function Follow() {
  let follow = useSelector((state) => state.follow.value);
  console.log(follow);
  return (
    <div className="container">
      {follow.length ? <Users data={follow} /> : <Empty />}
    </div>
  );
}

export default Follow;
