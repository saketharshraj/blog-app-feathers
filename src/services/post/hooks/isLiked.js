// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import { BadRequest } from '@feathersjs/errors';

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {

   const {result, params, app} = context;
   const { user : { _id: userId}} = params;
   const { data } = result;
   for(let i=0; i<data.length; i++){
      data[i].like = await app.service('like').find({
        query:{
          user: userId,
          postId: data[i]._id,
          status: 1
        }
      }).then(
        res => res.total ? res.data[0] : null
      )
    }
      
    return context;
  };
};
