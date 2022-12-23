import { useEffect, useState } from "react";
import hamburgerMenu from "../assets/menu.svg";
import calenderSvg from "../assets/calender.svg";
import arrowDownSvg from "../assets/arrow-down.svg";
import { useQuery } from "@tanstack/react-query";
import { getSpecificCoinDetails } from "../../utils/api";
import styles from "./info.module.scss";
import Sidebar from "../components/sidebar/sidebar";
import InfoCard from "../components/InfoCard/infocard";
import ExchangeRankingCard from "../components/exchange-ranking/exchange-ranking";
import ChartSection from "../components/chart/chart-section";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Search from "../components/search";
import HamburgerComponent from "../components/sidebar/hamburger";

function Info() {
  const { coinId } = useParams();

  const [coinDetails, setCoinDetails] = useState();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["coinDetails"],
    queryFn: () => getSpecificCoinDetails(coinId),
    enabled: coinId !== "",
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setCoinDetails(data);
    }
  }, [isLoading]);

  if (isLoading || data === undefined || coinDetails === undefined) {
    return <div>Loading</div>;
  }

  if (isError) {
    return (
      <div>
        <p>an error occured, try again</p>
        <p>{error}</p>
      </div>
    );
  }

  // console.log("details", coinDetails);
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

            <div className={styles.calender}>
              <div>
                <img src={calenderSvg} alt="" />
              </div>
              <p>Nov 2022 - July 2022</p>
              <div>
                <img src={arrowDownSvg} alt="" />
              </div>
            </div>
          </div>

          <main>
            <div className={styles.chart_and_exchange}>
              <ChartSection coinDetails={coinDetails} />
              <ExchangeRankingCard coinDetails={coinDetails} />
            </div>
          </main>
        </div>
      </div>

      <InfoCard coinDetails={coinDetails} />
    </div>
  );
}
export default Info;
