import { Service } from '@rester/core';
import { ItemEntity, Item } from './item.entity';

@Service()
export class ItemService {

  getOneByID(id: number): Promise<Item | undefined> {
    return ItemEntity.findOne(id);
  }

  getMoreByIDs(ids: number[]) {

  }

  getOneByRecent() {

  }

  async like(id: number) {
    await ItemEntity.createQueryBuilder()
      .update()
      .set({ liked: () => '"liked" + 1' })
      .where('id = :id', { id })
      .execute();
    return ItemEntity.findOne(id).then(article => article!.liked);
  }

  async share(id: number) {
    await ItemEntity.createQueryBuilder()
      .update()
      .set({ shared: () => '"shared" + 1' })
      .where('id = :id', { id })
      .execute();
    return ItemEntity.findOne(id).then(article => article!.shared);
  }

  getMoreByRecent(total: number): Promise<Item[]> {
    return ItemEntity.createQueryBuilder()
      .select()
      .orderBy({ date: 'DESC' })
      .take(total)
      .getMany();
  }

  getMoreByRandom(total: number): Promise<Item[]> {
    return ItemEntity.createQueryBuilder()
      .select()
      .orderBy('RANDOM()')
      .take(total)
      .getMany();
  }

}
