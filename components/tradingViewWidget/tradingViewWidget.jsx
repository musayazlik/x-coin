import {useEffect} from 'react';

import styles from './tradingViewWidget.module.css';

const TradingViewWidget = ({data}) => {

  if (!data) return null;

  const jsonData = JSON.parse(data);


  jsonData.container_id = "tradingview_3ab16";


  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new TradingView.widget(
        jsonData
      );
    };

    document.body.appendChild(script);

  }, []);

  return (
    <div
      className={`${styles.tradingviewWidgetContainer} h-full w-full min-h-[400px] my-6`}
    >
      <div id="tradingview_3ab16" className={"h-full w-full min-h-[400px]"}
      ></div>

    </div>
  );
};

export default TradingViewWidget;
