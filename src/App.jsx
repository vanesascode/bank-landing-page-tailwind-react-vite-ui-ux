import styles from "./styles";

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <>
    {/* NAVBAR */}
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>

    {/* HERO */}
    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* OTHERS */}
    <div className={`${styles.flexStart}  ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
        <Clients /> <CTA /> <Footer />
      </div>
    </div>
  </>
);

export default App;
