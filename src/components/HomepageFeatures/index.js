import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Robust Yet Extensible",
    Svg: require("@site/static/img/robustPlaceholder.svg").default,
    description: (
      <>
        React Khatra Placeholder uses compound component pattern which makes it
        robust yet extensible.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/builtWithReact.svg").default,
    description: (
      <>
        Create your customizable placeholder for your websites. Let your
        visitors aniticipate your delightful content.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row ">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
