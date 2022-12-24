"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, index, title, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 1)}
    className="flex"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[260px] w-full h-[170px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[26px] text-[20px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[15px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
