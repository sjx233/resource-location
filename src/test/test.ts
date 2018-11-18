import assert from "assert";
import path from "path";
import ResourceLocation from "../index";

const obj1 = new ResourceLocation("domain", "path");
const obj2 = new ResourceLocation("path");
assert.strictEqual(obj1.domain, "domain");
assert.strictEqual(obj1.path, "path");
assert.strictEqual(obj1.toString(), "domain:path");
assert.strictEqual(obj2.domain, "minecraft");
assert.strictEqual(obj2.path, "path");
assert.strictEqual(obj2.toString(), "minecraft:path");
assert.deepStrictEqual(new ResourceLocation("domain:path"), obj1);
assert.strictEqual(obj1.toPath(""), path.join("domain", "path"));
assert.strictEqual(obj1.toPath("a"), path.join("domain", "a", "path"));
assert.strictEqual(obj1.toPath("a/b"), path.join("domain", "a", "b", "path"));
assert.deepStrictEqual(ResourceLocation.from(obj1), obj1);
assert.deepStrictEqual(ResourceLocation.from("domain:path"), obj1);
assert.deepStrictEqual(ResourceLocation.from("path"), obj2);
