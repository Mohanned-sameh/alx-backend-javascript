import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];

  return signUpUser(firstName, lastName)
    .then((response) => {
      result.push({ status: 'fulfilled', value: response });
      return uploadPhoto(fileName);
    })
    .then((response) => {
      result.push({ status: 'fulfilled', value: response });
      return result;
    })
    .catch((error) => {
      result.push({ status: 'rejected', value: error.toString() });
      return result;
    });
}
