import HTMLContetnt from "./skill-contents/html-content";
// import TypeScriptContetnt from "./skill-contents/typescript-content";
import CssContent from "./skill-contents/css-content";
import JavascriptContent from "./skill-contents/javascript-content";
import ReactContent from "./skill-contents/react-content";
import NextContent from "./skill-contents/next-content";
import GitContent from "./skill-contents/git-content";
import ApiContent from "./skill-contents/api-content";
import StateManagersContent from "./skill-contents/state-managers-content";
import UiLibContent from "./skill-contents/ui-lib-content";
// import { title } from "process";



export const SKILLS = [
  {
    title: "HTML",
    content: <HTMLContetnt />,
  },
  {
    title: "CSS",
    content: <CssContent />,
  },
  {
    title: "Javascript",
    content: <JavascriptContent />,
  },

  {
    title: "React.js",
    content: <ReactContent />,
  },
  {
    title: "Next.js",
    content: <NextContent />,
  },
  {
    title: "API",
    content: <ApiContent />,
  },
  {
    title: "State Managers",
    content: <StateManagersContent />,
  },
  {
    title: "UI Libraries",
    content: <UiLibContent />,
  }
  ,{
    title:"Git & Github",
    content :  <GitContent />
  }
];
