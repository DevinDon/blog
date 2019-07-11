import { CORSHandler, Rester } from '@rester/core';
import { CommentController } from './comment/comment.controller';
import { ItemController } from './item/item.controller';
import { MottoController } from './motto/motto.controller';

const rester = new Rester()
  .configControllers
  .add(CommentController, ItemController, MottoController)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
