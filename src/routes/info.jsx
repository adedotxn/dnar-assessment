import { useEffect, useState } from "react";
import hamburgerMenu from "../assets/menu.svg";
import barSvg from "../assets/bar.svg";
import stackSvg from "../assets/stack.svg";
import linkSvg from "../assets/link.svg";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsList } from "../../utils/api";
import styles from "./info.module.scss";
import { NavLink, useMatch } from "react-router-dom";
import { ChartData } from "../../data";
import MyCharts from "../components/chart";

function Info() {
  const [coinDetails, setCoinDetails] = useState([]);
  const [coinsLoading, setCoinsLoading] = useState(true);
  const match = useMatch("/info");

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
    <div className={styles.App}>
      <div className={styles.sidebar}>
        <div>
          <div className={styles.hamburger}>
            <img src={hamburgerMenu} alt="Hamburger Menu" />
          </div>

          <div className={styles.options__container}>
            <div className={styles.options}>
              <div>
                <NavLink to="/">
                  <img src={stackSvg} alt="" />
                </NavLink>
              </div>

              <div className={Boolean(match) ? styles.active : ""}>
                <NavLink to="/info">
                  <img src={barSvg} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.top_level}>
            <div className={[styles.hamburger, styles.mobile].join(" ")}>
              <img src={hamburgerMenu} alt="Hamburger Menu" />
            </div>

            <div className={styles.search}>
              <input type="text" name="Search bar" placeholder="Search" />
            </div>

            <div className={styles.calender}></div>
          </div>

          <main>
            <div className={styles.chart_and_exchange}>
              <section className={styles.chart}>
                <h1>$29, 800</h1>

                <div>
                  <MyCharts />
                </div>
              </section>

              <div className={styles.exchange_section}>
                <section className={styles.exchange_card}>
                  <h2>Exchange</h2>

                  <div className={styles.details}>
                    <div className={styles.sell}>
                      <p>Sell</p>
                      <p className={styles.amount}>6700</p>
                      <p>USD</p>
                    </div>

                    <div className={styles.buy}>
                      <p>Buy</p>
                      <p className={styles.amount}>0.609898</p>
                      <p>USD</p>
                    </div>

                    <div className={styles.summary}>
                      <p>1BTC = 0.WEIUWEIU</p>

                      <button>
                        Exchange <img src={stackSvg} alt="" />{" "}
                      </button>
                    </div>
                  </div>
                </section>

                <section className={styles.rank_card}>
                  <h2>Alexa Rank</h2>
                  <p>9760</p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className={styles.info_section}>
        <h1>Info Card</h1>

        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
          illum, accusamus provident itaque corporis!
        </div>

        <div className={styles.links}>
          <div>
            Website
            <img src={stackSvg} alt="" />
          </div>

          <div>
            <img src={hamburgerMenu} alt="" />
          </div>

          <div>
            <img src={barSvg} alt="" />
          </div>
        </div>

        <div className={styles.facts}>
          <h2>Facts</h2>

          <div className={styles.facts_1}>
            <div>
              <p>Hashing Algorithm</p>
              <p>SHA 256</p>
            </div>

            <div>
              <p>Country Origin</p>
              <p>Unknown</p>
            </div>

            <div>
              <p>Category</p>
              <p>Cryptocurrency</p>
            </div>
          </div>

          <div className={styles.facts_2}>
            <div>
              <div>
                <p>Total Supply</p>
                <p>skdjksjd</p>
              </div>

              <div>
                <p>Max Supply</p>
                <p>0932490.00</p>
              </div>

              <div>
                <p>Circulating</p>
                <p>1022038.33</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const LineChart = () => (
  <ResponsiveLine
    data={ChartData}
    margin={{ top: 30, right: 150, bottom: 80, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
export default Info;
