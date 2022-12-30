import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.containerBtn}>
        {options.map(option => (
          <button
            type="button"
            key={option}
            className={css.button}
            name={option}
            onClick={option => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleState: PropTypes.func,
};
