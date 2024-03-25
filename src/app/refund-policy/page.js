import Container from "@/Components/Container";
import Header from "@/Components/shared/Header";
import Navbar from "@/Components/shared/Navbar";
import data from "../../Components/data/refund.json";
import React from "react";
import Footer from "@/Components/shared/Footer";

const RefundPolicy = ({ title }) => {
  return (
    <div>
      <Navbar />
      <Header title={"Refund Policy "} />
      <Container>
        <div className="mt-4 my-2">
          <div>
            {data.map((refund, i) => (
              <div className="mb-2">
                <h2 className="text-[20px] lg:text-[23px] font-semibold text-primary border-b-2 border-primary pb- inline-block py-1">
                  {refund.title}
                </h2>
                <p className="text-[#000000] text-[18px] lg:text-[19px] py-3 lg:py-4">
                  {refund.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
