import { PropTypes } from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <h3 className={css.title}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
