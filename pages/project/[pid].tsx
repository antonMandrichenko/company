import React, { useState } from "react";
import Layer from "../../components/Layer";
import ServicesLayout from "../../components/Services/ServicesLayout";
import { useRouter } from "next/router";
import { projects } from "../../constants/projects";

// interface IProps {
//   // image: any;
//   // project: IProject;
//   // href: string;
//   // marginTop: number;
//   // marginButton: number;
//   // text: string;
// }

export default function Project(): React.ReactElement {
  const router = useRouter();
  const { pid } = router.query;
  const [project] = useState(projects.find((project) => project.image === pid));
  return (
    <Layer>
      <ServicesLayout>
        <div>{project && project.title}</div>
      </ServicesLayout>
    </Layer>
  );
}
