import React from "react";
import { v4 } from "uuid";
import Layer from "../components/Layer";
import MainPageTitle from "../components/MainPagetTitle";
import ServicesLayout from "../components/Services/ServicesLayout";
import { projects } from "../constants/projects";
import images, { ImagesOptions } from "../assets";
import ProjectsView from "../components/Projects/ProjectsView";
import { Grid } from "@material-ui/core";
import Margin from "../components/Projects/Margin";

export default function Projects() {
  const imageSelect = (key: string) => {
    const imagesObject: ImagesOptions = {
      dygma: images.dygmaProjects,
      infinity: images.infinity,
      smarthLife: images.smarthLife,
      friendFilter: images.friendFilter,
      humanos: images.humanos,
      insurance: images.insurance,
      lunie: images.lunie,
      maxihost: images.maxihost,
      taxFinance: images.taxFinance,
    };
    return imagesObject[key];
  };
  return (
    <Layer>
      <ServicesLayout>
        <MainPageTitle text="Projects" />
        <ProjectsView
          image={imageSelect(projects[0].image)}
          project={projects[0]}
          href={"./project"}
          marginTop={8}
          marginButton={1}
        />
        <Margin size={4} />
        <Grid container spacing={6}>
          {projects.slice(1).map((project, index) => (
            <Grid item xs={12} sm={6} key={v4()}>
              <ProjectsView
                image={imageSelect(project.image)}
                project={project}
                as={`./project/${index}`}
                href={`./project/[pid]`}
                marginTop={index & 1 ? 4 : 0}
                marginButton={1}
              />
            </Grid>
          ))}
        </Grid>
      </ServicesLayout>
    </Layer>
  );
}
