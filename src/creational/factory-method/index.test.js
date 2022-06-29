"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const index_1 = require("./index");
describe("factory method test", () => {
    test("food creator", () => {
        console.log(1, index_1.FoodCreator);
        // const food = new FoodCreator();
        // expect(food.createAction()).toBe("food".length);
    });
    test("electron creator", () => {
        console.log(1, index_1.ElectronCreator);
        // const electron = new ElectronCreator();
        // expect(electron.createAction()).toBe("electron".length);
    });
});
