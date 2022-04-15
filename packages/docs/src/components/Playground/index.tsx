import React from "react";

import { CodePreview } from "docusaurus-plugin-code-preview";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { useColorMode } from "@docusaurus/theme-common";

import {
  openAngularEditor,
  openHtmlEditor,
  openReactEditor,
  openVueEditor,
} from "./stackblitz.utils";

export default function Playground(props) {
  const { colorMode } = useColorMode();

  return (
    <CodePreview
      viewport={{
        viewports: [
          {
            name: "iOS",
            src: (baseUrl) => `${baseUrl}?ionic:mode=ios`,
          },
          {
            name: "MD",
            src: (baseUrl) => `${baseUrl}?ionic:mode=md`,
          },
        ],
        defaultViewport: "iOS",
      }}
      output={{
        outputs: [
          {
            name: "JavaScript",
            value: "javascript",
          },
          {
            name: "React",
            value: "react",
          },
          {
            name: "Angular",
            value: "angular",
          },
          {
            name: "Vue",
            value: "vue",
          },
        ],
        defaultOutput: "javascript",
      }}
      onOpenOutputTarget={(output, codeBlock) => {
        switch (output) {
          case "angular":
            openAngularEditor(codeBlock);
            break;
          case "react":
            openReactEditor(codeBlock);
            break;
          case "vue":
            openVueEditor(codeBlock);
            break;
          case "javascript":
            openHtmlEditor(codeBlock);
            break;
        }
      }}
      controls={{
        stackblitz: true,
      }}
      defaultExpanded={false}
      isDarkMode={colorMode === "dark"}
      {...props}
      src={useBaseUrl(props.src)}
    />
  );
}
