import React from "react";
import Layer from "../components/Layer";
import MainPageTitle from "../components/MainPagetTitle";
import ServicesLayout from "../components/Services/ServicesLayout";
import Development from "../components/Services/Development";
import OtherServices from "../components/Services/OtherServices";

export default function Services() {
  return (
    <Layer>
      <ServicesLayout>
        <MainPageTitle text="Services" />
        <Development />
        <OtherServices />
      </ServicesLayout>
    </Layer>
  );
}
