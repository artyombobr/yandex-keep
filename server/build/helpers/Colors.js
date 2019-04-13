"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Colors {
    constructor(colors) {
        this.colors = colors;
    }
    static factory(colors) {
        return new Colors(colors);
    }
    checkColor(id) {
        const check = this.colors.find((color) => color.id === id);
        return Boolean(check);
    }
}
exports.default = Colors;
//# sourceMappingURL=Colors.js.map