import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';

@Schema({ timestamps: true, collection: 'nft-block-tasks' })
export class NFTBlockTask {
  @Prop({ index: true, require: true })
  public messageId: string;

  @Prop({ index: true, required: true })
  public blockNum: number;

  @Prop({
    index: true,
    required: true,
  })
  public status: MessageStatus;
}

export type NFTBlockTaskDocument = NFTBlockTask & Document;

export const NFTBlockTaskSchema =
  SchemaFactory.createForClass(NFTBlockTask);
