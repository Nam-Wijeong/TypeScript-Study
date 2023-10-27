{
  /**
   * Type Assertion: 권장하지 않음
   * type을 백퍼 장담할 수 있을때만..!!
   */
  function jsString(): any {
    return 3;
  }
  const result = jsString();
  console.log((result as string).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // const numbers = findNumbers();
  // numbers!.push(2);

}