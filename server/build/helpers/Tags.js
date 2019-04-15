"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tags {
    constructor(tags) {
        this.tags = tags;
    }
    toArray() {
        return [...this.tags];
    }
    static factory(tags) {
        return new Tags(tags);
    }
}
exports.default = Tags;
//# sourceMappingURL=Tags.js.map