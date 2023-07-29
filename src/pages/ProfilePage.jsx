import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import service from "../services/file-upload.service";
import "./ProfilePage.css";
import "../globals.css";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { user, refreshUser } = useContext(AuthContext);

  // const handleFileUpload = (e) => {
  //   const uploadData = new FormData();
  //   uploadData.append("avatar", e.target.files[0]);

  //   //
  //   // 1. update avatar
  //   // 2. refresh user (with latest DB infos)
  //   //

  //   service
  //     .uploadImage(uploadData)
  //     .then((data) => {
  //       // 1
  //       return service.updateAvatar(data.fileUrl);
  //     })
  //     .then(() => {
  //       // 2
  //       refreshUser();
  //     })
  //     .catch((err) => console.log("Error while updating avatar: ", err));
  // };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profileDisplay">
      <div className="profilePage">
        <div className="avatarProfile"><img src={user.avatar} alt="" /></div>
        {/* <div className="hyperlink--sm">
            <Icon icon={"material-symbols:edit-outline"}></Icon>Edit / Delete
            photo
            <input type="file" onChange={handleFileUpload} />
          </div> */}

        <div className="profileInfo">
          <p className="subtitle">User name</p>
          <div>{user.username}</div>

          <p className="subtitle">Email address</p>
          <div>{user.email}</div>

          <p className="subtitle">Password</p>
          <div>***********</div>
          <Link to={"/profile/edit"} className="hyperlink--sm">
            <Icon icon={"material-symbols:edit-outline"}></Icon>Edit / Delete
            profile
          </Link>
        </div>
      </div>
    </div>
  );
}
