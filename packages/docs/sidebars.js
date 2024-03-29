/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  siteSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/introduction"],
    },
    {
      type: "category",
      label: "Components",
      items: [
        "components/empty-state",
        "components/pagination",
        "components/rating",
        "components/timeline",
      ],
    },
    {
      type: "category",
      label: "Application UI",
      items: [
        {
          type: "category",
          label: "Education & Learning",
          items: ["industry-learning/learning-path"],
        },
        {
          type: "category",
          label: "Fitness & Health",
          items: ["industry-learning/learning-path"],
        },
        {
          type: "category",
          label: "Social Media",
          items: [
            "social-media/profile",
            "social-media/stories",
            "social-media/search",
          ],
        },
        {
          type: "category",
          label: "Authentication",
          items: [
            "authentication/login",
            "authentication/registration",
            "authentication/account-recovery",
          ],
        },
        {
          type: "category",
          label: "E-commerce",
          items: ["industry-learning/learning-path"],
        },
      ],
    },
    {
      type: "category",
      label: "Patterns",
      items: [
        {
          type: "category",
          label: "Navigation & Routing",
          items: ["industry-learning/learning-path"],
        },
      ],
    },
  ],
};

module.exports = sidebars;
