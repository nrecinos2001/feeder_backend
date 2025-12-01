import { Inject, Injectable } from '@nestjs/common';

import { RefillRepository } from '../repositories';
import { RefillEntity } from '../entities';
import { RefillType } from '../enums';

@Injectable()
export class RefillService {
  constructor(
    @Inject('REFILL_REPOSITORY')
    private readonly refillRepository: RefillRepository,
  ) { }
  async getLastNRefills(n: number): Promise<RefillEntity[]> {
    const refillLogs = await this.refillRepository.findLastNFills(n);
    return refillLogs;
  }

  async create(distance: number): Promise<RefillEntity> {
    const lastRefill = await this.getLastNRefills(1);
    const type = distance > 10 ? RefillType.EMPTY : RefillType.FULL;
    if (lastRefill?.length && lastRefill[0]?.type === type) {
      lastRefill[0];
    }
    const newRefill = this.refillRepository.create({
      distance,
      email_sent: type === RefillType.EMPTY,
      type,
      created_at: new Date(),
    });

    const savedRefill = await this.refillRepository.save(newRefill);
    return savedRefill;
  }
}
