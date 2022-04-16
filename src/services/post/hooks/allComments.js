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
      data[i].comment = await app.service('comment').find({
        query:{
          user: userId,
          postId: data[i]._id,
          status: 1
        }
      }).then(
        res => {
            if(res.total){
                let tempComments = [];
                for(let j=0; j<res.data.length; j++){
                    tempComments.push(res.data[j])
                }
                return tempComments
            }
            else {
                return null
            }
        }
      )
    }
      
    return context;
  };
};
