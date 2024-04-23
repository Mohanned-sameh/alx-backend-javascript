import signUpUser from './5-user-promise.js';
import uploadPhoto from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([signUpUser(), uploadPhoto()])
    .then((values) => console.log(`${values[0].body} ${values[1].body}`))
    .catch(() => console.log('Signup system offline'));
}
