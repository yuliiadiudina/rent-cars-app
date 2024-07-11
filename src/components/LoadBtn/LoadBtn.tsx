import React, {FC} from "react";
import css from "./LoadBtn.module.css"

interface LoadBtnProps {
  onClick: () => void;
}

const LoadBtn: FC<LoadBtnProps> = ({ onClick }) => (
  <button type="button" className={css.loadBtn} onClick={onClick}>
    Load More
  </button>
);

export default LoadBtn;