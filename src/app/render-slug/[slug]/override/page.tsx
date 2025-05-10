import { redirect } from "next/navigation";
import React from "react";
import { validSlugs } from "../page";

export default function ExamplePage({ params }: { params: any }) {
  const { slug }: { slug: any } = React.use(params);
  if (validSlugs.includes(slug)) {
    redirect("..");
  }
  return <h1>{decodeURIComponent(slug).toUpperCase()}</h1>;
}

export async function generateMetadata({ params }: { params: any }) {
  return {
    title: (await params).slug,
  };
}
