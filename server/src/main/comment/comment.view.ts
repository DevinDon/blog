import { GET, Inject, PathVariable, POST, RequestBody, View } from '@rester/core';
import { response } from '../model/response.model';
import { CommentController } from './comment.controller';
import { Comment } from './comment.model';

@View('/comment')
export class CommentView {

  @Inject()
  private controller!: CommentController;

  @POST('/')
  async add(@RequestBody() comment: Comment) {
    const result = await this.controller.add({
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
    const result = await this.controller.getAllAboutItem(item);
    return response({
      status: result.length > 0,
      content: result
    });
  }

}
