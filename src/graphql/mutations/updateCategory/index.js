import CategoryType from 'graphql/types/Category.js';

import input from './input';
import resolver from './resolver';

const updateCategory = {
    type: CategoryType,
    args: input,
    resolve: resolver
}

export default updateCategory;
