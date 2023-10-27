{
  // Array
  const fruits:string[] = ['🍎', '🍌'];
  const scores:Array<number> = [1, 3, 4];

  // 절대 변경할 수 없음 - string 타입형태만 가능
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 213];
  student[0] // name
  student[1] // 213

  const [name, age] = student; // 이런식으로 명확하게 표현 가능
}