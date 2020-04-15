import React from "react";
import MainTitle from "../components/Home/MainTitle";
import Layer from "../components/Layer";
import LearnMore from "../components/Home/LearnMore";
import FirstSlide from "../components/Home/FirstSlide";
import ProjectsPreview from "../components/Home/ProjectsPreview";
import SelectedProjects from "../components/Home/SelectedProjects";
import Clients from "../components/Home/Clients";
import Loading from "../components/Loading";

export default function Index() {
  const onScrollDown = () => {
    scrollTo({
      top: innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <Layer>
      <Loading/>
      <FirstSlide>
        <MainTitle />
        <LearnMore onScrollDown={onScrollDown} />
      </FirstSlide>
      <ProjectsPreview />
      <SelectedProjects />
      <Clients />
    </Layer>
  );
}
