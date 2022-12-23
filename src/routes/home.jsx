import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import AllCoins from "../components/allcoins/allcoins";
import Leaderboard from "../components/leaderboard/leaderboard";
import Events from "../components/events/events";
import Sidebar from "../components/sidebar/sidebar";
import Search from "../components/search";
import HamburgerComponent from "../components/sidebar/hamburger";

function Home() {
  return (
    <div className={styles.App}>
      <Sidebar />

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.top_level}>
            <HamburgerComponent styles={styles} />

            <div className={styles.search}>
              <Search />
            </div>
          </div>

          <main>
            <div className={styles.leaders_and_coins}>
              <Leaderboard />
              <AllCoins />
            </div>

            <Events />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
