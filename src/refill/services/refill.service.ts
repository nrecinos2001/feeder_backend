import { Inject, Injectable } from '@nestjs/common';
import { RefillEntity } from '@Refill/entities';
import { RefillRepository } from '@Refill/repositories';

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
}
