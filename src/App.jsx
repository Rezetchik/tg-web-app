import React from 'react';
import style from './scss/App.module.scss';
import { Suspense, lazy } from 'react';

// import Case from './components/CaseBox';
// import Tabs from './components/Tabs';
// import Rules from './components/Rules';
// import Keys from './components/Keys';
// import Exchange from './components/Exchange';

import { Routes, Route, Navigate } from 'react-router-dom';

const Case = lazy(() => import('./components/CaseBox'));
const Tabs = lazy(() => import('./components/Tabs'));
const Rules = lazy(() => import('./components/Rules'));
const Keys = lazy(() => import('./components/Keys'));
const Exchange = lazy(() => import('./components/Exchange'));

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
        <Route
          path="/rule"
          element={
            <Suspense fallback={<></>}>
              <Rules />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Case />
            </Suspense>
          }
        />
        <Route
          path="/exchange"
          element={
            <Suspense fallback={<></>}>
              <Exchange />
            </Suspense>
          }
        />
        <Route
          path="/keys"
          element={
            <Suspense fallback={<></>}>
              <Keys />
            </Suspense>
          }
        />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
