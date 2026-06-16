import React, { useMemo } from "react";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import { Callout, VersionBadge, DeprecatedBadge, Property } from "./CustomMDX";
import { Link } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

interface MDXRendererProps {
  htmlAstStr: string;
  locale?: string;
  branch?: string;
}

export function MDXRenderer({ htmlAstStr, locale, branch }: MDXRendererProps) {
  const customComponents = useMemo(() => ({
    callout: Callout,
    versionbadge: VersionBadge,
    deprecatedbadge: DeprecatedBadge,
    property: Property,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      let src = props.src;
      if (
        src &&
        !src.startsWith("http") &&
        !src.startsWith("data:") &&
        !src.startsWith("/") &&
        locale &&
        branch
      ) {
        const cleanSrc = src.replace(/^\.\//, "");
        src = `/${locale}/${encodeURIComponent(branch)}/${cleanSrc}`;
      }
      return (
        <img
          {...props}
          src={src}
          className="rounded-lg border border-border shadow-sm my-6"
          loading="lazy"
          alt={props.alt ?? ""}
        />
      );
    },
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      let href = props.href;
      if (
        href &&
        !href.startsWith("http") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("#") &&
        !href.startsWith("/") &&
        locale &&
        branch
      ) {
        const cleanHref = href.replace(/^\.\//, "");
        href = `/${locale}/${encodeURIComponent(branch)}/${cleanHref}`;
        return (
          <Link
            {...(props as any)}
            to={href}
            className="text-accent hover:underline font-medium"
          />
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a {...props} href={href} className="text-accent hover:underline font-medium" />
        );
      }
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline font-medium"
        />
      );
    },
  }), [locale, branch]);

  const ast = useMemo(() => {
    try {
      return JSON.parse(htmlAstStr);
    } catch {
      return null;
    }
  }, [htmlAstStr]);

  const content = useMemo(() => {
    if (!ast) return null;

    const hast = ast.hast ?? ast;
    if (!hast || !hast.type) return null;

    try {
      const processor = unified().use(rehypeReact, {
        Fragment,
        jsx,
        jsxs,
        components: customComponents as any,
      } as any);

      return processor.stringify(processor.runSync(hast)) as React.ReactElement;
    } catch (e) {
      // Silent failure in production — the error boundary above will catch catastrophic cases
      if (process.env.NODE_ENV !== "production") {
        console.error("[MDXRenderer] Failed to compile HAST:", e);
      }
      return null;
    }
  }, [ast, customComponents]);

  if (!content) {
    return (
      <div className="text-muted-foreground text-sm py-8 text-center">
        Failed to render content.
      </div>
    );
  }

  return <div className="markdown-body">{content}</div>;
}
