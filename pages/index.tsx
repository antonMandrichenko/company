import React, { useRef } from "react";
import MainTitle from "../components/Home/MainTitle";
import Layer from "../components/Layer";
import LearnMore from "../components/Home/LearnMore";
import FirstSlide from "../components/Home/FirstSlide";

export default function Index() {
  const divRef = useRef<HTMLDivElement>(null);
  const onScrollDown = () => {
    console.log("smoooth");
    if (divRef && divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Layer>
      <FirstSlide>
        <MainTitle />
        <LearnMore onScrollDown={onScrollDown} />
      </FirstSlide>

      <div style={{ height: "120vh" }}></div>
      <div ref={divRef}></div>
    </Layer>
  );
}
