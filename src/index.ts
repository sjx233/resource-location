import path from "path";

class ResourceLocation {
  public readonly namespace: string;

  public get domain() {
    return this.namespace;
  }

  public readonly path: string;

  public get name() {
    return this.path;
  }

  public constructor(namespace: string, path?: string) {
    if (!path) {
      const indexOfSeparator = namespace.indexOf(":");
      path = namespace.substring(indexOfSeparator + 1);
      namespace = indexOfSeparator === -1 ? "minecraft" : namespace.substring(0, indexOfSeparator);
    }
    if (!/^[a-z0-9_.-]*$/.test(namespace)) throw new SyntaxError("Invalid resource location: non [a-z0-9_.-] character in namespace");
    if (!/^[a-z0-9/_.-]*$/.test(path)) throw new SyntaxError("Invalid resource location: non [a-z0-9/_.-] character in path");
    this.namespace = namespace;
    this.path = path;
  }

  public toString() {
    return this.namespace + ":" + this.path;
  }

  public toPath(base: string, extension = "") {
    return path.join(this.namespace, base, this.path + extension);
  }

  public is(obj: string | ResourceLocation) {
    obj = ResourceLocation.from(obj);
    return this.namespace === obj.namespace && this.path === obj.path;
  }

  public static from(obj: string | ResourceLocation) {
    return typeof obj === "string" ? new ResourceLocation(obj) : obj;
  }
}

export = ResourceLocation;
