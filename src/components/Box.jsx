import React from 'react';
import style from '../scss/Box.module.scss';

import box from '../assets/case/suprizaBox/box.svg';
import star from '../assets/case/suprizaBox/star.svg';

const Box = ({ setActive, spin, clickBox, hidden, setClickBox }) => {
  const go = () => {
    let startTime = null;
    setClickBox(true);
    // setTimeout(() => {
    //   setActive(false);
    // }, 900);
    // setTimeout(() => {
    //   spin();
    // }, 2300);
    function activnost(time) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = (time - startTime) / 900;
      if (progress < 1) {
        requestAnimationFrame(activnost);
      } else {
        startTime = null;
        function spinGo(time) {
          if (startTime === null) {
            startTime = time;
          }
          const progress = (time - startTime) / 1400;
          if (progress < 1) {
            requestAnimationFrame(spinGo);
          } else {
            spin();
          }
        }
        setActive(false);
        requestAnimationFrame(spinGo);
      }
    }
    requestAnimationFrame(activnost);
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
