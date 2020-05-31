import Profile from 'models/Profile.js';

export async function (args) {
  try {
    const profile = await Profile.findById(args?.id).exec();
    console.log('get profile', JSON.stringify(profile));
    return profile;
  } catch (error) {
    throw new Error(error);
  }
}
