import { Controller } from '@rester/core';
import { MottoEntity } from './motto.entity';
import { Motto } from './motto.model';

@Controller()
export class MottoController {

  addOne(motto: Motto): Promise<Motto | undefined> {
    return MottoEntity.insert(motto).then(v => v.identifiers[0] ? motto : undefined);
  }

  removeOneByID(id: number): Promise<boolean> {
    // sqlite delete result is always `{ raw: [] }`
    return MottoEntity.delete(id).then(v => true);
  }

  async modifyOneByID(id: number, motto: Motto): Promise<Motto | undefined> {
    await MottoEntity.update(id, motto);
    return MottoEntity.findOne(id);
  }

  getMoreByConditions(motto: Partial<Motto>): Promise<Motto[]> {
    return MottoEntity.find(motto);
  }

  getOneByID(id: number): Promise<Motto | undefined> {
    return MottoEntity.findOne(id);
  }

  getOneByRandom(): Promise<Motto | undefined> {
    return MottoEntity.createQueryBuilder()
      .select()
      .orderBy('RANDOM()')
      .take(1)
      .getOne();
  }

  getMoreByRandom(total: number): Promise<Motto[]> {
    return MottoEntity.createQueryBuilder()
      .select()
      .orderBy('RANDOM()')
      .take(total)
      .getMany();
  }

}
