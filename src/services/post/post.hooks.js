import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import isLiked from './hooks/isLiked';
import postFieldsValidation from './hooks/post-fields-validation';

const  { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [postFieldsValidation()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [isLiked()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
