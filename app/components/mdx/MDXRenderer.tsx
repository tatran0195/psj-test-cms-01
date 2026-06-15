import React, { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import { Callout, VersionBadge, DeprecatedBadge, Property } from "./CustomMDX";

interface MDXRendererProps {
  htmlAstStr: string; // The JSON string of the HTML AST from server
}

const customComponents = {
  callout: Callout,
  versionbadge: VersionBadge,
  deprecatedbadge: DeprecatedBadge,
  property: Property,
};

export function MDXRenderer({ htmlAstStr }: MDXRendererProps) {
  // Parse AST back from JSON string
  const ast = useMemo(() => {
    try {
      return JSON.parse(htmlAstStr);
    } catch {
      return null;
    }
  }, [htmlAstStr]);

  // Compile AST to React Elements using rehype-react
  const content = useMemo(() => {
    if (!ast) return null;
    
    const hast = ast.hast || ast;
    if (!hast || !hast.type) return null;
    
    // We use unified to process the parsed hast (HTML AST)
    const processor = unified().use(rehypeReact, {
      Fragment: runtime.Fragment,
      jsx: (runtime as any).jsx,
      jsxs: (runtime as any).jsxs,
      components: customComponents as any,
    });
    
    return processor.stringify(processor.runSync(hast)) as any;
  }, [ast]);

  if (!content) return <div>Failed to render content</div>;

  return (
    <div className="markdown-body">
      {content}
    </div>
  );
}