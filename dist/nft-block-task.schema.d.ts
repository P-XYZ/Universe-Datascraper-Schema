import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTBlockTask {
    messageId: string;
    blockNum: number;
    status: MessageStatus;
    errorMessage: string;
}
export declare type NFTBlockTaskDocument = NFTBlockTask & Document;
export declare const NFTBlockTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
