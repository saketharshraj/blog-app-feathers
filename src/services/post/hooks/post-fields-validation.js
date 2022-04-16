// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import { BadRequest } from '@feathersjs/errors';

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {

    const {data} = context;

    const { user, title, description } = data;

    if (!user) {
      throw new BadRequest('User is required');
    }
    if (!title) {
      throw new BadRequest('Title is required');
    }
    if (!description) {
      throw new BadRequest('Description is required');
    }

    await app.service('user').get(user).catch(() => {
      throw new BadRequest('User not found');
    });
    return context;
  };
};
