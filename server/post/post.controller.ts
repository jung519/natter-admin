import { Router } from 'express';
import { PostService } from './post.service';
import { PostDao } from './post.dao';
import { Post } from '../../common/interfaces/post';

export const PostController = Router();
const postService = new PostService(new PostDao);

PostController.get('/list', (req, res) => {
  const options: Post = {
    email: req.param('email'),
    post_status: req.param('post_status')
  };
  postService.getPostList(options)
  .then(result => {
    return res.json(result);
  });
});

PostController.get('/info', (req, res) => {
  const post_number: number = Number(req.param('post_number'));
  postService.getPostInfo(post_number)
  .then(result => {
    return res.json(result);
  });
});

PostController.put('/put_info', (req, res) => {
  const options: Post = {
    post_number: Number(req.param('post_number')),
    post_status: req.param('post_status'),
    del_yn: req.param('del_yn')
  };
  postService.putPostInfo(options)
  .then(result => {
    return res.json(result);
  });
});
