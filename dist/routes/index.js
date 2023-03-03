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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imgFile_1 = require("../utilities/imgFile");
const myRoutes = express_1.default.Router();
myRoutes.get('/', (req = express_1.default.request, res = express_1.default.response) => __awaiter(void 0, void 0, void 0, function* () {
    const myNameForFile = req.query.myNameForFile;
    const myextension = req.query.x;
    const width = req.query.newwidth;
    const height = req.query.newheight;
    if (myNameForFile == undefined || width == undefined || height == undefined) {
        res.status(400).send(" query image request is missed");
    }
    else {
        const newWidth = parseInt(width);
        const newheight = parseInt(height);
        if (isNaN(newWidth) || isNaN(newheight)) {
            res.status(400).send('query image request is invalid');
        }
        else {
            const lowercaseexten = myextension.toLowerCase();
            const imageResourceName = path_1.default.join(__dirname, '../../all/images/') + myNameForFile + '.' + lowercaseexten;
            const imgDirectoryThumbnail = path_1.default.join(__dirname, '../../all/Thumbnail/');
            const imgResourceNameThumbnail = imgDirectoryThumbnail + myNameForFile + width + 'newwidth-' + height + 'newheight.' + lowercaseexten;
            const imagesfolderExists = yield (0, imgFile_1.isImageExist)(imageResourceName);
            if (imagesfolderExists) {
                (0, imgFile_1.isImageDirectory)(imgDirectoryThumbnail);
                (0, imgFile_1.imageResize)(imageResourceName, parseInt(width), parseInt(height), imgResourceNameThumbnail).then((myNameOutFile) => {
                    console.log('return the File ' + myNameOutFile);
                    res.status(200).sendFile(myNameOutFile);
                });
            }
            else {
                res.status(404).send('Request Resource is not found');
            }
        }
    }
}));
exports.default = myRoutes;
