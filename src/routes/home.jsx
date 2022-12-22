import { useEffect, useState } from "react";
import "./home.scss";
import hamburgerMenu from "../assets/menu.svg";
import barSvg from "../assets/bar.svg";
import stackSvg from "../assets/stack.svg";
import linkSvg from "../assets/link.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsList } from "../../utils/api";
import { NavLink, useMatch } from "react-router-dom";

function Home() {
  const [coinDetails, setCoinDetails] = useState([]);
  const [coinsLoading, setCoinsLoading] = useState(true);
  const match = useMatch("/");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchCoinsList,
  });

  useEffect(() => {
    console.log("loading", isLoading);
    console.log(isError);
    console.log("deets", data);
  }, [isLoading, data]);

  return (
    <div className="App">
      <div className="sidebar">
        <div>
          <div className="hamburger">
            <img src={hamburgerMenu} alt="Hamburger Menu" />
          </div>

          <div className="options__container">
            <div className="options">
              <div className={Boolean(match) ? "active" : ""}>
                <NavLink to="/">
                  <img src={stackSvg} alt="" />
                </NavLink>
              </div>

              <div>
                <NavLink to="/info">
                  <img src={barSvg} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <section className="market_leaders">
                <h1>Market leaders</h1>

                <div className="leaderboard">
                  <div className="leaderboard__card">
                    <h2>Bitcoin(BTC)</h2>
                    <p>$1,793,89</p>
                  </div>
                  <div className="leaderboard__card">
                    <h2>Bitcoin(BTC)</h2>
                    <p>$1,793,89</p>
                  </div>
                  <div className="leaderboard__card">
                    <h2>Bitcoin(BTC)</h2>
                    <p>$1,793,89</p>
                  </div>
                  <div className="leaderboard__card">
                    <h2>Bitcoin(BTC)</h2>
                    <p>$1,793,89</p>
                  </div>
                </div>
              </section>

              <section className="all_coins">
                <h1>All Coins</h1>

                <div className="coins_list">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                    <div key={idx} className="coin">
                      <p>name (symbol)</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="all_events">
              <h1>Events</h1>
              <div className="events__list">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                  <div key={idx} className="event__card">
                    <h2>Token2049 London</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Modi expedita incidunt officia.
                    </p>

                    <div className="event__link">
                      <a href="">
                        <img src={linkSvg} alt="Go see event" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
