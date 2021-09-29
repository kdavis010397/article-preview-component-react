import classes from "./Profile.module.css";

import avatar from "../images/avatar-michelle.jpg";

import { Fragment } from "react/cjs/react.production.min";

import Share from "./Share";
import ShareButton from "./ShareButton";
import { useState } from "react";

const Profile = () => {
  const [clicked, setClicked] = useState(false);

  const activeHandler = (bool) => {
    setClicked(bool);
  };

  const shareActive = clicked ? classes.active : "";
  const showProfile = clicked ? classes.hide : "";

  return (
    <Fragment>
      <div className={`${classes["profile-container"]} ${shareActive}`}>
        <div className={`${classes.profile} ${showProfile}`}>
          <img src={avatar} alt="Michelle" />

          <div className={classes["name-date-container"]}>
            <h4>Michelle Appleton</h4>
            <p>28 Jun 2020</p>
          </div>
        </div>

        {clicked && <Share />}
        <ShareButton setActive={activeHandler} />
      </div>
    </Fragment>
  );
};

export default Profile;
