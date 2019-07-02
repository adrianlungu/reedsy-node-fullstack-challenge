"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class Utils {
    static Stall(stallTime = 3000) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve) => setTimeout(resolve, stallTime));
        });
    }
}
exports.default = Utils;
