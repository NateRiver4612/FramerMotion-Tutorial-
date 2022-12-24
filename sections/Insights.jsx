"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
    >
      <TypingText title="| Insight" />
      <TitleText title={<>Insight about metaverse</>} />
      <div className="mt-[50px] flex flex-col gap-[40px]">
        {insights.map((insight, index) => {
          return (
            <InsightCard
              key={insight.title + index}
              index={index}
              {...insight}
            ></InsightCard>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default Insights;
