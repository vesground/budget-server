import ProfileType from 'graphql/types/Profile.js';

import input from './input';
import resolver from './resolver';

const createProfile = {
    type: ProfileType,
    args: input,
    resolve: resolver
}

export default createProfile;
