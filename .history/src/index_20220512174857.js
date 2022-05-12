import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 데이터를 변경하는 reducer 함수를 세팅
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

// 저장소(store) 생성, 저장소 안에 데이터를 변경할 함수도 입력
const countStore = createStore(countModifier);

// 저장소.dispatch 를 이용, reducer 함수의 action 인자에 action을 전달 
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "MINUS"});

console.log(countStore.getState());