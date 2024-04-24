import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  const res = [];
  const user = await signUpUser(firstName, lastName).catch(() => null);
  const photo = await uploadPhoto(fileName).catch(() => null);

  if (user === null || photo === null) {
    res.push({ status: 'rejected', value: user });
  } else {
    res.push({ status: 'fulfilled', value: user });
  }
  return res;
}
