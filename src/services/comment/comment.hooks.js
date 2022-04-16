import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import commentFieldValidation from './hooks/comment-field-validation';

const  { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [commentFieldValidation()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
