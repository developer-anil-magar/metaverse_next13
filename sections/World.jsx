'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="|People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
)}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-80 left-40 w-[140px] h-[100px] p-[6px] rounded-xl bg-[#5d6680]">
          <img
            src="map-01.png"
            alt="map"
            className="w-full h-full"
          />
          <div className="absolute top-[50%] flex">
            <img
              src="/people-02.png"
              alt="people"
              className="w-6 h-6"
            />
            <img
              src="/people-01.png"
              alt="people"
              className="w-6 h-6 -ml-3"
            />
            <img
              src="/people-03.png"
              alt="people"
              className="w-6 h-6 -ml-3"
            />
            <h3 className="text-gray-300 text-[8px] ml-2 mt-2">
              264 has joined
            </h3>

          </div>
          <h1 className="text-white text-[10px] absolute top-[75%]">
            The Upside Down
          </h1>
          <div className="absolute top-0  w-32 h-24 gradient-purple opacity-[30%]" />
        </div>
        <div className="absolute top-20 right-60 w-[140px] h-[100px] p-[6px] rounded-xl bg-[#5d6680]">
          <img
            src="map-02.png"
            alt="map"
            className="w-full h-full"
          />
          <div className="absolute top-[50%] flex">
            <img
              src="/people-02.png"
              alt="people"
              className="w-6 h-6"
            />
            <img
              src="/people-01.png"
              alt="people"
              className="w-6 h-6 -ml-3"
            />
            <img
              src="/people-03.png"
              alt="people"
              className="w-6 h-6 -ml-3"
            />
            <h3 className="text-gray-300 text-[8px] ml-2 mt-2">
              264 has joined
            </h3>

          </div>
          <h1 className="text-white text-[10px] absolute top-[75%]">
            Hawkins Lab
          </h1>
          <div className="absolute top-0  w-32 h-24 gradient-purple opacity-[30%]" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
