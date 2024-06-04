import React from 'react';
import style from './scss/App.module.scss';

import Case from './components/CaseBox';

const tg = window.Telegram.WebApp;

const App = () => {
  React.useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div className={style.App}>
      <div className={style.Frame}>
        <div className={style.FrameWrapper}>
          <div className={style.Header}>
            <span className={style.TextRight}>VHS</span>
            <span className={style.Text}>PARI SEASONS 1 RETRO</span>
            <span className={style.TextLeft}>VHS</span>
          </div>
        </div>
      </div>
      <Case />
    </div>
  );
};

export default App;
