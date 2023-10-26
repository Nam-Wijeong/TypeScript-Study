// 타입스트립크 실행
// 1. npm install -g typescript
// 2. tsc -w (js파일로 자동 변환)

// npm install -g ts-node

// let 이름 : string[] = ['nam', 'wijeong'];
// 이름 = ['1','2','3']

// let 이름2 : {name? : string} = {name : 'wijeong'}
// 이름2 = { name : 'nam'}

type MyType =  string | number;

let 이름 : MyType = 13;

function 함수(x : number) : number {
    return x * 2;
}

type Member = [number, boolean];
let john:Member = [123, true]

type Member2 = {
    // 모든 오브젝트 속성이 string이어야함.
    [key : string] : string
}

// 1.
function sayHello(x?: string): void {
    if(x) {
        console.log('안녕하세요' + x);
    } else {
        console.log('입력하세여');
    }
}
sayHello();
sayHello('홍길동')

// 2.
function countString(x: number | string): number {
    return x.toString().length;
}
console.log(countString(3454));

// 3.
