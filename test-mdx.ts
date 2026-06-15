import { unified } from "unified";
import rehypeReact from "rehype-react";
import * as prod from "react/jsx-runtime";
import * as React from "react";

const hast = {
  type: "root",
  children: [{ type: "element", tagName: "div", properties: {}, children: [{ type: "text", value: "hello" }] }]
};

const processor = unified().use(rehypeReact, {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
} as any);

const content = processor.stringify(processor.runSync(hast));
console.log(content);
