import ProfileType from 'graphql/types/Profile.js';

import input from './input';
import resolver from './resolver';

const updateProfile = {
    type: ProfileType,
    args: input,
    resolve: resolver
}

export default updateProfile;
