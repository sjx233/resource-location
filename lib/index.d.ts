declare class ResourceLocation {
    readonly domain: string;
    readonly path: string;
    constructor(domain: string, path?: string, separator?: string);
    toString(): string;
    toPath(base: string, extension?: string): string;
    static from(obj: string | ResourceLocation): ResourceLocation;
}
export = ResourceLocation;
