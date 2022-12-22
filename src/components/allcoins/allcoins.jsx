import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCoinsList } from "../../../utils/api";
import styles from "./allcoins.module.scss";

const AllCoins = () => {
  const [someCoins, setSomeCoins] = useState([]);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["coinsList"],
    queryFn: fetchCoinsList,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      const top300 = data.slice(0, 300);
      setSomeCoins(top300);
    }
  }, [isLoading]);

  return (
    <section className={styles.all_coins}>
      <h1>All Coins</h1>

      <div className={styles.coins_list}>
        {isLoading ? (
          <p>loadingg</p>
        ) : isError ? (
          <p>an error occured</p>
        ) : someCoins.length === 0 || someCoins === undefined ? (
          <p>loading or sth happened</p>
        ) : (
          someCoins.map((coin, idx) => (
            <div key={coin.id} className={styles.coin}>
              <Link to={`info/${coin.id}`}>
                <p>{coin.name}</p>
                <p>({coin.symbol})</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AllCoins;
