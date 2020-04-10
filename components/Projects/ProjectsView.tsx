import React from "react";
import ProjectBlock from "../../components/Home/SelectedProjects/ProjectBlock";
import Margin from "./Margin";
import AppButton from "../../components/Home/AppButton";
import { IProject } from "../../constants/projects";

interface IProps {
  image: any;
  project: IProject;
  href: string;
  marginTop: number;
  marginButton: number;
  as?: string;
}

export default function ProjectsView({
  image,
  project,
  href,
  as,
  marginTop,
  marginButton,
}: IProps): React.ReactElement {
  return (
    <React.Fragment>
      <Margin size={marginTop} />
      <ProjectBlock project={project} image={image} />
      <Margin size={marginButton} />
      <AppButton text="See details" href={href} as={as}/>
    </React.Fragment>
  );
}
