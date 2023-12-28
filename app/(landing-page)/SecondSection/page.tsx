"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tabs = [
  {
    name: "Marketing Teams",
    title: "Deliver impactful marketing startegies",
    feature1: "Campaign planning",
    feature2: "Content creating",
    feature3: "Social media management",
    image: "/images/tab-1.webp",
  },
  {
    name: "IT Teams",
    title: "Automate and streamline IT requests",
    feature1: "Reduce digital friction for better team velocity",
    feature2: "Track and manage work across teams",
    feature3: "Automate processes for approvals",
    image: "/images/tab-2.webp",
  },

  {
    name: "Operations Teams",
    title: "Drive operational efficiency",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Unblock teams to hit revenue goals",
    image: "/images/tab-3.webp",
  },
  {
    name: "Project Management",
    title: "Manage projects more efficiently",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Track resources, goals and progress in one place",
    image: "/images/tab-4.webp",
  },
  {
    name: "Strategic Planning",
    title: "Align teams to execute winning strategies",
    feature1: "Track work and see progress in real time",
    feature2: "Set annual plans to deliver results",
    feature3: "See real-time insights to stay on track and on budget",
    image: "/images/tab-1.webp",
  },
];

const SecondSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center p-10 md:py-20"
    >
      <div className="flex items-center justify-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)
            `,
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
          className="border-b md:flex md:space-x-20 md:py-10"
        >
          <div className="space-y-10">
            <div className="mr-10 text-3xl font-semibold">
              80% teams say SAAS helps them move faster
            </div>
            <div className="flex items-center text-xl cursor-pointer space-x-9 hover:text-rose-400">
              See how customers use SAAS
              <ArrowRight className="w-6 h-6 ml-4" />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid items-center justify-center grid-cols-2 py-10 md:flex md:space-x-10"
        >
          <Image
            src="/images/logo/logo-13.svg"
            width={150}
            height={150}
            alt="logo"
          />
          <Image
            src="/images/logo/logo-8.svg"
            width={150}
            height={150}
            alt="logo"
          />
          <Image
            src="/images/logo/logo-9.svg"
            width={150}
            height={150}
            alt="logo"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden py-20 pt-10 text-3xl md:text-5xl md:block"
      >
        See how teams use SAAS
      </motion.div>

      <div className="items-center justify-center hidden md:flex">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex justify-center items-center space-x-10 w-60 cursor-pointer ${
              activeTab === tab
                ? "border-b-4 border-gray-500 text-gray-800"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex items-center justify-center w-20 h-20 text-3xl text-center">
              {tab.name}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden pt-10 md:block ">
        {activeTab && (
          <div className="flex justify-center ">
            <div className="h-[525px] w-[700px] flex-col bg-gray-200 pt-10 rounded-l-xl px-20 shadow-md shadow-gray-500/50">
              <p className="py-10 text-3xl">{activeTab.title}</p>
              <div className="items-center justify-center space-y-10">
                <ul className="flex space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-500" />
                  <li>{activeTab.feature1}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-500" />
                  <li>{activeTab.feature2}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-500" />
                  <li>{activeTab.feature3}</li>
                </ul>
              </div>
            </div>
            <div className="h-[525px] w-[700px] bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-r-xl flex shadow-md shadow-gray-500/50">
              <Image
                src={activeTab.image}
                alt="image"
                width={530}
                height={530}
                className="rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecondSection;
