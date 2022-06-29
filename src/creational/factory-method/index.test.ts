import "jest";
import { FoodCreator, ElectronCreator } from "./index";

describe("factory method test", () => {
  test("food creator", () => {
    const food = new FoodCreator();
    expect(food.createAction()).toBe("food".length);
  });

  test("electron creator", () => {
    const electron = new ElectronCreator();
    expect(electron.createAction()).toBe("electron".length);
  });
});
