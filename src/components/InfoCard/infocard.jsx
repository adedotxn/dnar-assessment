import styles from "./infocard.module.scss";
import globeSvg from "../../assets/globe.svg";
import redditSvg from "../../assets/reddit.svg";
import githubSvg from "../../assets/github.svg";
import PropTypes from "prop-types";

const InfoCard = ({ coinDetails }) => {
  return (
    <section className={styles.info_section}>
      <h1>Info Card</h1>

      <div className={styles.coin__image}>
        <img src={coinDetails.image.small} alt="" />
      </div>

      <div className={styles.description}>
        <p>
          {coinDetails.name}({coinDetails.symbol})
        </p>
        <p>{coinDetails.description.en}</p>
      </div>

      <div className={styles.links}>
        <div>
          Website
          <a href={coinDetails.links.homepage[0]}>
            <img src={globeSvg} alt="" />
          </a>
        </div>

        <div>
          <a href={coinDetails.links.subreddit_url}>
            <img src={redditSvg} alt="Reddit Link" />
          </a>
        </div>

        <div>
          <a href={coinDetails.links.repos_url.github}>
            <img src={githubSvg} alt="" />
          </a>
        </div>
      </div>

      <div className={styles.facts}>
        <h2>Facts</h2>

        <div className={styles.facts_1}>
          <div>
            <p>Hashing Algorithm: </p>
            <p>
              {coinDetails.hashing_algorithm === null
                ? "Unknown"
                : coinDetails.hashing_algorithm}
            </p>
          </div>

          <div>
            <p>Country Origin: </p>
            <p>
              {coinDetails.country_origin === "" || null
                ? "Unknown"
                : coinDetails.country_origin}
            </p>
          </div>

          <div>
            <p>Category: </p>
            <p>{coinDetails.categories[0]}</p>
          </div>
        </div>

        <div className={styles.facts_2}>
          <div>
            <div>
              <p>Total Supply:</p>
              <p>
                {coinDetails.market_data.total_supply === null || ""
                  ? "Unknown"
                  : coinDetails.market_data.total_supply}
              </p>
            </div>

            <div>
              <p>Max Supply:</p>
              <p>
                {coinDetails.market_data.max_supply === null || ""
                  ? "Unknown"
                  : coinDetails.market_data.max_supply}
              </p>
            </div>

            <div>
              <p>Circulating:</p>
              <p>
                {coinDetails.market_data.circulating_supply === null || ""
                  ? "Unknown"
                  : coinDetails.market_data.circulating_supply.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

InfoCard.propTypes = {
  coinDetails: PropTypes.object,
};

export default InfoCard;
