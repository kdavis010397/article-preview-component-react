import { useState } from "react";

import classes from "./ShareButton.module.css";

const ShareButton = ({ setActive }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
    setActive(!clicked);
  };

  console.log(clicked);

  const active = clicked ? classes.clicked : "";

  return (
    <div
      onClick={clickHandler}
      className={`${classes["share-icon-bg"]} ${active}`}
    >
      <svg
        className={classes["share-icon"]}
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="13"
      >
        <path
          className={active}
          fill="#6E8098"
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
    </div>
  );
};

export default ShareButton;
