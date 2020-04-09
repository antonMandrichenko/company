import React from "react";
import Layer from "../components/Layer";
import MainPageTitle from "../components/MainPagetTitle";
import ServicesLayout from "../components/Services/ServicesLayout";
import Development from "../components/Services/Development";

export default function Services() {
  return (
    <Layer>
      <ServicesLayout>
        <MainPageTitle text="Services" />
        <Development/>
      </ServicesLayout>
    </Layer>
  );
}
