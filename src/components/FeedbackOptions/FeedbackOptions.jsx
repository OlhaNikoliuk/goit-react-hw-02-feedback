import PropTypes from 'prop-types';

import {Button, BtnWrapper} from './FeedbackOptions.styled.js'

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <Button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option}
          </Button>
        );
      })}
    </BtnWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
