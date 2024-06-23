import React from 'react';
import style from './scss/App.module.scss';

import Case from './components/CaseBox';
import Tabs from './components/Tabs';
import Rules from './components/Rules';
import Keys from './components/Keys';
import Exchange from './components/Exchange';

import { Routes, Route, Navigate } from 'react-router-dom';

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
      <div className={style.Frame}>
        <Tabs />
      </div>
      <Routes>
        <Route path="/rule" element={<Rules />} />
        <Route path="/" element={<Case />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/keys" element={<Keys />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
