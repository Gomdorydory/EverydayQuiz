import React, { useEffect, useReducer, useRef } from "react";
import Questions from "../components/questions";

const Quiz = () => {
  //문제의 개수 설정
  let QuestionLength = 12;

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
        if (newState.length > QuestionLength) {
          newState = [];
          newState = [newItem];
        }
      }
      default:
        return newState;
    }
  };

  //useReducer
  const [data, dispatch] = useReducer(reducer, []);

  //useRef를 통한 리렌더링에 영향받지 않는 수 생성
  const dataId = useRef(0);

  //dispatch함수 (문제 생성 함수)
  const onCreate = () => {
    for (dataId.current; dataId.current < QuestionLength; dataId.current++) {
      const num1 = Math.floor(Math.random() * 90 + 10);
      const num2 = Math.floor(Math.random() * 90 + 10);
      dispatch({
        type: "CREATE",
        data: {
          id: dataId.current + 1,
          num1: num1,
          num2: num2,
          cal: "x",
        },
      });
    }
    dataId.current = 0;
  };

  useEffect(onCreate, []); //페이지 시작 시 바로

  return (
    <div className="page">
      <h1>두자리수의 곱셈 세로셈</h1>
      <div>
        <button onClick={onCreate}> 문제 만들기 </button>
      </div>
      <div className="sheet">
        <Questions data={data} />
      </div>
    </div>
  );
};
export default Quiz;

//useRef사용 //사용자 선택할 수 있게
// let QuestionRef = useRef();
// let QuestionLength = QuestionRef.defaultValue; //기존문제 개수보다 새로 설정된 문제 개수가 많으면 문제가 추가 되지 않는 오류 발견.
