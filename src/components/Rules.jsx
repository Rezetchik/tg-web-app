import React from 'react';
import style from '../scss/Rules.module.scss';

const Rules = () => {
  return (
    <div className={style.Frame}>
      <div className={style.Wrapper}>
        <div className={style.Container}>
          <div className={style.Block}>
            <div className={style.Header}>
              <div className={style.Stripe}></div>
              <div className={style.HeaderText}>
                <span>ПРАВИЛА</span>
              </div>
              <div className={style.Stripe}></div>
              <div className={style.Stripe}></div>
            </div>
            <div className={style.Text}>
              <div className={style.Pre}>
                <pre>
                  Ежедневно тебе доступно
                  <br /> <span style={{ color: '#00C7B1' }}>5 ключей.</span> Открывай кейсы
                  <br /> и собирай осколки фрибета.
                </pre>
              </div>
              <div className={style.Pre}>
                <pre>
                  <span style={{ color: '#00C7B1' }}>Меняй осколки на фрибеты.</span> <br />
                  За каждого приглашенного <br />
                  друга получай <span style={{ color: '#00C7B1' }}>5 ключей.</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
