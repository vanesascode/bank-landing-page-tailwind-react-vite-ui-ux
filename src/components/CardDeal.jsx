import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section>
    <div className={layout.section}>
      {/*LEFT SIDE */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Whether you're looking for a low-interest rate or generous rewards,
          we've got you covered. Our platform allows you to effortlessly compare
          and find the ideal card deal that suits your needs.
        </p>

        <Button styles={`mt-10`} />
      </div>

      {/*RIGHT SIDE */}
      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[90%] h-[90%]" />
      </div>
    </div>
  </section>
);

export default CardDeal;
