import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

//ERC721 and Cryptopunks only have 1 owner
@Schema({ timestamps: true, collection: 'nft-erc721-token-owners' })
export class NFTErc721TokenOwner {
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

export type NFTErc721TokenOwnerDocument = NFTErc721TokenOwner & Document;

export const NFTErc721TokenOwnerSchema =
  SchemaFactory.createForClass(NFTErc721TokenOwner);

NFTErc721TokenOwnerSchema.index({ contractAddress: 1, tokenId: 1 }, { unique: true });
NFTErc721TokenOwnerSchema.index({ blockNum: -1, logIndex: -1 });