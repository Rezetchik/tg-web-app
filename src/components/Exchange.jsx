import React from 'react';
import style from '../scss/Exchange.module.scss';

import logo from '../assets/exchange/exchange.svg';

const Exchange = () => {
  const [summ, setSumm] = React.useState(0);
  const skeleton = Array.from({ length: 18 }, (_, id) => ({ id: id + 1, color: '#D9D9D9' }));
  const [strikeMassA, setStrikeMassA] = React.useState(skeleton);
  const [strikeMassB, setStrikeMassB] = React.useState(skeleton);
  const [strikeMassC, setStrikeMassC] = React.useState(skeleton);
  const [progressA, setProgeressA] = React.useState(false);
  const [progressB, setProgeressB] = React.useState(false);
  const [progressC, setProgeressC] = React.useState(false);

  const strikeMass = (value) => {
    let done = Math.floor((summ / value) * 18);
    let massDone = Array.from({ length: done }, () => ({ color: '#00c7b1' }));
    let massNotDone = Array.from({ length: 18 - done }, () => ({ color: '#D9D9D9' }));
    let massСoncat = massDone.concat(massNotDone);
    let mass = massСoncat.map((item, index) => ({ ...item, id: index + 1 }));
    return mass;
  };

  React.useEffect(() => {
    if (summ < 500) {
      setStrikeMassA(strikeMass(500));
      setStrikeMassB(strikeMass(1000));
      setStrikeMassC(strikeMass(2000));
    } else if (summ >= 500 && summ < 1000) {
      setProgeressA(true);
      setStrikeMassA(Array.from({ length: 18 }, (_, id) => ({ id: id + 1, color: '#00c7b1' })));
      setStrikeMassB(strikeMass(1000));
      setStrikeMassC(strikeMass(2000));
    } else if (summ >= 1000 && summ < 2000) {
      setProgeressA(true);
      setStrikeMassA(Array.from({ length: 18 }, (_, id) => ({ id: id + 1, color: '#00c7b1' })));
      setProgeressB(true);
      setStrikeMassB(Array.from({ length: 18 }, (_, id) => ({ id: id + 1, color: '#00c7b1' })));
      setStrikeMassC(strikeMass(2000));
    } else {
      let mass = Array.from({ length: 18 }, (_, id) => ({ id: id + 1, color: '#00c7b1' }));
      setProgeressA(true);
      setStrikeMassA(mass);
      setProgeressB(true);
      setStrikeMassB(mass);
      setProgeressC(true);
      setStrikeMassC(mass);
    }
  }, []);

  return (
    <div className={style.Frame}>
      <div className={style.Wrapper}>
        <div className={style.Container}>
          <div className={style.Block}>
            <div className={style.Header}>
              <img className={style.Icon} src={logo} alt="logo" />
            </div>
            <div className={style.Text}>
              <span className={style.H1}>!НОВОЕ УМЕНИЕ!</span>
              <br />
              <span className={style.H2}>ОБМЕН НА ФРИБЕТЫ!</span>
            </div>
            <div className={style.ProgressDiv}>
              <div className={progressA ? style.ProgressDone : style.Progress}>
                <div className={style.ProgressText}>
                  <div className={style.FREEBET}>
                    <span>FREEBET</span>
                  </div>
                  <div className={style.Value}>
                    <span className={style.Nominal}>500</span>
                    <span className={style.Valute}>p</span>
                  </div>
                </div>
                <div className={style.StrikeMass}>
                  {strikeMassA.map((mass) => (
                    <div
                      className={style.Strike}
                      key={mass.id}
                      style={{ backgroundColor: mass.color }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className={progressB ? style.ProgressDone : style.Progress}>
                <div className={style.ProgressText}>
                  <div className={style.FREEBET}>
                    <span>FREEBET</span>
                  </div>
                  <div className={style.Value}>
                    <span className={style.Nominal}>1000</span>
                    <span className={style.Valute}>p</span>
                  </div>
                </div>
                <div className={style.StrikeMass}>
                  {strikeMassB.map((mass) => (
                    <div
                      className={style.Strike}
                      key={mass.id}
                      style={{ backgroundColor: mass.color }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className={progressC ? style.ProgressDone : style.Progress}>
                <div className={style.ProgressText}>
                  <div className={style.FREEBET}>
                    <span>FREEBET</span>
                  </div>
                  <div className={style.Value}>
                    <span className={style.Nominal}>2000</span>
                    <span className={style.Valute}>p</span>
                  </div>
                </div>
                <div className={style.StrikeMass}>
                  {strikeMassC.map((mass) => (
                    <div
                      className={style.Strike}
                      key={mass.id}
                      style={{ backgroundColor: mass.color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
