import css from "./LoadBtn.module.css"
const LoadBtn = ({ onClick }) => (
  <button type="button" className={css.loadBtn} onClick={onClick}>
    Load More
  </button>
);

export default LoadBtn;