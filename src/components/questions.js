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
