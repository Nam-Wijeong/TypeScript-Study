{
  // 캡슐화
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public: 기본적인 상태
  // private: 외부에서 접근 불가
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (objcet) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false
      }
    }
  }

  // CoffeeMaker
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(35);

  class User {
    // private firstName: string;
    // private lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;d
    }
  }
  const user = new User('wijeong', 'Nam');
  user.age = 6;
  console.log(user);
}