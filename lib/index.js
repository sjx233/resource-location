"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
class ResourceLocation {
    get domain() {
        return this.namespace;
    }
    get name() {
        return this.path;
    }
    constructor(namespace, path, separator = ":") {
        if (!path) {
            const indexOfColon = namespace.indexOf(separator);
            path = namespace.substring(indexOfColon + 1);
            namespace = indexOfColon === -1 ? "minecraft" : namespace.substring(0, indexOfColon);
        }
        if (!/^[a-z0-9_.-]*$/g.test(namespace))
            throw new SyntaxError("Invalid resource location: non [a-z0-9_.-] character in namespace");
        if (!/^[a-z0-9/_.-]*$/g.test(path))
            throw new SyntaxError("Invalid resource location: non [a-z0-9/_.-] character in path");
        this.namespace = namespace;
        this.path = path;
    }
    toString() {
        return this.namespace + ":" + this.path;
    }
    toPath(base, extension = "") {
        return path_1.default.join(this.namespace, base, this.path + extension);
    }
    static from(obj) {
        return typeof obj === "string" ? new ResourceLocation(obj) : obj;
    }
}
module.exports = ResourceLocation;
//# sourceMappingURL=index.js.map