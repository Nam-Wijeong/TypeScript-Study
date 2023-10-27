{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num:number = 9;

  // string
  const str:string = 'hello'

  // boolean
  const boal:boolean = true;

  // undefined: 값이 있는지 없는지 명확하게 정해지지 않은 것
  let name:undefined; // 이렇게 안씀!
  let age:number | undefined; // 숫자 또는 undefined 할당
  
  function find(): number | undefined {
    return undefined;
  }
  // null: 값이 텅텅 비어있는 것
  let person:string | null;

  // unknown: 어떤 타입인지 알 수 없음, 가능하면 쓰지않음
  let notSure:unknown = 0;
  notSure = true;

  // any: 어떤 타입이든 담을 수 있으나, 가능하면 쓰지않음
  let anything:any = 0;
  anything = 'hello'

  // void: 함수에서 아무것도 리턴하지 않을 경우!
  function print():void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 이렇게는 쓰지않음

  // never: 아무것도 리턴할 수 없다(에러의 경우만 쓰는듯)
    function throwError(message: string): never {
      // message -> server (log)
      throw new Error(message);
  }

  // object : 쓰지않는 것이 좋음
  let obj:object; 
  function acceptSomeObject(obj: object) {  }

  acceptSomeObject({ name: 'wijeong'});
  acceptSomeObject({ age: 10})
}