import { Document } from 'mongoose';
export declare class NFTErc721TokenOwner {
    contractAddress: string;
    tokenId: string;
    address: string;
    blockNum: number;
    logIndex: number;
    transactionHash: string;
    value: string;
    tokenType: string;
    tokenName: string;
}
export declare type NFTErc721TokenOwnerDocument = NFTErc721TokenOwner & Document;
export declare const NFTErc721TokenOwnerSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
