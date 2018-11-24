declare class ResourceLocation {
    readonly domain: string;
    readonly path: string;
    constructor(domain: string, path?: string);
    toString(): string;
    toPath(basePath: string): string;
    static from(obj: string | ResourceLocation): ResourceLocation;
}
export = ResourceLocation;
