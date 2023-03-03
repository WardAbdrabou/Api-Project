"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageLogger = (req, res, next) => {
  const url = req.url;
  console.log(`${url} was visitied`);
  next();
};
exports.default = imageLogger;

