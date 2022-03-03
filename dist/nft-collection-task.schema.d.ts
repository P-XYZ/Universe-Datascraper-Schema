import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTCollectionTask {
    messageId: string;
    contractAddress: string;
    startBlock: number;
    endBlock: number;
    tokenType: string;
    status: MessageStatus;
    errorMessage: string;
}
export declare type NFTCollectionTaskDocument = NFTCollectionTask & Document;
export declare const NFTCollectionTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
