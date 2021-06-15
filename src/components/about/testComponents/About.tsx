import { memo, useState, useCallback } from "react";
import { porpsT } from "../../../types/about";
import CounterFC from "./CounterFC";
import IsFive from "./IsFive";

const About: React.FC<porpsT> = ({ title, subTitle }) => {
  let [counter, setCounter] = useState(0);
  let [counter1, setCounter1] = useState(0);

  console.log("about page rerendered");

  // 1st counter
  const handlePlus = useCallback(() => setCounter(++counter), [counter]);
  const handleMinus = useCallback(() => setCounter(--counter), [counter]);

  // 2nd counter
  const handlePlus1 = useCallback(() => setCounter1(++counter1), [counter1]);
  const handleMinus1 = useCallback(() => setCounter1(--counter1), [counter1]);

  // // counter 1 updated
  // useEffect(() => {
  //   console.log("counter 1 updated");
  // }, [counter]);
  // // counter 2 updated
  // useEffect(() => {
  //   console.log("counter 2 updated");
  //   if (counter1 === 5) setIsFive(true);
  //   else setIsFive(false);
  // }, [counter1]);

  return (
    <div>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <CounterFC
        counter={counter}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        title="counter 1"
      />
      <br />
      <br />
      <br />
      <CounterFC
        counter={counter1}
        handleMinus={handleMinus1}
        handlePlus={handlePlus1}
        title="counter 2"
      />
      <IsFive value={counter1} />
    </div>
  );
};

export default memo(About);
