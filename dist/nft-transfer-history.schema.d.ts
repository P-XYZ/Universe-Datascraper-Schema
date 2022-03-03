import { Document } from 'mongoose';
export declare class NFTTransferHistory {
    contractAddress: string;
    blockNum: number;
    hash: string;
    from: string;
    to: string;
    tokenId: string;
    value: string;
    erc721TokenId: string;
    erc1155Metadata: any;
    cryptopunks: any;
    category: string;
    timeLastUpdated: string;
}
export declare type NFTTransferHistoryDocument = NFTTransferHistory & Document;
export declare const NFTTransferHistorySchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
