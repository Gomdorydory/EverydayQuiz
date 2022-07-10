import { useContext } from "react";
import { DiaryStateContext } from "../App";
import "./question.css";

const Questions = () => {
  const dummydata = useContext(DiaryStateContext);
  console.log(dummydata);

  dummydata.map((it) => console.log(it.num1));

  return (
    <div>
      {dummydata.map((it) => (
        <div key={it.id}>
          <div className="questions">
            <div className="questionNum">문{it.id}</div>
            <div>
              <div className="process">
                <div className="num1"> {it.num1} </div>
                <div className="process_2">
                  <div className="cal"> {it.cal} </div>
                  <div className="num2"> {it.num2} </div>
                </div>
              </div>

              <div className="processed">
                <div className="num"> {it.num1 * it.num2} </div>
              </div>
            </div>
          </div>
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
