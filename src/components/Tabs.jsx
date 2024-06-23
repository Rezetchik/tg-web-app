import React from 'react';
import style from '../scss/Tabs.module.scss';
import { Link, useLocation } from 'react-router-dom';

import cases from '../assets/tabs/cases.svg';
import exchange from '../assets/tabs/exchange.svg';
import keys from '../assets/tabs/keys.svg';
import rules from '../assets/tabs/rules.svg';

const Tabs = () => {
  let footerFlex = React.useRef();
  const location = useLocation();
  const [width, setwidth] = React.useState(0);
  const [padding, setPadding] = React.useState(0);
  const [tabsActive, setTabsActive] = React.useState(location.pathname);
  const allTabs = ['/rule', '/', '/exchange', '/keys'];

  const tabsClick = (id) => {
    setTabsActive(id);
  };

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setwidth(entries[0].contentRect.width);
      setPadding((entries[0].contentRect.width / 100) * 6.94);
    });
    observer.observe(footerFlex.current);
    return () => footerFlex.current && observer.unobserve(footerFlex.current);
  }, []);

  return (
    <div className={style.FooterFlex} ref={footerFlex}>
      <div className={style.Footer} style={{ width: `${width}px`, padding: `0 ${padding}px` }}>
        <Link
          to={allTabs[0]}
          className={allTabs[0] === tabsActive ? style.TabsActive : style.Tabs}
          onClick={() => tabsClick(allTabs[0])}
        >
          <img className={style.TabsIcon} src={rules} alt="rules" style={{ height: `43.59%` }} />
          <span>ПРАВИЛА</span>
        </Link>
        <Link
          to={allTabs[1]}
          className={allTabs[1] === tabsActive ? style.TabsActive : style.Tabs}
          onClick={() => tabsClick(allTabs[1])}
        >
          <img className={style.TabsIcon} src={cases} alt="cases" style={{ height: `46%` }} />
          <span>КЕЙСЫ</span>
        </Link>
        <Link
          to={allTabs[2]}
          className={allTabs[2] === tabsActive ? style.TabsActive : style.Tabs}
          onClick={() => tabsClick(allTabs[2])}
        >
          <img
            className={style.TabsIcon}
            src={exchange}
            alt="exchange"
            style={{ height: `50.77%` }}
          />
          <span>ОБМЕН</span>
        </Link>
        <Link
          to={allTabs[3]}
          className={allTabs[3] === tabsActive ? style.TabsActive : style.Tabs}
          onClick={() => tabsClick(allTabs[3])}
        >
          <img className={style.TabsIcon} src={keys} alt="keys" style={{ height: `49.34%` }} />
          <span>КЛЮЧИ</span>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
