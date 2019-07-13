import { Controller } from '@rester/core';
import { DetailEntity } from './detail.entity';
import { Detail } from './detail.model';

@Controller()
export class DetailController {

  getOneByID(id: number): Promise<Detail | undefined> {
    return DetailEntity.findOne(id);
  }

  getMoreByIDs(ids: number[]) {

  }

  getOneByRecent() {

  }

  async like(id: number) {
    await DetailEntity.createQueryBuilder()
      .update()
      .set({ liked: () => '"liked" + 1' })
      .where('id = :id', { id })
      .execute();
    return DetailEntity.findOne(id).then(article => article!.liked);
  }

  async share(id: number) {
    await DetailEntity.createQueryBuilder()
      .update()
      .set({ shared: () => '"shared" + 1' })
      .where('id = :id', { id })
      .execute();
    return DetailEntity.findOne(id).then(article => article!.shared);
  }

  getMoreByRecent(total: number): Promise<Detail[]> {
    return DetailEntity.createQueryBuilder()
      .select()
      .orderBy({ date: 'DESC' })
      .take(total)
      .getMany();
  }

  getMoreByRandom(total: number): Promise<Detail[]> {
    return DetailEntity.createQueryBuilder()
      .select()
      .orderBy('RANDOM()')
      .take(total)
      .getMany();
  }

}
