import { useContext } from "react";
import { DiaryStateContext } from "../App";
import "./question.css";

const Questions = (data) => {
  return (
    <div className="all">
      {data.data.map((it) => (
        <div key={it.id} className="question">
          <div className="QNum">{it.id}</div>
          <div className="N num1"> {it.num1} </div>
          <div className="cal"> {it.cal} </div>
          <div className="N num2"> {it.num2} </div>
          <div className="N result"> {it.num1 * it.num2} </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;

// const Dummy = () => {
//   const [cal, setcal] = useState("");
//   const [ran1, setran1] = useState(0);
//   const [ran2, setran2] = useState(0);

//   const callRan1 = setran1(Math.floor(Math.random()*100));
//   const callRan2 = setran2(Math.floor(Math.random()*100));

//   useEffect(callRan1, []);
//   useEffect(callRan2, []);

// const dummydata = [
//   {
//     prevNum : {ran1},
//     postNum : {ran2},
//     cal : {cal}
//   }
// ]

// }
// export {Dummy};

//문제 번호 자동 출력 for 반복할 때마다 +!

// 컴포넌트 반복 출력 for 반복할 때마다 함수 리렌더링

// 문제가 반복될 때, 그리드 모양으로 출력되기

// 도대체 무슨 일이야
