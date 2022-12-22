import { useEffect, useState } from "react";
import hamburgerMenu from "../assets/menu.svg";
import { useQuery } from "@tanstack/react-query";
import { getSpecificCoinDetails } from "../../utils/api";
import styles from "./info.module.scss";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import InfoCard from "../components/InfoCard/infocard";
import ExchangeRankingCard from "../components/exchange-ranking/exchange-ranking";
import ChartSection from "../components/chart/chart-section";

function Info() {
  let { coinId } = useParams();

  const [coinDetails, setCoinDetails] = useState();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["coinDetails"],
    queryFn: () => getSpecificCoinDetails(coinId),
    enabled: !!coinId,
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
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Sidebar />

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
