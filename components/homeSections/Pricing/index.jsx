import React from "react";
import {PiSealCheckDuotone} from "react-icons/pi";
import {Button} from "@nextui-org/react";


const Pricing = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <div className=" px-4 mx-auto max-w-screen-xl ">
        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
  <span className="mb-2 block text-4xl font-semibold text-primary">
    Pricing
  </span>
          <h2
            className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            Our Pricing Plans
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Choose the perfect pricing plan that suits your needs.
          </p>
        </div>

        <div
          className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Card */}
          <div
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-lg border border-zinc-100 shadow dark:border-zinc-600 xl:p-8 dark:bg-zinc-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Free</h3>
            <p
              className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">
              Best option for personal use &amp; for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$0</span>
              <span className="text-zinc-500 dark:text-zinc-400">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Team size: <span className="font-semibold">1 developer</span>
            </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Premium support: <span className="font-semibold">6 months</span>
            </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Free updates: <span className="font-semibold">6 months</span>
            </span>
              </li>
            </ul>
            <Button color={"primary"} fullWidth={true} className={"rounded"}>
              Get started
            </Button>
          </div>
          {/* Pricing Card */}
          <div
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-lg border border-zinc-100 shadow dark:border-zinc-600 xl:p-8 dark:bg-zinc-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
            <p
              className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">
              Relevant for multiple users, extended &amp; premium support.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$99</span>
              <span className="text-zinc-500 dark:text-zinc-400">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Team size: <span className="font-semibold">10 developers</span>
            </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Premium support: <span className="font-semibold">24 months</span>
            </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Free updates: <span className="font-semibold">24 months</span>
            </span>
              </li>
            </ul>
            <Button color={"primary"} fullWidth={true} className={"rounded"}>
              Get started
            </Button>
          </div>
          {/* Pricing Card */}
          <div
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-lg border border-zinc-100 shadow dark:border-zinc-600 xl:p-8 dark:bg-zinc-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p
              className="font-light text-zinc-500 sm:text-lg dark:text-zinc-400">
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$499</span>
              <span className="text-zinc-500 dark:text-zinc-400">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Team size: <span className="font-semibold">100+ developers</span>
            </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Premium support: <span className="font-semibold">36 months</span>
            </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <PiSealCheckDuotone fontSize={24}
                                    className="flex-shrink-0  text-green-500 dark:text-green-400"/>
                <span>
              Free updates: <span className="font-semibold">36 months</span>
            </span>
              </li>
            </ul>
            <Button color={"primary"} fullWidth={true} className={"rounded"}>
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Pricing