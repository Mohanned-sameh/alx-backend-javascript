import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  new Promise((resolve, reject) => {
    res.push(
      signUpUser(firstName, lastName)
        .then((data) => {
          res.push(data);
        })
        .catch((err) => {
          res.push({ status: 'rejected', value: err.toString() });
        })
    );
    res.push(
      uploadPhoto(fileName)
        .then((data) => {
          res.push(data);
        })
        .catch((err) => {
          res.push({ status: 'rejected', value: err.toString() });
        })
    );
    resolve(res);
  });
  return res;
}
