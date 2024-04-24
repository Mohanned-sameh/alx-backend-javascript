import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    signUpUser(firstName, lastName)
      .then((result) => {
        uploadPhoto(fileName)
          .then((photo) => {
            resolve({ status: 'fulfilled', value: result, photo });
          })
          .catch((error) => {
            resolve({ status: 'rejected', value: error, photo: null });
          });
      })
      .catch((error) => {
        resolve({ status: 'rejected', value: error, photo: null });
      });
  });
}
