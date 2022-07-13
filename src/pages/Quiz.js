import React, { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Questions from "../components/questions";

const Quiz = () => {
  const onCreate = useContext(DiaryDispatchContext);
  return (
    <div className="page">
      <h1>두자리수의 곱셈 세로셈</h1>
      <button onClick={onCreate}> 다른 문제 </button>
      <div className="sheet">
        <Questions />
      </div>
    </div>
  );
};
export default Quiz;

//   let questionNum = 1;

//   for (questionNum=1; questionNum <10; questionNum++){
//     {
//       console.log(questionNum);
//     }
//   }

//내가 사용할 빈배열
//const [data,dispatch] = useReducer(reducer,[]);
//const [qdata,setqdata] = usestate;

//        <section className="row 2">
//<div className="question">
//<Questions />
//</div>
//<div className="question">
//<Questions />
//</div>
//<div className="question">
//<Questions />
//</div>
//</section>
//<section className="row 3">
//<div className="question">
//<Questions />
//</div>
//<div className="question">
//<Questions />
//</div>
//<div className="question">
//<Questions />
//</div>
//</section>
