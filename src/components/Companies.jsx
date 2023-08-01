import React from "react";
import amazon from "../assets/amazon.png";
import razorpay from "../assets/razorpay.png";
import adobe from "../assets/adobe.png";
import google from "../assets/google.png";
import airbnb from "../assets/airbnb.png";
import flipkart from "../assets/flipkart.png";
import swiggy from "../assets/swiggy.png";
import uber from "../assets/uber.png";
import intel from "../assets/intel.png";
import cred from "../assets/cred.png";
import intuit from "../assets/intuit.png";
import paytm from "../assets/paytm.png";
import { motion } from "framer-motion";

export default function Companies() {
  return (
    <div className=" my-20 md:mt-80 md:mb-20 w-full px-6">
      <h3 className="text-2xl md:text-4xl font-serif text-blue-500 font-bold text-center mb-10">
        Top Featured Companies
      </h3>
      <div className="flex flex-col gap-8">
        <motion.div
          className="flex md:w-10/12 w-full mx-auto md:justify-evenly justify-between"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3 }}
        >
          <img
            src={amazon}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={adobe}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={google}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={razorpay}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
        </motion.div>
        <motion.div
          className="flex md:w-10/12 w-full mx-auto md:justify-evenly justify-between"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3 }}
        >
          <img
            src={flipkart}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={swiggy}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={airbnb}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={uber}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
        </motion.div>
        <motion.div
          className="flex md:w-10/12 w-full mx-auto md:justify-evenly justify-between"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3 }}
        >
          <img
            src={intel}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={paytm}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={intuit}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
          <img
            src={cred}
            alt=""
            className="w-[10%] object-contain min-w-[60px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
