import { Document } from 'mongoose';
export declare class NFTErc1155TokenOwner {
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
export declare type NFTErc1155TokenOwnerDocument = NFTErc1155TokenOwner & Document;
export declare const NFT1155TokenOwnerSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
