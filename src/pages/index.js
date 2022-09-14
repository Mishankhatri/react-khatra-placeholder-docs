import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src="./img/showLogo.png" alt="logo" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ margin: "2rem 0" }}>
          {siteConfig.tagline}
        </p>
        <div className={`${styles.buttons} row`}>
          <Link
            className="button button--secondary button--lg"
            style={{ margin: "0 1rem" }}
            to="/docs/Demo"
          >
            Demo
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A react component library for creating skeleton placeholders."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
