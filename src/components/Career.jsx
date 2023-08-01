import React from "react";
import careerImg from "../assets/career.png";
import { motion } from "framer-motion";

export default function Career() {
  return (
    <div className="flex md:flex-row-reverse flex-col-reverse justify-between items-center w-8/12 md:w-10/12 mx-auto my-20">
      <motion.div
        className="flex flex-col items-start md:w-[45%]"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 4 }}
      >
        <h3 className="text-3xl text-purple-600 font-mono mb-2">
          Ready to start your Dream Career ?
        </h3>
        <p className="font-sans mb-8 text-purple-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde ut
          est accusamus totam non repellendus? Reprehenderit tempora nam
          laudantium adipisci laboriosam assumenda eum explicabo.
        </p>
        <button className="bg-purple-600 text-white font-semibold h-10 w-40 hover:border-2 hover:border-purple-600 hover:text-purple-600 hover:bg-white rounded-md">
          Get Started
        </button>
      </motion.div>
      <motion.img
        src={careerImg}
        className="w-full md:w-1/3 min-w-[270px] max-w-[400px] h-[300px]"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 4 }}
      />
    </div>
  );
}
