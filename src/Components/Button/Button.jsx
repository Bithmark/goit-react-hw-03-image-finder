import css from "./Button.module.css"

const Button = ({ onLoadMore }) => {
  return (
    <button className={css.btn} onClick={onLoadMore} type="button">
      Load more
    </button>
  );
};

export default Button;
