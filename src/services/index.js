import user from './user/user.service.js';
import post from './post/post.service.js';
import like from './like/like.service.js';
import comment from './comment/comment.service.js';
import dashboard from './dashboard/dashboard.service.js';

// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(user);
  app.configure(post);
  app.configure(like);
  app.configure(comment);
  app.configure(dashboard);
};
