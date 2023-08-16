// 프로미스는 비동기 처리를 동기로 처리 할 수 있게 도와주는 객체유형
// 이 객체를 이용 시 비동기 처리를 쉽게 가능

new Promise(executor);
// executor 는 Promise의 실행함수라고 볼수 있고 Promise가 만들어 질때 자동 실행...?
// executor 에는 함수만 올수 있으며 인자로는....
new Promise((resolve, reject) => {
  // 인자로는 resolve, reject 주입, (( 프로미스가 정상적일때는 resolve, 잘못 되었을 시 reject ))
  // promise가 연산을 언제 종료하는지 상관하지 않고 resolve, reject 둘중 하나는 무조건 호출...!!
  //
});
