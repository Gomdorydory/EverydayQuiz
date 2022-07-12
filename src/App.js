import React, {
  useContext,
  useEffect,
  useState,
  useReducer,
  useRef,
} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Quiz from "./pages/Quiz";

//context 생성
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

//component App
function App() {
  //reducer를 통한 oncreate함수 결과 제어
  const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
      case "INIT": {
        return action.data;
      }
      case "CREATE": {
        let newItem = action.data;
        newState = [...state, newItem];
        if (newState.length > 10) {
          newState = [];
        }
        //클릭할때마다 새로운 배열이 생성되었으면 좋겠는데 배열이 하나씩 줄어든다.... 신기한게 다 줄어들면 다시 새로운 배열이 탄생한다...
      }
      default:
        return newState;
    }
    return newState;
  };

  // 랜덤 숫자로 이루어진 배열 뽑아내기
  let arraylength = 20;

  const numbers = Array(arraylength)
    .fill()
    .map((item, index) => index + 1);

  const random = [];

  while (arraylength > 0) {
    const num = Math.floor(Math.random() * 100);
    random.push(num);
    arraylength -= 1;
  }

  //useReducer
  const [data, dispatch] = useReducer(reducer, []);

  //useRef를 통한 리렌더링에 영향받지 않는 수 생성
  const dataId = useRef(0);
  //dispatch함수 (문제 생성 함수) - 이거를 9번 실행하게 만들기
  const onCreate = () => {
    for (dataId.current; dataId.current < 10; dataId.current++) {
      dispatch({
        type: "CREATE",
        data: {
          id: dataId.current + 1,
          num1: random[dataId.current],
          num2: random[dataId.current + 1],
          cal: "x",
        },
      });
    }
    dataId.current = 0;
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={onCreate}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
            <RouteTest />
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

// const Mybutton = ({text, type, onClick}) => {
//   return (
//     <button
//       className= {["Mybutton",`Mybutton_${type}`].join(" ")}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// Mybutton.defaultProps = {
//   type: "default",
// };

// export default Mybutton;

// const btnType = ['positive', 'negative'].includes(type)? type : 'default';

//객체 생성함수
//oncreate 함수가 어떻게 이루어 지는지 공부해서 추가하기
//후에 dummydata 삭제하고 useReducer로 교체하기

// console.log(random);

// //랜덤숫자

// const dummyquiz = [
//   { id: 1, num1: ran1, num2: ran2, cal: "x" },
//   { id: 2, num1: ran1, num2: ran2, cal: "x" },
//   { id: 3, num1: ran1, num2: ran2, cal: "x" },
//   { id: 4, num1: ran1, num2: ran2, cal: "x" },
//   { id: 5, num1: ran1, num2: ran2, cal: "x" },
//   { id: 6, num1: ran1, num2: ran2, cal: "x" },
//   { id: 7, num1: ran1, num2: ran2, cal: "x" },
//   { id: 8, num1: ran1, num2: ran2, cal: "x" },
//   { id: 9, num1: ran1, num2: ran2, cal: "x" },
// ];
