import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";

// TODO: add publishable key
const stipePromise = loadStripe("");

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please pay to eat"}
      ></SectionTitle>
      <div>
        <h2 className="text-3xl">taka o pakhi tumi oira oira aso</h2>
      </div>
    </div>
  );
};

export default Payment;
