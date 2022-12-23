import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchCoinsList } from "../../../utils/api";
import styles from "./allcoins.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const AllCoins = () => {
  const [someCoins, setSomeCoins] = useState([]);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["coinsList"],
    queryFn: fetchCoinsList,
  });

  //Slicing list of coins to top 300 because the api returns an array of length > 2000
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
          <p>
            An error occured most likely due to Rate Limiting from CoinGecko.
            Refresh the page after a minute or more
          </p>
        ) : someCoins.length === 0 || someCoins === undefined ? (
          <p>Something happened. Refresh page</p>
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
