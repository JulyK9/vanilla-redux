# Vanilla Redux

Learning Vanilla-Redux and React-Redux

📌 Store and Reducer

  😊 리덕스 createStore 함수
    - createStore 는 reducer 가 필요함

  😊 store 의 역할
    - data 를 넣을 수 있는 장소를 생성
    - 리덕스는 data 를 (관리하는데) 도와주는 역할을 하기 위해 만들어짐

  😊 reducer 의 역할
    - data 를 수정(modify)해주는 함수
    - reducer 가 return 하는 것이 application 에 있는 data 가 됨

  ✔ store 를 만들고 countModifier(reducer)로 initial state로 불러옴
  ✔ countModifier(reducer)에서 인자를 state = 0 같은 형태로 initial state 를 설정해줄 수 있음
  ✔ data modifier (reducer)는 현재의 state (파라미터 자리에 넣어준 state = 0)와 함께 호출됨 
  ✔ data 의 수정은 countModifier(reducer) 를 통해서만 가능한데 구체적으로 action 을 통해 가능함!

📌 Actions

  😊 action
    - action 은 redux 에서 reducer function 을 부를 때 쓰는 두번째 parameter or argument 로
    - reducer 와 소통하기 위한 방법
  
  😊 Reducer 에게 action 을 보내는 방법
    - dipatch 를 사용
    - store.dispatch({ type: value }); 형태로 사용
    - action 은 object 여야 함
    - action 은 반드시 type 이 있어야 함 ( 바꿀 수 없고 type 이라고 명명한 property 만 사용해야 함 )

  😊 dispatch 가 reducer를 불러서 current state 와 같이 보낸 action 을 반영함

  😊 store.getState()
    - 저장소의 현재 상태 확인

  ✔ 저장소(store) 생성, 저장소 안에 데이터를 변경할 reducer 함수도 입력
    const 저장소명 = createStore(변경함수명)
  ✔ 데이터를 변경하는 reducer 함수를 세팅
    const reducer함수명 = (변수의 초기 상태, action) => {
      return 변수;
    } 
  ✔ 저장소명.dispatch 를 이용, reducer 함수의 action 인자에 action을 전달

📌 Subscriptions

  😊 Subscribe
    - store 안에서 진행된 커뮤니케이션의 변화를 감지
    - store.subscribe(function) : store 안의 변화를 감지하면 function 을 실행