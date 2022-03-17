import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

//ERC1155 can have multiple owners
@Schema({ timestamps: true, collection: 'nft-erc1155-token-owners' })
export class NFTErc1155TokenOwner {
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

export type NFTErc1155TokenOwnerDocument = NFTErc1155TokenOwner & Document;

export const NFT1155TokenOwnerSchema =
  SchemaFactory.createForClass(NFTErc1155TokenOwner);

NFT1155TokenOwnerSchema.index({ contractAddress: 1, tokenId: 1, address: 1, transactionHash: 1 }, { unique: true });
NFT1155TokenOwnerSchema.index({ blockNum: -1, logIndex: -1 });