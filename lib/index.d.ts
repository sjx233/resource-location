declare class ResourceLocation {
    readonly namespace: string;
    readonly domain: string;
    readonly path: string;
    readonly name: string;
    constructor(namespace: string, path?: string, separator?: string);
    toString(): string;
    toPath(base: string, extension?: string): string;
    static from(obj: string | ResourceLocation): ResourceLocation;
}
export = ResourceLocation;
