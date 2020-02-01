import * as path from "path";

class ResourceLocation {
  public readonly namespace: string;

  public get domain(): string {
    return this.namespace;
  }

  public readonly path: string;

  public get name(): string {
    return this.path;
  }

  public constructor(namespace: string, path?: string) {
    if (!path) {
      const index = namespace.indexOf(":");
      path = namespace.substring(index + 1);
      namespace = index === -1 ? "minecraft" : namespace.substring(0, index);
    }
    if (!/^[a-z0-9_.-]*$/.test(namespace)) throw new SyntaxError("invalid resource location: non [a-z0-9_.-] character in namespace");
    if (!/^[a-z0-9/_.-]*$/.test(path)) throw new SyntaxError("invalid resource location: non [a-z0-9/_.-] character in path");
    this.namespace = namespace;
    this.path = path;
  }

  public toString(): string {
    return `${this.namespace}:${this.path}`;
  }

  public toJSON(): string {
    return this.toString();
  }

  public toPath(base: string, extension = ""): string {
    return path.join(this.namespace, base, this.path + extension);
  }

  public is(obj: string | ResourceLocation): boolean {
    obj = ResourceLocation.from(obj);
    return this.namespace === obj.namespace && this.path === obj.path;
  }

  public static from(obj: string | ResourceLocation): ResourceLocation {
    return typeof obj === "string" ? new ResourceLocation(obj) : obj;
  }
}

export = ResourceLocation;
