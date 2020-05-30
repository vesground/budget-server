import Profile from '../../models/Profile';

export async function () {
  return await  Profile.find({}, (err, auth) => {
  });
}
