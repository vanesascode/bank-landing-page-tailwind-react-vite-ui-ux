import { quotes } from "../assets";
import styles from "../styles";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />

    <p className={`${styles.paragraph} my-10 text-white`}>{content}</p>

    {/* pic name and title */}
    <div className="flex flex-row ">
      <div className="flex flex-col justify-center">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      </div>
      <div className="ml-5 flex flex-col ">
        <div className="text-white font-poppins font-semibold text-[20px] leading-[32px] ">
          {name}
        </div>
        <div className="text-dimWhite font-poppins font-extralight text-[16px] leading-[24px] ">
          {title}
        </div>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
