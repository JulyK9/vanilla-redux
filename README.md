# Vanilla Redux

Learning Vanilla-Redux and React-Redux

๐ Store and Reducer

  ๐ ๋ฆฌ๋์ค createStore ํจ์
    - createStore ๋ reducer ๊ฐ ํ์ํจ

  ๐ store ์ ์ญํ 
    - data ๋ฅผ ๋ฃ์ ์ ์๋ ์ฅ์๋ฅผ ์์ฑ
    - ๋ฆฌ๋์ค๋ data ๋ฅผ (๊ด๋ฆฌํ๋๋ฐ) ๋์์ฃผ๋ ์ญํ ์ ํ๊ธฐ ์ํด ๋ง๋ค์ด์ง

  ๐ reducer ์ ์ญํ 
    - data ๋ฅผ ์์ (modify)ํด์ฃผ๋ ํจ์
    - reducer ๊ฐ return ํ๋ ๊ฒ์ด application ์ ์๋ data ๊ฐ ๋จ

  โ store ๋ฅผ ๋ง๋ค๊ณ  countModifier(reducer)๋ก initial state๋ก ๋ถ๋ฌ์ด
  โ countModifier(reducer)์์ ์ธ์๋ฅผ state = 0 ๊ฐ์ ํํ๋ก initial state ๋ฅผ ์ค์ ํด์ค ์ ์์
  โ data modifier (reducer)๋ ํ์ฌ์ state (ํ๋ผ๋ฏธํฐ ์๋ฆฌ์ ๋ฃ์ด์ค state = 0)์ ํจ๊ป ํธ์ถ๋จ 
  โ data ์ ์์ ์ countModifier(reducer) ๋ฅผ ํตํด์๋ง ๊ฐ๋ฅํ๋ฐ ๊ตฌ์ฒด์ ์ผ๋ก action ์ ํตํด ๊ฐ๋ฅํจ!

๐ Actions

  ๐ action
    - action ์ redux ์์ reducer function ์ ๋ถ๋ฅผ ๋ ์ฐ๋ ๋๋ฒ์งธ parameter or argument ๋ก
    - reducer ์ ์ํตํ๊ธฐ ์ํ ๋ฐฉ๋ฒ
  
  ๐ Reducer ์๊ฒ action ์ ๋ณด๋ด๋ ๋ฐฉ๋ฒ
    - dipatch ๋ฅผ ์ฌ์ฉ
    - store.dispatch({ type: value }); ํํ๋ก ์ฌ์ฉ
    - action ์ object ์ฌ์ผ ํจ
    - action ์ ๋ฐ๋์ type ์ด ์์ด์ผ ํจ ( ๋ฐ๊ฟ ์ ์๊ณ  type ์ด๋ผ๊ณ  ๋ช๋ชํ property ๋ง ์ฌ์ฉํด์ผ ํจ )

  ๐ dispatch ๊ฐ reducer๋ฅผ ๋ถ๋ฌ์ current state ์ ๊ฐ์ด ๋ณด๋ธ action ์ ๋ฐ์ํจ

  ๐ store.getState()
    - ์ ์ฅ์์ ํ์ฌ ์ํ ํ์ธ

  โ ์ ์ฅ์(store) ์์ฑ, ์ ์ฅ์ ์์ ๋ฐ์ดํฐ๋ฅผ ๋ณ๊ฒฝํ  reducer ํจ์๋ ์๋ ฅ
    const ์ ์ฅ์๋ช = createStore(๋ณ๊ฒฝํจ์๋ช)
  โ ๋ฐ์ดํฐ๋ฅผ ๋ณ๊ฒฝํ๋ reducer ํจ์๋ฅผ ์ธํ
    const reducerํจ์๋ช = (๋ณ์์ ์ด๊ธฐ ์ํ, action) => {
      return ๋ณ์;
    } 
  โ ์ ์ฅ์๋ช.dispatch ๋ฅผ ์ด์ฉ, reducer ํจ์์ action ์ธ์์ action์ ์ ๋ฌ

๐ Subscriptions

  ๐ Subscribe
    - store ์์์ ์งํ๋ ์ปค๋ฎค๋์ผ์ด์์ ๋ณํ๋ฅผ ๊ฐ์ง
    - store.subscribe(function) : store ์์ ๋ณํ๋ฅผ ๊ฐ์งํ๋ฉด function ์ ์คํ