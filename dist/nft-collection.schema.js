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
exports.NFTCollectionSchema = exports.NFTCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let NFTCollection = class NFTCollection {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, index: true, unique: true }),
    __metadata("design:type", String)
], NFTCollection.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, index: true, enum: types_1.SupportedTokenTypes }),
    __metadata("design:type", String)
], NFTCollection.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTCollection.prototype, "createdAtBlock", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTCollection.prototype, "firstProcessedBlock", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTCollection.prototype, "lastProcessedBlock", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], NFTCollection.prototype, "sentAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], NFTCollection.prototype, "isProcessing", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTCollection.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTCollection.prototype, "symbol", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTCollection.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], NFTCollection.prototype, "vip", void 0);
NFTCollection = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: "nft-collections" })
], NFTCollection);
exports.NFTCollection = NFTCollection;
exports.NFTCollectionSchema = mongoose_1.SchemaFactory.createForClass(NFTCollection);
exports.NFTCollectionSchema.index({ contractAddress: 1 });
exports.NFTCollectionSchema.index({ vip: 1 }, { partialFilterExpression: { vip: { $exists: true } } });
//# sourceMappingURL=nft-collection.schema.js.map