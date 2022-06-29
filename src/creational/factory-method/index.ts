interface Product {
  getName(): void;
  size(): number;
}

class FoodProduct implements Product {
  constructor() {}
  getName(): void {
    console.log("current product is food!");
  }

  size(): number {
    return "food".length;
  }
}

class ElectronProduct implements Product {
  constructor() {}
  getName(): void {
    console.log("current product is electron!");
  }

  size(): number {
    return "electron".length;
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public createAction(): number {
    const product = this.factoryMethod();
    product.getName();
    return product.size();
  }
}

class FoodCreator extends Creator {
  constructor() {
    super();
  }
  factoryMethod(): Product {
    return new FoodProduct();
  }
}

class ElectronCreator extends Creator {
  constructor() {
    super();
  }

  factoryMethod(): Product {
    return new ElectronProduct();
  }
}

export { FoodCreator, ElectronCreator };
