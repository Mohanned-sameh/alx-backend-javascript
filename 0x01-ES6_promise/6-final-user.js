import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];

  return signUpUser(firstName, lastName)
    .then((data) => {
      res.push({ status: 'fulfilled', value: data });
    })
    .catch((err) => {
      res.push({ status: 'rejected', value: err.toString() });
    });
}
