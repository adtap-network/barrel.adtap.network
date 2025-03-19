"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Barrel: () => Barrel
});
module.exports = __toCommonJS(index_exports);

// src/classes/barrel.ts
var import_adtap_network_malt = require("adtap-network-malt");
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var import_os = __toESM(require("os"), 1);
var import_stream = require("stream");
var import_sharp = __toESM(require("sharp"), 1);
var import_promises = require("fs/promises");
var import_qrcode = __toESM(require("qrcode"), 1);
var Barrel = class extends import_adtap_network_malt.Malt {
  constructor(o) {
    super(o);
  }
  async fileExists(filePath) {
    try {
      await (0, import_promises.access)(filePath, import_fs.constants.F_OK);
      return true;
    } catch {
      return false;
    }
  }
  async generateQRCode(u) {
    try {
      const pngData = await import_qrcode.default.toDataURL(u, { errorCorrectionLevel: "H", margin: 4, color: { dark: "black", light: "white" } });
      return pngData;
    } catch (error) {
      console.error("Error generating QR code:", error);
      return "";
    }
  }
  getCurrentUrl(req) {
    let pageUrl = "http";
    if (req.headers["x-forwarded-proto"] === "https") {
      pageUrl = "https";
    }
    pageUrl += "://";
    const host = req.headers["host"];
    const requestUri = req.url || "";
    if (req.headers["x-forwarded-port"] && req.headers["x-forwarded-port"] !== "80") {
      pageUrl += `${host}:${req.headers["x-forwarded-port"]}${requestUri}`;
    } else {
      pageUrl += `${host}${requestUri}`;
    }
    return pageUrl;
  }
  getEnvironmentVariable(k) {
    const v = process.env[k] || "";
    return v;
  }
  getLocalHostname() {
    return import_os.default.hostname();
  }
  getLocalIp4() {
    const interfaces = (0, import_os.networkInterfaces)();
    for (const interfaceName in interfaces) {
      if (Object.hasOwnProperty.call(interfaces, interfaceName)) {
        const networkInterface = interfaces[interfaceName];
        for (const net of networkInterface) {
          if (net.family === "IPv4" && !net.internal) {
            return net.address;
          }
        }
      }
    }
    return void 0;
  }
  getLocalSeparator() {
    return import_path.default.sep;
  }
  getProjectRoot() {
    let currentDir = process.cwd();
    while (!import_fs.default.existsSync(import_path.default.join(currentDir, "node_modules"))) {
      const parentDir = import_path.default.dirname(currentDir);
      if (parentDir === currentDir) {
        throw new Error("Project root not found (no node_modules directory)");
      }
      currentDir = parentDir;
    }
    return currentDir;
  }
  getProjectFolder() {
    return import_path.default.basename(this.getProjectRoot());
  }
  getRequestBody() {
    return new Promise((resolve, reject) => {
      const requestBody = [];
      process.stdin.on("data", (chunk) => requestBody.push(chunk));
      process.stdin.on("end", () => {
        const bodyStream = import_stream.Readable.from(requestBody);
        resolve(bodyStream);
      });
      process.stdin.on("error", (err) => reject(err));
    });
  }
  getRequestMethod() {
    return this.getServerValue("REQUEST_METHOD");
  }
  getRequestPort() {
    return this.getServerValue("SERVER_PORT");
  }
  getRequestUri() {
    return this.getServerValue("REQUEST_URI");
  }
  getServerArray() {
    return Object.fromEntries(Object.entries(process.env).filter(([, value]) => value !== void 0));
  }
  getServerValue(key) {
    return process.env[key] || "";
  }
  async httpGet(url) {
    const response = await fetch(url);
    const content = await response.text();
    const headers = [...response.headers.keys()];
    return { content, headers };
  }
  listDirectoryFiles(directory) {
    const files = [];
    const items = import_fs.default.readdirSync(directory);
    items.forEach((item) => {
      const fullPath = import_path.default.join(directory, item);
      if (import_fs.default.statSync(fullPath).isFile()) {
        files.push(item);
      }
    });
    return files;
  }
  async makeThumbnailFromString(p, t = "png", r = 0.2) {
    const imageBuffer = Buffer.from(p, "base64");
    try {
      const resizedBuffer = await (0, import_sharp.default)(imageBuffer).resize({ width: Math.round(150 * r), height: Math.round(150 * r) }).toBuffer();
      let resultBase64 = "";
      if (t === "gif") {
        resultBase64 = (await (0, import_sharp.default)(resizedBuffer).gif().toBuffer()).toString("base64");
        resultBase64 = "data:image/gif;base64," + resultBase64;
      } else if (t === "jpg") {
        resultBase64 = (await (0, import_sharp.default)(resizedBuffer).jpeg().toBuffer()).toString("base64");
        resultBase64 = "data:image/jpeg;base64," + resultBase64;
      } else {
        resultBase64 = (await (0, import_sharp.default)(resizedBuffer).png().toBuffer()).toString("base64");
        resultBase64 = "data:image/png;base64," + resultBase64;
      }
      return resultBase64;
    } catch (err) {
      console.error("Error processing image", err);
      return "";
    }
  }
  async readFile(filePath) {
    try {
      const data = import_fs.default.readFileSync(filePath, "utf8");
      return data;
    } catch (error) {
      console.error("Error reading file:", error);
      return "";
    }
  }
  saveBase64ToFile(base64Str, filePath) {
    const base64Data = base64Str.split(",")[1] || base64Str;
    import_fs.default.writeFileSync(filePath, Buffer.from(base64Data, "base64"));
    return filePath;
  }
  writeFile(path2, content) {
    let status = 0;
    try {
      import_fs.default.writeFileSync(path2, content, "utf8");
      status = 1;
    } catch (error) {
      console.error("Error writing file:", error);
    }
    return status;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Barrel
});
//# sourceMappingURL=index.cjs.map