import { unified } from "unified";
import rehypeReact from "rehype-react";
import * as prod from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { Link } from "react-router";
import React from "react";

// Mock custom components
const Callout = () => <div>Callout</div>;

const customComponents = {
  callout: Callout,
  a: (props: any) => <Link {...props} to="/test" />
};

const hast = {
  type: "root",
  children: [
    {
      type: "element",
      tagName: "a",
      properties: { href: "/test" },
      children: [{ type: "text", value: "Link" }]
    }
  ]
};

try {
  const processor = unified().use(rehypeReact, {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
    components: customComponents as any,
  } as any);

  const contentResult = processor.stringify(processor.runSync(hast));
  console.log("contentResult is React Element?", React.isValidElement(contentResult));
  console.log("contentResult type:", typeof contentResult);
  console.log("contentResult keys:", Object.keys(contentResult));
  
  // Try to render it
  renderToString(<div>{contentResult as any}</div>);
  console.log("Render successful!");
} catch (e) {
  console.error("Caught Error:", e);
}
