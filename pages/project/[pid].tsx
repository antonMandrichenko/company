import React from "react";
import Layer from "../../components/Layer";
import ServicesLayout from "../../components/Services/ServicesLayout";
import { useRouter } from "next/router";

// interface IProps {
//   // image: any;
//   // project: IProject;
//   // href: string;
//   // marginTop: number;
//   // marginButton: number;
//   // text: string;
// }

export default function Project(props: any): React.ReactElement {
  const router = useRouter();
  const { pid } = router.query;
  console.log(props);
  return (
    <Layer>
      <ServicesLayout>
        <div>{pid}</div>
      </ServicesLayout>
    </Layer>
  );
}
