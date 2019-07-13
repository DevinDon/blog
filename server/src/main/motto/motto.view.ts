import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { response } from '../model/response.model';
import { Motto } from './motto.model';
import { MottoController } from './motto.controller';

@View('/motto')
export class MottoView {

  @Inject()
  private controller!: MottoController;

  @POST('/')
  async addOne(@RequestBody() motto: Motto) {
    const result = await this.controller.addOne(motto);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @DELETE('/{{id}}')
  async removeOneByID(@PathVariable('id') id: number) {
    return response({
      status: await this.controller.removeOneByID(+id)
    });
  }

  @PUT('/{{id}}')
  async modifyOneByID(@PathVariable('id') id: number, @RequestBody() motto: Motto) {
    const result = await this.controller.modifyOneByID(+id, motto);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/{{id}}')
  async getOneByID(@PathVariable('id') id: number) {
    const result = await this.controller.getOneByID(+id);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/')
  async getOneByRandom() {
    const result = await this.controller.getOneByRandom();
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/more/{{total}}')
  async getMoreByRandom(@PathVariable('total') total: number) {
    const result = await this.controller.getMoreByRandom(+total);
    return response({
      status: result.length > 0,
      content: result
    });
  }

}
