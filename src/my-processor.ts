import { Processor, Process } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';

@Injectable()
@Processor('myQueue')
export class MyProcessor {
  @Process()
  public async process(job: Job<unknown>): Promise<any> {
    console.log('Process Job', job.name, job.data);
    throw new Error('Process failed');
  }
}
