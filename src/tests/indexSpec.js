"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe("image Test Responses", () => {
  it("gets the api images", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get("/");
      expect(response.status).toBe(200);
    }));
  it(" test requested image missing", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get("/image");
      expect(response.status).toBe(400);
    }));
  it("gets the api images", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        "/image?myNameForFile=fjord&x=jpg&width=width&height=height"
      );
      expect(response.status).toBe(400);
    }));
  it("check the api images", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        "/image?myNameForFile=unknown&x=jpg&width=100&height=100"
      );
      expect(response.status).toBe(404);
    }));
  it("found resized image", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        "/image?myNameForFile=fjord&x=jpg&width=100&height=100"
      );
      expect(response.status).toBe(200);
    }));
});
