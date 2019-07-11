import { CORSHandler, Rester } from '@rester/core';
import { ItemController } from './item/item.controller';
import { MottoController } from './motto/motto.controller';

const rester = new Rester()
  .configControllers
  .add(ItemController, MottoController)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
