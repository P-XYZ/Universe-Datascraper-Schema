"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT1155TokenOwnerSchema = exports.NFTErc1155TokenOwner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let NFTErc1155TokenOwner = class NFTErc1155TokenOwner {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTErc1155TokenOwner.prototype, "blockNum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTErc1155TokenOwner.prototype, "logIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "transactionHash", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true, enum: types_1.SupportedTokenTypes }),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], NFTErc1155TokenOwner.prototype, "tokenName", void 0);
NFTErc1155TokenOwner = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-erc1155-token-owners' })
], NFTErc1155TokenOwner);
exports.NFTErc1155TokenOwner = NFTErc1155TokenOwner;
exports.NFT1155TokenOwnerSchema = mongoose_1.SchemaFactory.createForClass(NFTErc1155TokenOwner);
exports.NFT1155TokenOwnerSchema.index({ contractAddress: 1, tokenId: 1, address: 1, transactionHash: 1 }, { unique: true });
exports.NFT1155TokenOwnerSchema.index({ blockNum: -1, logIndex: -1 });
//# sourceMappingURL=nft-erc1155-token-owner.schema.js.map