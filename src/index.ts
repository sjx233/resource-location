import path from "path";

class ResourceLocation {
  public readonly domain: string;
  public readonly path: string;

  public constructor(domain: string, path?: string) {
    if (path) {
      this.domain = domain;
      this.path = path;
    } else {
      const indexOfColon = domain.indexOf(":");
      this.domain = indexOfColon === -1 ? "minecraft" : domain.substring(0, indexOfColon);
      this.path = domain.substring(indexOfColon + 1);
    }
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
