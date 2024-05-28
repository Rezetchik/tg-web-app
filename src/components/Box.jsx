import React from 'react';
import style from '../scss/Box.module.scss';

import box from '../assets/case/suprizaBox/box.svg';
import star from '../assets/case/suprizaBox/star.svg';

const Box = ({ setActive, spin, clickBox, hidden, setClickBox }) => {
  // const [clickBox, setClickBox] = React.useState(false);
  // const [hidden, setHidden] = React.useState(false);

  const go = () => {
    setClickBox(true);
    setTimeout(() => {
      setActive(false);
    }, 900);
    setTimeout(() => {
      spin();
    }, 2300);
    // setTimeout(() => {
    //   setHidden(true);
    // }, 19500);
    // setTimeout(() => {
    //   setClickBox(false);
    //   setHidden(false);
    // }, 21000);
  };

  return (
    <>
      <div className={style.DivBox}>
        <div className={hidden ? style.HiddenBox : ''}>
          <img
            className={clickBox ? style.AnimateBox : style.Box}
            src={box}
            onClick={go}
            alt="Box"
          />
        </div>
      </div>
      <div className={style.DivStar}>
        <div className={hidden ? style.HiddenStar : ''}>
          <img
            className={clickBox ? style.AnimateStar : style.Star}
            src={star}
            alt="Star"
            filter="url(#multiply)"
          />
        </div>
      </div>
    </>
  );
};

export default Box;
