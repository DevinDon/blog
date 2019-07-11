import { Service } from '@rester/core';
import { ArticleEntity, Article } from './article.entity';

@Service()
export class ArticleService {

  getOneByID(id: number): Promise<Article | undefined> {
    return ArticleEntity.findOne(id);
  }

  getMoreByIDs(ids: number[]) {

  }

  getOneByRecent() {

  }

  async like(id: number) {
    await ArticleEntity.createQueryBuilder()
      .update()
      .set({ liked: () => '"liked" + 1' })
      .where('id = :id', { id })
      .execute();
    return ArticleEntity.findOne(id).then(article => article!.liked);
  }

  async share(id: number) {
    await ArticleEntity.createQueryBuilder()
      .update()
      .set({ shared: () => '"shared" + 1' })
      .where('id = :id', { id })
      .execute();
    return ArticleEntity.findOne(id).then(article => article!.shared);
  }

  getMoreByRecent(total: number): Promise<Article[]> {
    return ArticleEntity.createQueryBuilder()
      .select()
      .orderBy({ date: 'DESC' })
      .take(total)
      .getMany();
  }

  getMoreByRandom(total: number): Promise<Article[]> {
    return ArticleEntity.createQueryBuilder()
      .select()
      .orderBy('RANDOM()')
      .take(total)
      .getMany();
  }

}
