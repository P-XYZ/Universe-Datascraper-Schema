import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus, SupportedTokenTypes } from './types';


@Schema({ timestamps: true, collection: 'nft-collection-tasks' })
export class NFTCollectionTask {
  @Prop({ index: true, require: true })
  public messageId: string;

  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop({ index: true, required: true })
  public startBlock: number;

  @Prop({ index: true, required: true })
  public endBlock: number;

  @Prop({ trim: true, index: true, required: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop({
    index: true,
    required: true,
  })
  public status: MessageStatus;

  @Prop({trim: true})
  public errorMessage: string;
}

export type NFTCollectionTaskDocument = NFTCollectionTask & Document;

export const NFTCollectionTaskSchema =
  SchemaFactory.createForClass(NFTCollectionTask);
