import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({
      status: 'fulfilled',
      value: user,
    });
  } catch (error) {
    res.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const uploader = await uploadPhoto(fileName);
    res.push({
      status: 'fulfilled',
      value: uploader,
    });
  } catch (error) {
    res.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return res;
}
