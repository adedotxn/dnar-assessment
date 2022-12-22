import styles from "./exchange-ranking.module.scss";
import arrowRightSvg from "../../assets/arrow-right.svg";
import arrowDownSvg from "../../assets/arrow-down.svg";

const ExchangeRankingCard = ({ coinDetails }) => {
  return (
    <div className={styles.exchange_section}>
      <section className={styles.exchange_card}>
        <h2>Exchange</h2>

        <div className={styles.details}>
          <div className={styles.sell}>
            <p>Sell</p>
            <p className={styles.amount}>6700</p>
            <p>
              USD <img src={arrowDownSvg} alt="" />
            </p>
          </div>

          <div className={styles.buy}>
            <p>Buy</p>
            <p className={styles.amount}>0.609898</p>
            <p>
              USD
              <img src={arrowDownSvg} alt="" />
            </p>
          </div>

          <div className={styles.summary}>
            <p>1BTC = 0.WEIUWEIU</p>

            <button>
              Exchange
              <img src={arrowRightSvg} alt="Coin exchange button" />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.rank_card}>
        <h2>Alexa Rank</h2>
        <p>{coinDetails.coingecko_rank}</p>
      </section>
    </div>
  );
};

export default ExchangeRankingCard;
