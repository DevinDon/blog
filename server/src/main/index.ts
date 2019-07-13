import { CORSHandler, Rester } from '@rester/core';
import { CommentView } from './comment/comment.view';
import { DetailView } from './detail/detail.view';
import { MottoView } from './motto/motto.view';

const rester = new Rester();

rester
  .configViews
  .add(CommentView, DetailView, MottoView)
  .end();

rester
  .configHandlers
  .add(CORSHandler)
  .end();

rester
  .listen();
