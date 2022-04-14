import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  return (
    <header class="py-36 text-center">
      <h2 class="text-6xl font-extrabold">
        Build apps even faster with
        <br /> components on top of Ionic Framework.
      </h2>
      <h3 class="text-2xl font-bold py-10 text-slate-500">
        Start developing with an open-source library of over 100+ web components{" "}
        <br />
        and interactive elements built with Ionic Framework.
      </h3>
      <div class="flex justify-center gap-4">
        <a
          href="/docs/getting-started/introduction"
          class="text-white hover:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get started
        </a>
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Explore components
        </button>
      </div>
    </header>
  );
}

function GridItem({ title }) {
  return (
    <div class="block shadow rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      <div class="flex items-center bg-slate-100 h-12 px-4">
        <h3 class="text-slate-600 font-semibold text-lg">{title}</h3>
      </div>
      <div class="h-80"></div>
    </div>
  );
}

/**
 * Build apps even faster with components on top of Ionic Framework.
 */

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div class="text-center">
          <h3 class="text-4xl font-extrabold py-8">Ionic UI Components</h3>
          <p class="font-bold text-xl text-slate-500">
            Explore the whole collection of open-source web components and{" "}
            <br />
            interactive elements built with Ionic Framework.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-20 max-w-screen-lg mx-auto">
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
          <GridItem title="Ionic Modal" />
        </div>
      </main>
    </Layout>
  );
}
