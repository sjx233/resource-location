import assert from "assert";
import path from "path";
import ResourceLocation from "../index";

const obj1 = new ResourceLocation("namespace", "path");
const obj2 = new ResourceLocation("path");
assert.strictEqual(obj1.namespace, "namespace");
assert.strictEqual(obj1.path, "path");
assert.strictEqual(obj1.toString(), "namespace:path");
assert.strictEqual(obj2.namespace, "minecraft");
assert.strictEqual(obj2.path, "path");
assert.strictEqual(obj2.toString(), "minecraft:path");
assert.deepStrictEqual(new ResourceLocation("namespace:path"), obj1);
assert.strictEqual(obj1.toPath(""), path.join("namespace", "path"));
assert.strictEqual(obj1.toPath("a"), path.join("namespace", "a", "path"));
assert.strictEqual(obj1.toPath("a/b"), path.join("namespace", "a", "b", "path"));
assert.deepStrictEqual(ResourceLocation.from(obj1), obj1);
assert.deepStrictEqual(ResourceLocation.from("namespace:path"), obj1);
assert.deepStrictEqual(ResourceLocation.from("path"), obj2);
