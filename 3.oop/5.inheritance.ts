{
  // 상속
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (objcet) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number):CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots: shots,
        hasMilk: false
      } 
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans:number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('steaming some milk...');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk()
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeeLatteMachine(23, 'ssss');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
  
}