import React, { Component } from "react";
// import PropTypes from "prop-types";

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = Object.values(this.state).reduce(
    (total, value) => total + value,
    0
  );

  countPositiveFeedbackPercentage =
    (this.state.good / this.countTotalFeedback()) * 100;

  render() {
    return (
      <>
        <div>
          <div>
            <h2>Please leave feedback</h2>
            <button type="button" name="good" onClick={this.changeState}>
              GOOD
            </button>
            <button type="button" name="neutral" onClick={this.changeState}>
              NEUTRAL
            </button>
            <button type="button" name="bad" onClick={this.changeState}>
              BAD
            </button>
          </div>
          <div>
            <h2>Statistic</h2>
            <p>GOOD: {this.state.good}</p>
            <p>NEUTRAL: {this.state.neutral}</p>
            <p>BAD: {this.state.bad}</p>
            <p>TOTAL: {this.countTotalFeedback()} </p>
            <p>POSITIVE FEEDBACK: {this.countPositiveFeedbackPercentage()}</p>
          </div>
        </div>
      </>
    );
  }
}

// FeedBack.propType = {

// }

export default FeedBack;
