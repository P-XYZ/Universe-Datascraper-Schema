import { Document } from "mongoose";
export declare class NFTCollection {
    contractAddress: string;
    tokenType: string;
    createdAtBlock: number;
    firstProcessedBlock: number;
    lastProcessedBlock: number;
    sentAt: Date;
    isProcessing: boolean;
    name: string;
    symbol: string;
    owner: string;
    vip: boolean;
}
export declare type NFTCollectionDocument = NFTCollection & Document;
export declare const NFTCollectionSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
