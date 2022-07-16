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

//component App
function App() {
  return (
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

// 랜덤 숫자로 이루어진 배열 뽑아내기  (로또)
// let arraylength = 6;

// const numbers = Array(arraylength)
//   .fill()
//   .map((item, index) => index + 1);

// const random = [];

// while (arraylength > 0) {
//   const num = Math.floor(Math.random() * 100);
//   if (0 < num && num < 46) {
//     random.push(num);
//     arraylength -= 1;
//   }
// }

// console.log(random);
