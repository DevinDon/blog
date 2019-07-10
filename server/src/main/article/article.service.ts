import { Service } from '@rester/core';
import { ArticleEntity, Article } from './article.entity';

@Service()
export class ArticleService {

  getOneByID(id: number): Promise<Article | undefined> {
    return ArticleEntity.findOne(id);
  }

  getMoreByIDs(ids: number[]) {

  }

  getOneRecent() {

  }

  getMoreRecent(total: number): Promise<Article[]> {
    return ArticleEntity.createQueryBuilder()
      .select()
      .orderBy({ date: 'DESC' })
      .take(total)
      .getMany();
  }

}
