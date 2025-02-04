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
exports.uploadAvatarDto = exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
class User {
}
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], User.prototype, "tai_khoan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "ho_ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "so_dt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "mat_khau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "loai_nguoi_dung", void 0);
class uploadAvatarDto {
}
exports.uploadAvatarDto = uploadAvatarDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'binary' }),
    __metadata("design:type", Object)
], uploadAvatarDto.prototype, "file", void 0);
//# sourceMappingURL=user.entity.js.map