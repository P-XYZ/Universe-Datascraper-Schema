import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MediaFileType, SupportedTokenTypes } from './types';

export class Owner {
  @Prop({ trim: true, index: true, required: true })
  address: string;

  @Prop({ trim: true, index: true, required: true })
  transactionHash: string;

  @Prop({ required: true })
  value: number;
}

export class AlternativeMediaFile {
  @Prop({ trim: true, required: true })
  url: string;

  @Prop({ trim: true, required: true, enum: MediaFileType })
  type: string;
}

@Schema({ timestamps: true, collection: 'nft-tokens' })
export class NFTToken {
  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, index: true, required: true })
  public tokenId: string;

  @Prop({ index: true, required: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop()
  public externalDomainViewUrl: string;

  @Prop({ type: Object })
  public metadata: any;

  @Prop()
  public firstOwner: string;

  //ERC721 and Cryptopunks only have 1 owner
  //ERC1155 can have multiple owners
  @Prop()
  public owners: Owner[];

  @Prop()
  public metadataFetchError: string;

  @Prop()
  public processingSentAt: Date;

  @Prop()
  public sentAt: Date;

  @Prop()
  public sentForMediaAt: Date;

  @Prop()
  public alternativeMediaFiles: AlternativeMediaFile[];

  @Prop({ default: false })
  public needToRefresh: boolean;
}

export type NFTTokensDocument = NFTToken & Document;


export const NFTTokensSchema =
  SchemaFactory.createForClass(NFTToken);

NFTTokensSchema.index({ contractAddress: 1, tokenId: 1 }, { unique: true });
NFTTokensSchema.index({ "owners.address": 1 });
NFTTokensSchema.index({ "owners.transactionHash": 1 });

