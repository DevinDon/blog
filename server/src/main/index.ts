import { CORSHandler, Rester } from '@rester/core';
import { CommentView } from './comment/comment.view';
import { ContentView } from './content/content.view';
import { MottoView } from './motto/motto.view';

const rester = new Rester();

rester
  .configViews
  .add(CommentView, ContentView, MottoView)
  .end();

rester
  .configHandlers
  .add(CORSHandler)
  .end();

rester
  .listen();
