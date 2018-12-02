import path from "path";

class ResourceLocation {
  public readonly domain: string;
  public readonly path: string;

  public constructor(domain: string, path?: string, separator = ":") {
    if (!path) {
      const indexOfColon = domain.indexOf(separator);
      path = domain.substring(indexOfColon + 1);
      domain = indexOfColon === -1 ? "minecraft" : domain.substring(0, indexOfColon);
    }
    if (!/^[a-z0-9_.-]*$/g.test(domain)) throw new SyntaxError("Invalid resource location: non [a-z0-9_.-] character in domain");
    if (!/^[a-z0-9/_.-]*$/g.test(path)) throw new SyntaxError("Invalid resource location: non [a-z0-9/_.-] character in path");
    this.domain = domain;
    this.path = path;
  }

  public toString() {
    return this.domain + ":" + this.path;
  }

  public toPath(base: string, extension = "") {
    return path.join(this.domain, base, this.path + extension);
  }

  public static from(obj: string | ResourceLocation) {
    return typeof obj === "string" ? new ResourceLocation(obj) : obj;
  }
}

export = ResourceLocation;
