import { Controller, POST, Inject, PathVariable, RequestBody, GET } from '@rester/core';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { response } from '../model/response.model';

@Controller('/comment')
export class CommentController {

  @Inject()
  private service!: CommentService;

  @POST('/')
  async add(@RequestBody() comment: Comment) {
    const result = await this.service.add({
      content: comment.content,
      date: Date.now(),
      item: comment.item,
      reply: comment.reply,
      user: 0,
      liked: 0,
      disliked: 0
    });
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/{{item}}')
  async get(@PathVariable('item') item: number) {
    const result = await this.service.getAllAboutItem(item);
    return response({
      status: result.length > 0,
      content: result
    });
  }

}
