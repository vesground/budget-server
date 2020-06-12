import ProfileType from 'graphql/types/Profile.js';
import resolver from './resolver';

export default {
  type: ProfileType,
  resolve() {
    console.log('get profile resolver');
    return {};
  }
  // resolver
};
