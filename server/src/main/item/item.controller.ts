import { Controller, GET, Inject, PATCH, PathVariable } from '@rester/core';
import { response } from '../model/response.model';
import { ItemService } from './item.service';

@Controller('/article')
export class ItemController {

  @Inject()
  private service!: ItemService;

  @GET('/{{id}}')
  async getOneByID(@PathVariable('id') id: number) {
    const result = await this.service.getOneByID(+id);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/recent/{{total}}')
  async getMoreByRecent(@PathVariable('total') total: number) {
    const result = await this.service.getMoreByRecent(+total);
    return response({
      status: result.length > 0,
      content: result
    });
  }

  @GET('/random/{{total}}')
  async getMoreByRandom(@PathVariable('total') total: number) {
    const result = await this.service.getMoreByRandom(+total);
    return response({
      status: result.length > 0,
      content: result
    });
  }

  @PATCH('/like/{{id}}')
  async like(@PathVariable('id') id: number) {
    const result = await this.service.like(+id);
    return response({
      status: result > 0,
      content: result
    });
  }

  @PATCH('/share/{{id}}')
  async share(@PathVariable('id') id: number) {
    const result = await this.service.share(+id);
    return response({
      status: result > 0,
      content: result
    });
  }

}
