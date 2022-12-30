import css from './Button.module.css';

export const Button = ({ title, handleState, name }) => {
  return (
    <button
      className={css.button}
      name={name}
      onClick={e => handleState(e.target.name)}
    >
      {title}
    </button>
  );
};
