"use client";
import { motion } from "framer-motion";
import { ExploreCard, TypingText } from "../components";
import styles from "../styles";
import { exploreWorlds } from "../constants";
import { useState } from "react";
import { staggerContainer } from "../utils/motion";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false }}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => {
            return (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
