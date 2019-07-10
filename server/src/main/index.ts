import { CORSHandler, Rester } from '@rester/core';
import { ArticleController } from './article/article.controller';
import { MottoController } from './motto/motto.controller';

const rester = new Rester()
  .configControllers
  .add(ArticleController, MottoController)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
