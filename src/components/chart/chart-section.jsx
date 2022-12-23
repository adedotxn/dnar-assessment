import React from "react";
import LineChart from "./chart";
import styles from "./chart-section.module.scss";
import PropTypes from "prop-types";

const ChartSection = ({ coinDetails }) => {
  return (
    <section className={styles.chart}>
      <div className={styles.chart_stats}>
        <h1 className={styles.price}>
          ${coinDetails.market_data.current_price.usd}
        </h1>
        <p className={styles.percentage}>
          {coinDetails.market_data.price_change_percentage_14d}%
        </p>
      </div>

      <div>
        <LineChart />
      </div>
    </section>
  );
};

ChartSection.propTypes = {
  coinDetails: PropTypes.object,
};

export default ChartSection;
