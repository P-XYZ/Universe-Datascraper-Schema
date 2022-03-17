import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

//ERC721 and Cryptopunks owners
@Schema({ timestamps: true, collection: 'nft-token-owners' })
export class NFTTokenOwner {
  @Prop({ trim: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, required: true })
  public tokenId: string;

  @Prop({ trim: true, required: true })
  address: string;

  @Prop()
  public blockNum: number;

  @Prop()
  public logIndex: number;

  @Prop({ trim: true, required: true })
  transactionHash: string;

  @Prop()
  value: string;

  @Prop({ trim: true, required: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop({ trim: true })
  public tokenName: string;
}

export type NFTTokenOwnerDocument = NFTTokenOwner & Document;

export const NFTTokenOwnerSchema =
  SchemaFactory.createForClass(NFTTokenOwner);

NFTTokenOwnerSchema.index({ contractAddress: 1, tokenId: 1 }, { unique: true });
NFTTokenOwnerSchema.index({ blockNum: -1, logIndex: -1 });