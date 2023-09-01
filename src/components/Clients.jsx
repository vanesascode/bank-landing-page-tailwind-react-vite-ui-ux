import { clients } from "../constants";
import { useState } from "react";
import styles from "../styles";

const Clients = () => {
  const [emphasis, setEmphasis] = useState(false);

  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className={`cursor-pointer sm:w-[192px] w-[100px] object-contain ${
                emphasis === client.logo ? "invert" : ""
              }`}
              onMouseOver={() => setEmphasis(client.logo)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
