import React from 'react';

import style from '../scss/Case.module.scss';

import fifty from '../assets/case/prize/50.svg';
import hundred from '../assets/case/prize/100.svg';
import twoHundred from '../assets/case/prize/200.svg';
import fiveHundred from '../assets/case/prize/500.svg';
import sevenHundred from '../assets/case/prize/700.svg';
import thousand from '../assets/case/prize/1000.svg';

import pazlOne from '../assets/case/ruletka/pazl/pazl1.svg';
import pazlTwo from '../assets/case/ruletka/pazl/pazl2.svg';
import pazlThree from '../assets/case/ruletka/pazl/pazl3.svg';
import pazlFour from '../assets/case/ruletka/pazl/pazl4.svg';
import pazlFive from '../assets/case/ruletka/pazl/pazl5.svg';
import pazlSix from '../assets/case/ruletka/pazl/pazl6.svg';
import pazlSeven from '../assets/case/ruletka/pazl/pazl7.svg';
import pazlEight from '../assets/case/ruletka/pazl/pazl8.svg';
import pazlNine from '../assets/case/ruletka/pazl/pazl9.svg';
import pazlTen from '../assets/case/ruletka/pazl/pazl10.svg';
import pazlEleven from '../assets/case/ruletka/pazl/pazl11.svg';

import Box from '../components/Box';

const itemsEqual = [
  {
    index: 6,
    dropChance: 0.1,
    back: thousand,
    filter: 'drop-shadow(0 0 14.25px #ff90f4) drop-shadow(0 0 41.6px #ff45d6)',
  },
  {
    index: 5,
    dropChance: 0.1,
    back: sevenHundred,
    filter: 'drop-shadow(0 0 14.25px #C890FF) drop-shadow(0 0 41.6px #9745FF)',
  },
  {
    index: 4,
    dropChance: 0.1,
    back: fiveHundred,
    filter: 'drop-shadow(0 0 11.4px #90D7FF) drop-shadow(0 0 33.28px #45BCFF)',
  },
  {
    index: 3,
    dropChance: 0.1,
    back: twoHundred,
    filter: 'drop-shadow(0 0 9.975px #00C7B1) drop-shadow(0 0 29.12px #00C7B1)',
  },
  {
    index: 2,
    dropChance: 0.2,
    back: hundred,
    filter: 'drop-shadow(0 0 1.13px #00C7B1) drop-shadow(0 0 20.8px #00C7B1)',
  },
  {
    index: 1,
    dropChance: 0.4,
    back: fifty,
    filter: 'none',
  },
];

const itemsSpread = [
  {
    index: 6,
    dropChance: 0.01,
    back: thousand,
    filter: 'drop-shadow(0 0 14.25px #ff90f4) drop-shadow(0 0 41.6px #ff45d6)',
  },
  {
    index: 5,
    dropChance: 0.02,
    back: sevenHundred,
    filter: 'drop-shadow(0 0 14.25px #C890FF) drop-shadow(0 0 41.6px #9745FF)',
  },
  {
    index: 4,
    dropChance: 0.05,
    back: fiveHundred,
    filter: 'drop-shadow(0 0 11.4px #90D7FF) drop-shadow(0 0 33.28px #45BCFF)',
  },
  {
    index: 3,
    dropChance: 0.1,
    back: twoHundred,
    filter: 'drop-shadow(0 0 9.975px #00C7B1) drop-shadow(0 0 29.12px #00C7B1)',
  },
  {
    index: 2,
    dropChance: 0.2,
    back: hundred,
    filter: 'drop-shadow(0 0 1.13px #00C7B1) drop-shadow(0 0 20.8px #00C7B1)',
  },
  {
    index: 1,
    dropChance: 0.62,
    back: fifty,
    filter: 'none',
  },
];

const items = [
  {
    index: 6,
    dropChance: 0.0005,
    back: thousand,
    filter: 'drop-shadow(0 0 14.25px #ff90f4) drop-shadow(0 0 41.6px #ff45d6)',
  },
  {
    index: 5,
    dropChance: 0.0021,
    back: sevenHundred,
    filter: 'drop-shadow(0 0 14.25px #C890FF) drop-shadow(0 0 41.6px #9745FF)',
  },
  {
    index: 4,
    dropChance: 0.0098,
    back: fiveHundred,
    filter: 'drop-shadow(0 0 11.4px #90D7FF) drop-shadow(0 0 33.28px #45BCFF)',
  },
  {
    index: 3,
    dropChance: 0.0421,
    back: twoHundred,
    filter: 'drop-shadow(0 0 9.975px #00C7B1) drop-shadow(0 0 29.12px #00C7B1)',
  },
  {
    index: 2,
    dropChance: 0.1808,
    back: hundred,
    filter: 'drop-shadow(0 0 1.13px #00C7B1) drop-shadow(0 0 20.8px #00C7B1)',
  },
  {
    index: 1,
    dropChance: 0.7647,
    back: fifty,
    filter: 'none',
  },
];

function Case() {
  const slider = React.useRef(null);
  const [arr, setArr] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [active, setActive] = React.useState(true);
  const [prize, setPrize] = React.useState([]);
  const [ruletka, setRuletka] = React.useState(true);
  const [pazl, setPazl] = React.useState(true);
  const [clickBox, setClickBox] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  function Perebor() {
    const length = 44;
    const numbers = [...Array(length)];
    for (let i = 0; i < numbers.length - 4; i += 1) {
      const chance = Math.random();
      let current = 0;
      for (const item of itemsSpread) {
        if (current <= chance && chance < current + item.dropChance) {
          numbers[i] = item;
        }
        current += item.dropChance;
      }
    }
    for (let i = 40; i < numbers.length - 3; i += 1) {
      const chance = Math.random();
      let current = 0;
      for (const item of itemsEqual) {
        if (current <= chance && chance < current + item.dropChance) {
          numbers[i] = item;
        }
        current += item.dropChance;
      }
    }
    for (let i = 41; i < numbers.length; i += 1) {
      const chance = Math.random();
      let current = 0;
      for (const item of items) {
        if (current <= chance && chance < current + item.dropChance) {
          numbers[i] = item;
        }
        current += item.dropChance;
      }
    }
    const data = numbers.map((item, index) => ({ ...item, id: index + 1 }));
    setArr(data);
  }

  // const newPerebor = React.useCallback(() => {
  //   const newArr = arr.slice(40);
  //   const length = 40;
  //   const numbers = [...Array(length)];
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     const chance = Math.random();
  //     let current = 0;
  //     for (const item of items) {
  //       if (current <= chance && chance < current + item.dropChance) {
  //         numbers[i] = item;
  //       }
  //       current += item.dropChance;
  //     }
  //   }
  //   newArr.forEach((e) => {
  //     delete e.id;
  //   });
  //   const mass = newArr.concat(numbers);
  //   const data = mass.map((item, index) => ({ ...item, id: index + 1 }));
  //   setArr(data);
  // }, [arr]);

  React.useEffect(() => {
    if (flag) {
      // newPerebor();
      setFlag(false);
      setRuletka(false);
      setTimeout(() => {
        setPazl(false);
        setHidden(true);
      }, 1100);
      setTimeout(() => {
        setHidden(false);
        setActive(true);
        setRuletka(true);
        slider.current.childNodes.forEach((e) => {
          e.style = `transform: translateX(0px); transition: 0s`;
        });
        setPazl(true);
        Perebor();
        setClickBox(false);
      }, 3500);
    }
  }, [flag]);

  React.useEffect(() => {
    Perebor();
  }, []);

  let position = 0;

  const go = () => {
    if (flag === false) {
      setPrize(arr[41]);
      // position -= 4388.958;
      position -= Math.round(Math.random() * (4435 - 4350) + 4350);
      slider.current.childNodes.forEach((e) => {
        e.style = `transform: translateX(${position}%)`;
      });
      // setTimeout(() => {
      //   setFlag(true);
      // }, 15100);
    }
  };

  // console.log(prize);

  return (
    <div className={style.Wrapper}>
      <div className={style.Container}>
        <Box
          setActive={setActive}
          spin={go}
          setRuletka={setRuletka}
          clickBox={clickBox}
          hidden={hidden}
          setClickBox={setClickBox}
        />
        <div className={active ? style.AnimateHidden : style.Animate}>
          <div className={ruletka ? style.Content : style.ContentAnimate}>
            <div className={ruletka ? style.Ruletka : style.RuletkaAnimate} ref={slider}>
              {arr.map(({ id, back, filter }) => (
                <div key={id} className={style.Box}>
                  <img src={back} alt="value" style={{ filter: filter }} />
                </div>
              ))}
            </div>
            <div className={style.BorderTop}></div>
            <div className={style.BorderBottom}></div>
            <div className={ruletka ? style.Cursor : style.CursorAnimate}></div>
            <div className={pazl ? style.PazlHidden : style.Pazl}>
              <img className={style.PazlOne} src={pazlOne} alt="Pazl" />
              <img className={style.PazlTwo} src={pazlTwo} alt="Pazl" />
              <img className={style.PazlThree} src={pazlThree} alt="Pazl" />
              <img className={style.PazlFour} src={pazlFour} alt="Pazl" />
              <img className={style.PazlFive} src={pazlFive} alt="Pazl" />
              <img className={style.PazlSix} src={pazlSix} alt="Pazl" />
              <img className={style.PazlSeven} src={pazlSeven} alt="Pazl" />
              <img className={style.PazlEight} src={pazlEight} alt="Pazl" />
              <img className={style.PazlNine} src={pazlNine} alt="Pazl" />
              <img className={style.PazlTen} src={pazlTen} alt="Pazl" />
              <img className={style.PazlEleven} src={pazlEleven} alt="Pazl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case;
