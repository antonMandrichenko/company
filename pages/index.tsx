import React from "react";
import MainTitle from "../components/Home/MainTitle";
import Layer from "../components/Layer";
import LearnMore from "../components/Home/LearnMore";
import FirstSlide from "../components/Home/FirstSlide";
import ProjectsPreview from "../components/Home/ProjectsPreview";
import SelectedProjects from "../components/Home/SelectedProjects";

export default function Index() {
  const onScrollDown = () => {
    scrollTo({
      top: innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <Layer>
      <FirstSlide>
        <MainTitle />
        <LearnMore onScrollDown={onScrollDown} />
      </FirstSlide>
      <ProjectsPreview />
      <SelectedProjects />
    </Layer>
  );
}
