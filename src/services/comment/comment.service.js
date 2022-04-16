// Initializes the `comment` service on path `/comment`
import { Comment } from './comment.class';

import createModel from '../../models/comment.model';
import hooks from './comment.hooks';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/comment', new Comment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('comment');

  service.hooks(hooks);
};
