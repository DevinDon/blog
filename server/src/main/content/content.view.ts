import { GET, Inject, PATCH, PathVariable, View } from '@rester/core';
import { response } from '../model/response.model';
import { ContentController } from './content.controller';

@View('/content')
export class ContentView {

  @Inject()
  private controller!: ContentController;

  @GET('/{{id}}')
  async getOneByID(@PathVariable('id') id: number) {
    const result = await this.controller.getOneByID(+id);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/recent/{{total}}')
  async getMoreByRecent(@PathVariable('total') total: number) {
    const result = await this.controller.getMoreByRecent(+total);
    return response({
      status: result.length > 0,
      content: result
    });
  }

  @GET('/random/{{total}}')
  async getMoreByRandom(@PathVariable('total') total: number) {
    const result = await this.controller.getMoreByRandom(+total);
    return response({
      status: result.length > 0,
      content: result
    });
  }

  @PATCH('/like/{{id}}')
  async like(@PathVariable('id') id: number) {
    const result = await this.controller.like(+id);
    return response({
      status: result > 0,
      content: result
    });
  }

  @PATCH('/share/{{id}}')
  async share(@PathVariable('id') id: number) {
    const result = await this.controller.share(+id);
    return response({
      status: result > 0,
      content: result
    });
  }

}
