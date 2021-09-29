import classes from "./ArticlePreview.module.css";

import heroImage from "../images/drawers.jpg";

import Profile from "./Profile";

const ArticlePreview = () => {
  return (
    <div className={classes["preview-box"]}>
      <div className={classes["hero-frame"]}>
        <img src={heroImage} alt="" />
      </div>
      <section>
        <header>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </header>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <Profile />
      </section>
    </div>
  );
};

export default ArticlePreview;
