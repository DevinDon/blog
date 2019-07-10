import { Controller, GET, Inject, PathVariable } from '@rester/core';
import { response } from '../model/response.model';
import { ArticleService } from './article.service';

@Controller('/article')
export class ArticleController {

  @Inject()
  private service!: ArticleService;

  @GET('/{{id}}')
  async getOneByID(@PathVariable('id') id: number) {
    const result = await this.service.getOneByID(+id);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/recent/{{total}}')
  async getMoreRecent(@PathVariable('total') total: number) {
    const result = await this.service.getMoreRecent(+total);
    return response({
      status: result.length > 0,
      content: result
    });
  }

}
