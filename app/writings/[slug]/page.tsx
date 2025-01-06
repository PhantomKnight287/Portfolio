import { allWritings } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import defaultComponents from "fumadocs-ui/mdx";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";

export async function generateStaticParams() {
  return allWritings.map((writing) => ({ slug: writing._meta.path }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allWritings.find((post) => post._meta.path === params.slug);
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

export default async function Page(props: { params: { slug: string } }) {
  const post = allWritings.find(
    (post) => post._meta.path === props.params.slug
  );
  if (!post) return notFound();
  return (
    <main className="min-h-screen container items-center justify-center flex-col">
      <div className="flex flex-col max-w-[512px] mx-auto p-5 lg:p-0">
        <div className="container prose prose-invert prose-lg mt-5">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-base text-gray-400 mb-10">{post.summary}</p>
          <MDXContent
            code={post.mdx}
            components={{
              ...defaultComponents,
              pre: ({ ref: _ref, ...props }) => (
                <CodeBlock {...props} keepBackground>
                  <Pre>{props.children}</Pre>
                </CodeBlock>
              ),
            }}
          />
        </div>
      </div>
    </main>
  );
}
