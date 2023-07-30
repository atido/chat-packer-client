import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import myaxios from "../../myaxios";
import service from "../services/file-upload.service";
import "./ProfilePage.css";
import "../globals.css";
import "./SignupLoginPage.css";

export default function ProfileEditPage() {
  const { user, setUser, refreshUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setEmail(user.email || "");
      setPassword(user.password || "");
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleEditSubmit = (e) => {
    console.log(username, email, password);
    e.preventDefault();
    return myaxios
      .put(`/api/user`, { username, email, password })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
        refreshUser();
      })
      .catch((err) => console.log(err));
  };

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
        console.log(data)
        return service.updateAvatar(data.fileUrl);
      })
      .then(() => {
        // 2
        refreshUser();
      })
      .catch((err) => console.log("Error while updating avatar: ", err));
  };

  return (
    <div className="profileDisplay">
      <Link className="backLink" to={"/trips"}><div className="backLinkIcon"><Icon icon={"pajamas:go-back"}/></div> Back to trip list</Link>
      <form className="profilePage" onSubmit={handleEditSubmit}>
        <div className="avatarProfile">
          <img src={user.avatar} alt="" />
        </div>
        <div className="hyperlink--sm">
          <Icon icon={"material-symbols:edit-outline"}></Icon>Edit / Delete
          photo
          <input type="file" onChange={handleFileUpload} />
        </div>

        <div className="profileInfo">
          <label className="label--editForm profileEditForm">
            User name
            <input
              className="input--editForm"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="label--editForm profileEditForm">
            Email address
            <input
              className="input--editForm"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="label--editForm profileEditForm">
            Password
            <input
              className="input--editForm"
              type="password"
              name="password"
              value={""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="btn btn--primary" type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
