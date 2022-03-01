import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

@Schema({ timestamps: true, collection: 'nft-transfer-histories' })
export class NFTTransferHistory {
  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop()
  public blockNum: number;

  @Prop({ index: true, required: true })
  public hash: string;

  @Prop({ required: true })
  public from: string;

  @Prop({ required: true })
  public to: string;

  @Prop({ index: true })
  public tokenId: string;

  @Prop()
  public value: string;

  //Original data: only for ERC721
  @Prop()
  public erc721TokenId: string;

  //Original data: only for erc1155 { tokenId, value }
  @Prop({ type: 'object' })
  public erc1155Metadata: any;

  //Original data: only for CryptoPunks { punkIndex }
  @Prop({ type: 'object' })
  public cryptopunks: any;

  @Prop({ index: true, required: true, enum: SupportedTokenTypes })
  public category: string;

  @Prop()
  public timeLastUpdated: string;
}

export type NFTTransferHistoryDocument = NFTTransferHistory & Document;

export const NFTTransferHistorySchema =
  SchemaFactory.createForClass(NFTTransferHistory);

NFTTransferHistorySchema.index({ contractAddress: 1, tokenId: 1, hash: 1 });