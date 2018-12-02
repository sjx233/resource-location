"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("../index"));
const obj1 = new index_1.default("namespace", "path");
const obj2 = new index_1.default("path");
assert_1.default.strictEqual(obj1.namespace, "namespace");
assert_1.default.strictEqual(obj1.path, "path");
assert_1.default.strictEqual(obj1.toString(), "namespace:path");
assert_1.default.strictEqual(obj2.namespace, "minecraft");
assert_1.default.strictEqual(obj2.path, "path");
assert_1.default.strictEqual(obj2.toString(), "minecraft:path");
assert_1.default.deepStrictEqual(new index_1.default("namespace:path"), obj1);
assert_1.default.strictEqual(obj1.toPath(""), path_1.default.join("namespace", "path"));
assert_1.default.strictEqual(obj1.toPath("a"), path_1.default.join("namespace", "a", "path"));
assert_1.default.strictEqual(obj1.toPath("a/b"), path_1.default.join("namespace", "a", "b", "path"));
assert_1.default.deepStrictEqual(index_1.default.from(obj1), obj1);
assert_1.default.deepStrictEqual(index_1.default.from("namespace:path"), obj1);
assert_1.default.deepStrictEqual(index_1.default.from("path"), obj2);
//# sourceMappingURL=test.js.map