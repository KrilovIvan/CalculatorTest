import React, { useState } from "react";
import "./Calculator.css";
import store from "../../store";
const Calculator = () => {
  const [out, setOut] = useState("0");

  const clearLast = () => {
    if (out.length === 1) {
      setOut("0");
    } else setOut(out.slice(0, -1));
  };
  const clearAll = () => {
    setOut("0");
  };
  const calculate = () => {
    try {
      setOut(eval(out, {}).toString());
    } catch (e) {
      setOut("Ошибка вычислений, нажмите CE для продолжения");
    }
  };

  const output = (value) => {
    if (out.length === 1 && out[0] === "0") {
      setOut(value);
    } else setOut(out.concat(value));
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={out} />
      <div className="numbers">
        {store.numbersButtons.map((el) => (
          <button
            className="num"
            onClick={() => {
              output(el.value);
            }}
            key={el.value}
          >
            {el.value}
          </button>
        ))}
        <button className="calculate" onClick={calculate}>
          =
        </button>
      </div>
      <div className="opereations">
        {store.operations.map((el) => (
          <button
            className="oper"
            onClick={() => {
              output(el.value);
            }}
            key={el.value}
          >
            {el.value}
          </button>
        ))}
        <button className="oper" onClick={clearLast}>
          C
        </button>
        <button className="oper" onClick={clearAll}>
          CE
        </button>
      </div>
    </div>
  );
};
export default Calculator;
