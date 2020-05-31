import CategoryType from 'graphql/types/Category.js';

import input from './input';
import resolver from './resolver';

const createCategory = {
    type: CategoryType,
    args: input,
    resolve: resolver
}

export default createCategory;
