import { Malt } from 'adtap-network-malt';
import fs, { constants } from 'fs';
import path from 'path';
import os, { networkInterfaces } from 'os';
import { Readable } from 'stream';
import sharp from 'sharp';
import { access } from 'fs/promises';
import QRCode from 'qrcode';
export default class Barrel extends Malt {
    constructor(o) {
        super(o);
    }
    async fileExists(filePath) {
        try {
            await access(filePath, constants.F_OK);
            return true;
        }
        catch {
            return false;
        }
    }
    async generateQRCode(u) {
        try {
            const pngData = await QRCode.toDataURL(u, { errorCorrectionLevel: 'H', margin: 4, color: { dark: 'black', light: 'white' } });
            return pngData;
        }
        catch (error) {
            console.error('Error generating QR code:', error);
            return '';
        }
    }
    getCurrentUrl(req) {
        let pageUrl = 'http';
        if (req.headers['x-forwarded-proto'] === 'https') {
            pageUrl = 'https';
        }
        pageUrl += '://';
        const host = req.headers['host'];
        const requestUri = req.url || '';
        if (req.headers['x-forwarded-port'] && req.headers['x-forwarded-port'] !== '80') {
            pageUrl += `${host}:${req.headers['x-forwarded-port']}${requestUri}`;
        }
        else {
            pageUrl += `${host}${requestUri}`;
        }
        return pageUrl;
    }
    getEnvironmentVariable(k) { const v = process.env[k] || ''; return v; }
    getLocalHostname() { return os.hostname(); }
    getLocalIp4() { const interfaces = networkInterfaces(); for (const interfaceName in interfaces) {
        if (Object.hasOwnProperty.call(interfaces, interfaceName)) {
            const networkInterface = interfaces[interfaceName];
            for (const net of networkInterface) {
                if (net.family === 'IPv4' && !net.internal) {
                    return net.address;
                }
            }
        }
    } return undefined; }
    getLocalSeparator() { return path.sep; }
    getProjectRoot() {
        let currentDir = process.cwd();
        while (!fs.existsSync(path.join(currentDir, 'node_modules'))) {
            const parentDir = path.dirname(currentDir);
            if (parentDir === currentDir) {
                throw new Error('Project root not found (no node_modules directory)');
            }
            currentDir = parentDir;
        }
        return currentDir;
    }
    getProjectFolder() { return path.basename(this.getProjectRoot()); }
    getRequestBody() {
        return new Promise((resolve, reject) => {
            const requestBody = [];
            process.stdin.on('data', (chunk) => requestBody.push(chunk));
            process.stdin.on('end', () => {
                const bodyStream = Readable.from(requestBody);
                resolve(bodyStream);
            });
            process.stdin.on('error', (err) => reject(err));
        });
    }
    getRequestMethod() { return this.getServerValue('REQUEST_METHOD'); }
    getRequestPort() { return this.getServerValue('SERVER_PORT'); }
    getRequestUri() { return this.getServerValue('REQUEST_URI'); }
    getServerArray() { return Object.fromEntries(Object.entries(process.env).filter(([, value]) => value !== undefined)); }
    getServerValue(key) { return process.env[key] || ''; }
    async httpGet(url) { const response = await fetch(url); const content = await response.text(); const headers = [...response.headers.keys()]; return { content, headers }; }
    listDirectoryFiles(directory) {
        const files = [];
        const items = fs.readdirSync(directory);
        items.forEach((item) => {
            const fullPath = path.join(directory, item);
            if (fs.statSync(fullPath).isFile()) {
                files.push(item);
            }
        });
        return files;
    }
    async makeThumbnailFromString(p, t = 'png', r = 0.2) {
        const imageBuffer = Buffer.from(p, 'base64');
        try {
            const resizedBuffer = await sharp(imageBuffer).resize({ width: Math.round(150 * r), height: Math.round(150 * r) }).toBuffer();
            let resultBase64 = '';
            if (t === 'gif') {
                resultBase64 = (await sharp(resizedBuffer).gif().toBuffer()).toString('base64');
                resultBase64 = 'data:image/gif;base64,' + resultBase64;
            }
            else if (t === 'jpg') {
                resultBase64 = (await sharp(resizedBuffer).jpeg().toBuffer()).toString('base64');
                resultBase64 = 'data:image/jpeg;base64,' + resultBase64;
            }
            else {
                resultBase64 = (await sharp(resizedBuffer).png().toBuffer()).toString('base64');
                resultBase64 = 'data:image/png;base64,' + resultBase64;
            }
            return resultBase64;
        }
        catch (err) {
            console.error('Error processing image', err);
            return '';
        }
    }
    async readFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            return data;
        }
        catch (error) {
            console.error('Error reading file:', error);
            return '';
        }
    }
    saveBase64ToFile(base64Str, filePath) {
        const base64Data = base64Str.split(',')[1] || base64Str;
        fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
        return filePath;
    }
    writeFile(path, content) {
        let status = 0;
        try {
            fs.writeFileSync(path, content, 'utf8');
            status = 1;
        }
        catch (error) {
            console.error('Error writing file:', error);
        }
        return status;
    }
}
//# sourceMappingURL=barrel.js.map