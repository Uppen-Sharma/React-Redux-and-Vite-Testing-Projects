import React from "react";
import Post from "./Post";
import UserInfoContext from "../context/UserinfoContext";
import { useContext } from "react";

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>Blog</h1>
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin}></Post>
    </div>
  );
}
