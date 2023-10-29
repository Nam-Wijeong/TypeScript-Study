/**
 * Let's make a calculator 🧮
 */

  // function calculate(type: string, a: number, b: number): number {
  // function calculate(type: 'add' | 'substract' | 'multiply' | 'divide' | 'remainder', a: number, b: number): number {
  type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
  function calculate(type: Command , a: number, b: number): number {
  // if (type === 'add') {
  //   return a + b;
  // } else if (type === 'substract') {
  //   return a - b;
  // } else if (type === 'multiply') {
  //   return a * b;
  // } else if (type === 'divide') {
  //   return a / b;
  // } else if (type === 'remainder') {
  //   return a % b;
  // }
  switch(type) {
    case 'add':
      return a + b;
      case 'substract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      case 'remainder':
        return a % b;
      default:
        throw new Error('unknown command');
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
