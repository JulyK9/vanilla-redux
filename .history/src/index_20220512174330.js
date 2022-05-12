import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 데이터를 변경하는 함수를 세팅해줌
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
  return count;
};

// 저장소(store)를 만들어주고, 저장소 안에 데이터가 변경될 함수도 만들어줌
const countStore = createStore(countModifier);

countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "MINUS"});

console.log(countStore.getState());