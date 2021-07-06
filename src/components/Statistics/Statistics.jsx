import PropTypes from 'prop-types';

import {Feedback} from './Statistics.styled'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Feedback>Total: {total}</Feedback>
      <Feedback>PositiveFeedback: {positivePercentage} &#37;</Feedback>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


Statistics.defaultProps={
  positivePercentage: 0,
}

export default Statistics;
