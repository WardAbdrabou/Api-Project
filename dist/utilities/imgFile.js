"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageResize = exports.isImageDirectory = exports.isImageExist = void 0;
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
const isImageExist = (myResNameFile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myImageFile = yield fs_1.promises.open(myResNameFile, 'r');
        myImageFile.close();
        return true;
    }
    catch (error) {
        return false;
    }
});
exports.isImageExist = isImageExist;
const isImageDirectory = (imageDirectoryName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.readdir(imageDirectoryName);
    }
    catch (_a) {
        yield fs_1.promises.mkdir(imageDirectoryName);
    }
    return Promise.resolve();
});
exports.isImageDirectory = isImageDirectory;
const imageResize = (myNameinpFile, width, height, myNameOutFile) => __awaiter(void 0, void 0, void 0, function* () {
    const imageNameoutExist = yield isImageExist(myNameOutFile);
    if (!imageNameoutExist) {
        console.log("File image is been created");
        yield (0, sharp_1.default)(myNameinpFile).resize(width, height).toFile(myNameOutFile);
        return myNameOutFile;
    }
    else {
        console.log('File image is exists ');
        return myNameOutFile;
    }
});
exports.imageResize = imageResize;
