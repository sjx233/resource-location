"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
class ResourceLocation {
    constructor(domain, path, separator = ":") {
        if (!path) {
            const indexOfColon = domain.indexOf(separator);
            path = domain.substring(indexOfColon + 1);
            domain = indexOfColon === -1 ? "minecraft" : domain.substring(0, indexOfColon);
        }
        if (!/^[a-z0-9_.-]*$/g.test(domain))
            throw new SyntaxError("Invalid resource location: non [a-z0-9_.-] character in domain");
        if (!/^[a-z0-9/_.-]*$/g.test(path))
            throw new SyntaxError("Invalid resource location: non [a-z0-9/_.-] character in path");
        this.domain = domain;
        this.path = path;
    }
    toString() {
        return this.domain + ":" + this.path;
    }
    toPath(base, extension = "") {
        return path_1.default.join(this.domain, base, this.path + extension);
    }
    static from(obj) {
        return typeof obj === "string" ? new ResourceLocation(obj) : obj;
    }
}
module.exports = ResourceLocation;
//# sourceMappingURL=index.js.map