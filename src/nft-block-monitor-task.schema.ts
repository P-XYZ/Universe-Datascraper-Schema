import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';

@Schema({ timestamps: true, collection: 'nft-block-monitor-tasks' })
export class NFTBlockMonitorTask {
  @Prop({ index: true, require: true })
  public messageId: string;

  @Prop({ index: true, required: true })
  public blockNum: number;

  @Prop({
    index: true,
    required: true,
  })
  public status: MessageStatus;

  @Prop({trim: true})
  public errorMessage: string;
}

export type NFTBlockMonitorTaskDocument = NFTBlockMonitorTask & Document;

export const NFTBlockMonitorTaskSchema =
  SchemaFactory.createForClass(NFTBlockMonitorTask);
