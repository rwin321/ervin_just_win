import { memo } from "react";

const IsFive: React.FC<{ value: number }> = memo(({ value }) => {
  console.log("isFive rerendered");
  return <div>{value === 5 ? "value is 5 😀" : "value is not 5 😓"}</div>;
});

export default IsFive;
