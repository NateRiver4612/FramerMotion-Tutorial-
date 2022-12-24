"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, textContainer, textVariant2 } from "../utils/motion";

const ExploreCard = ({ id, index, active, title, imgUrl, handleClick }) => {
  return (
    <motion.div
      onClick={() => {
        handleClick(id);
      }}
      variants={fadeIn("right", "spring", index * 0.2, 0.6)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    >
      <img
        src={imgUrl}
        alt={`planet-${index}`}
        className="absolute h-full w-full object-cover rounded-[20px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className=" absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
        >
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
