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
exports.NFTTokenOwnerSchema = exports.NFTTokenOwner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let NFTTokenOwner = class NFTTokenOwner {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTTokenOwner.prototype, "blockNum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTTokenOwner.prototype, "logIndex", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "transactionHash", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true, enum: types_1.SupportedTokenTypes }),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], NFTTokenOwner.prototype, "tokenName", void 0);
NFTTokenOwner = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-token-owners' })
], NFTTokenOwner);
exports.NFTTokenOwner = NFTTokenOwner;
exports.NFTTokenOwnerSchema = mongoose_1.SchemaFactory.createForClass(NFTTokenOwner);
exports.NFTTokenOwnerSchema.index({ contractAddress: 1, tokenId: 1 }, { unique: true });
exports.NFTTokenOwnerSchema.index({ blockNum: -1, logIndex: -1 });
//# sourceMappingURL=nft-token-owner.schema.js.map