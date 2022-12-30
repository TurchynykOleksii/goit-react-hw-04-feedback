import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  goodState,
  neutralState,
  badState,
  totalState,
  positiveFeetback,
}) => (
  <>
    <ul className={css.list}>
      <li className={css.item}>Good: {goodState}</li>
      <li className={css.item}>Neutral: {neutralState}</li>
      <li className={css.item}>Bad: {badState}</li>
      <li className={css.item}>Total: {totalState}</li>
      <li className={css.item}>
        Positive Feedback: {!positiveFeetback ? '0' : positiveFeetback}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  goodState: PropTypes.number.isRequired,
  neutralState: PropTypes.number.isRequired,
  badState: PropTypes.number.isRequired,
  totalState: PropTypes.number.isRequired,
  positiveFeetback: PropTypes.number.isRequired,
};
