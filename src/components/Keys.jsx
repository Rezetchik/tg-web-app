import React from 'react';
import style from '../scss/Keys.module.scss';

import logo from '../assets/keys/keys.svg';

const Keys = () => {
  return (
    <div className={style.Frame}>
      <div className={style.Wrapper}>
        <div className={style.Container}>
          <div className={style.Block}>
            <div className={style.Header}>
              <img className={style.Icon} src={logo} alt="logo" />
            </div>
            <div className={style.Text}>
              <span className={style.H1}>!НОВОЕ ЗАДАНИЕ!</span>
              <br />
              <span className={style.H2}>ПРИГЛАСИ ДРУГА</span>
            </div>
            <div className={style.TextBottom}>
              <pre>
                Пригласи друга
                <br /> и получи <span style={{ color: '#00C7B1' }}>5 КЛЮЧЕЙ</span>
                <br /> на открытие кейсов!
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keys;
