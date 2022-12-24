"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <div className="relative">
        <img src="./map.png" alt="global" className="mt-20 object-cover" />

        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="absolute xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] z-10 bottom-[20%] right-[12%] border-2 rounded-full drop-shadow-xl p-[6px] bg-[#5D6680]/50 border-none"
        >
          <img
            src="./people-01.png"
            alt="people"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="absolute xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] z-10 top-[10%] left-[12%] border-2 rounded-full drop-shadow-xl p-[6px] bg-[#5D6680]/50 border-none"
        >
          <img
            src="./people-02.png"
            alt="people"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1.1, 1)}
          className="absolute xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] z-10 top-[45%] left-[48%] border-2 rounded-full drop-shadow-xl p-[6px] bg-[#5D6680]/50 border-none"
        >
          <img
            src="./people-03.png"
            alt="people"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="absolute xl:w-[270px] xl:h-[200px]  w-[170px] h-[100px] z-10 top-[37%]  left-[20%] border-2  rounded-[20px] drop-shadow-xl p-[8px] bg-[#5D6680]/50 border-none"
        >
          <img
            src="./planet-02.png"
            alt="people"
            className="w-full h-full object-cover  opacity rounded-[20px]"
          />
          <span className="text-white absolute bottom-6 tracking-wide text-sm xl:text-xl font-semibold left-6">
            The Upside Down
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="absolute xl:w-[270px] xl:h-[200px]  w-[170px] h-[100px] z-10 top-[10%]  right-[20%] border-2  rounded-[20px] drop-shadow-xl p-[8px] bg-[#5D6680]/50 border-none"
        >
          <img
            src="./planet-03.png"
            alt="people"
            className="w-full h-full object-cover  opacity rounded-[20px]"
          />
          <span className="text-white absolute bottom-6 tracking-wide text:sm xl:text-xl font-semibold left-6">
            Hawkins Labs
          </span>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default World;
