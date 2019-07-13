import { Controller } from '@rester/core';
import { CommentEntity } from './comment.entity';
import { Comment } from './comment.model';

@Controller()
export class CommentController {

  add(comment: Partial<Comment>) {
    return CommentEntity
      .insert(comment)
      .then(result => result.identifiers[0] ? comment : undefined);
  }

  getAllAboutItem(item: number) {
    return CommentEntity.find({ item });
  }

  async like(id: number) {
    await CommentEntity.createQueryBuilder()
      .update()
      .set({ liked: () => '"liked" + 1' })
      .where('id = :id', { id })
      .execute();
    return CommentEntity.findOne(id).then(comment => comment!.liked);
  }

  async dislike(id: number) {
    await CommentEntity.createQueryBuilder()
      .update()
      .set({ disliked: () => '"disliked" + 1' })
      .where('id = :id', { id })
      .execute();
    return CommentEntity.findOne(id).then(comment => comment!.disliked);
  }

}
