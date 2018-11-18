"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
class ResourceLocation {
    constructor(domain, path) {
        if (path) {
            this.domain = domain;
            this.path = path;
        }
        else {
            const indexOfColon = domain.indexOf(":");
            this.domain = indexOfColon === -1 ? "minecraft" : domain.substring(0, indexOfColon);
            this.path = domain.substring(indexOfColon + 1);
        }
    }
    toString() {
        return this.domain + ":" + this.path;
    }
    toPath(basePath) {
        return path_1.default.join(this.domain, basePath, this.path);
    }
    static from(obj) {
        return typeof obj === "string" ? new ResourceLocation(obj) : obj;
    }
}
exports.default = ResourceLocation;
//# sourceMappingURL=index.js.map