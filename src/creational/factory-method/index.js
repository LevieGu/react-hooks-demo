"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronCreator = exports.FoodCreator = void 0;
class FoodProduct {
    constructor() { }
    getName() {
        console.log("current product is food!");
    }
    size() {
        return "food".length;
    }
}
class ElectronProduct {
    constructor() { }
    getName() {
        console.log("current product is electron!");
    }
    size() {
        return "electron".length;
    }
}
class Creator {
    createAction() {
        const product = this.factoryMethod();
        product.getName();
        return product.size();
    }
}
class FoodCreator extends Creator {
    constructor() {
        super();
    }
    factoryMethod() {
        return new FoodProduct();
    }
}
exports.FoodCreator = FoodCreator;
class ElectronCreator extends Creator {
    constructor() {
        super();
    }
    factoryMethod() {
        return new ElectronProduct();
    }
}
exports.ElectronCreator = ElectronCreator;
