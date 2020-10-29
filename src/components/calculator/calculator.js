import React from "react";
import Result from "./result";
import UserInput from "./userInput";
import zingchart from "zingchart";
import { Container, Header } from "semantic-ui-react";

Array.eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

String.prototype.titleCase = function () {
  return this.toLowerCase()
    .replace("_", " ")
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

class RetireCalculator extends React.Component {
  constructor(props) {
    super(props);
    const defaultState = {
      future_value: 0,
      annual_retirement_income: 0,
      on_track: true,
      years_data: [],
    };

    this.state = { ...defaultState, ...this.props };
  }

  componentWillMount() {
    this.calculate();
  }

  componentDidMount() {
    this.renderChart();
  }

  shouldComponentUpdate(nextProps, nextState) {
    let dirty = false;
    let changed = [];

    for (let item in this.state) {
      if (Array.isArray(nextState[item])) {
        if (Array.eq(nextState[item], this.state[item])) continue;
        changed.push(item);
        dirty = true;
      } else {
        if (nextState[item] === this.state[item]) continue;
        changed.push(item);
        dirty = true;
      }
    }

    return dirty;
  }

  componentDidUpdate() {
    this.calculate();
    this.renderChart();
  }

  render() {
    const { future_value } = this.state;

    return (
      <div className="row">
        <div className="calc-form col-md-6">
          {Object.keys(this.props).map((name) => {
            return (
              <UserInput
                name={name}
                value={this.state[name]}
                saveToState={this.saveToState.bind(this)}
              />
            );
          })}
        </div>

        <div className="col-md-6">
          <div id="myChart" className="chart" />
          <Result
            msg={`Total Retirement Savings: ${this.toUsd(future_value)}`}
            type="info"
          />
        </div>
      </div>
    );
  }

  renderChart() {
    const labels = this.getChartLabels();
    const config = {
      id: "myChart",
      data: {
        "scale-x": { labels },
        type: "area",
        title: { text: "Estimated Retirement Savings" },
        series: [{ values: this.state.years_data }],
      },
    };
    zingchart.render(config);
  }

  getChartLabels() {
    const years = Array.from(new Array(this.getYearsUntilRetirement()));
    return years.map((_, i) => i + this.state.current_age + 1);
  }

  getYearsUntilRetirement() {
    let { current_age, retirement_age } = this.state;
    return retirement_age - current_age;
  }

  saveToState(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  calculate() {
    const { years_after_retirement, desired_retirement_income } = this.state;
    const { future_value, years_data } = this.futureValue();
    const annual_retirement_income = future_value / years_after_retirement;
    const on_track =
      annual_retirement_income > desired_retirement_income ? true : false;

    this.setState({
      years_data,
      future_value: this.toUsd(future_value),
      annual_retirement_income: this.toUsd(annual_retirement_income),
      on_track,
    });
  }

  futureValue() {
    let { annual_deposit, interest_rate, current_savings } = this.state;
    console.log(annual_deposit);
    let int = interest_rate / 100;
    let years_data = [];
    let years_until_retirement = this.getYearsUntilRetirement();

    console.log("years_until_retirement", years_until_retirement);
    var i;
    let future_value;
    for (i = 1; i < years_until_retirement + 1; i++) {
      let last_year_plus_annual_deposit = annual_deposit * i;
      let interest_earned = last_year_plus_annual_deposit * int;
      let get_sum = last_year_plus_annual_deposit + interest_earned;
      let new_sum = parseFloat(get_sum).toFixed(0);

      years_data.push(new_sum);
      if (i === years_until_retirement) {
        future_value = new_sum;
      }
    }
    years_data = years_data.map(Number);

    return { future_value, years_data };
  }

  toUsd(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}

const initial_data = {
  current_age: 25,
  retirement_age: 68,
  current_savings: 1000,
  annual_deposit: 7000,
  interest_rate: 8,
};

const Calculator = () => (
  <div>
    <Container text>
      <Header as="h1">Retirement Calculator</Header>
      <Header as="h2"></Header>
      <RetireCalculator {...initial_data} />
    </Container>
  </div>
);

export default Calculator;
