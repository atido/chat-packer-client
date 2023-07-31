import myaxios from "../../myaxios";

const uploadImage = (file) => {
  return myaxios
    .post("/api/user/uploadAvatar", file)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const updateAvatar = (fileUrl) => {
  return myaxios
    .put(`/api/user/avatar`, { avatar: fileUrl })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default { uploadImage, updateAvatar };
