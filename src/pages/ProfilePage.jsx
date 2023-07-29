import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import service from "../services/file-upload.service";
import axios from "axios";
import "./ProfilePage.css";
import "../globals.css";

export default function ProfilePage() {
  const { user, refreshUser } = useContext(AuthContext);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("avatar", e.target.files[0]);

    //
    // 1. update avatar
    // 2. refresh user (with latest DB infos)
    //

    service
      .uploadImage(uploadData)
      .then((data) => {
        // 1
        return service.updateAvatar(data.fileUrl);
      })
      .then(() => {
        // 2
        refreshUser();
      })
      .catch((err) => console.log("Error while updating avatar: ", err));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profileDisplay">
      <div className="profilePage">
        <img src={user.avatar} alt="" />
        <input type="file" onChange={handleFileUpload} />

        <div className="profileInfo">
          <p className="subtitle">User name</p>
          <div>{user.username}</div>

          <p className="subtitle">Email address</p>
          <div>{user.email}</div>

          <p className="subtitle">Password</p>
          <div>********</div>
          <div className="hyperlink--sm">
            <Icon icon={"material-symbols:edit-outline"}></Icon>Edit / Delete
            profile
          </div>
        </div>
      </div>
    </div>
  );
}
