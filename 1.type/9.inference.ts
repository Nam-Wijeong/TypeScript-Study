{
  /**
   * Type Inference
   */
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }
  
  function add(a:number, b:number) {
    return a + b;
  }

  const result = add(1, 3);
}