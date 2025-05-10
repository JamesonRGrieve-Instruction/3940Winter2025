import React from "react";
export const validSlugs = ["hello", "welcome", "goodbye"];
export default function ExamplePage({ params }: { params: any }) {
  const { slug }: { slug: any } = React.use(params);
  return <h1>{slug.toUpperCase()}</h1>;
}
export function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug: slug,
  }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: any }) {
  return {
    title: (await params).slug,
  };
}
