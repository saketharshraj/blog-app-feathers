// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import { BadRequest } from '@feathersjs/errors';

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {

    const {data, app} = context;

    const { user, post,comment } = data;

    if (!user) {
      throw new BadRequest('User is required');
    }
    if (!post) {
      throw new BadRequest('Post is required');
    }
    if (!comment) {
        throw new BadRequest('Comment is required');
      }


    await app.service('user').get(user).catch(() => {
      throw new BadRequest('Invalid user trying to post');
    });

    await app.service('post').get(post).catch(() => {
        throw new BadRequest('Invalid Post');
      });

    // await app.service('comment').find({
    //   query: {
    //     user,
    //     post,
    //     status: 1,
    //   }
    // }).then(
    //   res => {
    //     if(res.total) {
    //       throw new BadRequest('You already commented on this post');
    //     }
    //   }
    // )
    return context;
  };
};
