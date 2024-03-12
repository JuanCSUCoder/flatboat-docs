import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: null,
    description: (
      <>
        Flatboat was designed to provide the best developer experience with{" "}
        <strong>ROS2 workflow</strong>, running over <strong>Docker</strong> and{" "}
        <strong>K8s</strong>.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: null,
    description: (
      <>
        Stop thinking about compatibility and replicability issues. With
        Flatboat you can just focus on your implementation.
      </>
    ),
  },
  {
    title: "Powered by Rust",
    Svg: null,
    description: (
      <>
        This CLI tool was developed with Rust, to ensure low level
        system-control and memory safety. :D
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
