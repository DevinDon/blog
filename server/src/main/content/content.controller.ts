import { Controller } from '@rester/core';
import { ContentEntity } from './content.entity';
import { Content } from './content.model';

@Controller()
export class ContentController {

  getOneByID(id: number): Promise<Content | undefined> {
    return ContentEntity.findOne(id);
  }

  getMoreByIDs(ids: number[]) {

  }

  getOneByRecent() {

  }

  async like(id: number) {
    await ContentEntity.createQueryBuilder()
      .update()
      .set({ liked: () => '"liked" + 1' })
      .where('id = :id', { id })
      .execute();
    return ContentEntity.findOne(id).then(article => article!.liked);
  }

  async share(id: number) {
    await ContentEntity.createQueryBuilder()
      .update()
      .set({ shared: () => '"shared" + 1' })
      .where('id = :id', { id })
      .execute();
    return ContentEntity.findOne(id).then(article => article!.shared);
  }

  getMoreByRecent(total: number): Promise<Content[]> {
    return ContentEntity.createQueryBuilder()
      .select()
      .orderBy({ date: 'DESC' })
      .take(total)
      .getMany();
  }

  getMoreByRandom(total: number): Promise<Content[]> {
    return ContentEntity.createQueryBuilder()
      .select()
      .orderBy('RANDOM()')
      .take(total)
      .getMany();
  }

}
