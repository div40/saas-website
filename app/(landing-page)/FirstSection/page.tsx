"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section className="py-10 md:py-20 space-y-10 bg-[#E5E4E2]">
      <div className="container mx-auto text-center md:w-1/2">
        <div className="flex justify-center pb-10 text-5xl md:px-20">
          The Best platform for Cross-Functional work
        </div>
        <p className="mb-10 text-lg md:text-xl">
          With SAAS, you can drive clarity and impact at scale by connecting
          work and workflows to company-wide goals.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="px-6 text-lg bg-black rounded-none hover:bg-black">
            Get Started
          </Button>
          <Button className="px-6 text-lg text-black transition bg-white border border-black rounded-none hover:bg-rose-200">
            See how it works
          </Button>
        </div>
      </div>
      <div className="items-center justify-center px-2 mx-auto space-y-10 md:pt-10 md:flex md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-1.webp"}
            alt="hero-image"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-2.webp"}
            alt="hero-image"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-3.webp"}
            alt="hero-image"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
