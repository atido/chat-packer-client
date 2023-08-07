import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import service from "../services/file-upload.service";
import "./ProfilePage.css";
import "../globals.css";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="profileDisplay">
      <div className="profilePage">
        <Link className="backLink" to="/trips">
          <div className="backLinkIcon">
            <Icon icon="pajamas:go-back" />
          </div>
          Back to trip list
        </Link>
        <div className="avatarProfile">
          <img src={user.avatar} alt="" />
        </div>

        <div className="profileInfo">
          <p className="subtitle">User name</p>
          <div>{user.username}</div>

          <p className="subtitle">Email address</p>
          <div>{user.email}</div>

          <p className="subtitle">Password</p>
          <div>***********</div>
          <Link to="/profile/edit" className="hyperlink--sm">
            <Icon icon="material-symbols:edit-outline"></Icon>Edit / Delete profile
          </Link>
        </div>
      </div>
    </div>
  );
}
