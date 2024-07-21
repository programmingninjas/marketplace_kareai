"use client"
import { SignedIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import Checkout from "@/components/Checkout";
import Sidebar from "@/components/sidebar";

const Credits = () => {
  const { user } = useUser();
//   const router = useRouter();

  useEffect(() => {
    if (!user) {
    //   router.push("/sign-in");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div className="p-11 bg-slate- overflow-hidden">
      {/* <Sidebar/> */}
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section className="-py  m-5  shadow-violet- rounded-md overflow-hidden">
        <ul className="credits-list ">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item">
              <div className="flex-center flex-col gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-20-semibold mt-2 text-purple-500">
                  {plan.name}
                </p>
                <p className="h1-semibold text-dark-600">${plan.price}</p>
                <p className="p-16-regular">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button variant="outline" className="credits-btn">
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  {/* <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user.id} // changed from user._id to user.id
                  /> */}
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Credits;
