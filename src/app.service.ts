import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  // `BullModule.registerQueue()` で定義したキューと同じ名前をデコレータで注入する
  constructor(@InjectQueue('myQueue') private messageQueue: Queue) {}

  public async addJob(id: number): Promise<string> {
    try {
      const job = await this.messageQueue.add('myJob', { id });
      console.log('Job Added', id, job.queue.name);
      return `Job Added ${id}`;
    } catch (err) {
      console.log(err);
    }
  }
}
