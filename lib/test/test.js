"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("../index"));
const obj1 = new index_1.default("domain", "path");
const obj2 = new index_1.default("path");
assert_1.default.strictEqual(obj1.domain, "domain");
assert_1.default.strictEqual(obj1.path, "path");
assert_1.default.strictEqual(obj1.toString(), "domain:path");
assert_1.default.strictEqual(obj2.domain, "minecraft");
assert_1.default.strictEqual(obj2.path, "path");
assert_1.default.strictEqual(obj2.toString(), "minecraft:path");
assert_1.default.deepStrictEqual(new index_1.default("domain:path"), obj1);
assert_1.default.strictEqual(obj1.toPath(""), path_1.default.join("domain", "path"));
assert_1.default.strictEqual(obj1.toPath("a"), path_1.default.join("domain", "a", "path"));
assert_1.default.strictEqual(obj1.toPath("a/b"), path_1.default.join("domain", "a", "b", "path"));
assert_1.default.deepStrictEqual(index_1.default.from(obj1), obj1);
assert_1.default.deepStrictEqual(index_1.default.from("domain:path"), obj1);
assert_1.default.deepStrictEqual(index_1.default.from("path"), obj2);
//# sourceMappingURL=test.js.map