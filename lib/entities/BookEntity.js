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
var typeorm_1 = require("typeorm");
var BookEntity = /** @class */ (function () {
    function BookEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], BookEntity.prototype, "uuid", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], BookEntity.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column("json", { array: true }),
        __metadata("design:type", Array)
    ], BookEntity.prototype, "chapters", void 0);
    BookEntity = __decorate([
        typeorm_1.Entity("books")
    ], BookEntity);
    return BookEntity;
}());
exports.default = BookEntity;
