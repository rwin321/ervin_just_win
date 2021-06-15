import { Component } from "react";

type CounterState = {
  count: number;
};

type CounterProps = {
  title?: string;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(
    props: CounterProps,
    state: CounterState
  ): CounterState {
    console.log(state, props);
    return state;
  }

  componentDidMount(): void {
    console.log("mounted");
  }

  shouldComponentUpdate(
    nextProps: CounterProps,
    nextState: CounterState
  ): boolean {
    console.log("Should component update");
    return true;
  }

  handlePlus = () =>
    this.setState(({ count }) => ({
      count: ++count,
    }));

  handleMinus = () =>
    this.setState(({ count }) => ({
      count: --count,
    }));

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.state.count}</h3>
        <button
          style={{ padding: "1rem", marginRight: "1rem" }}
          onClick={this.handlePlus}
        >
          +
        </button>
        <button style={{ padding: "1rem" }} onClick={this.handleMinus}>
          -
        </button>
      </div>
    );
  }
}
