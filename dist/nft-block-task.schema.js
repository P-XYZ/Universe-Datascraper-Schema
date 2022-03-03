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
exports.NFTBlockTaskSchema = exports.NFTBlockTask = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let NFTBlockTask = class NFTBlockTask {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, require: true }),
    __metadata("design:type", String)
], NFTBlockTask.prototype, "messageId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", Number)
], NFTBlockTask.prototype, "blockNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        index: true,
        required: true,
    }),
    __metadata("design:type", String)
], NFTBlockTask.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], NFTBlockTask.prototype, "errorMessage", void 0);
NFTBlockTask = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-block-tasks' })
], NFTBlockTask);
exports.NFTBlockTask = NFTBlockTask;
exports.NFTBlockTaskSchema = mongoose_1.SchemaFactory.createForClass(NFTBlockTask);
//# sourceMappingURL=nft-block-task.schema.js.map