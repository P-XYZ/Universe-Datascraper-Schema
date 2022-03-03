import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTBlockMonitorTask {
    messageId: string;
    blockNum: number;
    status: MessageStatus;
    errorMessage: string;
}
export declare type NFTBlockMonitorTaskDocument = NFTBlockMonitorTask & Document;
export declare const NFTBlockMonitorTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
