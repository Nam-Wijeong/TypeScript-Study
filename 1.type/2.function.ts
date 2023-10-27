{
  // // Javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // Typescript
  // function add(num1:number, num2:number):number {
  //   return num1 + num2;
  // }

  // // Javascript
  // function jsFetchNum(id) {
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }

  // // Typescript
  // function fetchNum(id: string): Promise<number> {
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }

  // Javascript => Typescript
  // Optional parameter
  function printName(firstName: string, lastName?: string) { // ?는 전달 해도되고 안해도 되는 파라미터
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('wijeong')

  // Default parameter
  function printMessage(message: string = 'Default message') {
    console.log(message);
  }
  printMessage(); // 파라미터 전달하지 않아도 에러나지 않고 default로 지정한 메세지가 출력됨

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1,2));
  console.log(addNumbers(1,2,3,4));
  console.log(addNumbers(1,2,3,4,5,6));

}