// Initializes the `like` service on path `/like`
import { Like } from './like.class';

import createModel from '../../models/like.model';
import hooks from './like.hooks';
import OnPostLiked from './events/OnPostLiked';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/like', new Like(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('like');

  service.on('created', OnPostLiked)

  service.hooks(hooks);
};
