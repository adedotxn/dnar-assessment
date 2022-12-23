import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchMarketLeaders } from "../../../utils/api";
import styles from "./leaderboard.module.scss";

const Leaderboard = () => {
  //Calling the api to get market leaders from the api
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["marketLeaders"],
    queryFn: fetchMarketLeaders,
  });
  const navigate = useNavigate();

  return (
    <section className={styles.market_leaders}>
      {isLoading || data === undefined ? (
        <p>Loading..</p>
      ) : isError ? (
        <p>An error occured</p>
      ) : (
        <>
          <h1>Market leaders</h1>
          <div className={styles.leaderboard}>
            {data.map((coin) => (
              <div
                key={coin.id}
                onClick={() => navigate(`/info/${coin.id}`)}
                className={styles.leaderboard__card}
              >
                <h2>
                  {coin.name}({coin.symbol})
                </h2>

                <div>
                  <p>${coin.price_change_24h.toFixed(2)}</p>
                  <p>${coin.current_price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Leaderboard;
