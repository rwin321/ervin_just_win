import { memo } from "react";

type CounterT = {
  counter: number;
  handlePlus(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
  handleMinus(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
  title?: string;
};

const CounterFC = memo(
  ({ counter, handlePlus, handleMinus, title }: CounterT) => {
    console.log(`rerendered: ${title}`);

    return (
      <section
        style={{
          width: "250px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto auto",
          border: "1px solid black",
        }}
      >
        {/* <Counter title="Counter:" /> */}
        <h1>{title}</h1>
        <h3
          style={{
            margin: "1.5rem auto",
          }}
        >
          {counter}
        </h3>
        <div>
          <button
            style={{
              padding: "1rem",
              border: "3px solid lightblue",
              marginRight: "2rem",
            }}
            onClick={handlePlus}
          >
            +
          </button>
          <button
            style={{ padding: "1rem", border: "3px solid lightblue" }}
            onClick={handleMinus}
          >
            -
          </button>
        </div>
      </section>
    );
  }
);

export default CounterFC;
