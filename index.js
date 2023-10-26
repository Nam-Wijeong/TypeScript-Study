// 타입스트립크 실행
// 1. npm install -g typescript
// 2. tsc -w (js파일로 자동 변환)
var 이름 = 13;
function 함수(x) {
    return x * 2;
}
var john = [123, true];
// 1.
function sayHello(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log('입력하세여');
    }
}
sayHello();
sayHello('홍길동');
// 2.
function countString(x) {
    return x.toString().length;
}
console.log(countString(3454));
// 3.
