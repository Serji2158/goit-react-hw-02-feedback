import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOption.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((item) => (
        <button
          className={s.btn}
          key={item}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
      ;
    </>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default FeedbackOptions;
