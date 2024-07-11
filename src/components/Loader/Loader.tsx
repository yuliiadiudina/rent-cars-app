import React from "react";
import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3F51B5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        visible={true}
      />
    </div>
  );
};

export default Loader;