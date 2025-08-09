import {
  allEnglishWritings,
  allGermanWritings,
} from "@/.content-collections/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import defaultComponents from "fumadocs-ui/mdx";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";

export async function generateStaticParams() {
  return [...allEnglishWritings, ...allGermanWritings].map((writing) => ({
    slug: writing._meta.path,
    locale: writing.locale,
  }));
}
export async function generateMetadata(props: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = [...allEnglishWritings, ...allGermanWritings].find(
    (post) => post._meta.path === params.slug && post.locale === params.locale
  );
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const post = [...allEnglishWritings, ...allGermanWritings].find(
    (post) => post._meta.path === params.slug && post.locale === params.locale
  );
  if (!post) return notFound();
  return (
    <article className="min-h-screen container items-center justify-center flex-col">
      <div className="flex flex-col max-w-[600px] mx-auto p-0">
        <div className="container prose prose-invert prose-lg my-5">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-base text-gray-400 mb-10">{post.summary}</p>
          <MDXContent
            code={post.mdx}
            components={{
              ...defaultComponents,
              pre: ({ ref: _ref, ...props }) => (
                <CodeBlock {...props} keepBackground className="font-mono">
                  <Pre>{props.children}</Pre>
                </CodeBlock>
              ),
            }}
          />
        </div>
      </div>
    </article>
  );
}
