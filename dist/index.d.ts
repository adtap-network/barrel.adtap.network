import { Readable } from 'stream';
import { Malt } from 'adtap-network-malt';

interface BarrelInterface {
    fileExists(filePath: string): Promise<boolean>;
    generateQRCode(u: string): Promise<string>;
    getCurrentUrl(req: any): string;
    getEnvironmentVariable(k: string): string;
    getLocalHostname(): string;
    getLocalIp4(): string | undefined;
    getLocalSeparator(): string;
    getProjectRoot(): string;
    getProjectFolder(): string;
    getRequestBody(): Promise<Readable>;
    getRequestMethod(): string;
    getRequestPort(): string;
    getRequestUri(): string;
    getServerArray(): {
        [key: string]: string;
    };
    getServerValue(key: string): string;
    httpGet(url: string): Promise<{
        content: string;
        headers: string[];
    }>;
    listDirectoryFiles(directory: string): string[];
    makeThumbnailFromString(p: string, t: 'png' | 'jpg' | 'gif', r: number): Promise<string>;
    readFile(filePath: string): Promise<string>;
    saveBase64ToFile(base64Str: string, filePath: string): string;
    writeFile(path: string, content: string): number;
}

declare class Barrel extends Malt {
    constructor(o: {
        [key: string]: any;
    });
    fileExists(filePath: string): Promise<boolean>;
    generateQRCode(u: string): Promise<string>;
    getCurrentUrl(req: any): string;
    getEnvironmentVariable(k: string): string;
    getLocalHostname(): string;
    getLocalIp4(): string | undefined;
    getLocalSeparator(): string;
    getProjectRoot(): string;
    getProjectFolder(): string;
    getRequestBody(): Promise<Readable>;
    getRequestMethod(): string;
    getRequestPort(): string;
    getRequestUri(): string;
    getServerArray(): {
        [key: string]: string;
    };
    getServerValue(key: string): string;
    httpGet(url: string): Promise<{
        content: string;
        headers: string[];
    }>;
    listDirectoryFiles(directory: string): string[];
    makeThumbnailFromString(p: string, t?: 'png' | 'jpg' | 'gif', r?: number): Promise<string>;
    readFile(filePath: string): Promise<string>;
    saveBase64ToFile(base64Str: string, filePath: string): string;
    writeFile(path: string, content: string): number;
}

export { Barrel, type BarrelInterface };
