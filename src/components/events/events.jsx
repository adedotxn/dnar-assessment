import linkSvg from "../../assets/link.svg";
import styles from "./events.module.scss";

const Events = () => {
  return (
    <section className={styles.all_events}>
      <h1>Events</h1>
      <div className={styles.events__list}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
          <div key={idx} className={styles.event__card}>
            <h2>Token2049 London</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              expedita incidunt officia.
            </p>

            <div className={styles.event__link}>
              <a href="">
                <img src={linkSvg} alt="Go see event" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
