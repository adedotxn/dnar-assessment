import { useEffect, useState } from "react";
import "./home.scss";
import hamburgerMenu from "../assets/menu.svg";
import AllCoins from "../components/allcoins/allcoins";
import Leaderboard from "../components/leaderboard/leaderboard";
import Events from "../components/events/events";
import Sidebar from "../components/sidebar/sidebar";

function Home() {
  return (
    <div className="App">
      <Sidebar />

      <div className="content">
        <div className="container">
          <div className="top_level">
            <div className="hamburger mobile">
              <img src={hamburgerMenu} alt="Hamburger Menu" />
            </div>

            <div className="search">
              <input type="text" name="Search bar" placeholder="Search" />
            </div>
          </div>

          <main>
            <div className="leaders-and-coins">
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
