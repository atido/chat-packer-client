import myaxios from '../utils/myaxios';

const uploadImage = file => {
  return myaxios
    .post('/api/user/uploadAvatar', file)
    .then(res => res.data)
    .catch(err => console.log(err.message));
};

const updateAvatar = fileUrl => {
  return myaxios
    .put(`/api/user/avatar`, { avatar: fileUrl })
    .then(res => res.data)
    .catch(err => console.log(err.message));
};

export default { uploadImage, updateAvatar };
